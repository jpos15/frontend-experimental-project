import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/_models/project';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.criarFormulario();

    this.route.params.subscribe(params => {

      let id = params['id'];
      this.alterar = id !== undefined;
      if (this.alterar) {

        this.spinner.show();
        this.projectService$.getOne(id)
          .subscribe(retorno => {
            this.project = retorno.result.docs[0];
            this.criarFormulario();
            this.spinner.hide();
          }),
          error => {
            alert(error);
            this.spinner.hide();
          };
      }
    });
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

    this.loading = true;
    if (!this.alterar) {
      this.adicionar();
    }
  }

  adicionar() {
    this.projectService$.post(this.project)
      .subscribe(retorno => {
        this.loading = false;
        this.router.navigate(['/project']);
      });
  }
}
