import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent {

  agregarComentario: FormGroup;
  id: number;
  comentario: Comentario | undefined;
  mode: string = 'novo';
  texto_acao: string = "Incluir";

  constructor(private fb: FormBuilder,
    private service: ComentarioService,
    private router: Router,
    private route: ActivatedRoute) {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    //console.log(this.id);

    if (this.id > 0) {
      this.mode = 'edit';
    }

    this.agregarComentario = this.fb.group(
      {
        titulo: ['', Validators.required],
        criador: ['', Validators.required],
        texto: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.mode == 'edit') {
      this.texto_acao = 'Editar';
      this.service.getComentario(this.id).subscribe(data => {
        //console.log(data);
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          criador: data.criador,
          texto: data.texto,
        })
        // this.agregarComentario = this.fb.group(
        //   {
        //     titulo: [data.titulo, Validators.required],
        //     criador: [data.criador, Validators.required],
        //     texto: [data.texto, Validators.required],
        //   }
        // )
      }, error => {
        'Erro ao obter dados do Id. ' + error
      })
    }

  }

  submeter() {
    if (this.mode == 'edit') {
      this.editar();
    } else {
      this.agregar();
    }
  }

  agregar() {
    //console.log(this.agregarComentario);

    const comentario: Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      criador: this.agregarComentario.get('criador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      data_criacao: new Date,
    }

    this.service.incluirComentario(comentario)
      .subscribe(data => {
        this.router.navigate(['/']);
      },
        error => {
          console.log('Erro ao incluir: ' + error);
        })

  }

  editar() {
    //console.log(this.agregarComentario);

    const comentario: any = {
      id: this.id,
      titulo: this.agregarComentario.get('titulo')?.value,
      criador: this.agregarComentario.get('criador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      //data_criacao: new Date,
    }

    this.service.editarComentario(comentario)
      .subscribe(data => {
        this.router.navigate(['/']);
      },
        error => {
          console.log('Erro ao salvar: ' + error);
        })

  }

}
