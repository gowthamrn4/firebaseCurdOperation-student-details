import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import {DataService} from '../service/data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  // employees = [
  //   {name:"gowtham",email:"gowthamrn4@gmail.com"},
  //   {name:"gowtham45",email:"gowthamrn14@gmail.com"}
  // ];
  student={
    name:'',
    email:''
  }
  studentArray = [];
  showDeletedMessage:boolean;
  constructor(private dataservice:DataService) { }
  ngOnInit(){
 

    this.dataservice.getStudent().subscribe(
      list => {
            this.studentArray = list.map(item => {
              return {
                $key:item.key,
                ...item.payload.val()
              };
            })
      }
    );console.log("get"+this.studentArray)
    this.del;
  }
  del($key){
      this.dataservice.deleteStudent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage =false,3000);
  }
  populateForm($key){
    this.dataservice.updateStudent($key);
  }
  
}
