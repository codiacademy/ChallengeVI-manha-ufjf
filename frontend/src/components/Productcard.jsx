import React from 'react'

function Productcard(props) {
  return (
    <>
    <main className="flex-grow p-8 bg-gray-200">
        <div className="flex justify-center">
          <div className="bg-gray-100 border border-purple-900 rounded-lg p-4 w-64 shadow-lg">
            <div className="flex justify-end gap-2">
              <img
                src="imagens/imageAddCarrinho.png"
                alt="adicionar ao carrinho"
                className="h-5 w-5 cursor-pointer"
              />
              <img
                src="imagens/imageAddFav.png"
                alt="adicionar aos favoritos"
                className="h-5 w-5 cursor-pointer"
              />
            </div>
            <img
            src={props.imagem}
            //   src="imagens/imageProdutoTeclado01.png"
              alt=""
              className="mx-auto h-36 my-4"
            />
            <p className="text-sm text-gray-700">
                {props.disc}
              {/* Teclado Mecânico Gamer Husky Anchorage Full Size, Preto, ABNT2,
              RGB, Switch Gateron EF Red - HTG200PTVR */}
            </p>
            <h2 className="text-lg font-bold mt-4 text-black">{props.price}R$ 1634,23</h2>
            <button className="bg-purple-800 text-white rounded-md py-1 mt-6 w-full flex items-center justify-center gap-2">
              <img
                src="imagens/imageBotaoComprar.png"
                alt="Comprar"
                className="h-5 w-5"
              />
              COMPRAR
            </button>
          </div>
        </div>
      </main></>
  )
}

export default Productcard