(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

ReactDOM.render(React.createElement(
  "div",
  { className: "react-container" },
  React.createElement(
    "nav",
    { className: "navbar navbar-default navbar-static-top navbar-inverse" },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "a",
          { href: "#", className: "navbar-brand logo" },
          "SPORT",
          React.createElement(
            "span",
            { className: "mblue" },
            "AGG"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse custom" },
        React.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" },
          React.createElement(
            "li",
            { className: "active" },
            React.createElement(
              "a",
              { href: "#" },
              "HOME"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "SPORTS"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "EVENTS"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "GALLERY"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "ABOUT US"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "CONTACT US"
            )
          )
        )
      )
    )
  ),
  React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "div",
      { style: { float: "right" } },
      React.createElement(
        "a",
        { href: "/auth" },
        React.createElement(
          "button",
          { className: "btn btn-primary" },
          "Login"
        )
      ),
      React.createElement(
        "a",
        { href: "/auth/logout" },
        React.createElement(
          "button",
          { className: "btn btn-primary" },
          "Logout"
        )
      )
    ),
    React.createElement(
      "h1",
      null,
      "Hello !"
    ),
    React.createElement(
      "h1",
      null,
      "Login using the button"
    ),
    React.createElement(
      "div",
      { className: "image-holder" },
      React.createElement("img", { src: "/images/screenshot_sportagg_main.png", className: "image-overlay" })
    )
  ),
  React.createElement(
    "h1",
    null,
    "hi"
  )
), document.getElementById('example'));

},{}]},{},[1]);
