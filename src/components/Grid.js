import React, {useContext} from "react";
import Cell from "./Cell";
import {GridContext} from "../context/GridContext";


//创建一个网格组件
const Grid = () => {
    const { cells } = useContext(GridContext);//在网格中从全局变量中获取cellsList的装填

    return (
        <div>
            {/*当前格子中处于黑色状态的格子的数量就是CellList中的true的数量,用于显示点开了几个*/}
            <h2>Count: {cells.filter(Boolean).length}</h2>
            <div className="grid">
                {cells.map((cell, index) => {
                    return <Cell key={index} index={index}/>;
                })}
            </div>
        </div>
    );
};

export default Grid;
