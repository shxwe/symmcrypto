$(document).ready(function () {
    $('#keygenBtn').click(function () {
        const key = new Uint8Array(32); // 256 бит (32 байта)
        window.crypto.getRandomValues(key); // Заполнение массива случайными значениями
        const hexKey = Array.from(key, byte => byte.toString(16)).join(''); // Преобразование в шестнадцатеричное представление
        console.log(`Сгенерированный ключ AES-256: ${hexKey}`);
        $('#password').val(hexKey);
    });

    // encrypt listener
    $('#encryptBtn').click(function () {
        var t = new Date();
        var ciphertext = Aes.Ctr.encrypt($('#plaintext').val(), $('#password').val(), 256);
        $('#encrypt-time').html(((new Date() - t)) + 'ms');
        $('#cipher').val(ciphertext);
    });

    // decrypt listener
    $('#decryptBtn').click(function () {
        var t = new Date();
        var plain = Aes.Ctr.decrypt($('#cipher').val(), $('#password').val(), 256);
        $('#decrypt-time').html(((new Date() - t)) + 'ms');
        $('#plaintext').val(plain);
    });
});