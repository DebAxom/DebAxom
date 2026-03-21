import { Render } from "nijor/core";
import { autoTheme } from "nijor/theme";
import "nijor/router";

//@Routes()

autoTheme();
(async () => await Render(document.getElementById('app')))();

window.scrollToId = id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}