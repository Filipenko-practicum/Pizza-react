import React from "react";

import ListCategories from "../components/ListCategories";
import SortPizza from "../components/SortPizza";
import Skeleton from "../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";


export const Home = ({ searchValue }) => {
    const [ items, setItems ] = React.useState([])
    const [ isLoad, setIsLoad ] = React.useState(true)
    const [categoryIndex, setCategoryIndex] = React.useState(0)
    const [pagination, setPagination] = React.useState(1)
    const [activeSort, setActiveSort] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    const PIZZAS = items.map((obj)=> <PizzaBlock key={ obj.id } { ...obj }
            // Запись сверху {...obj} это спред оператор,он берёт все св-ва объекта
            // title={ obj.title }
            // price={ obj.price }
            // img = { obj.imageUrl }
            // size = { obj.sizes }
            // type = { obj.types }
        />)

    const SKELETON = [...new Array(6)].map((_, index)=> <Skeleton key={ index }/>)

    React.useEffect(() => {
        setIsLoad(true)
        const SEARCH = searchValue? `&search=${searchValue}` : ''

        fetch( `https://65f2b5b4034bdbecc7659b6c.mockapi.io/items?page=${pagination}&limit=4&${
            categoryIndex > 0 ? `category=${categoryIndex}` : ''}&sortBy=${activeSort.sortProperty}&order=desc${SEARCH}`
        )
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                setItems(arr)
                setIsLoad(false)
            })
        window.scrollTo(0, 0)   /*Эта надпись позволяет при переходе на главную, делать скрол сразу вверх страницы */
    }, [categoryIndex, activeSort, searchValue, pagination])

    return (
        <div className="container">
            <div className="content__top">
                <ListCategories value={ categoryIndex } onClickValueCategory={(id) => setCategoryIndex(id)}/>
                <SortPizza sortValue={ activeSort } onChangeSort={(i) => setActiveSort(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoad ? SKELETON : PIZZAS
                }
            </div>
            <Pagination onChangePage={number => setPagination(number)}/>
        </div>
    );
};