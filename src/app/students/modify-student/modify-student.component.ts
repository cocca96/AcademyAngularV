import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../IStudent';
import { studentService } from '../student.service';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css']
})
export class ModifyStudentComponent implements OnInit {
  // student:IStudent|undefined;
  student: any = {};
  studentForm:FormGroup;
  sesso:boolean = true;
  constructor(private fb:FormBuilder,private router:Router,private studentService: studentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentForm=this.fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      codiceFiscale: ['', [Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
      dataDiNascita:['', [Validators.required]],
      indirizzo:['', [Validators.required]],
      mail:['', [Validators.required,Validators.email]],
      telefono:['', [Validators.required]],
      titoloDiStudio:['', [Validators.required]],
      sesso:[this.sesso,[Validators.required] ]
      
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      const param = +id;
      this.getStudent(param);
     
    }
    
  }
  getStudent(id: number): void {
    this.studentService.findStudent(id).subscribe({
      next: student1 => this.student = student1
    
    });
    
  };
  modify(){
    this.studentService.updateStudent(this.student).subscribe({
      next: data=> console.log(data)
    })

  }
  isFieldInvalid(fieldName:string):boolean|undefined{
    return (this.studentForm.get(fieldName)?.touched || this.studentForm.get(fieldName)?.dirty) && !this.studentForm.get(fieldName)?.valid;


  }
 
  

}
