import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { CardInstituicaoComponent } from './components/card-instituicao/card-instituicao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardComponent,
    CardProjectComponent,
    CardInstituicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
