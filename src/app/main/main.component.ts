import { Component } from '@angular/core';

@Component({
    selector: 'main',
    template: `
        <div>
            <header></header>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        div {
            background-color: #F8F9FD;
        }
    `]
})

export class MainComponent {
    
}