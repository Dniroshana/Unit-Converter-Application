const conversions = {
            length: {
                meter: 1,
                kilometer: 0.001,
                centimeter: 100,
                millimeter: 1000,
                mile: 0.000621371,
                yard: 1.09361,
                foot: 3.28084,
                inch: 39.3701
            },
            weight: {
                kilogram: 1,
                gram: 1000,
                milligram: 1000000,
                ton: 0.001,
                pound: 2.20462,
                ounce: 35.274
            }
        };

        let history = [];
        const maxHistory = 10;

        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.dataset.tab;
                
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.converter-section').forEach(s => s.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(tabName).classList.add('active');
            });
        });

        // Length conversion
        const lengthInput = document.getElementById('length-input');
        const lengthFrom = document.getElementById('length-from');
        const lengthTo = document.getElementById('length-to');
        const lengthOutput = document.getElementById('length-output');

        lengthInput.addEventListener('input', () => convertLength());
        lengthFrom.addEventListener('change', () => convertLength());
        lengthTo.addEventListener('change', () => convertLength());

        function convertLength() {
            const value = parseFloat(lengthInput.value);
            
            if (isNaN(value) || lengthInput.value === '') {
                lengthOutput.value = '';
                return;
            }

            const fromUnit = lengthFrom.value;
            const toUnit = lengthTo.value;

            const meters = value / conversions.length[fromUnit];
            const result = meters * conversions.length[toUnit];

            lengthOutput.value = result.toFixed(6).replace(/\.?0+$/, '');
            
            addToHistory(`${value} ${fromUnit} = ${lengthOutput.value} ${toUnit}`, 'Length');
        }

        // Weight conversion
        const weightInput = document.getElementById('weight-input');
        const weightFrom = document.getElementById('weight-from');
        const weightTo = document.getElementById('weight-to');
        const weightOutput = document.getElementById('weight-output');

        weightInput.addEventListener('input', () => convertWeight());
        weightFrom.addEventListener('change', () => convertWeight());
        weightTo.addEventListener('change', () => convertWeight());

        function convertWeight() {
            const value = parseFloat(weightInput.value);
            
            if (isNaN(value) || weightInput.value === '') {
                weightOutput.value = '';
                return;
            }

            const fromUnit = weightFrom.value;
            const toUnit = weightTo.value;

            const kg = value / conversions.weight[fromUnit];
            const result = kg * conversions.weight[toUnit];

            weightOutput.value = result.toFixed(6).replace(/\.?0+$/, '');
            
            addToHistory(`${value} ${fromUnit} = ${weightOutput.value} ${toUnit}`, 'Weight');
        }