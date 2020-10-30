// Write your javascript here...
// ES6 will be compiled with Webpack
import netlifyIdentity from 'netlify-identity-widget';

if (netlifyIdentity) {
    console.log("👍 netlifyIdentity available");
    netlifyIdentity.init({
        locale: 'en' // defaults to 'en'
    });

    const user = netlifyIdentity.currentUser();

    console.log(user);
};
