import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PhotoService} from '../../services/photo.service';
import {IPhoto} from '../../interfaces/photo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService,
              private location: Location) {
  }

  ngOnInit() {
    this.photo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.photoService.getById(params.get('id')))
    );
  }

  close() {
    this.location.back();
  }
}
