import { WindowSizeProvider } from "./WindowSize.context";

export default function Context({ children }) {
    return <WindowSizeProvider>{children}</WindowSizeProvider>;
}
