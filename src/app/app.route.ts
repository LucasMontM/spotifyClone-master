import { Routes } from '@angular/router';
import { AutenticadoGuard } from './guards/autenticado.guard';

export const AppRotas: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('../app/pages/player/player.module').then(x => x.PlayerModule),
    canLoad: [AutenticadoGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then(x => x.LoginModule)
  }
]
