export interface Streamable<T> {
  collection: T[];
  add(item: T): void;
  remove(item: T): void;
  searchItem(name: string) : T;
}

export interface Item {
  name: string;
  platform: string;
  year: number;
  print(): void;
}

export interface IDocumental extends Item {
  director: string;
}

export interface ISerie extends Item {
  seasons: number;
}

export interface IMovie extends Item {
  duration: number;
}