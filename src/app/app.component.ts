import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  IP = 'http://192.168.255.1:3000';
  imgUrl = '';
  isFetching = false;
  title = 'app-muestra';

  doFetch() {
    this.isFetching = true;
    fetch(this.IP)
    .then(() => {
        this.isFetching = false;
        this.imgUrl = 'https://pbs.twimg.com/media/EY6EnxgWoAItjDp.jpg';
    })
    .catch(() => {
      this.isFetching = false;
      this.imgUrl = 'https://i.pinimg.com/474x/ee/12/a9/ee12a906d097550141060360ccc54fd2.jpg';
    });
  }
}
