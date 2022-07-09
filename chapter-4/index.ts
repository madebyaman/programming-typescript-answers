type Reservation = void;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
): Reservation => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // round trip
  }
  if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // single trip
  }
  if (typeof fromOrDestination === 'string') {
    // immediate trip
  }
};

// Call

function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function anotherFill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(anotherFill, 10, 'a');
