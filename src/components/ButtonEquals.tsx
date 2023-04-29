
type ButtonEqualsProp = {
    onClick: () => void;
};
export default function ButtonEquals({ onClick }: ButtonEqualsProp) {
    return (
        <button
            type="button"
            className="btn-operator"
            id="equals"
            value="="
            onClick={() => onClick()}
        >
            =
        </button>
    );
}
