export const createLabel = (name: string): string => {
  const isUppercaseSymbol = /[A-Z]/.test(name);

  const helper = (value: string): string => {
    const FirstElement = value.slice(0, 1).toUpperCase();
    const OtherElement = value.slice(1);
    return `${FirstElement}${OtherElement}`;
  };

  const newName: string = helper(name);

  if (isUppercaseSymbol) {
    const arraySymbol = newName.split('');

    return arraySymbol
      .map((symbol, index) =>
        symbol.toUpperCase() === name[index] ? ` ${symbol}` : symbol,
      )
      .join('');
  }
  return newName;
};
