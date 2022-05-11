import { NgModule } from '@angular/core';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MemberPageModule} from './pages/portal/member/member.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [MemberPageModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule,
    FormsModule, CommonModule, HttpClientModule, BrowserModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
