define(function (require, exports, module) {
    module.exports = {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "rules": {
        }
    }

});

/* error: module is not defined
    module.exports = {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "rules": {
        }
    } */
