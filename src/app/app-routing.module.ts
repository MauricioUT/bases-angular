import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //forRoot agrega el sistema de rutas principales(por lo general solo existe un forrRoot en toda la aplicación), el forChild agrega el sistema de rutas hijas
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
