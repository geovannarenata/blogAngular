import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit()               /* Pra estatizar a pg no começo quando abri-la */
  {                        /* 1) apagar o : void */ 
      window.scroll(0,0)   /* e acrescentar esse código */
  }

}
