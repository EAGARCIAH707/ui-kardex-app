import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KardexService} from '../../Services/kardex/kardex.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {InOutData} from '../kardex/kardex.component';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  out: FormGroup;

  constructor(private formGroup: FormBuilder,
              private kardexService: KardexService,
              public dialogRef: MatDialogRef<OutComponent>,
              private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: InOutData) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.out = this.formGroup.group({
      quantity: ['', [Validators.required]],
      kardexId: [this.data.kardexId, [Validators.required]],
      observation: ['', [Validators.required]],
      unitValue: [this.data.unitCost],
      date: [new Date()],
    });
  }

  submitOut() {
    if (this.out.valid) {
      this.kardexService.addOut(this.out.value).subscribe(res => {
        this.openSnackBar('Creado exitosamente', 'Ok');
      }, (error: HttpErrorResponse) => {
        this.openSnackBar('No fue posible crear', 'Fail');
      });
    }
  }

  openSnackBar(message, status) {
    this._snackBar.open(message, status, {
      duration: 4000,
    });
  }

  hidden() {
    this.dialogRef.close();
  }

}
