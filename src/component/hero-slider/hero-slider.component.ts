import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero-slider', 
   standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit  {
  @ViewChild('slickCarousel', { static: false }) slickCarousel!: SlickCarouselComponent;
  slideConfig: any = {};
  slides: any[] = [];
  autoplay = true;
  constructor(private cdr: ChangeDetectorRef) {} // Inject ChangeDetectorRef
  ngOnInit(): void {


   this.slides = [
 {image: 'Savings.png',
    title:'חוסכים לך כל שקל שאפשר',
    subtitle: 'ייעוץ מס מדויק לעצמאים ובעלי עסקים – בלי הפתעות מיותרות'
  },
  {
    image: 'work_money.png',
    title: 'תן לכסף שלך לעבוד בשבילך',
    subtitle: 'שירות אישי, זמינות גבוהה ותכנון מס שמייצר תוצאות'
  },
  {
    image: 'Personal_service.png',
    title: 'יועצת מס מוסמכת לעצמאים',
    subtitle: 'ליווי אישי מהשלב הראשון ועד לדוחות השנתיים – כולל הכל'
  },
  {
    image: 'Consulting.png',
    title: 'הצלחה פיננסית מתחילה בייעוץ נכון',
    subtitle: 'הצטרפו לעשרות לקוחות מרוצים שכבר חסכו אלפי שקלים בשנה'
  }
];   
this.slideConfig = {
     slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500, // מעבר חלק
  cssEase: 'ease-in-out',
    rtl: true
  };

this.cdr.detectChanges(); // Force change detection after data is ready

   // When slides are loaded, the *ngIf in the template will become true and render the carousel.
    
  }


toggleAutoplay() {
  this.autoplay = !this.autoplay;

  if (this.slickCarousel) {
    if (this.autoplay) {
      this.slickCarousel.slickPlay();
    } else {
      this.slickCarousel.slickPause();
    }
  }

  // עדכון הגדרות מחדש

}

}
