import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { AvisService } from '../Service/avis.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AvisInterface } from '../Interface/avis.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService, public avisService: AvisService)
  {}

  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
  public avis: Observable<AvisInterface[]> = this.avisService.getAllAvis()
}
