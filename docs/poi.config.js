module.exports = {
    webpack(config) {
        config.module.rules.push({
           test: '/.md$/',
           loaders: [
               'markdown-loader',
               'html-loader'
           ]
       })

        return config;
    },
    html: {
        template: 'index.html',
    },
};
