import { BasicStreamableCollection } from "./basicStreamable";
import { IMovie } from "./interfaces";

/**
 * Clase Movie que implementa la interfaz IMovie y extiende de la clase BasicStreamableCollection
 */
export class Movie extends BasicStreamableCollection<IMovie> implements IMovie {
  /**
   * Constructor de la clase Movie
   * @param name - Nombre de la película
   * @param platform - Plataforma de streaming
   * @param year - Año de estreno
   * @param duration - Duración en minutos
   * @param collection - Colección de películas
   */
  constructor(
    public name: string, 
    public platform: string, 
    public year: number, 
    public duration: number, 
    collection: IMovie[]
  ) {
    super(collection);
  }

  /**
   * Método que busca una película por su nombre
   * @param name - Nombre de la película
   * @returns La película encontrada
   */
  searchItem(name: string): IMovie {
    let result: IMovie = {
      name: '',
      platform: '',
      year: 0,
      duration: 0,
      print: () => {}
    }
    this.collection.forEach((element) => {
      if (element.name === name) {
        result = element;
      }  
    });
    return result;
  }

  /**
   * Método que imprime los datos de una película
   */
  print(): void {
    console.log(`Film: ${this.name} (${this.year}) - ${this.duration} minutes`);
  }
}