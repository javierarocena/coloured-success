module.exports = {
  getRgbColorAsSucess(success, _scale) {
    if (!success) throw new Error("Need a success value");
    scale = _scale || 1.5;
    success *= scale;
    let red = 255,
      green = 0,
      blue = 0;
    if (red == 255 && green <= 255) {
      let new_green = (255 * success) / 100;
      green = new_green > 255 ? 255 : new_green;
    }
    red = green < 255 ? (red = 255) : (255 / success) * 100;
    return `${red},${green},${blue}`;
  }
};
