window.addEventListener('load', function() {
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

})