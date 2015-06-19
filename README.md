Weather Provider
================

A web application to provide the current weather and 24 hour forecast of almost any city. It uses the openweathermap API.

Build Instructions
------------------

Install Node on your system, and place all the files in any folder.
The entry point for this application is server.js, so simply enter "node server.js" on the terminal from
within the directory containing all the files.

Usage
-----

**Note**: This app runs on port 3000.  

After the domain and port, enter /weather/?city=&lt;cityname&gt;, where &lt;cityname&gt; is the name of the city you wish
to obtain the weather for. Enter /forecast/?city=&lt;cityname&gt; for a 24 hour forecast of &lt;cityname&gt;'s weather.
Note that the time shown on the weather page is the time when the information was collected by the API, **not the current time**.

**Example**: If the server is running on your machine, localhost:3000/weather?city=chennai will return a webpage containing
information about Chennai's weather. localhost:3000/forecast?city=los%20angeles will return a webpage containing information
about LA's predicted weather for the next 24 hours.

Future Plans
------------

Adding database support for forecasts, improving it for weather. Adding a login and register feature to store query history.
Making a GUI for queries.