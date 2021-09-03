const scrollers = document.getElementsByClassName("loopback-scroller");
for (const scroller of scrollers) {
    const n = scroller.children.length;
    const buffer =
        parseInt(scroller.getAttribute("scroller-buffer"), 10) || 100;

    for (let i = 0; i < n; ++i) {
        const clone = scroller.children[i].cloneNode(true);
        scroller.appendChild(clone);
    }

    scroller.addEventListener("scroll", () => {
        if (
            scroller.scrollTop >=
            scroller.scrollHeight - scroller.clientHeight - buffer
        ) {
            for (let i = 0; i < n; ++i) {
                const first = scroller.children[0];
                scroller.removeChild(first);
                scroller.appendChild(first);
            }
        }
    });
    console.log("Loopback scroller initialized with buffer size " + buffer);
}

// const linksWrapper = document.querySelector("#links-wrapper");
// const n = linksWrapper.children.length;
// const buffer = 100;

// for (let i = 0; i < n; ++i) {
//     const clone = linksWrapper.children[i].cloneNode(true);
//     linksWrapper.appendChild(clone);
// }

// linksWrapper.addEventListener("scroll", () => {
//     if (
//         linksWrapper.scrollTop >=
//         linksWrapper.scrollHeight - linksWrapper.clientHeight - buffer
//     ) {
//         for (let i = 0; i < n; ++i) {
//             const first = linksWrapper.children[0];
//             linksWrapper.removeChild(first);
//             linksWrapper.appendChild(first);
//         }
//     }
// });
