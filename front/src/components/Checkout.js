import React, { Component } from 'react';
import { connect } from 'react-redux'

class Checkout extends Component {
  render() {

    return (
      <div className="Checkout">
        {Object.keys(this.props.cart).map((key, i) => {
          let data = key.split(':')
          let type = data[0], id = parseInt(data[1]), list = this.props[type]
          console.log('product', key, type, id, this.props, list)
          let product = list && list.find(item => item.id === id)
          return <div key={i} >{ `${product.name} : $ ${ this.props.cart[key] * product.price } (${this.props.cart[key]})` }</div>
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
  dispatch => ({})
)(Checkout)

export default Connected