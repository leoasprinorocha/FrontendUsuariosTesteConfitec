import { HttpResponse } from './../../Models/httpresponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppComponent } from 'src/app/app.component';
import { Usuario } from 'src/app/Models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Escolaridade } from 'src/app/Models/escolaridade';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  public idUsuario! : number;

  adicionaUsuario(novoUsuario: Usuario): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(
      `${AppComponent.apiUrl}Usuarios/AdicionaUsuario`,
      novoUsuario
    );
  }

  alteraUsuario(usuarioAlterado: Usuario): Observable<HttpResponse> {
    return this.httpClient.put<HttpResponse>(
      `${AppComponent.apiUrl}Usuarios/AlteraUsuario`,
      usuarioAlterado
    );
  }

  recuperaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(
      `${AppComponent.apiUrl}Usuarios/RetornaUsuarios`
    );
  }

  recuperaUsuarioPorId(idUsuario: number) : Observable<Usuario>{
    return this.httpClient.get<Usuario>(
      `${AppComponent.apiUrl}Usuarios/RetornaUsuarioPorId/${idUsuario}`
    );
  }

  excluirUsuario(idUsuario: number): Observable<HttpResponse> {
    return this.httpClient.delete<HttpResponse>(
      `${AppComponent.apiUrl}Usuarios/DeletaUsuario/${idUsuario}`
    );
  }

  recuperaEscolaridades(): Observable<Escolaridade[]> {
    return this.httpClient.get<Escolaridade[]>(
      `${AppComponent.apiUrl}Usuarios/RetornaEscolaridades`
    );
  }
}
