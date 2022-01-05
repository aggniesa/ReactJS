import {useState , useEffect} from 'react';
import ItemList from './ItemList';
import data from './data/data';
import {useParams} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const productos = data;

function ItemListContainer ({greeting, nombreUsuario, apellido}) {
    
   const [products, setProducts] = useState ([]);
   const {id} = useParams ();
    
   const [loading, setLoading] = useState (false);

    useEffect(() => {
        console.log(id);
        /*
        const filteredData = data.filter ((products) => data.category);
        if (id) {
            res (products.filter(data => data.category == id));

        } else {
            res (products);

        };
        */
        setLoading (true);
        const promesa = getItems();
        promesa
        .then(result => {
            console.log (result);

            // if(id){
                

            //} else {
            
            setProducts (result);
            //}
        })
    }, [id])

    const getItems = () => {
        
        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                
                setLoading (false);
                res(productos)
            }, 2000);    
        })
        return promesa;
    }

    
    return (
        
        <div>
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            {
                loading ? 
                <ClipLoader color={"#2BEFC6"} loading={loading} size={75} />
                :
                <ItemList lista={products}/>
            }
            

        </div>
        
        
    )
}

export default ItemListContainer;
