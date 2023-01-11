import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private service:CategorieService ) { }
  categories!:Categorie[]
  categoriesFiltre!:Categorie[]
  id!:string;
  ngOnInit(): void {
    this.service.getAllCategories().subscribe(
      (data) => {this.categories=data
      this.service.categories=data
      }
    );
  }

  getCouleur(q :number)
  {
   return q==0?"red":"green";
  }
  delete(c:Categorie)
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
        this.service.deleteCategorie(c.id).subscribe(
          () => {
            this.categories=this.categories.filter(x=>x.id!=c.id);
            this.categoriesFiltre=this.categoriesFiltre.filter(x=>x.id!=c.id);
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

}
