import { Component, Input, OnInit } from '@angular/core';
import { user } from '../userModel/user.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input('user') user: user;

  constructor() { }

  ngOnInit(): void {
  }

}
