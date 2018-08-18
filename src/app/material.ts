import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule
        
      ],
      exports:[
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule
      ]
})
export class MaterialModule {}