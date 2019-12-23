import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    ControlValueAccessorComponent];
}

