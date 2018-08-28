import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const divStyle = {
            textAlign: "center",
            fontSize: "0.9em",
        };

        return (
            <footer className="copyright">
                <div
                    style={divStyle}>
                    <p>2018 &copy; Developed by Elena Novikova
                        <br></br>
                        for Udacity / Google FEND
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer
