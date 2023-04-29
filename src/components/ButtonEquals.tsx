type ButtonEqualsProp = {
    onClick: () => void;
    preventDefault: (e:React.KeyboardEvent)=>void;
};
export default function ButtonEquals({ onClick, preventDefault }: ButtonEqualsProp) {
    return (
        <button
            type="button"
            className="btn-operator"
            id="equals"
            value="="
            onClick={() => onClick()}
            onKeyDown={(e) => preventDefault(e)}
            onKeyUp={(e) => preventDefault(e)}
        >
            =
        </button>
    );
}
