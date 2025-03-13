/**
 * Interface Streamable generic for collections
 * @param T - Generic type for collection
 */
export interface Streamable<T> {
  /**
   * Collection of items
   */
  collection: T[];

  /**
   * Add item to collection
   * @param item - Item to add
   */
  add(item: T): void;

  /**
   * Remove item from collection
   * @param item - Item to remove
   */
  remove(item: T): void;

  /**
   * Search item in collection
   * @param name - Name of the item to search
   * @returns Item found
   */
  searchItem(name: string) : T;
}

/**
 * Interface for items
 */
export interface Item {
  /**
   * Name of the item
   */
  name: string;

  /**
   * Platform where the item is available
   */
  platform: string;

  /**
   * Year of release
   */
  year: number;

  /**
   * Print item information
   */
  print(): void;
}

/**
 * Interface for documental items
 */
export interface IDocumental extends Item {
  /**
   * Director of the documental
   */
  director: string;
}

/**
 * Interface for serie items
 */
export interface ISerie extends Item {
  /**
   * Number of seasons
   */
  seasons: number;
}


/**
 * Interface for movie items
 */
export interface IMovie extends Item {
  /**
   * Duration in minutes
   */
  duration: number;
}