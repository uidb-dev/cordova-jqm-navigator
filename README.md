<h1>navigator-cordova-jqm<h1>

<h3>This will help you to manage your pages-history in the app.
  With this navigator the user will experience perfect return pages like you want.</h3>

<h2>Running</h2>
<pre>
<code>npm i navigator-cordova-jqm</code>
</pre>

<h2>Example</h2>
<pre><code>import navigator_corJQM from "navigator-cordova-jqm";</code></pre>
 <h6>or</h6>
 <pre><code>const navigator_corJQM = require('navigator-cordova-jqm');</code></pre>
 <h5>*or add js file from <a href="https://github.com/orchoban/cordova-jqm-navigator">github</a> and link it in the html</h6>
<p></p>
 <pre>
 <p>
 navigator_corJQM.constructor({
    listLevelPages: {
        "homePage": 0,
        "newPost": 3,
        "page_Shop": 1,
        "page_Settings": 2,
        "popupMap": 9,
        "page_about": 2
     }
     , defaultPage: "homePage"
 });
</p>
</pre>

