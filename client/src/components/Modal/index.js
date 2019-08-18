import React from 'react';

import './style.css';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateX(0vh)' : 'translateX(100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                >
                <div className="modal-body">
                {props.children}
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
