import { PrintableCollection } from "./printableCollection";

/**
 * Class that extends PrintableCollection and implmenets a numberic printable collection
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructor of the class
   * @param collection - Collection of numbers
   */
  constructor(
    items: number[]
  ){
    super(items)
  }

  /**
   * Method that prints a collection
   * @returns - The collection number in string 
   */
  print(): string {
    return this.items.join(', ');
  }
}