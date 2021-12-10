import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  constructor() {}

  private subject: Subject<MessageEvent>;

  public connect(url: sting): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log(`connect `, url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }

  private createa(url: string): Subject<MessageEvent> {
    let ws: WebSocket = new WebSocket(url);
    let observable = new Observable<MessageEvent>((obs) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.next.bind(obs);
      ws.onclose = obs.next.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object)=> {
        if(ws.readyState === WebSocket.OPEN)
      }
    }
  }
}
