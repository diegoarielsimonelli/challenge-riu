import { Component } from '@angular/core';
import { SlidesSectionComponent } from './features/home/components/slides-section/slides-section.component';
import { CardsSectionComponent } from './features/home/components/cards-section/cards-section.component';
import { HeroSectionComponent } from './features/home/components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  imports: [
    SlidesSectionComponent,
    CardsSectionComponent,
    HeroSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'challenge-riu';
}
