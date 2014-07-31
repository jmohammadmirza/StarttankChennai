var __hasProp={}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};(function(a){var b;if((b=a.plugin)!=null?!b.socialbar:!void 0)a.Plugin.SocialbarV1=function(b){function c(){c.__super__.constructor.call(this),this.pluginName="socialbar-v1"}return __extends(c,b),c.prototype.init=function(b,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=this;c.__super__.init.call(this,b,d),this.target=this.playlist||this.video,f=this.target.params,j=location.protocol==="https:"?"https:":"http:",this.params=a.extend({includeLinkback:!1,badgeUrl:"http://wistia.com",badgeImage:""+j+"//fast.wistia.com/images/badges/wistia_100x96_black.png",buttons:"",position:"below",tweetText:"{default}",uuid:a.seqId("wistia_","_socialbar"),pageUrl:d.pageUrl||f.canonicalUrl||((n=f.videoOptions)!=null?n.pageUrl:void 0)||f.pageUrl||location.href,pageTitle:d.pageTitle||f.canonicalTitle||((o=f.videoOptions)!=null?o.pageTitle:void 0)||f.pageTitle||document.title,ignoreQueryParams:!0,downloadType:"sd_mp4",height:((p=b.options)!=null?p.version:void 0)==="v2"?23:null},this.options),this.params.tweetText!=="{default}"&&this.updateTweetText(this.params.tweetText);if((q=this.video)!=null?(r=q.data)!=null?r.media:void 0:void 0)this.params.badgeImage=a.remote.assetUrlWithCorrectHost(this.video.data.media,this.params.badgeImage);(s=this.video)!=null&&s.hasData(function(){if(!u.params.pageTitle)return u.params.pageTitle=u.video.name()}),this.uuid=this.params.uuid,this.options.container?this.container=document.getElementById(this.options.container):this.container=b.grid[this.params.position],typeof this.params.buttons=="string"?this.buttons=this.params.buttons.split("-"):this.params.buttons instanceof Array?this.buttons=this.params.buttons:(this.buttons=function(){var a,b;a=this.params.buttons,b=[];for(e in a)i=a[e],i&&b.push(e);return b}.call(this),this.buttons=this.buttons.sort(function(a,b){return u.buttonOrder()[a]-u.buttonOrder()[b]})),this.params.logo&&this.buttons.unshift("wistia"),this.params.ignoreQueryParams&&!d.pageUrl&&!f.canonicalUrl&&(this.params.pageUrl=this.params.pageUrl.replace(/\?.*/,"")),k=this.params.uuid,h=encodeURIComponent(this.params.pageUrl),g=encodeURIComponent(this.params.pageTitle),this.elem=document.createElement("div"),this.elem.id=k,this.elem.className="wistia_socialbar",this.params.height&&(this.elem.style.height=""+this.params.height+"px"),this.container.appendChild(this.elem),this.refreshCss();if(this.video)this.video.hasData(function(){var a,b,c,d;c=u.buttons,d=[];for(a=0,b=c.length;a<b;a++)e=c[a],d.push(u.addButton(e));return d});else{t=this.buttons;for(l=0,m=t.length;l<m;l++)e=t[l],this.addButton(e)}return this.video?this.video.hasData(function(){return u.fit()}):this.fit(),this._onEnterFullscreen=function(){return u.elem.style.display="none",u.fit()},this.target.bind("enter-fullscreen",this._onEnterFullscreen),this._onCancelFullscreen=function(){return u.elem.style.display="block",u.fit()},this.target.bind("cancel-fullscreen",this._onCancelFullscreen),this.register(this)},c.prototype.fit=function(){return a.grid.fitVertical(this.target),a.grid.fitHorizontal(this.target)},c.prototype.height=function(){return this.elem?a.elem.height(this.elem):0},c.prototype.updateTweetText=function(a){var b;return this.params.tweetText=a.replace("{video_name}",((b=this.video)!=null?b.name():void 0)||"").replace("{page_title}",this.params.pageTitle)},c.prototype.addButton=function(b,c){var d,e,f,g,h;return c==null&&(c={}),this.isValidButton(b)&&(f=document.createElement("div"),f.className="socialbar_container",f.id=""+this.uuid+"_"+b+"_container",f.innerHTML=this.buttonCode()[b](),c.before?(e=this.buttonElem(c.before),a.elem.before(e,f)):c.after?(d=this.buttonElem(c.after),a.elem.after(d,f)):c.autoSort?(g=this.lastEnabledButtonBefore(b),this.buttonOrder()[b]===1?a.elem.prepend(this.elem,f):g?(h=this.buttonElem(g),a.elem.after(h,f)):a.elem.append(this.elem,f)):a.elem.append(this.elem,f),this.buttonScript()[b]()),this},c.prototype.removeButton=function(b){var c,d;return c=this.buttonElem(b),c&&(c.parentNode.removeChild(c),a.detect.browser.msie&&/iframe/i.test(c.childNodes[0].tagName)&&(d=c.childNodes[0],d.src="javascript:false",c.removeChild(d),d=null),c=null),b==="linkedIn"&&(window.IN=null),this},c.prototype.hasButton=function(a){return!!this.buttonElem(a)},c.prototype.buttonElem=function(a){return document.getElementById(""+this.uuid+"_"+a+"_container")},c.prototype.buttonIndex=function(a){var b,c,d,e,f;c=0,f=this.buttons;for(d=0,e=f.length;d<e;d++){b=f[d];if(b===a)return c;c++}return-1},c.prototype.isValidButton=function(a){return this.buttonCode()[a]!=null},c.prototype.remove=function(b){var d,e,f,g,h;b==null&&(b={}),this.target.unbind("enter-fullscreen",this._onEnterFullscreen),this.target.unbind("cancel-fullscreen",this._onCancelFullscreen),a.clearTimeouts(""+this.target.uuid+"."+this.pluginName+"."+this.uuid),h=this.buttons;for(f=0,g=h.length;f<g;f++)d=h[f],this.removeButton(d);return this.elem!=null&&(e=this.elem.parentNode)!=null&&(e.removeChild(this.elem),this.elem=null),c.__super__.remove.call(this,b)},c.prototype.refreshCss=function(){this.styleElem&&this.styleElem.parentNode&&(this.styleElem.parentNode.removeChild(this.styleElem),this.styleElem=null),this.styleElem=a.util.addInlineCss(this.elem,this.css())},c.prototype.buttonCode=function(){var a,b,c,d=this;return c=location.protocol==="https:"?"https:":"http:",b=encodeURIComponent(this.params.pageUrl),a=encodeURIComponent(this.params.pageTitle),{embed:function(){return'<a href="#" id="'+d.uuid+'_embed" class="socialbar_button">&nbsp;</a>\n<input type="text" id="'+d.uuid+'_embed_input" readonly="readonly" />'},videoStats:function(){return'<a href="#" id="'+d.uuid+'_videoStats" class="socialbar_button" target="_blank">&nbsp;</a>'},digg:function(){return'<div id="'+d.uuid+'_digg" class="socialbar_button">\n<a href="http://digg.com/submit?url='+b+'" class="DiggThisButton DiggCompact">&nbsp;</a>\n</div>'},twitter:function(){return('<iframe\nid="'+d.uuid+'_twitter"\nclass="socialbar_button"\nallowtransparency="true"\nframeborder="0"\nscrolling="no"\nsrc="'+c+"//platform.twitter.com/widgets/tweet_button.html?url="+b+"&count="+(d.params.showTweetCount?"horizontal":"none")+(d.params.tweetText==="{default}"?"&text="+a:"&text="+encodeURIComponent(d.params.tweetText))+'"\n></iframe>').replace(/\n/g," ")},facebook:function(){return'<div id="'+d.uuid+'_facebook" class="socialbar_button"></div>'},googlePlus:function(){return'<div id="'+d.uuid+'_googlePlus" class="socialbar_button"></div>'},stumbleUpon:function(){return('<iframe\nid="'+d.uuid+'_stumbleUpon"\nclass="socialbar_button"\nallowtransparency="true"\nframeborder="0"\nscrolling="no"\nframeborder="0"\nsrc="http://badge.stumbleupon.com/badge/embed/1/'+(b?"?url="+b:"")+'"\n></iframe>').replace(/\n/g," ")},linkedIn:function(){return'<div id="'+d.uuid+'_linkedIn" class="socialbar_button">\n</div>'},reddit:function(){return('<iframe\nid="'+d.uuid+'_reddit"\nclass="socialbar_button"\nallowtransparency="true"\nframeborder="0"\nscrolling="no"\nframeborder="0"\nsrc="http://www.reddit.com/static/button/button1.html?width=58&url='+b+'"\n></iframe>').replace(/\n/g," ")},tumblr:function(){return'<a href="http://www.tumblr.com/share/link?" id="'+d.uuid+'_tumblr" class="socialbar_button" title="Share on Tumblr">Share on Tumblr</a>'},email:function(){return'<a href="mailto:?subject='+a+"&body="+b+'" id="'+d.uuid+'_email" class="socialbar_button">&nbsp;</a>'},download:function(){return'<a href="#" id="'+d.uuid+'_download" class="socialbar_button">&nbsp;</a>'},wistia:function(){return'<a href="'+d.params.badgeUrl+'" id="'+d.uuid+'_wistia" class="socialbar_button" target="_blank"><img src="'+(d.params.logoImage||d.params.badgeImage)+'" border="0" alt="" /></a>'},playCount:function(){return'<div id="'+d.uuid+'_play_count" class="socialbar_button">\n  <div class="wistia_play_count_label">\n    Plays\n  </div><div class="wistia_play_count_box"></div>\n</div>'}}},c.prototype.buttonScript=function(){var b,c,d,e,f,g=this;return e=location.protocol==="https:"?"https:":"http:",c=encodeURIComponent(this.params.pageUrl),b=encodeURIComponent(this.params.pageTitle),f=function(b,c){return a.remote.script(b,function(){return c&&c(),a.timeout(""+g.target.uuid+"."+g.pluginName+"."+g.uuid+"."+a.seqId("fit_after_script"),function(){return g.fit()},500)})},d={pageUrl:this.params.pageUrl,pageTitle:this.params.pageTitle},{embed:function(){var a,b;a=document.getElementById(""+g.uuid+"_embed"),b=document.getElementById(""+g.uuid+"_embed_input"),g.target.ready(function(){return b.value=g.iframeEmbedCode(d).replace(/\n/g,"")}),a&&(a.onclick=function(){return b.className==="visible"?b.className="":(b.className="visible",b.focus(),b.select()),!1},b.onclick=function(){return b.select(),!1})},videoStats:function(){var a;a=document.getElementById(""+g.uuid+"_videoStats"),a.setAttribute("href",""+e+"//app.wistia.com/stats/"+g.target.hashedId())},digg:function(){f("http://widgets.digg.com/buttons.js")},twitter:function(){return g.refreshCss()},facebook:function(){return a.timeout(""+g.target.uuid+"."+g.pluginName+"."+g.uuid+".init_facebook",function(){return document.getElementById(""+g.uuid+"_facebook").innerHTML=('<iframe\nid="'+g.uuid+'_facebook"\nclass="socialbar_button"\nallowtransparency="true"\nframeborder="0"\nscrolling="no"\nsrc="'+e+"//www.facebook.com/plugins/like.php?href="+c+'&layout=button_count&show_faces=true&width=150&action=like&font=verdana&colorscheme=light&height=21"\n></iframe>').replace(/\n/g," ")})},googlePlus:function(){var a;a=document.createElement("g:plusone"),a.setAttribute("size","medium"),a.setAttribute("annotation","none"),a.setAttribute("href",g.params.pageUrl),document.getElementById(""+g.uuid+"_googlePlus").appendChild(a),f("https://apis.google.com/js/plusone.js")},stumbleUpon:function(){},linkedIn:function(){var a,b;b=document.getElementById(""+g.uuid+"_linkedIn"),a=document.createElement("script"),a.type="IN/Share",a.setAttribute("data-url",g.params.pageUrl),a.setAttribute("data-counter","right"),b.appendChild(a),f(""+e+"//platform.linkedin.com/in.js",function(){return window.IN.init()})},reddit:function(){},tumblr:function(){f("http://platform.tumblr.com/v1/share.js"),g.target.ready(function(){var a;a=document.getElementById(""+g.uuid+"_tumblr"),a.setAttribute("href",a.getAttribute("href")+("name="+b+"&url="+c+"&description="+encodeURIComponent(g.iframeEmbedCode(d))+"&caption="+b))})},email:function(){},download:function(){return g.video.ready(function(){var b,c,d,e;return g.params.downloadType==="sd_mp4"?b=g.video.data.media.assets.iphone:g.params.downloadType==="hd_mp4"&&g.video.data.media.assets.hdmp4?b=g.video.data.media.assets.hdmp4:g.params.downloadType==="original"&&g.video.data.media.assets.original?b=g.video.data.media.assets.original:b=g.video.data.media.assets.iphone,e=""+a.util.unescapeHtml(g.video.name())+"."+b.ext,d=""+b.url+"?filename="+encodeURIComponent(e)+"&disposition=attachment",c=document.getElementById(""+g.uuid+"_download"),c.setAttribute("href",d)})},wistia:function(){var b;return b=document.getElementById(""+g.uuid+"_wistia").childNodes[0],b.onload=function(){return a.grid.fit(g.target,g.params.position)}},playCount:function(){return a.remote.fetch("//"+a.constant.embedHost+"/embed/stats/"+g.video.hashedId(),{bust:"20131018e"},function(a){var b,c;if((a!=null?a.play_count:void 0)!=null)return b=a.play_count,b<1e3||(b<1e5?b=(""+(b/1e3).toFixed(1)+"K").replace(/\.0K$/,"K"):b<1e6?b=""+(b/1e3).toFixed(0)+"K":b<1e7?b=(""+(b/1e6).toFixed(2)+"M").replace(/(\.00M|0M)$/,"M"):b=(""+(b/1e6).toFixed(1)+"M").replace(/(\.0M)$/,"M")),c=document.getElementById(""+g.uuid+"_play_count"),c.innerHTML='<div class="wistia_play_count_label">Plays</div><div class="wistia_play_count_box">'+b+"</div>"})}}},c.prototype.buttonOrder=function(){return{playCount:1,embed:2,email:3,videoStats:4,download:5,twitter:6,reddit:7,tumblr:8,stumbleUpon:9,linkedIn:10,googlePlus:11,facebook:12,wistia:13}},c.prototype.lastEnabledButtonBefore=function(a){var b,c,d,e;c=null,e=this.buttonOrder();for(b in e){d=e[b];if(b===a)return c;this.hasButton(b)&&(c=b)}return c},c.prototype.css=function(){var b;return b=location.protocol==="https:"?"https:":"http:","#"+this.uuid+" {\ndisplay: block;\nheight: "+(this.params.height?""+this.params.height+"px":"auto")+";\nline-height: 22px;\nmargin: 0;\noverflow: hidden;\npadding: 3px 0 0 0;\nposition: static;\ntext-align: left;\n}\n#"+this.uuid+" img {\nborder: 0;\nmargin:0;\npadding:0;\nvertical-align:"+(/above|top/.test(this.params.position)?"middle":"top")+";\n}\n#"+this.uuid+" .socialbar_container {\ndisplay:inline;\n}\n#"+this.uuid+" .socialbar_button {\nborder: 0;\nborder-radius: 0;\ndisplay: inline-block;\n*display: inline;\nmargin: 0 8px 2px 0;\npadding: 0;\nposition: static;\nvertical-align: top;\nzoom: 1;\n}\n#"+this.uuid+"_embed_input {\nborder: 1px solid #ccc !important;\ncolor: #444;\ndisplay: none;\nfont-size: 10px;\nheight: 18px;\nline-height:18px;\nmargin:0 4px 0 0;\npadding: 0 !important;\nwidth: 120px;\n}\n#"+this.uuid+"_embed_input.visible {\ndisplay: inline-block;\n*display: inline;\nvertical-align: top;\nzoom:1;\n}\n#"+this.uuid+"_email {\nbackground: url("+b+"//"+a.remote.embedHost()+"/socialbar/images/socialbuttons_sprite.png) -63px 0;\nheight: 20px;\ntext-decoration:none !important;\nwidth: 57px;\n}\n#"+this.uuid+"_email:hover {\nbackground-position:-63px -20px;\n}\n#"+this.uuid+"_email:active {\nbackground-position:-63px -40px;\n}\n#"+this.uuid+"_download {\nbackground: url("+b+"//"+a.remote.embedHost()+"/socialbar/images/socialbuttons_sprite.png?bust=20121107) -175px 0;\nheight: 20px;\ntext-decoration:none !important;\nwidth: 80px;\n}\n#"+this.uuid+"_download:hover {\nbackground-position:-175px -20px;\n}\n#"+this.uuid+"_download:active {\nbackground-position:-175px -40px;\n}\n#"+this.uuid+"_embed {\nbackground: url("+b+"//"+a.remote.embedHost()+"/socialbar/images/socialbuttons_sprite.png);\nheight: 20px;\ntext-decoration:none !important;\nwidth: 63px;\n}\n#"+this.uuid+"_embed:hover {\nbackground-position:0 -20px;\n}\n#"+this.uuid+"_embed:active {\nbackground-position:0 -40px;\n}\n#"+this.uuid+"_videoStats {\nbackground: url("+b+"//"+a.remote.embedHost()+"/socialbar/images/socialbuttons_sprite.png) -120px 0;\nheight: 20px;\ntext-decoration:none !important;\nwidth: 55px;\n}\n#"+this.uuid+"_videoStats:hover {\nbackground-position:-120px -20px;\n}\n#"+this.uuid+"_videoStats:active {\nbackground-position:-120px -40px;\n}\n#"+this.uuid+"_facebook {\nheight:21px;\nwidth:150px;\n}\n#"+this.uuid+"_twitter {\nheight:20px;\nwidth:"+(this.params.showTweetCount?"90px":"56px")+";\n}\n#"+this.uuid+"_googlePlus {\nheight:23px;\nwidth:32px;\n}\n#"+this.uuid+"_digg {\nheight:23px;\nwidth:76px;\n}\n#"+this.uuid+"_reddit {\nheight:22px;\nmargin-top:1px;\nwidth:58px;\n}\n#"+this.uuid+"_stumbleUpon {\nheight:18px;\nwidth:74px;\n}\n#"+this.uuid+"_tumblr {\nbackground:url('http://platform.tumblr.com/v1/share_1.png') 0 0 no-repeat transparent;\nheight:20px;\noverflow:hidden;\ntext-indent:-9999px;\nwidth:81px;\n}\n#"+this.uuid+"_linkedIn {\nheight:21px;\n}\n#"+this.uuid+" #"+this.uuid+"_wistia {\nfloat:right;\nmargin-right:0;\n}\n#"+this.uuid+" #"+this.uuid+"_play_count .wistia_play_count_label {\ndisplay: inline-block;\n*display: inline;\nfont-family: verdana, sans-serif;\nfont-size: 12px;\nmargin-right: 5px;\nvertical-align: top;\nzoom: 1;\n}\n#"+this.uuid+" #"+this.uuid+"_play_count .wistia_play_count_box {\nbackground: #fff;\nborder: solid #c9c9c9 1px;\ncolor: #555;\ndisplay: inline-block;\n*display: inline;\nfont-family: verdana, sans-serif;\nfont-size: 11px;\nletter-spacing: 1px;\nline-height: 11px;\nmargin-top: 1px;\nmin-height: 11px;\nmin-width: 15px;\npadding: 2px 6px 3px 6px;\ntext-align: center;\ntext-decoration: none;\ntext-shadow: 0px 1px 1px #ffffff;\nvertical-align: top;\nzoom: 1;\n}"},c.prototype.iframeEmbedCode=function(b){var c,d,e,f,g,h,i,j,k,l,m;b==null&&(b={}),h=a._playlist&&this.target.playlist,l=a.extend({},this.target.data),j=a.extend({},this.target.options),h?m=a.url.parse("http://"+a.remote.externalEmbedHost()+"/embed/playlists/"+this.target.hashedId()):m=a.url.parse("http://"+a.remote.externalEmbedHost()+"/embed/iframe/"+this.target.hashedId()),m.params=a.extend({},this.target.options),m.params.container!=null&&delete m.params.container,m.params.pageUrl!=null&&delete m.params.pageUrl,m.params.pageTitle!=null&&delete m.params.pageTitle,m.params.trackEmail!=null&&delete m.params.trackEmail;if(this.target.options.version==="v2"||this.params._noEmbedOptions)m.params={};return k={},a.obj.eachLeaf(m.params,function(b,c){var d,e,f,g;d=!1;for(f=0,g=c.length;f<g;f++)e=c[f],/^_/.test(e)&&(d=!0);if(!d)return a.obj.set(k,c,b)}),m.params=k,j.canonicalUrl||(m.params.canonicalUrl=b.pageUrl||this.target.params.pageUrl||location.href),j.canonicalTitle||(m.params.canonicalTitle=b.pageTitle||this.target.params.pageTitle||document.title),h&&(a.obj.unset(this.target,"options.videoOptions.canonicalUrl"),a.obj.unset(this.target,"options.videoOptions.canonicalTitle")),d=this.target.width()-this.target.videoWidth(),c=this.target.height()-this.target.videoHeight(),g=480+d,h?f=Math.round((g-d)/this.target.aspectRatio()+c):f=Math.round((g-d)/this.target.aspect()+c),e={tagName:"iframe","class":h?"wistia_playlist":"wistia_embed",name:h?"wistia_playlist":"wistia_embed",src:m.absolute(),allowtransparency:!0,frameborder:0,scrolling:"no",width:g,height:f},k=a.generate.html(e),this.params.includeLinkback&&(i={tagName:"a","class":"wistia-linkback",href:this.params.pageUrl,childNodes:[this.params.pageTitle]},k+="<br/>"+a.generate.html(i)),k},c}(a.Plugin.Base),a.plugin.socialbar=function(b,c){return a.plugin._init("socialbarV1",b,c)};return a.plugin("socialbar-v1",a.plugin.socialbar)})(Wistia)