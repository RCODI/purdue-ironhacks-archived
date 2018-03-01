"use strict";

// Set the right MongoDB URI (depending on the environment).
const DB_URI = process.env.DB_URI
if (!DB_URI) {
    Bloggify.log(new Error(">>>> Please provide the MongoDB URI. Set the DB_URI environment variable."));
}

module.exports = {
    title: "IronHacks",
    description: "Hack for inovation and join the open data movement.",
    domain: process.env.DOMAIN || "http://www.ironhacks.com",
    core_plugins: [
        ["github-login", {
            githubClient: process.env.GITHUB_CLIENT,
            githubSecret: process.env.GITHUB_SECRET,
        }]
    ],
    plugins: [
        ["sendgrid", {
            key: process.env.SENDGRID_KEY
        }]
    ],
    styles: [ "app/assets/stylesheets/index.css" ],
    bundles: {
        publicHomepage: {
            scripts: [ "app/assets/javascripts/homepage/index.js" ],
            styles: [ "app/assets/stylesheets/homepage/index.css" ]
        },
        editor: {
            styles: [ "app/assets/stylesheets/editor/index.css" ]
        },
        auth: {
            scripts: [ "app/assets/javascripts/private-router.js" ],
            styles: [ "app/assets/stylesheets/auth.css" ]
        },
        notAuth: {
            scripts: [ "app/assets/javascripts/public-router.js" ]
        },
        main: {
            scripts: [ "app/assets/javascripts/common-router.js" ]
        }
    }
};
