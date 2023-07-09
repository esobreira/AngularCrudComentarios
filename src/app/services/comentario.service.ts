import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private myUrl = 'https://localhost:7230/';
  private myApi = 'api/comentario/';

  constructor(private http: HttpClient) { }

  getListComentarios() : Observable<any> {
    return this.http.get(this.myUrl + this.myApi);
  }

  getComentario(id: number): Observable<any> {
    return this.http.get(this.myUrl + this.myApi + id);
  }

  deleteComenrario(id? : number): Observable<any> {
    return this.http.delete(this.myUrl + this.myApi + id);
  }

  incluirComentario(comentario: Comentario): Observable<any> {
    return this.http.post(this.myUrl + this.myApi, comentario);
  }

  editarComentario(comentario: Comentario): Observable<any> {
    return this.http.put(this.myUrl + this.myApi + comentario.id, comentario);
  }

}
