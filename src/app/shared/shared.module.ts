import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner/banner.component';

const sharingItems = [BannerComponent];

@NgModule({
  declarations: sharingItems,
  imports: [
    CommonModule
  ],
  exports: sharingItems
})
export class SharedModule {
}
