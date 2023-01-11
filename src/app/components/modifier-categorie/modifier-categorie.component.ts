import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {
  formCat!: FormGroup;
  constructor(private serviceCat:CategorieService,private ar:ActivatedRoute ,private fb:FormBuilder,private router:Router) { }

  categorie!:Categorie;
  id!:string;

  ngOnInit(): void {
    this.id=this.ar.snapshot.paramMap.get('id')!;
    this.serviceCat.getCategorieById(this.id).subscribe(
      (data)=>{
        this.categorie=data;
        this.formCat=this.fb.group({
          nom:[this.categorie.nom,[Validators.required]],
          
        })} );}
  

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
    let c:Categorie=this.formCat.value;
    c.id=this.categorie.id;
    fd.append('categorie',JSON.stringify(c));
    this.serviceCat.updateCategorie(fd).subscribe(
      (data)=>{
        this.router.navigate(['/Categories'])
      })

      
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')

  }

    })
  }

}
