import { Printable } from "./interfaces"
import { Collectable } from "./interfaces"

/**
 * Generic abstrac class Printable collection that implements a Collectable and a Printable
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  /**
   * Constructor of the class
   * @param items - Items of the printable collection
   */
  constructor(
    protected items: T[]
  ){}

  getItems() {
    return this.items; 
  }

  /**
   * Method that adds a item 
   * @param newItem - New item to add to the Collection
   * @returns The item added
   */
  addItem(newItem: T): T {
    this.items.push(newItem)
    return this.items[this.items.length - 1]
  }

  /**
   * Method 
   * @param idx - Index of the item to get
   * @returns The item in that index
   */
  getItem(idx: number): T | undefined {
    if (idx < 0 || idx > this.getNumberOfItems()) {
      return undefined; 
    }
    return this.items[idx]
  }

  /**
   * Function that removes an item
   * @param itemToRemove - The item to be removed
   */
  removeItem(itemToRemove: number): T | undefined {
    if (itemToRemove < 0 || itemToRemove > this.getNumberOfItems()) {
      return undefined; 
    }
    return this.items.splice(itemToRemove, 1)[0];  
  }

  /**
   * Method that get the length of a collection
   * @returns Returns the number of items in the collection
   */
  getNumberOfItems(): number {
    return this.items.length
  }

  /**
   * Abstract method to implement a print
   */
  abstract print() : string 
}

