import React from 'react';
import list from '../list';
import Card from './Card';  // Make sure to import with the correct casing (Card)

const Shop = ({handleClick}) => {
  return (
    <section>
      {list.map((item) => {
       // console.log(item);
        
        return <Card item={item} key={item.id} handleClick={handleClick}/>;  // Return the Card component

      })}
    </section>
  );
}

export default Shop;