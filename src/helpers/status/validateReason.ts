export const validateReason = (reason: string): boolean => {
  const words = reason.match(/\S+/g);
  return words ? words.length >= 2 : false;
};
