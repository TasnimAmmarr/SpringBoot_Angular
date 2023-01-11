import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reponse',
  templateUrl: './add-reponse.component.html',
  styleUrls: ['./add-reponse.component.css']
})
export class AddReponseComponent implements OnInit {

  constructor(private service:ReponseService, private serviceQuestion: QuestionService,private router:Router) { }
  Questions!:Question[];
  reponse!:Reponse;

  ngOnInit(): void {
    this.serviceQuestion.getAllQuestions().subscribe(
      (data)=>this.Questions=data
    )
      
      this.Questions=this.serviceQuestion.questions;
  }
  save(f:NgForm)
  { let fd:FormData=new FormData();
    fd.append("file",this.file)
    let reponse:Reponse=f.value
    console.log(JSON.stringify(reponse.questions))
    fd.append("reponse",JSON.stringify(reponse))
    this.service.saveReponse(fd).subscribe(
      ()=>this.router.navigate(["/Home"])


    )}
      
    file!:File;

}
