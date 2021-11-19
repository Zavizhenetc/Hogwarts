module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/hogwarts/'
        : '/'
}
"scripts": {
    "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "deploy": "sh deploy.sh"
},