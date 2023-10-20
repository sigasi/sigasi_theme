(function () {
    // Don't unhide cookie banner if DNT or Sec-GPC is on
    if (
      navigator.doNotTrack == "yes" ||
      navigator.doNotTrack == "1" ||
      navigator.msDoNotTrack == "1" ||
      navigator.globalPrivacyControl == "1"
    ) {
      return;
    }

    // Unhide cookie banner cookies are allowed
    if (document.cookie.indexOf("viewed_cookie_policy=yes") === -1) {
        document.getElementById("cookie_consent").classList.remove("uk-hidden");
        document.getElementById("close_cookie_consent").onclick = function () {
            const now = new Date()
            const expiry = new Date(now.getFullYear() + 2, now.getMonth(), now.getDay())
            document.getElementById("cookie_consent").classList.add("uk-hidden");
            document.cookie = "viewed_cookie_policy=yes; expires="+ expiry.toUTCString() +"; path=/";
        };
    }
})();