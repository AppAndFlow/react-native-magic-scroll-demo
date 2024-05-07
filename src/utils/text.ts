export function shorten(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

export function isFilled(value: string) {
  return value && value.trim().length;
}

// return a string capitalize the first letter of the given string.
export function capitalize(s: string): string {
  if (!s || !s.length) {
    return '';
  }
  if (s.length === 1) {
    return s.toUpperCase();
  }
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}
