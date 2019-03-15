import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  w : number;
  token:any;
  ordes:any;
  constructor(private ws: WebSocketService) { 
    this.w = Math.round(window.innerHeight/*  * .95 */)  
    this.loadData();
  }

  ngOnInit() {
  }
  loadData(){
    this.token = localStorage.getItem("user");
    this.token = JSON.parse(this.token);
    console.log("tokeeee",this.token[0]);
    let filters = {
      providerid: "5c894385f6b0572408462fa3"
    }
    console.log(filters);
    this.ws.emit('getOrderBuy', {filters}, (res)=>{
      this.ordes = res.obj;
      console.log('orders: ',this.ordes);
            /* if(res.ok === 'warning'){
              swal({
                title: res.status+"!",
                text: res.obj,
                icon: "error",
              });
            } else if(res.ok === 'success'){
              localStorage.setItem("token", res.obj);
              this.router.navigateByUrl('/facturas');
            } */
          });
  }

}
