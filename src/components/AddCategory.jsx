import {useState} from 'react';


const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleValue = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setcategories( cats => [...cats,{nombre: inputValue}])
        }
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="inputText" 
                type="text"
                onChange={handleValue}
                value={inputValue}
                placeholder={'Busca tus gifs'}
            />
        </form>
    );
}

export default AddCategory;