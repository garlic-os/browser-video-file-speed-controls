(() => {
    const style = document.createElement("style");
    style.textContent = `
    .addons {
        width: 100vw;
        height: 3rem;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `;
    document.head.appendChild(style);

    const video = document.querySelector("video");

    const addonContainer = document.createElement("div");
    addonContainer.classList.add("addons");
    document.body.appendChild(addonContainer);

    const speedSetting = document.createElement("input");
    speedSetting.type = "number";
    speedSetting.value = 100;
    speedSetting.onchange = () => {
        video.playbackRate = speedSetting.value / 100;
    };
    addonContainer.appendChild(speedSetting);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.onclick = () => {
        speedSetting.value = 100;
        speedSetting.onchange();
    };
    addonContainer.appendChild(resetButton);
})();

