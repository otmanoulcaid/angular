import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>()
  // username = input.required<string>()
  // getAvatar = computed(() => "assets/users/" + this.avatar())
  // getUsername = computed(() => this.username()) 
  // select = output<string>();

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter()

  get avatar() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); 
  }
}
