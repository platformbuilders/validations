export const isValidDDD = (ddd?: string): boolean =>
  !!ddd &&
  /^(1[1-9]|2[12478]|3[1-8]|4[1-9]|5[13-5]|6[1-9]|7[13-5]|7[79]|8[1-9]|9[1-9])/.test(
    ddd,
  );
