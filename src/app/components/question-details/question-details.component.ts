import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private service: QuestionService,private serviceRep:ReponseService) { }
  question!:Question;
  reponses!:Reponse[];
  ngOnInit(): void {
  
    let id = this.ar.snapshot.params['id'];
    this.service.getQuestionById(id).subscribe(
      (data)=>this.question=data
    );
  
 this.serviceRep.getByQuestion(id).subscribe(
    (data)=>this.reponses=data
  );
 }
}
