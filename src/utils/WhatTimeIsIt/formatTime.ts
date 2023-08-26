export default function formatTime(num: number): string {
  return `0${num}`.slice(-2);
}
