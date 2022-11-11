import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/Common/factories';
import { PlayerService } from './../../services/player.service';
import { IMusica } from './../../interfaces/IMuscia';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  playIcone = faPlay;
  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica();

  subs: Subscription[] = [];


  constructor(private spotifyService: SpotifyService,
    private playerService: PlayerService) { }



  ngOnInit(): void {
    this.obterMusicas()
    this.obterMusicaAtual()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async obterMusicas(){
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas)
  }

  obterMusicaAtual(){
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });

    this.subs.push(sub);
  }

  obterArtistas(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(', ')
  }

  async executarMusica(musica: IMusica){
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }



}
