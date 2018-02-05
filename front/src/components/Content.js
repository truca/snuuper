import React, { Component } from 'react';
import Button from 'antd/lib/button';
import axios from 'axios'

class Content extends Component {
  state = {
    route: null
  }
  componentDidMount(){
    if(this.props.route) axios.get(`http://localhost:3001/${this.props.route}`).then(res => this.setState({ elements: res.data.items }))
  }
  componentWillReceiveProps(nextProps){
    if(this.props.route !== nextProps.route)
      axios.get(`http://localhost:3001/${nextProps.route}`).then(res => this.setState({ elements: res.data.items })) 
  }
  add(){

  }
  remove(){

  }
  render() {
    return (
      <div className="Content">
        {this.state.elements && this.state.elements.map((elem, i) => {
          return (
            <div key={i} className="row">
              <span>{elem.name}</span>
              <div>
                <Button type="primary" onClick={this.remove}>-</Button>                
                <span>0</span>
                <Button type="primary" onClick={this.add}>+</Button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Content;
