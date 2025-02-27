
import react,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import './App.css'
import  Cart  from './components/Cart';
const  App=()=> {

  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false)
   const[show,setShow]= useState(true);






  const handleClick=(item)=>{
//console.log(item);
let isPresent=false;



cart.forEach((product)=>{

  if(item.id===product.id)
    isPresent=true
})
if(isPresent){
  setWarning(true);
  setTimeout(()=>{

    setWarning(false)
  },2000);
  return
 // console.log('item already present');
  
}
setCart([...cart,item])
  }
  return (
<div>
<Navbar size ={cart.length} setShow={setShow} />

{
  show ? <Shop handleClick={handleClick}/> : <Cart  cart={cart} setCart ={setCart}/>
}

{warning &&<div className='warning'>
  item is already present in your Cart
  </div>
  }

    </div>
  );
}

export default App;
