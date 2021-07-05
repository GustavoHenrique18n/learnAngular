import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteNgService {

  constructor() { }

  getExperiece() {
    return ['vue', 'angular', 'react']
  }
}
