 var scholarshipAccount = {
            accountNumber: "1234567890",
            currency: "SOM",
            balance: 2000,
            ownerName: "Eraliev Msirbek",
            isLocked: false
        };

        // Выводим информацию в консоли
        console.log("Информация о счете стипендии:");
        console.log("Номер счета: " + scholarshipAccount.accountNumber);
        console.log("Валюта: " + scholarshipAccount.currency);
        console.log("Баланс: $" + scholarshipAccount.balance);
        console.log("Имя владельца: " + scholarshipAccount.ownerName);
        console.log("Счет заблокирован: " + scholarshipAccount.isLocked);

        // Выводим информацию в HTML шаблоне
        document.getElementById("account-number").textContent = scholarshipAccount.accountNumber;
        document.getElementById("currency").textContent = scholarshipAccount.currency;
        document.getElementById("balance").textContent = scholarshipAccount.balance;
        document.getElementById("owner-name").textContent = scholarshipAccount.ownerName;
        document.getElementById("is-locked").textContent = scholarshipAccount.isLocked ? "Да" : "Нет";