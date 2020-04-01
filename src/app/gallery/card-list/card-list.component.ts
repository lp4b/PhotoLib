import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {IPhoto} from '../../interfaces/photo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  photos: Observable<IPhoto[]>;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photos = this.photoService.getList();
  }

}
