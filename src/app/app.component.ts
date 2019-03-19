import {Component, Input} from '@angular/core';
import {Post} from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    posts: Post[] = [
        {
            title: 'Premier article',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            creaDate: new Date(),
            loveIts: -1
        },
        {
            title: 'Second article',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            creaDate: new Date(),
            loveIts: 1
        },
        {
            title: 'Troisième article',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            creaDate: new Date(),
            loveIts: 0
        }
    ];


}
