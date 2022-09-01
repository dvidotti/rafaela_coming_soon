import "./VideoOverlayClick.css";

export default function VideoOverlayClick({ fullScreen, handleFullScreen }) {
    return (
        <div
            onClick={() => handleFullScreen(true)}
            className={
                fullScreen
                    ? "video-overlay-container-full"
                    : "video-overlay-container home-media-box-mob"
            }
        >
            <img
                className="image-about"
                src="images/transparent_pic_overlay.png"
            />
        </div>
    );
}
