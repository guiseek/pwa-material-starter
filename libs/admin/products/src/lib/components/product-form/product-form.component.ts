import { Product } from '@amd/core/entities';
import { createProductObject } from '@amd/shared/services';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'amd-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  destroy: Subject<void> = new Subject();

  @Input() set product(product: Product) {
    this.form.patchValue(product || {},
      { emitEvent: false }
    )
  }

  @Output()
  valueChange = new EventEmitter<Partial<Product>>();

  @Output()
  valueSubmitted = new EventEmitter<Product>();

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl(),
    price: new FormControl(),
    tags: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.valueSubmitted.emit(
        createProductObject(this.form.value)
      );
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
