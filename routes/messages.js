const { Router } = require("express");

module.exports = function(messages) {
    const messageRouter = Router();

    // GET /new → show form
    messageRouter.get("/", (req, res) => {
        res.render('form', { title: 'New Message' });
    });

    // POST /new → handle form submission
    messageRouter.post("/", (req, res) => {
        const authorName = req.body.authorname;
        const messageText = req.body.message; // ✅ Fixed variable name

        if (authorName && messageText) {
            messages.push({
                user: authorName,
                text: messageText,
                added: new Date()
            });
        }

        res.redirect('/'); // Back to home
    });

    return messageRouter;
};
