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