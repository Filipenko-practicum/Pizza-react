import React from 'react';
import picturesClear from '../../assets/img/clear.svg'
import styles from './Search.module.scss'
import {AppContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(AppContext)

    return (
        <div className={ styles.root }>
        <input
            className={ styles.input }
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Поиск пиццы..."/>
            {searchValue && (
                <img
                    onClick={() => setSearchValue('')}
                    className={styles.icon} src={picturesClear} alt="clear input"/>
                )}
        </div>
    );
};

export default Search;