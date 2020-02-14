import React from 'react';
import { toast } from 'react-toastify';

import {If} from './utils';

export default ({name, html, hex, entity}) => {

    const copyToClipBoard = (code) => {
        try{
            const CODE = `&#${code};`;

            let dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = CODE;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            toast.success("✅ Copied!", { autoClose: 1500 });
        }
        catch(error){
            toast.error("😥 Something went wrong!", { autoClose: 1500 });
        }
    }

    return (
        <div className="col-auto">
            <div className="card" onClick={() => copyToClipBoard(entity || html || hex)}>
                <div className="head">
                    <span dangerouslySetInnerHTML={{__html: `&#${html || hex};`}}></span>
                </div>
                <div className="body">
                    <div className="name">{name}</div>
                    <code data-type="html-code" className="html-code">&amp;#{html};</code>
                    <code data-type="hex-code" className="hex-code">&amp;#{hex};</code>
                    <If condition={entity}>
                        <code data-type="html-code" className="html-code">&amp;{entity};</code>
                    </If>
                    <If condition={!entity}>
                        <code data-type="html-code" className="html-code">&nbsp;</code>
                    </If>
                </div>
            </div>
        </div>
    );
}
