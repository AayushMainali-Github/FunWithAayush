export default function randomLength(level: number, lowerLimit?: number, upperlimit?: number): number {
  const length = Number(((lowerLimit || 0) + Math.random() * ((upperlimit || 10) - (lowerLimit || 0))).toFixed(Math.floor(level / 3)));
  return length;
}
