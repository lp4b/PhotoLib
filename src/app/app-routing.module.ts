import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardDetailsComponent} from './gallery/card-details/card-details.component';
import {GalleryComponent} from './gallery/gallery.component';
import {CarouselComponent} from './gallery/carousel/carousel.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: CardDetailsComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: '', pathMatch: 'full', redirectTo: 'gallery'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
