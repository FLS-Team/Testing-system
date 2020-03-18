$('#modal').hide();
$('.test').hide();

function insertData(modalData) {
    $('.testName').html(modalData.testName);
    $('.desc').html(modalData.desc);
    $('.comment').html(modalData.comment);
}

function viewTest() {
    $('.test').show();
}

function insertDataTest(data) {
    $('.question').html(data.question);

    $('.responseFirst').html(data.checkbox[0]);
    $('.responseSecond').html(data.checkbox[1]);
    $('.responseThird').html(data.checkbox[2]);
}

function checkTest() {

}

/*

{
    question: '',
    checkbox: [
        '1',
        '2',
        '3'
    ]
}

 */

$('.word').bind('click', function () {

    $('#modal').show();

    insertData({
        testName : 'Word',
        desc : '123',
        comment : '123'
    });



    $('.buttonStartTest').one('click', function () {
        // TODO: viewTest()
    });
});

$('.java').bind('click', function () {
    $('#modal').show();

    insertData({
        testName : 'Java',
        desc : '123',
        comment : '123'
    });

    $('.buttonStartTest').one('click', function () {
        viewTest();
    });
});

$('.excel').bind('click', function () {
    $('#modal').show();

    insertData({
        testName : 'Excel',
        desc : '123',
        comment : '123'
    });

    $('.buttonStartTest').one('click', function () {
        // TODO: viewTest()
    });
});

$('.exitModalButton').bind('click', function () {
    $('#modal').hide();
});
