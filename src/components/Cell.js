import React, {useContext} from "react";
import {GridContext} from "../context/GridContext";

//创建一个Cell
const Cell = ({ index }) => {
    const { cells, toggleCell } = useContext(GridContext);//从Grid中取出全局变量

    //这里对应了每个格子的序号，如果list中对应的位置是true，则是个黑的，否则是个白的
    return (
        <div
            className="cell"
            style={{ backgroundColor: cells[index] ? "black" : "white" }}
            onClick={() => toggleCell(index)}//点击每个cell的时候触发翻转函数
        />
    );
};

export default Cell;
