import {Component, NgZone, OnInit} from '@angular/core';
import 'firebase/auth';


@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  dashName: string = 'test';

  constructor(private _zone: NgZone) {

  }

  ngOnInit() {

    const today = new Date();

    if (today.getDay() > 0 && today.getDay() < 4) {
      this.openSnackBar('', 'hello', 10000);
    }
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._zone.run(() => {
    });
  }

}
