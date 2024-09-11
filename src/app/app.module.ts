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
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { RecentsComponent } from './recents/recents.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    InputBoxComponent,
    SidebarComponent,
    TodoItemComponent,
    SidebarListComponent,
    HomePageComponent,
    HeaderComponent,
    RecentsComponent,
    ListComponent,
    ListItemComponent,
    ListCommentsComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
