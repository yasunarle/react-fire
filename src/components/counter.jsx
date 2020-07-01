import React, { Component } from "react"

export default class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      // React.createElement("div", null, "hello")
      // React.Fragment
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">+</button>
      </div>
    )
  } // render()

  formatCount() {
    const { count } = this.state
    return count === 0 ? "Zero" : count
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary"
    return classes
  }
}
