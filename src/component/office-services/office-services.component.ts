import { Component } from '@angular/core';

@Component({
  selector: 'app-office-services',
  imports: [],
  templateUrl: './office-services.component.html',
  styleUrl: './office-services.component.scss'
})
export class OfficeServicesComponent {
services = [
  {
    title: 'ייעוץ מס והחזרי מס',
    icon: 'bi-cash-coin text-success'
  },
  {
    title: 'ניהול תיקים',
    icon: 'bi-journal-check text-primary'
  },
  {
    title: 'הנהלת חשבונות',
    icon: 'bi-journal-bookmark text-warning'
  },
  {
    title: 'חשבות שכר',
    icon: 'bi-person-badge text-danger'
  },
  {
    title: 'דוחות שנתיים והצהרת הון',
    icon: 'bi-file-earmark-bar-graph text-info'
  },
  {
    title: 'ייצוג מול רשויות המס',
    icon: 'bi-bank text-secondary'
  }
];


}
