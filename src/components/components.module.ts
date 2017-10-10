import { NgModule } from '@angular/core';
import { FeedingComponent } from './feeding/feeding';
import { AnimalStatusComponent } from './animal-status/animal-status';
import { AnimalObservationComponent } from './animal-observation/animal-observation';
@NgModule({
	declarations: [FeedingComponent,
    AnimalStatusComponent,
    AnimalObservationComponent],
	imports: [],
	exports: [FeedingComponent,
    AnimalStatusComponent,
    AnimalObservationComponent]
})
export class ComponentsModule {}
