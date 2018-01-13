import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyDataService } from './services/dummy-data.service';
import { SmartComponent } from './smart/smart.component';
import { PresComponent } from './pres/pres.component';

@NgModule({
  declarations: [AppComponent, SmartComponent, PresComponent],
  imports: [BrowserModule],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
