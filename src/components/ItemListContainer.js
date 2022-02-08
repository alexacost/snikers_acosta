import {useEffect,useState} from 'react';
import Item from './Item';
import {productsAPI} from '../helpers/promises';


export const ItemListContainer = (props) => {
  const [selectedItem,setSelectedItem] = useState(null)
  const[products, setProducts] = useState([])

  useEffect(()=> {
    getProducts();
  })

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log("error")
    }
  }

  return <div className='row align-items-start'>
      {products.map(({ id, name, image, description,stock }) => (
        <Item
          key={id}
          id={id}
          name={name}
          description={description}
          image={image}
          setSelectedItem={setSelectedItem}
          stock={stock}
        />
      ))}
    

  </div>;
  
  
};

export default ItemListContainer;
