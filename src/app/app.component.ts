import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DappBaseComponent } from './dapp-injector/classes';
import { DappInjector } from './dapp-injector/dapp-injector.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DappBaseComponent implements OnInit {
  title = 'gelato-build-your-own-oracle';
  constructor(private primengConfig: PrimeNGConfig,dapp:DappInjector, store:Store){
    super(dapp,store)
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '16px';
  }
}
