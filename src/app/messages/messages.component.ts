import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /*Added public messageService:MessageService so all messages are displayed
  over MessagesComponent, including the message sent by the UserService
  when it gets users */
  /* inside the constructor it's PUBLIC because the messageService
  must be public because we are binding it to the template */
  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

}
