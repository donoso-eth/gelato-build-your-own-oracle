import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildOracleModule } from './build-oracle/build-oracle.module';
import { DappInjectorModule } from './dapp-injector/dapp-injector.module';
import { StoreModule } from '@ngrx/store';
import { we3ReducerFunction } from 'angular-web3';
import { AppTopBarComponent } from './shared/components/toolbar/app.topbar.component';
import { AppFooterComponent } from './shared/components/footer/app.footer.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AppTopBarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BuildOracleModule,
    DappInjectorModule.forRoot({wallet:'local', defaultNetwork:'localhost'}),
    StoreModule.forRoot({web3: we3ReducerFunction}),
    DropdownModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    ClipboardModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
