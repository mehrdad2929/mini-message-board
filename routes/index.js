const { Router } = require("express");

module.exports = function(messages) {
    const indexRouter = Router();

    indexRouter.get("/", (req, res) => {
        res.render('index', { title: 'Mini Message Board', messages: messages });
    });

    return indexRouter;
};
