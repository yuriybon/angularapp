import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { LookListComponent } from './look-list/look-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/look-list', pathMatch: 'full' }
  , { path: 'car-list', component: CarListComponent }
  , {
    path: 'car-add',
    component: CarEditComponent
    }
  , { path: 'car-edit/:id', component: CarEditComponent }
  , { path: 'look-list', component: LookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
