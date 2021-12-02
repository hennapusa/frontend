import {Component, OnInit} from '@angular/core';
import {CinemaService} from "../services/cinema.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  //tämä on pelkkä testi taulukko:
  news: string[] =
    ['1', '2', '3', '4']

  cinemaData$: Observable<any>;

  constructor(private cinemaService: CinemaService) {

    this.cinemaData$ = this.cinemaService.getData();
  }

  ngOnInit(): void {
  }

}
