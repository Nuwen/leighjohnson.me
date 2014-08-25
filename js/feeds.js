google.load("feeds", "1");

function initialize() {

	var newPost = new google.feeds.Feed("http://blog.leighjohnson.me/atom.xml");

	newPost.load(function(result){
		if (!result.error) {
			var container = document.getElementById("posts");

			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];

				var title = document.createElement("h3");
				title.innerHTML = entry.title;
				var img = document.createElement("img");
				var url = document.cre
			}
		}
	})
}