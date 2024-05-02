import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AccountService } from '../__services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.accountService.currentUser$.pipe(
      take(1),
      switchMap(user => {
        if (user && user.access) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${user.access}`
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}
