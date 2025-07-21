import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PolicyPrivacyComponent } from '../policy-privacy/policy-privacy.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { QuestionsAnswersComponent } from '../questions-answers/questions-answers.component';

export const routes: Routes = [{component:PolicyPrivacyComponent,path:"מדיניות-ופרטיות"}
    ,{component:ContactComponent,path:"צור-קשר"}
    ,{component:AboutComponent,path:"אודות"}
    ,{component:QuestionsAnswersComponent,path:"שאלות-ותשובות"}
    ,{component:HomeComponent,path:""}
    ,{component:NotFoundComponent,path:"**"}];
