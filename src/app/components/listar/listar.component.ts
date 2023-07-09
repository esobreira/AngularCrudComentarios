import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  constructor(private service: ComentarioService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getComentarios();
  }

  listComentarios: Comentario[] = [];

  // listComentarios: Comentario[] = [
  //   { titulo: "Angular", criador: "Eberton", data_criacao: new Date(), texto: "Framework para SPA" },
  //   { titulo: "React", criador: "Gabriele", data_criacao: new Date(), texto: "Lib para SPA" }
  // ]

  getComentarios() {
    this.service.getListComentarios()
      .subscribe(data => {
        //console.log(data);
        this.listComentarios = data;

      },
        error => {
          console.log(error);
        })
  }

  excluirComentario(id?: number) {
    this.service.deleteComenrario(id)
      .subscribe(data => this.getComentarios()
      , error => console.log(error));
    }
}
