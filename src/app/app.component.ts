import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { FontService } from './core/services/font/font.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private fontService: FontService) {}

  ngOnInit(): void {
    this.fontService.init();
  }
}
