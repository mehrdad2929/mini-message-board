const db = require("../db/queries");
const { validationResult } = require("../middleware/validation");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', { title: 'Mini Message Board', messages: messages });
}

async function createMessagesGet(req, res) {
    res.render("new", { title: 'Add new message' });
}

async function createMessagesPost(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).render('new', {
            title: 'Add new message',
            errors: errors.array(),
            formData: req.body
        });
    }

    const { username, text } = req.body;
    await db.insertMessage(text, username);
    res.redirect("/");
}

module.exports = {
    getMessages,
    createMessagesGet,
    createMessagesPost
};
