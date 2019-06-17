export interface CustomIterator<T> {
  // Return the current element.
  current(): T;

  // Return the current element and move forward to next element.
  next(): T;

  // Checks if current position is valid.
  hasMoreElements(): boolean;
}
