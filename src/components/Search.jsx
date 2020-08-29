import React from 'react';
import '../assets/style/components/Search.scss'

const Search = () => (
    <nav className="navegator">
    <ul className="navegator__uniqueList">
        <li className="navegator__uniqueList--boton"><a href="ga_inicio.html"> Inicio </a></li>
        <li className="navegator__uniqueList--boton"><a href="ga_comedor.html"> Comedor </a></li>
        <li className="navegator__uniqueList--boton"><a href="ga_living.html"> Living </a></li>
        <li className="navegator__uniqueList--boton"><a href="ga_dormitorio.html"> Dormitorio </a></li>
        <li className="navegator__uniqueList--boton"><a href="ga_contactos.html"> Contactos </a></li>
    </ul>
</nav>
);

export default Search;