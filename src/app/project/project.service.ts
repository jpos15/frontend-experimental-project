import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RetornoApi } from '../_models/retorno-api';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<RetornoApi>(`${environment.apiUrl}/project`);
  }

  getOne(id: string) {
    return this.http.get<RetornoApi>(`${environment.apiUrl}/project?id=${id}`);
  }

  post(project: Project) {
    return this.http.post(`${environment.apiUrl}/project`, project);
  }
}
