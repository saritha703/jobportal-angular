import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  jobs: any = {}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:1337/jobs").subscribe((response) => {
      console.log(response)
      this.jobs = response;
    })
  }

}
