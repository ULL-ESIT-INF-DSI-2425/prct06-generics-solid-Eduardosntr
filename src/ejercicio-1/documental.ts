import { BasicStreamableCollection } from './basicStreamable';
import { IDocumental } from './interfaces';

export class Documental extends BasicStreamableCollection<IDocumental> implements IDocumental {
  constructor(
    public name: string, 
    public platform: string, 
    public year: number, 
    public director: string, 
    collection: IDocumental[]
  ) {
    super(collection);
  }

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

  print(): void {
    console.log(`Documental: ${this.name} (${this.year}) - ${this.director}`);
  }
}