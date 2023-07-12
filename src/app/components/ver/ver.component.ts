import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {

  id: number;
  comentario: Comentario | undefined;

  constructor(private route: ActivatedRoute, private service: ComentarioService) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    //console.log(this.id);
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getComentario();
}

  getComentario() {
    this.service.getComentario(this.id).subscribe(data => {
      //console.log(data);
      this.comentario = data;
    })
  }
}
