type ButtonCancelEntryProps = {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
};
export default function ButtonCancelEntry({
    setDisplay,
}: ButtonCancelEntryProps) {
    return (
        <button
            className="btn-action"
            type="button"
            onClick={() => setDisplay("0")}
        >
            CE
        </button>
    );
}
