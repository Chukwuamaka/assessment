import { Component } from '@angular/core';

@Component({
    selector: 'claims-info',
    template: `
        <div>
            <a [routerLink]="['/setup-claims']">Setup Claims Items</a>
            <a [routerLink]="['/setup-rates']">Setup Rates</a>
            <a [routerLink]="['/claims-info']">Claims Additional Info</a>
        </div>
        <h3>Unfortunately this page is not available at the moment. Please, check back later</h3>
    `,
    styles: ['']
})

export class ClaimsInfoComponent {

}