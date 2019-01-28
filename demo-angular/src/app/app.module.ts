import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Ng5SliderModule } from "ng5-slider";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng5SliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
