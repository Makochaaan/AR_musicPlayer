const express = require('express');
const router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage(); 
var upload = multer({ storage: storage });
const generate_NFT = require('../public/js/generate_NFT.js');

var data = {}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARMusicPlayer', file: false});
});

router.post('/', upload.single('file'), function(req,res,next) {
  console.log(req.file.originalname);

  const promise = Promise.resolve(generate_NFT.makeID(req.file.buffer, req.file.mimetype.split('/')[1], req.file.originalname.split('.')[0]));
  promise.then((files) =>{
    data = {
      "isetName" : `${files[0][0]}`,
      "isetData" : `${files[0][1]}`,
      "fsetName" : `${files[1][0]}`,
      "fsetData" : `${files[1][1]}`,
      "fset3Name": `${files[2][0]}`,
      "fset3Data": `${files[2][1]}`
    }

    console.log(data);
    // console.log(files);
    res.render('index', {file: data});
  });
  

});

router.get('/camera', function(req, res, next) {
  res.render('camera');
});

// router.post('/camera',function(req,res,next){
//   console.log(req.file);
// });


module.exports = router;
