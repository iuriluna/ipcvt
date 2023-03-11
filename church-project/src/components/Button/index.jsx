import { useState } from 'react';
import './styles.css';

function Button({ title, stroked, colorBorder, fontColor, event, sizeText }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={event}
      className='button-component'
      style={{
        border: stroked === true ? `1px solid ${colorBorder}` : 'none',
        background: isHover ? colorBorder : 'transparent',
        color: isHover ? 'white' : fontColor,
        fontSize: sizeText,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {title}
    </button>
  );
}

export default Button;
