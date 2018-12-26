import { Injectable } from '@angular/core';
import { IDog, Status } from './dog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private DOGS: IDog[] = [
    {
      id: 1,
      status: Status.adopted,
      code: 16152,
      size: "small",
      breed: "labrador",
      gender: "male",
      description: "White dog, with one brown spot. Friendly dog, answers to Harvey. Call 744-555-2222. REWARD if found and returned.",
      location: "Skopje,Karpos 4",
      imageUrl: "https://images.labroots.com/content_article_profile_image_28860fe8aa413117465d37b9c1e2dcd772c15a79_2584_960x693.jpg",
      deleted: false
    },
    {
      id: 2,
      status: Status.adopted,
      code: 16152,
      size: "big",
      breed: "terrier",
      gender: "male",
      description: "small, tiny, white",
      location: "Kocani",
      imageUrl: "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/small-dog-breeds_Canna-pet-e1499616934734.jpg",
      deleted: false
    },
    {
      id: 3,
      status: Status.adopted,
      code: 16152,
      size: "small",
      breed: "puddle",
      gender: "female",
      description: "This cute, brown dog is lost.",
      location: "Kumanovo",
      imageUrl: "https://www.what-dog.net/Images/faces2/scroll008.jpg",
      deleted: false
    },
    {
      id: 4,
      status: Status.adopted,
      code: 16152,
      size: "big",
      breed: "german shepherd",
      gender: "male",
      description: "Brown, agressive dog is last seen near to the hospital",
      location: "Veles",
      imageUrl: "http://www.royalcanin.in/var/royalcanin/storage/images/subsidiaries/in/home/puppy-and-dog/the-dog/dogs-that-serve-man/rescue-dogs/389164-6-eng-GB/rescue-dogs_articleV3.png",
      deleted: false
    },
    {
      id: 5,
      status: Status.adopted,
      code: 16152,
      size: "small",
      breed: "labrador",
      gender: "female",
      description: "big, female labrador is lost",
      location: "Strumica",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/YellowLabradorLooking.jpg",
      deleted: false
    },
    {
      id: 6,
      status: Status.homeless,
      code: 16152,
      size: "big",
      breed: "unknown",
      gender: "male",
      description: "small, tiny, white",
      location: "Skopje,Karpos 4",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Stray_dogs_crosswalk.jpg/1200px-Stray_dogs_crosswalk.jpg",
      deleted: false
    },
    {
      id: 7,
      status: Status.homeless,
      code: 16152,
      size: "big",
      breed: "unknown",
      gender: "male",
      description: "homeless dog needs home",
      location: "Valandovo",
      imageUrl: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4HRruVu/videoblocks-street-dog-at-rural-area_srxfbi6dum_thumbnail-full01.png",
      deleted: false
    },
    {
      id: 8,
      status: Status.homeless,
      code: 16152,
      size: "big",
      breed: "unknown",
      gender: "female",
      description: "female,brown dog",
      location: "Delcevo",
      imageUrl: "https://www.abc.net.au/news/image/7649802-3x2-700x467.jpg",
      deleted: false
    },
    {
      id: 9,
      status: Status.homeless,
      code: 16152,
      size: "small",
      breed: "unknown",
      gender: "male",
      description: "small, dog is hungry and homeless",
      location: "Bitola",
      imageUrl: "https://www.petmd.com/sites/default/files/helping-stray-dogs-517411352.jpg",
      deleted: false
    },
    {
      id: 10,
      status: Status.homeless,
      code: 16152,
      size: "small",
      breed: "unknown",
      gender: "female",
      description: "fThis dog is found on the street.",
      location: "Prilep",
      imageUrl: "http://www.hsi.org/assets/images/270x224/animals/dogs/dog_india_cute.jpg",
      deleted: false
    }

  ]

  constructor() { }

  public ID: number;

  getDogs(): Observable<IDog[]> {
    return of(this.DOGS.filter(d => d.status == Status.adopted));
  }

  getHomelessDogs(): Observable<IDog[]> {
    return of(this.DOGS.filter(d => d.status == Status.homeless));
  }

  getDog(ID: number): Observable<IDog> {
    return of(this.DOGS.find(element => element.id == ID));
  }

  addDog(dog: IDog): void {
    this.DOGS.push(dog);
  }


  deleteDog(id) {
    this.DOGS.map(dog => {
      if (dog.id === id)
        dog.deleted = true;
    })
  }

}