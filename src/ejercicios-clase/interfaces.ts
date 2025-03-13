/**
 * Interface that implements a collectable 
 */
export interface Collectable<T> {
  /**
   * Function that adds an item to a collection
   * @param newItem - New Item to add 
   */
  addItem(newItem: T): T; 

  /**
   * Function that return an item in a Collectable
   * @param idx - Index of the element
   */
  getItem(idx: number): T | undefined; 

  /**
   * Function that removes a item to collectable 
   * @param itemToRemove - Item to remove
   */
  removeItem(idxItemToRemove: number) : T | undefined; 

  /**
   * Function that get the number of items in a Collectable
   */
  getNumberOfItems(): number; 
}

/**
 * Interface that implements a Printable
 */
export interface Printable {
  /**
   * Function that prints
   */
  print(): string; 
}