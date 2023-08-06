import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.css']
})
export class HeadnavComponent  implements OnInit ,OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
 isAuth!: boolean;
 authSubscription!: Subscription;
  // constructor(private authService : AuthService) { }

  ngOnInit() {
//  this.authService.authChange.subscribe(authStatus => {
// this.isAuth = authStatus;
//  })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
onLogout(){
  // this.authService.logout();
}

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

}
