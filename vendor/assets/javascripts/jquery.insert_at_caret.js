(function($){
  $.fn.insertAtCaret = function(v) {
    var o = this.get(0);
    o.focus();
    if ($.browser.msie) {
      var r = document.selection.createRange();
      r.text = v;
      r.select();
    } else {
      var s = o.value;
      var p = o.selectionStart;
      var np = p + v.length;
      o.value = s.substr(0, p) + v + s.substr(p);
      o.setSelectionRange(np, np);
    }
  };
})(jQuery);
