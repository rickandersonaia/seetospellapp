import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatLineModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule} from '@angular/material/grid-list';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WordService } from './services/word.service';
import { baseURL, imageURL, audioURL} from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SetsComponent } from './sets/sets.component';
import {routes} from './app-routing/routes';
import { HeaderComponent } from './header/header.component';
import { WorddetailComponent } from './worddetail/worddetail.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './userform/userform.component';
import { WordformComponent } from './wordform/wordform.component';
import { WordeditComponent } from './wordedit/wordedit.component';
import { WordnewComponent } from './wordnew/wordnew.component';



@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HomeComponent,
    AccountsComponent,
    SetsComponent,
    HeaderComponent,
    WorddetailComponent,
    LoginComponent,
    UserFormComponent,
    WordformComponent,
    WordeditComponent,
    WordnewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [
    WordService,
    MatDialogModule,
    { provide: 'BaseURL', useValue: baseURL },
    { provide: 'ImageURL', useValue: imageURL },
    { provide: 'AudioURL', useValue: audioURL },
    ProcessHTTPMsgService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
