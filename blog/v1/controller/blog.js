const { awsConfig } = require("../../../config/jwtConfig");

const AWS = require("aws-sdk");

AWS.config.loadFromPath(awsConfig);

const s3bucket = new AWS.S3();

const User = require("../model/user");
const Blog = require("../model/blog");

const { Success } = require("../../../helpers/response/Success");
const {
  UnprocessabelEnitity,
  BadRequest,
} = require("../../../helpers/response/ClientErrors");
const blog = require("../model/blog");

module.exports.newBlog = async (req, res) => {
  const userId = req.userId;
  const blogData = ({ title, description } = req.body);
  const file = req.files;
  let ResponseData = [];
  file.map(async (item) => {
    var params = {
      Bucket: "test",
      Key: `${Date.now().toString()}.${item.originalname}`,
      Body: item.buffer,
      ACL: "public-read",
    };
    s3bucket.upload(params, async function (err, data) {
      if (err) {
        res.validationFailed("Error in Uploading");
      } else {
        ResponseData.push(data);
        if (ResponseData.length == file.length) {
          blogData.userId = userId;
          blogData.imageUrl = ResponseData[0].location;

          await Blog.create(blogData);
          Success(res, "Created");
        }
      }
    });
  });
};


module.exports.deleteBlog = async (req, res) => {
    await Blog.deleteOne({_id: req.body.blogId});
    return Success(res, "Deleted");
}

module.exports.getBlogList = async (req, res) => {

    let data = await Blog.find({}).skip(req.query.skip).limit(20);
    return Success(res, data);
}

module.exports.blogById = async (req, res) => {
    let data = await Blog.find({_id: req.params.id})
    return Success(res, data);
}

module.exports.blogByUserId = async (req, res) => {
    let data = await Blog.find({userId: req.params.userId})
    return Success(res, data);
}