import React, { useEffect, useState } from 'react';
import cl from "./MyBigButton.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "../../../../../actions.js";

const MyBigButton = ({ onSelectCategory, handleFilterPageClose, categoryId, onLoadPosts, children, ...props }) => {


    const navigate = useNavigate();
    const [dataChanged, setDataChanged] = useState(false);

    useEffect(() => {
        // Здесь можно выполнить дополнительные действия при изменении данных
        console.log('Данные были изменены:', dataChanged);

        // Дополнительные действия, если необходимо
    }, [dataChanged]);

    const handleButtonClick = (e) => {
        if (categoryId) {
            if (onSelectCategory) {
                onSelectCategory({ categoryId });
            }
            handleFilterPageClose();
            navigate(`/page2/${categoryId}`);
            if (onLoadPosts) {
                onLoadPosts(categoryId);
                setDataChanged(!dataChanged); // Установка флага изменения данных
            }
        } else {
            console.error('Invalid categoryId');
        }
    };

    return (
        <a onClick={(e) => { e.preventDefault() }} className={cl.ntclown} href={`/page2/${categoryId}`}>
            <button onClick={handleButtonClick} {...props} className={cl.myBtn}>
                {children}
            </button>
        </a>
    );
};

export default MyBigButton;
