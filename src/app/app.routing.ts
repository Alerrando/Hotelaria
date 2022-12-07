import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AdmComponent } from './pages/adm/adm.component';

const routes: Routes = [
    { path: '',  component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'adm', component: AdmComponent },
];

export const routing = RouterModule.forRoot(routes)