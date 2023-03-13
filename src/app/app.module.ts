import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from 'src/auth/auth.module';
import { HealthModule } from 'src/health/health.module';
import { Store } from 'store';
import { AuthService } from 'src/auth/auth.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    AuthModule,
    HealthModule
  ],
  providers: [
    AuthService,
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
