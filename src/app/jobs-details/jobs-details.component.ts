import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit {

  id: any = ''
  job: any = {}
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('jobId: ', this.id)

    this.http.get("http://localhost:1337/jobs/" + this.id).subscribe((response) => {
      console.log(response)
      this.job = response;
    })
  }
}
