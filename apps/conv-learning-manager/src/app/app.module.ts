import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialBricksRootModule } from '@iote/bricks-angular';
import { NgFireModule } from '@ngfi/angular';
import { MultiLangModule } from '@ngfi/multi-lang';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AuthorisationModule } from '@app/elements/base/authorisation';
import { AppConfigurationModule } from '@app/elements/base/configuration';
import { DateConfigurationModule } from '@app/elements/base/date-time';
import { FirebaseConfigurationModule } from '@app/elements/base/firebase';


import { UserStateModule } from '@app/state/user';
import { OrgStateModule } from '@app/state/organisation';
import { StoriesStateModule } from '@app/state/convs-mgr/stories';
import { EndUsersStateModule } from '@app/state/convs-mgr/end-users';
import { StoryBlocksStateModule } from '@app/state/convs-mgr/stories/blocks';
import { StoryBlockConnectionsStateModule } from '@app/state/convs-mgr/stories/block-connections';
import { VariablesConfigStateModule } from '@app/state/convs-mgr/stories/variables-config';
import { ProgressMonitoringStateModule } from '@app/state/convs-mgr/monitoring';

import  { EnvironmentConfigModule } from '@app/admin/config/environment-config'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    GooglePlaceModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFirestoreModule, AngularFireFunctionsModule, NgFireModule,
    AngularFireAnalyticsModule,
    HttpClientModule,


    MaterialBricksRootModule.forRoot(),

    UserStateModule.forRoot(),
    AuthorisationModule.forRoot(environment, environment.production),
    EnvironmentConfigModule.forRoot(environment),

    AppConfigurationModule.forRoot(environment, environment.production),
    DateConfigurationModule.forRoot(),
    FirebaseConfigurationModule.forRoot(!environment.production, environment.useEmulators),
    MultiLangModule.forRoot(true),
    // UserNavModule,

    MatProgressBarModule,

    // AppConfigModule.forRoot(),

    // DataModule.forRoot(),
    OrgStateModule.forRoot(),
    StoriesStateModule.forRoot(),
    StoryBlocksStateModule.forRoot(),
    StoryBlockConnectionsStateModule.forRoot(),
    VariablesConfigStateModule.forRoot(),
    ProgressMonitoringStateModule.forRoot(),
    EndUsersStateModule.forRoot(),

    // FlowsStateModule.forRoot(),
    // ChatsStateModule.forRoot(),
    // MessagingStateModule.forRoot(),
    // CommChannelsStateModule.forRoot(),

    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
