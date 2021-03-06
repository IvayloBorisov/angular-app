import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.css']
})
export class ToolbarNavigationComponent implements OnInit {

  @Output() toggleSideNavigation = new EventEmitter<void>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.toggleSideNavigation.emit();
  }

  logout() {
    this.authService.logout();
  }

}
