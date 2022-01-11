import {CategoryContainer} from "../UI/Containers";
import React from 'react';
import {BlackLabel, SmallLabel} from "../UI/Labels";
import {IconBack} from "../../assets/Icons";
import { useNavigate} from "react-router-dom";

const CategoryLabel = ({categoryName}) => {
    let navigate = useNavigate();
    const category = categoryName === categoryName.toLowerCase() ? "details" : categoryName;
    const navigationHandler = () => {
        if (category !== "details")navigate(-1)
        navigate(`/${categoryName}`)
    }
    return (
        <CategoryContainer>
            <BlackLabel>{category}</BlackLabel>
            <SmallLabel onClick={navigationHandler}>
                <IconBack/>
            </SmallLabel>
        </CategoryContainer>
    );
};

export default CategoryLabel;
