import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';
import { TwainComponent } from './twain.component';

import { TwainService } from './twain.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, HighlightDirective, TitleCasePipe, TwainComponent],
    declarations: [HighlightDirective, TitleCasePipe, TwainComponent],
    providers:[TwainService]
})
export class SharedModule {

}