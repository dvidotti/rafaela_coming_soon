export default function Stamp({ screen, offset, imageSrc }) {
    return (
        <>
            {screen === "mobile" ? (
                <>
                    <img
                        className={"face"}
                        src={`images/face0${imageSrc}_animation.svg`}
                    />
                    <img
                        className={"image-rotation"}
                        src="images/text+circle_animation.svg"
                    />
                </>
            ) : (
                <>
                    <img
                        style={{
                            bottom: `${-77 + (offset / 1) * 0.23}px`,
                        }}
                        className={"face"}
                        src={`images/face0${imageSrc}_animation.svg`}
                    />
                    <img
                        style={{
                            bottom: `${-110 + (offset / 1) * 0.23}px`,
                        }}
                        className={"image-rotation"}
                        src="images/text+circle_animation.svg"
                    />
                </>
            )}
        </>
    );
}
