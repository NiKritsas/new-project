
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BaseComponent } from "../base-component";
//import { CreateNewBugComponent } from "./create-new-bug/create-new-bug.component";


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<BaseComponent> {

  canDeactivate(component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ):boolean | UrlTree | Observable<boolean |UrlTree>|Promise<boolean | UrlTree>{

      if (!component.canDeactivate()) {
        return window.confirm("Are you sure you want to leave the page?");
        }
        return true;

    }
  constructor() { }
}
