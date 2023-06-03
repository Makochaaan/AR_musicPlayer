const express = require('express');
const router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage(); 
var upload = multer({ storage: storage });
const generate_NFT = require('../public/js/generate_NFT.js');

var files=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARMusicPlayer', files: "files"});
});

router.post('/', upload.single('file'), function(req,res,next) {
  console.log(req.file);

  promise = generate_NFT.makeID(req.file.buffer, req.file.mimetype.split('/')[1], req.file.filename, files);
  promise.then(function(value){
      files.push(value);
      console.log(files);
      res.render('index', {files: files});
  });

});


module.exports = router;
