import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pres',
  templateUrl: './pres.component.html',
  styleUrls: ['./pres.component.css']
})
export class PresComponent implements OnInit {
  @Input() data: string[];
  constructor() {}

  ngOnInit() {}
}
