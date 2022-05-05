import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS } from "@angular/fire/compat/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {ConsoleModule} from "./console/console.module";
import {SaleModule} from "./sale/sale.module";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ConsoleModule,
    MatDialogModule,
    SaleModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useValue: !environment.production ? {
        host: 'localhost:8080',
        ssl: false
      } : undefined
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
