import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { Form, NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f: Form;
  email: string;
  password: string;
  user:any;
  constructor( private ws: WebSocketService , private router: Router) { 
    this.validate();
  }


  ngOnInit() {
  }

  signIn(){
    console.log(this.email, this.password);
    this.ws.emit('signProvider', {email: this.email, password: this.password}, (res)=>{
console.log(res);
      if(res.ok === 'warning'){
        swal({
          title: res.status+"!",
          text: res.obj,
          icon: "error",
        });
      } else if(res.ok === 'success'){
        localStorage.setItem("token", res.obj);
        this.router.navigateByUrl('/facturas');
      }
    });
  }

  validate(){
    this.user = localStorage.getItem("user");
    if(this.user != "" && this.user != null){
      this.router.navigateByUrl('/facturas');
    }
  }
}
