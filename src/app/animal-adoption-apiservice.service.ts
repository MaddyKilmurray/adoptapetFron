import { Adopter } from './models/adopter.model';
import { Animal } from './models/animal.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalAdoptionAPIServiceService {

  private readonly baseUrl: string = 'http://localhost:8600';

  constructor(private http: HttpClient) { }

  searchAnimals(startAge: number, endAge: number, type:string): Observable<Animal[]> {
    let httpParams = new HttpParams();
    if (startAge) httpParams = httpParams.append('startAge', startAge);
    if (endAge) httpParams = httpParams.append('endAge', endAge);
    if (type) httpParams = httpParams.append('type', type);

    const httpOptions = {
      params: httpParams
    };
    return this.http.get<Animal[]>(this.baseUrl + '/adopt', httpOptions);
  }

  adoptAnimal(id:number, adopter: Adopter): Observable<Adopter> {
    return this.http.post<Adopter>(this.baseUrl + '/adopt' + id, adopter);
  }

}
