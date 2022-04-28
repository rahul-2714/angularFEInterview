import { Component, Input, OnInit } from '@angular/core';
import { Animal, AnimalTypeEnum } from '../../models/animal';

@Component({
	selector: 'animal-block',
	templateUrl: './animal-block.component.html',
	styleUrls: ['./animal-block.component.css'],
})
export class AnimalBlockComponent {
	@Input() animal!: Animal;
	animalTypeEnum = AnimalTypeEnum;
}
