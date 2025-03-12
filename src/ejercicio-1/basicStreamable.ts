import { Streamable } from './interfaces';

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(
    protected _collection: T[]
  ) {}

  abstract searchItem(name: string): T 

  add(item: T): void {
    this._collection.push(item);
  }

  remove(item: T): void {
    const index = this._collection.indexOf(item);
    if (index > -1) {
      this._collection.splice(index, 1);
    }
  }

  get collection() {
    return this._collection;
  }

  set collection(collection: T[]) {
    this._collection = collection;
  }
}