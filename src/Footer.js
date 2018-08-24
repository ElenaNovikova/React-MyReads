import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="copyright">
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "0.9em"
                }}>
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
