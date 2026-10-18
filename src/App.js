import { Render } from "nijor/core";
import { autoTheme } from "nijor/theme";
import "nijor/router";

//@Routes()

autoTheme();
(async () => await Render(document.getElementById('app')))();

window.scrollToId = id => {
    const el = document.getElementById(id);
    if (!el) {
        window.nijor.redirect(`/#${id}`);
        setTimeout(() => {
            const target = document.getElementById(id);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return;
    }

    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}