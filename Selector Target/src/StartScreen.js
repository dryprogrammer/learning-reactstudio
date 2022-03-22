import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import SelectorTabs from './SelectorTabs';
import CustomCheckbox from './CustomCheckbox';

export default class StartScreen extends Component {

  static contextType = ScreenContext;


  constructor(props) {
    super(props);
    
    this.state = {
      selectedIndex_selector: 0,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  selectorSelectionChanged = (idx, ev) => {
    this.setState({selectedIndex_selector: idx});
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.context.transitionId;
    }
    if ( !this.context.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const selectedIndex_selector = this.state.selectedIndex_selector;
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elSelector = {
      height: 'auto',  // This element is in scroll flow
     };
    // eslint-disable-next-line no-unused-vars
    const style_elSelector_part = {
      display: 'inline-block',
      position: 'relative',
      width: '50.0%',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.context.locStrings.start_text_779353}</div>
            </div>
          </div>
          
          <div className="hasNestedComps elSelector">
            <div style={style_elSelector}>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 0)}><SelectorTabs visualStateIndex={this.state.selectedIndex_selector === 0 ? 1 : 0} title='Unchecked' unselectedStateIndex='0' selectedStateIndex='1' /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 1)}><SelectorTabs visualStateIndex={this.state.selectedIndex_selector === 1 ? 1 : 0} title='Checked' unselectedStateIndex='1' selectedStateIndex='0' /></div>
            </div>
          </div>
          
          <div className="hasNestedComps elComp">
            <div>
              <CustomCheckbox ref={(el)=> this._elComp = el} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
