import WordPressMangastream from './templates/WordPressMangastream.mjs';

export default class PecintaKomik extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'pecintakomik';
        super.label = 'PecintaKomik';
        this.tags = [ 'manga', 'indonesian' ];
        this.url = 'https://www.pecintakomik.net';
        this.path = '/daftar-manga/?list';

        this.queryChapters = 'div.bxcl ul li span.lchx a';
        this.queryPages = 'div#readerarea > :not(.kln) source[src]:not([src=""])';
    }
}