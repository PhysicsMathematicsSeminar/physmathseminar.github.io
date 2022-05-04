$(function() {
2
 
3
    //ページ内スクロール
4
    $(".btn").click(function () {
5
        var i = $(".btn").index(this)
6
        var p = $(".cnt").eq(i).offset().top;
7
        $('html,body').animate({ scrollTop: p }, 'fast');
8
        return false;
9
    });
10
 
11
    //ページ上部へ戻る
12
    $(".btn_top").click(function () {
13
        $('html,body').animate({ scrollTop: 0 }, 'fast');
14
        return false;
15
    });
16
 
17
});
