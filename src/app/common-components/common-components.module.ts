import { NgModule } from "@angular/core";
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title.component';

@NgModule({
    declarations: [
        CheckboxGroupComponent,
        PageTitleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CheckboxGroupComponent,
        PageTitleComponent
    ]
})
export class CommonComponentsModule {
    
}