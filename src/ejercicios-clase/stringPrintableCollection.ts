import { PrintableCollection } from "./printableCollection";

/**
 * Class that extends PrintableCollection and implmenets a string printable collection
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructor of the class
   * @param collection - Collection of strings
   */
  constructor(
    items: string[]
  ){
    super(items)
  }

  /**
   * Method that prints a collection
   * @returns - The collection strings concatenated
   */
  print(): string {
    return this.items.join(', ')
  }
}