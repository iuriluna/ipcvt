import { useState } from 'react'
import './styles.css'
import ImageLogo from '../../assets/logo-ipcvt.png'
import { useNavigate } from 'react-router-dom'



const Menu = () => {
  const nav = useNavigate();
  return (
    <section className='menu'>
      <header>
        <img src={ImageLogo} alt='logo-ipcvt' />
        <nav>
          <h1 className='h1-nav' onClick={() => nav('/sobre')}>Sobre</h1>
          <h1 className='h1-nav' onClick={() => nav('/onde')}>Onde</h1>
          <h1 className='h1-nav' onClick={() => nav('/doe')}>Doe</h1>
          <i className='bi bi-search'></i>
        </nav>
      </header>
    </section>
  );
};

export default Menu;
