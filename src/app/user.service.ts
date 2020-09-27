import { Injectable } from '@angular/core';
import { user } from './userModel/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
  }

  getUserModel(response) : user {
    console.log('in the service. Parsing user.');
    console.log(response);
    let newUser = new user;
    newUser.name = response.name;
    newUser.followers = response.followers;
    newUser.id = response.id;
    newUser.login = response.login;
    return newUser;
  }
}
