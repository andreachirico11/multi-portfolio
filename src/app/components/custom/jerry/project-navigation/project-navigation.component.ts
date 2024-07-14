import { NgFor, NgIf, NgStyle, NgTemplateOutlet, isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigDirective } from '../../../../application-config/config.directive';
import { DrawLineDirective } from './draw-line.directive';
import { Project, ProjectNavigationConfig } from './project-navigation.config';

@Component({
  selector: 'mp-project-navigation',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor, NgIf, NgStyle, DrawLineDirective, RouterLink],
  templateUrl: './project-navigation.component.html',
  styleUrl: './project-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ConfigDirective],
})
export class ProjectNavigationComponent {
  private readonly platform = inject(PLATFORM_ID);
  private configDirective = inject(ConfigDirective);

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
    this.config = this.configDirective.getConfig<ProjectNavigationConfig>();
    this.onResize();
  }

  getPositionAccordingToSCreen({ position: { top, left } }: Project) {
    return {
      top: this.screenHeight * top + 'px',
      left: this.screenWidth * left + 'px',
    };
  }
}
