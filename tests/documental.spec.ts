import { describe, expect, it, beforeEach } from 'vitest';
import { Documental } from '../src/ejercicio-1/documental';
import { IDocumental } from '../src/ejercicio-1/interfaces';

describe('Documental', () => {
  let documental: Documental;
  let documental1: IDocumental;
  let documental2: IDocumental;

  beforeEach(() => {
    documental1 = { name: 'Nature', platform: 'Netflix', year: 2021, director: 'John Doe', print: () => {} };
    documental2 = { name: 'Wildlife', platform: 'Netflix', year: 2022, director: 'Jane Doe', print: () => {} };
    documental = new Documental('Documental Collection', 'Netflix', 2021, 'John Doe', [documental1, documental2]);
  });

  it('should add an item to the collection', () => {
    const documental3: IDocumental = { name: 'Ocean', platform: 'Netflix', year: 2023, director: 'Jim Doe', print: () => {} };
    documental.add(documental3);
    expect(documental.collection.length).toBe(3);
    expect(documental.collection).toContain(documental3);
  });

  it('should remove an item from the collection', () => {
    documental.remove(documental1);
    expect(documental.collection.length).toBe(1);
    expect(documental.collection).not.toContain(documental1);
  });

  it('should search for an item in the collection', () => {
    const result = documental.searchItem('Wildlife');
    expect(result).toBe(documental2);
  });

  it('should get the collection', () => {
    expect(documental.collection).toStrictEqual([documental1, documental2]);
  });

  it('should set the collection', () => {
    const newCollection: IDocumental[] = [{ name: 'Space', platform: 'Netflix', year: 2024, director: 'Jake Doe', print: () => {} }];
    documental.collection = newCollection;
    expect(documental.collection).toEqual(newCollection);
  });
});