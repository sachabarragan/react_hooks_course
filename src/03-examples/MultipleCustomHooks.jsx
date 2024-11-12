

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Phone } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(4);
    const { data, isLoading, hasError } = useFetch(`https://randomuser.me/api/?results=${ counter }`);
    const { email, phone } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <h1>Quantity: {data?.length}</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />
                 : <Phone email={ email } phone={ phone } />
            }
                      
                      <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => counter > 1 ? decrement() : null }>
                Prev phone
            </button>
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next phone
            </button>

        </>
    )
}
