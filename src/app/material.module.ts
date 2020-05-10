import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
// import {MatCheckboxModule} from'@angular/material/checkbox';
// import {MatFormFieldModule} from'@angular/material/form-field';
// import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material/input';

//import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatCardModule,
    // MatInputModule,
    // FormsModule,
    ],
    exports: [ 
        MatButtonModule,
    ]
    
})
export class MaterialModule{}