import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['./app.styles.css']
})

export class AppComponent implements OnInit {
    title: string = 'Tour of Heroes';

    constructor() { }

    ngOnInit() { }
}