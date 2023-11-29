import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string []=[];
  cursosService: any;

  constructor(private CursosService: CursosService ) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

  }
  onAddCurso(curso:string){
      this.cursosService.addCurso(curso);
  }

}
