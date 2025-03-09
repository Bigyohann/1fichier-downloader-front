import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  constructor(private router: Router) {}
  currentRoute: string = '';
  title = 'vpsdownloader';

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

}
