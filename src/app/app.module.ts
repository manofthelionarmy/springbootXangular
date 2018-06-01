import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterestsComponent } from './interests/interests.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { GreetingDetailComponent } from './greeting-detail/greeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    InterestsComponent,
    GreetingDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
