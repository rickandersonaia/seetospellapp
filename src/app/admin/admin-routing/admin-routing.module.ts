import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {AdminUserEditComponent} from '../admin-useredit/admin-useredit.component';
import {NewUserFormComponent} from '../usernewform/newuserform.component';
import {WorddetailComponent} from '../worddetail/worddetail.component';
import {WordnewComponent} from '../wordnew/wordnew.component';
import {WordeditComponent} from '../wordedit/wordedit.component';
import {WordsComponent} from '../words/words.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {AdminGuard} from '../../core/route-gaurds/admin.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          {
            path: 'words',
            component: WordsComponent,
          },
          {
            path: 'words/new',
            component: WordnewComponent
          },
          {
            path: 'words/:id',
            component: WorddetailComponent
          },
          {
            path: 'words/edit/:id',
            component: WordeditComponent
          }
          ,
          {
            path: 'users',
            component: UsersComponent,
          },
          {
            path: 'users/new',
            component: NewUserFormComponent,
          },
          {
            path: 'users/edit/:id',
            component: AdminUserEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule {
}
