import { describe, expect, it, beforeEach } from 'vitest';
import { Serie } from '../src/ejercicio-1/serie';
import { ISerie } from '../src/ejercicio-1/interfaces';

describe('Serie', () => {
  let serie: Serie;
  let serie1: ISerie;
  let serie2: ISerie;

  beforeEach(() => {
    serie1 = { name: 'Breaking Bad', platform: 'AMC', year: 2008, seasons: 5, print: () => {} };
    serie2 = { name: 'Stranger Things', platform: 'Netflix', year: 2016, seasons: 4, print: () => {} };
    serie = new Serie('Serie Collection', 'Various', 2021, 1, [serie1, serie2]);
  });

  it('should add an item to the collection', () => {
    const serie3: ISerie = { name: 'The Witcher', platform: 'Netflix', year: 2019, seasons: 2, print: () => {} };
    serie.add(serie3);
    expect(serie.collection.length).toBe(3);
    expect(serie.collection).toContain(serie3);
  });

  it('should remove an item from the collection', () => {
    serie.remove(serie1);
    expect(serie.collection.length).toBe(1);
    expect(serie.collection).not.toContain(serie1);
  });

  it('should search for an item in the collection', () => {
    const result = serie.searchItem('Stranger Things');
    expect(result).toBe(serie2);
  });

  it('should get the collection', () => {
    expect(serie.collection).toStrictEqual([serie1, serie2]);
  });

  it('should set the collection', () => {
    const newCollection: ISerie[] = [{ name: 'The Mandalorian', platform: 'Disney+', year: 2019, seasons: 2, print: () => {} }];
    serie.collection = newCollection;
    expect(serie.collection).toEqual(newCollection);
  });
});

