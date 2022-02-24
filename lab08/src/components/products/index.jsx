import React from 'react'
import { realtimeDB } from '../../utils/firebase'
import { getDatabase,ref,child,get } from 'firebase/database';

export default class Products extends React.Component {
  //const test = realtimeDB.ref();
  constructor(props){
    super(props);
    this.state = {
      products:[]
    }
  }

  componentDidMount() {
     this.loadData();
  } 
  loadData = () => {
    const dbRef = ref(realtimeDB);
    let products = [];
     get(child(dbRef, 'products'))
      .then(data => {
        if(data.exists()) {
          products = data.val();
          this.setState({products:products})
          console.log(products)
        }
        else
          console.log('No data');
      })
      .catch(error => {
        console.error(error);
      })
  
    return products;
  }
  
  render() {
    return (
      <div>
        <div>Products</div>
        {
        this.state.products.map(p => 
        <div>{p.name} - {p.price}</div>)
        }

      </div>
      

    )
  }
}
