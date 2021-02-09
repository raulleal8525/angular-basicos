import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent { 
  heroes: string[] = ['SpiderMan','IronMan', 'Thor', 'Hulk'];
  heroeBorrado? : string = "";

  borrarHeroe() : void
  {    
    var tamano = this.heroes.length;

    if(tamano >0)
    {      
      this.heroeBorrado = this.heroes.shift()?.toString();
    }
    
  }
}
