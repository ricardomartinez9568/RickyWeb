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
class Comment {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
  createdDate: Date;
}

interface CommentInterface {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
  createdDate: Date;
}

interface ServerResponse {
  type: boolean;
  data: any;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog: NewBlog;
  public headerID;
  public comment: Comment;
  public cycleComments;




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
    this.http.get(baseUrl + '/postComments')
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.cycleComments = this.comment;
        console.log(this.comment);
      });
    this.comment = new Comment;
  }

onSubmit() {
  this.comment.discussionId = this.headerID;
  console.log(this.comment);
  this.commentService.comment(this.comment)
    .subscribe((res: ServerResponse) => {
      console.log(res);
    });
}}
