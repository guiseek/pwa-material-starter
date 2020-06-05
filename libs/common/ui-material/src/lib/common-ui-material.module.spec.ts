import { async, TestBed } from '@angular/core/testing';
import { CommonUiMaterialModule } from './common-ui-material.module';

describe('CommonUiMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiMaterialModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiMaterialModule).toBeDefined();
  });
});
