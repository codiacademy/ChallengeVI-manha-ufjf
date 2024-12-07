import React from 'react';
import Productcard from './Productcard';
import Teclado1 from '../imagens/imageProdutoTeclado01.png';

function Card() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-6">
      <Productcard
        imagem={Teclado1}
        disc="Teclado Mecânico Gamer Husky Anchorage Full Size, Preto, ABNT2, RGB, Switch Gateron EF Red - HTG200PTVR"
        price="R$ 1634,23"
      />
    </div>
  );
}

export default Card;
