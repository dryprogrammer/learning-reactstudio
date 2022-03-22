import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import btn_icon_807601 from './images/btn_icon_807601.png';

export default class CustomCheckbox extends Component {

  static contextType = ScreenContext;

  // Properties used by this component:
  // visualStateIndex

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    const style_state0_elCard626757 = {
      width: '100%',
      height: '100%',
      borderRadius: '1.0px',
     };
    const style_state0_elCard626757_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#bee9ee',
      padding: '3.0px',
      borderRadius: '1.0px',
      filter: 'drop-shadow(2.0px 2.0px 7px black)',
      overflow: 'visible',
     };
    
    return (
      <div className="CustomCheckbox">
        <div className="foreground">
          <div className="state0_elCard626757" style={style_state0_elCard626757_outer}>
            <div className="primaryBg" style={style_state0_elCard626757} />
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    const style_state1_elCard626757 = {
      width: '100%',
      height: '100%',
      borderRadius: '1.0px',
     };
    const style_state1_elCard626757_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#bee9ee',
      padding: '3.0px',
      borderRadius: '1.0px',
      filter: 'drop-shadow(2.0px 2.0px 7px black)',
      overflow: 'visible',
     };
    
    const style_state1_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_807601+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '97.736%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    
    return (
      <div className="CustomCheckbox">
        <div className="foreground">
          <div className="state1_elCard626757" style={style_state1_elCard626757_outer}>
            <div className="primaryBg" style={style_state1_elCard626757} />
          </div>
          
          <button className="actionFont state1_elIconButton" style={style_state1_elIconButton} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
