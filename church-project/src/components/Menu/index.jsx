import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const nav = useNavigate();
  return (
    <section className='menu'>
      <h1 onClick={() => nav('/sobre')}>Sobre</h1>
      <h1 onClick={() => nav('/onde')}>Onde</h1>
      <h1 onClick={() => nav('/doe')}>Doe</h1>
    </section>
  );
};

export default Menu;
