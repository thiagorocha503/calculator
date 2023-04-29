
type ButtonToggleProp = {
   onClick: Function
};
export default function ButtonToggle({
    onClick
}: ButtonToggleProp) {
    
    return (
        <button
            type="button"
            className="btn-action"
            id=""
            onClick={()=>onClick()}
        >
            ±
        </button>
    );
}
