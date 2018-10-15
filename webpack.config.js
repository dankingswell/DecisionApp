// webpack config
// entry point && output

// must restart after every change


//node js path maker
const path = require("path")

//__dirname will locate current file
module.exports = {
    entry:"./src/app.js",
    output:{
        // absoulte path in machine to output file
        // need to get into public/folder
        path:path.join(__dirname,"public"),
        filename:"bundle.js"
    },
    "mode":"development",
    module:{
        // implement rules such as converting jsx through babel
        // array of objects
        rules:[{
            loader:'babel-loader',
            // regex to only use js files
            test: /\.js$/,
            // stop babel running through node_modules folder
            exclude: /node_modules/
        },
        {   
            test:/\.s?css$/,
            // run both loaders, use allows array of loaders
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    //source mapping to find error's,
    // points to correct line/file
    // when error is thrown
    devtool:"cheap-module-eval-source-map",

    //dev server, fast loaading react server
    devServer:{
        contentBase:path.join(__dirname,"public")
    }
};