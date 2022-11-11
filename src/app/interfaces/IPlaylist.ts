import { IMusica } from './IMuscia';

export interface IPlaylist {
  id: string,
  nome: string,
  imagemUrl: string,
  musicas?: IMusica[]
}
