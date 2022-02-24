import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <mat-card>
    <mat-card-title> 404: Page Not Found </mat-card-title>
      <mat-card-content> We couldn't find that page! Not even with x-ray vision. </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/"> Take me Home </button>
      </mat-card-actions>
  </mat-card>
`,
  // Usa-se crase e não aspas. Pode adicionar styles (css) no template por aqui, conforme abaixo:
  styles: [
  `
    :host {
      text-align: center;
    }
  `
]
})
export class PageNotFoundComponent {
}
