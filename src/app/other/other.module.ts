import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { LayoutComponent } from './layout.component';
import { OtherComponent } from './other.component';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, OtherRoutingModule],
  declarations: [LayoutComponent, OtherComponent, DetailsComponent],
})
export class OtherModule {}
