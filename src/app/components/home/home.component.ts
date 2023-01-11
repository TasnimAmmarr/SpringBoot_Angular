import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions!:Question[];
  categories!:Categorie[];
  filterTerm!: string;
  id!:string;
  reponses!:Reponse[];
  reponseFilter!:Reponse[];


  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service:QuestionService, private serviceCat:CategorieService, private router:Router, private serviceRep:ReponseService) { }

  fetchQuestions(): void {
    this.service.getAllQuestions().subscribe(
      data => {
        this.questions = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchQuestions();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchQuestions();
  }


  getByCat(cat:Categorie)
  { this.service.getByCat(cat).subscribe(
    (data)=>this.questions=data
  )}

  save(f:NgForm)
  { let fd:FormData=new FormData();
    fd.append("file",this.file)
    let reponse:Reponse=f.value
    console.log(JSON.stringify(reponse.questions))
    fd.append("reponse",JSON.stringify(reponse))
    this.serviceRep.saveReponse(fd).subscribe(
      ()=>this.router.navigate(["/Home"])
    )}
    file!:File;

  ngOnInit(): void {
    this.fetchQuestions();

    this.serviceCat.getAllCategories().subscribe(
      (data)=>this.categories=data
    )

    this.categories=this.serviceCat.categories;



    this.service.getAllQuestions().subscribe(
      data => {
       this.questions = data;
      }
    ) 
  }
/*
  add(f:NgForm)
{
  Swal.fire({
    input: 'textarea',
    inputLabel: 'Ajouter une réponse',
    inputPlaceholder: 'Ajouter une réponse ...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true

  }).then((result) => {
    if (result.isConfirmed) {
      this.save(f);
    Swal.fire('Saved!', '', 'success')
    }})
    

  }*/
}