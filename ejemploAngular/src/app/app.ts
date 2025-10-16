import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer-component/footer-component';
import { BodyComponent } from "./components/body-component/body-component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejemploAngular');
}
