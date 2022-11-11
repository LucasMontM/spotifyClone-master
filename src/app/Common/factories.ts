import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { IMusica } from './../interfaces/IMuscia';
import { IArtista } from './../interfaces/IArtistas';

export function newArtista(): IArtista{
  return{
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  }
}

export function newMusica(): IMusica{
  return {
    id: '',
    album:
    {
      id: '',
      imagemUrl: '',
      nome: ''
    },
    artistas: [],
    tempo:'',
    titulo: ''
  }
}

export function newPlaylist(): IPlaylist{
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  }
}
