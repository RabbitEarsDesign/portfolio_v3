let links = document.querySelectorAll("a");
if (links) {
  links.forEach((link) => {
    link.onclick = (e) => {
      let body = document.querySelector("body");
      e.preventDefault();
      // if closing the card then don't execute transition
      if (link.classList.contains("card-close")) {
        console.log("Do not navigate");
        return;
      } else {
        // in asynch handler do these actions
        setTimeout(function () {
          if (body.classList.contains("clicked")) {
            console.log("navigating...");
            if (!e.target.parentElement.href) {
              window.location = e.target.href;
            } else {
              window.location = e.target.parentElement.href;
            }
          } else {
            console.group("oopsie", e.target.parentElement.href);
          }
        }, 1200);

        body.classList.add("clicked");
      }
    };
  });
}
