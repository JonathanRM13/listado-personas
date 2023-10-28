import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
 
 
@Injectable()
export class LoginGuardian{
      constructor(private LoginService: LoginService, private Router: Router) {}
 
      CanActivateLogin() {
            if (this.LoginService.getIdToken() != "") {
                  console.log("true");
                  return true;
            } else {
                  console.log("False");
                  this.Router.navigate(["login"]);
                  return false;
            }
      }
}