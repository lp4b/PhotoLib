import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {fromEvent, Observable, Subject} from 'rxjs';
import {IPhoto} from '../../interfaces/photo';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';
import {CardComponent} from '../card/card.component';
import {pluck, startWith, takeUntil, tap} from 'rxjs/operators';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(CardComponent, {read: ElementRef}) items: QueryList<ElementRef>;
  @ViewChild('stage') private stage: ElementRef;
  @ViewChild('stageOuter') private stageOuter: ElementRef;

  private player: AnimationPlayer;
  private itemWidth: number;
  private destroy = new Subject();

  photos: Observable<IPhoto[]>;

  constructor(
    private photoService: PhotoService,
    private builder: AnimationBuilder,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.photos = this.photoService.getList();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const firstItem = this.items.first.nativeElement;
      this.itemWidth = this.stageOuter.nativeElement.offsetWidth / 2;
      fromEvent(this.stage.nativeElement, 'click')
        .pipe(
          pluck('target'),
          startWith(firstItem),
          tap(item => this.switchPicture(item)),
          takeUntil(this.destroy)
        )
        .subscribe();
    }, 500);
  }

  switchPicture(target: HTMLElement) {
    this.items.forEach(elem => this.renderer.removeClass(elem.nativeElement, 'active'));
    this.renderer.addClass(target, 'active');
    const offset = this.itemWidth / 2 - target.offsetLeft;
    this.animateStage(offset, this.stage.nativeElement);
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

  private animateStage(offset: number, stage: HTMLElement) {
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(stage);
    this.player.play();
  }

  private buildAnimation(offset) {
    return this.builder.build([
      animate('250ms ease-in', style({transform: `translateX(${offset}px)`}))
    ]);
  }
}
