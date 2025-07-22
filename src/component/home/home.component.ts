import { Component } from '@angular/core';
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { RecommendationComponent } from "../recommendation/recommendation.component";
import { OfficeServicesComponent } from "../office-services/office-services.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, RecommendationComponent, OfficeServicesComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
