// $('.buttonStartTest').bind('click', function () {
//    console.log();
// });


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

function hideAll() {
 // TODO
}

function viewTest() {
    hideAll();

    $('.test').hidden = false;
}


$('.word').bind('click', function () {
    insertData({
        testName : 'Word',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();

    $('.buttonStartTest').one('click', function () {
        // TODO: viewTest()
    });
});

$('.java').bind('click', function () {
    insertData({
        testName : 'Java',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();

    $('.buttonStartTest').one('click', function () {
        // TODO: viewTest()
    });
});

$('.excel').bind('click', function () {
    insertData({
        testName : 'Excel',
        desc : '123',
        comment : '123'
    });

    toggleModalWindow();

    $('.buttonStartTest').one('click', function () {
        // TODO: viewTest()
    });
});



$('.blur').bind('click', toggleModalWindow);
