import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import {HomeComponent} from '../home/home.component';
import {Student} from '../service/student'
@Injectable({
    providedIn:'root'
})
export class DataService{   
    constructor(private firebase:AngularFireDatabase){}
    studentList:AngularFireList<any>;
    form = new FormGroup({
        $key:new FormControl('null'),
        name:new FormControl('',Validators.required),
        email:new FormControl('',Validators.email),
        phone:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),





    });
    getStudent(){
        this.studentList = this.firebase.list('students');
        return this.studentList.snapshotChanges();
    } 
 
    insertStudent(student:Student){
        console.log("name"+this.studentList)
        this.studentList.push({
            name:student.name,
            email:student.email,
            phone:student.phone,
            age:student.age,
            address:student.address,
                    }); 
 };
 updateStudent(student:Student){
   this.form.setValue(student);
 } 
updateStudent1(student:Student){
    this.studentList.update(student.$key,
        {
            name:student.name,
            email:student.email,
            phone:student.phone,
            age:student.age,
            address:student.address,
        });
    }
        deleteStudent($key:string){
            this.studentList.remove($key);
        }
}