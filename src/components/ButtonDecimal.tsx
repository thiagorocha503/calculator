import React from "react";
type ButtonDecimalProps = {
   onClick: Function;
};
export default function ButtonDecimal({
   onClick
}: ButtonDecimalProps) {
    
    return (
        <button
            type="button"
            className="btn-digit btn-1"
            id="decimal"
            onClick={()=>onClick()}
        >
            .
        </button>
    );
}
