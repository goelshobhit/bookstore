export const disablePrevious = (skip: number): boolean => skip === 5;

export const disableNext = (books: any[]): boolean => books.length < 5;