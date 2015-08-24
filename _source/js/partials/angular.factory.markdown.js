function markdownFtry() {
    return function(data) {
        var converter = new showdown.Converter({
            noHeaderId: false,
            simplifiedAutoLink: true,
            tables: true
        }),
            text = data,
            html = converter.makeHtml(text);

        return html;
    }
}
