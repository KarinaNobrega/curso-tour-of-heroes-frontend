import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() isLoggedIn: boolean | null = null;
  @Input() title = '';
  @Input() menuItems: MenuItem[] = [];

  @Output() private logout = new EventEmitter(); //criou o Output para que o próprio toolbar não tenha acesso ao service. O toolbar é para questões de reutilização. 

  onLogout(): void {
    this.logout.emit();
  }
}
