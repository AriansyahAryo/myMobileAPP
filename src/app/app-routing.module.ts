import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'listuser',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'mygallery',
    loadChildren: () =>
      import('./mygallery/mygallery.module').then((m) => m.MygalleryPageModule),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
  },
  {
    path: 'toast',
    loadChildren: () =>
      import('./toast/toast.module').then((m) => m.ToastPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'listuser',
    loadChildren: () =>
      import('./listuser/listuser.module').then((m) => m.ListuserPageModule),
  },
  {
    path: 'listbaru',
    loadChildren: () => import('./listbaru/listbaru.module').then( m => m.ListbaruPageModule)
  },
  {
    path: 'testarray',
    loadChildren: () => import('./testarray/testarray.module').then( m => m.TestarrayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
