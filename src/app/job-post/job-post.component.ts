import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  jobDetails: any = {}
  jobId: any = ''

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')
    console.log(this.jobId)
    if (this.jobId) {
      this.http.get("http://localhost:1337/jobs/" + this.jobId).subscribe((response) => {
        console.log(response)
        this.jobDetails = response;
      })
    }
  }
  handleJobPost() {
    console.log(this.jobDetails)
    if (this.jobId)
      this.http.patch("http://localhost:1337/jobs/" + this.jobId, this.jobDetails).subscribe((response) => {
        console.log(response)

      })
  
 else{
      this.http.post("http://localhost:1337/jobs/", this.jobDetails).subscribe((response) => {
      console.log(response)
  })
  }
  }
}
