import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { OtherService, AlertService } from '@app/_services';

@Component({
  templateUrl: './other.component.html',
})
export class OtherComponent implements OnInit {
  others: any;

  constructor(
    private otherService: OtherService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.otherService
      .getAll()
      .pipe(first())
      .subscribe((others) => {
        this.alertService.success('Other fetched succuessfully...', {
          keepAfterRouteChange: false,
        });
        this.others = others.data;
      });
  }
}
