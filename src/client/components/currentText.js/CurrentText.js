/* eslint-disable */
import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from 'react-icons/gr'
import style from './style.css'
import icon from './icon.png'
const textList = [
    "Hỗ trợ đổi size Tại tất cả cửa hàng trong vòng 1 tuần",
    "Miễn phí vận chuyển",
    "Tại tất cả cửa hàng trong vòng 1 tuần!",
    "Miễn phí vận chuyển với hóa đơn trên 1 triệu tại HCM"
];

const TextSlider = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentTextIndex + 1) % textList.length;
            setCurrentTextIndex(nextIndex);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentTextIndex]);

    return (
        <div className="textList">
            < GrPrevious />
            <h3><img src={icon} />{textList[currentTextIndex]}</h3>
            < GrNext />
        </div>
    );
};

export default TextSlider;