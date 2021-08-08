import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';
import { LoggingService } from './loggingService.service';
import { AppRoutingModule } from './app-routing.module';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PeopleService } from './people.service';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent,
    PeopleComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    DataService,
    PeopleService,
    LoginService,
    LoginGuardian,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
