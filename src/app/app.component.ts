import { ChangeDetectionStrategy, Component } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))], { optional: true })
    ])
  ])
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  getState(outlet: any): any {
    return outlet.activated && outlet.activatedRoute.component.name;
  }
}
