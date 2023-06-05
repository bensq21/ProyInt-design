import React, { useState } from 'react';
import MdiEmoticonCool from './../../assets/MdiEmoticonCool';

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [regProgress, setRegProgress] = useState(0);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-96 rounded-lg shadow relative flex place-items-center">
        {/* Contenedor del formulario de inicio de sesión */}
        <div
          className={`absolute w-full bg-base-300 rounded-lg p-4 flex flex-col ${
            isLoginFormVisible
              ? 'shadow-lg'
              : 'opacity-70 blur translate-x-16 touch-none pointer-events-none'
          }`}
          style={{ zIndex: isLoginFormVisible ? 2 : 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Inicie sesión</h2>
          <form className="flex flex-col">
            {/* Campos del formulario de inicio de sesión */}
            <input className="input mb-4" type="text" placeholder="NIE" />
            <input
              className="input mb-4"
              type="password"
              placeholder="Contraseña"
            />
            <button className="btn btn-primary">Iniciar sesión</button>
          </form>
          <div className="flex justify-center mt-4">
            <button onClick={toggleForm} className="btn btn-link">
              {isLoginFormVisible ? 'Crear una cuenta' : 'Iniciar sesión'}
            </button>
          </div>
        </div>

        {/* Contenedor del formulario de registro */}
        <div
          className={`absolute w-full bg-base-300 rounded-lg p-4 ${
            !isLoginFormVisible
              ? 'shadow-lg'
              : 'opacity-70 blur translate-x-16 touch-none pointer-events-none'
          }`}
          style={{ zIndex: isLoginFormVisible ? 1 : 2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Registrese</h2>
          <form className="flex flex-col">
            {/* Campos del formulario de registro */}
            <input className="input mb-4" type="text" placeholder="Nombre" />
            <input className="input mb-4" type="text" placeholder="Apellidos" />
            <input className="input mb-4" type="text" placeholder="NIE" />
            <input className="input mb-4" type="text" placeholder="Telefono" />
            <input
              className="input mb-4"
              type="email"
              placeholder="Correo electrónico"
            />
            <select className="select mb-4">
              <option disabled selected>
                Elige un Instituto
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <input
              className="input mb-4"
              type="password"
              placeholder="Contraseña"
            />
            <div className="flex justify-between">
              <div className="form-control max-w-xs w-2/3">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={handleFileChange}
                />
                <label className="label">
                  <span className="label-text-alt">Max. 10Mb</span>
                  <span className="label-text-alt">*.jpg, *.jpeg o *.png</span>
                </label>
              </div>
              {!selectedImage ? (
                <MdiEmoticonCool className="w-8 h-8 place-self-center" />
              ) : (
                <img
                  className="mask mask-circle w-12"
                  src={URL.createObjectURL(selectedImage)}
                />
              )}
            </div>
            <button className="btn btn-primary mt-4">Registrar</button>
            <progress
              className="progress progress-primary w-full my-2"
              value={regProgress}
              max="100"
            ></progress>
          </form>
          <div className="flex justify-center mt-4">
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
