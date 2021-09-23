$(function() {
    // 点击去注册账号
    $('#link_reg').on('click', function() {
        $(this).parent().hidden();
        $(".reg-box").show();
    })
})