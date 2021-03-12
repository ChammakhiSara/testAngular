import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  categorieList: any = ['Sport', 'Téchnologie', 'Economie', 'Société', 'Culture'];
  dd: any;

  constructor(private todoService: ToDoService, private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    });
  }

  OnSubmit() {
    // validation de les inputs du formulaire
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    else {
      this.todoService.addTODO(this.myForm.value);
      
      this.myForm.reset();
      this.router.navigateByUrl('list-post');
      
    }
   
  }

}
