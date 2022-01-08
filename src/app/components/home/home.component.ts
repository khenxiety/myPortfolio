import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mode="dark";

  constructor() { }

  ngOnInit(): void {
  }


  darkMode(){
    this.mode="light";
    const header = document.getElementById('header')!;
    const sidebar = window.document.getElementById('sidebar')!;

    // header.classList.add('dark-bg');

    const bg =document.querySelector(':root')!;
    const rs = getComputedStyle(bg)!;
    
    header.style.setProperty('--bg', '#444444');
    sidebar.style.setProperty('--bg', '#444444');


    
    




    
    
  }
  lightMode(){
    this.mode="dark";
    const header = document.getElementById('header')!;
    const sidebar = window.document.getElementById('sidebar')!;
    // header.classList.add('dark-bg');

    const bg =document.querySelector(':root')!;
    const rs = getComputedStyle(bg)!;
    
    header.style.setProperty('--bg', 'white');
    sidebar.style.setProperty('--bg', 'white');
  }

}
