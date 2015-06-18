Weather Provider
================

A web application to provide the weather of almost any city. It uses the openweathermap API.

Build Instructions
------------------

Install Node on your system, and place all the files in any folder.
The entry point for this application is server.js, so simply enter "node server.js" on the terminal from
within the directory containing all the files.

Usage
-----

**Note**: This app runs on port 3000.  

After the domain and port, enter /weather/?city=&lt;cityname&gt;, where &lt;cityname&gt; is the name of the city you wish
to obtain the weather for.

**Example**: If the server is running on your machine, localhost:3000/weather/?city=chennai will return a webpage containing
information about Chennai's weather.

Future Plans
------------

Storing results in a database, providing a 24 hour forecast.