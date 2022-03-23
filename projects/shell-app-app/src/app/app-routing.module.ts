import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '@labshare/ngx-components/layout-default';
import { LeftNavComponent } from '@labshare/ngx-components/left-menu';
import { HeaderComponent } from '@labshare/ngx-components/header';
import { TenantNavComponent } from '@labshare/ngx-components/tenant-nav';
import { ConfigResolverService } from '@labshare/ngx-components/theme';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    resolve: { items: ConfigResolverService },
    children: [
      {
        path: '',
        component: LeftNavComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
      },
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'tenant',
      },
      {
        path: '',
        component: DemoComponent,
      }
    ]
  }
];

export const UsersRouting = RouterModule.forRoot(routes);
