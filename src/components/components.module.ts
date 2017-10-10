import { NgModule } from '@angular/core';
import { FeedingComponent } from './feeding/feeding';
import { AnimalStatusComponent } from './animal-status/animal-status';
import { AnimalBehaviorComponent } from './animal-behavior/animal-behavior';
@NgModule({
	declarations: [FeedingComponent,
    AnimalStatusComponent,
    AnimalBehaviorComponent],
	imports: [],
	exports: [FeedingComponent,
    AnimalStatusComponent,
    AnimalBehaviorComponent]
})
export class ComponentsModule {}
