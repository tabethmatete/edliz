import React from 'react'
import bars from './menu.svg'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button style={{position:"fixed", top: 0, left:0, border: "none", borderRadius:"50%", padding: 15, background: "transparent", width: 50, height: 50, top: 0, left: 0}} onClick={this.props.action} className="btn-toggle-nav">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}