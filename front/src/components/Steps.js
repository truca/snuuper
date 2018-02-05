import React, { Component } from 'react';
import Steps from 'antd/lib/steps';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Content from './Content'
import Checkout from './Checkout'

const steps = [{
  title: 'Movies',
  content: 'movies',
}, {
  title: 'Videogames',
  content: 'videogames',
}, {
  title: 'Electronics',
  content: 'electronics',
}, {
  title: 'Checkout',
  content: 'checkout'
}];

class Pasos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    let Step = Steps.Step
    return (
      
        <div className="Steps">
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div className="steps-content">
            {this.state.current === steps.length - 1? 
              <Checkout />
              : 
              <Content route={steps[this.state.current].content} />

            }
            
          </div>
          <div className="steps-action">
            {
              this.state.current < steps.length - 1
              &&
              <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              this.state.current === steps.length - 1
              &&
              <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              this.state.current > 0
              &&
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            }
          </div>
        </div>
      
    );
  }
}

export default Pasos;
