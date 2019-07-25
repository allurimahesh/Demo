import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  editCustomerIcon = 'icofont-edit';
  editCustomer = true;


  passwordFrom = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });


  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(`assets/data/customerdetails.json`)
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
    ((event.target.parentElement.parentElement).parentElement.parentElement).classList.remove('md-show');
  }
  closemyModal(event){
    ((event.target.parentElement.parentElement).parentElement.parentElement).classList.remove('md-show');
  }
  closeModal(event){
    document.getElementById(event).classList.remove('md-show');
  }

  deletecustomer() {
    swal.fire({title: 'Are you sure?',
    text: 'You want to delete',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });
  }

}
