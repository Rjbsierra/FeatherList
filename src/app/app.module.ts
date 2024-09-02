import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    InputBoxComponent,
    SidebarComponent,
    TodoItemComponent,
    SidebarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
