import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [MyCounterComponent],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(injector: Injector) {
    const NyCounterElement = createCustomElement(MyCounterComponent, {
      injector
    });
    customElements.define('app-my-counter', NyCounterElement);
  }
  ngDoBootstrap() {}
}
