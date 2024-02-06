
        function fetchPostalCodeInfo() {
            var postalCode = document.getElementById("postalCode").value;
            var apiUrl = `https://api.postalpincode.in/pincode/${postalCode}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    displayResult(data);
                   
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    displayResult({ Message: 'Error fetching data. Please try again.' });
                });
        }

        function displayResult(data) {
            var resultContainer = document.getElementById("result");
            resultContainer.innerHTML = "";

          
                resultContainer.innerHTML = `<p>State: ${data[0].PostOffice[0].State}</p>
                                            <p>District: ${data[0].PostOffice[0].District}</p>
                                            <p>Country: ${data[0].PostOffice[0].Country}</p>`;
            
        }