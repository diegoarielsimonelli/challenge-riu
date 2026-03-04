import { Component } from '@angular/core';
import { SvgCardComponent } from '../../../../shared/components/svg-card/svg-card.component';

@Component({
  selector: 'app-hero-section',
  imports: [SvgCardComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
