import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-potd',
  templateUrl: './potd.component.html',
  styleUrls: ['./potd.component.css']
})
export class PotdComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) { }
  response;
  title = 'mlposk';

  showPicture() {
    this.apiService.getPic()
      .subscribe(data => {
        this.response = data;
        if (this.response.media_type === 'video') {
          const videoId = this.getYouTubeVideoId(this.response.url);
          this.response.youtubeURL =
            'https://youtube.com/embed/' +
            videoId +
            '?autoplay=1' +
            '&loop=1' +
            '&mute=1' +
            '&showinfo=0' +
            '&controls=0' +
            '&playlist=' +
            videoId;
        }
        console.log(this.response);
      });
  }

  getYouTubeVideoId(url) {
    return url.split('/')[4].split('?')[0];
  }

  sanitizeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.showPicture();
  }
}
