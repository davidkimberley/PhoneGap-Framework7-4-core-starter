// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'com.caravan.f7play',
  root: '#app',
  theme: theme,
  routes: routes
});
var mainView = app.views.create('.view-main');
console.log('out');

app.init('about', function (page) {
    console.log('test preffered method');

})
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    app.dialog.alert('Here comes About page');
	console.log('about');
})
$$(document).on('page:init', function (e) {
    // Get page data from event data
    var page = e.detail;
	console.log(e.detail);

    if (page.name === 'about') {
        app.request.json('https://www.sa4x4.co.za/wp-json/wp/v2/posts?showposts=10', function (data) {
		  //console.log(data);
		  //$$('.block').html(data);
		  //console.log(typeof data);
		  var html = '';
		  data.forEach(function(v) {
			  console.log(v);
			  console.log(v.id);
			  html += '<div class="card demo-card-header-pic">' +
				'<a href="page.html" onclick="getPostID(' + v.id + ')">' +
				'<div style="background-image:url('+ v.images.large +')" valign="bottom" class="card-header color-white no-border"></div></a>' +
				'<div class="card-content">' +
				'<div class="card-content-inner">' +
				'<h2><a href="page.html" class="color-black" onclick="getPostID(' + v.id + ')">' + v.title.rendered + '</a></h2>' +
				'<a href="page.html" onclick="getPostID(' + v.id + ')" class="button button-raised button-fill color-caravan ripple-yellow link link">Read Article</a></div></div></div>';
		  });
		  $$(".block").html(html);
		  
			  
		  });
		  
		}
    
})