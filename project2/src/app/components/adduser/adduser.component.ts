import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Users } from 'src/app/api/users';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

 users!: Users[];
 
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
   this.accountService.getUsers().subscribe((data: Users[]) => {
      this.users = data; 
    })
  //}

}
}
