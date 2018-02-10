import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/*The @Injectable() decorator tells Angular that this service might itself
have injected dependencies. Even if we didn't have dependencies 
its good practice to keep the decorator */
@Injectable()
export class UserService {
/*This is a typical "service-in-service" scenario: you
 inject the MessageService into the HeroService which 
 is injected into the HeroesComponent. */
  constructor(private messageService: MessageService) { }


  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  /*Like getUsers(), getUser() has an asynchronous signature. It returns 
  a mock user as an Observable, using the RxJS of() function.*/
  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
