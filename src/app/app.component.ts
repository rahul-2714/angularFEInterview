import { Component, VERSION } from '@angular/core';
import { animals } from './data/animals-data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	animals = animals;
}
