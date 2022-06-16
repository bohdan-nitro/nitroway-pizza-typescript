import React, {useState} from 'react';
import PropTypes, { number } from "prop-types";
import classNames from "classnames";
import Button from "../button";
import {Link} from "react-router-dom"

import {useSelector, useDispatch} from "react-redux";

import {addItem, cartSelectById} from "../../reduxToolkit/slices/cartSlice";


type IPizzaProps = {
    id: string
    name: string
    imageUrl: string
    price: number
    types: number[]
    sizes: number[]
}

const PizzaBlock: React.FC<IPizzaProps> = ({id, name, imageUrl, price, types, sizes}) => {
    
    const typeNames = ["тонкое", "традиционное"];

    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0]);

    const [activeSize, setActiveSize] = useState<number>(0);

    const dispatch = useDispatch();

    const totalCartItems = useSelector(cartSelectById(id));


    const totalCountItems = totalCartItems ? totalCartItems.count : 0


    const onSelectType = (index: number) => {
        setActiveType(index);
    };
    const onSelectSize = (index: number) => {
        setActiveSize(index);
    };

    // const onAddPizza = () => {
    //     const obj = {
    //         id,
    //         name,
    //         imageUrl,
    //         price,
    //         size:availableSizes[activeSize],
    //         type:typeNames[activeType]

    //     };
    //     onClickAddPizza(obj)
    // };

    const onClickAddItem = () => {
        const item = {
            id,
            name,
            imageUrl,
            price,
            size:availableSizes[activeSize],
            type:typeNames[activeType]

        };
        dispatch(addItem(item))
    }

    return (
        <div className="pizza-block">
            <Link  key={id} to={`/pizza/${id}`}>
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            </Link>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((type, index) =>
                        <li key={type}
                            onClick={() => onSelectType(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}>{type}</li>)}

                </ul>
                <ul>
                    {availableSizes.map((size, index) =>
                        <li key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size),
                            })}>{size} см</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} UAH</div>
                <Button onClick={onClickAddItem} className={"button--add"} outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить {totalCountItems > 0 && <i>{totalCountItems}</i>}</span>
                    
                </Button>
            </div>
        </div>
    );
}

export default PizzaBlock;