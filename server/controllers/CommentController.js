const CommentModel = require("../models/CommentModel");
// .get comments
module.exports.list = (req, res) => {
   CommentModel.find({}).exec().then(comments => {
      return res.json(comments);
   }) 
}

// .get comment by ID
module.exports.show = (req, res) => {
   let comment = comments.find((comment) => comment._id == req.params.id);
   return res.json(comment);
}

// .post new comment
module.exports.create = (req, res) => {
   // instantiating new instance of CommentModel class
   // using req.body data to fill in values for vehcile schema
   const comment = new CommentModel(req.body);
   // add new comment to comments array
   comment.save();
   // return array with added comment
   return res.json(comments);
}

// .put comment by ID
module.exports.update = (req, res) => {
   CommentModel.findById(request.params.id).then((err, comment) => {
      if (err) return handleError(err);

      comment.body = "blah blah blah";
      comment.save((err, updComment) => {
         if (err) return handleError(err);
         res.send(updComment);
      })
   })
}
// .delete contact by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}