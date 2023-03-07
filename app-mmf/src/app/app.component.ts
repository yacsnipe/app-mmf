import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {initializeApp} from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mmfApp';

  constructor() {
  }

  ngOnInit(): void {
    initializeApp(environment.firebase);
  }
}

