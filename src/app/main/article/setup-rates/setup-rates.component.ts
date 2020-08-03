import { Component } from '@angular/core';

@Component({
    selector: 'setup-rates',
    template: `
    <div class="container">
        <div class="views">
            <a [routerLink]="['/setup-claims']">Setup Claims Items</a>
            <a [routerLink]="['/setup-rates']" id="current-view">Setup Rates</a>
            <a [routerLink]="['/claims-info']">Claims Additional Info</a>
        </div>

        <div class="content">
            <h3>Setup Rates</h3>
            <new-rate></new-rate>
            <fixed-rates></fixed-rates>
            <variable-rates></variable-rates>
        </div>
    </div>
    `,
    styles: [`
        div.container {
            padding: 0 7%;
        }
        div.views a {
            display: inline-block;
            margin-right: 5px;
            padding: 18px 22px;
            border: 1px solid #E7E7E7;
            border-radius: 5px 5px 0 0;
            background-color: #E7E7E7;
            text-decoration: none;
            color: black;
        }

        div.views #current-view {
            background-color: #FFFFFF;
            padding-bottom: 14px;
            border-bottom: 4px solid #6EAC54;
        }

        div.content {
            background-color: #FFFFFF;
            border-radius: 7px;
            padding: 6% 3% 7% 5%;
        }

        div.content h3 {
            margin: 0 0 6%;
            background-color: #FFFFFF;
        }
    `]
})

export class SetupRatesComponent {

}