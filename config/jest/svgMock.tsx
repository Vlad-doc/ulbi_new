import React from "react";

const SvgrMock = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>((props, ref) => (
    <div ref={ref} {...props} />
));
SvgrMock.displayName = "SvgrMock";

export const ReactComponent = SvgrMock; // Для SVG, импортируемых как React-компоненты
export default "svg"; // Для SVG, импортируемых как строки