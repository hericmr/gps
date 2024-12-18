import React from "react";

const PainelInformacoes = ({ painelInfo, closePainel }) => {
  if (!painelInfo) return null;

  return (
    <div className="absolute top-0 right-0 h-full w-full sm:w-2/3 lg:w-1/3 bg-white shadow-lg z-20 overflow-y-auto">
      <button
        onClick={closePainel}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        aria-label="Fechar painel"
      >
        &#10005;
      </button>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{painelInfo.titulo}</h2>

        {/* Renderizar imagens */}
        {painelInfo.imagens && painelInfo.imagens.length > 0 && (
          <div className="mb-4">
            {painelInfo.imagens.map((img, index) => (
              <div key={index} className="mb-4">
                <img
                  src={img}
                  alt={`${painelInfo.titulo} - ${index + 1}`}
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Renderizar vídeo */}
        {painelInfo.video && (
          <div className="mb-4">
            <iframe
              className="w-full h-72 rounded-lg"
              src={painelInfo.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={painelInfo.titulo}
            ></iframe>
          </div>
        )}

        <p className="text-sm text-gray-700">{painelInfo.descricao}</p>
      </div>
    </div>
  );
};

export default PainelInformacoes;
