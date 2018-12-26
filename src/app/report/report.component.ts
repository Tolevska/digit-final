import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogService } from '../find-dog/dog.service';
import { Status, Gender } from '../find-dog/dog';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  Status = Status;
  Gender = Gender;
  reportForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _dogService: DogService) { }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      id: [],
      status: Status.homeless,
      code: ['',Validators.required],
      size: ['',Validators.required],
      gender: [null,Validators.required],
      location: ['',Validators.required],
      breed: ['',Validators.required],
      description: ['',Validators.required],
      image: ['',Validators.required],
      deleted: false
    });
  }

  
  reportDog():void{
    console.log(this.reportForm);
    let dog = {
      id: 0,
      status: this.reportForm.controls.status.value,
      code: this.reportForm.controls['code'].value,
      size: this.reportForm.controls['size'].value,
      gender: this.reportForm.controls['gender'].value === Gender.male ? 'male' : 'female',
      location: this.reportForm.controls['location'].value,
      breed: this.reportForm.controls['breed'].value,
      description: this.reportForm.controls['description'].value,
      imageUrl: this.reportForm.controls['image'].value,
      deleted: this.reportForm.controls.deleted.value
    }
    // console.log(dog);
    console.log(status);
    
    if(dog.status === 0 ) {
      this._dogService.addDog(dog);
      this.router.navigate(["/find"]);
    }
    else {
      this._dogService.addDog(dog);
      this.router.navigate(["/adopt"]);
    }
    
  }

}
