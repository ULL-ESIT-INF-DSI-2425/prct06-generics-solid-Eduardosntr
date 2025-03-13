import { describe, expect, it, beforeEach } from 'vitest';
import { Movie } from '../src/ejercicio-1/movie';
import { IMovie } from '../src/ejercicio-1/interfaces';

describe('Movie', () => {
  let movie: Movie;
  let movie1: IMovie;
  let movie2: IMovie;

  beforeEach(() => {
    movie1 = { name: 'Inception', platform: 'Warner Bros', year: 2010, duration: 148, print: () => {} };
    movie2 = { name: 'Interstellar', platform: 'Paramount', year: 2014, duration: 169, print: () => {} };
    movie = new Movie('Movie Collection', 'Various', 2021, 120, [movie1, movie2]);
  });

  it('should add an item to the collection', () => {
    const movie3: IMovie = { name: 'Dunkirk', platform: 'Warner Bros', year: 2017, duration: 106, print: () => {} };
    movie.add(movie3);
    expect(movie.collection.length).toBe(3);
    expect(movie.collection).toContain(movie3);
  });

  it('should remove an item from the collection', () => {
    movie.remove(movie1);
    expect(movie.collection.length).toBe(1);
    expect(movie.collection).not.toContain(movie1);
  });

  it('should search for an item in the collection', () => {
    const result = movie.searchItem('Interstellar');
    expect(result).toBe(movie2);
  });

  it('should get the collection', () => {
    expect(movie.collection).toStrictEqual([movie1, movie2]);
  });

  it('should set the collection', () => {
    const newCollection: IMovie[] = [{ name: 'Tenet', platform: 'Warner Bros', year: 2020, duration: 150, print: () => {} }];
    movie.collection = newCollection;
    expect(movie.collection).toEqual(newCollection);
  });
});