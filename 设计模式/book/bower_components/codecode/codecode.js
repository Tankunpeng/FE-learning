(function ($, win, doc) {
  'use strict';

  var el = {};
  var codePosition;

  el.body = $(doc.body);



  function goBackToTheCode(e) {
    e.preventDefault();

    closeCodeCode();

    el.body.animate({ scrollTop: codePosition - 20 }, 2000);
  };

  function closeCodeCode(e, callback) {
    if ($.type(e) === 'object') {
      e.preventDefault();
    }

    el.body.off('keyup');

    el.codecodecode.animate({ bottom: '-300px' }, 300, callback || $.noop);

    $('.acodecodeactive').removeClass('acodecodeactive');
  };

  function openCodeCode(codeblock) {
    el.codecodecode.animate({ bottom: 0 }, 500);

    el.body.on('keyup', function (e) {
      if (e.which === 27) {
        closeCodeCode();
      }
    });

    codeblock.addClass('acodecodeactive');
  };

  function bindCodeCodeClick(selector) {
    el.body.on('click', selector, function () {
      var codeblock = $(this);
      var clone;

      if (codeblock.hasClass('acodecodeactive') ||
          codeblock.hasClass('codecode')) {
        return;
      }

      codePosition = $(this).position().top;

      clone = codeblock.clone().addClass('codecode');

      closeCodeCode(null, function () {
        el.codecode
          .empty()
          .append(clone.css('margin', '0 !important'))
          .height('auto');

        el.codecodecode.height(
          (el.codecode.height() >= 270) ? 270 : el.codecode.height()
        );

        el.codecode.height('100%');
      });

      openCodeCode(codeblock);
    });
  };

  $.fn.codecode = function () {
   
  };

  if (typeof SyntaxHighlighter !== 'undefined') {
    SyntaxHighlighter.all = (function () {
      var callSyntaxHighlighter = SyntaxHighlighter.all;
      var syntaxActivated = false;
      var checkForSyntaxEls;
      var tried = 0;

      function hasSyntaxBeenHighlighted() {
        if ($('.syntaxhighlighter').length > 0) {
          $('.syntaxhighlighter').codecode();
          syntaxActivated = true;
        }

        if (syntaxActivated || tried++ > 50) {
          win.clearInterval(checkForSyntaxEls);
        }
      };

      return function () {
        callSyntaxHighlighter();

        checkForSyntaxEls = win.setInterval(hasSyntaxBeenHighlighted, 50);
      }
    })();
  }
})(jQuery, window, document);
