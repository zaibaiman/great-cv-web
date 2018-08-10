import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { EditorComponent } from './components/cvs/editor/editor.component';
import { PreviewComponent } from './components/cvs/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkbenchComponent,
    DashboardComponent,
    StatsComponent,
    EditorComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
