export default function Instruction(props) {
    const { text } = props;
    return (
        <div className="instruction">
            <p>{text}</p>
        </div>
    );
}
