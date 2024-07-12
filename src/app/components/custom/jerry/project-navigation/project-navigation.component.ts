import {
  ChangeDetectionStrategy,
  Component, HostListener, PLATFORM_ID, inject
} from '@angular/core';
import { Project, ProjectNavigationConfig } from './project-navigation.config';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentRouteData } from '../../../../types,interfaces/ComponentIdentity';
import { NgFor, NgIf, NgStyle, NgTemplateOutlet, isPlatformServer } from '@angular/common';
import { DrawLineDirective } from './draw-line.directive';

@Component({
  selector: 'mp-project-navigation',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor, NgIf, NgStyle, DrawLineDirective, RouterLink],
  templateUrl: './project-navigation.component.html',
  styleUrl: './project-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectNavigationComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly platform = inject(PLATFORM_ID);

  config!: ProjectNavigationConfig;
  screenHeight!: number;
  screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformServer(this.platform)) return;
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
