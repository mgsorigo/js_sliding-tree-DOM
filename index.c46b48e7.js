var e=document.querySelector("ul");e.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t)}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.closest("li").querySelector("ul");t&&(t.style.display="none"===t.style.display?"":"none")}});
//# sourceMappingURL=index.c46b48e7.js.map