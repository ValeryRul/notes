import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@appApi/user/user-api.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'gkc-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  @Output() onLogoutEvent = new EventEmitter();
  @Input() user!: User | null;

  message = 'Загрузка данных...';

  constructor() {}

  onLogoutClick(): void {
    this.onLogoutEvent.emit();
  }
}
