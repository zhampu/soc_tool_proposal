// import { Previewer, Handler } from 'https://unpkg.com/pagedjs@0.1.38/dist/paged.esm.js';
import {Previewer, Handler} from '../js/paged.esm.js';
let tipo = true;

// https://www.pagedjs.org/documentation/11-hooks/


window.addEventListener('load', () => {

  putNotes(".footnote-item")

  $(document).ready(function () {


    document.querySelector(".title").style.fontSize = "8em";
    espaceFine();

    var circulo = document.getElementById("circulo");
    setInterval(function () {

      circulo.setAttribute("r", getRandomInt(5, 30));
    }, 4000);

    var circle = document.getElementById("circle");
    setInterval(function () {
      circle.setAttribute("width", getRandomInt(15, 30));
      circle.setAttribute("height", getRandomInt(25, 30));
    }, 4000);

    var circle2 = document.getElementById("circle2");
    setInterval(function () {
      circle2.setAttribute("width", getRandomInt(5, 40));
      circle2.setAttribute("height", getRandomInt(5, 30));
    }, 4000);

    var circle3 = document.getElementById("circle3");
    setInterval(function () {
      circle3.setAttribute("width", getRandomInt(5, 40));
      circle3.setAttribute("height", getRandomInt(5, 30));
    }, 4000);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function requestInterval(fn, delay) {
      var requestAnimFrame = (function () {
            return window.requestAnimationFrame || function (callback, element) {
              window.setTimeout(callback, 1000 / 60);
            };
          })(),
          start = new Date().getTime(),
          handle = {};

      function loop() {
        handle.value = requestAnimFrame(loop);
        var current = new Date().getTime(),
            delta = current - start;
        if (delta >= delay) {
          fn.call();
          start = new Date().getTime();
        }
      }

      handle.value = requestAnimFrame(loop);
      return handle;
    };

    setTimeout(function () {
      var list = $('#main');
      $(".content-article h1").each(function () {
        $(this).prepend('<a id="' + $(this).text() + '"></a>');
        $(list).append('<li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li>');

        const firstA = document.querySelector("ul > li > a");
        firstA.classList.add("active");
      });
      putNotes(".footnote-item")
      var elements = document.getElementsByClassName("footnote-ref");
      for (var i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = elements[i].innerHTML.replace('[', ' ').replace(']', '');
      }
    }, 500);


  });

  function putNotes(footerClassName) {
    const noteContainer = document.querySelector(".notes-images");
    const footerNotesElements = document.querySelectorAll(footerClassName);
    let prevFootnoteBottomPosition = 0;


    noteContainer.style.opacity = 0;
    noteContainer.style.transition = "opacity 2000ms ease-in-out";
    noteContainer.innerHTML = "";


    for (const footerElement of footerNotesElements) {

      const copyOfFooterElement = footerElement.cloneNode(true);
      const footerID = copyOfFooterElement.id;
      const num = footerID.substring(2);
      // console.log(footerID);
      // console.log(num);
      const numElementInTextID = "#fnref" + num;
      // console.log(numElementInTextID);
      const numElement = document.querySelector(numElementInTextID);
      // console.log(numElement);
      footerElement.style.display = "none";
      copyOfFooterElement.style.display = "block";


      if (numElement instanceof HTMLElement) {
        const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);

        const noteNumberValueElement = document.createElement("span");
        // console.log(noteNumberValueElement);
        noteNumberValueElement.innerText = num + " ";
        noteNumberValueElement.className = "footnote-counter";
        copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
        let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        const marginTopNote = 10; //px unit

        if (topPosition - marginTopNote <= prevFootnoteBottomPosition) {
          topPosition = prevFootnoteBottomPosition + marginTopNote;
        }
        noteElementToAdd.className = "footnote";
        noteElementToAdd.style.position = "absolute";
        noteElementToAdd.style.top = topPosition + "px";
        prevFootnoteBottomPosition = noteElementToAdd.getBoundingClientRect().height + topPosition;
        // console.log(noteElementToAdd);
        var test = noteElementToAdd.querySelector("a");
        test.id = footerID;

      }
    }
    noteContainer.style.opacity = 1;
  }

  window.addEventListener("resize", function () {
    putNotes(".footnote-item");

  });
  $(function () {
    $(window).scroll(function () {
      var hauteur = $(document).height() - $(window).height();
      var pourcentage = (100 * $(window).scrollTop()) / hauteur;

      $(".pourcentage-number").html(Math.round(pourcentage));
    });
    if ($("html").hasClass("mobile")) {
      var windowWidth = $(window).width();
    }
  });


  window.onscroll = function () {
    if (tipo == true) {
      titleExpand()
      menuExpand()
      pourcentageExpand()


    }


  };


  function titleExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".title").style.fontSize = "1.5em";
      document.querySelector(".title").style.background = "none";


    } else {
      document.querySelector(".title").style.fontSize = "8em";
      document.querySelector(".title").style.background = "white";

    }
  }

  function menuExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

      document.querySelector(".subtitle").style.opacity = "1";
      document.querySelector(".subtitle").classList.add('movimiento');
      document.querySelector("#main").style.opacity = "1";
    } else {

      document.querySelector("#main").style.opacity = "0";
      document.querySelector(".subtitle").classList.remove('movimiento');
      // document.querySelector(".subtitle").style.opacity = "0";
    }
  }

  function pourcentageExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".pourcentage").style.opacity = "1";
    } else {
      document.querySelector(".pourcentage").style.opacity = "0";
    }
  }


  let content = document.body.innerHTML;
  document.body.innerHTML = "";

  document.body.innerHTML = '\
  <header id="header-pagedjs">\
    <div id="header-container">\
        <input type="radio" id="input-screen" name="toggle-input" value="screen" hidden checked/>\
        <input type="radio" id="input-print" name="toggle-input" value="print" hidden/>\
        <button id="button-screen" data-text="Web">\🖥️\
        </button>\
        <button id="button-print-preview" data-text="Preview">\📖\
        </button>\
        <button id="button-print" data-text="Print">\🖨️\
        </button>\
    </div>\
    </header>\
    <div id="renderbook"></div>\
    <div id="content">\
    ' + content + '</div>';


  // 3. Add onclick event -------------------------
  document.querySelector('#button-print-preview').addEventListener('click', printPreview);
  document.querySelector('#button-screen').addEventListener('click', screenReload);
  document.querySelector('#button-print').addEventListener('click', printPdf);

});


/* PREVIEW ----------------------------------------------------------- */

function printPreview() {
  tipo = false;
  // putNotes(".footnote-item");
  let inputPrint = document.getElementById("input-print");
  document.getElementById("button-print").disabled = true;

  if (inputPrint.checked) {
    document.getElementById("button-print").disabled = false;
  } else {
    document.getElementById("style-screen").remove();
    let bookcontent = document.querySelector("#content");
    let content = bookcontent.innerHTML;
    bookcontent.innerHTML = "";

    // 1. Create Previewer
    let previewer = new Previewer();

    // 2. Register Handlers
    previewer.registerHandlers(
        class PreviewHandler extends Handler {
          afterPreview() {
            document.getElementById("button-print").disabled = false;
          }

          // beforePreview(content, renderTo){
          //
          //
          //
          // }


        }
    );

    // 3. Render
    previewer.preview(
        content,
        ["css/style-print.css"],
        document.querySelector("#renderbook")
    );

    this.disabled = "disabled";
    document.getElementById("input-print").checked = "true";
  }
};


/* SCREEN ----------------------------------------------------------- */

function screenReload() {
  window.location.reload(false);
};


/* PRINT ----------------------------------------------------------- */

function printPdf() {
  let inputPrint = document.getElementById("input-print");
  if (inputPrint.checked) {
    window.print();
  } else {
    document.getElementById("style-screen").remove();
    let bookcontent = document.querySelector("#content");
    let content = bookcontent.innerHTML;
    bookcontent.innerHTML = "";

    // 1. Create Previewer
    let previewer = new Previewer();

    // 2. Register Handlers
    previewer.registerHandlers(
        class PrintHandler extends Handler {
          afterPreview() {
            window.print();
          }
        }
    );

    // 3. Render
    previewer.preview(
        content,
        ["css/style-print.css"],
        document.querySelector("#renderbook")
    );
    document.getElementById("input-print").checked = "true";
  }
};
