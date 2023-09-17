import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {

  form: FormGroup; 
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: UntypedFormBuilder,
  ) {}

  onAcceptClick(): void {
    
    this.dialogRef.close(this.data.textAreaValue);
  }

  Close(): void {
    
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      textAreaValue: ["", Validators.compose([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(199),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s,.]*$/)
      ]),],
    });
  }


}
