import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-info-app';
}
