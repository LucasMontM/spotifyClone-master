import { IArtista } from './../../interfaces/IArtistas';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { newArtista } from 'src/app/Common/factories';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss']
})
export class TopArtistaComponent implements OnInit {

  artista: IArtista = newArtista();
  topArtista: any;

  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtista();
  }

  async buscarArtista(){
    const artistas = this.spotifyService.buscarTopArtistas(1);

    if(!!artistas)
    this.topArtista = (await artistas).pop();
  }

}
