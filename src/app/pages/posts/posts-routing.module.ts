import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],// acá se agregan las rutas hijas
  exports: [RouterModule]
})
export class PostsRoutingModule { }
