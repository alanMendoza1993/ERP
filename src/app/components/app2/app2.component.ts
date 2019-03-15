import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';


@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
token: any;
user: any;

  constructor(public router:Router, private ws: WebSocketService) {
     this.token = localStorage.getItem("token");
    if(this.token){
      this.ws.emit('verifyToken', {token: this.token}, (res)=>{
        console.log('res: ',res);
              if(res.ok === false){
                this.router.navigateByUrl('/home');
              } else if(res.ok === true){
                this.user = res.decoded.usuario;
                this.user = JSON.stringify(this.user);
                localStorage.setItem("user", this.user);
                console.log('usuario: ',this.user);                
              }
            });
    } else {
      this.router.navigateByUrl('/login');
    }
   }

  ngOnInit() {
  }

  

}
