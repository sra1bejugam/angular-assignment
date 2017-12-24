import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
@Directive({ selector: '[appShadow]' })
export class ShadowDirective  {
    @Input() appShadow: any;
    constructor(private elem: ElementRef, private renderer: Renderer2) { }
    @HostListener('click')onclick(){
    if(this.appShadow>=75)
    {
      this.elem.nativeElement.style.background='blue';
      
    }
    else{
      this.elem.nativeElement.style.background='red';
    }
  }
}