import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounce, debounceTime } from 'rxjs';

@Directive({
  selector: '[mpDrawLine]',
  standalone: true,
})
export class DrawLineDirective implements AfterViewInit, OnDestroy {
  private father: HTMLLIElement;
  private childrenList: HTMLUListElement | null = null;
  private changeSize = new Subject();
  private sub: Subscription;

  constructor(elRef: ElementRef) {
    this.father = elRef.nativeElement;
    this.sub = this.changeSize.pipe(debounceTime(500)).subscribe(() => {
      this.draw();
    })
  }

  @HostListener('window:resize', ['$event'])_() {
    this.changeSize.next(null);
  }

  ngAfterViewInit() {
    this.draw();
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  draw() {
    this.cancelLines();
    this.childrenList = this.father.getElementsByTagName('ul').item(0);
    if (this.childrenList) {
      this.drawLines(this.childrenList);
    }
  }

  private drawLines(childrenList: HTMLUListElement) {
    Array.from(childrenList.getElementsByTagName('li')).forEach((child) => {
      const startPoint = this.centerBottomPoint(this.father);
      const endPoint = this.centerupperPoint(child);

      const lineLenght = this.calcLenght(startPoint.x, endPoint.x, startPoint.y, endPoint.y);
      const angle = this.calcAngle(startPoint.x, endPoint.x, startPoint.y, endPoint.y);

      this.father.firstChild!.appendChild(
        this.generateNewline(lineLenght, angle, startPoint.x, startPoint.y)
      );
    });
  }

  cancelLines() {
    const paragraph = this.father.firstChild;
    if (paragraph?.hasChildNodes) {
      Array.from(paragraph.childNodes).forEach((n) => {
        const isNotText = n.nodeType !== 3;
        if (isNotText) n.remove();
      });
    }
  }

  private centerBottomPoint(el: HTMLElement) {
    const { top, left } = el.style,
      { width, height } = el.getBoundingClientRect();
    return {
      x: width / 2,
      y: height,
    };
  }

  private centerupperPoint(el: HTMLElement) {
    const { top, left } = el.style,
      { width } = el.getBoundingClientRect();
    const topNum = Number(top.replace('px', ''));
    const leftNum = Number(left.replace('px', ''));
    return {
      x: leftNum + width / 3,
      y: topNum - 10,
    };
  }

  private calcLenght(x1: number, x2: number, y1: number, y2: number) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  private calcAngle(x1: number, x2: number, y1: number, y2: number) {
    return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  }

  private generateNewline(length: number, angle: number, left: number, top: number) {
    const newLine = document.createElement('div');
    newLine.style.width = `${length}px`;
    newLine.style.transformOrigin = `top left`;
    newLine.style.transform = `rotate(${angle}deg)`;
    newLine.style.left = `${left}px`;
    newLine.style.top = `${top}px`;
    newLine.style.position = 'absolute';
    newLine.style.backgroundColor = 'black';
    newLine.style.height = '2px';
    return newLine;
  }
}
