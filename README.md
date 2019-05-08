webpack-ssg
===========

An experiment to use webpack as a static site generator

Ideas to test out:

- [x] `.md` to `.html` for a single entry
- [x] same, for multiple entries, with watch mode
- [ ] Linking to other `.md` files, compiling them to HTML and having the link `href` pointing in the right place
- [ ] Discovering CSS assets and compiling them
- [ ] Discovering JS assets and compiling them (check `import` and chunk splitting)
- [ ] Ignore export of `.js` file for `.md` entries
- [x] Set a common layout for `.md` entries
- [ ] Set layout per file through a frontmatter (see: https://github.com/webpack/webpack/blob/a67ffcda1c6ffe0a08a34d3b944fec0db38ad57a/lib/NormalModule.js#L221)
- [ ] Add site wide metadata that can be used in layout and/or `.md` files
- [ ] Add support for multilingual pages
- [ ] Add support for handling HTML or Pug content
- [ ] Add support for image + layout
- [ ] Add support for data + layout
- [ ] Add support for custom components
- [ ] Add support for indexing pages (taxonomies, sitemaps...)
