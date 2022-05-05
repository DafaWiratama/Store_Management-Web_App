import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  is_loading = new Subject<boolean>();
  snackbar: Snackbar = new Snackbar();

  constructor() {
    this.is_loading.next(false)
  }

  show() {
    this.is_loading.next(true);
  }

  hide() {
    this.is_loading.next(false);
  }

  closeWithSnackbar(title: string, message: string = '', duration: number = 15) {
    this.hide()
    this.snackbar.show(title, message, duration)
  }
}


class Snackbar {

  visible = new Subject<boolean>()
  title = ''
  message = ''

  constructor() {
    this.visible.next(false)
  }

  hash = new Date().getTime()

  show(title: string, desc: string = '', duration: number = 5) {
    let hash = new Date().getTime()
    this.hash = hash

    this.title = title
    this.message = desc
    this.visible.next(true)

    setTimeout(() => {
      if (this.hash === hash) this.visible.next(false)
    }, duration * 1000)
  }

  close() {
    this.visible.next(false)
  }
}
