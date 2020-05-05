import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addCity} from '../actions/index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(){
    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    return(
        <Form inline className="mt-3 mb-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
                value={name}
                onChange={(event)=>{
                    setName(event.target.value)
                }}
                onKeyDown={(event)=>{
                    if (event.keyCode === 13){
                        if(!loading){
                            dispatch(addCity(name));
                            setName("");
                        }
                        event.preventDefault();
                        return false;
                    }
                }}
            />
            <Button type="button" onClick={()=>{
                dispatch(addCity(name))
                setName("");
            }}>
                {loading && (<FontAwesomeIcon icon={faSpinner} spin/>)}
                {!loading && "추가"}
            </Button>
        </Form>
    );
}