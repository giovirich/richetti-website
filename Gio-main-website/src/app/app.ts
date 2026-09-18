import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProjectTable } from './project-table/project-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProjectTable ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gio-main-website');
}
