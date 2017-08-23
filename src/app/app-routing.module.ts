import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LogonComponent }   from './logon/logon.component';
import { ProdutoAddComponent }   from './produto-add/produto-add.component';
import { ProdutosComponent }   from './produtos/produtos.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'logon',  component: LogonComponent },
  { path: 'produtos',  component: ProdutosComponent },
  { path: 'produto/add',  component: ProdutoAddComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}