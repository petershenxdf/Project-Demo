import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableService, Info } from './table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  items: string[] = [];
  mylist: Info[] = [];

  // constructor() { }
  constructor(public service: TableService) {}
  private sub = new Subscription();

  title = 'Group-5 Project';
  dataType: string = "Death";
  sortMethod: string = "Highest";
  numberOfSelect: number = 1;
  dateOfData: Date = new Date("05/21/2020");


  ngOnInit(): void {
    this.sub = this.service.getList().subscribe(
      res => {
        // console.log('READ!');
        // res.map(todo => this.items.push(todo.state + 'Pos: ' + todo.positive + ' Neg: '
        //  + todo.negative + ' Death:' + todo.death + '  Recovered: ' + todo.recovered));
        res.map(todo => this.mylist.push(todo));
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  SearchClick(): void {
    if(this.numberOfSelect > 5) this.numberOfSelect = 5;
    if(this.numberOfSelect <= 0) this.numberOfSelect = 1;
    console.log(this.dataType + ' ' + this.sortMethod + ' ' + Number(this.numberOfSelect));
  }

}
