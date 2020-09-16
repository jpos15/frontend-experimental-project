import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from 'src/app/_models/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project = new Project();
  authors = '';
  locations = '';

  constructor(
    private projectService$: ProjectService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let id = params['id'];
      if (id !== undefined) {

        this.spinner.show();
        this.projectService$.getOne(id)
          .subscribe(retorno => {
            this.project = retorno.result.docs[0];

            this.project.author.map((author: any) => {
              this.authors += `${author.name}, `;
            });

            this.project.local.map((local: any) => {
              this.locations += `${local.name}, `;
            });

            this.spinner.hide();
          }),
          error => {
            alert(error);
            this.spinner.hide();
          };
      }
    });
  }

}
