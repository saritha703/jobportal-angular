import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  jobDetails: any ={}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
handlepostjob(){
  console.log(this.jobDetails)
  this.http.post("https:/jsonplaceholder.typicode.com/posts",this.jobDetails).subscribe((response)=>{

  })
}
}
