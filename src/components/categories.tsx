import React from 'react';
import PropTypes from "prop-types";

type ICategories = {
    onClickCategory: (value: number) => void;
    value: number;
}

const Categories: React.FC<ICategories> = React.memo(
    function Categories({ onClickCategory, value}) {
     

        const categories = ["Все","Мясные", "Гриль", "Острые", "Закрытые", "Вегетаринская"];

        return (
            <div>
                <div className="categories">
                    <ul>
                        {categories.map((item, index) => <li className={value === index ? "active" : ""} onClick={() => onClickCategory(index)} key={index}>{item}</li>)}
                    </ul>

                </div>
            </div>
        );

    }
);


// Categories.defaultProps = {
//     // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
//     items: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onClickCategory: PropTypes.func.isRequired,
// };

// Categories.defaultProps = {activeCategory: null, items: []};


export default Categories;
