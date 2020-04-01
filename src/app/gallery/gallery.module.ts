import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';
import {CommonModule} from '@angular/common';
import {CardDetailsComponent} from './card-details/card-details.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [GalleryComponent, CardComponent, CardListComponent, CardDetailsComponent, CarouselComponent],
  exports: [
    GalleryComponent, CardComponent, CardListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class GalleryModule {
}
