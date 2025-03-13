import { describe, expect, it } from 'vitest';
import { StringPrintableCollection } from '../src/ejercicios-clase/stringPrintableCollection'


describe ("NumericPrintableCollection test", () => {
  let string1 = "Hola"; 
  let string2 = "Soy"; 
  let string3 = "Yo"; 

  let stringCollection = new StringPrintableCollection([string1, string2, string2, string3]); 

  it('Should create the instance', () => {
    expect(stringCollection.getItems()).toEqual(["Hola", "Soy", "Soy", "Yo"])
  });

  it('Should print the collection', () => {
    expect(stringCollection.print()).toBe("Hola, Soy, Soy, Yo")
  });

  it('Should return the collection lenght', () => { 
    expect(stringCollection.getNumberOfItems()).toBe(4); 
  });
  
  it('Should add a item to the collection', () => {
    let string4 = "Eduardo"; 
    expect(stringCollection.addItem(string4)).toBe(string4); 
  }); 

  it('Should add 3 items to the collection', () => {
    let string4 = "Sol";
    let string5 = "Nube"; 
    let string6 = "Rayo";  
    stringCollection.addItem(string4)
    stringCollection.addItem(string5)
    stringCollection.addItem(string6)
    expect(stringCollection.getItems()).toEqual(["Hola", "Soy", "Soy", "Yo", "Eduardo", "Sol", "Nube", "Rayo"]); 
  }); 

  it('Should return the collection lenght after add items', () => { 
    expect(stringCollection.getNumberOfItems()).toBe(8); 
  });

  it('Should get a item in the collection', () => { 
    expect(stringCollection.getItem(1)).toBe(string2); 
  }); 

  it('Should get undefined because the index is not correct', () => { 
    expect(stringCollection.getItem(-1)).toBe(undefined); 
    expect(stringCollection.getItem(50)).toBe(undefined); 
  }); 

  it('Should remove a item in the collection', () => { 
    expect(stringCollection.removeItem(0)).toBe(string1); 
    expect(stringCollection.getItems()).not.toContain(string1); 
  });

  it('Should remove a item in the collection', () => { 
    expect(stringCollection.removeItem(-1)).toBe(undefined); 
    expect(stringCollection.removeItem(50)).toBe(undefined); 
  });

  it('Should return the collection lenght after remove items', () => { 
    expect(stringCollection.getNumberOfItems()).toBe(7); 
  });

  it('Should clear the collection', () => {
    while (stringCollection.getNumberOfItems() > 0) {
      stringCollection.removeItem(0);
    }
    expect(stringCollection.getNumberOfItems()).toBe(0);
    expect(stringCollection.getItems()).toEqual([]);
  });

  it('Should have a method to remove an item by index', () => {
    expect(stringCollection.removeItem).toBeDefined();
  });

  it('Should have a method to add an item to the collection', () => {
    expect(stringCollection.addItem).toBeDefined();
  });
}); 