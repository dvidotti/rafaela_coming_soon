import "./Portrait.css";

export default function Portrait({ offset }) {
    return (
        <div
            className=" portrait-container"
            style={{ top: `${13 - offset * 0.028}vw` }}
        >
            <img
                className="image-about"
                src="images/rafa_pic.png"
                alt="Rafaela Portrait"
            />
        </div>
    );
}
