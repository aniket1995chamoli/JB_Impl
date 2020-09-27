import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../userModel/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: user;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getResponse(response: any) {
    console.log('recieved in app component. Sending to service.');
    console.log(response);
    this.user = this.userService.getUserModel(response);
  }

}
