function generateRgb(success: number, scale = 1.5): string {
  if (!success) return "0,0,0";
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

export function getRgbColorAsSucess(success: number, scale = 1.5): string {
  return `rgb(${generateRgb(success, scale)})`;
}

export function getRgbaColorAsSucess(
  success: number,
  alpha: number = 1,
  scale = 1.5
): string {
  return `rgba(${generateRgb(success, scale)},${alpha})`;
}
