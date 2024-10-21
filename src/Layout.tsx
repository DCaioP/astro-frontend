import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Barra Superior de Navegação */}
      <div className="flex justify-between items-center p-4 bg-gray-800">
        {/* Lado esquerdo da barra */}
        <div className="flex space-x-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        {/* Lado direito da barra */}
        <div className="flex items-center space-x-4">
          <input type="text" className="p-2 bg-gray-700 rounded" placeholder="Search..." />
          <button className="p-2 bg-gray-700 rounded flex items-center">
            <FontAwesomeIcon icon={faFilter} />
            <span className="ml-2">1º Turno</span>
          </button>
        </div>
      </div>
      {/* Conteúdo Principal */}
      <div className="p-4 grid grid-cols-5 gap-4">
        {/* ... outros elementos ... */}
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        {/* ... outros elementos ... */}
      </div>
      <div data-name="principal" className="p-4 grid grid-cols-1 gap-4">
        <div className="bg-gray-700 p-4 rounded">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

