import { Component } from '@angular/core';
import { WebSocketService } from '../app/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proveedores';
  constructor(private _w: WebSocketService){

  }
}
