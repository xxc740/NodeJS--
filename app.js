var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('hello word on port ' + port)

//index page
app.get('/',function(req,res){
  res.render('index',{
    title:'电影商城首页',
    movies:{
      title:'机械战警',
      _id:1,
      poster:'http://www.baidu.com'
    }
  })
})

//detail page
app.get('/movie/:id',function(req,res){
  res.render('detail',{
    title:'电影详情页',
    movie:{
      doctor:'XXX',
      country:'china',
      title:'机械战警',
      year:2015,
      poster:'http://www.baidu.com',
      language:'英语',
      flash:'http://v.youku.com/v_show/id_XMTQwNjk5OTE5Mg==.html?f=21733262&ev=7&from=y1.3-idx-uhome-1519-20887.205985-205986-205830-205987.2-3',
      summary:'XXXXXXXXXXXXXXXXXXXXXX'
    }
  })
})

//admin page
app.get('/admin/movie',function(req,res){
  res.render('admin',{
    title:'电影后台管理页',
    movie:{
      title:'',
      doctor:'',
      country:'',
      year:'',
      poster:'',
      flash:'',
      summary:'',
      language:''
    }
  })
})

//list page
app.get('/admin/list',function(req,res){
  res.render('list',{
    title:'电影列表页',
    movies:[{
      title:'机械战警',
      _id:1,
      doctor:'XXX',
      country:'china',
      year:2015,
      poster:'http://www.baidu.com',
      language:'英语',
      flash:'http://v.youku.com/v_show/id_XMTQwNjk5OTE5Mg==.html?f=21733262&ev=7&from=y1.3-idx-uhome-1519-20887.205985-205986-205830-205987.2-3',
      summary:'XXXXXXXXXXXXXXXXXXXXXX'
    }]
  })
})