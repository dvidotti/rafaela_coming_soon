import "./VideoBox.css";

export default function VideoBox({ fullScreen, handleFullScreen }) {
    return (
        <div
            onClick={() => handleFullScreen(false)}
            className={
                fullScreen
                    ? "video-container-full"
                    : "video-container home-media-box-mob"
            }
        >
            <img
                className="image-about"
                src="images/video_photo.png"
                alt="Rafaela Portrait"
            />
            {fullScreen && (
                <div
                    style={{
                        position: "absolute",
                        top: 10,
                        right: -90,
                        width: "100px",
                        fontSize: "43px",
                        color: "gray",
                    }}
                >
                    X
                </div>
            )}
        </div>
    );
}
