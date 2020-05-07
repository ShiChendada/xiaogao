window.onload = function(){
    var lun = document.getElementsByClassName('lun')[0];
    var tu = document.getElementsByClassName('tu')[0];
    var img = document.querySelector('img');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var index = 1;
    var m = true;
    var set;
    set = setInterval(below,2000);
    lun.onmouseover = function(){
        clearInterval(set);
    }
    lun.onmouseout = function(){
        set = setInterval(below,2000);
    }
    console.log(index);

    right.addEventListener('click',function(){
        if(m){
            m = false;
            setTimeout(function(){
                m = true
            },820);
            below();
        }
        
    })
    left.addEventListener('click',function(){
        if(m){
            m = false;
            setTimeout(function(){
                m = true
            },820);
            up();
        }
    })
    function below(){
        index++;
        tu.style.transition = 'all .8s';
        tu.style.transform = 'translateX('+index * -666+'px)';
    }
    function up(){
        index--;
        tu.style.transition = 'all .8s';
        tu.style.transform = 'translateX('+index * -666+'px)';
    }
    tu.addEventListener('transitionend',function(){
        if(index > 3){
            index = 1;
            tu.style.transition = 'none';
            tu.style.transform = 'translateX(-666px)';
        }else if(index < 1){
            index = 3;
            tu.style.transition = 'none';
            tu.style.transform = 'translateX('+index * -666+'px)';
        }
    })

    var shijian = document.getElementsByClassName('shijian')[0];
    var height = shijian.offsetHeight;
    var lan = document.getElementsByClassName('laN')[0];
    let offset = 0;
    var lin = document.getElementsByClassName('lin')[0];
    let currentTime = 1;
    var jiantou = document.getElementsByClassName('jiantou')[0];
    var timer = setInterval(function(){
        offset ++;
        if(offset >=height ){
            offset = 0
            currentTime++
        }
     
        lan.style.height = offset + 'px';
        // console.log((height / offset).toFixed(0))
        if(currentTime > 9) currentTime = 1;
        lin.innerHTML = `0${currentTime}`

    },30)

    jiantou.addEventListener('click',function(){
        offset = 0;
        currentTime++;
    })

    // var time = setInterval(function(){
    //     currentTime ++;
        
    //     if(currentTime > 9 )currentTime = 1;
    //     lin.innerHTML = `0${currentTime}`
    // },3900)
    

    var fanhui = document.getElementById('fanhui');
    var xiaoyi = true;
    var titi;
    //获取页面可视高度
    var clienHeight = document.documentElement.clientHeight;
    console.log(clienHeight);
    window.onscroll = function(){
        //获取html文档和body滚动条的位置兼容其他浏览器
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //显示回到顶部
        if (osTop >= 1) {
            fanhui.style.opacity = '1';
        } else {
            fanhui.style.opacity = '0';
        }
        //回到顶部过程中用户滚动滚动条,停止定时器
        if(!xiaoyi){
            clearInterval(titi);
        };
        xiaoyi = false;
    }
    fanhui.addEventListener('click',function(){
        titi = setInterval(() => {
            //获取滚动条距离顶部高度兼容其他浏览器
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var math = Math.floor(-osTop/10);
            console.log(osTop);
            document.documentElement.scrollTop = document.body.scrollTop = osTop+math;
            //到达顶部,清除定时器
            if(osTop == 0){
                clearInterval(titi);
            };
            xiaoyi = true;
        },30)
    })
}