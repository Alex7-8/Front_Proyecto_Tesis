import { Component, OnInit } from '@angular/core';
import { PopoverRef } from '../popover/popover-ref';
import { LoginService } from 'src/app/Service/Login.service';

@Component({
  selector: 'vex-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(
   
    private readonly popoverRef: PopoverRef,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  close(): void {
   setTimeout(() => this.popoverRef.close(), 250);
    
  }

  CerrarSesion(): void {
    /** Wait for animation to complete and then close */
    
   this.loginService.logout();
   setTimeout(() => this.popoverRef.close(), 250);
    
  }
}
