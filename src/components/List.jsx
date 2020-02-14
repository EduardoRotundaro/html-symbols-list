import React from 'react';

import Card from './Card';

export default ({itens=[]}) => {
    const renderCards  = () => itens.map(symbol => (
        <Card 
            key={`${symbol.html}_${symbol.hex}`}
            name={symbol.name}
            html={symbol.html} 
            hex={symbol.hex}
            entity={symbol.entity}
        />
    ));

    return (
        <section>
            <div className="container-fluid">
                <div className="row m-4">
                    {renderCards()}
                </div>
            </div>
        </section>
    );
}