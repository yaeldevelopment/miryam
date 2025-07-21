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
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

}
