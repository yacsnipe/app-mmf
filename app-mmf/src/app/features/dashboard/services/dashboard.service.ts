import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiDashboardService} from './api-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient, private apiService: ApiDashboardService) {
  }
}

