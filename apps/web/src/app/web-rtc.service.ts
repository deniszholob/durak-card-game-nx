import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRtcService {
  private subject: Subject<MessageEvent>;

  constructor() {}

  public connect(id: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(id);
      console.log(`connect `, id);
    }
    return this.subject;
  }

  private create(id): Subject<MessageEvent> {
    let wrtc = new RTCPeerConnection();
    wrtc.createDataChannel('chat', {

    })
    return new Subject()
  }


  private guid() {
    return (this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4());
  }
  private s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
}
