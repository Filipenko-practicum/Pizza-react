import React from "react";

function ListCategories({ value, onClickValueCategory }){

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытая',
    ]


    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => (
                        <li key={ index } // можно использовать индекс, если только массив статичный!!!
                            onClick={() => onClickValueCategory(index)}
                            className={value === index ? 'active' : ''}>
                            { categoryName }</li>
                    ))}
            </ul>
        </div>
    )
}

export default ListCategories;