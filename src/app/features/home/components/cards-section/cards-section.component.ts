import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-cards-section',
  imports: [CardComponent],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.css',
})
export class CardsSectionComponent {}
