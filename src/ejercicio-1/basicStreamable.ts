import { Streamable } from './interfaces';

/**
 * Basic implementation of Streamable interface
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Constructor of the class
   * @param _collection - Collection of items
   */
  constructor(
    protected _collection: T[]
  ) {}


  /**
   * Abstract function to search an item in the collection
   * @param name - Name of the item to search
   * @returns Item found
   */
  abstract searchItem(name: string): T 

  /**
   * Function to add an item to the collection
   * @param item - Item to add
   */
  add(item: T): void {
    this._collection.push(item);
  }

  /**
   * Function to remove an item from the collection
   * @param item - Item to remove
   */
  remove(item: T): void {
    const index = this._collection.indexOf(item);
    if (index > -1) {
      // Reduce el tamaño del array eliminando el elemento en la posición index
      this._collection.splice(index, 1); 
    }
  }

  /**
   * Get collection of items
   * @returns Collection
   */
  get collection() {
    return this._collection;
  }

  /**
   * Set collection of items
   * @param collection - Collection to set
   */
  set collection(collection: T[]) {
    this._collection = collection;
  }
}