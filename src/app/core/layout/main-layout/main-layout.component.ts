import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenu } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    ButtonModule,
    DrawerModule,
    AvatarModule, 
    Toolbar, 
    ButtonModule, 
    PanelMenu,
    InputTextModule,
    BreadcrumbModule,
    RouterModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  visible: boolean = false;
  items: MenuItem[];

  constructor(
    private themeService: ThemeService, 
    private router: Router, 
    private toast: ToastService,
) {
    this.items = [
      {
          label: 'Files',
          icon: 'pi pi-file',
          items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                command: () => {
                    this.toast.success('Guardado', 'Los datos se guardaron correctamente.');
                }
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                command: () => {
                    this.toast.warn('Guardado', 'Los datos se guardaron correctamente.');
                }
            },
            {
                label: 'Print',
                icon: 'pi pi-print',
                command: () => {
                    this.toast.error('Guardado', 'Los datos se guardaron correctamente.');
                }
            }
          ]
      },
      {
          label: 'Sync',
          icon: 'pi pi-cloud',
          items: [
              {
                  label: 'Import',
                  icon: 'pi pi-cloud-download',
                  command: () => {
                      this.toast.info('Guardado', 'Los datos se guardaron correctamente.');
                  }
              },
              {
                  label: 'Export',
                  icon: 'pi pi-cloud-upload',
                  command: () => {
                      this.toast.info('Guardado', 'Los datos se guardaron correctamente.');
                  }
              }
          ]
      },
      {
          label: 'Sign Out',
          icon: 'pi pi-sign-out',
          command: () => {
              this.toast.error('Guardado', 'Los datos se guardaron correctamente.');
          }
      }
  ];
  }

  ngOnInit() {
    this.themeService.init();
    
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
      return items.map((menuItem) => {
          menuItem.expanded = expanded;
          if (menuItem.items) {
              menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
          }
          return menuItem;
      });
  }

  private areAllItemsExpanded(): boolean {
      return this.items.every((menuItem) => menuItem.expanded);
  }
}
