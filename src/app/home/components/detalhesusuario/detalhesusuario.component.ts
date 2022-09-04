import { Observable } from 'rxjs';
import { AdicionausuarioComponent } from './../adicionausuario/adicionausuario.component';
import { Component, Injectable, Input, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Escolaridade } from 'src/app/Models/escolaridade';
import { Usuario } from 'src/app/Models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhesusuario',
  templateUrl: './detalhesusuario.component.html',
  styleUrls: ['./detalhesusuario.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class DetalhesusuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novoUsuario!: Usuario;
  public escolaridades: Escolaridade[] = [];
  public idEscolaridadeForm: number = 0;
  public usuarioCarregado!: Usuario;
  public escolaridade: number = 0;
  public nome: string = '';
  public sobrenome: string = '';
  public email: string = '';
  public datanascimento: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialog,
    public adicionaUsuario: AdicionausuarioComponent,
  ) {
  }


  ngOnInit(): void {
    debugger
    this.usuarioService.recuperaUsuarioPorId(this.usuarioService.idUsuario).subscribe((data) => {
    this.usuarioCarregado = data;
    this.escolaridade = Number(this.usuarioCarregado.escolaridade);
    this.nome = String(this.usuarioCarregado.nome);
    this.sobrenome = String(this.usuarioCarregado.sobrenome);
    this.email = String(this.usuarioCarregado.email);
    this.datanascimento = String(this.usuarioCarregado.dataNascimento);

    this.usuarioService.recuperaEscolaridades().subscribe((data) => {
      this.escolaridades = data;
    });

    this.novoUsuarioForm = this.formBuilder.group({
      escolaridade: [this.escolaridade, [Validators.required]],
      nome: [this.nome, [Validators.required]],
      sobrenome: [this.sobrenome, [Validators.required]],
      email: [this.email, [Validators.required]],
      datanascimento: [this.datanascimento, [Validators.required]],
    });
    });

  }

  abreModalEdicaoUsuario(){
    this.dialogRef.open(DetalhesusuarioComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal'
    })
  }

  changeEscolaridade(event: any) {
    debugger
    this.idEscolaridadeForm = event.source.value;
  }

  alterarUsuario() {
    debugger;
    this.novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario;
    this.novoUsuario.escolaridade = this.idEscolaridadeForm;
    this.novoUsuario.id = this.usuarioService.idUsuario;

    this.usuarioService.alteraUsuario(this.novoUsuario).subscribe((data) => {
      alert(`${data.message}`);
      window.location.href = '';
    });
  }
}
