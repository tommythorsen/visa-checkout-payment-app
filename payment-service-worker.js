self.addEventListener('activate', function(event) {
    console.log("Activated");
});

self.addEventListener('fetch', function(event) {
    console.log("Handling fetch event");
});

self.addEventListener('message', function(event) {
    console.log("Got message: " + event);
});
