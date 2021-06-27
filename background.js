chrome.commands.onCommand.addListener(function (command) {
	if (command == "outline-link") {
		chrome.tabs.getSelected(null, function (tab) {
			const newUrl = "https://www.outline.com/" + tab.url
			chrome.tabs.update(tab.id, { url: newUrl });
		});
	}
});