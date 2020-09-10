import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Docs } from '../_models/docs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  docs: Docs[] = [];

  constructor(private projectService$: ProjectService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.projectService$.list()
      .subscribe( retorno => {
        this.docs = retorno.result.docs;
      });
  }
}
