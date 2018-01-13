import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../services/dummy-data.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  data: string[];
  constructor(private dataService: DummyDataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((result: string[]) => {
      this.data = result;
    });
  }
}
