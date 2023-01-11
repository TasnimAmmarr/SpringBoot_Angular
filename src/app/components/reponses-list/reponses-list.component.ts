import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-reponses-list',
  templateUrl: './reponses-list.component.html',
  styleUrls: ['./reponses-list.component.css']
})
export class ReponsesListComponent implements OnInit {

  constructor(private service:ReponseService, private serviceQuestion:QuestionService,private ar:ActivatedRoute) { }
  reponses!:Reponse[];
  questions!:Question[];
  reponsesFiltre!:Reponse[];
  filterTerm!: string;
  
  getAllReponses(){
    this.service.getAllReponses().subscribe(
      (data) => {this.reponses=data
        this.reponsesFiltre=this.reponses;
      }
    );
  }

  getByQuestion(idq:number)
  { this.service.getByQuestion(idq).subscribe(
    (data)=> {this.reponses=data
    this.reponsesFiltre=this.reponses;
  }
  );
}
 
  ngOnInit(): void {
  
    this.serviceQuestion.getAllQuestions().subscribe(
      (data)=>{this.questions=data}
    );

    this.ar.paramMap.subscribe(
      (params) => {
        let idq = +params.get("idq")!;
        if(idq==0)
        {this.getAllReponses();}
        else
        {this.getByQuestion(idq)}
      }
    );
  }
    filterQuestion(idq:number)
    {
      if(idq==0)
      {this.getAllReponses();}
      else
      {this.getByQuestion(idq);}
    
     }

    }