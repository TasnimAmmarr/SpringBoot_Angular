import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './components/home/home.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
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
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsListComponent,
    CategoriesListComponent,
    QuestionDetailsComponent,
    AddQuestionComponent,
    NotfoundComponent,
    NavbarComponent,
    TestComponent,
    GestionComponent,
    UsersComponent,
    GetUserComponent,
    ReponsesListComponent,
    AddReponseComponent,
    ModifierQuestionComponent,
    AddCategoryComponent,
    ModifierCategorieComponent,
    AddUserComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatCheckboxModule,
    NgxPaginationModule,
    
 
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
