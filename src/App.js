import './App.css';
import React, {Component} from 'react';
import { motion } from 'framer-motion';

class App extends Component {

  constructor() {
    super()

    this.state = {
      caracters: [],
      loading: true
    }
  }


  fetchCaracters = () =>{
    console.log('Estou sendo Chamado')
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json()
      .then(({ results}) => this.setState({caracters: results, loading: false})))
  }

  componentDidMount() {
      console.log('componentDidMount')
      setTimeout(() => {  
        this.fetchCaracters() 
      }, 1000)
  }

  render() {
    console.log('render')
    
    const { caracters, loading} = this.state
    
    return (
      <>
      <div className='Container'>

        <motion.div className='carousel' whileTop={{cursor:'grabbing'}}>.
          <motion.div className='inner' drag='x' 
          >
            <h1>Personagens</h1>
            { loading ? <h2>LOADING...</h2>   
            : 
            caracters.map(data => (
          
            <motion.div className='item' key={ data.name }>
              <p>{ data.name }</p>
              <img src={ data.image } alt={ data.name } />    
            </motion.div>
            ))
            }
          </motion.div>
        </motion.div>

      </div>
      </>
    );
  }
}

export default App;
