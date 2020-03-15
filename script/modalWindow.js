$('.blur')[0].hidden = true;
$('.modalWindow')[0].hidden = true;


function toggleModalWindow() {
    $('.blur')[0].hidden = !$('.blur')[0].hidden;
    $('.modalWindow')[0].hidden = !$('.modalWindow')[0].hidden;
}

function insertData(modalData) {
    $('.testName').html(modalData.testName);
    $('.desc').html(modalData.desc);
    $('.comment').html(modalData.comment);
}


$('.word').bind('click', function () {
    insertData({
        testName : 'Word',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();
});

$('.java').bind('click', function () {
    insertData({
        testName : 'Java',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();
});

$('.excel').bind('click', function () {
    insertData({
        testName : 'Excel',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();
});

$('.blur').bind('click', toggleModalWindow);
