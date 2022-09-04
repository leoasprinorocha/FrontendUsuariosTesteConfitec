import { DetalhesusuarioComponent } from './../detalhesusuario/detalhesusuario.component';
import { AdicionausuarioComponent } from './../adicionausuario/adicionausuario.component';

import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Usuario } from 'src/app/Models/usuario';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  closeResult = '';
  displayedColumns: string[] = [
    'Nome',
    'Email',
    'DataNascimento',
    'Escolaridade',
    'Editar',
    'Excluir'
  ];

  usuarioCarregado!: Usuario;


  dataSource!: MatTableDataSource<any>;
  constructor(private usuarioService: UsuarioService,
    private router : Router,
    private dialogRef: MatDialog,
    private detalhesUsuario: DetalhesusuarioComponent) { }

  ngOnInit(): void {
    debugger
    this.usuarioService.recuperaTodosUsuarios().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => console.log('Error : ', error)
    );
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirModalCancelamento(idmodal: any, idusuario: number){
    debugger
    ($(`#${idmodal.id}`) as any).modal('show');
    $(`#${idmodal.id}`).attr('idusuario', idusuario);
  }

  fecharModalCancelamento(idmodal: any){
    debugger
    ($(`#${idmodal.id}`) as any).modal('hide');
  }

  confirmaExclusao(idmodal: any){
    debugger
    var idUsuario = Number($(`#${idmodal.id}`).attr('idusuario'));

    this.usuarioService.excluirUsuario(idUsuario).subscribe(
      (data) => {
        alert(`${data.message}`);
        ($(`#${idmodal.id}`) as any).modal('hide');
        window.location.href = '';
      },

    );
  }

  carregarDetalheUsuario(event: any) {
    debugger
    var idUsuario = Number(event.target.dataset.idusuario);
    this.usuarioService.idUsuario = idUsuario;
    this.detalhesUsuario.abreModalEdicaoUsuario();

  }

  RecuperaNomeEscolaridade(value : number) {
    var nome = EscolaridadeEnum[value];
    return nome;
  }

  abreCadastroUsuario(){
    this.dialogRef.open(AdicionausuarioComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal'
    })
  }
  fechaCadastroUsuario(){
      this.dialogRef.closeAll();
  }

}

export enum EscolaridadeEnum {
  Infatil = 1,
  Fundamental = 2,
  Médio = 3,
  Superior = 4,
}
