import React from 'react';
import classes from "../../index.module.css";

const MainSearch = ({onChange}) => {

    return (
        <div className={classes.searchForm}>
            <input
                className={classes.input}
                type="text"
                placeholder="поиск по названию"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default MainSearch;