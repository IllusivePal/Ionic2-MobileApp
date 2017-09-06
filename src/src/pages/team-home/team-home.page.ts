import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {StandingsComponent,TeamDetailComponent} from '../pages';

@Component({
    selector:'team-home',
    templateUrl:'team-home.page.html'
})

export class TeamHomeComponent{
    teamDetailTab = TeamDetailComponent;
    standingsTab = StandingsComponent;
    constructor(private nav: NavController){}
}