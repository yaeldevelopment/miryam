import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {
scrollToRecommendation() {
const section = document.getElementById('recommendation-section');
if (section) {
  const yOffset = -100; // שלילי = לעצור לפני
  const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

}

}
