import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;
  value: string = "Enter text";
  url: string = "https://api.github.com/users/";
  displayNone: string;
  itemImageUrl: string = "https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg";
  @Output() response = new EventEmitter();

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  getDetails() {
    let obs = this.http.get(this.url + this.name);
    console.log('fetched response in home component. Sending to app component');
    obs.subscribe((response) => this.response.emit(response));
  }

  logInput(value) {
    console.log('the entered value is : ' + value);
  }

  delete() {
    this.displayNone = this.displayNone ? '' : 'none';
  }

}
