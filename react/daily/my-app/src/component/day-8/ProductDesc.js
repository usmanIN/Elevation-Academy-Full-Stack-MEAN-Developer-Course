import React from 'react';
import { useParams , useNavigate} from 'react-router-dom';

const ProductDesc = () => {

    const {mobileName} = useParams();
    const navigate = useNavigate();
    return(
        <div>
            <h1>{mobileName}</h1>
            <p>Descripton: </p>
            <button onClick={()=>navigate('/product',{state:"Rs: 90,000"})}>Click Here</button>
        </div>
    )
}

export default ProductDesc;