import { isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  SecurityContext,
  ViewChildren,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigDirective } from '../../../../application-config/config.directive';
import { Project, ProjectNavigationConfig } from './project-navigation.config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mp-project-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-navigation.component.html',
  styleUrl: './project-navigation.component.scss',
  hostDirectives: [ConfigDirective],
})
export class ProjectNavigationComponent implements OnInit, AfterViewInit {
  private readonly platform = inject(PLATFORM_ID);
  private configDirective = inject(ConfigDirective);
  private renderer = inject(Renderer2);
  private sanitizer = inject(DomSanitizer);

  @ViewChildren('projectLabel') proectLabels!: QueryList<ElementRef<SVGTextElement>>;

  viewBox = '0 0 0 0';
  private innerWidth = 600;
  private innerHeight = 600;

  config!: ProjectNavigationConfig;

  @HostListener('window:resize', ['$event'])
  checkScreen() {
    if (!isPlatformServer(this.platform)) {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
      this.updateViewBox();
    }
  }

  get projects() {
    return Object.keys(this.config.projects).map((k) => this.config.projects[k]);
  }

  get projectLines() {
    return this.projects
      .map(({ connections, leftRatio, topRatio, routerLink }) =>
        connections.map((connection) => {
          const { leftRatio: leftRatiox2, topRatio: topRatiox2 } = this.config.projects[connection];
          return {
            x1: this.getPoint(this.innerWidth, leftRatio),
            y1: this.getPoint(this.innerHeight, topRatio),
            x2: this.getPoint(this.innerWidth, leftRatiox2),
            y2: this.getPoint(this.innerHeight, topRatiox2),
            id: routerLink + '->' + routerLink,
          };
        })
      )
      .flat();
  }

  ngOnInit() {
    this.config = this.configDirective.getConfig<ProjectNavigationConfig>();
    this.checkScreen();
  }

  ngAfterViewInit() {
    this.calculateBackgrounds();
  }

  getLabelTransformation({ leftRatio, topRatio }: Project) {
    const x = this.getPoint(this.innerWidth, leftRatio);
    const y = this.getPoint(this.innerHeight, topRatio);
    return 'translate(' + x + ',' + y + ')';
  }

  sanitizeLabel(value: string): string {
    return (
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.sanitizer.bypassSecurityTrustHtml(value)
      ) || ''
    );
  }

  detectNewLines({ value }: Project) {
    return value.split('<br>').map((word) => this.sanitizeLabel(word));
  }

  private calculateBackgrounds() {
    const padding = this.config.labelPadding || 1;
    this.proectLabels.forEach(
      ({ nativeElement: { firstElementChild: rect, lastElementChild: text } }) => {
        if (rect && text && text.getBoundingClientRect) {
          const heighMultiplier = this.parseMultiLines(text);
          const { width, height } = text.getBoundingClientRect();
          this.renderer.setStyle(rect, 'width', width + padding);
          this.renderer.setStyle(rect, 'height', height * heighMultiplier + padding);
          this.renderer.setStyle(rect, 'x', -padding / 2);
          this.renderer.setStyle(rect, 'y', -height);
        }
      }
    );
  }

  private parseMultiLines(text: Element) {
    Array.from(text.children).forEach((child, index) => {
      if (index !== 0) {
        this.renderer.setAttribute(child, 'dy', (20 * index).toString());
        this.renderer.setAttribute(child, 'x', '0');

      }
    })
    return text.childElementCount
  }

  private getPoint(base: number, ratio: number) {
    return Math.floor(base * ratio);
  }

  private updateViewBox() {
    this.viewBox = '0 0 ' + this.innerWidth + ' ' + this.innerHeight;
  }
}
