import { Injectable } from '@angular/core';
import { IDog, Status } from './dog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private DOGS : IDog[] = [
    {
      id: 1,
      status: Status.adopted,
      code: 16152,
      size: "small",
      breed: "labrador" , 
      gender:"male",
      description: "small, tiny, white",
      location: "Skopje,Karpos 4",
      imageUrl:  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2015%2F03%2FGolden-Retriever-Playing-Among-Flowers.jpg&f=1"
  }
  // {
  //   "id": 2,
  //   "status": Status.adopted,
  //   "code": 16552,
  //   "size": "big",
  //   "breed": "street dog" , 
  //   "gender":"female",
  //   "description": "black",
  //   "location": "Kumanovo",
  //   "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // },
  // {
  //   "id": 3,
  //   "status":Status.adopted,
  //   "code": 16332,
  //   "size": "big",
  //   "breed": "street dog" , 
  //   "gender":"female",
  //   "description": "black",
  //   "location": "Veles",
  //   "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // },
  // {
  //   "id": 4,
  //   "status":Status.adopted,
  //   "code": 16533,
  //   "size": "big",
  //   "breed": "street dog" , 
  //   "gender":"female",
  //   "description": "white",
  //   "location": "Skopje, Kisela Voda",
  //   "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // },
  // {
  //   "id": 1,
  //   "status":Status.homeless,
  //   "code": 16152,
  //   "size": "small",
  //   "breed": "labrador" , 
  //   "gender":"male",
  //   "description": "small, tiny, white",
  //   "location": "Skopje,Karpos 4",
  //   "imageUrl":  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2015%2F03%2FGolden-Retriever-Playing-Among-Flowers.jpg&f=1"
  // },
  // {
  // "id": 2,
  // "status":Status.homeless,
  // "code": 16552,
  // "size": "big",
  // "breed": "street dog" , 
  // "gender":"female",
  // "description": "black",
  // "location": "Kumanovo",
  // "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // },
  // {
  // "id": 3,
  // "status":Status.homeless,
  // "code": 16332,
  // "size": "big",
  // "breed": "street dog" , 
  // "gender":"female",
  // "description": "black",
  // "location": "Veles",
  // "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // },
  // {
  // "id": 4,
  // "status":Status.homeless,
  // "code": 16533,
  // "size": "big",
  // "breed": "street dog" , 
  // "gender":"female",
  // "description": "white",
  // "location": "Skopje, Kisela Voda",
  // "imageUrl":  "src/images/dog-breed-labrador.jpg"
  // }
    ]

  constructor() { }

  public ID: number;

  getDogs ():Observable<IDog[]> {
    return of(this.DOGS.filter(d => d.status == Status.adopted));
  }

  getHomelessDogs ():Observable<IDog[]> {
    return of(this.DOGS.filter(d => d.status == Status.homeless));
  }

  getDog (ID: number):Observable<IDog> {
    return of(this.DOGS.find(element => element.id == ID));
  }

  addDog(dog: IDog) : void {
    this.DOGS.push(dog);
  }

}