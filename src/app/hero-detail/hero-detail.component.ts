import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Output() heroChange: EventEmitter<boolean> = new EventEmitter;
  heroModify(data:Hero){
    this.heroChange.emit(true)
  }
}
