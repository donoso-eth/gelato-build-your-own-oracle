import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildOracleComponent } from './build-oracle/build-oracle.component';

const routes: Routes = [{path:'', component:BuildOracleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildOracleRoutingModule { }
