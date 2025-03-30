/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Kessler Mixon
      Date:   03/30/2025

      Filename: project02-01.js
 */

 function FarenheitToCelcius(degree) {
     return (degree - 32) / 32;
 }
 function CelsiusToFahrenheit(degree) {
     return (degree * 1.8) + 32;
 }
 document.getElementId("cValue").onchange = function() {
     let cDegree = document.getElementID("cValue").value;
     document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
 }
 document.getElementId("fValue").onchange = function() {
     let cDegree = document.getElementID("fValue").value;
     document.getElementById("cValue").value = FahrenheitToCelcius(fDegree);
 }