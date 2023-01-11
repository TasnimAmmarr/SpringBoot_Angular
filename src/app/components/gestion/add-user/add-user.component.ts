import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { DomaineService } from 'src/app/services/domaine.service';
import { Domaine } from 'src/app/models/domaine';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private service:UsersService,
    private router: Router, private serviceDom: DomaineService) { }
  
  domaines!:Domaine[];
  check = this.formBuilder.group({
    checkArray: [[] as Domaine[] ]
  });

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      photo: ['', Validators.required],
    });

    this.serviceDom.getAllDomaines().subscribe(
      (data)=>this.domaines=data
    )
    this.domaines=this.serviceDom.domaines;
  

  }

  save(f:NgForm)
  {
    let fd:FormData=new FormData();
    fd.append("file",this.file)
    let user:User=f.value;

    console.log(JSON.stringify(user));
    fd.append("user",JSON.stringify(user));

    //fd.append("domaines",JSON.stringify(this.check.value.checkArray));
    console.log(JSON.stringify(this.check.value.checkArray));
    this.service.addUser(fd).subscribe(
      ()=>this.router.navigate(['/Home'])
       
    )

   
  }file!:File
  selectimage(event:any)
  {
    this.file=event.target.files[0];
  }
  onDomaineChange(event:any){
  }


}