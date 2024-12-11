export const ProductImage = ({ imageURL, altText = "Imagem do produto" }) => (
    <img
      className="h-64 w-64 sm:h-80 sm:w-80 object-contain mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      src={imageURL}
      alt={altText}
      aria-label={altText}
    />
  );
  
  export const ProductPrice = ({ price }) => (
    <h2 className="text-4xl font-semibold text-white mb-4">R${price.toFixed(2)}</h2>
  );
  
  export const ProductButton = ({ label, onClick }) => (
    <button
      className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-3 px-8 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
  