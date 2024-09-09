interface IOptions {
  name: string;
  allowed: string[];
}

export const checkAttackedFileExtension = ({ name, allowed }: IOptions) => {
  let isAllowed = false;
  for (let element of allowed) {
    if (name.endsWith(element)) {
      isAllowed = true;
      break;
    }
  }
  console.log(isAllowed);
  return isAllowed;
};
