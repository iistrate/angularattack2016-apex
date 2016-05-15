/// <reference path="../../typings/browser.d.ts" />
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {enableProdMode} from '@angular/core';

import {AppComponent} from './app.component';
enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);