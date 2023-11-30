var temperatures = [];

        function inputTemperature() {
            var temperature = parseFloat(prompt('Введите температуру в градусах Цельсия для области КР:'));
            if (!isNaN(temperature)) {
                temperatures.push(temperature);
            } else {
                alert('Неверный ввод. Пожалуйста, введите числовое значение.');
            }
        }

        for (var i = 1; i <= 3; i++) {
            inputTemperature();
        }

        var sum = 0;
        for (var j = 0; j < temperatures.length; j++) {
            sum += temperatures[j];
        }
        var averageTemperature = sum / temperatures.length;

        console.log('Средний показатель температуры КР на сегодня ' + averageTemperature.toFixed(1) + ' градус по Цельсию!');

        var resultMessage = 'Средний показатель температуры КР на сегодня ' + averageTemperature.toFixed(1) + ' градус по Цельсию!';
        document.write('<p>' + resultMessage + '</p>');