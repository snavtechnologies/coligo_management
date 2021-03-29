import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // MatAutocompleteModule,
  // MatButtonModule,
  // MatButtonToggleModule,
  MatFormFieldModule,
  MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  // MatIconModule,
  MatInputModule,
  // MatListModule,
  // MatMenuModule,
  MatNativeDateModule,
  // MatPaginatorModule,
  MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  // MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatTooltipModule,
  // MatStepperModule,
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // MatAutocompleteModule,
    // MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    MatDatepickerModule,
    // MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    // MatIconModule,
    MatInputModule,
    // MatListModule,
    // MatMenuModule,
    MatNativeDateModule,
    // MatPaginatorModule,
    MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatSnackBarModule,
    MatDividerModule,
    MatFormFieldModule
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
