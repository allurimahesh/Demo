import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customereditdetails',
  templateUrl: './customereditdetails.component.html',
  styleUrls: ['./customereditdetails.component.scss']
})
export class CustomerEditDetailsComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  editCustomerIcon = 'icofont-edit';
  editCustomer = true;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(`assets/data/customerorderdetails.json`)
      .subscribe((data) => {
        this.data = data;
      });
  }

  toggleViewEditCustomers() {
    this.editCustomerIcon = (this.editCustomerIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editCustomer = !this.editCustomer;
  }


  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
