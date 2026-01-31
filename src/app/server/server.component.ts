import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  serverID : number = 10;
  serverStatus : string = 'offline';
  allowServerCreation : boolean = false;
  imageURL : string = 'https://angular.io/assets/images/logos/angular/angular.png';
  serverCreation = 'No server was created!';
  serverCreationStatus(){
   this.serverCreation = 'Server creation was created!';
  }





}
