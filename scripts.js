// فتح نافذة الدفع
function openPaymentPopup(packageValue, dailyReturn) {
    document.getElementById('paymentAmount').value = packageValue;
    document.getElementById('paymentPopup').style.display = 'flex';
}

// إغلاق النافذة
function closePaymentPopup() {
    document.getElementById('paymentPopup').style.display = 'none';
}

// نسخ رقم المحفظة
function copyWalletNumber() {
    const walletNumber = document.getElementById('walletNumber').textContent;
    navigator.clipboard.writeText(walletNumber)
        .then(() => alert('تم نسخ رقم المحفظة!'))
        .catch(err => alert('خطأ أثناء النسخ: ' + err));
}

// تأكيد الدفع
function submitPayment() {
    alert('تم إرسال طلبك بنجاح! سيتم مراجعته قريبًا.');
    closePaymentPopup();
}