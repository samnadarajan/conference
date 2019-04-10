import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InformationPageComponent} from './modules/info/components/information-page/information-page.component';
import {AdminPageComponent} from './modules/admin/components/admin-page/admin-page.component';

const routes: Routes = [
  {path: 'info', component: InformationPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: '', component: InformationPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
          useHash: true,
          anchorScrolling: 'enabled',
          onSameUrlNavigation: 'reload',
          scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
