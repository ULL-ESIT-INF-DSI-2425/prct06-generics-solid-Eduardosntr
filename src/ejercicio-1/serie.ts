import { BasicStreamableCollection } from "./basicStreamable";
import { ISerie } from "./interfaces";

/**
 * Clase Seria que implementa la interfaz ISerie y extiende de la clase BasicStreamableCollection
 */
export class Serie extends BasicStreamableCollection<ISerie> implements ISerie {
  /**
   * Constructor de la clase
   * @param name - Nombre de la serie
   * @param platform - Plataforma de la serie
   * @param year - Año de la serie
   * @param seasons - Temporadas de la serie
   * @param collection - Colección de series
   */
  constructor(
    public name: string, 
    public platform: string, 
    public year: number, 
    public seasons: number, 
    collection: ISerie[]
  ) {
    super(collection);
  }

  /**
   * Método que busca una serie en la colección
   * @param name - Nombre de la serie a buscar
   * @returns Serie encontrada
   */
  searchItem(name: string): ISerie {
    let result: ISerie = {
      name: '',
      platform: '',
      year: 0,
      seasons: 0,
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
   * Método que imprime los datos de la serie
   */
  print(): void {
    console.log(`Serie: ${this.name} (${this.year}) - ${this.seasons} seasons`);
  }
}