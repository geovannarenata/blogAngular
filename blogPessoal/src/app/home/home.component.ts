import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit()               /* Pra estatizar a pg no topo quando abri-la */
  {                        /* 1) apagar o : void */ 
      window.scroll(0,0)   /* e acrescentar esse código */
  }

}
