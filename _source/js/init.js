angular
    .module('routerApp', ['ui.router','ngSanitize'])
    .config(config)
    .controller('mainCtrl', mainCtrl)
    .controller('pagesCtrl', pagesCtrl)
    .controller('articleCtrl', articleCtrl)
    .controller('articleChapterCtrl', articleChapterCtrl);