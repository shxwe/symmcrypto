$(document).ready(function () {
    function copyToClipboard(text) {
        // var encryptedText = document.getElementById("cipher").value;
        var textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";  // Убираем текстарею из визуальной части страницы
        document.body.appendChild(textarea);
        textarea.focus();  // Фокус на текстарею
        textarea.select();  // Выбираем текст
        document.execCommand('copy');  // Копируем текст в буфер обмена
        document.body.removeChild(textarea);  // Удаляем текстарею
    }

    // Обработчик события для кнопки копирования зашифрованного текста
    $('#copyBtn-password').click(function () {
        var password = document.getElementById("password").value;
        copyToClipboard(password)
    });

    $('#copyBtn-plain').click(function () {
        var plaintext = document.getElementById("plaintext").value;
        copyToClipboard(plaintext)
    });

    $('#copyBtn-cipher').click(function () {
        var cipher = document.getElementById("cipher").value;
        copyToClipboard(cipher)
    });

    $('#plaintextDiv .clear').click(function () {
        $('#plaintext').val("");
    });
    $('#cipherDiv .clear').click(function () {
        $('#cipher').val("");
    });
    $('#passwordDiv .clear').click(function () {
        $('#password').val("");
    });
});