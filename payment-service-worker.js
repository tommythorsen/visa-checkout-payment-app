self.addEventListener('activate', function(event) {
    console.log("Activated");
});

self.addEventListener('fetch', function(event) {
    console.log("Handling fetch event: " + event.request.method + " " + event.request.url);
    // TODO: Extract Payment Requests from POSTs and store them so that the
    // web page can retrieve them later.
});

self.addEventListener('message', function(event) {
    console.log("Got message: " + event);
    // Post a dummy payment request. This does not attempt to look anything
    // like a proper webpayments request, it's just a placeholder.
    event.ports[0].postMessage({
        currencyCode: "NOK",
        total: "100.0"
    });
});
