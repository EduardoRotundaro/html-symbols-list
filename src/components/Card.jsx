import React from 'react';

export default ({name, html, hex}) => (
    <div className="col-auto">
        <div className="card">
            <div className="head">
                <span dangerouslySetInnerHTML={{__html: `&#${html || hex};`}}></span>
            </div>
            <div className="body">
                <div className="name">{name}</div>
                <code data-type="html-code" className="html-code">&amp;#{html};</code>
                <code data-type="hex-code" className="hex-code">&amp;#{hex};</code>
            </div>
        </div>
    </div>
);

//<code data-type="html-code" className="html-code">&amp;#8592;</code>
//<code data-type="hex-code" className="hex-code">&amp;#x2190;</code>