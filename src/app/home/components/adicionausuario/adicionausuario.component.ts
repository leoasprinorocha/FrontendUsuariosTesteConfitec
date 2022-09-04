import { Usuario } from 'src/app/Models/usuario';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escolaridade } from 'src/app/Models/escolaridade';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionausuario',
  templateUrl: './adicionausuario.component.html',
  styleUrls: ['./adicionausuario.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AdicionausuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novoUsuario!: Usuario;
  public escolaridades: Escolaridade[] = [];
  public idEscolaridadeForm: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialog
  ) {}

  changeEscolaridade(event: any) {
    this.idEscolaridadeForm = event.source.value;
  }

  cadastrarUsuario() {
    debugger;
    this.novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario;
    this.novoUsuario.escolaridade = this.idEscolaridadeForm;

    this.usuarioService.adicionaUsuario(this.novoUsuario).subscribe((data) => {
      alert(`${data.message}`);
      window.location.href = '';
    });
  }

  fechaCadastroUsuario(){
    this.dialogRef.closeAll();
  }

  ngOnInit(): void {
    debugger;
    this.usuarioService.recuperaEscolaridades().subscribe((data) => {
      this.escolaridades = data;
    });
    this.novoUsuarioForm = this.formBuilder.group({
      escolaridade: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      datanascimento: ['', [Validators.required]],
    });
  }
}
