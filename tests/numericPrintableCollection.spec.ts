import { describe, expect, it } from 'vitest';
import { NumericPrintableCollection } from '../src/ejercicios-clase/numericPrintableCollection'

describe ("NumericPrintableCollection test", () => {
  let number1 = 1; 
  let number2 = 2; 
  let number3 = 3; 

  let numberCollection = new NumericPrintableCollection([number1, number2, number2, number3]); 

  it('Should create the instance', () => {
    expect(numberCollection.getItems()).toEqual([1, 2, 2, 3])
  });

  it('Should print the collection', () => {
    expect(numberCollection.print()).toBe("1, 2, 2, 3")
  });

  it('Should return the collection lenght', () => { 
    expect(numberCollection.getNumberOfItems()).toBe(4); 
  });
  
  it('Should add a item to the collection', () => {
    let number4 = 4; 
    expect(numberCollection.addItem(number4)).toBe(number4); 
  }); 

  it('Should add 3 items to the collection', () => {
    let number4 = 4;
    let number5 = 5; 
    let number6 = 6;  
    numberCollection.addItem(number4)
    numberCollection.addItem(number5)
    numberCollection.addItem(number6)
    expect(numberCollection.getItems()).toEqual([1, 2, 2, 3, 4, 4, 5, 6]); 
  }); 

  it('Should return the collection lenght after add items', () => { 
    expect(numberCollection.getNumberOfItems()).toBe(8); 
  });

  it('Should get a item in the collection', () => { 
    expect(numberCollection.getItem(1)).toBe(number2); 
  }); 

  it('Should get undefined because the index is not correct', () => { 
    expect(numberCollection.getItem(-1)).toBe(undefined); 
    expect(numberCollection.getItem(50)).toBe(undefined); 
  }); 

  it('Should remove a item in the collection', () => { 
    expect(numberCollection.removeItem(0)).toBe(number1); 
    expect(numberCollection.getItems()).not.toContain(number1); 
  });

  it('Should remove a item in the collection', () => { 
    expect(numberCollection.removeItem(-1)).toBe(undefined); 
    expect(numberCollection.removeItem(50)).toBe(undefined); 
  });

  it('Should return the collection lenght after remove items', () => { 
    expect(numberCollection.getNumberOfItems()).toBe(7); 
  });

  it('Should clear the collection', () => {
    while (numberCollection.getNumberOfItems() > 0) {
      numberCollection.removeItem(0);
    }
    expect(numberCollection.getNumberOfItems()).toBe(0);
    expect(numberCollection.getItems()).toEqual([]);
  });

  it('Should have a method to remove an item by index', () => {
    expect(numberCollection.removeItem).toBeDefined();
  });

  it('Should have a method to add an item to the collection', () => {
    expect(numberCollection.addItem).toBeDefined();
  });
}); 