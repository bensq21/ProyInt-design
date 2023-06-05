import React from 'react';
import MdiSchool from './../../assets/MdiSchool';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content justify-items-center">
      <div>
          <MdiSchool className='w-12 h-12'/>
        <p>
          AndaLumnos S.I.
          <br />
          (Sociedad Inventada)
        </p>
      </div>
      <div>
        <span className="footer-title justify-self-center md:justify-self-start">Sobre nosotros</span>
        <a className="link link-hover">Donde encontrarnos</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Desarrollador</a>
      </div>
      <div>
        <span className="footer-title justify-self-center md:justify-self-start">Servicios</span>
        <a href='https://symfony.com/' className="link link-hover">Symfony</a>
        <a href='https://es.vitejs.dev/guide/' className="link link-hover">React + Vite</a>
        <a href='https://daisyui.com/' className="link link-hover">Daisy + Tailwind</a>
        <a href='https://github.com/Templarian/MaterialDesign' className="link link-hover">Material Design Icons</a>
      </div>
      <div>
        <span className="footer-title justify-self-center md:justify-self-start">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
