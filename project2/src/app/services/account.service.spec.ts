import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root',
})

export class AccountService {
  constructor(private http: AccountService) {}
  getAllPlans() {
    return this.http.get(`${environment.baseURL}/plans`)
  }
}

/*describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */