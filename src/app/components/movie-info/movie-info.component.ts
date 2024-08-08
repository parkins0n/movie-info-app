import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {
  title: string = '';
  year: string = '';
  movie: any;
  showFullPlot: boolean = false;

  constructor(private movieService: MovieService) {}

  searchMovie(): void {
    this.movieService.getMovie(this.title, this.year).subscribe(data => {
      this.movie = data;
    });
  }

  togglePlot(): void {
    this.showFullPlot = !this.showFullPlot;
  }
}