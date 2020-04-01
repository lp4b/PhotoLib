import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() title: string;
  @Input() date: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
