$(function(){
    $('#Modalopen').on('click',function(){
        $('#exampleModal').fadeIn();
        return false;
    });
    $('#btn').on('click',function(){
        $('#exampleModal').fadeOut();
        return false;
    });
});