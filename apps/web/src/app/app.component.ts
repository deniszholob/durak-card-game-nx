import { Component } from '@angular/core';
import { from } from 'rxjs';

enum STATES {
  lobby = 'lobby',
  host = 'host',
  client = 'client',
  game = 'game',
}

@Component({
  selector: 'dcg-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public STATES = STATES;
  public state = STATES.lobby;

  public clientText = '';
  public isHostStartDisabled = false;

  public hostInstructions = 'Send this to your friend';
  public clientInstructions = 'Paste the code from the game host to join in';

  public wrtc: RTCPeerConnection = new RTCPeerConnection();

  public onCreate() {
    this.state = STATES.host;

    let channel = this.wrtc.createDataChannel('chat');
    // this.wrtc.onicecandidate = (e) => {
    //   console.log('ICE candidate (pc1)', e)
    //   if (e.candidate == null) {
    //     this.clientText = JSON.stringify(e.target.)
    //   }
    // }
    from(this.wrtc.createOffer()).subscribe(
      (res) => {
        console.log(res);
        this.wrtc.setLocalDescription(res).then((val) => {
          console.log(val);
        });
        this.clientText = JSON.stringify(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public onJoin() {
    this.state = STATES.client;

    // this.wrtc.
  }

  public onStart() {
    this.state = STATES.game;
  }

  public onLobby() {
    this.state = STATES.lobby;
    this.clientText = '';
  }
}
