import { Component, OnInit, Input, ViewEncapsulation, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { RoleService } from './role.service';
import { Role } from './role';
import swal from 'sweetalert2';
import {fadeInOutTranslate} from '../shared/elements/animation';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOutTranslate]
})

export class ManageRolesComponent implements OnInit {

 // @ViewChild('treeview', {})
  showDialog = false;
  @Input() visible: boolean;

  statusCode: number;
  processValidation = false;
  roleIdToAdded = null;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public alertRes: any;
  public SelectedFile: File = null;
  public updateId;
  updaterole = false;
  addrole = false;

  dropdownEnabled = true;
    items: TreeviewItem[];
    values: number[];
    config = TreeviewConfig.create({
    hasAllCheckBox: false,
        hasCollapseExpand: true,
        decoupleChildFromParent: false,
    });

  public rolesData: any = {
    'dono': '',
    'description': '',
    'id': ''
  };

  public addData: any = {
    'dono': '',
    'description': '',
    };

  roleForm = new FormGroup({
    rolename: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  constructor(private roleService: RoleService, private router: Router) {}

  ngOnInit(): void {
   // this.getAllRoles();
    this.items = this.roleService.getBooks();
  }

  onFileSelected(event) {
    this.SelectedFile = <File>event.target.files[0];
  }

  // public addRoles(data, saveId) {
  //   document.getElementById(saveId).classList.add('md-show');
  //   if (this.roleForm.valid) {
  //     if (this.roleIdToAdded === null) {
  //       const roles = new Role(this.roleIdToAdded, data.dono, data.pno, data.quality, data.description, data.pono);
  //       roles.id = this.roleIdToAdded;
  //       this.roleService.createRole(roles)
  //         .subscribe(data => {
  //           document.getElementById(saveId).classList.remove('md-show');
  //           this.getAllRoles();
  //           swal({
  //             title: 'Good job!',
  //             text: 'Your file saved Successfully!',
  //             type: 'success'
  //           });
  //             },
  //           error => error);
  //     }
  //     this.roleForm.reset();
  //    }
  //   }

  /**
   * Edit method
   * @param data
   */

  // public editRole(eleId, roleData) {
  //   document.getElementById(eleId).classList.add('md-show');
  //     // this.rolesData = roleData;
  //   this.updateId = roleData.id;
  //   this.roleForm.setValue({dono: roleData.dono, pno: roleData.pno, quality: roleData.quality,
  //     description: roleData.description, pono: roleData.pono});
  // }

  /**
   * updateData
   */

  // public updateData(eleId, newData) {
  //   const roles: any = newData;
  //   if (this.roleForm.valid) {
  //   this.roleService.editRoleById(this.updateId, roles)
  //     .subscribe(success => {
  //       this.getAllRoles();
  //       document.getElementById(eleId).classList.remove('md-show');
  //       // this.toastr.info('Role Updated Succesfully!');
  //       swal({
  //         title: 'Good job!',
  //         text: 'Your file Updated Successfully!',
  //         type: 'success'
  //       });
  //     },
  //       error => error);
  //     }
  // }

  // getAllRoles(): any {
  //   this.roleService.getAllRoles()
  //     .subscribe(
  //       (data) => {
  //         this.data = data;
  //           // errorCode => this.statusCode = errorCode;
  //       });
  // }

//   deleteRole(role: string) {
//     swal.fire({title: 'Are you sure?',
//       text: 'You want to delete',
//       type: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.value) {
//         this.roleService.deleteRoleById(role)
//         .subscribe(success => {
//           this.getAllRoles();
//         swal.fire(
//           'Deleted!',
//           'Your file has been deleted.',
//           'success'
//         );
//       });
//   }
// });
//   }


  toggleViewEditRoles() {
   // this.editCustomerIcon = (this.editCustomerIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.updaterole = !this.updaterole;
  }
  toggleViewAddRoles() {
    // this.editCustomerIcon = (this.editCustomerIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
     this.addrole = !this.addrole;
   }

  // public tree: TreeViewComponent;
  //   // defined the array of data
  //   // tslint:disable-next-line: member-ordering
  //   public countries: Object[] = [
  //       { id: 1, name: 'Dashboard', hasChild: false, expanded: false },
  //       { id: 2, name: 'Adminstration', hasChild: true, expanded: true},
  //       { id: 3, pid: 2, name: 'ManageRoles'},
  //       { id: 4, pid: 2, name: 'ManageUsers' },
  //       { id: 5, name: 'Manage Customers', hasChild: true, expanded: false},
  //       { id: 6, pid: 5, name: 'CustomersDetails' },
  //       { id: 7, name: 'Component', hasChild: true, expanded: false},
  //       { id: 8, pid: 7, name: 'subcomp1', hasChild: false },
  //       { id: 9, pid: 7, name: 'subcomp2' },
  //       { id: 10, pid: 7, name: 'subcomp3' },
  //       // { id: 10, pid: 7, name: 'Acre' },
  //       // { id: 11, name: 'China', hasChild: true },
  //       // { id: 12, pid: 11, name: 'Guangzhou' },
  //       // { id: 13, pid: 11, name: 'Shanghai' },
  //       // { id: 14, pid: 11, name: 'Beijing' },
  //       // { id: 15, pid: 11, name: 'Shantou' },
  //       // { id: 16, name: 'France', hasChild: true },
  //       // { id: 17, pid: 16, name: 'Pays de la Loire' },
  //       // { id: 18, pid: 16, name: 'Aquitaine' },
  //       // { id: 19, pid: 16, name: 'Brittany' },
  //       // { id: 20, pid: 16, name: 'Lorraine' },
  //       // { id: 21, name: 'India', hasChild: true },
  //       // { id: 22, pid: 21, name: 'Assam' },
  //       // { id: 23, pid: 21, name: 'Bihar' },
  //       // { id: 24, pid: 21, name: 'Tamil Nadu' },
  //       // { id: 25, pid: 21, name: 'Punjab' }
  //   ];

  //   // maps the appropriate column to fields property
  //   public field: Object = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  //   // set the CheckBox to the TreeView

    // set the checknodes to the TreeView
   // public checkedNodes: string[] = ['2', '6'];
    public nodeChecked(args): void {
      alert("The checked node's id is: " + this.items);

    }


  /**
 * upload File
 **/

}
