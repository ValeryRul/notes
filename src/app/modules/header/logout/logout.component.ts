import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gkc-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  @Output()
  onLogoutEvent = new EventEmitter();

  constructor() {}

  onLogoutClick() {
    this.onLogoutEvent.emit();
  }
}
