const setDocumentTitle = function(title) {
    document.title = title;
    const ua = navigator.userAgent;
    if (/\bMicroMessenger\/([\d.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        const i = document.createElement("iframe");
        i.src = "/favicon.ico";
        i.style.display = "none";
        i.onload = function() {
            setTimeout(function() {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
};

const setTitle = {
    inserted: function(el, binding) {
        setDocumentTitle(binding.value);
    }
};

export default setTitle;
