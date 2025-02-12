import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { AvisService } from '../Service/avis.service';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AvisInterface } from '../Interface/avis.interface';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})

export class AccueilComponent {

  formulaireAvis: FormGroup[] = [];

  constructor(public attractionService: AttractionService, public avisService: AvisService)
  {}
  
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction().pipe(tap((attractions:AttractionInterface[]) => {
    attractions.forEach(attraction => {
      this.formulaireAvis.push(
        new FormGroup({
          attraction_id: new FormControl(attraction.attraction_id),
          nom: new FormControl(''),
          prenom: new FormControl(''),
          commentaire: new FormControl(''),
          note: new FormControl(0)
        })
      );
    });
  }));
  public avis: Observable<AvisInterface[]> = this.avisService.getAllAvis()
  
  getAvisByAttractionId(id: number): Observable<AvisInterface[]> {
    return this.avisService.getAvisByAttractionId(id);
  }

  onSubmit(index: number): void {
    const avisForm = this.formulaireAvis[index];
    console.log("formulaire avis");
    if (avisForm.valid) {
      const newAvis: AvisInterface = avisForm.value;
      this.avisService.addAvis(newAvis).subscribe(() => {
        console.log('Avis added successfully');
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
