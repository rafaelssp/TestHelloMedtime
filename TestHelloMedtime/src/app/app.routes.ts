import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'cadastro', component: CadastroComponent }
];

export const routing = RouterModule.forRoot(appRoutes);