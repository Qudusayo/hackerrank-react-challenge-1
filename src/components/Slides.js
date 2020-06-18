import React from 'react';

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      value : 0
    }
  }
  componentWillMount(){
    this.setState({ slides: this.props.slides })
  }
    
  render() {
  
    const res = () => {
        this.setState({value: 0})
    }

    const next = () => {
      if(this.state.value + 1 < this.state.slides.length){
        this.setState({value: this.state.value + 1})
      }
    }

    const prev = () => {
      if(this.state.value - 1 > -1){
        this.setState({value: this.state.value - 1})
      }
    }

    return (
      <div>
        <div id="navigation">
          <button data-testid="button-restart" onClick={res} disabled = {(this.state.value === 0) ? true : false}>Restart</button>
          <button data-testid="button-prev" onClick={prev} disabled = {(this.state.value === 0) ? true : false}>Prev</button>
          <button data-testid="button-next" onClick={next}disabled = {(this.state.value === this.state.slides.length - 1) ? true : false}>Next</button>
        </div>
        <div id="slide">
          <h1 data-testid="title">{this.state.slides[this.state.value].title}</h1>
          <p data-testid="text">{this.state.slides[this.state.value].text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
