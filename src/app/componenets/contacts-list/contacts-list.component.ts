import { Component, OnInit } from '@angular/core';
import contactsList from '../../shared/data/contacts.data';
import {Contact} from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent{
contacts: Array<Contact> = contactsList;
};