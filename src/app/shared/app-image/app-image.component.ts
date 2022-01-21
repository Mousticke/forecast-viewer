import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-image[src]',
  inputs: ['src', 'alt'],
  template: ` <img [attr.src]="src" [attr.alt]="alt" /> `,
  styleUrls: ['./app-image.component.scss'],
})
export class AppImageComponent implements OnInit {
  @Input()
  public src!: string;

  @Input()
  public alt!: string;

  ngOnInit() {
    if (!this.src || this.src.length === 0) {
      console.error(`src attribute must be provided!`);
    }
    if (!this.src || this.alt.length === 0) {
      console.error(`alt attribute must be provided!`);
    }
  }
}
