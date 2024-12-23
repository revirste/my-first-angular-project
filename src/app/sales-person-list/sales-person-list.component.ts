import { Component } from '@angular/core';
import { SalesPerson } from './SalesPerson';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common'


@Component({
  selector: 'app-sales-person-list',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPeopleList: SalesPerson[] = [
    new SalesPerson("John", "Smith", "jsmith@store.com", 250),
    new SalesPerson("James", "Doe", "jdoe@store.com", 570),
    new SalesPerson("Olivia", "Brown", "obrown@store.com", 130),
    new SalesPerson("Sam", "Greene", "sgreene@store.com", 270)
  ]

}