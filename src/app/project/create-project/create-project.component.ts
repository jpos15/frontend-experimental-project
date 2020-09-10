import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/_models/project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  cadastroForm!: FormGroup;
  project: Project = new Project();

  alterar: boolean = false;
  loading: boolean = false;

  authors = [
    { name: 'User1' },
    { name: 'User2' },
    { name: 'User3' }
  ];

  locations = [
    { name: 'Local1' },
    { name: 'Local2' },
    { name: 'Local3' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private projectService$: ProjectService,
    private router: Router,) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.cadastroForm = this.formBuilder.group({
      title: [!this.alterar ? '' : this.project?.title, [Validators.required]],
      thema: [!this.alterar ? '' : this.project?.thema, [Validators.required]],
      technicalArea: [!this.alterar ? '' : this.project?.technicalArea, [Validators.required]],
      author: [!this.alterar ? '' : this.project?.author, [Validators.required]],
      local: [!this.alterar ? '' : this.project?.local, [Validators.required]],
    });
  }

  limparForm() {
    this.cadastroForm.reset({
      title: '',
      thema: '',
      technicalArea: '',
      author: '',
      local: ''
    });
    (document.querySelector('[name="email"]') as HTMLElement).focus();
  }

  atualizarDadosObjeto() {
    this.project = Object.assign({}, this.project, this.cadastroForm.value);
  }

  onSubmit() {

    this.atualizarDadosObjeto();

    console.log(this.project);
    this.loading = true;
    if (!this.alterar) {
      this.adicionar();
    }
  }

  adicionar() {
    this.projectService$.create(this.project)
      .subscribe(retorno => {
        this.loading = false;
        this.router.navigate(['/project']);
      });
  }
}
