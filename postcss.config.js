module.exports = {
    plugins: {
        'postcss-nested': {},
        'autoprefixer': {},
        'postcss-custom-media':{
            importFrom: [
                {
                    customMedia: {'--xs': '(min-width:32rem)'}
                },
                {
                    customMedia: {'--sm': '(min-width:48rem)' }
                },
                {
                    customMedia: {'--md': '(min-width:64rem)'}
                },
                {
                    customMedia: {'--lg': '(min-width:80rem)'}
                },
                {
                    customMedia: {'--xl': '(min-width:90rem)'}
                }
            ]
        }
    }
}