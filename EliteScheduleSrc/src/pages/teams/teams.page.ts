import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamDetailComponent} from '../pages';

@Component({
    selector:'teams',
    templateUrl:'teams.page.html'
})

export class TeamsComponent{
    
    teams = [
        { id: 1 , name: 'HC Elite'},
        { id: 2, name: 'Team Takeover'},
        { id: 3, name: 'DC Thunder'}

    ];
    constructor(private nav:NavController){}
    
    itemTapped($events,team)
    {
        this.nav.push(TeamDetailComponent,team)
    }
}