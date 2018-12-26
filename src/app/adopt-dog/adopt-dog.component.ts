import { Component, OnInit } from '@angular/core';
import { IDog } from '../find-dog/dog';
import { DogService } from '../find-dog/dog.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { DogDetailsComponent } from '../dog-details/dog-details.component';

@Component({
  selector: 'app-adopt-dog',
  templateUrl: './adopt-dog.component.html',
  styleUrls: ['./adopt-dog.component.css']
})
export class AdoptDogComponent implements OnInit {
  public dogs: IDog[];

  public dogForDelete;
  constructor(private DS: DogService,public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.DS.getHomelessDogs().subscribe (
      result => {
        console.log(result);
        this.dogs = result;
      },
      error => console.log(error)
    )
  }

  deleteDog(id) {
    this.DS.getDog(id).subscribe (
      result => {
        console.log(result);
        this.DS.deleteDog(id);
      },
      error => console.log(error)
    )
  }

  seeMore(dog : IDog):void {
    //console.log(dog.code);
    const dialogRef = this.dialog.open(DogDetailsComponent, {
      data: dog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 }
