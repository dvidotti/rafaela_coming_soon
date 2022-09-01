import "./ListWithTitle.css";

type BlockItem = {
    [field: string]: string[];
};

interface Props {
    block: BlockItem;
}

const ListWithTitle = ({ block }: Props) => {
    const key = Object.keys(block)[0];

    return (
        <div className="list">
            <div className="border-top-bottom">{key}</div>
            <div className="list-container">
                {block[key].map((i) => (
                    <p className={"list-item"} key={i}>
                        {i}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ListWithTitle;
