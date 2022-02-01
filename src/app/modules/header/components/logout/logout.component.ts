import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'app/core/types/user-api.types';

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
