import React from "react";

export interface ButtonCompProps{
    label: string;
    btnfun: ()=>void;
    className?: string;
}

const ButtonComp: React.FC<ButtonCompProps> = ({label, btnfun, className}) =>{

    return(
        <div>
            <button onClick={btnfun} className={className}>{label}</button>
        </div>
    )
}

export default ButtonComp