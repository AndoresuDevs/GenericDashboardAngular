import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem, MessageService } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenu } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ThemeService } from '../../services/theme/theme.service';

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
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  visible: boolean = false;
  items: MenuItem[];

  constructor(private themeService: ThemeService, private router: Router, private messageService: MessageService) {
    this.items = [
      {
          label: 'Files',
          icon: 'pi pi-file',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-plus',
                  command: () => {
                      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                  }
              },
              {
                  label: 'Search',
                  icon: 'pi pi-search',
                  command: () => {
                      this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                  }
              },
              {
                  label: 'Print',
                  icon: 'pi pi-print',
                  command: () => {
                      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
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
                      this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                  }
              },
              {
                  label: 'Export',
                  icon: 'pi pi-cloud-upload',
                  command: () => {
                      this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                  }
              }
          ]
      },
      {
          label: 'Sign Out',
          icon: 'pi pi-sign-out',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
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
