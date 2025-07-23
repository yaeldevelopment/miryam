import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PolicyPrivacyComponent } from '../policy-privacy/policy-privacy.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { QuestionsAnswersComponent } from '../questions-answers/questions-answers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'שאלות-ותשובות', component: QuestionsAnswersComponent },
  { path: 'אודות', component: AboutComponent },
  { path: 'צור-קשר', component: ContactComponent },
  { path: 'מדיניות-ופרטיות', component: PolicyPrivacyComponent },
  { path: '**', component: NotFoundComponent } // דף ברירת מחדל אם הנתיב לא קיים
];

