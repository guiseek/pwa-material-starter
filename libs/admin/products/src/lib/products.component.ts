import { Product } from '@amd/core/entities';
import { ProductService } from '@amd/shared/services';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'amd-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();

  navLinks = [
    { route: '/auth', label: 'Login' },
    { route: '/', label: 'Dashboard' },
    { route: '/products', label: 'Produtos' },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: MatTableDataSource<Product>;

  displayedColumns = ['id', 'name', 'price', 'description'];

  selected: Product;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.service.collection()
      .valueChanges({
        idField: 'id'
      }).pipe(
        takeUntil(this.destroy$)
      ).subscribe((data = []) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  onSelect(value: Product) {
    this.selected = value;
  }

  onSubmit(value: Product) {
    if (value.id) {
      this.service.edit(value);
    } else {
      this.service.add(value);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
