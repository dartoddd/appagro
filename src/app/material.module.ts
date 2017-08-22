import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule,
         MdToolbarModule,
         MdIconModule, 
         MdSidenavModule, 
         MdCardModule,
         MdInputModule, 
         MdButtonModule, 
         MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdSidenavModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdSidenavModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class MaterialModule { }
