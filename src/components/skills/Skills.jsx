import React from 'react'
import './skills.scss'

export default function Skills() {
  return (
    <div className='skills' id='skills'>
          <h3>Skills</h3>
          <h2>What I Can Do</h2>
        <div className='contanier'>
          <div className='imgContanier'>
            <span>HTML</span>
            <img src="assets/html.png" alt="HTML_img" /> 
          </div>
          <div className='imgContanier'>
            <span>CSS</span>
            <img src="assets/css.png" alt="css_img" /> 
          </div><div className='imgContanier'>
            <span>JavaScript</span>
            <img src="assets/javascript.png" alt="js_img" /> 
          </div><div className='imgContanier'>
            <span>React</span>
            <img src="assets/react.png" alt="react_img" /> 
          </div>
          <div className='imgContanier'>
            <span>Node</span>
            <img src="assets/node.png" alt="node_img" /> 
          </div>
          <div className='imgContanier'>
            <span>Vue</span>
            <img src="assets/Vue.png" alt="vue_img" /> 
          </div>
          <div className='imgContanier'>
            <span>Github</span>
            <img src="assets/github.png" alt="github_img" /> 
          </div>
          <div className='imgContanier'>
            <span>Python</span>
            <img src="assets/Python.png" alt="python_img" /> 
          </div>
          <div className='imgContanier'>
            <span>Java</span>
            <img src="assets/java.png" alt="java_img" /> 
          </div>
          <div className='imgContanier'>
            <span>SQL</span>
            <img src="assets/sql.png" alt="sql_img" /> 
          </div>
          <div className='imgContanier'>
            <span>C++</span>
            <img src="assets/c++.png" alt="c++_img" /> 
          </div>
          
            {/* <img src="assets/html.png" alt="HTML_img" /> 
            <img src="assets/css.png" alt="CSS_img" />
            <img src="assets/javascript.png" alt="JS_img" />
            <img src="assets/react.png" alt="react_img" />  
            <img src="assets/Vue.png" alt="vue_img" />
            <img src="assets/Python.png" alt="python_img" />
            <img src="assets/node.png" alt="node_img" />
            <img src="assets/github.png" alt="github_img" /> */}
      </div>
    </div>
  )
}
