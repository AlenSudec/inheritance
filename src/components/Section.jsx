import React, { useEffect, useState } from "react";
import ThemeService from "../services/ThemeService";
import { BaseServiceInst } from "../services/BaseService";

export default function Section(){
    const [xd, setxD] = useState(0)
    const [xd1, setxD1] = useState(0)
    useEffect(() => {
        // const themeService = new ThemeService();
        const number = ThemeService.get();
        setxD(number);

        const number1 = BaseServiceInst.get();
        setxD1(number1);
    }, [])

    return (
        <div>
            <div>{xd}</div>
            <div>{xd1}</div>
        </div>
    )
}