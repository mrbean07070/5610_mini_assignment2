import React, { createContext, useState} from "react";

//创建一个全局状态
export const GridContext = createContext();

//创建一个全局状态管理
export const GridProvider = ({ children }) => {
    const [cells, setCells] = useState([false, false, false, false]);//这里用四个列表中的状态来表示初始的状态

    //创建一个方法用于翻转一个Cell，这里需要传入一个index当作序号表示翻转的是第几个Cell
    const toggleCell = (index) => {
        setCells((prev) => {
            const newCells = [...prev];
            newCells[index] = !newCells[index];//把index对应的序号翻转过来，表示在全局变量中将格子翻转
            return newCells;
        });
    };

    return (
        // 暴露一个变量和一个方法
        <GridContext.Provider value={{ cells, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
};


