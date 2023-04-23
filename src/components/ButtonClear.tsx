

export default function ButtonClear({
    handleClear,
}: {
    handleClear: Function;
}) {
    return (
        <button
            type="button"
            className="btn-action"
            id="clear"
            onClick={() => handleClear()}
        >
            C
        </button>
    );
}
