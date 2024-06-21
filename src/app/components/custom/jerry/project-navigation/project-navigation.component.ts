import {
  ChangeDetectionStrategy,
  Component, HostListener, inject
} from '@angular/core';
import { Project, ProjectNavigationConfig } from './project-navigation.config';
import { ActivatedRoute } from '@angular/router';
import { ComponentRouteData } from '../../../../types,interfaces/ComponentIdentity';
import { NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { DrawLineDirective } from './draw-line.directive';

@Component({
  selector: 'mp-project-navigation',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor, NgIf, NgStyle, DrawLineDirective],
  templateUrl: './project-navigation.component.html',
  styleUrl: './project-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectNavigationComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: ProjectNavigationConfig;
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this.onResize();
    this.config = (this.route.snapshot.data as ComponentRouteData<ProjectNavigationConfig>).config;
  }

  getPositionAccordingToSCreen({ position: { top, left } }: Project) {
    return {
      top: this.screenHeight * top + 'px',
      left: this.screenWidth * left + 'px',
    };
  }

}
