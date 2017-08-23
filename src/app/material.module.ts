import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule,
         MdToolbarModule,
         MdIconModule, 
         MdSidenavModule, 
         MdCardModule,
         MdInputModule, 
         MdButtonModule, 
         MdCheckboxModule,
         MdSelectModule ,
         MdSnackBarModule} from '@angular/material';

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
    MdIconModule,
    MdSelectModule,
    MdSnackBarModule
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
    MdIconModule,
    MdSelectModule,
    MdSnackBarModule
  ]
})
export class MaterialModule { }
