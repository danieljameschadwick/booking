// @TODO: better way of handling state?
export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    const value = window.localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}
