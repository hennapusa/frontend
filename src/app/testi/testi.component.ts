import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.css']
})
export class TestiComponent implements OnInit {
  myText: any;

  constructor() {
    this.myText = 'VIIKONLOPPU!';
  }

  ngOnInit(): void {
  }

  Vaihda() {
    ('toimiiko??');
    console.log('toimiiko tämä?');
  }

}
