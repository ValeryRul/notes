import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LabelsApiService } from '@appApi/labels/labels-api.service';
import { AuthService } from '@appServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
constructor(private auth:AuthService, private userApi:LabelsApiService) {
  
}

ngOnInit(): void {
  this.auth.login({email: 'alex.zwezh@gmail.com', password: 'fwWwT@H7VF9LbtF'}).subscribe(()=> {
    this.userApi.getAll().subscribe(res => {
      console.info(res);
    });
  })

}

}
