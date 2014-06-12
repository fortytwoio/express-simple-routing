/*
 GET     /          ->  actions.index
 GET     /new       ->  actions.new
 POST    /          ->  actions.create
 GET     /:Id       ->  actions.show
 GET     /:Id/edit  ->  actions.edit
 PUT     /:Id       ->  actions.update
 DELETE  /:Id       ->  actions.destroy
 */

var express = require("express");

module.exports = function expressSimpleRouting(actions) {
    var router = express.Router();
    if (actions.index && typeof actions.index === "function") {
        router.get("/", actions.index);
    }

    if (actions.new && typeof actions.new === "function") {
        router.get("/new", actions.new);
    }

    if (actions.create && typeof actions.create === "function") {
        router.post("/", actions.create);
    }

    if (actions.show && typeof actions.show === "function") {
        router.get("/:id", actions.show);
    }

    if (actions.edit && typeof actions.edit === "function") {
        router.get("/:id/edit", actions.edit);
    }

    if (actions.update && typeof actions.update === "function") {
        router.put("/:id", actions.update);
    }

    if (actions.destroy && typeof actions.destroy === "function") {
        router.delete("/:id", actions.destroy);
    }

    return router;
}
