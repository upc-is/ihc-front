$.get("_header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});
$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});


