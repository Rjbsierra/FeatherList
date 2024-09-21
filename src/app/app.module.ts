import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentsComponent } from './components/recents/recents.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { authInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
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
    RegisterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor])),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
