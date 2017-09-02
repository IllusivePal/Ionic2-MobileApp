import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamDetailComponent} from '../pages';

@Component({
    selector:'teams',
    templateUrl:'teams.page.html'
})

export class TeamsComponent{
    
    constructor(private nav:NavController){}

    itemTapped()
    {
        this.nav.push(TeamDetailComponent)
    }
}