import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private serviceCat:CategorieService, private serviceQuestion:QuestionService, private router:Router) { }
  categories!:Categorie[];

  ngOnInit(): void {
    this.serviceCat.getAllCategories().subscribe(
      (data)=>this.categories=data
    )

    this.categories=this.serviceCat.categories;
  }
save(f:NgForm)
{
  let fd:FormData=new FormData();

  fd.append("file",this.file)
  let question:Question=f.value

  console.log(JSON.stringify(question.categorie))
  fd.append("question",JSON.stringify(question))
  this.serviceQuestion.saveQuestion(fd).subscribe(
    ()=>this.router.navigate(["/question"])
  )
}
file!:File;

}
