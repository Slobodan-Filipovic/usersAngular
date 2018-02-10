import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService }  from '../user.service';
 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

/*To optain the user which we are going to display we needed to get
route that created it
Exart the id from the route
Acquire the hero with that id from the server via the UserService */
export class UserDetailComponent implements OnInit {

  @Input() user = User;
  /*ActiveRoute holds the information about the
  route to this instance of the UserDetailComponent. 
  This component is interested in the route's bag of 
  parameters extracted from the URL*/
  constructor(private route: ActivatedRoute,
    /*The UserService gets user data from the remote server and this component
    will use it to get the user to display */
    private userService: UserService,
    /*The location is an angular service for interacting with the browser
     */
    private location: Location) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    /*WTF IS GOING ON HERE??!!!?!??! */
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
