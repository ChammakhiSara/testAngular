import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  myForm: FormGroup;
  submitted: boolean = false;
  index : any;
  myDate = Date.now();
  categorieList: any = ['Sport', 'Téchnologie', 'Economie', 'Société', 'Culture'];

  constructor(private todoService: ToDoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    });

    this.index = this.route.snapshot.params["index"];
    
    let currentPost = this.todoService.getPostTODO(this.index);
    
    this.myForm.patchValue(currentPost);
  }

  OnSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    else {
      this.todoService.updateTODO(this.index, this.myForm.value);
      this.router.navigateByUrl('list-post');
    }
  }

}

