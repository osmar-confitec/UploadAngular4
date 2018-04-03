import { Component } from '@angular/core';
import { FileServerService } from './services/file-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Gallery';
  errorMessage: string;
  images: Array<any> = [];

  constructor(private fileService: FileServerService) { }

  ngOnInit() {
    this.getImageData();
  }
  getImageData() {
    this.fileService.getImages().subscribe(

      data => { this.images = data.result },
      error => this.errorMessage = error
    )
  }

  refreshImages(status) {
    if (status == true) {
      console.log("Uploaded successfully!");
      this.getImageData();
    }
  }


}
