import Cards from '../Cards';
import { FC } from 'react';
import './styleBegin.css'
import { CoffeImage } from '../CoffeImage/CoffeeImage';

interface Coffee {
  id: number;
  tipo: string;
  tipo2?: string;
  tipo3?: string;
  titulo: string;
  texto: string;
  img: string;
}

const Coffee = [
  {
  "id": 1,
  "tipo": "TRADICIONAL",
  "titulo": "Expresso Tradicional",
  "texto": "O tradicional café feito com água quente e grãos moídos",
  img: CoffeImage.tradicional
  },
{
  "id": 2,
  "tipo": "TRADICIONAL",
  "titulo": "Expresso Americano",
  "texto": "Expresso diluído, menos intenso que o tradicional",
  img: CoffeImage.americano
},
{
  "id": 3,
  "tipo": "TRADICIONAL",
  "titulo": "Expresso Cremoso",
  "texto": "Café expresso tradicional com espuma cremosa",
  img: CoffeImage.cremoso
},
{
  "id": 4,
  "tipo": "TRADICIONAL",
  "tipo2": "GELADO",
  "titulo": "Expresso Gelado",
  "texto": "Bebida preparada com café expresso e cubos de gelo",
  img: CoffeImage.gelado
},
{
  "id": 5,
  "tipo": "TRADICIONAL",
  "tipo2": "COM LEITE",
  "titulo": "Café com Leite",
  "texto": "Meio a meio de expresso tradicional com leite vaporizado",
  img: CoffeImage.comLeite
},
{
  "id": 6,
  "tipo": "TRADICIONAL",
  "tipo2": "COM LEITE",
  "titulo": "Latte",
  "texto": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  img: CoffeImage.latte
},
{
  "id": 7,
  "tipo": "TRADICIONAL",
  "tipo2": "COM LEITE",
  "titulo": "Capuccino",
  "texto": "Bebida com canela feita de doses iguais de café, leite e espuma",
  img: CoffeImage.capuccino
},
{
  "id": 8,
  "tipo": "TRADICIONAL",
  "tipo2": "COM LEITE",
  "titulo": "Macchiato",
  "texto": "Café expresso misturado com um pouco de leite quente e espuma",
  img: CoffeImage.macchiato
},
{
  "id": 9,
  "tipo": "TRADICIONAL",
  "tipo2": "COM LEITE",
  "titulo": "Mocaccino",
  "texto": "Café expresso com calda de chocolate, pouco leite e espuma",
  img: CoffeImage.mocaccino
},
{
  "id": 10,
  "tipo": "ESPECIAL",
  "tipo2": "COM LEITE",
  "titulo": "Chocolate Quente",
  "texto": "Bebida feita com chocolate dissolvido no leite quente e café",
  img: CoffeImage.chocolateQuente
},
{
  "id": 11,
  "tipo": "ESPECIAL",
  "tipo2": "ALCOÓLICO",
  "tipo3": "GELADO",
  "titulo": "Cubano",
  "texto": "Drink gelado de café expresso com rum, creme de leite e hortelã",
  img: CoffeImage.cubano
},
{
  "id": 12,
  "tipo": "ESPECIAL",
  "titulo": "Havaiano",
  "texto": "Bebida adocicada preparada com café e leite de coco",
  img: CoffeImage.havaiano
},
{
  "id": 13,
  "tipo": "ESPECIAL",
  "titulo": "Árabe",
  "texto": "Bebida preparada com grãos de café árabe e especiarias",
  img: CoffeImage.arabe
},
{
  "id": 14,
  "tipo": "ESPECIAL",
  "tipo2": "ALCOÓLICO",
  "titulo": "Irlandês",
  "texto": "Bebida a base de café, uísque irlandês, açúcar e chantily",
  img: CoffeImage.irlandes
}
]

const Begin: FC = () => {
  return (
    <div className="cards-contaiiner">
      {Coffee.map((post: Coffee) => (
        <div key={post.id} className="card-wrapper">
          <Cards post={post} />
        </div>
      ))}
    </div>
  );
};

export default Begin;
