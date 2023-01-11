import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { TestComponent } from './components/test/test.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { UsersComponent } from './components/gestion/users/users.component';
import { GetUserComponent } from './components/gestion/get-user/get-user.component';
import { ReponsesListComponent } from './components/reponses-list/reponses-list.component';
import { AddReponseComponent } from './components/add-reponse/add-reponse.component';
import { ModifierQuestionComponent } from './components/modifier-question/modifier-question.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ModifierCategorieComponent } from './components/modifier-categorie/modifier-categorie.component';
import { AddUserComponent } from './components/gestion/add-user/add-user.component';


const routes: Routes = [
 {path: "Home" , component: HomeComponent},
 {path: "Questions" , component: QuestionsListComponent },
 {path: "Categories" , component: CategoriesListComponent},
 {path: "Categories/:id" , component: CategoriesListComponent},
 {path: "Questions/:id" , component: QuestionDetailsComponent},
 {path: "AjouterQuestion" , component: AddQuestionComponent},
 {path: "ModifierQuestion/:id" , component: ModifierQuestionComponent},
 {path: "ModifierCategorie/:id", component: ModifierCategorieComponent},
 {path: "Questions/categorie/:id" , component: QuestionsListComponent},
 {path: "Gestion" , component: GestionComponent},
 {path: "test" , component: TestComponent},
 {path: "Users" , component: UsersComponent},
 {path: "Users/:id" , component: GetUserComponent},
 {path: "Reponses", component: ReponsesListComponent},
 {path: "ajouterReponse", component: AddReponseComponent},
 {path: "ajouterCategorie" , component: AddCategoryComponent },
 {path: "ajouterUser" , component: AddUserComponent},
 {path: "" , redirectTo: "/Home" , pathMatch: "full"},
 {path:"**" ,component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
