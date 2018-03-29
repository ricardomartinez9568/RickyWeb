import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BlogService } from '../_services/Blog/blog.service';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentService } from '../_services/comment/comment.service';
import { error } from 'util';



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
  text: String;
  replies: [
    {
      name: String;
      text: String;
    }
  ];
  createdDate: Date;
}

interface CommentInterface {
  discussionId: String;
  name: String;
  text: String;
  replies: [
    {
      name: String;
      text: String;
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
  public comment: Comment;
  public newComment: Comment;
  public blog: NewBlog;
  public headerID;
  public cycleComments;




  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private commentService: CommentService) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      this.pullData();
    });
  }

  ngOnInit() {

  }

  pullData() {

    const headers = new HttpHeaders().set('ID', this.headerID);

    this.blog = new NewBlog;
    // HTTP Get Blogs
    this.http.get(baseUrl + '/blog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: NewBlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      });
    // HTTP Get Comments
    this.http.get(baseUrl + '/comment', { headers })
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.cycleComments = this.comment;
        console.log(this.comment);
      });
    this.comment = new Comment;
    this.newComment = new Comment;
  }

 onSubmit() {
    this.newComment.discussionId = this.headerID;
    console.log(this.newComment);
    this.commentService.comment(this.newComment)
      .subscribe((res: ServerResponse) => {
        if (error) {
          throw error;
        }
        console.log(res);
      });
  }
}
