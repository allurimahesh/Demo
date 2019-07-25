import {Injectable} from '@angular/core';
//import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import { TreeviewItem } from 'ngx-treeview';
// import {Role} from './role';

@Injectable()

export class RoleService {

  rolesUrl = `assets/data/roles.json`;

constructor(private http: HttpClient) { }

// getAllRoles(): Observable<number> {
//   // console.log(this.rolesUrl, Role);
//   return this.http.get(this.rolesUrl)
//    .map(this.extractData)
//     .catch(this.handleError);
// }

getBooks(): TreeviewItem[] {
  const itCategory = new TreeviewItem({
      text: 'CBM', value: 1, children: [
        { text: 'Dashbaord', value: 11},

         { text: 'Adminstration', value: 2, children: [
            {text: 'ManageRoles', value: 21, checked: false},
            {text: 'ManageUsers', value: 22},
            {text: 'CustomersDetails', value: 23, checked: false},
          ]
         },

         { text: 'ContentPages', value: 3, children: [
          {text: 'Content', value: 31, checked: false}
        ]
       },
          // {
          //     text: 'Programming', value: 91, children: [{
          //         text: 'Frontend', value: 911, children: [
          //             { text: 'Angular 1', value: 9111 },
          //             { text: 'Angular 2', value: 9112 },
          //             { text: 'ReactJS', value: 9113, disabled: true }
          //         ]
          //     }, {
          //         text: 'Backend', value: 912, children: [
          //             { text: 'C#', value: 9121 },
          //             { text: 'Java', value: 9122 },
          //             { text: 'Python', value: 9123, checked: false, disabled: true }
          //         ]
          //     }]
          // },
      ]
  });

  return [itCategory];
}

// createRole(roles): Observable<number> {
//   const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//   const options = new RequestOptions({ headers: cpHeaders });
//     return this.http.post(this.rolesUrl, roles, options)
//            .map(success => success.status)
//            .catch(this.handleError);
// }

//  editRoleById(id: string, roles: any): Observable<number> {
//   const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//   const options = new RequestOptions({ headers: cpHeaders });
//     return this.http.put(this.rolesUrl + '/' + id, JSON.stringify(roles), options)
//    .map(success => success.slice)
//    .catch(this.handleError);
//   }

// deleteRoleById(roles: string): Observable<number> {
//   const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//   const options = new RequestOptions({ headers: cpHeaders });
//   return this.http.delete(this.rolesUrl + '/' + roles)
//    .map(success => success.status)
//    .catch(this.handleError);
// }

// private extractData(res: Response) {
//   const body = res.json();
//     return body;
// }
// private handleError (error: Response | any) {
// return Observable.throw(error.status);
// }
}
