import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-question',
  templateUrl: './modifier-question.component.html',
  styleUrls: ['./modifier-question.component.css']
})
export class ModifierQuestionComponent implements OnInit {
  formQuestion!: FormGroup;
  constructor(private service:QuestionService, private ar:ActivatedRoute,
    private fb:FormBuilder,private serviceCat:CategorieService,
    private router:Router) { }

    question!:Question;
    categories!:Categorie[];
    id!:string;
  
  ngOnInit(): void {

    this.serviceCat.getAllCategories().subscribe(
      (data) => {this.categories=data
      this.serviceCat.categories=data
      }
    );

    this.categories=this.serviceCat.categories
    this.id=this.ar.snapshot.paramMap.get('id')!;
    this.service.getQuestionById(this.id).subscribe(
      (data)=>{
        this.question=data;
        this.formQuestion=this.fb.group({
          categorie:[this.question.categorie,[Validators.required]],
          text:[this.question.text,[Validators.required]],
          

        })} );}

  compareCat(c:Categorie,cc:Categorie):boolean
  {return c && cc?c.id===cc.id:c===cc}

  update()
  {
    Swal.fire({
      title: 'Do you want to save the changes?',
showDenyButton: true,
showCancelButton: true,
confirmButtonText: 'Save',
denyButtonText: `Don't save`,
}).then((result) => {
  if(result.isConfirmed) {
    let fd:FormData=new FormData();
    let q:Question=this.formQuestion.value;
    q.id=this.question.id;
    fd.append('question',JSON.stringify(q));
    this.service.updateQuestion(fd).subscribe(
      () => {this.router.navigate(['/Questions'])}
    )
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')

  }

    })
  }

    
}


