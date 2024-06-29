import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}><div className='d1'/></div>
            <div className="item" style={{ "--position": 2 }}><div className='d2'/></div>
            <div className="item" style={{ "--position": 3 }}><div className='d3'/></div>
            <div className="item" style={{ "--position": 4 }}><div className='d4'/></div>
            <div className="item" style={{ "--position": 5 }}><div className='d5'/></div>
            <div className="item" style={{ "--position": 6 }}><div className='d6'/></div>
            <div className="item" style={{ "--position": 7 }}><div className='d7'/></div>
            <div className="item" style={{ "--position": 8 }}><div className='d8'/></div>
            <div className="item" style={{ "--position": 9 }}><div className='d9'/></div>
            <div className="item" style={{ "--position": 10 }}><div className='d10'/></div>
        </div>
        <div className="content">
            <div className="author">
                <h3>Ayush Gokhle</h3>
                <h4>ayushgokhle@gmail.com</h4>
            </div>
            <div className="model"></div>
        </div>
    </div>
  )
}

export default Home
