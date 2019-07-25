import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
        ]
      },
      {
        label : 'Adminstration',
        main: [
          {
            state: 'manageroles',
            name: 'Manage Roles',
            type: 'link',
            icon: 'ti-layout-list-thumb'
          },
          {
            state: 'manageusers',
            name: 'Manage Users',
            type: 'link',
            icon: 'ti-id-badge'
          },
          {
            state: 'customerdetails',
            name: 'Customer Details',
            type: 'link',
            icon: 'ti-user',
          },
        ]
      },
      // {
      //   label: 'Manage Customers',
      //   main: [
      //     {
      //       state: 'customerdetails',
      //       name: 'Customer Details',
      //       type: 'link',
      //       icon: 'ti-user',
      //     },
      //   ]
      // },
       {
        label: 'Content Pages',
        main: [
          {
            state: 'contentpage',
            name: 'Content Page',
            type: 'link',
            icon: 'ti-pencil-alt',
          },
        ]
      },
      //  {
      //   label : 'Password',
      //   main: [
      //     {
      //       state: 'changepassword',
      //       name: 'Change Password',
      //       type: 'link',
      //       icon: 'key'
      //     }
      //   ]
      // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
