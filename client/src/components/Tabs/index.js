import React,{Component} from "react";
import "./style.css";



class Tabs extends Component {
      state = {
        active: 0
      }
    
    
    select = (i) => {
      let t = this;
      return function() {
        t.setState({
          active: i
        });
      }
    }
    
    renderTabs = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          let active =
           this.state.active === i ? 'active' : '';
          return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
        }
      });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.state.active) {
          return <div className='content'>{item}</div>;
        } else {
          return;
        }
      });
    }
    render() {
        return (
          <div className="tabs">
            {this.renderTabs()}
            {this.renderContent()}
          </div>
        );
      }
    }
    

  export default Tabs;