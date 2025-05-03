import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    DrawerModule,
    AvatarModule, 
    Toolbar, 
    ButtonModule, 
    InputTextModule,
    BreadcrumbModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  visible: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.init();
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

}
