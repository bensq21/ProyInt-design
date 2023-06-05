import React, { useState } from 'react';

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow relative flex place-items-center">
        {/* Contenedor del formulario de inicio de sesión */}
        <div
          className={`absolute w-full bg-base-200 rounded-lg p-4 ${
            isLoginFormVisible ? 'shadow-lg' : 'opacity-70 blur translate-x-16'
          }`}
          style={{ zIndex: isLoginFormVisible ? 2 : 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
          <form>
            {/* Campos del formulario de inicio de sesión */}
            <input
              className="input mb-4"
              type="email"
              placeholder="Correo electrónico"
            />
            <input
              className="input mb-4"
              type="password"
              placeholder="Contraseña"
            />
            <button className="btn btn-primary mt-4">Iniciar sesión</button>
          </form>
          <div className="flex justify-center mt-4" style={{ zIndex: 3 }}>
            <button onClick={toggleForm} className="btn btn-link">
              {isLoginFormVisible ? 'Crear una cuenta' : 'Iniciar sesión'}
            </button>
          </div>
        </div>

        {/* Contenedor del formulario de registro */}
        <div
          className={`absolute w-full bg-base-300 rounded-lg p-4 ${
            !isLoginFormVisible ? 'shadow-lg' : 'opacity-70 blur translate-x-16'
          }`}
          style={{ zIndex: isLoginFormVisible ? 1 : 2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
          <form>
            {/* Campos del formulario de registro */}
            <input
              className="input mb-4"
              type="text"
              placeholder="Nombre completo"
            />
            <input
              className="input mb-4"
              type="email"
              placeholder="Correo electrónico"
            />
            <input
              className="input mb-4"
              type="password"
              placeholder="Contraseña"
            />
            <button className="btn btn-primary mt-4">Registrar</button>
          </form>
          <div className="flex justify-center mt-4" style={{ zIndex: 3 }}>
            <button onClick={toggleForm} className="btn btn-link">
              {isLoginFormVisible ? 'Crear una cuenta' : 'Iniciar sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
