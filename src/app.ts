//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { SimpleFormComponent } from './app.simpleform';
import { AppComponent } from './app.component';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'my-app',
  template:`
    <app-component></app-component>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule, HttpModule ],
  declarations: [ App,AppComponent, SimpleFormComponent,
  ComplexFormComponent, FormValidationComponent],
  bootstrap: [ App ]
})
export class AppModule {}
