import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {
        MyTeamsComponent
        ,TeamDetailComponent
        ,TournamentComponent
        ,GameComponent
        ,TeamsComponent
        ,StandingsComponent
        ,TeamHomeComponent
      } from '../pages/pages';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsComponent,
    TeamDetailComponent,
    TournamentComponent,
    GameComponent,
    TeamsComponent,
    StandingsComponent,
    TeamHomeComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsComponent,
    TeamDetailComponent,
    TournamentComponent,
    GameComponent,
    TeamsComponent,
    StandingsComponent,
    TeamHomeComponent
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
