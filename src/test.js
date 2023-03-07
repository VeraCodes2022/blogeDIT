import React, { Component } from 'react'

export default class test extends Component {
  render() {
    return (
      <div>test</div>
    )
  }
}


console.log(test.__proto__.__proto__.__proto__.__proto__)
//class test component -> function Component(){ 2739line of codes } -> ƒ(){ [native code] } -> Object() -> null