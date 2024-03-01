import React from "react";

function ListCategories(){
    const [categoryIndex, setCategoryIndex] = React.useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытая',
    ]

    const onClickCategory = (index) => {
        setCategoryIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                        <li onClick={() => onClickCategory(index)} className={categoryIndex === index ? 'active' : ''}>{ value }</li>
                    ))}
            </ul>
        </div>
    )
}

export default ListCategories;