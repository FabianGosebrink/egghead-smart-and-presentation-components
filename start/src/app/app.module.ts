import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyDataService } from './services/dummy-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
