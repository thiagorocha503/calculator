type ButtonCancelEntryProps = {
    onClick: () => void
};
export default function ButtonCancelEntry({
    onClick,
}: ButtonCancelEntryProps) {
    return (
        <button
            className="btn-action"
            type="button"
            onClick={() => onClick()}
        >
            CE
        </button>
    );
}
