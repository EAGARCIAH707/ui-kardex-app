import {Routes} from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {LoginComponent} from './Pages/login/login.component';
import {ProductComponent} from './Pages/product/product.component';
import {KardexComponent} from './Pages/kardex/kardex.component';
import {InComponent} from './Pages/in/in.component';
import {OutComponent} from './Pages/out/out.component';
import {NotFoundComponent} from './Pages/not-found/not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }, {
        path: 'kardex',
        component: KardexComponent
      },
      {
        path: 'in',
        component: InComponent
      },
      {
        path: 'out',
        component: OutComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
