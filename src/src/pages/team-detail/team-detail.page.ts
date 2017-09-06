import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
    selector:'team-detail',
    templateUrl:'team-detail.page.html'
})

export class TeamDetailComponent{
    
    team:any;
    constructor(private nav: NavController, private navParams: NavParams){
        this.team = this.navParams.data;
        console.log("**nav params: ", this.navParams);
    }
}