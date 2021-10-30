import { Adopter } from './../models/adopter.model';
import { AnimalAdoptionAPIServiceService } from './../animal-adoption-apiservice.service';
import { Animal } from './../models/animal.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Adopted } from '../models/adopted.model';

@Component({
  selector: 'adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  startAge: number;
  endAge: number;
  type:string;

  petId:number;
  adopterName:string;

  showAdoptionPage=false;

  animal: Animal | undefined;

  animalsAvailable:Array<Animal>;
  adoptableAnimals:Array<Animal>;
  adopted:Adopted;

  constructor(private animalAdoptionService: AnimalAdoptionAPIServiceService) {
    this.animalsAvailable = new Array(new Animal(1,"Freckles","Dog",7,true),
                                      new Animal(2,"Lua","Dog",1,false),
                                      new Animal(3,"Baby","Cat",14,false),
                                      new Animal(4,"Vinnie","Dog",7,true));
    this.adoptableAnimals = new Array();
    this.startAge = 1;
    this.endAge = 100;
    this.type = '';
    this.adopterName='';
    this.petId=0;
    this.adopted=new Adopted("",0,"");
   }

  ngOnInit(): void {
  }

  searchAnimals():void {
    this.animalAdoptionService.searchAnimals(this.startAge,this.endAge,this.type.toUpperCase()).subscribe(apiResponse => {
      this.adoptableAnimals = apiResponse;
    })
  }

  switchView(): void {
    if(this.showAdoptionPage) {
      this.showAdoptionPage = false;
    } else {
      this.showAdoptionPage = true;
    }
  }

  adopt():void {
    this.animalAdoptionService.adoptAnimal(this.petId,new Adopter(this.adopterName,this.petId)).subscribe(apiResponse => {
        this.adopted = apiResponse;
      });
  }

}
