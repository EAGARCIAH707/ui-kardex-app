import {Component, OnInit} from '@angular/core';
import {KardexDTO} from '../../shared/domain/kardex/kardexDTO';
import {KardexService} from '../../Services/kardex/kardex.service';
import {OutDTOl} from '../../shared/domain/kardex/outDTO';
import {InDTO} from '../../shared/domain/kardex/inDTO';
import {RecordsDTO} from '../../shared/domain/kardex/recordsDTO';
import {HttpErrorResponse} from '@angular/common/http';
import {RecordsTableDTO} from '../../shared/domain/kardex/recordsTableDTO';
import {ProductComponent} from '../product/product.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {InComponent} from '../in/in.component';
import {OutComponent} from '../out/out.component';
import {NgxSpinnerService} from 'ngx-spinner';

export interface InOutData {
  kardexId: number;
  unitCost: number;
}

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {
  sales: OutDTOl[];
  purchased: InDTO[];
  kardex$: KardexDTO[];
  selectProduct: KardexDTO;
  currency: 'USD';
  records: RecordsDTO[];
  recordsTable: RecordsTableDTO[] = [];
  displayedColumns: string[] = ['fecha', 'detalle', 'cantidad1', 'valorUnitario1', 'valorTotal1',
    'cantidad2', 'valorUnitario2', 'valorTotal2', 'cantidad3', 'valorUnitario3', 'valorTotal3'];

  constructor(private spinnerService: NgxSpinnerService,
              private kardexService: KardexService,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.spinnerService.show();
    this.kardexService.getKardex().subscribe(res => {
      this.kardex$ = res;
      this.spinnerService.hide();
      this.openSnackBar('Datos Cargados Exitosamente!', 'Ok');
    }, (err: HttpErrorResponse) => {
      this.openSnackBar('Error al cargar los datos', 'Fail');
    });

  }

  changeProduct($event: any) {
    this.recordsTable = [];
    this.selectProduct = $event;
    this.sales = $event.outList;
    this.purchased = $event.inList;
    this.records = $event.inList.concat($event.outList);
    if (this.records.length > 1) {
      this.records.sort(function (a, b) {
        if (new Date(a.date) > new Date(b.date)) {
          return 1;
        } else if (new Date(a.date) < new Date(b.date)) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    this.recordsTable = this.orderTable();
  }

  orderTable() {
    this.records.map(m => {
      const recordTable = new RecordsTableDTO();
      if (m.type === 0) {
        recordTable.cantidad1 = m.quantity;
        recordTable.valorUnitario1 = m.unitValue;
        recordTable.valorTotal1 = m.totalValue;
      } else if (m.type === 1) {
        recordTable.cantidad2 = m.quantity;
        recordTable.valorUnitario2 = m.unitValue;
        recordTable.valorTotal2 = m.totalValue;
      }
      recordTable.fecha = m.date;
      recordTable.detalle = m.observation;
      recordTable.cantidad3 = m.kquantity;
      recordTable.valorUnitario3 = m.kunitValue;
      recordTable.valorTotal3 = m.ktotalValue;
      this.recordsTable.push(recordTable);
    });
    return this.recordsTable;
  }

  openDialog(id: number): void {
    let dialogRef;
    switch (id) {
      case 1: {
        dialogRef = this.dialog.open(ProductComponent, {
          width: '600px'
        });
        break;
      }
      case 2 : {
        dialogRef = this.dialog.open(InComponent, {
          width: '600px', data: {
            kardexId: this.selectProduct.idKardex,
            unitCost: this.selectProduct.unitCost,
          }
        });
        break;
      }
      case 3 : {
        dialogRef = this.dialog.open(OutComponent, {
          width: '600px', data: {
            kardexId: this.selectProduct.idKardex,
            unitCost: this.selectProduct.unitCost,
          }
        });
        break;
      }
    }
  }

  seeIn() {
    this.recordsTable = [];
    this.records = this.purchased;
    this.recordsTable = this.orderTable();
  }

  seeOut() {
    this.recordsTable = [];
    this.records = this.sales;
    this.recordsTable = this.orderTable();
  }

  openSnackBar(message, status) {
    this._snackBar.open(message, status, {
      duration: 3000,
    });
  }
}
