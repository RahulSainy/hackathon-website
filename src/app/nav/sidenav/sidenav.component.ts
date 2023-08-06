import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy{
  @Output() closeSidenav = new EventEmitter<void>();
    isAuth!: boolean;
    authSubscription!: Subscription;
    // constructor(private authservice:AuthService) { }
  
    ngOnInit(): void {
      // this.authservice.authChange.subscribe(authStatus=>{
      //  this.isAuth = authStatus;
      // })
    }
  onClose(){
    this.closeSidenav.emit();
  
  }
  onLogout(){
    // this.authservice.logout();
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  }