"use strict";
exports.__esModule = true;
function getRgbColorAsSucess(success, scale) {
  if (scale === void 0) {
    scale = 1.5;
  }
  return "rgb(" + generateRgb(success, scale) + ")";
}
exports.getRgbColorAsSucess = getRgbColorAsSucess;
function getRgbaColorAsSucess(success, alpha, scale) {
  if (alpha === void 0) {
    alpha = 1;
  }
  if (scale === void 0) {
    scale = 1.5;
  }
  return "rgba(" + generateRgb(success, scale) + "," + alpha + ")";
}
exports.getRgbaColorAsSucess = getRgbaColorAsSucess;
function generateRgb(success, scale) {
  if (scale === void 0) {
    scale = 1.5;
  }
  success *= scale;
  var red = 255,
    green = 0,
    blue = 0;
  if (red == 255 && green <= 255) {
    var new_green = (255 * success) / 100;
    green = new_green > 255 ? 255 : new_green;
  }
  red = green < 255 ? (red = 255) : (255 / success) * 100;
  return red + "," + green + "," + blue;
}
