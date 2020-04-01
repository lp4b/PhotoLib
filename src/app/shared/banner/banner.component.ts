import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() imgUrl = '/assets/img/angular-banner.jpg';
  @Input() maxHeight = 'none';
  @Input() title;
  @Input() author;

  constructor() {
  }

  ngOnInit(): void {
  }

}
