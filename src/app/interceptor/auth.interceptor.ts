import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../api/auth.service';
import { inject } from '@angular/core';
import { LocalStorageService } from '../api/local-storage.service';
import { Router } from '@angular/router';
  
export const authInterceptor: HttpInterceptorFn = (req, next) => {

    
  const token = inject(LocalStorageService).getItem('token')
  const route = inject(Router);

  if(token){
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(newReq);
  }

  route.navigate(['login'])
  return next(req);
};
