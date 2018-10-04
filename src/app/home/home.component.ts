import { Component, OnInit } from '@angular/core';
import{DataService} from '../service/data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   getData:any;
   message:boolean;
   updateMessage:boolean;
   submitted:boolean;
  constructor(private dataservice:DataService) { }
  formControls = this.dataservice.form.controls;
  
  ngOnInit() {
    
  }
  onSubmit()
 {
   this.submitted =true;
  
   if (this.dataservice.form.valid){
    if(this.dataservice.form.get('$key').value == null)
    this.dataservice.insertStudent(this.dataservice.form.value);
   console.log(this.dataservice.form.value);
  
   this.dataservice.form.setValue({
    $key: null,
    name: '',
    email: '',
    phone:'',
    age:'',
    address:'',
    
  });
  this.message=true;
  setTimeout(() => this.message = false,3000);
   }
  
 }
 update(value)
 {
   this.dataservice.updateStudent1(value);
   this.updateMessage = true;
   setTimeout(() => this.updateMessage =false,3000);
   console.log(value)
 }
  
  
 
}
