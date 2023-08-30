// ระบุคีย์เข้ารหัส (ควรเป็นคีย์ที่แข็งแกร่งและปลอดภัย)
const encryptionKey = CryptoJS.enc.Hex.parse('2b7e151628aed2a6abf7158809cf4f3c');

// ฟังก์ชันเข้ารหัสข้อมูล
function encryptData(data) {
    const encryptedData = CryptoJS.AES.encrypt(data, encryptionKey);
    return encryptedData.toString();
}

// ฟังก์ชันถอดรหัสข้อมูล
function decryptData(encryptedData) {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    return decryptedData.toString(CryptoJS.enc.Utf8);
}
