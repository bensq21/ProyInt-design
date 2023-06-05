import React from 'react';
import MdiAccount from './../../assets/MdiAccount';
import MdiAccountTie from './../../assets/MdiAccountTie';
import MdiAccountGroup from './../../assets/MdiAccountGroup';
import MdiMenu from './../../assets/MdiMenu';
import MdiClose from './../../assets/MdiClose';
import MdiCogOutline from './../../assets/MdiCogOutline';
import MdiLogout from './../../assets/MdiLogout';
import MdiAccountSchool from './../../assets/MdiAccountSchool';
import MdiAccountSupervisor from './../../assets/MdiAccountSupervisor';
import MdiSchool from './../../assets/MdiSchool';
import MdiBadgeAccountHorizontalOutline from './../../assets/MdiBadgeAccountHorizontalOutline';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-circle swap swap-rotate btn-ghost"
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <MdiMenu className="w-6 h-6 swap-off fill-current" />

            {/* close icon */}
            <MdiClose className="w-6 h-6 swap-on fill-current" />

          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <a>
                <MdiAccountTie className="w-6 h-6" />
                Profesorado
              </a>
            </li>
            <li>
              <a>
                <MdiAccountSchool className="w-6 h-6" />
                Alumnos
              </a>
            </li>
            <li>
              <a>
                <MdiSchool className="w-6 h-6" />
                Instituto
              </a>
            </li>
            <li>
              <a>
                <MdiAccountSupervisor className="w-6 h-6" />
                Profesores laborales
              </a>
            </li>
            <li>
              <a>
                <MdiAccountGroup className="w-6 h-6" />
                Empresas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">AndaLumnos</a>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <MdiAccount className="w-8 h-8" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <MdiBadgeAccountHorizontalOutline className="w-6 h-6" />
                Perfil
              </a>
            </li>
            <li>
              <a>
                <MdiCogOutline className="w-6 h-6" />
                Configuración
              </a>
            </li>
            <li>
              <a>
                <MdiLogout className="w-6 h-6" />
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
