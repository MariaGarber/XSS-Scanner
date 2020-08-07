# XSS Scanner

Following OWASP TOP 10 (the top ten most critical web application security risk) I decided to build an XSS Scanner.
In the Frontend I used vanilla javascript and in the Backend I used NodeJS and Express for the server and Puppeteer for automation. 
Puppeteer is an open source library developed by Google that was built in purpose of automating and simplifying tests and development.

The scanner getting link from the user and scan the website for XSS vulnerability by injecting malicious script and check if the website is running the script.
The scanner is trying to inject variety of scripts for better results.   


### Prerequisites

For able to be run the scanner you need to have NodeJS installed on your computer and the browser need to include Cors extension
If both of these things are installed, all you have to do in the terminal is:

```
npm install
```
and after that just for run the server you need:

```
npm start
```

![](pictures/xss_scanner_pic.png)



