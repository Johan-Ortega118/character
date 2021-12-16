import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListCharacters } from '../../modelos/listcharacters.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters:ListCharacters[];

  constructor(private api: ApiService, private router: Router) {}

  
  ngOnInit(): void {
    this.api.getAllCharacters().subscribe(data => {
      console.log(data['character']);
      this.characters = data['character'];
    })
  }

  entrar(){
    this.router.navigate(['nuevo']);
  }

}
