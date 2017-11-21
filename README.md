# ise-search-sdk
Example of use of the **Inbenta Search SDK**, and **JavaScript Client** (soon). 
* ise-search-sdk.html - Empty page with the calls to the Inbenta Chatbot SDK and the below css/js files.
* * Simple page with only the SDK, JQuery, and a div with id="inbenta" on it.
* ise-search-sdk.js - JavaScript that defines the configuration of the chatbot and launches the methods to build it on the page.
* * See config breakdown below
* ise-search-sdk.css - CSS that overrides the Inbenta template with custom styling. So far:
* * Empty
* ise-search-sdk-CustomMethods.js - Custom methods for added functionality. So far:
* * Empty
Soon to include JS-Client examples for more customized functionalities.

For a chatbot SDK example, please see **[This Repositoty](https://jalcantarab.github.io/isa-bot-sdk/)**

**NEVER EXPOSE YOUR CLIENT SECRET IN A LIVE SITE**

# Search SDK Example - Custom initialization
Simple example of a functioning Search SDK User Interface 
This example is meant to show how to: 
* Customize configuration of the SDK build, 
* Modify the template labels, 
* Customize some CSS to fit your branding,
* How to use the /auth API method to retrieve the API Token **Use server-side when publishing an interface**
* Create custom JS methods that interact with the Search


# # Configuration Explained

# # Set-up
Either: 
* Open the HTML in a localhost, store the JS/CSS in the same folder.
* Copy the call to the SDK from the HTML to your page's HTML and the JavaScript
  `<script type="text/javascript" src="https://sdk.inbenta.io/chatbot/1/inbenta-search-sdk.js"></script>`
   add the contents of the JavaScript file `ise-search-sdk.js` inside the HTML (inside `<script>` tags), and add the contents of the CSS file `ise-search-sdk.css` inside the HTML (inside `<style>` tags) 
   
## Usage
Replace the Secret <inbenta-secret> and API key <inbenta-key> with a method that retrieves the values server-side.
For development, you can replace the values with your credentials. 

If you don't have your API Secret and Key, contact you account manager. 

## Contributing 
If you have useful new methods, webhooks, or better ways of doing what this sample does, please feel free to...

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

# But,... I don't any content yet
Do not fear, content digest is here. 
Contact your Account Manager to inquire about creating an instance or adding sources to it. 

See [This Gist](https://gist.github.com/jalcantarab/af3ae1fbaa5b1b5f299160122bf3ac41) the format of an standard JSON feed.

## History
v0.1.1 First functioning version of Search SDK UI
v0.1.2 First version of documentation updated

