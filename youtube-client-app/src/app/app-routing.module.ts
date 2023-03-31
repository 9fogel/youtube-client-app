import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PageNotFoundComponent from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'youtube',
    // loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    loadChildren: () => import('./youtube/youtube.module'),
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module') },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
