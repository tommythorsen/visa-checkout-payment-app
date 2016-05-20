self.addEventListener('activate', function(event) {
    console.log("Activated");
});

self.addEventListener('fetch', function(event) {
    console.log("Handling fetch event: " + event.request.url);
    console.log("BODY: " + event.request.formData());
});

self.addEventListener('message', function(event) {
    console.log("Got message: " + event);
});
