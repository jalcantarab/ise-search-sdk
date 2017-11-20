var buildConfig = {
	searchBox: {
		autofocus: true,
	},
	stats: {
		text: 'Search Results for &lsquo;{{ query }}&rsquo; ({{ totalResults }} results found)',
	},
	results: {
		resultsPerPage: 10,
		attributes: ['BEST_DYNABS'],
	},
	refinementLists: [
		{ attributeName: 'FEED_TYPE', headerText: 'Feed Type' },
	],
	refinementTabs: {
		attributeName: 'TYPE',
		showFacetCount: true,
	}};
var customLabels = {
	REFINEMENT_TABS_ALL_TAB: 'All Types',
};
var sdkConfig = {
	userType:0,
	environment:'development',
	skins:'none'
};

window.onload = function() {
  /*
   * Authenticates the SDK build by passing it as a callback
   * This authentication mechanism is for TESTS ONLY.
   * A Production environment should authenticate server-side
  */
  authenticateCall(initSearchSDK);
  // x-inbenta-token, x-inbenta-key added to document.cookies
};


function initSearchSDK(inbenta_token, inbenta_key) {
  // Create the SDK instance using your access token and configuration.
  var sdk = InbentaSearchSDK.createFromAccessToken(inbenta_token, inbenta_key,sdkConfig);
  sdk.build('#inbenta', buildConfig);
}
/* @func authenticateCall
* @desc Authenticates the function passed as callback
* @params {String} inbenta_key
* @params {String} inbenta_secret}
*/
function authenticateCall(callback) {
  var inbenta_token, token_expiration = "";
  // Before a live deployment, move the authentication server-side
  // inbenta_secret server-side
  // Credentials should not be visible in a front other
  // than during initial development
  var inbenta_secret = getSecret().secret;
  var inbenta_key = getSecret().apiKey;
  // Include the secret on the payload
  var data = {"secret":inbenta_secret};
  var xhr = new XMLHttpRequest();

  setCookie("x-inbenta-key",inbenta_key);

  xhr.open("POST", "https://api.inbenta.io/v1/auth");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-inbenta-key", inbenta_key);

  xhr.onreadystatechange = function() {       //Call a function when the state changes.
  if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    // If POST to /auth successful, then get the token and its expiration value
    var token_expiration = JSON.stringify(JSON.parse(xhr.responseText).expiration);
    var inbenta_token = JSON.stringify(JSON.parse(xhr.responseText).accessToken);
    // Store the token in a Browser Cookie
    setCookie("x-inbenta-token",inbenta_token,token_expiration);
    // Run the function defined in the arguments
    callback(inbenta_token, inbenta_key);
    return;
  }};
  xhr.send(JSON.stringify(data));
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length).replace(/^"(.*)"$/, '$1');
        }
    }
    return "";
}

/* GET /apis
* Returns API endpoints.
* input: {inbenta_key, bearerToken}
* output: data{search, km, chatbot, ticketing}}
*/
///////////

/*
function getQuery(){
	var query, element = document.getElementById('search');

	if (element != null) {
	console.log(document.getElementById('search').value);
	query = document.getElementById('search').value;
	sdk.results.setQuery(query);
	}
	else {
    	query = null;
    	console.log('search element not found');
	}
}

function ensureEventsAdded() {
	if (document.getElementsByClassName("inbenta-search-search-box")[0]) {
		var form = document.querySelector('form.inbenta-search-search-box');
		form.addEventListener('submit', function (e) {
			insertParentTab();
			insertStatsAbove();
		}, false);
	} else {
    	setTimeout(ensureEventsAdded, 15);
    }
}

/*
var query, element = document.getElementById('search');

if (element != null) {
console.log(document.getElementById('search').value);
query = document.getElementById('search').value;
sdk.results.setQuery(query);
}
else {
    query = null;
    console.log('search element not found');
}
sdk.untilReady().then( function (response) {
	// Create a search box.
    sdk.searchBox('#search-form', {
      autofocus: true
    });

    // Create a refinement list.
    sdk.refinementList('#color-refinement', {
      attributeName: 'color',
      headerText: 'Color',
      limit: 10
    });

    // Create results.
    sdk.results('#results', {
      resultsPerPage: 5,
      attributes: [
        'Type',
        'Paragraph'
      ]
    });
});*/
