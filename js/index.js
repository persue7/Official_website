window.addEventListener('load', function() {
    //右侧边栏电话
    var contact_phone = document.querySelector('.contact-phone')
    var phone = document.querySelector('.phone')
    contact_phone.addEventListener('mouseover', function() {
        phone.style.display = 'block'
    })
    contact_phone.addEventListener('mouseout', function() {
        phone.style.display = 'none'
    })
    phone.addEventListener('mouseover', function() {
        this.style.display = 'block'
    })
    phone.addEventListener('mouseout', function() {
        this.style.display = 'none'
    })

    //右侧边栏微信
    var wechat = document.querySelector('.wechat')
    var wechatimg = document.querySelector('.wechatimg')
    wechat.addEventListener('mouseover', function() {
        wechatimg.style.display = 'block'
    })
    wechat.addEventListener('mouseout', function() {
        wechatimg.style.display = 'none'
    })
    wechatimg.addEventListener('mouseover', function() {
        this.style.display = 'block'
    })
    wechatimg.addEventListener('mouseout', function() {
        this.style.display = 'none'
    })

    //产品介绍选项卡
    var ul = document.querySelector('.nav').querySelector('ul')
    var lis = ul.querySelectorAll('li')
    var conlis = document.querySelector('.nav-content').querySelector('ul').querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseover', function() {
            this.setAttribute('index', i)
            for (let i = 0; i < conlis.length; i++) {
                conlis[i].style.display = 'none'
            }
            let index = this.getAttribute('index')
            conlis[index].style.display = 'block'
        })
    }
    var videos = ['../video/introduce1.mp4', '../video/introduce2.mp4', '../video/introduce3.mp4', '../video/introduce4.mp4']
        //给选项卡添加点击事件
    for (let i = 0; i < conlis.length; i++) {
        //给选项卡左边添加点击事件
        conlis[i].children[0].addEventListener('click', function() {
            // console.log('zuobian');
            layer.open({
                type: 1,
                title: '信息',
                closeBtn: 2, //不显示关闭按钮
                shade: 0.7,
                scrollbar: false,
                skin: 'layer-alert-video',
                area: ["1000px", "680px"],
                anim: 0,
                scrollbar: true, //防止父页面自动跳到页面顶端
                content: '<div style="line-height:0;font-size:0;"><video width="100%" height="100%"  controls="controls" autobuffer="autobuffer"  autoplay="autoplay" loop="loop" src="' + videos[i] + '" style="width:100%;height:100%;"></video><button type="button" class="layui-btn layui-btn-normal">关闭</button></div>'
            });
        })

        //给选项卡左边添加点击事件
        conlis[i].children[1].addEventListener('click', function() {
            console.log('youbian');
        })
    }

    var casevideos = ['../video/case1.mp4', '../video/case2.mp4', '../video/case3.mp4', '../video/case4.mp4', '../video/case5.mp4', '../video/case6.mp4']
        //客户案例添加点击事件
    var caselis = document.querySelector('.case-content').querySelector('ul').querySelectorAll('li')
    for (let i = 0; i < caselis.length; i++) {
        caselis[i].children[0].addEventListener('click', function() {
            layer.open({
                type: 1,
                title: '信息',
                closeBtn: 2, //不显示关闭按钮
                shade: 0.7,
                scrollbar: false,
                skin: 'layer-alert-video',
                area: ["1000px", "680px"],
                anim: 0,
                scrollbar: true, //防止父页面自动跳到页面顶端
                content: '<div style="line-height:0;font-size:0;"><video width="100%" height="100%"  controls="controls" autobuffer="autobuffer"  autoplay="autoplay" loop="loop" src="' + casevideos[i] + '" style="width:100%;height:100%;"></video><button type="button" class="layui-btn layui-btn-normal">关闭</button></div>'
            });
        })
    }



})