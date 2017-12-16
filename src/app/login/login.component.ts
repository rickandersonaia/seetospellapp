import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {rembember: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent> ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('UserDataModel: ', this.user);
    this.dialogRef.close();
  }

}
