![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Favoriot Data Visualization Using React & Plotly.js

[![Video Lintang](https://img.youtube.com/vi/_7HsPzlLqNQ/0.jpg)](https://www.youtube.com/watch?v=_7HsPzlLqNQ)

1. Make sure [__*Node.js*__](https://nodejs.org/en/) is installed on your PC, then simply download or clone this repo and install all dependencies:

    ```bash
    $ git clone https://github.com/LintangWisesa/React-Plotly-Favoriot-API.git

    $ cd React-Plotly-Favoriot-API

    $ npm install
    ```

#

2. Open your code editor (I'm using [__*Visual Studio Code*__](https://code.visualstudio.com/)), insert your __*Favoriot API key*__ and __*Favoriot device developer ID*__ to the __App.js__ file!
    
    - __*API key*__ goes to request headers:

        ```javascript
        var headers = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'your_API_key'
            }
        }
        ```

    - __*Device developer ID*__ goes to request headers:

        ```javascript
        var dataBody = {
            device_developer_id: 'your_device_developer_ID',
            data: {
                Temperature: this.refs.temp.value,
                Humidity: this.refs.hum.value,
                Potentio: this.refs.pot.value
            }
        }
        ```
        
#

3. Run the project!

    ```bash
    $ npm start
    ```

    The app will be run automatically on http://localhost:3000/. Try to POST some data & GET the data back from Favoriot!

    ![screenshot](./screenshot.png)

    Enjoy your code~ 😍

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)