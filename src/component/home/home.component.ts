import { Component } from '@angular/core';
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { RecommendationComponent } from "../recommendation/recommendation.component";

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, RecommendationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
