$(function(){
    $("#add").click(function(){
        $.ajax({
            type: 'POST',
            url: '/users/add',
            data: {
                name:$('input[name="name"]').val(),
                sex:$('input[name="sex"]').val(),
                age:$('input[name="age"]').val()
            },
            dataType: 'json'
        }).done(function(res){
            console.log(res);
            alert(res);
            window.location.reload();
        }).fail(function(res){
            alert(res);
        });
    });

    $("#edit").click(function(){
        var $checkebox = $('input[type="checkbox"]:checked');
        var checkeboxLength = $checkebox.length;
        if(checkeboxLength>1){
            alert('不能批量选择')
            return;
        }

        if(checkeboxLength < 0 || checkeboxLength == 0){
            alert('请选择要编辑的内容')
            return;
        }

        $('input[name="id"]').val($checkebox.attr('data-id'));
        $('input[name="name"]').val($checkebox.parent().next('td[class="name"]').text());
        $('input[name="sex"]').val($checkebox.parent().parent().find('td[class="sex"]').text());
        $('input[name="age"]').val($checkebox.parent().parent().find('td[class="age"]').text());

    });
    $("#delete").click(function(){
        if($('input[type="checkbox"]:checked').length>1){
            alert('不能批量选择')
            return;
        }else{
            $.ajax({
                type: 'POST',
                url: '/users/delete',
                data: {
                    id:$('input[type="checkbox"]:checked').attr('data-id')
                },
                dataType: 'json'
            }).done(function(res){
                console.log(res);
                alert(res);
                window.location.reload();
            }).fail(function(res){
                alert(res);
            });
        }
    });
    $("#search").click(function(){
        window.location.href = '/users/search?name='+$("#name").val()
    });

    $("#save").click(function(){

        $.ajax({
            type: 'POST',
            url: '/users/update',
            data: {
                id:$('input[name="id"]').val(),
                name:$('input[name="name"]').val(),
                sex:$('input[name="sex"]').val(),
                age:$('input[name="age"]').val()
            },
            dataType: 'json'
        }).done(function(res){
            console.log(res);
            alert(res);
            window.location.reload();
        }).fail(function(res){
            alert(res);
        });

    });

});