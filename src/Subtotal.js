import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer'
import { Link, useHistory } from 'react-router-dom';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  /* const countTotal = () => { 
    let total = 0; 
    basket.forEach((item) => { total += item.price; }); 
    return total; 
  }; */

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={
          value => (
            <>
              <p>
                Subtotal ({ basket.length } items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
                </small>

            </>
          )
        }
        dicimalScale={ 2 }
        value={ getBasketTotal(basket) }
        displayType={ "text" }
        thousandSeparator={ true }
        prefix={ "$" }
      />
      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
