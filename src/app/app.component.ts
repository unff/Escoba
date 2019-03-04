import { Component } from '@angular/core'
import { GunService } from './services/gun.service'

@Component({
  selector: 'esb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escoba'

  constructor(public db: GunService) {}


}
