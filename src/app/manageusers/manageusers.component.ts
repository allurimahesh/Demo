import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {environment} from '../../environments/environment';
//import {Http, Headers} from '@angular/http';
import swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


declare var $: any;
declare let d3: any;

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss'],
})

export class ManageUsersComponent implements OnInit {

  public data: any;
  public Dept: any;
  public Role: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  public statusCode: number;
  userIdToAddData = null;

  public userAddData: any = {
    'employeeID': '',
    'emailID': '',
    'department': '',
    'password': '',
    'role': ''
  };


  public usersEditData: any = {
    'id' : '',
    'employeeID': '',
    'emailID': '',
    'department': '',
    'password': '',
    'role': ''
  };

   userForm = new FormGroup({
    username : new FormControl('', Validators.required),
    // emailID: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    emailID: new FormControl('', Validators.required),
    phoneno: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsersData();
    this.getDeptData();
    this.getRoleData();
    this.http.get(`assets/data/users.json`)
    .subscribe((data) => {
      this.data = data;
    });
  }

  getUsersData(): any {
    this.http.get(environment.baseURL + 'Users/GetAllUsers')
    .subscribe((res) => {
        let d = res;
        this.data = d['user'];
      },error => {
        let d = error.json();
        swal.fire('Error!', d.message, 'success');
      });
  }

  getDeptData(): any {
    this.http.get(environment.baseURL + 'Users/GetDepartments')
    .subscribe((res) => {
        let d = res;
        this.Dept = d['dropDownDetails'];
      }, error => {
        let d = error.json();
        swal.fire('Error!', d.message, 'success');
      });
  }

  getRoleData(): any {
    this.http.get(environment.baseURL + 'Users/GetRoles')
    .subscribe((res) => {
        let d = res;
        this.Role = d['dropDownDetails'];
      }, error => {
        let d = error.json();
        swal.fire('Error!', d.message, 'success');
      });
  }

  public userDataSubmit(saveId){
    document.getElementById(saveId).classList.add('md-show')
    if(this.userForm.valid){
      if(this.userIdToAddData === null){
        let users: any = {'id': this.userIdToAddData,
                           'employeeID': this.userForm.value.employeeID,
                           'emailID': this.userForm.value.emailID,
                           'department': this.userForm.value.department,
                           'password': this.userForm.value.password,
                           'role': this.userForm.value.role
                            }
            this.http.post(environment.baseURL + 'Users/CreateUser', users)
            .subscribe((res) => {
                document.getElementById(saveId).classList.remove('md-show');
                this.getUsersData();
               // this.userForm.reset();
              }, error => {
                let d = error;
                swal.fire('Error!', d.message, 'success');
              });

      }
    };
    this.userAddData.employeeID = '';
    this.userAddData.emailID = '';
    this.userAddData.department = '';
    this.userAddData.password = '';
    this.userAddData.role = '';
  }
  /**
   * Edit method
   * @param data
   */

  public editUser(id){
    // document.getElementById(eleId).classList.add('md-show');
    // this.usersEditData = userData;
      this.http.get(environment.baseURL + 'Users/GetUserDetails/?Id=' + id)
      .subscribe((res) => {
        let d = res;
        document.getElementById('effect-12').classList.add('md-show');
        this.usersEditData = d
      }, error => {
        let d = error.json();
        swal.fire('Error!', d.message, 'success');
      });
  }

  public userUpdateData(eleId, newData) {
        let users: any = newData
        this.http.post(environment.baseURL + 'Users/CreateUser', users)
        .subscribe((res) => {
          this.getUsersData();
          document.getElementById(eleId).classList.remove('md-show');
        }, error => {
          let d = error;
          swal.fire('Error!', d.message, 'success');
        });

    }

    deleteuser(id) {
    this.http.get(environment.baseURL + 'Users/DeleteUser/?Id=' + id)
    .subscribe((res) => {
      this.getUsersData();
     // this.toastr.warning('User Deleted Succesfully');
    }, error => {
      let d = error.json();
      swal.fire('Error!', d.message, 'success');
    });
    }

    deleteUser() {
      swal.fire({title: 'Are you sure?',
      text: 'You want to delete',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
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
}
