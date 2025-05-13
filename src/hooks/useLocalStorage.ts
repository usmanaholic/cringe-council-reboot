
export const useLocalStorage = (key: string, initialValue: number) => {
  const storedValue = localStorage.getItem(key);
  return [
    storedValue ? parseInt(storedValue) : initialValue,
    (value: number) => localStorage.setItem(key, value.toString())
  ] as const;
};
