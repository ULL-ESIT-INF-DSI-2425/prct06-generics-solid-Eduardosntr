import { BasicStreamableCollection } from './basicStreamable';
import { IDocumental } from './interfaces';

/**
 * Clase Documental que implementa la interfaz IDocumental y extiende de la clase BasicStreamableCollection
 */
export class Documental extends BasicStreamableCollection<IDocumental> implements IDocumental {
  /**
   * Constructor de la clase
   * @param name - Nombre del documental
   * @param platform - Plataforma del documental
   * @param year - Año del documental
   * @param director - Director del documental
   * @param collection - Colección de documentales
   */
  constructor(
    public name: string, 
    public platform: string, 
    public year: number, 
    public director: string, 
    collection: IDocumental[]
  ) {
    super(collection);
  }

  /**
   * Método que busca un documental en la colección
   * @param name - Nombre del documental a buscar
   * @returns Documental encontrado
   */
  searchItem(name: string): IDocumental {
    let result: IDocumental = {
      name: '',
      platform: '',
      year: 0,
      director: '',
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
   * Método que imprime los datos del documental
   */
  print(): void {
    console.log(`Documental: ${this.name} (${this.year}) - ${this.director}`);
  }
}