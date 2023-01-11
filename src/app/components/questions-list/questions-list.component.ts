import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(private serviceCat:CategorieService, private service:QuestionService, private router:Router, private ar:ActivatedRoute) { }

  questions!:Question[]
  categories!:Categorie[]
  questionsFiltre!:Question[]
  filterTerm!: string;
  id!:string;


  getAllQuestions(){
    this.service.getAllQuestions().subscribe(
      (data) => {this.questions=data
      this.questionsFiltre=this.questions;
      } 
    );
  }

  getQuestionByCategorie(idc:number){
    this.service.getQuestionByCategorie(idc).subscribe(
      (data) => {this.questions=data
      this.questionsFiltre=this.questions;
      }
    );
  }
 

  filtrer(mot:string)
  { return this.questions.filter(
  x=>x.text.indexOf(mot)!=-1)

  }

  ngOnInit(): void {

    this.serviceCat.getAllCategories().subscribe(
      (data)=>this.categories=data
    );

    this.ar.paramMap.subscribe(
      (params) => {
        let idc = +params.get("idc")!;
        if(idc==0)
        {this.getAllQuestions();}
        else
        {this.getQuestionByCategorie(idc);}
      }
    );
  }
  filterCategorie(idc:number)
  {
    if(idc==0)
    {this.getAllQuestions();}
    else
    {this.getQuestionByCategorie(idc);}
  }
  


  getCouleur(q :number)
  {
   return q==0?"red":"green";
  }




  delete(p:Question)
  {
    Swal.fire({
      title: 'Etes vous sur?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteQuestion(p.id).subscribe(
          () => {
            this.questions=this.questions.filter(x=>x.id!=p.id);
            this.questionsFiltre=this.questionsFiltre.filter(x=>x.id!=p.id);
            Swal.fire(
              'Supprimé!',
              'La question a été supprimée.',
              'success'
            )
          }
        );
      }
    })
  }

  update()
  {Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
  }).then((result) => {
  /* Read more about isConfirmed, isDenied below
  */
  if (result.isConfirmed) {
  let fd:FormData=new FormData();
 
  let quest:Question=this.questionsFiltre[0];

  fd.append("questions",JSON.stringify(quest))
  
  this.service.updateQuestion(fd).subscribe(
  ()=>{
    this.questions=this.questions.filter(x=>x.id!=quest.id);
  }
  )
  Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
  Swal.fire('Changes are not saved', '', 
  'info')
  }
  })



} }

