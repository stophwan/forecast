import React from 'react';
import {useSelector} from 'react-redux';
import Alert from 'react-bootstrap/Alert'

export default function ErrorMessage(){
    const error = useSelector(state => state.error);

    if(!error){
        return <div/>;
    }
    return(
        <Alert variant='danger'>
           Error: {error.message}
        </Alert>
    )
}


