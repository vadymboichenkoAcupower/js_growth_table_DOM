var e=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),o=document.querySelector(".field");function t(){var t=o.rows.length,c=o.rows[0].cells.length;e.disabled=10===t,r.disabled=2===t,n.disabled=10===c,l.disabled=2===c}e.addEventListener("click",function(){for(var e=o.insertRow(),r=0;r<o.rows[0].cells.length;r++)e.insertCell();t()}),r.addEventListener("click",function(){o.deleteRow(-1),t()}),n.addEventListener("click",function(){for(var e=0;e<o.rows.length;e++)o.rows[e].insertCell();t()}),l.addEventListener("click",function(){for(var e=0;e<o.rows.length;e++)o.rows[e].deleteCell(-1);t()});
//# sourceMappingURL=index.499d768a.js.map
