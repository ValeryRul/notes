import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LabelsApiService } from '@appApi/labels/labels-api.service';

@Component({
  selector: 'gkc-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  constructor(private todosApiService: LabelsApiService) {}

  ngOnInit(): void {
    this.todosApiService.getAll().subscribe(
      res => {console.info(res);}, 
      err => { console.error(err);
      })
  }
}
