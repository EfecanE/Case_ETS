$(document).ready(function(){
    $('.refreshSecureCode').click(function(){
        $(".captchaimage").attr("src", "/captcha/captcha.png");
    });

    $('#closeSignup').click(function(){
        $('#modalSignup').modal('hide');
    });

    $("#closeSignin").click(function(){
        $("#modalSignin").modal('hide');
    });

    $('#closeRemindPassword').click(function(){
        $("#modalRemindPassword").modal('hide');
    });

    $('#back-signin').click(function(){
        $("#modalRemindPassword").modal('hide');
        $("#modalSignin").modal('show');
    })

    $("#closeMembershipAgreement").click(function(){
        $('#modalMembershipAgreement').modal('hide');
    });

    $("#closeKVKAgreement").click(function(){
        $('#modalKVKAgreement').modal('hide');
    });

    $(".refresh-secure-code").click(function(){
        location.reload();
    });

    $("#marketing-detail").click(function(){
        $('#marketing-alert').toggle();
    });

    $("#redirect-signin").click(function(){
        $('#modalSignup').modal('hide');
        $('#modalSignin').modal('show');
    });

    $("#redirect-signup").click(function(){
        $('#modalSignin').modal('hide');
        $('#modalSignup').modal('show');
    });

    $(".flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });

    $(".flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });

    $(".flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });

    $(".flip4").click(function(){
        $("#panel4").slideToggle("slow");
    });
  });