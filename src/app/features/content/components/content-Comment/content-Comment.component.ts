import { Component } from "@angular/core";
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: "y-content-Comment",
  templateUrl: "./content-Comment.component.html",
  styleUrl: "./content-Comment.component.scss"
})
export class ContentCommentComponent {

  lorem!: LoremIpsum;
  content: string;

  constructor() {
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 4,
        min: 1
      },
      wordsPerSentence: {
        max: 10,
        min: 4
      }
    });
    this.content = this.lorem.generateSentences(this.randomIntFromInterval(1, 5));
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
