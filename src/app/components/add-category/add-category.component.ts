import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service:CategorieService,private router:Router) { }
  save(f:NgForm)
  {
    let fd:FormData=new FormData();

    fd.append("file",this.file)
    let categorie:Categorie=f.value
    console.log(JSON.stringify(categorie))
    fd.append("categorie",JSON.stringify(categorie))
    this.service.addCategorie(fd).subscribe(
      ()=>this.router.navigate(["/Categories"])
    )

  }
  file!:File;

  ngOnInit(): void {
  }

}
