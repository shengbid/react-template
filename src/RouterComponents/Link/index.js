import React, { Component } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/index"
import About from "../About/index"
// import About2 from "../About/index"
import MyNavLink from "../MyNavLink"

export default class RouteLink extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
              {/* 属性activeClassName="active"指定高亮样式类名 */}
              <MyNavLink to="/about">about</MyNavLink>
              <MyNavLink to="/home">home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* switch匹配成功后停止匹配,新版本没有,自动单次匹配 */}
                {/* <Switch> */}
                {/* 新版本默认是严格匹配 exact */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route exact={false} path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  {/* <Route path="/home" element={<About2 />} /> */}
                </Routes>
                {/* </Switch> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
