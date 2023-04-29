type ButtonToggleProp = {
    onClick: Function;
    onKeyEvent: (e:React.KeyboardEvent)=> void;
};
export default function ButtonToggle({ onClick, onKeyEvent: preventDefault }: ButtonToggleProp) {
    return (
        <button
            type="button"
            className="btn-action"
            id=""
            onClick={() => onClick()}
            onKeyDown={(e) => preventDefault(e)}
            onKeyUp={(e) => preventDefault(e)}
        >
            ±
        </button>
    );
}
