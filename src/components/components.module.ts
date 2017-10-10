import { NgModule } from '@angular/core';
import { FeedingComponent } from './feeding/feeding';
import { AnimalStatusComponent } from './animal-status/animal-status';
import { AnimalObservationComponent } from './animal-observation/animal-observation';
import { AnimalBehaviorComponent } from './animal-behavior/animal-behavior';
@NgModule({
	declarations: [FeedingComponent,
    AnimalStatusComponent,
    AnimalObservationComponent,
    AnimalBehaviorComponent],
	imports: [],
	exports: [FeedingComponent,
    AnimalStatusComponent,
    AnimalObservationComponent,
    AnimalBehaviorComponent]
})
export class ComponentsModule {}
