import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'', redirectTo:'landing', pathMatch:'full'},
  { path:'landing',loadChildren: () =>
  import('./build-oracle/build-oracle.module').then(
    (m) => m.BuildOracleModule
  ),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
