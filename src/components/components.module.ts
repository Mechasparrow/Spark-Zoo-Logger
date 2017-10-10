import { NgModule } from '@angular/core';
import { FeedingComponent } from './feeding/feeding';
import { AnimalStatusComponent } from './animal-status/animal-status';
@NgModule({
	declarations: [FeedingComponent,
    AnimalStatusComponent],
	imports: [],
	exports: [FeedingComponent,
    AnimalStatusComponent]
})
export class ComponentsModule {}
