import {Component, Inject} from '@angular/core';
import {LoadingService} from "./services/loading.service";
import {style, state, animate, transition, trigger} from '@angular/animations';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent {
  constructor(public loading_service: LoadingService, private dialog: MatDialog) {
    let ref: MatDialogRef<LoadingDialog> | null = null;

    loading_service.is_loading.subscribe(is_loading => {
      if (is_loading) {
        if (!ref) ref = this.dialog.open(LoadingDialog, {width: '250px', disableClose: true})
      } else {
        if (ref) ref.close();
        ref = null;
      }
    })
  }
}


@Component({
  template: '<p>Loading...</p>',
})
class LoadingDialog {
  constructor(public dialogRef: MatDialogRef<LoadingDialog>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
