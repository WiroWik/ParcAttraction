import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { AvisInterface } from '../Interface/avis.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root',
})
export class AvisService {

  constructor(private dataService: DataService) {

  }

  public getAllAvis() : Observable<AvisInterface[]> {
    const url = "http://127.0.0.1:5000/avis"
    const data = this.dataService.getData(url);
    return data as Observable<AvisInterface[]>;
  }

  public getAvisByAttractionId(attractionId: number): Observable<AvisInterface[]> {
    const url = `http://127.0.0.1:5000/avis/attraction/${attractionId}`;
    const data = this.dataService.getData(url);
    return data as Observable<AvisInterface[]>;
  }

  public addAvis(avis: AvisInterface): Observable<MessageInterface> {
    const url = `http://127.0.0.1:5000/avis`;
    return this.dataService.postData(url, avis) as Observable<MessageInterface>;
  }
}