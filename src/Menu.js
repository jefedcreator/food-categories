import React from 'react';

const Menu = ({menu}) => {
  const MenuData = menu.map(meni =>{
   return <article key={meni.id} className='menu-item'>
        <img src={meni.img} alt={meni.title} className='photo'/>
        <div className='item-info'>
          <header>
            <h4>{meni.title}</h4>
            <h4 className='price'>${meni.price}</h4>
          </header>
          <p className='item-text'>{meni.desc}</p>
        </div>
   </article> 
  })

  return (
    <div className='section-center'>
      {MenuData}
    </div>
  );
};

export default Menu;
