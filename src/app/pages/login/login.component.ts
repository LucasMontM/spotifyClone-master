import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private spotifyservice: SpotifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.spotifyservice.obterTokenUrlCallback();
    if (!!token) {
      this.spotifyservice.definirAccessToken(token);
      this.router.navigate(['/player/home']);
    }
  }

  abirPaginaLogin() {
    window.location.href = this.spotifyservice.obterUrlLogin();
  }

}
