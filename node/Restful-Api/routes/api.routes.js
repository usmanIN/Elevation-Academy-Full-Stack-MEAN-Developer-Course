const router = require("express").Router();


router.get("/", (request, response) =>{        
    const data = require("../database/content");        
    const menu = Array.from(new Set(data.map((item) => item.category.toLowerCase())));        
    const rnd = Math.floor(Math.random()* 30+10);
    response.send({
        menu:menu,
        data: data.slice(0,10)    
    });
});


router.get('/:category',(request,response) =>{
    const data = require("../database/content");    
    result = data.filter((item) => item.category.toLowerCase() === request.params.category);
    response.send({data:result});
});

router.get('/:category/:slug',(request,response) =>{
    const data = require("../database/content");    
    result = data.filter((item) => item.slug === request.params.slug);
    response.send({data:result});
});


module.exports = router;