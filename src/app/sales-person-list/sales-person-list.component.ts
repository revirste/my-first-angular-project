import { Component } from '@angular/core';
import { SalesPerson } from './SalesPerson';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  imports: [NgFor, CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPeopleList: SalesPerson[] = [
    new SalesPerson("John", "Smith", "jsmith@store.com", 25),
    new SalesPerson("James", "Doe", "jdoe@store.com", 57),
    new SalesPerson("Olivia", "Brown", "obrown@store.com", 13),
    new SalesPerson("Sam", "Greene", "sgreene@store.com", 27)
  ]

}