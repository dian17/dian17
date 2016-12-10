;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.248 229.2224 0 512 0c282.7776 0 512 229.248 512 512C1024 794.7776 794.7776 1024 512 1024zM512 51.2C261.0432 51.2 51.2 261.3248 51.2 512c0 250.6752 209.8432 460.8 460.8 460.8 250.9568 0 460.8-210.1248 460.8-460.8C972.8 261.3248 762.9312 51.2 512 51.2zM281.6 460.8l102.4 0 0-153.6c0-98.7392 33.7408-128 128-128s128 29.2608 128 128l0 153.6 102.4 0 0 307.2L281.6 768 281.6 460.8zM588.8 307.2c0-49.3824-29.6704-76.8-76.8-76.8-47.1296 0-76.8 27.4176-76.8 76.8l0 153.6 153.6 0L588.8 307.2zM332.8 716.8l358.4 0 0-204.8L332.8 512 332.8 716.8z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mianbantongsuo10" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 671.708422c-8.882298 0-15.97074 7.217379-15.97074 16.120143l0 31.642674c0 9.039887 7.14984 16.121166 15.97074 16.121166 8.881274 0 15.97074-7.218402 15.97074-16.121166L527.97074 687.828564C527.97074 678.788677 520.819876 671.708422 512 671.708422z"  ></path>'+
      ''+
      '<path d="M799.446711 448.116017 374.023532 448.116017 374.023532 235.875149c0-93.572142-76.126818-169.69896-169.69896-169.69896S34.624589 142.303007 34.624589 235.875149l0 226.835262c0 8.760524 7.100722 15.861246 15.861246 15.861246s15.861246-7.100722 15.861246-15.861246L66.347081 235.875149c0-76.080769 61.895699-137.976468 137.976468-137.976468 76.080769 0 137.976468 61.895699 137.976468 137.976468l0 212.240869-53.893444 0-31.94148 0-31.91385 0c-35.297924 0-63.911612 28.571732-63.911612 63.950498L160.63963 895.232265c0 35.319413 28.637224 63.951521 63.911612 63.951521l574.894446 0c35.297924 0 63.912635-28.572756 63.912635-63.951521L863.358323 512.067538C863.359346 476.748125 834.722122 448.116017 799.446711 448.116017zM799.519366 927.243329 224.479611 927.243329c-17.660218 0-31.897478-14.238282-31.897478-31.80231L192.582133 511.859807c0-17.429974 14.280238-31.801287 31.897478-31.801287l575.038732 0c17.660218 0 31.898501 14.237259 31.898501 31.801287l0 383.581212 0.001023 0C831.417867 912.870993 817.136605 927.243329 799.519366 927.243329z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiesuo01" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M507.392 926.848C281.152 928 96.64 742.08 96.448 516.288 96.192 295.616 274.56 105.6 506.944 105.152c227.456-0.512 411.968 184 411.584 411.392C918.08 748.416 728.576 928.32 507.392 926.848zM413.952 691.072c15.68 0.192 26.176-6.784 35.648-16.64 59.52-61.376 119.104-122.496 178.688-183.744 34.752-35.712 69.376-71.168 104-106.88 2.944-3.072 6.592-6.592 7.232-10.432 3.52-19.264-12.736-35.072-31.36-30.592-4.608 1.152-9.216 4.736-12.736 8.32-49.472 48.96-98.944 98.304-148.352 147.52C508.992 536.448 471.04 574.4 433.024 612.032 421.056 623.936 412.8 623.36 400.704 611.776c-27.072-25.92-54.4-51.648-81.664-77.248-7.68-7.168-21.12-8.832-30.336-4.032C274.944 537.472 271.488 556.8 282.048 567.616c37.184 38.016 74.56 75.84 111.552 114.048C399.808 688.128 406.464 691.904 413.952 691.072z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
