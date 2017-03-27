import React from 'react'
import './App.css'
// var styles = {
//   button: {
//     backgroundColor: 'blue',
//     color: 'white' 
//   },
//   buttonActie {

//   }
// }

export default React.createClass({
  getInitialState: function() {
    return {
      count:0
    }
  },
  handleClick: function () {
    this.setState({
      count: this.state.count + 1
    })
  },
  render: function () {
    var likes = "likes"
    if (this.state.count === 1) {
      likes = 'like'
    }
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count} {likes}</button>
      </div>
      )
  }
})