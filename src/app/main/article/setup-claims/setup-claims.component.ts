import { Component } from '@angular/core';

@Component({
    selector: 'setup-claims',
    template: `
        <div class="container">
            <div class="views">
                <a [routerLink]="['/setup-claims']" id="current-view">Setup Claims Items</a>
                <a [routerLink]="['/setup-rates']">Setup Rates</a>
                <a [routerLink]="['/claims-info']">Claims Additional Info</a>
            </div>

            <div class="content">
                <p>Unfortunately this page is not available at the moment. Please, check back later.</p>
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
            padding: 10% 0 34% 10%;
        }
    `]
})

export class SetupClaimsComponent {

}