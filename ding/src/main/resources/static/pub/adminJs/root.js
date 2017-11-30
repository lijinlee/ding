var router = Router({
    '/': {
        on: function (who) {
            var auth=JSON.parse(cookie.get("auth"));
            var authMap={}
            for(var i in auth){
                authMap[auth[i].url]=auth[i].url
            }
            $('*[permission]').each(function(index){
                var arr=$(this).attr("permission").split(",");
                for(var j in arr){
                    if(!authMap[arr[j]]){
                        $(this).hide();
                    }
                }

            });
        },
        before: function (id) {
            if(!cookie.get("token")){
                window.location = "/login.html"
                return false;
            }else{
                return true;
            }
        }
    }
});
router.init("/");