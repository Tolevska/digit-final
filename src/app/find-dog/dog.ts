export interface IDog {
    id: number;
    status: Status;
    code: number;
    size: string;
    gender: string;
    location: string;
    breed: string; //rasa
    description: string;
    imageUrl: string;
    deleted: boolean;
}

export enum Status {
    adopted,
    homeless
}
  
export enum Gender {
    male = 0,
    female = 1
}
