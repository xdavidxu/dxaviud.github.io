const scrollers = document.getElementsByClassName("loopback-scroller");
for (const scroller of scrollers) {
    let n = scroller.children.length;
    const buffer =
        parseInt(scroller.getAttribute("scroller-buffer"), 10) || 100;

    scroller.scrollTo(0, (scroller.scrollHeight - scroller.clientHeight) / 2);

    for (let i = 0; i < n; ++i) {
        const clone = scroller.children[i].cloneNode(true);
        scroller.appendChild(clone);
    }
    if (n === 1) {
        // clone two extras if only 1 child, otherwise loopback won't work
        scroller.appendChild(scroller.children[0].cloneNode(true));
        scroller.appendChild(scroller.children[0].cloneNode(true));
        n = 2; // pretend there was originally 2 children
    }

    scroller.addEventListener("scroll", () => {
        if (
            scroller.scrollTop >=
            scroller.scrollHeight - scroller.clientHeight - buffer
        ) {
            for (let i = 0; i < n - 1; ++i) {
                const first = scroller.children[0];
                scroller.removeChild(first);
                scroller.appendChild(first);
            }
        }
        if (scroller.scrollTop <= buffer) {
            for (let i = 0; i < n - 1; ++i) {
                const last = scroller.children[2 * n - 1];
                scroller.removeChild(last);
                scroller.prepend(last);
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
