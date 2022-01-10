import {CategoryContainer} from "../UI/Containers";
import React from 'react';
import {BlackLabel, SmallLabel} from "../UI/Labels";
import {IconBack} from "../../assets/Icons";
import {useNavigate} from "react-router-dom";

const CategoryLabel = ({categoryName}) => {
    let navigate = useNavigate();

    return (
        <CategoryContainer>
            <BlackLabel>{categoryName}</BlackLabel>
            <SmallLabel onClick={() => navigate(-1)}>
                <IconBack/>
            </SmallLabel>
        </CategoryContainer>
    );
};

export default CategoryLabel;
