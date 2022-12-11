import { NgModule,InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildOracleComponent } from './build-oracle/build-oracle.component';
import { BuildOracleRoutingModule } from './build-oracle-routing.module';





@NgModule({
  declarations: [
    BuildOracleComponent
  ],
  imports: [
    CommonModule,
    BuildOracleRoutingModule
  ],
  exports: [
    BuildOracleComponent,
  ],
  providers:[]
})
export class BuildOracleModule { }
