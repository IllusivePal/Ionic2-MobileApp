import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TournamentComponent} from '../pages';
@Component({
    selector:'my-teams',
    templateUrl:'my-teams.page.html'
})

export class MyTeamsComponent{
    
    constructor(private nav: NavController){}

    goToTournament() : void
    {
        this.nav.push(TournamentComponent);
    }
}