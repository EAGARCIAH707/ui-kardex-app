import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {KardexService} from '../../Services/kardex/kardex.service';
import {HttpErrorResponse} from '@angular/common/http';
import {InOutData} from '../kardex/kardex.component';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {
  _in: FormGroup;

  constructor(private formGroup: FormBuilder,
              private kardexService: KardexService,
              public dialogRef: MatDialogRef<InComponent>,
              private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: InOutData) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this._in = this.formGroup.group({
      quantity: ['', [Validators.required]],
      kardexId: [this.data.kardexId, [Validators.required]],
      observation: ['', [Validators.required]],
      unitValue: [this.data.unitCost],
      date: [new Date()],
    });
  }

  submitIn() {
    if (this._in.valid) {
      this.kardexService.addIn(this._in.value).subscribe(res => {
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
