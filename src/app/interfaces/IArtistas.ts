import { IMusica } from "./IMuscia";

export interface IArtista {
  id: string,
  nome: string,
  imagemUrl: string,
  musicas?: IMusica[]
}
