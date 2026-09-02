declare module "open-location-code" {
  export class OpenLocationCode {
    constructor();
    isValid(code: string): boolean;
    isShort(code: string): boolean;
    isFull(code: string): boolean;
    recoverNearest(code: string, latitude: number, longitude: number): string;
    decode(code: string): {
      latitudeCenter: number;
      longitudeCenter: number;
      latitudeLo: number;
      longitudeLo: number;
      latitudeHi: number;
      longitudeHi: number;
      codeLength: number;
    };
  }
}