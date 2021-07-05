import { Component, OnInit } from '@angular/core';
import { TesteNgService } from './teste-ng.service'

@Component({
  selector: 'app-teste-ng',
  templateUrl: './teste-ng.component.html',
  styleUrls: ['./teste-ng.component.css']
})
export class TesteNgComponent implements OnInit {
  title = 'funcionou'
  experience: String[]
  constructor(private Experience: TesteNgService) {

    this.experience = this.Experience.getExperiece()

  }
  ngOnInit(): void {
  }

}

