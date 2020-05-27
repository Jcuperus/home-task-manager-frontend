import { NgModule } from "@angular/core";
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CheckboxGroupComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CheckboxGroupComponent
    ]
})
export class CommonComponentsModule {
    
}