import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from '../app/service/auth.service';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireDatabase,AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DataService} from './service/data.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'home'},
      {path:'home',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'home',component:HomeComponent},
      {path:'details',component:DetailsComponent}])
         ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
