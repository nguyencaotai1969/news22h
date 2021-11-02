/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}((function(e){e.fn.jScrollPane=function(t){function i(t,i){var o,n,s,r,a,l,c,p,d,u,f,h,j,g,v,m,b,w,y,k,C,T,B,D,x,H,P,S,A,W,Y,z,M,X,R=this,I=!0,F=!0,L=!1,q=!1,O=t.clone(!1,!1).empty(),E=e.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";function V(i){var k,I,F,L,q,O,ae,le,ce,pe,de,ue,fe,he,je=!1,ge=!1;if(o=i,void 0===n)q=t.scrollTop(),O=t.scrollLeft(),t.css({overflow:"hidden",padding:0}),s=t.innerWidth()+M,r=t.innerHeight(),t.width(s),n=e('<div class="jspPane" />').css("padding",z).append(t.children()),a=e('<div class="jspContainer" />').css({width:s+"px",height:r+"px"}).append(n).appendTo(t);else{if(t.css("width",""),je=o.stickToBottom&&((le=c-r)>20&&le-se()<10),ge=o.stickToRight&&((ae=l-s)>20&&ae-ne()<10),(L=t.innerWidth()+M!=s||t.outerHeight()!=r)&&(s=t.innerWidth()+M,r=t.innerHeight(),a.css({width:s+"px",height:r+"px"})),!L&&X==l&&n.outerHeight()==c)return void t.width(s);X=l,n.css("width",""),t.width(s),a.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}n.css("overflow","auto"),l=i.contentWidth?i.contentWidth:n[0].scrollWidth,c=n[0].scrollHeight,n.css("overflow",""),u=(d=c/r)>1,(f=(p=l/s)>1)||u?(t.addClass("jspScrollable"),(k=o.maintainPosition&&(g||b))&&(I=ne(),F=se()),u&&(a.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'),e('<div class="jspDragBottom" />'))),e('<div class="jspCap jspCapBottom" />'))),w=a.find(">.jspVerticalBar"),y=w.find(">.jspTrack"),h=y.find(">.jspDrag"),o.showArrows&&(B=e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",Q(0,-1)).bind("click.jsp",re),D=e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",Q(0,1)).bind("click.jsp",re),o.arrowScrollOnHover&&(B.bind("mouseover.jsp",Q(0,-1,B)),D.bind("mouseover.jsp",Q(0,1,D))),K(y,o.verticalArrowPositions,B,D)),C=r,a.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each((function(){C-=e(this).outerHeight()})),h.hover((function(){h.addClass("jspHover")}),(function(){h.removeClass("jspHover")})).bind("mousedown.jsp",(function(t){e("html").bind("dragstart.jsp selectstart.jsp",re),h.addClass("jspActive");var i=t.pageY-h.position().top;return e("html").bind("mousemove.jsp",(function(e){J(e.pageY-i,!1)})).bind("mouseup.jsp mouseleave.jsp",$),!1})),G()),f&&(a.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'),e('<div class="jspDragRight" />'))),e('<div class="jspCap jspCapRight" />'))),x=a.find(">.jspHorizontalBar"),H=x.find(">.jspTrack"),v=H.find(">.jspDrag"),o.showArrows&&(A=e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",Q(-1,0)).bind("click.jsp",re),W=e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",Q(1,0)).bind("click.jsp",re),o.arrowScrollOnHover&&(A.bind("mouseover.jsp",Q(-1,0,A)),W.bind("mouseover.jsp",Q(1,0,W))),K(H,o.horizontalArrowPositions,A,W)),v.hover((function(){v.addClass("jspHover")}),(function(){v.removeClass("jspHover")})).bind("mousedown.jsp",(function(t){e("html").bind("dragstart.jsp selectstart.jsp",re),v.addClass("jspActive");var i=t.pageX-v.position().left;return e("html").bind("mousemove.jsp",(function(e){_(e.pageX-i,!1)})).bind("mouseup.jsp mouseleave.jsp",$),!1})),P=a.innerWidth(),N()),function(){if(f&&u){var t=H.outerHeight(),i=y.outerWidth();C-=t,e(x).find(">.jspCap:visible,>.jspArrow").each((function(){P+=e(this).outerWidth()})),P-=i,r-=i,s-=t,H.parent().append(e('<div class="jspCorner" />').css("width",t+"px")),G(),N()}f&&n.width(a.outerWidth()-M+"px");c=n.outerHeight(),d=c/r,f&&((S=Math.ceil(1/p*P))>o.horizontalDragMaxWidth?S=o.horizontalDragMaxWidth:S<o.horizontalDragMinWidth&&(S=o.horizontalDragMinWidth),v.width(S+"px"),m=P-S,ee(b));u&&((T=Math.ceil(1/d*C))>o.verticalDragMaxHeight?T=o.verticalDragMaxHeight:T<o.verticalDragMinHeight&&(T=o.verticalDragMinHeight),h.height(T+"px"),j=C-T,Z(g))}(),k&&(ie(ge?l-s:I,!1),te(je?c-r:F,!1)),n.find(":input,a").unbind("focus.jsp").bind("focus.jsp",(function(e){oe(e.target,!1)})),a.unbind(E).bind(E,(function(e,t,i,n){b||(b=0),g||(g=0);var s=b,r=g,a=e.deltaFactor||o.mouseWheelSpeed;return R.scrollBy(i*a,-n*a,!1),s==b&&r==g})),he=!1,a.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",(function(e){var t=e.originalEvent.touches[0];ce=ne(),pe=se(),de=t.pageX,ue=t.pageY,fe=!1,he=!0})).bind("touchmove.jsp",(function(e){if(he){var t=e.originalEvent.touches[0],i=b,o=g;return R.scrollTo(ce+de-t.pageX,pe+ue-t.pageY),fe=fe||Math.abs(de-t.pageX)>5||Math.abs(ue-t.pageY)>5,i==b&&o==g}})).bind("touchend.jsp",(function(e){he=!1})).bind("click.jsp-touchclick",(function(e){if(fe)return fe=!1,!1})),o.enableKeyboardNavigation&&function(){var i,s,l=[];f&&l.push(x[0]),u&&l.push(w[0]),n.bind("focus.jsp",(function(){t.focus()})),t.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",(function(t){if(t.target===this||l.length&&e(t.target).closest(l).length){var o=b,n=g;switch(t.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:i=t.keyCode,p();break;case 35:te(c-r),i=null;break;case 36:te(0),i=null}return!(s=t.keyCode==i&&o!=b||n!=g)}})).bind("keypress.jsp",(function(t){if(t.keyCode==i&&p(),t.target===this||l.length&&e(t.target).closest(l).length)return!s})),o.hideFocus?(t.css("outline","none"),"hideFocus"in a[0]&&t.attr("hideFocus",!0)):(t.css("outline",""),"hideFocus"in a[0]&&t.attr("hideFocus",!1));function p(){var e=b,t=g;switch(i){case 40:R.scrollByY(o.keyboardSpeed,!1);break;case 38:R.scrollByY(-o.keyboardSpeed,!1);break;case 34:case 32:R.scrollByY(r*o.scrollPagePercent,!1);break;case 33:R.scrollByY(-r*o.scrollPagePercent,!1);break;case 39:R.scrollByX(o.keyboardSpeed,!1);break;case 37:R.scrollByX(-o.keyboardSpeed,!1)}return s=e!=b||t!=g}}(),o.clickOnTrack&&function(){U(),u&&y.bind("mousedown.jsp",(function(t){if(void 0===t.originalTarget||t.originalTarget==t.currentTarget){var i,n=e(this),s=n.offset(),a=t.pageY-s.top-g,l=!0,p=function(){var e=n.offset(),s=t.pageY-e.top-T/2,u=r*o.scrollPagePercent,f=j*u/(c-r);if(a<0)g-f>s?R.scrollByY(-u):J(s);else{if(!(a>0))return void d();g+f<s?R.scrollByY(u):J(s)}i=setTimeout(p,l?o.initialDelay:o.trackClickRepeatFreq),l=!1},d=function(){i&&clearTimeout(i),i=null,e(document).unbind("mouseup.jsp",d)};return p(),e(document).bind("mouseup.jsp",d),!1}}));f&&H.bind("mousedown.jsp",(function(t){if(void 0===t.originalTarget||t.originalTarget==t.currentTarget){var i,n=e(this),r=n.offset(),a=t.pageX-r.left-b,c=!0,p=function(){var e=n.offset(),r=t.pageX-e.left-S/2,u=s*o.scrollPagePercent,f=m*u/(l-s);if(a<0)b-f>r?R.scrollByX(-u):_(r);else{if(!(a>0))return void d();b+f<r?R.scrollByX(u):_(r)}i=setTimeout(p,c?o.initialDelay:o.trackClickRepeatFreq),c=!1},d=function(){i&&clearTimeout(i),i=null,e(document).unbind("mouseup.jsp",d)};return p(),e(document).bind("mouseup.jsp",d),!1}}))}(),function(){if(location.hash&&location.hash.length>1){var t,i,o=escape(location.hash.substr(1));try{t=e("#"+o+', a[name="'+o+'"]')}catch(e){return}t.length&&n.find(o)&&(0===a.scrollTop()?i=setInterval((function(){a.scrollTop()>0&&(oe(t,!0),e(document).scrollTop(a.position().top),clearInterval(i))}),50):(oe(t,!0),e(document).scrollTop(a.position().top)))}}(),o.hijackInternalLinks&&function(){if(e(document.body).data("jspHijack"))return;e(document.body).data("jspHijack",!0),e(document.body).delegate('a[href*="#"]',"click",(function(t){var i,o,n,s,r,a=this.href.substr(0,this.href.indexOf("#")),l=location.href;if(-1!==location.href.indexOf("#")&&(l=location.href.substr(0,location.href.indexOf("#"))),a===l){i=escape(this.href.substr(this.href.indexOf("#")+1));try{o=e("#"+i+', a[name="'+i+'"]')}catch(e){return}o.length&&((n=o.closest(".jspScrollable")).data("jsp").scrollToElement(o,!0),n[0].scrollIntoView&&(s=e(window).scrollTop(),((r=o.offset().top)<s||r>s+e(window).height())&&n[0].scrollIntoView()),t.preventDefault())}}))}()):(t.removeClass("jspScrollable"),n.css({top:0,left:0,width:a.width()-M}),a.unbind(E),n.find(":input,a").unbind("focus.jsp"),t.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),n.unbind(".jsp"),U()),o.autoReinitialise&&!Y?Y=setInterval((function(){V(o)}),o.autoReinitialiseDelay):!o.autoReinitialise&&Y&&clearInterval(Y),q&&t.scrollTop(0)&&te(q,!1),O&&t.scrollLeft(0)&&ie(O,!1),t.trigger("jsp-initialised",[f||u])}function G(){y.height(C+"px"),g=0,k=o.verticalGutter+y.outerWidth(),n.width(s-k-M);try{0===w.position().left&&n.css("margin-left",k+"px")}catch(e){}}function N(){a.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each((function(){P-=e(this).outerWidth()})),H.width(P+"px"),b=0}function K(e,t,i,o){var n,s="before",r="after";"os"==t&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==s?r=t:t==r&&(s=t,n=i,i=o,o=n),e[s](i)[r](o)}function Q(t,i,n){return function(){return function(t,i,n,s){n=e(n).addClass("jspActive");var r,a,l=!0,c=function(){0!==t&&R.scrollByX(t*o.arrowButtonSpeed),0!==i&&R.scrollByY(i*o.arrowButtonSpeed),a=setTimeout(c,l?o.initialDelay:o.arrowRepeatFreq),l=!1};c(),r=s?"mouseout.jsp":"mouseup.jsp",(s=s||e("html")).bind(r,(function(){n.removeClass("jspActive"),a&&clearTimeout(a),a=null,s.unbind(r)}))}(t,i,this,n),this.blur(),!1}}function U(){H&&H.unbind("mousedown.jsp"),y&&y.unbind("mousedown.jsp")}function $(){e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),h&&h.removeClass("jspActive"),v&&v.removeClass("jspActive")}function J(i,n){if(u){i<0?i=0:i>j&&(i=j);var s=new e.Event("jsp-will-scroll-y");if(t.trigger(s,[i]),!s.isDefaultPrevented()){var a=i||0,l=0===a,p=a==j,d=-(i/j)*(c-r);void 0===n&&(n=o.animateScroll),n?R.animate(h,"top",i,Z,(function(){t.trigger("jsp-user-scroll-y",[-d,l,p])})):(h.css("top",i),Z(i),t.trigger("jsp-user-scroll-y",[-d,l,p]))}}}function Z(e){void 0===e&&(e=h.position().top),a.scrollTop(0);var i=0===(g=e||0),s=g==j,l=-(e/j)*(c-r);I==i&&L==s||(I=i,L=s,t.trigger("jsp-arrow-change",[I,L,F,q])),function(e,t){o.showArrows&&(B[e?"addClass":"removeClass"]("jspDisabled"),D[t?"addClass":"removeClass"]("jspDisabled"))}(i,s),n.css("top",l),t.trigger("jsp-scroll-y",[-l,i,s]).trigger("scroll")}function _(i,n){if(f){i<0?i=0:i>m&&(i=m);var r=new e.Event("jsp-will-scroll-x");if(t.trigger(r,[i]),!r.isDefaultPrevented()){var a=i||0,c=0===a,p=a==m,d=-(i/m)*(l-s);void 0===n&&(n=o.animateScroll),n?R.animate(v,"left",i,ee,(function(){t.trigger("jsp-user-scroll-x",[-d,c,p])})):(v.css("left",i),ee(i),t.trigger("jsp-user-scroll-x",[-d,c,p]))}}}function ee(e){void 0===e&&(e=v.position().left),a.scrollTop(0);var i=0===(b=e||0),r=b==m,c=-(e/m)*(l-s);F==i&&q==r||(F=i,q=r,t.trigger("jsp-arrow-change",[I,L,F,q])),function(e,t){o.showArrows&&(A[e?"addClass":"removeClass"]("jspDisabled"),W[t?"addClass":"removeClass"]("jspDisabled"))}(i,r),n.css("left",c),t.trigger("jsp-scroll-x",[-c,i,r]).trigger("scroll")}function te(e,t){J(e/(c-r)*j,t)}function ie(e,t){_(e/(l-s)*m,t)}function oe(t,i,n){var l,c,p,d,u,f,h,j,g,v=0,m=0;try{l=e(t)}catch(e){return}for(c=l.outerHeight(),p=l.outerWidth(),a.scrollTop(0),a.scrollLeft(0);!l.is(".jspPane");)if(v+=l.position().top,m+=l.position().left,l=l.offsetParent(),/^body|html$/i.test(l[0].nodeName))return;f=(d=se())+r,v<d||i?j=v-o.horizontalGutter:v+c>f&&(j=v-r+c+o.horizontalGutter),isNaN(j)||te(j,n),h=(u=ne())+s,m<u||i?g=m-o.horizontalGutter:m+p>h&&(g=m-s+p+o.horizontalGutter),isNaN(g)||ie(g,n)}function ne(){return-n.position().left}function se(){return-n.position().top}function re(){return!1}"border-box"===t.css("box-sizing")?(z=0,M=0):(z=t.css("paddingTop")+" "+t.css("paddingRight")+" "+t.css("paddingBottom")+" "+t.css("paddingLeft"),M=(parseInt(t.css("paddingLeft"),10)||0)+(parseInt(t.css("paddingRight"),10)||0)),e.extend(R,{reinitialise:function(t){V(t=e.extend({},o,t))},scrollToElement:function(e,t,i){oe(e,t,i)},scrollTo:function(e,t,i){ie(e,i),te(t,i)},scrollToX:function(e,t){ie(e,t)},scrollToY:function(e,t){te(e,t)},scrollToPercentX:function(e,t){ie(e*(l-s),t)},scrollToPercentY:function(e,t){te(e*(c-r),t)},scrollBy:function(e,t,i){R.scrollByX(e,i),R.scrollByY(t,i)},scrollByX:function(e,t){_((ne()+Math[e<0?"floor":"ceil"](e))/(l-s)*m,t)},scrollByY:function(e,t){J((se()+Math[e<0?"floor":"ceil"](e))/(c-r)*j,t)},positionDragX:function(e,t){_(e,t)},positionDragY:function(e,t){J(e,t)},animate:function(e,t,i,n,s){var r={};r[t]=i,e.animate(r,{duration:o.animateDuration,easing:o.animateEase,queue:!1,step:n,complete:s})},getContentPositionX:function(){return ne()},getContentPositionY:function(){return se()},getContentWidth:function(){return l},getContentHeight:function(){return c},getPercentScrolledX:function(){return ne()/(l-s)},getPercentScrolledY:function(){return se()/(c-r)},getIsScrollableH:function(){return f},getIsScrollableV:function(){return u},getContentPane:function(){return n},scrollToBottom:function(e){J(j,e)},hijackInternalLinks:e.noop,destroy:function(){var e,i;e=se(),i=ne(),t.removeClass("jspScrollable").unbind(".jsp"),n.unbind(".jsp"),t.replaceWith(O.append(n.children())),O.scrollTop(e),O.scrollLeft(i),Y&&clearInterval(Y)}}),V(i)}return t=e.extend({},e.fn.jScrollPane.defaults,t),e.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],(function(){t[this]=t[this]||t.speed})),this.each((function(){var o=e(this),n=o.data("jsp");n?n.reinitialise(t):(e("script",o).filter('[type="text/javascript"],:not([type])').remove(),n=new i(o,t),o.data("jsp",n))}))},e.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}}));