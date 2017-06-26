import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AppHttpService } from './services/app-http.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MdCardModule,
		MdButtonModule
	],
	providers: [
		AppHttpService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
