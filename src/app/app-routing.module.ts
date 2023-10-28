import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const CanActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LoginGuardian).CanActivateLogin();
};
//child routes
const routes: Routes = [
  {
        path: "",
        component: PersonasComponent,
        canActivate: [CanActivateLogin],
  },
  {
        path: "personas",
        component: PersonasComponent,
        canActivate: [CanActivateLogin],
        children: [
              { path: "agregar", component: FormularioComponent },
              { path: ":id", component: FormularioComponent },
        ],
  },

  { path: "login", component: LoginComponent },

  //routing de error se agrega al final del arbol de rutas
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
