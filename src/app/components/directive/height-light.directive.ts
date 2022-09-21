import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[heightLight]',
})
export class HeightLightDirective {
  counter: number = 0;
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('window: keydown', ['$event'])
  userPressOnKey(e: KeyboardEvent): void {
    if (e.code === 'ArrowUp') this.counter++;
    if (e.code === 'ArrowDown') this.counter--;
    console.log(this.counter);
  }
}
