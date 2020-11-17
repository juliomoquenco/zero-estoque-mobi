import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //Redirect To
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'produtos-cadastrados',
    loadChildren: () => import('./produtos-cadastrados/produtos-cadastrados/produtos-cadastrados.module').then( m => m.ProdutosCadastradosPageModule)
  },
  {
    path: 'produtos-favoritos',
    loadChildren: () => import('./produtos-favoritos/produtos-favoritos/produtos-favoritos.module').then( m => m.ProdutosFavoritosPageModule)
  },
  {
    path: 'form-oferta',
    loadChildren: () => import('./form-oferta/form-oferta/form-oferta.module').then( m => m.FormOfertaPageModule)
  },
  {
    path: 'editar-cadastro',
    loadChildren: () => import('./editar-cadastro/editar-cadastro/editar-cadastro.module').then( m => m.EditarCadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
