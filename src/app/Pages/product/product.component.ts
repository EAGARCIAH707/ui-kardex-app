import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../Services/product/product.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialogRef, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: FormGroup;

  constructor(private formGroup: FormBuilder,
              private productService: ProductService,
              public dialogRef: MatDialogRef<ProductComponent>,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.product = this.formGroup.group({
      name: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      purchasePrice: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      salePrice: ['', [Validators.required]]
    });
  }

  submitProduct() {
    if (this.product.valid) {
      this.productService.createProduct(this.product.value).subscribe(res => {
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
