import { Component } from "@angular/core";

@Component({
  selector: "y-picture-contentView",
  templateUrl: "./picture-contentView.component.html",
  styleUrl: "./picture-contentView.component.scss"
})
export class PictureContentViewComponent {
  imageSource = "";

  constructor() {
    this.imageSource = "assets/temp/";
    switch (this.randomIntFromInterval(1, 10)) {
      case 1:
        this.imageSource += "birman-1.jpg";
        break;
      case 2:
        this.imageSource += "IMG_0749.jpeg";
        break;
      case 3:
        this.imageSource += "IMG_2451.jpeg";
        break;
      case 4:
        this.imageSource += "IMG_3174.jpeg";
        break;
      case 5:
        this.imageSource += "IMG_4696.jpeg";
        break;
      case 6:
        this.imageSource += "scottish-fold-1.jpg";
        break;
      case 7:
        this.imageSource += "ratgeber_hund_rasse_portraits_shiba-inu_1200x527.jpg";
        break;
      case 8:
        this.imageSource += "balinese-1.jpg";
        break;
      case 9:
        this.imageSource += "IMG_5546.jpeg";
        break;
      case 10:
        this.imageSource += "11-dogs-like-german-shepherd.png";
        break;
    }

  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
