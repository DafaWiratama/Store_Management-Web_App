import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private active_route: ActivatedRoute) { }

  navigate(parts: string[]) {
    return this.router.navigate(parts, {relativeTo: this.active_route});
  }
}
