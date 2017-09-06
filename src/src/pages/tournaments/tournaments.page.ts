import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamsComponent} from '../pages';

@Component({
    selector:'tournaments',
    templateUrl:'tournaments.page.html'
})

export class TournamentComponent{
    
    constructor(private nav:NavController){}


    itemTapped()
    {
        this.nav.push(TeamsComponent);
    }
}