function setResults(){
	var results = sdk.component('results', '.inbenta-search-wrapper', {
  		resultsPerPage: 5,
  		attributes: ['ABSTRACT', 'URL']
	});
	results.setQuery('sample');
}

function insertParentTab() {
	if (document.getElementsByClassName("inbenta-search-tabs")[0]) {
		var el = document.createElement("span");
		el.innerHTML = '<div class="inbenta-search-tabs-custom"><ul class="inbenta-search-tabs__bar-custom" style="background:;"><li class="inbenta-search-tabs__item-custom inbenta-search-tabs__item-custom--active "><a href="#" class="inbenta-search-tabs__item__link-custom"><span>All</span></a></li><li class="inbenta-search-tabs__item-custom inbenta-search-tabs__item-custom"><a href="#" class="inbenta-search-tabs__item__link-custom"><span>Connectwise Control</span></a></li><li>class="inbenta-search-tabs__item-custom inbenta-search-tabs__item-custom"><a href="#" class="inbenta-search-tabs__item__link-custom"><span>Connectwise Manage</span></a></li><li class="inbenta-search-tabs__item-custom inbenta-search-tabs__item-custom-custom"><a href="#" class="inbenta-search-tabs__item__link-custom"><span>Connectwise Sell</span></a></li><li class="inbenta-search-tabs__item-custom inbenta-search-tabs__item-custom"><a href="#" class="inbenta-search-tabs__item__link-custom"><span>Connectwise Control</span></a></li></ul></div>';
  		var div = document.getElementsByClassName("inbenta-search-tabs")[0];
  		var parent = div.parentNode;
  		parent.insertBefore(el, div);
	} else {
    	setTimeout(insertParentTab, 15);
  }
}
function insertStatsAbove() {
	if (document.getElementsByClassName("inbenta-search-stats")[0]) {
  		var div = document.getElementsByClassName("inbenta-search-search-box")[0];
  		var stats = document.getElementsByClassName("inbenta-search-stats")[0];
  		var parent = div.parentNode;
		parent.insertBefore(stats, div);
	} else {
    	setTimeout(insertStatsAbove, 15);
  }
}

window.onload = function() {
	// Create the SDK instance using your access token and configuration.
  var sdk = InbentaSearchSDK.createFromToken(bearerToken,apiKey,sdkGeneralConfig);
  sdk.build('#inbResults', buildConfig);
  insertParentTab();
  insertStatsAbove();
  getProductSelected();
};

function getProductSelected(){
  	if (document.getElementsByClassName("inbenta-search-tabs__item-custom")[0]) {
  		for(var i=0;i<document.getElementsByClassName("inbenta-search-tabs__item__link-custom").length;i++){
			var product_tab = document.getElementsByClassName("inbenta-search-tabs__item__link-custom")[i];
			product_tab.addEventListener('click', function (e) {
				var previous_product_tab = document.getElementsByClassName("inbenta-search-tabs__item-custom--active")[0];
				previous_product_tab.classList.remove('inbenta-search-tabs__item-custom--active');
				this.classList.add('inbenta-search-tabs__item-custom--active');
				setResults();
			}, false);
		}
	} else {
    	setTimeout(getProductSelected, 15);
    }
}
