import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { IDog } from './dog';
import {MatDialog} from '@angular/material';
import { DogDetailsComponent } from '../dog-details/dog-details.component';

@Component({
  selector: 'app-find-dog',
  templateUrl: './find-dog.component.html',
  styleUrls: ['./find-dog.component.css']
})
export class FindDogComponent implements OnInit {

  public dogs: IDog[];

  public dogForDelete;
  constructor(private DS: DogService,public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.DS.getDogs().subscribe (
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
