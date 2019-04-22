<h1>navigator-cordova-jqm<h1>

<h3>This will help you to manage your pages-history in the app.</h3>
<h3>With this navigator the user will experience perfect return pages like you want.</h3>

<h2>Install</h2>
<pre>
<code>npm i navigator-cordova-jqm</code>
</pre>

<h2>Running</h2>
<pre><code>import navigator_corJQM from "navigator-cordova-jqm";</code></pre>
 <h6>or</h6>
 <pre><code>const navigator_corJQM = require('navigator-cordova-jqm');</code></pre>
 <h5>*or add js file from <a href="https://github.com/orchoban/cordova-jqm-navigator">github</a> and link it in the html</h6>
<p></p>
<h2>Example</h2>
 <pre>
<div style="color: rgb(212, 212, 212);background-color: rgb(30, 30, 30);font-family: Consolas, &quot;Courier New&quot;, monospace;font-size: 14px;line-height: 19px;white-space: pre;" dir="ltr"><div><span style="color: rgb(156, 220, 254);">navigator_corJQM</span>.<span style="color: rgb(220, 220, 170);">constructor</span>({</div><div>    <span style="color: rgb(156, 220, 254);">listLevelPages:</span> {</div><div>        <span style="color: rgb(206, 145, 120);">"homePage"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">0</span>,</div><div>        <span style="color: rgb(206, 145, 120);">"newPost"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">3</span>,</div><div>        <span style="color: rgb(206, 145, 120);">"page_Shop"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">1</span>,</div><div>        <span style="color: rgb(206, 145, 120);">"page_Settings"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">2</span>,</div><div>        <span style="color: rgb(206, 145, 120);">"popupMap"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">9</span>,</div><div>        <span style="color: rgb(206, 145, 120);">"page_about"</span><span style="color: rgb(156, 220, 254);">:</span> <span style="color: rgb(181, 206, 168);">2</span></div><div>    }</div><div>    , <span style="color: rgb(156, 220, 254);">defaultPage:</span> <span style="color: rgb(206, 145, 120);">"homePage"</span></div><div>});</div></div>
</pre>

