import { Component,
  Input,
  OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {
      id: '1',
      title: 'Basílica del Voto Nacional',
      image: 'https://i.imgur.com/l6aABis.jpg',
      alt: 'Basilica',
      tag1: 'Arquitectura',
      tag2: 'Neogótica',
      description: 'Por sus dimensiones y estilo está considerado como el templo neogótico más grande de América.',
      price: 0,
      reserva: false
    },
    {
      id: '2',
      title: 'Compañia de Jesus',
      image: 'https://i.imgur.com/l6aABis.jpg',
      alt: 'Compania',
      tag1: 'Iglesia',
      tag2: 'Barroco',
      // tslint:disable-next-line: max-line-length
      description: 'El templo fue levantado con las manos de innumerables artistas de la Escuela Quiteña, quienes perpetuaron su habilidad y entrega para tallar y dorar con finas láminas de oro de 23 quilates cada centímetro de la Iglesia.',
      price: 0,
      reserva: false
    },
    {
      id: '3',
      title: 'Virgen del Panecillo',
      image: 'https://i.imgur.com/4t8wlHc.jpg',
      alt: 'Panecillo',
      tag1: 'Escultura',
      tag2: 'Legarda',
      // tslint:disable-next-line: max-line-length
      description: 'logró crear una Virgen que casi parecía moverse, graciosa, dinámica y a la vez serena. El detalle tan peculiar de las alas, que no se había visto en ninguna Virgen creada antes, obedecía al pensamiento de Legarda de que si no las ponía, sus santos no podrían llegar al cielo.',
      price: 0,
      reserva: false
    },
    {
      id: '4',
      title: 'Plaza de la Independencia',
      image: 'https://i.imgur.com/umjC0Q4.jpg',
      alt: 'Independencia',
      tag1: 'Plaza',
      tag2: 'Independencia',
      // tslint:disable-next-line: max-line-length
      description: 'A pesar de que la primera plaza de la ciudad colonial fue la que hoy en día es conocida como plazoleta Benalcázar, esta siempre fue considerada como provisional mientras se levantaba un trazado adecuado para la novel villa española de Quito.',
      price: 0,
      reserva: false
    },
  ];
  ngOnInit(): void {
  }

}
