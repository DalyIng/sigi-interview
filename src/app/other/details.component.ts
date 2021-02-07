import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { OtherService, AlertService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
  id!: string;
  other!: any;

  constructor(
    private route: ActivatedRoute,
    private otherService: OtherService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.otherService
      .getOtherById(this.id)
      .pipe(first())
      .subscribe((other) => {
        this.alertService.info('Details fetched succuessfully...', {
          keepAfterRouteChange: false,
        });
        this.other = other.data;
      });
  }
}
