import './scss/app.scss';
import LogoHeader from "./components/LogoHeader";
import ListCategories from "./components/ListCategories";
import SortPizza from "./components/SortPizza";
import PizzaBlock from "./components/PizzaBlock";
import pizza from "./assets/pizza.json"


function App() {
  return (
      <div className="wrapper">
        <LogoHeader/>
        <div className="content">
          <div className="container">
            <div className="content__top">
                <ListCategories/>
              <SortPizza/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizza.map((obj)=> (
                        <PizzaBlock { ...obj }
                            // Запись сверху {...obj} это спред оператор,он берёт все св-ва объекта
                            // title={ obj.title }
                            // price={ obj.price }
                            // img = { obj.imageUrl }
                            // size = { obj.sizes }
                            // type = { obj.types }
                        />))
                }
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
