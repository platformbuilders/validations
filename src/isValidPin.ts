export const isValidPin = (pin: string, pinLength = 4): boolean =>
  !!pin && pin.length === pinLength;
