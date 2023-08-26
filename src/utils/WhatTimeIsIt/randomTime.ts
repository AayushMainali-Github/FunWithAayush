export default function randomTime(): Array<number> {
  return [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) * 5];
}
