import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputeValue(defaulteValue = '') {
    const [value, setValue] = useState(defaulteValue)

    return {
        bind:{
            value,
            onChange: event=>setValue(event.target.value)
        },
        clear:()=> setValue(''),
        value:()=>value,
    }
}

function AddTodo({onCreate}){
    const input = useInputeValue('')

    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <React.Fragment>
            <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
                <input {...input.bind}/>
                <button type='submit'>Add Todo</button>     
            </form>            
        </React.Fragment>
                      
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo