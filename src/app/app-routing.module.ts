import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardDetailsComponent} from './gallery/card-details/card-details.component';
import {GalleryComponent} from './gallery/gallery.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'gallery'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: CardDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
