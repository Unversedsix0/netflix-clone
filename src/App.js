import categories from './api';
import './App.css';
import Banner from './components/Banner/Banner';

import Row from './components/Row/Row';

const App = ()=> {
  return (
    <div className="App">
    
      <Banner/>
      {categories.map((category) =>{
        return <Row key={category.name} 
        title={category.title} 
        path={category.path}
        isLarge={category.isLarge}
        />;
      })}
      
   
    </div>
  );
}

export default App;
