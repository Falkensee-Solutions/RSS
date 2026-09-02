import { OpenLocationCode } from "open-location-code";

export type MapPoint = { x: number; y: number };
export type Coordinates = { latitude: number; longitude: number };

export const MAP_SIZE = { width: 1876, height: 1524 } as const;

const REFERENCE_POINTS = [
  {
    plusCode: "H36G+PR",
    reference: { latitude: 52.5618125, longitude: 13.0770625 },
    pixel: { x: 17, y: 527 },
  },
  {
    plusCode: "9G72+XC",
    reference: { latitude: 52.3649375, longitude: 13.5010625 },
    pixel: { x: 1150, y: 1390 },
  },
] as const;

// Short Plus Codes for event locations are recovered relative to Berlin.
// The two calibration locations above are reference points only and are not
// rendered as event markers.
const BERLIN_RECOVERY_LOCATION: Coordinates = { latitude: 52.52, longitude: 13.405 };

const plusCode = new OpenLocationCode();

function codePart(value: string) {
  return value.trim().toUpperCase().split(/\s+/)[0];
}

export function decodePlusCode(value: string): Coordinates | null {
  const code = codePart(value);
  if (!code || !plusCode.isValid(code)) return null;

  try {
    const fullCode = plusCode.isShort(code)
      ? plusCode.recoverNearest(code, BERLIN_RECOVERY_LOCATION.latitude, BERLIN_RECOVERY_LOCATION.longitude)
      : code;
    const area = plusCode.decode(fullCode);
    return { latitude: area.latitudeCenter, longitude: area.longitudeCenter };
  } catch {
    return null;
  }
}

export function coordinatesToPixel(coordinates: Coordinates): MapPoint {
  const [northWest, southEast] = REFERENCE_POINTS;
  const longitudeRange = southEast.reference.longitude - northWest.reference.longitude;
  const latitudeRange = southEast.reference.latitude - northWest.reference.latitude;

  return {
    x: northWest.pixel.x + ((coordinates.longitude - northWest.reference.longitude) / longitudeRange) * (southEast.pixel.x - northWest.pixel.x),
    y: northWest.pixel.y + ((coordinates.latitude - northWest.reference.latitude) / latitudeRange) * (southEast.pixel.y - northWest.pixel.y),
  };
}

export function plusCodeToPixel(value: string): (MapPoint & Coordinates) | null {
  const coordinates = decodePlusCode(value);
  if (!coordinates) return null;
  return { ...coordinatesToPixel(coordinates), ...coordinates };
}

export function pixelToPercent(point: MapPoint) {
  return { left: (point.x / MAP_SIZE.width) * 100, top: (point.y / MAP_SIZE.height) * 100 };
}