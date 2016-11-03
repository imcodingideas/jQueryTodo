/**
 * Created by joseph on 11/3/16.
 */
console.log('connected');

//check off specific todos by clicking

$('li').click(function () {
    $(this).toggleClass('completed')
});