import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from '@appServices';

@Component({
  selector: 'gkc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  loading$: Observable<boolean>;

  constructor(loaderService: LoaderService) {
    this.loading$ = loaderService.loading$;
  }
}
