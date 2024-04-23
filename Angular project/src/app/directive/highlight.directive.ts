import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmailValidator],[appHighlight]',
})

export class EmailValidatorDirective {

  // Directive using Input //
  
  constructor(private el: ElementRef) {}
  
  @HostListener('input') onInput() {
    const inputValue = this.el.nativeElement.value;
    const isValid = this.validateEmail(inputValue);
    this.setValidationStyles(isValid);
  }
  
  validateEmail(email: string): boolean {
    // Simple email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
   setValidationStyles(isValid: boolean) {
    if (isValid) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
  
  // attribute directive //
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  }


