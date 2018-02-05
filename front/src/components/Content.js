import React, { Component } from 'react';
import Button from 'antd/lib/button';
import axios from 'axios'
import { connect } from 'react-redux'

class Content extends Component {
  state = {
    route: null
  }
  componentDidMount(){
    if(this.props.route) this.getItems.bind(this)(this.props.route)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.route !== nextProps.route) this.getItems.bind(this)(nextProps.route)
  }
  getItems(route){
    if(this.props[route] && Array.isArray(this.props[route]) && !this.props[route].length)
      axios.get(`http://localhost:3001/${route}`)
        .then(res => this.props.setItems(route, res.data.items) ) //this.setState({ elements: res.data.items }))
    else console.log('cached', route, this.props[route].length)
  }
  add(id){
    this.props.addProduct(`${this.props.route}:${id}`)
  }
  remove(id){
    this.props.removeProduct(`${this.props.route}:${id}`)
  }
  render() {
    let elements = null
    if(this.props.route) elements = this.props[this.props.route]
    return (
      <div className="Content">
        {elements && elements.map((elem, i) => {
          let amount = this.props.cart[`${this.props.route}:${elem.id}`] || 0
          return (
            <div key={i} className="row">
              <span>{elem.name}</span>
              <div>
                <Button type="primary" onClick={this.remove.bind(this, elem.id)}>-</Button>                
                <span>{ amount }</span>
                <Button type="primary" onClick={this.add.bind(this, elem.id)}>+</Button>
              </div>
              <div className="Subprice" >
                <span>{`$ ${ amount * elem.price }`}</span>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

const Connected = connect(
  state => ({
    movies: state.movies,
    videogames: state.videogames,
    electronics: state.electronics,
    cart: state.cart,
  }),
  dispatch => ({
    setItems: (route, items) => dispatch({ type: `SET_${route.toUpperCase()}`, [route]: items }),
    addProduct: (item) => dispatch({ type: 'ADD_PRODUCT', item }),
    removeProduct: (item) => dispatch({ type: 'REMOVE_PRODUCT', item })
  })
)(Content)

export default Connected;
