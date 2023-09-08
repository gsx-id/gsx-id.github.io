self.addEventListener("message", msg => {
    self.postMessage(msg.data);
})