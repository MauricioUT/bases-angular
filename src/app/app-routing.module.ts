import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsModule } from './pages/posts/posts.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'posts',
    //loadChildren: './pages/posts/posts.module#PostsModule' //forma de importar modulos
    loadChildren: () => import('./pages/posts/posts.module') // esto devuelve una promesa, es la forma adecuada de hacer el lazyLoad
    .then( m => m.PostsModule) // las promesas se resuelven con el then catch
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //forRoot agrega el sistema de rutas principales(por lo general solo existe un forrRoot en toda la aplicación), el forChild agrega el sistema de rutas hijas
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
