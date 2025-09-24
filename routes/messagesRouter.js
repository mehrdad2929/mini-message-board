const { Router } = require("express");
const messagesController = require("../controllers/messagesControllers");
const { validateMessage } = require("../middleware/validation");

const messagesRouter = Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.get("/new", messagesController.createMessagesGet);
messagesRouter.post("/new", validateMessage, messagesController.createMessagesPost);

module.exports = messagesRouter;
