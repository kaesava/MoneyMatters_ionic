import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Budgets',
      url: '/budgets',
      icon: 'list'
    }
  ];

  construxctor() {
    this.initializeApp();
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _loadingBar: SlimLoadingBarService, 
    private _router: Router)
  {
    this.initializeApp();
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
