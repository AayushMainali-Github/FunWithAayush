const qrimg: HTMLImageElement = new Image();
qrimg.src = "/qrcodes/qr.png";
export function getsource(): HTMLImageElement {
  return qrimg;
}
