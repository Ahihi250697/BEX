function setflexOption(
    eleTarget,
    odd,
    callback1,
    callback2,
    maxColumn,
    gap
  ) {
    let _gap = gap || 0;
    let _maxColumn = maxColumn || 0;
    function loopEle(ele) {
      let compareValue = Math.floor(
        (ele.width() - _gap) / parseInt(ele.children().first().css("min-width"))
      );
      !_maxColumn ? _maxColumn = ele.children().length: '';
      compareValue > _maxColumn ? (compareValue = _maxColumn) : compareValue;
      !odd ? compareValue % 2 != 0? compareValue = compareValue - 1: compareValue: '';
        let _callback1 =
          callback1 ||
          function () {
              ele
              .children()
              .css(
                "max-width",
                "calc(100%/" + compareValue + " - " + _gap / compareValue + "px)"
              );
          };
        let _callback2 =
          callback2 ||
          function () {
              ele.children().css("max-width", "100%");
          };
        if (compareValue < _maxColumn) {
            if(compareValue > 1) {
              _callback1(ele, compareValue, _gap);
            } else {
              _callback2(ele, compareValue, _gap);
            }
        } else {
          ele.children().attr("style", "");
        }
    }
    if (eleTarget.length > 1) {
      $.each(eleTarget, function () {
        let _parrent = $(this);
        loopEle(_parrent);
      });
    } else {
      loopEle(eleTarget);
    }
  }

  setflexOption($(".recruit-lists"), true, null, null, 2, 20);

  window.addEventListener('resize', function() {
    setflexOption($(".recruit-lists"), true, null, null, 2, 20);
});