import { Component } from "@angular/core";

import { getRgbColorAsSucess, getRgbaColorAsSucess } from "coloured-success";
import { Options } from "ng5-slider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  success: number = 50;

  metrics = [89, 12, 94, 99, 63, 36, 54];

  grades = [
    {
      text: "A+",
      value: 100
    },
    {
      text: "B",
      value: 70
    },
    {
      text: "C",
      value: 50
    },
    {
      text: "D",
      value: 30
    },
    {
      text: "F",
      value: 10
    }
  ];

  rgbaWrapepr(succes: number, alpha = 1) {
    return getRgbaColorAsSucess(succes, alpha);
  }

  options: Options = {
    floor: 0,
    ceil: 100
  };
}
