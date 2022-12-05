import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    { path: '',  component: HomeComponent},
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes)