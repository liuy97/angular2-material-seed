import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';

export function main() {

  describe('App component', () => {

    const config: Route[] = [
      { path: 'about', component: AboutComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule,
          MatAutocompleteModule,
          MatCheckboxModule,
          MatDatepickerModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatMenuModule,
          MatSidenavModule,
          MatToolbarModule,
          MatListModule,
          MatGridListModule,
          MatCardModule,
          MatStepperModule,
          MatTabsModule,
          MatExpansionModule,
          MatButtonModule,
          MatButtonToggleModule,
          MatChipsModule,
          MatIconModule,
          MatProgressSpinnerModule,
          MatProgressBarModule,
          MatDialogModule,
          MatTooltipModule,
          MatSnackBarModule,
          MatTableModule,
          MatSortModule,
          MatPaginatorModule,
          RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent,
          AppComponent,
          AboutComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})

class TestComponent {
}
