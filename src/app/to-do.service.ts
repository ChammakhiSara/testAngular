import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  addTODO(data) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(data);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  list() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
  }

  deleteTODO(i) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(i, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  getPostTODO(i) {   
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let currentPost = posts[i];
    return currentPost;
  }

  updateTODO(i, newData) {
    let posts = JSON.parse(localStorage.getItem('posts')) || []; 
    posts.splice(i, 1, newData);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  getDate(){
    let date = new Date;
    return date;
  }
}
