import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appOutSideClick]",
  standalone: true
})
export class ClickOutSideDirective implements OnInit, OnDestroy {
  @Input() appOutSideClick!: boolean;
  @Output() outSideClick: EventEmitter<void> = new EventEmitter();
  private listener: (() => void) | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }


  onDocumentClick = (event: Event) => {
    if (!this.element.nativeElement.parentElement.contains(event.target)) {
      this.outSideClick.emit();
    }
  };

  ngOnInit(): void {
    this.listener = this.renderer.listen(
      "document",
      "click",
      this.onDocumentClick
    );
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener();
    }
  }
}
