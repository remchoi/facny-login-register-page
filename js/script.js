// $('#main-wrapper-bg').height($(window).width());
$('.form-group').each(function() {
    var self = $(this),
        input = self.find('input');

    input.focus(function() {
        self.addClass('form-group-focus');
    })

    input.blur(function() {
        if (input.val()) {
            self.addClass('form-group-filled').trigger('classChange');
        } else {
            self.removeClass('form-group-filled').trigger('classChange');
        }
        self.removeClass('form-group-focus');
    });
});


$('.main-form').on('classChange', function(){
    var children = $(this).children('.form-group');
    var allFilled = false;
    var btn = $(this).find('.btn');
    if(children) {
        for (var i = children.length - 1; i >= 0; i--) {
            // children[i]
            console.log(children[i]);
            if($(children[i]).hasClass('form-group-filled')) {
                allFilled = true;
            } else {
                allFilled = false;
                break;
            }
        };
    }
    if(allFilled) {
        btn.addClass('active');
    } else {
        btn.removeClass('active');
    }
});

// $('.form-group input').keypress(function(e){
//     var form = $(this).parent('form');
//     var siblings = $(this).parent('.form-group').siblings('.form-group');
//     // if($(this).val() && )
//     var siblingsFilled = false;
//     // var siblingsInput = 
//     var siblingsInput;
//     for (var i = siblings.length - 1; i >= 0; i--) {
//         siblingsInput = $(siblings[i]).find('input');
//         if($(siblingsInput)) {
//             // $(siblingsInput).
//             if($(siblingsInput).val()) {
//                 siblingsFilled = true;
//             } else {
//                 siblingsFilled = false;
//                 break;
//             }
//         }
//         // if(siblings[i].find('input').val()) {
//         //     siblingsFilled = true;
//         // } else {
//         //     siblingsFilled = false;
//         //     break;
//         // }
//     };
//     if($(this).val() && siblingsFilled) {
//         form.addClass('filled');
//     }
// });