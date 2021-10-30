import { AnimalAdoptionAPIServiceService } from './../animal-adoption-apiservice.service';
import { Animal } from './../models/animal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  startAge: number;
  endAge: number;
  type:string;

  animalsAvailable:Array<Animal>;
  adoptableAnimals:Array<Animal>;

  constructor(private animalAdoptionService: AnimalAdoptionAPIServiceService) {
    this.animalsAvailable = new Array(new Animal(1,"Freckles","Dog",7,true),
                                      new Animal(2,"Lua","Dog",1,false),
                                      new Animal(3,"Baby","Cat",14,false),
                                      new Animal(4,"Vinnie","Dog",7,true));
    this.adoptableAnimals = new Array();
    this.startAge = 1;
    this.endAge = 100;
    this.type = '';
   }

  ngOnInit(): void {
  }

  searchAnimals():void {
    console.log(this.adoptableAnimals);
    this.animalAdoptionService.searchAnimals(this.startAge,this.endAge,this.type.toUpperCase()).subscribe(apiResponse => {
      this.adoptableAnimals = apiResponse;
    })
    console.log(this.adoptableAnimals);
  }



}
