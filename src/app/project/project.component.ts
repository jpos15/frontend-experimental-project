import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Docs } from '../_models/docs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  docs: Docs[] = [];

  constructor(private projectService$: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.spinner.show();
    this.projectService$.get()
      .subscribe(retorno => {
        this.docs = retorno.result.docs;
        this.spinner.hide();
      }),
      error => {
        alert(error);
        this.spinner.hide();
      }
  }
}
