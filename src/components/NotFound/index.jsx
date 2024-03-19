import React from 'react';

import style from './StyleNotFound.module.scss'

const Index = () => {
    return (
        <div className={ style.root }>
            <h1>Чуваааааааак,страница не найдена!Ты сегодня без пицц!!!!</h1>
            <p className={ style.description }>Ну и что ты тут забыл?!</p>
        </div>

    );
};

export default Index;