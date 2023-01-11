import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[]


  constructor( private service:UsersService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }


  /*----------------------afficher les infos d'un user click--------------------*/
onUserClicked(id: number) {
  this.service.getUserById(Number(id)).subscribe(
    data => {
      console.log(data);
    }
  )

}
/*---------------------*/

}
