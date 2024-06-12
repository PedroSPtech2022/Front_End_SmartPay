import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{

  nome:string | null = null;

  ngOnInit() {
    this.nome = sessionStorage.getItem('name');
  }

}
