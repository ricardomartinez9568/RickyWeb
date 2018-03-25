import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BlogService } from '../_services/Blog/blog.service';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';


class NewBlog {
  Author: String;
  Content: String;
  ID: Number;
  timeStamp: Date;
}
interface NewBlogInterface {
  Author: String;
  Content: String;
  ID: Number;
  timeStamp: Date;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog: NewBlog;
  public headerID;
  public httpHead;


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
    });
  }

  ngOnInit() {
    this.blog = new NewBlog;
    this.http.get(baseUrl + '/blog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: NewBlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      });

    }
  }
