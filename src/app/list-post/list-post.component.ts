import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  index: number; 
  posts: any;
  myDate: any;

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.posts =  this.todoService.list();
    this.myDate = this.todoService.getDate();
  }

  delete(index){
      this.todoService.deleteTODO(index);
      location.reload();
      
    }

}
