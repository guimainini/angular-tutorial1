import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Cap Ame'];
  heroeBorrado: string = '';


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  // borrarHeroe ( index: number ):void {
  //    delete this.heroes[index];
  // }


}
