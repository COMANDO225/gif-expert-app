import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import NohayNada from './components/NohayNada';


const App = () => {

  const [categories, setcategories] = useState([
    {nombre: ''},
  ]);

  console.log(categories);

    return (
        <>
            <div className="nav">
                <h1>
                  <span>GIF REACT APP</span>
                </h1>
                <AddCategory
                  setcategories= {setcategories}
                />
            </div>
            {
              categories.length === 1 ?
              <NohayNada/>
              :
              <div className='section'>
                {
                  categories.map((category, i) => (
                    <div key={i}>
                      <GifGrid 
                        category={category}
                      />
                    </div>
                  ))
                }
              </div>
            }
        </>
    );
}

export default App;
