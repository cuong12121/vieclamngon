(function(window, document, $, undefined) {
	"use strict";
	window.console = window.console || {
		info: function(stuff) {}
	};
	if (!$) {
		return;
	}
	if ($.fn.fancybox) {
		console.info("fancyBox already initialized");
		return;
	}
	var defaults = {
		closeExisting: false,
		loop: false,
		gutter: 50,
		keyboard: true,
		preventCaptionOverlap: true,
		arrows: true,
		infobar: true,
		smallBtn: "auto",
		toolbar: "auto",
		buttons: ["zoom", "slideShow", "thumbs", "close"],
		idleTime: 3,
		protect: false,
		modal: false,
		image: {
			preload: false
		},
		ajax: {
			settings: {
				data: {
					fancybox: true
				}
			}
		},
		iframe: {
			tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
			preload: true,
			css: {},
			attr: {
				scrolling: "auto"
			}
		},
		video: {
			tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
			format: "",
			autoStart: true
		},
		defaultType: "image",
		animationEffect: "zoom",
		animationDuration: 366,
		zoomOpacity: "auto",
		transitionEffect: "fade",
		transitionDuration: 366,
		slideClass: "",
		baseClass: "",
		baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' + "</div>" + "</div>",
		spinnerTpl: '<div class="fancybox-loading"></div>',
		errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
		btnTpl: {
			download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
			zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
			close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
			arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
			arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
			smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
		},
		parentEl: "body",
		hideScrollbar: true,
		autoFocus: true,
		backFocus: true,
		trapFocus: true,
		fullScreen: {
			autoStart: false
		},
		touch: {
			vertical: true,
			momentum: true
		},
		hash: null,
		media: {},
		slideShow: {
			autoStart: false,
			speed: 3000
		},
		thumbs: {
			autoStart: false,
			hideOnClose: true,
			parentEl: ".fancybox-container",
			axis: "y"
		},
		wheel: "auto",
		onInit: $.noop,
		beforeLoad: $.noop,
		afterLoad: $.noop,
		beforeShow: $.noop,
		afterShow: $.noop,
		beforeClose: $.noop,
		afterClose: $.noop,
		onActivate: $.noop,
		onDeactivate: $.noop,
		clickContent: function(current, event) {
			return current.type === "image" ? "zoom" : false;
		},
		clickSlide: "close",
		clickOutside: "close",
		dblclickContent: false,
		dblclickSlide: false,
		dblclickOutside: false,
		mobile: {
			preventCaptionOverlap: false,
			idleTime: false,
			clickContent: function(current, event) {
				return current.type === "image" ? "toggleControls" : false;
			},
			clickSlide: function(current, event) {
				return current.type === "image" ? "toggleControls" : "close";
			},
			dblclickContent: function(current, event) {
				return current.type === "image" ? "zoom" : false;
			},
			dblclickSlide: function(current, event) {
				return current.type === "image" ? "zoom" : false;
			}
		},
		lang: "en",
		i18n: {
			en: {
				CLOSE: "Close",
				NEXT: "Next",
				PREV: "Previous",
				ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
				PLAY_START: "Start slideshow",
				PLAY_STOP: "Pause slideshow",
				FULL_SCREEN: "Full screen",
				THUMBS: "Thumbnails",
				DOWNLOAD: "Download",
				SHARE: "Share",
				ZOOM: "Zoom"
			},
			de: {
				CLOSE: "Schlie&szlig;en",
				NEXT: "Weiter",
				PREV: "Zur&uuml;ck",
				ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
				PLAY_START: "Diaschau starten",
				PLAY_STOP: "Diaschau beenden",
				FULL_SCREEN: "Vollbild",
				THUMBS: "Vorschaubilder",
				DOWNLOAD: "Herunterladen",
				SHARE: "Teilen",
				ZOOM: "Vergr&ouml;&szlig;ern"
			}
		}
	};
	var $W = $(window);
	var $D = $(document);
	var called = 0;
	var isQuery = function(obj) {
		return obj && obj.hasOwnProperty && obj instanceof $;
	};
	var requestAFrame = (function() {
		return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000 / 60);
		});
	})();
	var cancelAFrame = (function() {
		return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
			window.clearTimeout(id);
		});
	})();
	var transitionEnd = (function() {
		var el = document.createElement("fakeelement"),
			t;
		var transitions = {
			transition: "transitionend",
			OTransition: "oTransitionEnd",
			MozTransition: "transitionend",
			WebkitTransition: "webkitTransitionEnd"
		};
		for (t in transitions) {
			if (el.style[t] !== undefined) {
				return transitions[t];
			}
		}
		return "transitionend";
	})();
	var forceRedraw = function($el) {
		return $el && $el.length && $el[0].offsetHeight;
	};
	var mergeOpts = function(opts1, opts2) {
		var rez = $.extend(true, {}, opts1, opts2);
		$.each(opts2, function(key, value) {
			if ($.isArray(value)) {
				rez[key] = value;
			}
		});
		return rez;
	};
	var inViewport = function(elem) {
		var elemCenter, rez;
		if (!elem || elem.ownerDocument !== document) {
			return false;
		}
		$(".fancybox-container").css("pointer-events", "none");
		elemCenter = {
			x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
			y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
		};
		rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
		$(".fancybox-container").css("pointer-events", "");
		return rez;
	};
	var FancyBox = function(content, opts, index) {
		var self = this;
		self.opts = mergeOpts({
			index: index
		}, $.fancybox.defaults);
		if ($.isPlainObject(opts)) {
			self.opts = mergeOpts(self.opts, opts);
		}
		if ($.fancybox.isMobile) {
			self.opts = mergeOpts(self.opts, self.opts.mobile);
		}
		self.id = self.opts.id || ++called;
		self.currIndex = parseInt(self.opts.index, 10) || 0;
		self.prevIndex = null;
		self.prevPos = null;
		self.currPos = 0;
		self.firstRun = true;
		self.group = [];
		self.slides = {};
		self.addContent(content);
		if (!self.group.length) {
			return;
		}
		self.init();
	};
	$.extend(FancyBox.prototype, {
		init: function() {
			var self = this,
				firstItem = self.group[self.currIndex],
				firstItemOpts = firstItem.opts,
				$container, buttonStr;
			if (firstItemOpts.closeExisting) {
				$.fancybox.close(true);
			}
			$("body").addClass("fancybox-active");
			if (!$.fancybox.getInstance() && firstItemOpts.hideScrollbar !== false && !$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
				$("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
					(window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");
				$("body").addClass("compensate-for-scrollbar");
			}
			buttonStr = "";
			$.each(firstItemOpts.buttons, function(index, value) {
				buttonStr += firstItemOpts.btnTpl[value] || "";
			});
			$container = $(self.translate(self, firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr("id", "fancybox-container-" + self.id).addClass(firstItemOpts.baseClass).data("FancyBox", self).appendTo(firstItemOpts.parentEl);
			self.$refs = {
				container: $container
			};
			["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
				self.$refs[item] = $container.find(".fancybox-" + item);
			});
			self.trigger("onInit");
			self.activate();
			self.jumpTo(self.currIndex);
		},
		translate: function(obj, str) {
			var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
			return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
				return arr[n] === undefined ? match : arr[n];
			});
		},
		addContent: function(content) {
			var self = this,
				items = $.makeArray(content),
				thumbs;
			$.each(items, function(i, item) {
				var obj = {},
					opts = {},
					$item, type, found, src, srcParts;
				if ($.isPlainObject(item)) {
					obj = item;
					opts = item.opts || item;
				} else if ($.type(item) === "object" && $(item).length) {
					$item = $(item);
					opts = $item.data() || {};
					opts = $.extend(true, {}, opts, opts.options);
					opts.$orig = $item;
					obj.src = self.opts.src || opts.src || $item.attr("href");
					if (!obj.type && !obj.src) {
						obj.type = "inline";
						obj.src = item;
					}
				} else {
					obj = {
						type: "html",
						src: item + ""
					};
				}
				obj.opts = $.extend(true, {}, self.opts, opts);
				if ($.isArray(opts.buttons)) {
					obj.opts.buttons = opts.buttons;
				}
				if ($.fancybox.isMobile && obj.opts.mobile) {
					obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
				}
				type = obj.type || obj.opts.type;
				src = obj.src || "";
				if (!type && src) {
					if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
						type = "video";
						if (!obj.opts.video.format) {
							obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
						}
					} else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
						type = "image";
					} else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
						type = "iframe";
						obj = $.extend(true, obj, {
							contentType: "pdf",
							opts: {
								iframe: {
									preload: false
								}
							}
						});
					} else if (src.charAt(0) === "#") {
						type = "inline";
					}
				}
				if (type) {
					obj.type = type;
				} else {
					self.trigger("objectNeedsType", obj);
				}
				if (!obj.contentType) {
					obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
				}
				obj.index = self.group.length;
				if (obj.opts.smallBtn == "auto") {
					obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
				}
				if (obj.opts.toolbar === "auto") {
					obj.opts.toolbar = !obj.opts.smallBtn;
				}
				obj.$thumb = obj.opts.$thumb || null;
				if (obj.opts.$trigger && obj.index === self.opts.index) {
					obj.$thumb = obj.opts.$trigger.find("img:first");
					if (obj.$thumb.length) {
						obj.opts.$orig = obj.opts.$trigger;
					}
				}
				if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
					obj.$thumb = obj.opts.$orig.find("img:first");
				}
				if (obj.$thumb && !obj.$thumb.length) {
					obj.$thumb = null;
				}
				obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
				if ($.type(obj.opts.caption) === "function") {
					obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
				}
				if ($.type(self.opts.caption) === "function") {
					obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
				}
				if (!(obj.opts.caption instanceof $)) {
					obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
				}
				if (obj.type === "ajax") {
					srcParts = src.split(/\s+/, 2);
					if (srcParts.length > 1) {
						obj.src = srcParts.shift();
						obj.opts.filter = srcParts.shift();
					}
				}
				if (obj.opts.modal) {
					obj.opts = $.extend(true, obj.opts, {
						trapFocus: true,
						infobar: 0,
						toolbar: 0,
						smallBtn: 0,
						keyboard: 0,
						slideShow: 0,
						fullScreen: 0,
						thumbs: 0,
						touch: 0,
						clickContent: false,
						clickSlide: false,
						clickOutside: false,
						dblclickContent: false,
						dblclickSlide: false,
						dblclickOutside: false
					});
				}
				self.group.push(obj);
			});
			if (Object.keys(self.slides).length) {
				self.updateControls();
				thumbs = self.Thumbs;
				if (thumbs && thumbs.isActive) {
					thumbs.create();
					thumbs.focus();
				}
			}
		},
		addEvents: function() {
			var self = this;
			self.removeEvents();
			self.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
				e.stopPropagation();
				e.preventDefault();
				self.close(e);
			}).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
				e.stopPropagation();
				e.preventDefault();
				self.previous();
			}).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
				e.stopPropagation();
				e.preventDefault();
				self.next();
			}).on("click.fb", "[data-fancybox-zoom]", function(e) {
				self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
			});
			$W.on("orientationchange.fb resize.fb", function(e) {
				if (e && e.originalEvent && e.originalEvent.type === "resize") {
					if (self.requestId) {
						cancelAFrame(self.requestId);
					}
					self.requestId = requestAFrame(function() {
						self.update(e);
					});
				} else {
					if (self.current && self.current.type === "iframe") {
						self.$refs.stage.hide();
					}
					setTimeout(function() {
						self.$refs.stage.show();
						self.update(e);
					}, $.fancybox.isMobile ? 600 : 250);
				}
			});
			$D.on("keydown.fb", function(e) {
				var instance = $.fancybox ? $.fancybox.getInstance() : null,
					current = instance.current,
					keycode = e.keyCode || e.which;
				if (keycode == 9) {
					if (current.opts.trapFocus) {
						self.focus(e);
					}
					return;
				}
				if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
					return;
				}
				if (keycode === 8 || keycode === 27) {
					e.preventDefault();
					self.close(e);
					return;
				}
				if (keycode === 37 || keycode === 38) {
					e.preventDefault();
					self.previous();
					return;
				}
				if (keycode === 39 || keycode === 40) {
					e.preventDefault();
					self.next();
					return;
				}
				self.trigger("afterKeydown", e, keycode);
			});
			if (self.group[self.currIndex].opts.idleTime) {
				self.idleSecondsCounter = 0;
				$D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
					self.idleSecondsCounter = 0;
					if (self.isIdle) {
						self.showControls();
					}
					self.isIdle = false;
				});
				self.idleInterval = window.setInterval(function() {
					self.idleSecondsCounter++;
					if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
						self.isIdle = true;
						self.idleSecondsCounter = 0;
						self.hideControls();
					}
				}, 1000);
			}
		},
		removeEvents: function() {
			var self = this;
			$W.off("orientationchange.fb resize.fb");
			$D.off("keydown.fb .fb-idle");
			this.$refs.container.off(".fb-close .fb-prev .fb-next");
			if (self.idleInterval) {
				window.clearInterval(self.idleInterval);
				self.idleInterval = null;
			}
		},
		previous: function(duration) {
			return this.jumpTo(this.currPos - 1, duration);
		},
		next: function(duration) {
			return this.jumpTo(this.currPos + 1, duration);
		},
		jumpTo: function(pos, duration) {
			var self = this,
				groupLen = self.group.length,
				firstRun, isMoved, loop, current, previous, slidePos, stagePos, prop, diff;
			if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
				return;
			}
			pos = parseInt(pos, 10);
			loop = self.current ? self.current.opts.loop : self.opts.loop;
			if (!loop && (pos < 0 || pos >= groupLen)) {
				return false;
			}
			firstRun = self.firstRun = !Object.keys(self.slides).length;
			previous = self.current;
			self.prevIndex = self.currIndex;
			self.prevPos = self.currPos;
			current = self.createSlide(pos);
			if (groupLen > 1) {
				if (loop || current.index < groupLen - 1) {
					self.createSlide(pos + 1);
				}
				if (loop || current.index > 0) {
					self.createSlide(pos - 1);
				}
			}
			self.current = current;
			self.currIndex = current.index;
			self.currPos = current.pos;
			self.trigger("beforeShow", firstRun);
			self.updateControls();
			current.forcedDuration = undefined;
			if ($.isNumeric(duration)) {
				current.forcedDuration = duration;
			} else {
				duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
			}
			duration = parseInt(duration, 10);
			isMoved = self.isMoved(current);
			current.$slide.addClass("fancybox-slide--current");
			if (firstRun) {
				if (current.opts.animationEffect && duration) {
					self.$refs.container.css("transition-duration", duration + "ms");
				}
				self.$refs.container.addClass("fancybox-is-open").trigger("focus");
				self.loadSlide(current);
				self.preload("image");
				return;
			}
			slidePos = $.fancybox.getTranslate(previous.$slide);
			stagePos = $.fancybox.getTranslate(self.$refs.stage);
			$.each(self.slides, function(index, slide) {
				$.fancybox.stop(slide.$slide, true);
			});
			if (previous.pos !== current.pos) {
				previous.isComplete = false;
			}
			previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
			if (isMoved) {
				diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
				$.each(self.slides, function(index, slide) {
					slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
						return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
					});
					var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
					$.fancybox.setTranslate(slide.$slide, {
						top: 0,
						left: leftPos - stagePos.left + diff
					});
					if (slide.pos !== current.pos) {
						slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
					}
					forceRedraw(slide.$slide);
					$.fancybox.animate(slide.$slide, {
						top: 0,
						left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
					}, duration, function() {
						slide.$slide.css({
							transform: "",
							opacity: ""
						}).removeClass("fancybox-slide--next fancybox-slide--previous");
						if (slide.pos === self.currPos) {
							self.complete();
						}
					});
				});
			} else if (duration && current.opts.transitionEffect) {
				prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
				previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
				$.fancybox.animate(previous.$slide, prop, duration, function() {
					previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
				}, false);
			}
			if (current.isLoaded) {
				self.revealContent(current);
			} else {
				self.loadSlide(current);
			}
			self.preload("image");
		},
		createSlide: function(pos) {
			var self = this,
				$slide, index;
			index = pos % self.group.length;
			index = index < 0 ? self.group.length + index : index;
			if (!self.slides[pos] && self.group[index]) {
				$slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
				self.slides[pos] = $.extend(true, {}, self.group[index], {
					pos: pos,
					$slide: $slide,
					isLoaded: false
				});
				self.updateSlide(self.slides[pos]);
			}
			return self.slides[pos];
		},
		scaleToActual: function(x, y, duration) {
			var self = this,
				current = self.current,
				$content = current.$content,
				canvasWidth = $.fancybox.getTranslate(current.$slide).width,
				canvasHeight = $.fancybox.getTranslate(current.$slide).height,
				newImgWidth = current.width,
				newImgHeight = current.height,
				imgPos, posX, posY, scaleX, scaleY;
			if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
				return;
			}
			self.isAnimating = true;
			$.fancybox.stop($content);
			x = x === undefined ? canvasWidth * 0.5 : x;
			y = y === undefined ? canvasHeight * 0.5 : y;
			imgPos = $.fancybox.getTranslate($content);
			imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
			imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
			scaleX = newImgWidth / imgPos.width;
			scaleY = newImgHeight / imgPos.height;
			posX = canvasWidth * 0.5 - newImgWidth * 0.5;
			posY = canvasHeight * 0.5 - newImgHeight * 0.5;
			if (newImgWidth > canvasWidth) {
				posX = imgPos.left * scaleX - (x * scaleX - x);
				if (posX > 0) {
					posX = 0;
				}
				if (posX < canvasWidth - newImgWidth) {
					posX = canvasWidth - newImgWidth;
				}
			}
			if (newImgHeight > canvasHeight) {
				posY = imgPos.top * scaleY - (y * scaleY - y);
				if (posY > 0) {
					posY = 0;
				}
				if (posY < canvasHeight - newImgHeight) {
					posY = canvasHeight - newImgHeight;
				}
			}
			self.updateCursor(newImgWidth, newImgHeight);
			$.fancybox.animate($content, {
				top: posY,
				left: posX,
				scaleX: scaleX,
				scaleY: scaleY
			}, duration || 366, function() {
				self.isAnimating = false;
			});
			if (self.SlideShow && self.SlideShow.isActive) {
				self.SlideShow.stop();
			}
		},
		scaleToFit: function(duration) {
			var self = this,
				current = self.current,
				$content = current.$content,
				end;
			if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
				return;
			}
			self.isAnimating = true;
			$.fancybox.stop($content);
			end = self.getFitPos(current);
			self.updateCursor(end.width, end.height);
			$.fancybox.animate($content, {
				top: end.top,
				left: end.left,
				scaleX: end.width / $content.width(),
				scaleY: end.height / $content.height()
			}, duration || 366, function() {
				self.isAnimating = false;
			});
		},
		getFitPos: function(slide) {
			var self = this,
				$content = slide.$content,
				$slide = slide.$slide,
				width = slide.width || slide.opts.width,
				height = slide.height || slide.opts.height,
				maxWidth, maxHeight, minRatio, aspectRatio, rez = {};
			if (!slide.isLoaded || !$content || !$content.length) {
				return false;
			}
			maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
			maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
			maxWidth -= parseFloat($slide.css("paddingLeft")) +
				parseFloat($slide.css("paddingRight")) +
				parseFloat($content.css("marginLeft")) +
				parseFloat($content.css("marginRight"));
			maxHeight -= parseFloat($slide.css("paddingTop")) +
				parseFloat($slide.css("paddingBottom")) +
				parseFloat($content.css("marginTop")) +
				parseFloat($content.css("marginBottom"));
			if (!width || !height) {
				width = maxWidth;
				height = maxHeight;
			}
			minRatio = Math.min(1, maxWidth / width, maxHeight / height);
			width = minRatio * width;
			height = minRatio * height;
			if (width > maxWidth - 0.5) {
				width = maxWidth;
			}
			if (height > maxHeight - 0.5) {
				height = maxHeight;
			}
			if (slide.type === "image") {
				rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
				rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
			} else if (slide.contentType === "video") {
				aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
				if (height > width / aspectRatio) {
					height = width / aspectRatio;
				} else if (width > height * aspectRatio) {
					width = height * aspectRatio;
				}
			}
			rez.width = width;
			rez.height = height;
			return rez;
		},
		update: function(e) {
			var self = this;
			$.each(self.slides, function(key, slide) {
				self.updateSlide(slide, e);
			});
		},
		updateSlide: function(slide, e) {
			var self = this,
				$content = slide && slide.$content,
				width = slide.width || slide.opts.width,
				height = slide.height || slide.opts.height,
				$slide = slide.$slide;
			self.adjustCaption(slide);
			if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
				$.fancybox.stop($content);
				$.fancybox.setTranslate($content, self.getFitPos(slide));
				if (slide.pos === self.currPos) {
					self.isAnimating = false;
					self.updateCursor();
				}
			}
			self.adjustLayout(slide);
			if ($slide.length) {
				$slide.trigger("refresh");
				if (slide.pos === self.currPos) {
					self.$refs.toolbar.add(self.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
				}
			}
			self.trigger("onUpdate", slide, e);
		},
		centerSlide: function(duration) {
			var self = this,
				current = self.current,
				$slide = current.$slide;
			if (self.isClosing || !current) {
				return;
			}
			$slide.siblings().css({
				transform: "",
				opacity: ""
			});
			$slide.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next");
			$.fancybox.animate($slide, {
				top: 0,
				left: 0,
				opacity: 1
			}, duration === undefined ? 0 : duration, function() {
				$slide.css({
					transform: "",
					opacity: ""
				});
				if (!current.isComplete) {
					self.complete();
				}
			}, false);
		},
		isMoved: function(slide) {
			var current = slide || this.current,
				slidePos, stagePos;
			if (!current) {
				return false;
			}
			stagePos = $.fancybox.getTranslate(this.$refs.stage);
			slidePos = $.fancybox.getTranslate(current.$slide);
			return (!current.$slide.hasClass("fancybox-animated") && (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5));
		},
		updateCursor: function(nextWidth, nextHeight) {
			var self = this,
				current = self.current,
				$container = self.$refs.container,
				canPan, isZoomable;
			if (!current || self.isClosing || !self.Guestures) {
				return;
			}
			$container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
			canPan = self.canPan(nextWidth, nextHeight);
			isZoomable = canPan ? true : self.isZoomable();
			$container.toggleClass("fancybox-is-zoomable", isZoomable);
			$("[data-fancybox-zoom]").prop("disabled", !isZoomable);
			if (canPan) {
				$container.addClass("fancybox-can-pan");
			} else if (isZoomable && (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))) {
				$container.addClass("fancybox-can-zoomIn");
			} else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
				$container.addClass("fancybox-can-swipe");
			}
		},
		isZoomable: function() {
			var self = this,
				current = self.current,
				fitPos;
			if (current && !self.isClosing && current.type === "image" && !current.hasError) {
				if (!current.isLoaded) {
					return true;
				}
				fitPos = self.getFitPos(current);
				if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
					return true;
				}
			}
			return false;
		},
		isScaledDown: function(nextWidth, nextHeight) {
			var self = this,
				rez = false,
				current = self.current,
				$content = current.$content;
			if (nextWidth !== undefined && nextHeight !== undefined) {
				rez = nextWidth < current.width && nextHeight < current.height;
			} else if ($content) {
				rez = $.fancybox.getTranslate($content);
				rez = rez.width < current.width && rez.height < current.height;
			}
			return rez;
		},
		canPan: function(nextWidth, nextHeight) {
			var self = this,
				current = self.current,
				pos = null,
				rez = false;
			if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
				rez = self.getFitPos(current);
				if (nextWidth !== undefined && nextHeight !== undefined) {
					pos = {
						width: nextWidth,
						height: nextHeight
					};
				} else if (current.isComplete) {
					pos = $.fancybox.getTranslate(current.$content);
				}
				if (pos && rez) {
					rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
				}
			}
			return rez;
		},
		loadSlide: function(slide) {
			var self = this,
				type, $slide, ajaxLoad;
			if (slide.isLoading || slide.isLoaded) {
				return;
			}
			slide.isLoading = true;
			if (self.trigger("beforeLoad", slide) === false) {
				slide.isLoading = false;
				return false;
			}
			type = slide.type;
			$slide = slide.$slide;
			$slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass);
			switch (type) {
				case "image":
					self.setImage(slide);
					break;
				case "iframe":
					self.setIframe(slide);
					break;
				case "html":
					self.setContent(slide, slide.src || slide.content);
					break;
				case "video":
					self.setContent(slide, slide.opts.video.tpl.replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "").replace("{{poster}}", slide.thumb || ""));
					break;
				case "inline":
					if ($(slide.src).length) {
						self.setContent(slide, $(slide.src));
					} else {
						self.setError(slide);
					}
					break;
				case "ajax":
					self.showLoading(slide);
					ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
						url: slide.src,
						success: function(data, textStatus) {
							if (textStatus === "success") {
								self.setContent(slide, data);
							}
						},
						error: function(jqXHR, textStatus) {
							if (jqXHR && textStatus !== "abort") {
								self.setError(slide);
							}
						}
					}));
					$slide.one("onReset", function() {
						ajaxLoad.abort();
					});
					break;
				default:
					self.setError(slide);
					break;
			}
			return true;
		},
		setImage: function(slide) {
			var self = this,
				ghost;
			setTimeout(function() {
				var $img = slide.$image;
				if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
					self.showLoading(slide);
				}
			}, 50);
			self.checkSrcset(slide);
			slide.$content = $('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide.addClass("fancybox-slide--image"));
			if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
				slide.width = slide.opts.width;
				slide.height = slide.opts.height;
				ghost = document.createElement("img");
				ghost.onerror = function() {
					$(this).remove();
					slide.$ghost = null;
				};
				ghost.onload = function() {
					self.afterLoad(slide);
				};
				slide.$ghost = $(ghost).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.thumb);
			}
			self.setBigImage(slide);
		},
		checkSrcset: function(slide) {
			var srcset = slide.opts.srcset || slide.opts.image.srcset,
				found, temp, pxRatio, windowWidth;
			if (srcset) {
				pxRatio = window.devicePixelRatio || 1;
				windowWidth = window.innerWidth * pxRatio;
				temp = srcset.split(",").map(function(el) {
					var ret = {};
					el.trim().split(/\s+/).forEach(function(el, i) {
						var value = parseInt(el.substring(0, el.length - 1), 10);
						if (i === 0) {
							return (ret.url = el);
						}
						if (value) {
							ret.value = value;
							ret.postfix = el[el.length - 1];
						}
					});
					return ret;
				});
				temp.sort(function(a, b) {
					return a.value - b.value;
				});
				for (var j = 0; j < temp.length; j++) {
					var el = temp[j];
					if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
						found = el;
						break;
					}
				}
				if (!found && temp.length) {
					found = temp[temp.length - 1];
				}
				if (found) {
					slide.src = found.url;
					if (slide.width && slide.height && found.postfix == "w") {
						slide.height = (slide.width / slide.height) * found.value;
						slide.width = found.value;
					}
					slide.opts.srcset = srcset;
				}
			}
		},
		setBigImage: function(slide) {
			var self = this,
				img = document.createElement("img"),
				$img = $(img);
			slide.$image = $img.one("error", function() {
				self.setError(slide);
			}).one("load", function() {
				var sizes;
				if (!slide.$ghost) {
					self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
					self.afterLoad(slide);
				}
				if (self.isClosing) {
					return;
				}
				if (slide.opts.srcset) {
					sizes = slide.opts.sizes;
					if (!sizes || sizes === "auto") {
						sizes = (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) + "vw";
					}
					$img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
				}
				if (slide.$ghost) {
					setTimeout(function() {
						if (slide.$ghost && !self.isClosing) {
							slide.$ghost.hide();
						}
					}, Math.min(300, Math.max(1000, slide.height / 1600)));
				}
				self.hideLoading(slide);
			}).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);
			if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
				$img.trigger("load");
			} else if (img.error) {
				$img.trigger("error");
			}
		},
		resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
			var maxWidth = parseInt(slide.opts.width, 10),
				maxHeight = parseInt(slide.opts.height, 10);
			slide.width = imgWidth;
			slide.height = imgHeight;
			if (maxWidth > 0) {
				slide.width = maxWidth;
				slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
			}
			if (maxHeight > 0) {
				slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
				slide.height = maxHeight;
			}
		},
		setIframe: function(slide) {
			var self = this,
				opts = slide.opts.iframe,
				$slide = slide.$slide,
				$iframe;
			slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
			$slide.addClass("fancybox-slide--" + slide.contentType);
			slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);
			if (opts.preload) {
				self.showLoading(slide);
				$iframe.on("load.fb error.fb", function(e) {
					this.isReady = 1;
					slide.$slide.trigger("refresh");
					self.afterLoad(slide);
				});
				$slide.on("refresh.fb", function() {
					var $content = slide.$content,
						frameWidth = opts.css.width,
						frameHeight = opts.css.height,
						$contents, $body;
					if ($iframe[0].isReady !== 1) {
						return;
					}
					try {
						$contents = $iframe.contents();
						$body = $contents.find("body");
					} catch (ignore) {}
					if ($body && $body.length && $body.children().length) {
						$slide.css("overflow", "visible");
						$content.css({
							width: "100%",
							"max-width": "100%",
							height: "9999px"
						});
						if (frameWidth === undefined) {
							frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
						}
						$content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
						if (frameHeight === undefined) {
							frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
						}
						$content.css("height", frameHeight ? frameHeight : "");
						$slide.css("overflow", "auto");
					}
					$content.removeClass("fancybox-is-hidden");
				});
			} else {
				self.afterLoad(slide);
			}
			$iframe.attr("src", slide.src);
			$slide.one("onReset", function() {
				try {
					$(this).find("iframe").hide().unbind().attr("src", "//about:blank");
				} catch (ignore) {}
				$(this).off("refresh.fb").empty();
				slide.isLoaded = false;
				slide.isRevealed = false;
			});
		},
		setContent: function(slide, content) {
			var self = this;
			if (self.isClosing) {
				return;
			}
			self.hideLoading(slide);
			if (slide.$content) {
				$.fancybox.stop(slide.$content);
			}
			slide.$slide.empty();
			if (isQuery(content) && content.parent().length) {
				if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
					content.parents(".fancybox-slide").trigger("onReset");
				}
				slide.$placeholder = $("<div>").hide().insertAfter(content);
				content.css("display", "inline-block");
			} else if (!slide.hasError) {
				if ($.type(content) === "string") {
					content = $("<div>").append($.trim(content)).contents();
				}
				if (slide.opts.filter) {
					content = $("<div>").html(content).find(slide.opts.filter);
				}
			}
			slide.$slide.one("onReset", function() {
				$(this).find("video,audio").trigger("pause");
				if (slide.$placeholder) {
					slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
					slide.$placeholder = null;
				}
				if (slide.$smallBtn) {
					slide.$smallBtn.remove();
					slide.$smallBtn = null;
				}
				if (!slide.hasError) {
					$(this).empty();
					slide.isLoaded = false;
					slide.isRevealed = false;
				}
			});
			$(content).appendTo(slide.$slide);
			if ($(content).is("video,audio")) {
				$(content).addClass("fancybox-video");
				$(content).wrap("<div></div>");
				slide.contentType = "video";
				slide.opts.width = slide.opts.width || $(content).attr("width");
				slide.opts.height = slide.opts.height || $(content).attr("height");
			}
			slide.$content = slide.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
			slide.$content.siblings().hide();
			if (!slide.$content.length) {
				slide.$content = slide.$slide.wrapInner("<div></div>").children().first();
			}
			slide.$content.addClass("fancybox-content");
			slide.$slide.addClass("fancybox-slide--" + slide.contentType);
			self.afterLoad(slide);
		},
		setError: function(slide) {
			slide.hasError = true;
			slide.$slide.trigger("onReset").removeClass("fancybox-slide--" + slide.contentType).addClass("fancybox-slide--error");
			slide.contentType = "html";
			this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
			if (slide.pos === this.currPos) {
				this.isAnimating = false;
			}
		},
		showLoading: function(slide) {
			var self = this;
			slide = slide || self.current;
			if (slide && !slide.$spinner) {
				slide.$spinner = $(self.translate(self, self.opts.spinnerTpl)).appendTo(slide.$slide).hide().fadeIn("fast");
			}
		},
		hideLoading: function(slide) {
			var self = this;
			slide = slide || self.current;
			if (slide && slide.$spinner) {
				slide.$spinner.stop().remove();
				delete slide.$spinner;
			}
		},
		afterLoad: function(slide) {
			var self = this;
			if (self.isClosing) {
				return;
			}
			slide.isLoading = false;
			slide.isLoaded = true;
			self.trigger("afterLoad", slide);
			self.hideLoading(slide);
			if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
				slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
			}
			if (slide.opts.protect && slide.$content && !slide.hasError) {
				slide.$content.on("contextmenu.fb", function(e) {
					if (e.button == 2) {
						e.preventDefault();
					}
					return true;
				});
				if (slide.type === "image") {
					$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
				}
			}
			self.adjustCaption(slide);
			self.adjustLayout(slide);
			if (slide.pos === self.currPos) {
				self.updateCursor();
			}
			self.revealContent(slide);
		},
		adjustCaption: function(slide) {
			var self = this,
				current = slide || self.current,
				caption = current.opts.caption,
				preventOverlap = current.opts.preventCaptionOverlap,
				$caption = self.$refs.caption,
				$clone, captionH = false;
			$caption.toggleClass("fancybox-caption--separate", preventOverlap);
			if (preventOverlap && caption && caption.length) {
				if (current.pos !== self.currPos) {
					$clone = $caption.clone().appendTo($caption.parent());
					$clone.children().eq(0).empty().html(caption);
					captionH = $clone.outerHeight(true);
					$clone.empty().remove();
				} else if (self.$caption) {
					captionH = self.$caption.outerHeight(true);
				}
				current.$slide.css("padding-bottom", captionH || "");
			}
		},
		adjustLayout: function(slide) {
			var self = this,
				current = slide || self.current,
				scrollHeight, marginBottom, inlinePadding, actualPadding;
			if (current.isLoaded && current.opts.disableLayoutFix !== true) {
				current.$content.css("margin-bottom", "");
				if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
					inlinePadding = current.$slide[0].style["padding-bottom"];
					actualPadding = current.$slide.css("padding-bottom");
					if (parseFloat(actualPadding) > 0) {
						scrollHeight = current.$slide[0].scrollHeight;
						current.$slide.css("padding-bottom", 0);
						if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
							marginBottom = actualPadding;
						}
						current.$slide.css("padding-bottom", inlinePadding);
					}
				}
				current.$content.css("margin-bottom", marginBottom);
			}
		},
		revealContent: function(slide) {
			var self = this,
				$slide = slide.$slide,
				end = false,
				start = false,
				isMoved = self.isMoved(slide),
				isRevealed = slide.isRevealed,
				effect, effectClassName, duration, opacity;
			slide.isRevealed = true;
			effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
			duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
			duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
			if (isMoved || slide.pos !== self.currPos || !duration) {
				effect = false;
			}
			if (effect === "zoom") {
				if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
					end = self.getFitPos(slide);
				} else {
					effect = "fade";
				}
			}
			if (effect === "zoom") {
				self.isAnimating = true;
				end.scaleX = end.width / start.width;
				end.scaleY = end.height / start.height;
				opacity = slide.opts.zoomOpacity;
				if (opacity == "auto") {
					opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
				}
				if (opacity) {
					start.opacity = 0.1;
					end.opacity = 1;
				}
				$.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
				forceRedraw(slide.$content);
				$.fancybox.animate(slide.$content, end, duration, function() {
					self.isAnimating = false;
					self.complete();
				});
				return;
			}
			self.updateSlide(slide);
			if (!effect) {
				slide.$content.removeClass("fancybox-is-hidden");
				if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
					slide.$content.hide().fadeIn("fast");
				}
				if (slide.pos === self.currPos) {
					self.complete();
				}
				return;
			}
			$.fancybox.stop($slide);
			effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
			$slide.addClass(effectClassName).removeClass("fancybox-slide--current");
			slide.$content.removeClass("fancybox-is-hidden");
			forceRedraw($slide);
			if (slide.type !== "image") {
				slide.$content.hide().show(0);
			}
			$.fancybox.animate($slide, "fancybox-slide--current", duration, function() {
				$slide.removeClass(effectClassName).css({
					transform: "",
					opacity: ""
				});
				if (slide.pos === self.currPos) {
					self.complete();
				}
			}, true);
		},
		getThumbPos: function(slide) {
			var rez = false,
				$thumb = slide.$thumb,
				thumbPos, btw, brw, bbw, blw;
			if (!$thumb || !inViewport($thumb[0])) {
				return false;
			}
			thumbPos = $.fancybox.getTranslate($thumb);
			btw = parseFloat($thumb.css("border-top-width") || 0);
			brw = parseFloat($thumb.css("border-right-width") || 0);
			bbw = parseFloat($thumb.css("border-bottom-width") || 0);
			blw = parseFloat($thumb.css("border-left-width") || 0);
			rez = {
				top: thumbPos.top + btw,
				left: thumbPos.left + blw,
				width: thumbPos.width - brw - blw,
				height: thumbPos.height - btw - bbw,
				scaleX: 1,
				scaleY: 1
			};
			return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
		},
		complete: function() {
			var self = this,
				current = self.current,
				slides = {},
				$el;
			if (self.isMoved() || !current.isLoaded) {
				return;
			}
			if (!current.isComplete) {
				current.isComplete = true;
				current.$slide.siblings().trigger("onReset");
				self.preload("inline");
				forceRedraw(current.$slide);
				current.$slide.addClass("fancybox-slide--complete");
				$.each(self.slides, function(key, slide) {
					if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
						slides[slide.pos] = slide;
					} else if (slide) {
						$.fancybox.stop(slide.$slide);
						slide.$slide.off().remove();
					}
				});
				self.slides = slides;
			}
			self.isAnimating = false;
			self.updateCursor();
			self.trigger("afterShow");
			if (!!current.opts.video.autoStart) {
				current.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
					if (Document.exitFullscreen) {
						Document.exitFullscreen();
					} else if (this.webkitExitFullscreen) {
						this.webkitExitFullscreen();
					}
					self.next();
				});
			}
			if (current.opts.autoFocus && current.contentType === "html") {
				$el = current.$content.find("input[autofocus]:enabled:visible:first");
				if ($el.length) {
					$el.trigger("focus");
				} else {
					self.focus(null, true);
				}
			}
			current.$slide.scrollTop(0).scrollLeft(0);
		},
		preload: function(type) {
			var self = this,
				prev, next;
			if (self.group.length < 2) {
				return;
			}
			next = self.slides[self.currPos + 1];
			prev = self.slides[self.currPos - 1];
			if (prev && prev.type === type) {
				self.loadSlide(prev);
			}
			if (next && next.type === type) {
				self.loadSlide(next);
			}
		},
		focus: function(e, firstRun) {
			var self = this,
				focusableStr = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(","),
				focusableItems, focusedItemIndex;
			if (self.isClosing) {
				return;
			}
			if (e || !self.current || !self.current.isComplete) {
				focusableItems = self.$refs.container.find("*:visible");
			} else {
				focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
			}
			focusableItems = focusableItems.filter(focusableStr).filter(function() {
				return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
			});
			if (focusableItems.length) {
				focusedItemIndex = focusableItems.index(document.activeElement);
				if (e && e.shiftKey) {
					if (focusedItemIndex < 0 || focusedItemIndex == 0) {
						e.preventDefault();
						focusableItems.eq(focusableItems.length - 1).trigger("focus");
					}
				} else {
					if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
						if (e) {
							e.preventDefault();
						}
						focusableItems.eq(0).trigger("focus");
					}
				}
			} else {
				self.$refs.container.trigger("focus");
			}
		},
		activate: function() {
			var self = this;
			$(".fancybox-container").each(function() {
				var instance = $(this).data("FancyBox");
				if (instance && instance.id !== self.id && !instance.isClosing) {
					instance.trigger("onDeactivate");
					instance.removeEvents();
					instance.isVisible = false;
				}
			});
			self.isVisible = true;
			if (self.current || self.isIdle) {
				self.update();
				self.updateControls();
			}
			self.trigger("onActivate");
			self.addEvents();
		},
		close: function(e, d) {
			var self = this,
				current = self.current,
				effect, duration, $content, domRect, opacity, start, end;
			var done = function() {
				self.cleanUp(e);
			};
			if (self.isClosing) {
				return false;
			}
			self.isClosing = true;
			if (self.trigger("beforeClose", e) === false) {
				self.isClosing = false;
				requestAFrame(function() {
					self.update();
				});
				return false;
			}
			self.removeEvents();
			$content = current.$content;
			effect = current.opts.animationEffect;
			duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
			current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
			if (e !== true) {
				$.fancybox.stop(current.$slide);
			} else {
				effect = false;
			}
			current.$slide.siblings().trigger("onReset").remove();
			if (duration) {
				self.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", duration + "ms");
			}
			self.hideLoading(current);
			self.hideControls(true);
			self.updateCursor();
			if (effect === "zoom" && !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))) {
				effect = "fade";
			}
			if (effect === "zoom") {
				$.fancybox.stop($content);
				domRect = $.fancybox.getTranslate($content);
				start = {
					top: domRect.top,
					left: domRect.left,
					scaleX: domRect.width / end.width,
					scaleY: domRect.height / end.height,
					width: end.width,
					height: end.height
				};
				opacity = current.opts.zoomOpacity;
				if (opacity == "auto") {
					opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
				}
				if (opacity) {
					end.opacity = 0;
				}
				$.fancybox.setTranslate($content, start);
				forceRedraw($content);
				$.fancybox.animate($content, end, duration, done);
				return true;
			}
			if (effect && duration) {
				$.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + effect, duration, done);
			} else {
				if (e === true) {
					setTimeout(done, duration);
				} else {
					done();
				}
			}
			return true;
		},
		cleanUp: function(e) {
			var self = this,
				instance, $focus = self.current.opts.$orig,
				x, y;
			self.current.$slide.trigger("onReset");
			self.$refs.container.empty().remove();
			self.trigger("afterClose", e);
			if (!!self.current.opts.backFocus) {
				if (!$focus || !$focus.length || !$focus.is(":visible")) {
					$focus = self.$trigger;
				}
				if ($focus && $focus.length) {
					x = window.scrollX;
					y = window.scrollY;
					$focus.trigger("focus");
					$("html, body").scrollTop(y).scrollLeft(x);
				}
			}
			self.current = null;
			instance = $.fancybox.getInstance();
			if (instance) {
				instance.activate();
			} else {
				$("body").removeClass("fancybox-active compensate-for-scrollbar");
				$("#fancybox-style-noscroll").remove();
			}
		},
		trigger: function(name, slide) {
			var args = Array.prototype.slice.call(arguments, 1),
				self = this,
				obj = slide && slide.opts ? slide : self.current,
				rez;
			if (obj) {
				args.unshift(obj);
			} else {
				obj = self;
			}
			args.unshift(self);
			if ($.isFunction(obj.opts[name])) {
				rez = obj.opts[name].apply(obj, args);
			}
			if (rez === false) {
				return rez;
			}
			if (name === "afterClose" || !self.$refs) {
				$D.trigger(name + ".fb", args);
			} else {
				self.$refs.container.trigger(name + ".fb", args);
			}
		},
		updateControls: function() {
			var self = this,
				current = self.current,
				index = current.index,
				$container = self.$refs.container,
				$caption = self.$refs.caption,
				caption = current.opts.caption;
			current.$slide.trigger("refresh");
			if (caption && caption.length) {
				self.$caption = $caption;
				$caption.children().eq(0).html(caption);
			} else {
				self.$caption = null;
			}
			if (!self.hasHiddenControls && !self.isIdle) {
				self.showControls();
			}
			$container.find("[data-fancybox-count]").html(self.group.length);
			$container.find("[data-fancybox-index]").html(index + 1);
			$container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
			$container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
			if (current.type === "image") {
				$container.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show();
			} else if (current.opts.toolbar) {
				$container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
			}
			if ($(document.activeElement).is(":hidden,[disabled]")) {
				self.$refs.container.trigger("focus");
			}
		},
		hideControls: function(andCaption) {
			var self = this,
				arr = ["infobar", "toolbar", "nav"];
			if (andCaption || !self.current.opts.preventCaptionOverlap) {
				arr.push("caption");
			}
			this.$refs.container.removeClass(arr.map(function(i) {
				return "fancybox-show-" + i;
			}).join(" "));
			this.hasHiddenControls = true;
		},
		showControls: function() {
			var self = this,
				opts = self.current ? self.current.opts : self.opts,
				$container = self.$refs.container;
			self.hasHiddenControls = false;
			self.idleSecondsCounter = 0;
			$container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1)).toggleClass("fancybox-show-caption", !!self.$caption).toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal);
		},
		toggleControls: function() {
			if (this.hasHiddenControls) {
				this.showControls();
			} else {
				this.hideControls();
			}
		}
	});
	$.fancybox = {
		version: "3.5.7",
		defaults: defaults,
		getInstance: function(command) {
			var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
				args = Array.prototype.slice.call(arguments, 1);
			if (instance instanceof FancyBox) {
				if ($.type(command) === "string") {
					instance[command].apply(instance, args);
				} else if ($.type(command) === "function") {
					command.apply(instance, args);
				}
				return instance;
			}
			return false;
		},
		open: function(items, opts, index) {
			return new FancyBox(items, opts, index);
		},
		close: function(all) {
			var instance = this.getInstance();
			if (instance) {
				instance.close();
				if (all === true) {
					this.close(all);
				}
			}
		},
		destroy: function() {
			this.close(true);
			$D.add("body").off("click.fb-start", "**");
		},
		isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		use3d: (function() {
			var div = document.createElement("div");
			return (window.getComputedStyle && window.getComputedStyle(div) && window.getComputedStyle(div).getPropertyValue("transform") && !(document.documentMode && document.documentMode < 11));
		})(),
		getTranslate: function($el) {
			var domRect;
			if (!$el || !$el.length) {
				return false;
			}
			domRect = $el[0].getBoundingClientRect();
			return {
				top: domRect.top || 0,
				left: domRect.left || 0,
				width: domRect.width,
				height: domRect.height,
				opacity: parseFloat($el.css("opacity"))
			};
		},
		setTranslate: function($el, props) {
			var str = "",
				css = {};
			if (!$el || !props) {
				return;
			}
			if (props.left !== undefined || props.top !== undefined) {
				str = (props.left === undefined ? $el.position().left : props.left) + "px, " +
					(props.top === undefined ? $el.position().top : props.top) + "px";
				if (this.use3d) {
					str = "translate3d(" + str + ", 0px)";
				} else {
					str = "translate(" + str + ")";
				}
			}
			if (props.scaleX !== undefined && props.scaleY !== undefined) {
				str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
			} else if (props.scaleX !== undefined) {
				str += " scaleX(" + props.scaleX + ")";
			}
			if (str.length) {
				css.transform = str;
			}
			if (props.opacity !== undefined) {
				css.opacity = props.opacity;
			}
			if (props.width !== undefined) {
				css.width = props.width;
			}
			if (props.height !== undefined) {
				css.height = props.height;
			}
			return $el.css(css);
		},
		animate: function($el, to, duration, callback, leaveAnimationName) {
			var self = this,
				from;
			if ($.isFunction(duration)) {
				callback = duration;
				duration = null;
			}
			self.stop($el);
			from = self.getTranslate($el);
			$el.on(transitionEnd, function(e) {
				if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
					return;
				}
				self.stop($el);
				if ($.isNumeric(duration)) {
					$el.css("transition-duration", "");
				}
				if ($.isPlainObject(to)) {
					if (to.scaleX !== undefined && to.scaleY !== undefined) {
						self.setTranslate($el, {
							top: to.top,
							left: to.left,
							width: from.width * to.scaleX,
							height: from.height * to.scaleY,
							scaleX: 1,
							scaleY: 1
						});
					}
				} else if (leaveAnimationName !== true) {
					$el.removeClass(to);
				}
				if ($.isFunction(callback)) {
					callback(e);
				}
			});
			if ($.isNumeric(duration)) {
				$el.css("transition-duration", duration + "ms");
			}
			if ($.isPlainObject(to)) {
				if (to.scaleX !== undefined && to.scaleY !== undefined) {
					delete to.width;
					delete to.height;
					if ($el.parent().hasClass("fancybox-slide--image")) {
						$el.parent().addClass("fancybox-is-scaling");
					}
				}
				$.fancybox.setTranslate($el, to);
			} else {
				$el.addClass(to);
			}
			$el.data("timer", setTimeout(function() {
				$el.trigger(transitionEnd);
			}, duration + 33));
		},
		stop: function($el, callCallback) {
			if ($el && $el.length) {
				clearTimeout($el.data("timer"));
				if (callCallback) {
					$el.trigger(transitionEnd);
				}
				$el.off(transitionEnd).css("transition-duration", "");
				$el.parent().removeClass("fancybox-is-scaling");
			}
		}
	};

	function _run(e, opts) {
		var items = [],
			index = 0,
			$target, value, instance;
		if (e && e.isDefaultPrevented()) {
			return;
		}
		e.preventDefault();
		opts = opts || {};
		if (e && e.data) {
			opts = mergeOpts(e.data.options, opts);
		}
		$target = opts.$target || $(e.currentTarget).trigger("blur");
		instance = $.fancybox.getInstance();
		if (instance && instance.$trigger && instance.$trigger.is($target)) {
			return;
		}
		if (opts.selector) {
			items = $(opts.selector);
		} else {
			value = $target.attr("data-fancybox") || "";
			if (value) {
				items = e.data ? e.data.items : [];
				items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
			} else {
				items = [$target];
			}
		}
		index = $(items).index($target);
		if (index < 0) {
			index = 0;
		}
		instance = $.fancybox.open(items, opts, index);
		instance.$trigger = $target;
	}
	$.fn.fancybox = function(options) {
		var selector;
		options = options || {};
		selector = options.selector || false;
		if (selector) {
			$("body").off("click.fb-start", selector).on("click.fb-start", selector, {
				options: options
			}, _run);
		} else {
			this.off("click.fb-start").on("click.fb-start", {
				items: this,
				options: options
			}, _run);
		}
		return this;
	};
	$D.on("click.fb-start", "[data-fancybox]", _run);
	$D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
		$('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]').eq($(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
			$trigger: $(this)
		});
	});
	(function() {
		var buttonStr = ".fancybox-button",
			focusStr = "fancybox-focus",
			$pressed = null;
		$D.on("mousedown mouseup focus blur", buttonStr, function(e) {
			switch (e.type) {
				case "mousedown":
					$pressed = $(this);
					break;
				case "mouseup":
					$pressed = null;
					break;
				case "focusin":
					$(buttonStr).removeClass(focusStr);
					if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
						$(this).addClass(focusStr);
					}
					break;
				case "focusout":
					$(buttonStr).removeClass(focusStr);
					break;
			}
		});
	})();
})(window, document, jQuery);
(function($) {
	"use strict";
	var defaults = {
		youtube: {
			matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params: {
				autoplay: 1,
				autohide: 1,
				fs: 1,
				rel: 0,
				hd: 1,
				wmode: "transparent",
				enablejsapi: 1,
				html5: 1
			},
			paramPlace: 8,
			type: "iframe",
			url: "https://www.youtube-nocookie.com/embed/$4",
			thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
		},
		vimeo: {
			matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params: {
				autoplay: 1,
				hd: 1,
				show_title: 1,
				show_byline: 1,
				show_portrait: 0,
				fullscreen: 1
			},
			paramPlace: 3,
			type: "iframe",
			url: "//player.vimeo.com/video/$2"
		},
		instagram: {
			matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type: "image",
			url: "//$1/p/$2/media/?size=l"
		},
		gmap_place: {
			matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type: "iframe",
			url: function(rez) {
				return ("//maps.google." +
					rez[2] + "/?ll=" +
					(rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") + "&output=" +
					(rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed"));
			}
		},
		gmap_search: {
			matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
			type: "iframe",
			url: function(rez) {
				return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
			}
		}
	};
	var format = function(url, rez, params) {
		if (!url) {
			return;
		}
		params = params || "";
		if ($.type(params) === "object") {
			params = $.param(params, true);
		}
		$.each(rez, function(key, value) {
			url = url.replace("$" + key, value || "");
		});
		if (params.length) {
			url += (url.indexOf("?") > 0 ? "&" : "?") + params;
		}
		return url;
	};
	$(document).on("objectNeedsType.fb", function(e, instance, item) {
		var url = item.src || "",
			type = false,
			media, thumb, rez, params, urlParams, paramObj, provider;
		media = $.extend(true, {}, defaults, item.opts.media);
		$.each(media, function(providerName, providerOpts) {
			rez = url.match(providerOpts.matcher);
			if (!rez) {
				return;
			}
			type = providerOpts.type;
			provider = providerName;
			paramObj = {};
			if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
				urlParams = rez[providerOpts.paramPlace];
				if (urlParams[0] == "?") {
					urlParams = urlParams.substring(1);
				}
				urlParams = urlParams.split("&");
				for (var m = 0; m < urlParams.length; ++m) {
					var p = urlParams[m].split("=", 2);
					if (p.length == 2) {
						paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
					}
				}
			}
			params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
			url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
			thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
			if (providerName === "youtube") {
				url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
					return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
				});
			} else if (providerName === "vimeo") {
				url = url.replace("&%23", "#");
			}
			return false;
		});
		if (type) {
			if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
				item.opts.thumb = thumb;
			}
			if (type === "iframe") {
				item.opts = $.extend(true, item.opts, {
					iframe: {
						preload: false,
						attr: {
							scrolling: "no"
						}
					}
				});
			}
			$.extend(item, {
				type: type,
				src: url,
				origSrc: item.src,
				contentSource: provider,
				contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
			});
		} else if (url) {
			item.type = item.opts.defaultType;
		}
	});
	var VideoAPILoader = {
		youtube: {
			src: "https://www.youtube.com/iframe_api",
			class: "YT",
			loading: false,
			loaded: false
		},
		vimeo: {
			src: "https://player.vimeo.com/api/player.js",
			class: "Vimeo",
			loading: false,
			loaded: false
		},
		load: function(vendor) {
			var _this = this,
				script;
			if (this[vendor].loaded) {
				setTimeout(function() {
					_this.done(vendor);
				});
				return;
			}
			if (this[vendor].loading) {
				return;
			}
			this[vendor].loading = true;
			script = document.createElement("script");
			script.type = "text/javascript";
			script.src = this[vendor].src;
			if (vendor === "youtube") {
				window.onYouTubeIframeAPIReady = function() {
					_this[vendor].loaded = true;
					_this.done(vendor);
				};
			} else {
				script.onload = function() {
					_this[vendor].loaded = true;
					_this.done(vendor);
				};
			}
			document.body.appendChild(script);
		},
		done: function(vendor) {
			var instance, $el, player;
			if (vendor === "youtube") {
				delete window.onYouTubeIframeAPIReady;
			}
			instance = $.fancybox.getInstance();
			if (instance) {
				$el = instance.current.$content.find("iframe");
				if (vendor === "youtube" && YT !== undefined && YT) {
					player = new YT.Player($el.attr("id"), {
						events: {
							onStateChange: function(e) {
								if (e.data == 0) {
									instance.next();
								}
							}
						}
					});
				} else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
					player = new Vimeo.Player($el);
					player.on("ended", function() {
						instance.next();
					});
				}
			}
		}
	};
	$(document).on({
		"afterShow.fb": function(e, instance, current) {
			if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
				VideoAPILoader.load(current.contentSource);
			}
		}
	});
})(jQuery);
(function(window, document, $) {
	"use strict";
	var requestAFrame = (function() {
		return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000 / 60);
		});
	})();
	var cancelAFrame = (function() {
		return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
			window.clearTimeout(id);
		});
	})();
	var getPointerXY = function(e) {
		var result = [];
		e = e.originalEvent || e || window.e;
		e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
		for (var key in e) {
			if (e[key].pageX) {
				result.push({
					x: e[key].pageX,
					y: e[key].pageY
				});
			} else if (e[key].clientX) {
				result.push({
					x: e[key].clientX,
					y: e[key].clientY
				});
			}
		}
		return result;
	};
	var distance = function(point2, point1, what) {
		if (!point1 || !point2) {
			return 0;
		}
		if (what === "x") {
			return point2.x - point1.x;
		} else if (what === "y") {
			return point2.y - point1.y;
		}
		return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};
	var isClickable = function($el) {
		if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
			return true;
		}
		for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
			if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
				return true;
			}
		}
		return false;
	};
	var hasScrollbars = function(el) {
		var overflowY = window.getComputedStyle(el)["overflow-y"],
			overflowX = window.getComputedStyle(el)["overflow-x"],
			vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
			horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
		return vertical || horizontal;
	};
	var isScrollable = function($el) {
		var rez = false;
		while (true) {
			rez = hasScrollbars($el.get(0));
			if (rez) {
				break;
			}
			$el = $el.parent();
			if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
				break;
			}
		}
		return rez;
	};
	var Guestures = function(instance) {
		var self = this;
		self.instance = instance;
		self.$bg = instance.$refs.bg;
		self.$stage = instance.$refs.stage;
		self.$container = instance.$refs.container;
		self.destroy();
		self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
	};
	Guestures.prototype.destroy = function() {
		var self = this;
		self.$container.off(".fb.touch");
		$(document).off(".fb.touch");
		if (self.requestId) {
			cancelAFrame(self.requestId);
			self.requestId = null;
		}
		if (self.tapped) {
			clearTimeout(self.tapped);
			self.tapped = null;
		}
	};
	Guestures.prototype.ontouchstart = function(e) {
		var self = this,
			$target = $(e.target),
			instance = self.instance,
			current = instance.current,
			$slide = current.$slide,
			$content = current.$content,
			isTouchDevice = e.type == "touchstart";
		if (isTouchDevice) {
			self.$container.off("mousedown.fb.touch");
		}
		if (e.originalEvent && e.originalEvent.button == 2) {
			return;
		}
		if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
			return;
		}
		if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
			return;
		}
		if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
			e.stopPropagation();
			e.preventDefault();
			return;
		}
		self.realPoints = self.startPoints = getPointerXY(e);
		if (!self.startPoints.length) {
			return;
		}
		if (current.touch) {
			e.stopPropagation();
		}
		self.startEvent = e;
		self.canTap = true;
		self.$target = $target;
		self.$content = $content;
		self.opts = current.opts.touch;
		self.isPanning = false;
		self.isSwiping = false;
		self.isZooming = false;
		self.isScrolling = false;
		self.canPan = instance.canPan();
		self.startTime = new Date().getTime();
		self.distanceX = self.distanceY = self.distance = 0;
		self.canvasWidth = Math.round($slide[0].clientWidth);
		self.canvasHeight = Math.round($slide[0].clientHeight);
		self.contentLastPos = null;
		self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
			top: 0,
			left: 0
		};
		self.sliderStartPos = $.fancybox.getTranslate($slide);
		self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
		self.sliderStartPos.top -= self.stagePos.top;
		self.sliderStartPos.left -= self.stagePos.left;
		self.contentStartPos.top -= self.stagePos.top;
		self.contentStartPos.left -= self.stagePos.left;
		$(document).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
		if ($.fancybox.isMobile) {
			document.addEventListener("scroll", self.onscroll, true);
		}
		if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
			if ($target.is(".fancybox-image")) {
				e.preventDefault();
			}
			if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
				return;
			}
		}
		self.isScrollable = isScrollable($target) || isScrollable($target.parent());
		if (!($.fancybox.isMobile && self.isScrollable)) {
			e.preventDefault();
		}
		if (self.startPoints.length === 1 || current.hasError) {
			if (self.canPan) {
				$.fancybox.stop(self.$content);
				self.isPanning = true;
			} else {
				self.isSwiping = true;
			}
			self.$container.addClass("fancybox-is-grabbing");
		}
		if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
			self.canTap = false;
			self.isSwiping = false;
			self.isPanning = false;
			self.isZooming = true;
			$.fancybox.stop(self.$content);
			self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
			self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
			self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
			self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
			self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
		}
	};
	Guestures.prototype.onscroll = function(e) {
		var self = this;
		self.isScrolling = true;
		document.removeEventListener("scroll", self.onscroll, true);
	};
	Guestures.prototype.ontouchmove = function(e) {
		var self = this;
		if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
			self.ontouchend(e);
			return;
		}
		if (self.isScrolling) {
			self.canTap = false;
			return;
		}
		self.newPoints = getPointerXY(e);
		if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
			return;
		}
		if (!(self.isSwiping && self.isSwiping === true)) {
			e.preventDefault();
		}
		self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
		self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
		self.distance = distance(self.newPoints[0], self.startPoints[0]);
		if (self.distance > 0) {
			if (self.isSwiping) {
				self.onSwipe(e);
			} else if (self.isPanning) {
				self.onPan();
			} else if (self.isZooming) {
				self.onZoom();
			}
		}
	};
	Guestures.prototype.onSwipe = function(e) {
		var self = this,
			instance = self.instance,
			swiping = self.isSwiping,
			left = self.sliderStartPos.left || 0,
			angle;
		if (swiping === true) {
			if (Math.abs(self.distance) > 10) {
				self.canTap = false;
				if (instance.group.length < 2 && self.opts.vertical) {
					self.isSwiping = "y";
				} else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
					self.isSwiping = "x";
				} else {
					angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
					self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
				}
				if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
					self.isScrolling = true;
					return;
				}
				instance.isDragging = self.isSwiping;
				self.startPoints = self.newPoints;
				$.each(instance.slides, function(index, slide) {
					var slidePos, stagePos;
					$.fancybox.stop(slide.$slide);
					slidePos = $.fancybox.getTranslate(slide.$slide);
					stagePos = $.fancybox.getTranslate(instance.$refs.stage);
					slide.$slide.css({
						transform: "",
						opacity: "",
						"transition-duration": ""
					}).removeClass("fancybox-animated").removeClass(function(index, className) {
						return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
					});
					if (slide.pos === instance.current.pos) {
						self.sliderStartPos.top = slidePos.top - stagePos.top;
						self.sliderStartPos.left = slidePos.left - stagePos.left;
					}
					$.fancybox.setTranslate(slide.$slide, {
						top: slidePos.top - stagePos.top,
						left: slidePos.left - stagePos.left
					});
				});
				if (instance.SlideShow && instance.SlideShow.isActive) {
					instance.SlideShow.stop();
				}
			}
			return;
		}
		if (swiping == "x") {
			if (self.distanceX > 0 && (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))) {
				left = left + Math.pow(self.distanceX, 0.8);
			} else if (self.distanceX < 0 && (self.instance.group.length < 2 || (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))) {
				left = left - Math.pow(-self.distanceX, 0.8);
			} else {
				left = left + self.distanceX;
			}
		}
		self.sliderLastPos = {
			top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
			left: left
		};
		if (self.requestId) {
			cancelAFrame(self.requestId);
			self.requestId = null;
		}
		self.requestId = requestAFrame(function() {
			if (self.sliderLastPos) {
				$.each(self.instance.slides, function(index, slide) {
					var pos = slide.pos - self.instance.currPos;
					$.fancybox.setTranslate(slide.$slide, {
						top: self.sliderLastPos.top,
						left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
					});
				});
				self.$container.addClass("fancybox-is-sliding");
			}
		});
	};
	Guestures.prototype.onPan = function() {
		var self = this;
		if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
			self.startPoints = self.newPoints;
			return;
		}
		self.canTap = false;
		self.contentLastPos = self.limitMovement();
		if (self.requestId) {
			cancelAFrame(self.requestId);
		}
		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate(self.$content, self.contentLastPos);
		});
	};
	Guestures.prototype.limitMovement = function() {
		var self = this;
		var canvasWidth = self.canvasWidth;
		var canvasHeight = self.canvasHeight;
		var distanceX = self.distanceX;
		var distanceY = self.distanceY;
		var contentStartPos = self.contentStartPos;
		var currentOffsetX = contentStartPos.left;
		var currentOffsetY = contentStartPos.top;
		var currentWidth = contentStartPos.width;
		var currentHeight = contentStartPos.height;
		var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
		if (currentWidth > canvasWidth) {
			newOffsetX = currentOffsetX + distanceX;
		} else {
			newOffsetX = currentOffsetX;
		}
		newOffsetY = currentOffsetY + distanceY;
		minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
		minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
		maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
		maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
		if (distanceX > 0 && newOffsetX > minTranslateX) {
			newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
		}
		if (distanceX < 0 && newOffsetX < maxTranslateX) {
			newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
		}
		if (distanceY > 0 && newOffsetY > minTranslateY) {
			newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
		}
		if (distanceY < 0 && newOffsetY < maxTranslateY) {
			newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
		}
		return {
			top: newOffsetY,
			left: newOffsetX
		};
	};
	Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
		var self = this;
		var canvasWidth = self.canvasWidth;
		var canvasHeight = self.canvasHeight;
		if (newWidth > canvasWidth) {
			newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
			newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
		} else {
			newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
		}
		if (newHeight > canvasHeight) {
			newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
			newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
		} else {
			newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
		}
		return {
			top: newOffsetY,
			left: newOffsetX
		};
	};
	Guestures.prototype.onZoom = function() {
		var self = this;
		var contentStartPos = self.contentStartPos;
		var currentWidth = contentStartPos.width;
		var currentHeight = contentStartPos.height;
		var currentOffsetX = contentStartPos.left;
		var currentOffsetY = contentStartPos.top;
		var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
		var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
		var newWidth = Math.floor(currentWidth * pinchRatio);
		var newHeight = Math.floor(currentHeight * pinchRatio);
		var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
		var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
		var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
		var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
		var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
		var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
		var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
		var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
		var newPos = {
			top: newOffsetY,
			left: newOffsetX,
			scaleX: pinchRatio,
			scaleY: pinchRatio
		};
		self.canTap = false;
		self.newWidth = newWidth;
		self.newHeight = newHeight;
		self.contentLastPos = newPos;
		if (self.requestId) {
			cancelAFrame(self.requestId);
		}
		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate(self.$content, self.contentLastPos);
		});
	};
	Guestures.prototype.ontouchend = function(e) {
		var self = this;
		var swiping = self.isSwiping;
		var panning = self.isPanning;
		var zooming = self.isZooming;
		var scrolling = self.isScrolling;
		self.endPoints = getPointerXY(e);
		self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
		self.$container.removeClass("fancybox-is-grabbing");
		$(document).off(".fb.touch");
		document.removeEventListener("scroll", self.onscroll, true);
		if (self.requestId) {
			cancelAFrame(self.requestId);
			self.requestId = null;
		}
		self.isSwiping = false;
		self.isPanning = false;
		self.isZooming = false;
		self.isScrolling = false;
		self.instance.isDragging = false;
		if (self.canTap) {
			return self.onTap(e);
		}
		self.speed = 100;
		self.velocityX = (self.distanceX / self.dMs) * 0.5;
		self.velocityY = (self.distanceY / self.dMs) * 0.5;
		if (panning) {
			self.endPanning();
		} else if (zooming) {
			self.endZooming();
		} else {
			self.endSwiping(swiping, scrolling);
		}
		return;
	};
	Guestures.prototype.endSwiping = function(swiping, scrolling) {
		var self = this,
			ret = false,
			len = self.instance.group.length,
			distanceX = Math.abs(self.distanceX),
			canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
			speedX = 300;
		self.sliderLastPos = null;
		if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
			$.fancybox.animate(self.instance.current.$slide, {
				top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
				opacity: 0
			}, 200);
			ret = self.instance.close(true, 250);
		} else if (canAdvance && self.distanceX > 0) {
			ret = self.instance.previous(speedX);
		} else if (canAdvance && self.distanceX < 0) {
			ret = self.instance.next(speedX);
		}
		if (ret === false && (swiping == "x" || swiping == "y")) {
			self.instance.centerSlide(200);
		}
		self.$container.removeClass("fancybox-is-sliding");
	};
	Guestures.prototype.endPanning = function() {
		var self = this,
			newOffsetX, newOffsetY, newPos;
		if (!self.contentLastPos) {
			return;
		}
		if (self.opts.momentum === false || self.dMs > 350) {
			newOffsetX = self.contentLastPos.left;
			newOffsetY = self.contentLastPos.top;
		} else {
			newOffsetX = self.contentLastPos.left + self.velocityX * 500;
			newOffsetY = self.contentLastPos.top + self.velocityY * 500;
		}
		newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
		newPos.width = self.contentStartPos.width;
		newPos.height = self.contentStartPos.height;
		$.fancybox.animate(self.$content, newPos, 366);
	};
	Guestures.prototype.endZooming = function() {
		var self = this;
		var current = self.instance.current;
		var newOffsetX, newOffsetY, newPos, reset;
		var newWidth = self.newWidth;
		var newHeight = self.newHeight;
		if (!self.contentLastPos) {
			return;
		}
		newOffsetX = self.contentLastPos.left;
		newOffsetY = self.contentLastPos.top;
		reset = {
			top: newOffsetY,
			left: newOffsetX,
			width: newWidth,
			height: newHeight,
			scaleX: 1,
			scaleY: 1
		};
		$.fancybox.setTranslate(self.$content, reset);
		if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
			self.instance.scaleToFit(150);
		} else if (newWidth > current.width || newHeight > current.height) {
			self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
		} else {
			newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
			$.fancybox.animate(self.$content, newPos, 150);
		}
	};
	Guestures.prototype.onTap = function(e) {
		var self = this;
		var $target = $(e.target);
		var instance = self.instance;
		var current = instance.current;
		var endPoints = (e && getPointerXY(e)) || self.startPoints;
		var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
		var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
		var where;
		var process = function(prefix) {
			var action = current.opts[prefix];
			if ($.isFunction(action)) {
				action = action.apply(instance, [current, e]);
			}
			if (!action) {
				return;
			}
			switch (action) {
				case "close":
					instance.close(self.startEvent);
					break;
				case "toggleControls":
					instance.toggleControls();
					break;
				case "next":
					instance.next();
					break;
				case "nextOrClose":
					if (instance.group.length > 1) {
						instance.next();
					} else {
						instance.close(self.startEvent);
					}
					break;
				case "zoom":
					if (current.type == "image" && (current.isLoaded || current.$ghost)) {
						if (instance.canPan()) {
							instance.scaleToFit();
						} else if (instance.isScaledDown()) {
							instance.scaleToActual(tapX, tapY);
						} else if (instance.group.length < 2) {
							instance.close(self.startEvent);
						}
					}
					break;
			}
		};
		if (e.originalEvent && e.originalEvent.button == 2) {
			return;
		}
		if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
			return;
		}
		if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
			where = "Outside";
		} else if ($target.is(".fancybox-slide")) {
			where = "Slide";
		} else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
			where = "Content";
		} else {
			return;
		}
		if (self.tapped) {
			clearTimeout(self.tapped);
			self.tapped = null;
			if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
				return this;
			}
			process("dblclick" + where);
		} else {
			self.tapX = tapX;
			self.tapY = tapY;
			if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
				self.tapped = setTimeout(function() {
					self.tapped = null;
					if (!instance.isAnimating) {
						process("click" + where);
					}
				}, 500);
			} else {
				process("click" + where);
			}
		}
		return this;
	};
	$(document).on("onActivate.fb", function(e, instance) {
		if (instance && !instance.Guestures) {
			instance.Guestures = new Guestures(instance);
		}
	}).on("beforeClose.fb", function(e, instance) {
		if (instance && instance.Guestures) {
			instance.Guestures.destroy();
		}
	});
})(window, document, jQuery);
(function(document, $) {
	"use strict";
	$.extend(true, $.fancybox.defaults, {
		btnTpl: {
			slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' + "</button>"
		},
		slideShow: {
			autoStart: false,
			speed: 3000,
			progress: true
		}
	});
	var SlideShow = function(instance) {
		this.instance = instance;
		this.init();
	};
	$.extend(SlideShow.prototype, {
		timer: null,
		isActive: false,
		$button: null,
		init: function() {
			var self = this,
				instance = self.instance,
				opts = instance.group[instance.currIndex].opts.slideShow;
			self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
				self.toggle();
			});
			if (instance.group.length < 2 || !opts) {
				self.$button.hide();
			} else if (opts.progress) {
				self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
			}
		},
		set: function(force) {
			var self = this,
				instance = self.instance,
				current = instance.current;
			if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
				if (self.isActive && current.contentType !== "video") {
					if (self.$progress) {
						$.fancybox.animate(self.$progress.show(), {
							scaleX: 1
						}, current.opts.slideShow.speed);
					}
					self.timer = setTimeout(function() {
						if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
							instance.jumpTo(0);
						} else {
							instance.next();
						}
					}, current.opts.slideShow.speed);
				}
			} else {
				self.stop();
				instance.idleSecondsCounter = 0;
				instance.showControls();
			}
		},
		clear: function() {
			var self = this;
			clearTimeout(self.timer);
			self.timer = null;
			if (self.$progress) {
				self.$progress.removeAttr("style").hide();
			}
		},
		start: function() {
			var self = this,
				current = self.instance.current;
			if (current) {
				self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
				self.isActive = true;
				if (current.isComplete) {
					self.set(true);
				}
				self.instance.trigger("onSlideShowChange", true);
			}
		},
		stop: function() {
			var self = this,
				current = self.instance.current;
			self.clear();
			self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
			self.isActive = false;
			self.instance.trigger("onSlideShowChange", false);
			if (self.$progress) {
				self.$progress.removeAttr("style").hide();
			}
		},
		toggle: function() {
			var self = this;
			if (self.isActive) {
				self.stop();
			} else {
				self.start();
			}
		}
	});
	$(document).on({
		"onInit.fb": function(e, instance) {
			if (instance && !instance.SlideShow) {
				instance.SlideShow = new SlideShow(instance);
			}
		},
		"beforeShow.fb": function(e, instance, current, firstRun) {
			var SlideShow = instance && instance.SlideShow;
			if (firstRun) {
				if (SlideShow && current.opts.slideShow.autoStart) {
					SlideShow.start();
				}
			} else if (SlideShow && SlideShow.isActive) {
				SlideShow.clear();
			}
		},
		"afterShow.fb": function(e, instance, current) {
			var SlideShow = instance && instance.SlideShow;
			if (SlideShow && SlideShow.isActive) {
				SlideShow.set();
			}
		},
		"afterKeydown.fb": function(e, instance, current, keypress, keycode) {
			var SlideShow = instance && instance.SlideShow;
			if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
				keypress.preventDefault();
				SlideShow.toggle();
			}
		},
		"beforeClose.fb onDeactivate.fb": function(e, instance) {
			var SlideShow = instance && instance.SlideShow;
			if (SlideShow) {
				SlideShow.stop();
			}
		}
	});
	$(document).on("visibilitychange", function() {
		var instance = $.fancybox.getInstance(),
			SlideShow = instance && instance.SlideShow;
		if (SlideShow && SlideShow.isActive) {
			if (document.hidden) {
				SlideShow.clear();
			} else {
				SlideShow.set();
			}
		}
	});
})(document, jQuery);
(function(document, $) {
	"use strict";
	var fn = (function() {
		var fnMap = [
			["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
			["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
			["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
			["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
			["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
		];
		var ret = {};
		for (var i = 0; i < fnMap.length; i++) {
			var val = fnMap[i];
			if (val && val[1] in document) {
				for (var j = 0; j < val.length; j++) {
					ret[fnMap[0][j]] = val[j];
				}
				return ret;
			}
		}
		return false;
	})();
	if (fn) {
		var FullScreen = {
			request: function(elem) {
				elem = elem || document.documentElement;
				elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
			},
			exit: function() {
				document[fn.exitFullscreen]();
			},
			toggle: function(elem) {
				elem = elem || document.documentElement;
				if (this.isFullscreen()) {
					this.exit();
				} else {
					this.request(elem);
				}
			},
			isFullscreen: function() {
				return Boolean(document[fn.fullscreenElement]);
			},
			enabled: function() {
				return Boolean(document[fn.fullscreenEnabled]);
			}
		};
		$.extend(true, $.fancybox.defaults, {
			btnTpl: {
				fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' + "</button>"
			},
			fullScreen: {
				autoStart: false
			}
		});
		$(document).on(fn.fullscreenchange, function() {
			var isFullscreen = FullScreen.isFullscreen(),
				instance = $.fancybox.getInstance();
			if (instance) {
				if (instance.current && instance.current.type === "image" && instance.isAnimating) {
					instance.isAnimating = false;
					instance.update(true, true, 0);
					if (!instance.isComplete) {
						instance.complete();
					}
				}
				instance.trigger("onFullscreenChange", isFullscreen);
				instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
				instance.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !isFullscreen).toggleClass("fancybox-button--fsexit", isFullscreen);
			}
		});
	}
	$(document).on({
		"onInit.fb": function(e, instance) {
			var $container;
			if (!fn) {
				instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
				return;
			}
			if (instance && instance.group[instance.currIndex].opts.fullScreen) {
				$container = instance.$refs.container;
				$container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
					e.stopPropagation();
					e.preventDefault();
					FullScreen.toggle();
				});
				if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
					FullScreen.request();
				}
				instance.FullScreen = FullScreen;
			} else if (instance) {
				instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
			}
		},
		"afterKeydown.fb": function(e, instance, current, keypress, keycode) {
			if (instance && instance.FullScreen && keycode === 70) {
				keypress.preventDefault();
				instance.FullScreen.toggle();
			}
		},
		"beforeClose.fb": function(e, instance) {
			if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
				FullScreen.exit();
			}
		}
	});
})(document, jQuery);
(function(document, $) {
	"use strict";
	var CLASS = "fancybox-thumbs",
		CLASS_ACTIVE = CLASS + "-active";
	$.fancybox.defaults = $.extend(true, {
		btnTpl: {
			thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' + "</button>"
		},
		thumbs: {
			autoStart: false,
			hideOnClose: true,
			parentEl: ".fancybox-container",
			axis: "y"
		}
	}, $.fancybox.defaults);
	var FancyThumbs = function(instance) {
		this.init(instance);
	};
	$.extend(FancyThumbs.prototype, {
		$button: null,
		$grid: null,
		$list: null,
		isVisible: false,
		isActive: false,
		init: function(instance) {
			var self = this,
				group = instance.group,
				enabled = 0;
			self.instance = instance;
			self.opts = group[instance.currIndex].opts.thumbs;
			instance.Thumbs = self;
			self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
			for (var i = 0, len = group.length; i < len; i++) {
				if (group[i].thumb) {
					enabled++;
				}
				if (enabled > 1) {
					break;
				}
			}
			if (enabled > 1 && !!self.opts) {
				self.$button.removeAttr("style").on("click", function() {
					self.toggle();
				});
				self.isActive = true;
			} else {
				self.$button.hide();
			}
		},
		create: function() {
			var self = this,
				instance = self.instance,
				parentEl = self.opts.parentEl,
				list = [],
				src;
			if (!self.$grid) {
				self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));
				self.$grid.on("click", "a", function() {
					instance.jumpTo($(this).attr("data-index"));
				});
			}
			if (!self.$list) {
				self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
			}
			$.each(instance.group, function(i, item) {
				src = item.thumb;
				if (!src && item.type === "image") {
					src = item.src;
				}
				list.push('<a href="javascript:;" tabindex="0" data-index="' +
					i + '"' +
					(src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
			});
			self.$list[0].innerHTML = list.join("");
			if (self.opts.axis === "x") {
				self.$list.width(parseInt(self.$grid.css("padding-right"), 10) +
					instance.group.length * self.$list.children().eq(0).outerWidth(true));
			}
		},
		focus: function(duration) {
			var self = this,
				$list = self.$list,
				$grid = self.$grid,
				thumb, thumbPos;
			if (!self.instance.current) {
				return;
			}
			thumb = $list.children().removeClass(CLASS_ACTIVE).filter('[data-index="' + self.instance.current.index + '"]').addClass(CLASS_ACTIVE);
			thumbPos = thumb.position();
			if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
				$list.stop().animate({
					scrollTop: $list.scrollTop() + thumbPos.top
				}, duration);
			} else if (self.opts.axis === "x" && (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))) {
				$list.parent().stop().animate({
					scrollLeft: thumbPos.left
				}, duration);
			}
		},
		update: function() {
			var that = this;
			that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
			if (that.isVisible) {
				if (!that.$grid) {
					that.create();
				}
				that.instance.trigger("onThumbsShow");
				that.focus(0);
			} else if (that.$grid) {
				that.instance.trigger("onThumbsHide");
			}
			that.instance.update();
		},
		hide: function() {
			this.isVisible = false;
			this.update();
		},
		show: function() {
			this.isVisible = true;
			this.update();
		},
		toggle: function() {
			this.isVisible = !this.isVisible;
			this.update();
		}
	});
	$(document).on({
		"onInit.fb": function(e, instance) {
			var Thumbs;
			if (instance && !instance.Thumbs) {
				Thumbs = new FancyThumbs(instance);
				if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
					Thumbs.show();
				}
			}
		},
		"beforeShow.fb": function(e, instance, item, firstRun) {
			var Thumbs = instance && instance.Thumbs;
			if (Thumbs && Thumbs.isVisible) {
				Thumbs.focus(firstRun ? 0 : 250);
			}
		},
		"afterKeydown.fb": function(e, instance, current, keypress, keycode) {
			var Thumbs = instance && instance.Thumbs;
			if (Thumbs && Thumbs.isActive && keycode === 71) {
				keypress.preventDefault();
				Thumbs.toggle();
			}
		},
		"beforeClose.fb": function(e, instance) {
			var Thumbs = instance && instance.Thumbs;
			if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
				Thumbs.$grid.hide();
			}
		}
	});
})(document, jQuery);
(function(document, $) {
	"use strict";
	$.extend(true, $.fancybox.defaults, {
		btnTpl: {
			share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' + "</button>"
		},
		share: {
			url: function(instance, item) {
				return ((!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location);
			},
			tpl: '<div class="fancybox-share">' + "<h1>{{SHARE}}</h1>" + "<p>" + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + "<span>Facebook</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + "<span>Twitter</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + "<span>Pinterest</span>" + "</a>" + "</p>" + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' + "</div>"
		}
	});

	function escapeHtml(string) {
		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#x2F;",
			"`": "&#x60;",
			"=": "&#x3D;"
		};
		return String(string).replace(/[&<>"'`=\/]/g, function(s) {
			return entityMap[s];
		});
	}
	$(document).on("click", "[data-fancybox-share]", function() {
		var instance = $.fancybox.getInstance(),
			current = instance.current || null,
			url, tpl;
		if (!current) {
			return;
		}
		if ($.type(current.opts.share.url) === "function") {
			url = current.opts.share.url.apply(current, [instance, current]);
		}
		tpl = current.opts.share.tpl.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
		$.fancybox.open({
			src: instance.translate(instance, tpl),
			type: "html",
			opts: {
				touch: false,
				animationEffect: false,
				afterLoad: function(shareInstance, shareCurrent) {
					instance.$refs.container.one("beforeClose.fb", function() {
						shareInstance.close(null, 0);
					});
					shareCurrent.$content.find(".fancybox-share__button").click(function() {
						window.open(this.href, "Share", "width=550, height=450");
						return false;
					});
				},
				mobile: {
					autoFocus: false
				}
			}
		});
	});
})(document, jQuery);
(function(window, document, $) {
	"use strict";
	if (!$.escapeSelector) {
		$.escapeSelector = function(sel) {
			var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
			var fcssescape = function(ch, asCodePoint) {
				if (asCodePoint) {
					if (ch === "\0") {
						return "\uFFFD";
					}
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}
				return "\\" + ch;
			};
			return (sel + "").replace(rcssescape, fcssescape);
		};
	}

	function parseUrl() {
		var hash = window.location.hash.substr(1),
			rez = hash.split("-"),
			index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
			gallery = rez.join("-");
		return {
			hash: hash,
			index: index < 1 ? 1 : index,
			gallery: gallery
		};
	}

	function triggerFromUrl(url) {
		if (url.gallery !== "") {
			$("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1).focus().trigger("click.fb-start");
		}
	}

	function getGalleryID(instance) {
		var opts, ret;
		if (!instance) {
			return false;
		}
		opts = instance.current ? instance.current.opts : instance.opts;
		ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
		return ret === "" ? false : ret;
	}
	$(function() {
		if ($.fancybox.defaults.hash === false) {
			return;
		}
		$(document).on({
			"onInit.fb": function(e, instance) {
				var url, gallery;
				if (instance.group[instance.currIndex].opts.hash === false) {
					return;
				}
				url = parseUrl();
				gallery = getGalleryID(instance);
				if (gallery && url.gallery && gallery == url.gallery) {
					instance.currIndex = url.index - 1;
				}
			},
			"beforeShow.fb": function(e, instance, current, firstRun) {
				var gallery;
				if (!current || current.opts.hash === false) {
					return;
				}
				gallery = getGalleryID(instance);
				if (!gallery) {
					return;
				}
				instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
				if (window.location.hash === "#" + instance.currentHash) {
					return;
				}
				if (firstRun && !instance.origHash) {
					instance.origHash = window.location.hash;
				}
				if (instance.hashTimer) {
					clearTimeout(instance.hashTimer);
				}
				instance.hashTimer = setTimeout(function() {
					if ("replaceState" in window.history) {
						window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + instance.currentHash);
						if (firstRun) {
							instance.hasCreatedHistory = true;
						}
					} else {
						window.location.hash = instance.currentHash;
					}
					instance.hashTimer = null;
				}, 300);
			},
			"beforeClose.fb": function(e, instance, current) {
				if (!current || current.opts.hash === false) {
					return;
				}
				clearTimeout(instance.hashTimer);
				if (instance.currentHash && instance.hasCreatedHistory) {
					window.history.back();
				} else if (instance.currentHash) {
					if ("replaceState" in window.history) {
						window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
					} else {
						window.location.hash = instance.origHash;
					}
				}
				instance.currentHash = null;
			}
		});
		$(window).on("hashchange.fb", function() {
			var url = parseUrl(),
				fb = null;
			$.each($(".fancybox-container").get().reverse(), function(index, value) {
				var tmp = $(value).data("FancyBox");
				if (tmp && tmp.currentHash) {
					fb = tmp;
					return false;
				}
			});
			if (fb) {
				if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
					fb.currentHash = null;
					fb.close();
				}
			} else if (url.gallery !== "") {
				triggerFromUrl(url);
			}
		});
		setTimeout(function() {
			if (!$.fancybox.getInstance()) {
				triggerFromUrl(parseUrl());
			}
		}, 50);
	});
})(window, document, jQuery);
(function(document, $) {
	"use strict";
	var prevTime = new Date().getTime();
	$(document).on({
		"onInit.fb": function(e, instance, current) {
			instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
				var current = instance.current,
					currTime = new Date().getTime();
				if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
					return;
				}
				e.preventDefault();
				e.stopPropagation();
				if (current.$slide.hasClass("fancybox-animated")) {
					return;
				}
				e = e.originalEvent || e;
				if (currTime - prevTime < 250) {
					return;
				}
				prevTime = currTime;
				instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
			});
		}
	});
})(document, jQuery);
/*chosen.jquery.js*/

(function() {
	var $, AbstractChosen, Chosen, SelectParser, bind = function(fn, me) {
			return function() {
				return fn.apply(me, arguments);
			};
		},
		extend = function(child, parent) {
			for (var key in parent) {
				if (hasProp.call(parent, key)) child[key] = parent[key];
			}

			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		},
		hasProp = {}.hasOwnProperty;
	SelectParser = (function() {
		function SelectParser() {
			this.options_index = 0;
			this.parsed = [];
		}
		SelectParser.prototype.add_node = function(child) {
			if (child.nodeName.toUpperCase() === "OPTGROUP") {
				return this.add_group(child);
			} else {
				return this.add_option(child);
			}
		};
		SelectParser.prototype.add_group = function(group) {
			var group_position, i, len, option, ref, results1;
			group_position = this.parsed.length;
			this.parsed.push({
				array_index: group_position,
				group: true,
				label: group.label,
				title: group.title ? group.title : void 0,
				children: 0,
				disabled: group.disabled,
				classes: group.className
			});
			ref = group.childNodes;
			results1 = [];
			for (i = 0, len = ref.length; i < len; i++) {
				option = ref[i];
				results1.push(this.add_option(option, group_position, group.disabled));
			}
			return results1;
		};
		SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
			if (option.nodeName.toUpperCase() === "OPTION") {
				if (option.text !== "") {
					if (group_position != null) {
						this.parsed[group_position].children += 1;
					}
					this.parsed.push({
						array_index: this.parsed.length,
						options_index: this.options_index,
						value: option.value,
						text: option.text,
						html: option.innerHTML,
						title: option.title ? option.title : void 0,
						selected: option.selected,
						disabled: group_disabled === true ? group_disabled : option.disabled,
						group_array_index: group_position,
						group_label: group_position != null ? this.parsed[group_position].label : null,
						classes: option.className,
						style: option.style.cssText
					});
				} else {
					this.parsed.push({
						array_index: this.parsed.length,
						options_index: this.options_index,
						empty: true
					});
				}
				return this.options_index += 1;
			}
		};
		return SelectParser;
	})();
	SelectParser.select_to_array = function(select) {
		var child, i, len, parser, ref;
		parser = new SelectParser();
		ref = select.childNodes;
		for (i = 0, len = ref.length; i < len; i++) {
			child = ref[i];
			parser.add_node(child);
		}
		return parser.parsed;
	};
	AbstractChosen = (function() {
		function AbstractChosen(form_field, options1) {
			this.form_field = form_field;
			this.options = options1 != null ? options1 : {};
			this.label_click_handler = bind(this.label_click_handler, this);
			if (!AbstractChosen.browser_is_supported()) {
				return;
			}
			this.is_multiple = this.form_field.multiple;
			this.set_default_text();
			this.set_default_values();
			this.setup();
			this.set_up_html();
			this.register_observers();
			this.on_ready();
		}
		AbstractChosen.prototype.set_default_values = function() {
			this.click_test_action = (function(_this) {
				return function(evt) {
					return _this.test_active_click(evt);
				};
			})(this);
			this.activate_action = (function(_this) {
				return function(evt) {
					return _this.activate_field(evt);
				};
			})(this);
			this.active_field = false;
			this.mouse_on_container = false;
			this.results_showing = false;
			this.result_highlighted = null;
			this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
			this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
			this.disable_search_threshold = this.options.disable_search_threshold || 0;
			this.disable_search = this.options.disable_search || false;
			this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
			this.group_search = this.options.group_search != null ? this.options.group_search : true;
			this.search_contains = this.options.search_contains || false;
			this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
			this.max_selected_options = this.options.max_selected_options || Infinity;
			this.inherit_select_classes = this.options.inherit_select_classes || false;
			this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
			this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
			this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
			this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
			this.case_sensitive_search = this.options.case_sensitive_search || false;
			return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
		};
		AbstractChosen.prototype.set_default_text = function() {
			if (this.form_field.getAttribute("data-placeholder")) {
				this.default_text = this.form_field.getAttribute("data-placeholder");
			} else if (this.is_multiple) {
				this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
			} else {
				this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
			}
			this.default_text = this.escape_html(this.default_text);
			return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
		};
		AbstractChosen.prototype.choice_label = function(item) {
			if (this.include_group_label_in_selected && (item.group_label != null)) {
				return "<b class='group-name'>" + (this.escape_html(item.group_label)) + "</b>" + item.html;
			} else {
				return item.html;
			}
		};
		AbstractChosen.prototype.mouse_enter = function() {
			return this.mouse_on_container = true;
		};
		AbstractChosen.prototype.mouse_leave = function() {
			return this.mouse_on_container = false;
		};
		AbstractChosen.prototype.input_focus = function(evt) {
			if (this.is_multiple) {
				if (!this.active_field) {
					return setTimeout(((function(_this) {
						return function() {
							return _this.container_mousedown();
						};
					})(this)), 50);
				}
			} else {
				if (!this.active_field) {
					return this.activate_field();
				}
			}
		};
		AbstractChosen.prototype.input_blur = function(evt) {
			if (!this.mouse_on_container) {
				this.active_field = false;
				return setTimeout(((function(_this) {
					return function() {
						return _this.blur_test();
					};
				})(this)), 100);
			}
		};
		AbstractChosen.prototype.label_click_handler = function(evt) {
			if (this.is_multiple) {
				return this.container_mousedown(evt);
			} else {
				return this.activate_field();
			}
		};
		AbstractChosen.prototype.results_option_build = function(options) {
			var content, data, data_content, i, len, ref, shown_results;
			content = '';
			shown_results = 0;
			ref = this.results_data;
			for (i = 0, len = ref.length; i < len; i++) {
				data = ref[i];
				data_content = '';
				if (data.group) {
					data_content = this.result_add_group(data);
				} else {
					data_content = this.result_add_option(data);
				}
				if (data_content !== '') {
					shown_results++;
					content += data_content;
				}
				if (options != null ? options.first : void 0) {
					if (data.selected && this.is_multiple) {
						this.choice_build(data);
					} else if (data.selected && !this.is_multiple) {
						this.single_set_selected_text(this.choice_label(data));
					}
				}
				if (shown_results >= this.max_shown_results) {
					break;
				}
			}
			return content;
		};
		AbstractChosen.prototype.result_add_option = function(option) {
			var classes, option_el;
			if (!option.search_match) {
				return '';
			}
			if (!this.include_option_in_results(option)) {
				return '';
			}
			classes = [];
			if (!option.disabled && !(option.selected && this.is_multiple)) {
				classes.push("active-result");
			}
			if (option.disabled && !(option.selected && this.is_multiple)) {
				classes.push("disabled-result");
			}
			if (option.selected) {
				classes.push("result-selected");
			}
			if (option.group_array_index != null) {
				classes.push("group-option");
			}
			if (option.classes !== "") {
				classes.push(option.classes);
			}
			option_el = document.createElement("li");
			option_el.className = classes.join(" ");
			if (option.style) {
				option_el.style.cssText = option.style;
			}
			option_el.setAttribute("data-option-array-index", option.array_index);
			option_el.innerHTML = option.highlighted_html || option.html;
			if (option.title) {
				option_el.title = option.title;
			}
			return this.outerHTML(option_el);
		};
		AbstractChosen.prototype.result_add_group = function(group) {
			var classes, group_el;
			if (!(group.search_match || group.group_match)) {
				return '';
			}
			if (!(group.active_options > 0)) {
				return '';
			}
			classes = [];
			classes.push("group-result");
			if (group.classes) {
				classes.push(group.classes);
			}
			group_el = document.createElement("li");
			group_el.className = classes.join(" ");
			group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);
			if (group.title) {
				group_el.title = group.title;
			}
			return this.outerHTML(group_el);
		};
		AbstractChosen.prototype.results_update_field = function() {
			this.set_default_text();
			if (!this.is_multiple) {
				this.results_reset_cleanup();
			}
			this.result_clear_highlight();
			this.results_build();
			if (this.results_showing) {
				return this.winnow_results();
			}
		};
		AbstractChosen.prototype.reset_single_select_options = function() {
			var i, len, ref, result, results1;
			ref = this.results_data;
			results1 = [];
			for (i = 0, len = ref.length; i < len; i++) {
				result = ref[i];
				if (result.selected) {
					results1.push(result.selected = false);
				} else {
					results1.push(void 0);
				}
			}
			return results1;
		};
		AbstractChosen.prototype.results_toggle = function() {
			if (this.results_showing) {
				return this.results_hide();
			} else {
				return this.results_show();
			}
		};
		AbstractChosen.prototype.results_search = function(evt) {
			if (this.results_showing) {
				return this.winnow_results();
			} else {
				return this.results_show();
			}
		};
		AbstractChosen.prototype.winnow_results = function(options) {
			var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
			this.no_results_clear();
			results = 0;
			query = this.get_search_text();
			var strTemp = query.toLowerCase();
			strTemp = strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, "a");
			strTemp = strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
			strTemp = strTemp.replace(/ì|í|ị|ỉ|ĩ/gi, "i");
			strTemp = strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, "o");
			strTemp = strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
			strTemp = strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, "y");
			strTemp = strTemp.replace(/đ/gi, "d");
			strTemp = strTemp.replace(/̀|́|̣|̉|̃|/gi, "");
			escapedQuery = strTemp.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
			regex = this.get_search_regex(escapedQuery);
			ref = this.results_data;
			for (i = 0, len = ref.length; i < len; i++) {
				option = ref[i];
				option.search_match = false;
				results_group = null;
				search_match = null;
				option.highlighted_html = '';
				if (this.include_option_in_results(option)) {
					if (option.group) {
						option.group_match = false;
						option.active_options = 0;
					}
					if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
						results_group = this.results_data[option.group_array_index];
						if (results_group.active_options === 0 && results_group.search_match) {
							results += 1;
						}
						results_group.active_options += 1;
					}
					text = option.group ? option.label : option.text;
					if (!(option.group && !this.group_search)) {
						search_match = this.search_string_match(text, regex);
						option.search_match = search_match != null;
						if (option.search_match && !option.group) {
							results += 1;
						}
						if (option.search_match) {
							if (query.length) {
								startpos = search_match.index;
								prefix = text.slice(0, startpos);
								fix = text.slice(startpos, startpos + query.length);
								suffix = text.slice(startpos + query.length);
								option.highlighted_html = (this.escape_html(prefix)) + "<em>" + (this.escape_html(fix)) + "</em>" + (this.escape_html(suffix));
							}
							if (results_group != null) {
								results_group.group_match = true;
							}
						} else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
							option.search_match = true;
						}
					}
				}
			}
			this.result_clear_highlight();
			if (results < 1 && query.length) {
				this.update_results_content("");
				return this.no_results(query);
			} else {
				this.update_results_content(this.results_option_build());
				if (!(options != null ? options.skip_highlight : void 0)) {
					return this.winnow_results_set_highlight();
				}
			}
		};
		AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
			var regex_flag, regex_string;
			regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
			if (!(this.enable_split_word_search || this.search_contains)) {
				regex_string = "^" + regex_string;
			}
			regex_flag = this.case_sensitive_search ? "" : "i";
			return new RegExp(regex_string, regex_flag);
		};
		AbstractChosen.prototype.search_string_match = function(search_string, regex) {
			var match;
			var strTemp = search_string.toLowerCase();
			strTemp = strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
			strTemp = strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
			strTemp = strTemp.replace(/ì|í|ị|ỉ|ĩ/g, "i");
			strTemp = strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
			strTemp = strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
			strTemp = strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
			strTemp = strTemp.replace(/đ/g, "d");
			strTemp = strTemp.replace(/̀|́|̣|̉|̃|/gi, "");
			match = regex.exec(strTemp);
			if (!this.search_contains && (match != null ? match[1] : void 0)) {
				match.index += 1;
			}
			return match;
		};
		AbstractChosen.prototype.choices_count = function() {
			var i, len, option, ref;
			if (this.selected_option_count != null) {
				return this.selected_option_count;
			}
			this.selected_option_count = 0;
			ref = this.form_field.options;
			for (i = 0, len = ref.length; i < len; i++) {
				option = ref[i];
				if (option.selected) {
					this.selected_option_count += 1;
				}
			}
			return this.selected_option_count;
		};
		AbstractChosen.prototype.choices_click = function(evt) {
			evt.preventDefault();
			this.activate_field();
			if (!(this.results_showing || this.is_disabled)) {
				return this.results_show();
			}
		};
		AbstractChosen.prototype.keydown_checker = function(evt) {
			var ref, stroke;
			stroke = (ref = evt.which) != null ? ref : evt.keyCode;
			this.search_field_scale();
			if (stroke !== 8 && this.pending_backstroke) {
				this.clear_backstroke();
			}
			switch (stroke) {
				case 8:
					this.backstroke_length = this.get_search_field_value().length;
					break;
				case 9:
					if (this.results_showing && !this.is_multiple) {
						this.result_select(evt);
					}
					this.mouse_on_container = false;
					break;
				case 13:
					if (this.results_showing) {
						evt.preventDefault();
					}
					break;
				case 27:
					if (this.results_showing) {
						evt.preventDefault();
					}
					break;
				case 32:
					if (this.disable_search) {
						evt.preventDefault();
					}
					break;
				case 38:
					evt.preventDefault();
					this.keyup_arrow();
					break;
				case 40:
					evt.preventDefault();
					this.keydown_arrow();
					break;
			}
		};
		AbstractChosen.prototype.keyup_checker = function(evt) {
			var ref, stroke;
			stroke = (ref = evt.which) != null ? ref : evt.keyCode;
			this.search_field_scale();
			switch (stroke) {
				case 8:
					if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
						this.keydown_backstroke();
					} else if (!this.pending_backstroke) {
						this.result_clear_highlight();
						this.results_search();
					}
					break;
				case 13:
					evt.preventDefault();
					if (this.results_showing) {
						this.result_select(evt);
					}
					break;
				case 27:
					if (this.results_showing) {
						this.results_hide();
					}
					break;
				case 9:
				case 16:
				case 17:
				case 18:
				case 38:
				case 40:
				case 91:
					break;
				default:
					this.results_search();
					break;
			}
		};
		AbstractChosen.prototype.clipboard_event_checker = function(evt) {
			if (this.is_disabled) {
				return;
			}
			return setTimeout(((function(_this) {
				return function() {
					return _this.results_search();
				};
			})(this)), 50);
		};
		AbstractChosen.prototype.container_width = function() {
			if (this.options.width != null) {
				return this.options.width;
			} else {
				return this.form_field.offsetWidth + "px";
			}
		};
		AbstractChosen.prototype.include_option_in_results = function(option) {
			if (this.is_multiple && (!this.display_selected_options && option.selected)) {
				return false;
			}
			if (!this.display_disabled_options && option.disabled) {
				return false;
			}
			if (option.empty) {
				return false;
			}
			return true;
		};
		AbstractChosen.prototype.search_results_touchstart = function(evt) {
			this.touch_started = true;
			return this.search_results_mouseover(evt);
		};
		AbstractChosen.prototype.search_results_touchmove = function(evt) {
			this.touch_started = false;
			return this.search_results_mouseout(evt);
		};
		AbstractChosen.prototype.search_results_touchend = function(evt) {
			if (this.touch_started) {
				return this.search_results_mouseup(evt);
			}
		};
		AbstractChosen.prototype.outerHTML = function(element) {
			var tmp;
			if (element.outerHTML) {
				return element.outerHTML;
			}
			tmp = document.createElement("div");
			tmp.appendChild(element);
			return tmp.innerHTML;
		};
		AbstractChosen.prototype.get_single_html = function() {
			return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"search\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
		};
		AbstractChosen.prototype.get_multi_html = function() {
			return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"search\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
		};
		AbstractChosen.prototype.get_no_results_html = function(terms) {
			return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + (this.escape_html(terms)) + "</span>\n</li>";
		};
		AbstractChosen.browser_is_supported = function() {
			if ("Microsoft Internet Explorer" === window.navigator.appName) {
				return document.documentMode >= 8;
			}
			return true;
		};
		AbstractChosen.default_multiple_text = "Select Some Options";
		AbstractChosen.default_single_text = "Select an Option";
		AbstractChosen.default_no_result_text = "No results match";
		return AbstractChosen;
	})();
	$ = jQuery;
	$.fn.extend({
		chosen: function(options) {
			if (!AbstractChosen.browser_is_supported()) {
				return this;
			}
			return this.each(function(input_field) {
				var $this, chosen;
				$this = $(this);
				chosen = $this.data('chosen');
				if (options === 'destroy') {
					if (chosen instanceof Chosen) {
						chosen.destroy();
					}
					return;
				}
				if (!(chosen instanceof Chosen)) {
					$this.data('chosen', new Chosen(this, options));
				}
			});
		}
	});
	Chosen = (function(superClass) {
		extend(Chosen, superClass);

		function Chosen() {
			return Chosen.__super__.constructor.apply(this, arguments);
		}
		Chosen.prototype.setup = function() {
			this.form_field_jq = $(this.form_field);
			return this.current_selectedIndex = this.form_field.selectedIndex;
		};
		Chosen.prototype.set_up_html = function() {
			var container_classes, container_props;
			container_classes = ["chosen-container"];
			container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
			if (this.inherit_select_classes && this.form_field.className) {
				container_classes.push(this.form_field.className);
			}
			if (this.is_rtl) {
				container_classes.push("chosen-rtl");
			}
			container_props = {
				'class': container_classes.join(' '),
				'title': this.form_field.title
			};
			if (this.form_field.id.length) {
				container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
			}
			this.container = $("<div />", container_props);
			this.container.width(this.container_width());
			if (this.is_multiple) {
				this.container.html(this.get_multi_html());
			} else {
				this.container.html(this.get_single_html());
			}
			this.form_field_jq.hide().after(this.container);
			this.dropdown = this.container.find('div.chosen-drop').first();
			this.search_field = this.container.find('input').first();
			this.search_results = this.container.find('ul.chosen-results').first();
			this.search_field_scale();
			this.search_no_results = this.container.find('li.no-results').first();
			if (this.is_multiple) {
				this.search_choices = this.container.find('ul.chosen-choices').first();
				this.search_container = this.container.find('li.search-field').first();
			} else {
				this.search_container = this.container.find('div.chosen-search').first();
				this.selected_item = this.container.find('.chosen-single').first();
			}
			this.results_build();
			this.set_tab_index();
			return this.set_label_behavior();
		};
		Chosen.prototype.on_ready = function() {
			return this.form_field_jq.trigger("chosen:ready", {
				chosen: this
			});
		};
		Chosen.prototype.register_observers = function() {
			this.container.on('touchstart.chosen', (function(_this) {
				return function(evt) {
					_this.container_mousedown(evt);
				};
			})(this));
			this.container.on('touchend.chosen', (function(_this) {
				return function(evt) {
					_this.container_mouseup(evt);
				};
			})(this));
			this.container.on('mousedown.chosen', (function(_this) {
				return function(evt) {
					_this.container_mousedown(evt);
				};
			})(this));
			this.container.on('mouseup.chosen', (function(_this) {
				return function(evt) {
					_this.container_mouseup(evt);
				};
			})(this));
			this.container.on('mouseenter.chosen', (function(_this) {
				return function(evt) {
					_this.mouse_enter(evt);
				};
			})(this));
			this.container.on('mouseleave.chosen', (function(_this) {
				return function(evt) {
					_this.mouse_leave(evt);
				};
			})(this));
			this.search_results.on('mouseup.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_mouseup(evt);
				};
			})(this));
			this.search_results.on('mouseover.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_mouseover(evt);
				};
			})(this));
			this.search_results.on('mouseout.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_mouseout(evt);
				};
			})(this));
			this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_mousewheel(evt);
				};
			})(this));
			this.search_results.on('touchstart.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_touchstart(evt);
				};
			})(this));
			this.search_results.on('touchmove.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_touchmove(evt);
				};
			})(this));
			this.search_results.on('touchend.chosen', (function(_this) {
				return function(evt) {
					_this.search_results_touchend(evt);
				};
			})(this));
			this.form_field_jq.on("chosen:updated.chosen", (function(_this) {
				return function(evt) {
					_this.results_update_field(evt);
				};
			})(this));
			this.form_field_jq.on("chosen:activate.chosen", (function(_this) {
				return function(evt) {
					_this.activate_field(evt);
				};
			})(this));
			this.form_field_jq.on("chosen:open.chosen", (function(_this) {
				return function(evt) {
					_this.container_mousedown(evt);
				};
			})(this));
			this.form_field_jq.on("chosen:close.chosen", (function(_this) {
				return function(evt) {
					_this.close_field(evt);
				};
			})(this));
			this.search_field.on('blur.chosen', (function(_this) {
				return function(evt) {
					_this.input_blur(evt);
				};
			})(this));
			this.search_field.on('keyup.chosen', (function(_this) {
				return function(evt) {
					_this.keyup_checker(evt);
				};
			})(this));
			this.search_field.on('keydown.chosen', (function(_this) {
				return function(evt) {
					_this.keydown_checker(evt);
				};
			})(this));
			this.search_field.on('focus.chosen', (function(_this) {
				return function(evt) {
					_this.input_focus(evt);
				};
			})(this));
			this.search_field.on('cut.chosen', (function(_this) {
				return function(evt) {
					_this.clipboard_event_checker(evt);
				};
			})(this));
			this.search_field.on('paste.chosen', (function(_this) {
				return function(evt) {
					_this.clipboard_event_checker(evt);
				};
			})(this));
			if (this.is_multiple) {
				return this.search_choices.on('click.chosen', (function(_this) {
					return function(evt) {
						_this.choices_click(evt);
					};
				})(this));
			} else {
				return this.container.on('click.chosen', function(evt) {
					evt.preventDefault();
				});
			}
		};
		Chosen.prototype.destroy = function() {
			$(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);
			if (this.form_field_label.length > 0) {
				this.form_field_label.off('click.chosen');
			}
			if (this.search_field[0].tabIndex) {
				this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
			}
			this.container.remove();
			this.form_field_jq.removeData('chosen');
			return this.form_field_jq.show();
		};
		Chosen.prototype.search_field_disabled = function() {
			this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
			this.container.toggleClass('chosen-disabled', this.is_disabled);
			this.search_field[0].disabled = this.is_disabled;
			if (!this.is_multiple) {
				this.selected_item.off('focus.chosen', this.activate_field);
			}
			if (this.is_disabled) {
				return this.close_field();
			} else if (!this.is_multiple) {
				return this.selected_item.on('focus.chosen', this.activate_field);
			}
		};
		Chosen.prototype.container_mousedown = function(evt) {
			var ref;
			if (this.is_disabled) {
				return;
			}
			if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
				evt.preventDefault();
			}
			if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
				if (!this.active_field) {
					if (this.is_multiple) {
						this.search_field.val("");
					}
					$(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
					this.results_show();
				} else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
					evt.preventDefault();
					this.results_toggle();
				}
				return this.activate_field();
			}
		};
		Chosen.prototype.container_mouseup = function(evt) {
			if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
				return this.results_reset(evt);
			}
		};
		Chosen.prototype.search_results_mousewheel = function(evt) {
			var delta;
			if (evt.originalEvent) {
				delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
			}
			if (delta != null) {
				evt.preventDefault();
				if (evt.type === 'DOMMouseScroll') {
					delta = delta * 40;
				}
				return this.search_results.scrollTop(delta + this.search_results.scrollTop());
			}
		};
		Chosen.prototype.blur_test = function(evt) {
			if (!this.active_field && this.container.hasClass("chosen-container-active")) {
				return this.close_field();
			}
		};
		Chosen.prototype.close_field = function() {
			$(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
			this.active_field = false;
			this.results_hide();
			this.container.removeClass("chosen-container-active");
			this.clear_backstroke();
			this.show_search_field_default();
			this.search_field_scale();
			return this.search_field.blur();
		};
		Chosen.prototype.activate_field = function() {
			if (this.is_disabled) {
				return;
			}
			this.container.addClass("chosen-container-active");
			this.active_field = true;
			this.search_field.val(this.search_field.val());
			return this.search_field.focus();
		};
		Chosen.prototype.test_active_click = function(evt) {
			var active_container;
			active_container = $(evt.target).closest('.chosen-container');
			if (active_container.length && this.container[0] === active_container[0]) {
				return this.active_field = true;
			} else {
				return this.close_field();
			}
		};
		Chosen.prototype.results_build = function() {
			this.parsing = true;
			this.selected_option_count = null;
			this.results_data = SelectParser.select_to_array(this.form_field);
			if (this.is_multiple) {
				this.search_choices.find("li.search-choice").remove();
			} else {
				this.single_set_selected_text();
				if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
					this.search_field[0].readOnly = true;
					this.container.addClass("chosen-container-single-nosearch");
				} else {
					this.search_field[0].readOnly = false;
					this.container.removeClass("chosen-container-single-nosearch");
				}
			}
			this.update_results_content(this.results_option_build({
				first: true
			}));
			this.search_field_disabled();
			this.show_search_field_default();
			this.search_field_scale();
			return this.parsing = false;
		};
		Chosen.prototype.result_do_highlight = function(el) {
			var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
			if (el.length) {
				this.result_clear_highlight();
				this.result_highlight = el;
				this.result_highlight.addClass("highlighted");
				maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
				visible_top = this.search_results.scrollTop();
				visible_bottom = maxHeight + visible_top;
				high_top = this.result_highlight.position().top + this.search_results.scrollTop();
				high_bottom = high_top + this.result_highlight.outerHeight();
				if (high_bottom >= visible_bottom) {
					return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
				} else if (high_top < visible_top) {
					return this.search_results.scrollTop(high_top);
				}
			}
		};
		Chosen.prototype.result_clear_highlight = function() {
			if (this.result_highlight) {
				this.result_highlight.removeClass("highlighted");
			}
			return this.result_highlight = null;
		};
		Chosen.prototype.results_show = function() {
			if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
				this.form_field_jq.trigger("chosen:maxselected", {
					chosen: this
				});
				return false;
			}
			this.container.addClass("chosen-with-drop");
			this.results_showing = true;
			this.search_field.focus();
			this.search_field.val(this.get_search_field_value());
			this.winnow_results();
			return this.form_field_jq.trigger("chosen:showing_dropdown", {
				chosen: this
			});
		};
		Chosen.prototype.update_results_content = function(content) {
			return this.search_results.html(content);
		};
		Chosen.prototype.results_hide = function() {
			if (this.results_showing) {
				this.result_clear_highlight();
				this.container.removeClass("chosen-with-drop");
				this.form_field_jq.trigger("chosen:hiding_dropdown", {
					chosen: this
				});
			}
			return this.results_showing = false;
		};
		Chosen.prototype.set_tab_index = function(el) {
			var ti;
			if (this.form_field.tabIndex) {
				ti = this.form_field.tabIndex;
				this.form_field.tabIndex = -1;
				return this.search_field[0].tabIndex = ti;
			}
		};
		Chosen.prototype.set_label_behavior = function() {
			this.form_field_label = this.form_field_jq.parents("label");
			if (!this.form_field_label.length && this.form_field.id.length) {
				this.form_field_label = $("label[for='" + this.form_field.id + "']");
			}
			if (this.form_field_label.length > 0) {
				return this.form_field_label.on('click.chosen', this.label_click_handler);
			}
		};
		Chosen.prototype.show_search_field_default = function() {
			if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
				this.search_field.val(this.default_text);
				return this.search_field.addClass("default");
			} else {
				this.search_field.val("");
				return this.search_field.removeClass("default");
			}
		};
		Chosen.prototype.search_results_mouseup = function(evt) {
			var target;
			target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
			if (target.length) {
				this.result_highlight = target;
				this.result_select(evt);
				return this.search_field.focus();
			}
		};
		Chosen.prototype.search_results_mouseover = function(evt) {
			var target;
			target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
			if (target) {
				return this.result_do_highlight(target);
			}
		};
		Chosen.prototype.search_results_mouseout = function(evt) {
			if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
				return this.result_clear_highlight();
			}
		};
		Chosen.prototype.choice_build = function(item) {
			var choice, close_link;
			choice = $('<li />', {
				"class": "search-choice"
			}).html("<span>" + (this.choice_label(item)) + "</span>");
			if (item.disabled) {
				choice.addClass('search-choice-disabled');
			} else {
				close_link = $('<a />', {
					"class": 'search-choice-close',
					'data-option-array-index': item.array_index
				});
				close_link.on('click.chosen', (function(_this) {
					return function(evt) {
						return _this.choice_destroy_link_click(evt);
					};
				})(this));
				choice.append(close_link);
			}
			return this.search_container.before(choice);
		};
		Chosen.prototype.choice_destroy_link_click = function(evt) {
			evt.preventDefault();
			evt.stopPropagation();
			if (!this.is_disabled) {
				return this.choice_destroy($(evt.target));
			}
		};
		Chosen.prototype.choice_destroy = function(link) {
			if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
				if (this.active_field) {
					this.search_field.focus();
				} else {
					this.show_search_field_default();
				}
				if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
					this.results_hide();
				}
				link.parents('li').first().remove();
				return this.search_field_scale();
			}
		};
		Chosen.prototype.results_reset = function() {
			this.reset_single_select_options();
			this.form_field.options[0].selected = true;
			this.single_set_selected_text();
			this.show_search_field_default();
			this.results_reset_cleanup();
			this.trigger_form_field_change();
			if (this.active_field) {
				return this.results_hide();
			}
		};
		Chosen.prototype.results_reset_cleanup = function() {
			this.current_selectedIndex = this.form_field.selectedIndex;
			return this.selected_item.find("abbr").remove();
		};
		Chosen.prototype.result_select = function(evt) {
			var high, item;
			if (this.result_highlight) {
				high = this.result_highlight;
				this.result_clear_highlight();
				if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
					this.form_field_jq.trigger("chosen:maxselected", {
						chosen: this
					});
					return false;
				}
				if (this.is_multiple) {
					high.removeClass("active-result");
				} else {
					this.reset_single_select_options();
				}
				high.addClass("result-selected");
				item = this.results_data[high[0].getAttribute("data-option-array-index")];
				item.selected = true;
				this.form_field.options[item.options_index].selected = true;
				this.selected_option_count = null;
				if (this.is_multiple) {
					this.choice_build(item);
				} else {
					this.single_set_selected_text(this.choice_label(item));
				}
				if (this.is_multiple && (!this.hide_results_on_select || (evt.metaKey || evt.ctrlKey))) {
					if (evt.metaKey || evt.ctrlKey) {
						this.winnow_results({
							skip_highlight: true
						});
					} else {
						this.search_field.val("");
						this.winnow_results();
					}
				} else {
					this.results_hide();
					this.show_search_field_default();
				}
				if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
					this.trigger_form_field_change({
						selected: this.form_field.options[item.options_index].value
					});
				}
				this.current_selectedIndex = this.form_field.selectedIndex;
				evt.preventDefault();
				return this.search_field_scale();
			}
		};
		Chosen.prototype.single_set_selected_text = function(text) {
			if (text == null) {
				text = this.default_text;
			}
			if (text === this.default_text) {
				this.selected_item.addClass("chosen-default");
			} else {
				this.single_deselect_control_build();
				this.selected_item.removeClass("chosen-default");
			}
			return this.selected_item.find("span").html(text);
		};
		Chosen.prototype.result_deselect = function(pos) {
			var result_data;
			result_data = this.results_data[pos];
			if (!this.form_field.options[result_data.options_index].disabled) {
				result_data.selected = false;
				this.form_field.options[result_data.options_index].selected = false;
				this.selected_option_count = null;
				this.result_clear_highlight();
				if (this.results_showing) {
					this.winnow_results();
				}
				this.trigger_form_field_change({
					deselected: this.form_field.options[result_data.options_index].value
				});
				this.search_field_scale();
				return true;
			} else {
				return false;
			}
		};
		Chosen.prototype.single_deselect_control_build = function() {
			if (!this.allow_single_deselect) {
				return;
			}
			if (!this.selected_item.find("abbr").length) {
				this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
			}
			return this.selected_item.addClass("chosen-single-with-deselect");
		};
		Chosen.prototype.get_search_field_value = function() {
			return this.search_field.val();
		};
		Chosen.prototype.get_search_text = function() {
			return $.trim(this.get_search_field_value());
		};
		Chosen.prototype.escape_html = function(text) {
			return $('<div/>').text(text).html();
		};
		Chosen.prototype.winnow_results_set_highlight = function() {
			var do_high, selected_results;
			selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
			do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
			if (do_high != null) {
				return this.result_do_highlight(do_high);
			}
		};
		Chosen.prototype.no_results = function(terms) {
			var no_results_html;
			no_results_html = this.get_no_results_html(terms);
			this.search_results.append(no_results_html);
			return this.form_field_jq.trigger("chosen:no_results", {
				chosen: this
			});
		};
		Chosen.prototype.no_results_clear = function() {
			return this.search_results.find(".no-results").remove();
		};
		Chosen.prototype.keydown_arrow = function() {
			var next_sib;
			if (this.results_showing && this.result_highlight) {
				next_sib = this.result_highlight.nextAll("li.active-result").first();
				if (next_sib) {
					return this.result_do_highlight(next_sib);
				}
			} else {
				return this.results_show();
			}
		};
		Chosen.prototype.keyup_arrow = function() {
			var prev_sibs;
			if (!this.results_showing && !this.is_multiple) {
				return this.results_show();
			} else if (this.result_highlight) {
				prev_sibs = this.result_highlight.prevAll("li.active-result");
				if (prev_sibs.length) {
					return this.result_do_highlight(prev_sibs.first());
				} else {
					if (this.choices_count() > 0) {
						this.results_hide();
					}
					return this.result_clear_highlight();
				}
			}
		};
		Chosen.prototype.keydown_backstroke = function() {
			var next_available_destroy;
			if (this.pending_backstroke) {
				this.choice_destroy(this.pending_backstroke.find("a").first());
				return this.clear_backstroke();
			} else {
				next_available_destroy = this.search_container.siblings("li.search-choice").last();
				if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
					this.pending_backstroke = next_available_destroy;
					if (this.single_backstroke_delete) {
						return this.keydown_backstroke();
					} else {
						return this.pending_backstroke.addClass("search-choice-focus");
					}
				}
			}
		};
		Chosen.prototype.clear_backstroke = function() {
			if (this.pending_backstroke) {
				this.pending_backstroke.removeClass("search-choice-focus");
			}
			return this.pending_backstroke = null;
		};
		Chosen.prototype.search_field_scale = function() {
			var div, i, len, style, style_block, styles, width;
			if (!this.is_multiple) {
				return;
			}
			style_block = {
				position: 'absolute',
				left: '-1000px',
				top: '-1000px',
				display: 'none',
				whiteSpace: 'pre'
			};
			styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
			for (i = 0, len = styles.length; i < len; i++) {
				style = styles[i];
				style_block[style] = this.search_field.css(style);
			}
			div = $('<div />').css(style_block);
			div.text(this.get_search_field_value());
			$('body').append(div);
			width = div.width() + 25;
			div.remove();
			if (this.container.is(':visible')) {
				width = Math.min(this.container.outerWidth() - 10, width);
			}
			return this.search_field.width(width);
		};
		Chosen.prototype.trigger_form_field_change = function(extra) {
			this.form_field_jq.trigger("input", extra);
			return this.form_field_jq.trigger("change", extra);
		};
		return Chosen;
	})(AbstractChosen);
}).call(this);
/*jquery.alerts.js*/

(function($) {
	$.alerts = {
		verticalOffset: -75,
		horizontalOffset: 0,
		repositionOnResize: true,
		overlayOpacity: .01,
		overlayColor: '#FFF',
		draggable: true,
		okButton: '&nbsp;OK&nbsp;',
		cancelButton: '&nbsp;Cancel&nbsp;',
		dialogClass: null,
		alert: function(message, title, style, callback) {
			if (title == null) title = 'Alert';
			if (style == null) style = 'alert';
			$.alerts._show(title, message, null, style, function(result) {
				if (callback) callback(result);
			});
		},
		confirm: function(message, title, callback) {
			if (title == null) title = 'Confirm';
			$.alerts._show(title, message, null, 'confirm', function(result) {
				if (callback) callback(result);
			});
		},
		prompt: function(message, value, title, callback) {
			if (title == null) title = 'Prompt';
			$.alerts._show(title, message, value, 'prompt', function(result) {
				if (callback) callback(result);
			});
		},
		_show: function(title, msg, value, type, callback) {
			$.alerts._hide();
			$.alerts._overlay('show');
			$("BODY").append('<div id="popup_container">' + '<h1 id="popup_title"></h1>' + '<div id="popup_content">' + '<div id="popup_message"></div>' + '</div>' + '</div>');
			if ($.alerts.dialogClass) $("#popup_container").addClass($.alerts.dialogClass);
			var pos = 'fixed';
			$("#popup_container").css({
				position: pos,
				zIndex: 99999,
				padding: 0,
				margin: 0
			});
			$("#popup_title").text(title);
			$("#popup_content").addClass(type);
			$("#popup_message").text(msg);
			$("#popup_message").html($("#popup_message").text().replace(/\n/g, '<br />'));
			$("#popup_container").css({
				minWidth: $("#popup_container").outerWidth(true),
				maxWidth: $("#popup_container").outerWidth(true)
			});
			$.alerts._reposition();
			$.alerts._maintainPosition(true);
			switch (type) {
				case 'error':
				case 'alert':
					$("#popup_message").after('<div id="popup_panel" ><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" style="height: auto" /></div>');
					$("#popup_ok").click(function() {
						$.alerts._hide();
						callback(true);
					});
					$("#popup_ok").focus().keypress(function(e) {
						if (e.keyCode == 13 || e.keyCode == 27) $("#popup_ok").trigger('click');
					});
					break;
				case 'confirm':
					$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" style="height: auto" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" style="height: auto" /></div>');
					$("#popup_ok").click(function() {
						$.alerts._hide();
						if (callback) callback(true);
					});
					$("#popup_cancel").click(function() {
						$.alerts._hide();
						if (callback) callback(false);
					});
					$("#popup_ok").focus();
					$("#popup_ok, #popup_cancel").keypress(function(e) {
						if (e.keyCode == 13) $("#popup_ok").trigger('click');
						if (e.keyCode == 27) $("#popup_cancel").trigger('click');
					});
					break;
				case 'prompt':
					$("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" style="height: auto" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" style="height: auto" /></div>');
					$("#popup_prompt").width($("#popup_message").width());
					$("#popup_ok").click(function() {
						var val = $("#popup_prompt").val();
						$.alerts._hide();
						if (callback) callback(val);
					});
					$("#popup_cancel").click(function() {
						$.alerts._hide();
						if (callback) callback(null);
					});
					$("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(e) {
						if (e.keyCode == 13) $("#popup_ok").trigger('click');
						if (e.keyCode == 27) $("#popup_cancel").trigger('click');
					});
					if (value) $("#popup_prompt").val(value);
					$("#popup_prompt").focus().select();
					break;
			}
			if ($.alerts.draggable) {
				try {
					$("#popup_container").draggable({
						handle: $("#popup_title")
					});
					$("#popup_title").css({
						cursor: 'move'
					});
				} catch (e) {}
			}
		},
		_hide: function() {
			$("#popup_container").remove();
			$.alerts._overlay('hide');
			$.alerts._maintainPosition(false);
		},
		_overlay: function(status) {
			switch (status) {
				case 'show':
					$.alerts._overlay('hide');
					$("BODY").append('<div id="popup_overlay"></div>');
					$("#popup_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: $.alerts.overlayColor,
						opacity: $.alerts.overlayOpacity
					});
					break;
				case 'hide':
					$("#popup_overlay").remove();
					break;
			}
		},
		_reposition: function() {
			var top = (($(window).height() / 2) - ($("#popup_container").outerHeight(true) / 2)) + $.alerts.verticalOffset;
			var left = (($(window).width() / 2) - ($("#popup_container").outerWidth(true) / 2)) + $.alerts.horizontalOffset;
			if (top < 0) top = 0;
			if (left < 0) left = 0;
			$("#popup_container").css({
				top: top + 'px',
				left: left + 'px'
			});
			$("#popup_overlay").height($(document).height());
		},
		_maintainPosition: function(status) {
			if ($.alerts.repositionOnResize) {
				switch (status) {
					case true:
						$(window).bind('resize', $.alerts._reposition);
						break;
					case false:
						$(window).unbind('resize', $.alerts._reposition);
						break;
				}
			}
		}
	}
	jAlert = function(message, title, style, callback) {
		$.alerts.alert(message, title, style, callback);
	}
	jConfirm = function(message, title, callback) {
		$.alerts.confirm(message, title, callback);
	};
	jPrompt = function(message, value, title, callback) {
		$.alerts.prompt(message, value, title, callback);
	};
})(jQuery);
if (typeof(language) !== "undefined") {
	if (typeof(language.okButton) !== "undefined")
		$.alerts.okButton = language.okButton;
	if (typeof(language.cancelButton) !== "undefined")
		$.alerts.cancelButton = language.cancelButton;
}
/*jquery.json-2.2.min.js*/

(function($) {
	$.toJSON = function(o) {
		if (typeof(JSON) == 'object' && JSON.stringify)
			return JSON.stringify(o);
		var type = typeof(o);
		if (o === null)
			return "null";
		if (type == "undefined")
			return undefined;
		if (type == "number" || type == "boolean")
			return o + "";
		if (type == "string")
			return $.quoteString(o);
		if (type == 'object') {
			if (typeof o.toJSON == "function")
				return $.toJSON(o.toJSON());
			if (o.constructor === Date) {
				var month = o.getUTCMonth() + 1;
				if (month < 10) month = '0' + month;
				var day = o.getUTCDate();
				if (day < 10) day = '0' + day;
				var year = o.getUTCFullYear();
				var hours = o.getUTCHours();
				if (hours < 10) hours = '0' + hours;
				var minutes = o.getUTCMinutes();
				if (minutes < 10) minutes = '0' + minutes;
				var seconds = o.getUTCSeconds();
				if (seconds < 10) seconds = '0' + seconds;
				var milli = o.getUTCMilliseconds();
				if (milli < 100) milli = '0' + milli;
				if (milli < 10) milli = '0' + milli;
				return '"' + year + '-' + month + '-' + day + 'T' +
					hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"';
			}
			if (o.constructor === Array) {
				var ret = [];
				for (var i = 0; i < o.length; i++)
					ret.push($.toJSON(o[i]) || "null");
				return "[" + ret.join(",") + "]";
			}
			var pairs = [];
			for (var k in o) {
				var name;
				var type = typeof k;
				if (type == "number")
					name = '"' + k + '"';
				else if (type == "string")
					name = $.quoteString(k);
				else
					continue;
				if (typeof o[k] == "function")
					continue;
				var val = $.toJSON(o[k]);
				pairs.push(name + ":" + val);
			}
			return "{" + pairs.join(", ") + "}";
		}
	};
	$.evalJSON = function(src) {
		if (typeof(JSON) == 'object' && JSON.parse)
			return JSON.parse(src);
		return eval("(" + src + ")");
	};
	$.secureEvalJSON = function(src) {
		if (typeof(JSON) == 'object' && JSON.parse)
			return JSON.parse(src);
		var filtered = src;
		filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
		filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
		filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
		if (/^[\],:{}\s]*$/.test(filtered))
			return eval("(" + src + ")");
		else
			throw new SyntaxError("Error parsing JSON, source is not valid.");
	};
	$.quoteString = function(string) {
		if (string.match(_escapeable)) {
			return '"' + string.replace(_escapeable, function(a) {
				var c = _meta[a];
				if (typeof c === 'string') return c;
				c = a.charCodeAt();
				return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
			}) + '"';
		}
		return '"' + string + '"';
	};
	var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
	var _meta = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"': '\\"',
		'\\': '\\\\'
	};
})(jQuery);
/*editor.js*/

! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e()
}
("undefined" != typeof self ? self : this, function() {
	return function(t) {
			function e(r) {
				if (n[r])
					return n[r].exports;
				var o = n[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
			}
			var n = {};
			return e.m = t, e.c = n, e.d = function(t, n, r) {
				e.o(t, n) || Object.defineProperty(t, n, {
					configurable: !1,
					enumerable: !0,
					get: r
				})
			}, e.n = function(t) {
				var n = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(n, "a", n), n
			}, e.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, e.p = "", e(e.s = 45)
		}
		([function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(17),
				o = n(18),
				i = n(19),
				l = n(48),
				a = n(49),
				s = n(50),
				u = n(51),
				c = n(52),
				f = n(11),
				h = n(29),
				p = n(30),
				d = n(28),
				y = n(1),
				v = {
					Scope: y.Scope,
					create: y.create,
					find: y.find,
					query: y.query,
					register: y.register,
					Container: r.default,
					Format: o.default,
					Leaf: i.default,
					Embed: u.default,
					Scroll: l.default,
					Block: s.default,
					Inline: a.default,
					Text: c.default,
					Attributor: {
						Attribute: f.default,
						Class: h.default,
						Style: p.default,
						Store: d.default
					}
				};
			e.default = v
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				var n = i(t);
				if (null == n)
					throw new s("Unable to create " + t + " blot");
				var r = n;
				return new r(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e), e)
			}

			function o(t, n) {
				return void 0 === n && (n = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : n ? o(t.parentNode, n) : null
			}

			function i(t, e) {
				void 0 === e && (e = p.ANY);
				var n;
				if ("string" == typeof t)
					n = h[t] || u[t];
				else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
					n = h.text;
				else if ("number" == typeof t)
					t & p.LEVEL & p.BLOCK ? n = h.block : t & p.LEVEL & p.INLINE && (n = h.inline);
				else if (t instanceof HTMLElement) {
					var r = (t.getAttribute("class") || "").split(/\s+/);
					for (var o in r)
						if (n = c[r[o]])
							break;
					n = n || f[t.tagName]
				}
				return null == n ? null : e & p.LEVEL & n.scope && e & p.TYPE & n.scope ? n : null
			}

			function l() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				if (t.length > 1)
					return t.map(function(t) {
						return l(t)
					});
				var n = t[0];
				if ("string" != typeof n.blotName && "string" != typeof n.attrName)
					throw new s("Invalid definition");
				if ("abstract" === n.blotName)
					throw new s("Cannot register abstract class");
				if (h[n.blotName || n.attrName] = n, "string" == typeof n.keyName)
					u[n.keyName] = n;
				else if (null != n.className && (c[n.className] = n), null != n.tagName) {
					Array.isArray(n.tagName) ? n.tagName = n.tagName.map(function(t) {
						return t.toUpperCase()
					}) : n.tagName = n.tagName.toUpperCase();
					var r = Array.isArray(n.tagName) ? n.tagName : [n.tagName];
					r.forEach(function(t) {
						null != f[t] && null != n.className || (f[t] = n)
					})
				}
				return n
			}
			var a = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function(t) {
					function e(e) {
						var n = this;
						return e = "[Parchment] " + e, n = t.call(this, e) || this, n.message = e, n.name = n.constructor.name, n
					}
					return a(e, t), e
				}
				(Error);
			e.ParchmentError = s;
			var u = {},
				c = {},
				f = {},
				h = {};
			e.DATA_KEY = "__blot";
			var p;
			! function(t) {
				t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
			}
			(p = e.Scope || (e.Scope = {})), e.create = r, e.find = o, e.query = i, e.register = l
		}, function(t, e) {
			"use strict";
			var n = Object.prototype.hasOwnProperty,
				r = Object.prototype.toString,
				o = function(t) {
					return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
				},
				i = function(t) {
					if (!t || "[object Object]" !== r.call(t))
						return !1;
					var e = n.call(t, "constructor"),
						o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
					if (t.constructor && !e && !o)
						return !1;
					var i;
					for (i in t);
					return void 0 === i || n.call(t, i)
				};
			t.exports = function t() {
				var e, n, r, l, a, s, u = arguments[0],
					c = 1,
					f = arguments.length,
					h = !1;
				for ("boolean" == typeof u && (h = u, u = arguments[1] || {}, c = 2), (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); c < f; ++c)
					if (null != (e = arguments[c]))
						for (n in e)
							r = u[n], l = e[n], u !== l && (h && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = r && o(r) ? r : []) : s = r && i(r) ? r : {}, u[n] = t(h, s, l)) : void 0 !== l && (u[n] = l));
				return u
			}
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function a(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return null == t ? e : ("function" == typeof t.formats && (e = (0, f.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e))
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
			var s = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				u = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				c = n(2),
				f = r(c),
				h = n(4),
				p = r(h),
				d = n(0),
				y = r(d),
				v = n(14),
				b = r(v),
				g = n(5),
				m = r(g),
				_ = n(8),
				O = r(_),
				w = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), s(e, [{
						key: "attach",
						value: function() {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new y.default.Attributor.Store(this.domNode)
						}
					}, {
						key: "delta",
						value: function() {
							return (new p.default).insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()))
						}
					}, {
						key: "format",
						value: function(t, e) {
							var n = y.default.query(t, y.default.Scope.BLOCK_ATTRIBUTE);
							null != n && this.attributes.attribute(n, e)
						}
					}, {
						key: "formatAt",
						value: function(t, e, n, r) {
							this.format(n, r)
						}
					}, {
						key: "insertAt",
						value: function(t, n, r) {
							if ("string" == typeof n && n.endsWith("\n")) {
								var o = y.default.create(x.blotName);
								this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1))
							} else
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r)
						}
					}]), e
				}
				(y.default.Embed);
			w.scope = y.default.Scope.BLOCK_BLOT;
			var x = function(t) {
					function e(t) {
						o(this, e);
						var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return n.cache = {}, n
					}
					return l(e, t), s(e, [{
						key: "delta",
						value: function() {
							return null == this.cache.delta && (this.cache.delta = this.descendants(y.default.Leaf).reduce(function(t, e) {
								return 0 === e.length() ? t : t.insert(e.value(), a(e))
							}, new p.default).insert("\n", a(this))), this.cache.delta
						}
					}, {
						key: "deleteAt",
						value: function(t, n) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {}
						}
					}, {
						key: "formatAt",
						value: function(t, n, r, o) {
							n <= 0 || (y.default.query(r, y.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {})
						}
					}, {
						key: "insertAt",
						value: function(t, n, r) {
							if (null != r)
								return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
							if (0 !== n.length) {
								var o = n.split("\n"),
									i = o.shift();
								i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
								var l = this;
								o.reduce(function(t, e) {
									return l = l.split(t, !0), l.insertAt(0, e), e.length
								}, t + i.length)
							}
						}
					}, {
						key: "insertBefore",
						value: function(t, n) {
							var r = this.children.head;
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof b.default && r.remove(), this.cache = {}
						}
					}, {
						key: "length",
						value: function() {
							return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length
						}
					}, {
						key: "moveChildren",
						value: function(t, n) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {}
						}
					}, {
						key: "optimize",
						value: function(t) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {}
						}
					}, {
						key: "path",
						value: function(t) {
							return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
						}
					}, {
						key: "removeChild",
						value: function(t) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {}
						}
					}, {
						key: "split",
						value: function(t) {
							var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (n && (0 === t || t >= this.length() - 1)) {
								var r = this.clone();
								return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
							}
							var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
							return this.cache = {}, o
						}
					}]), e
				}
				(y.default.Block);
			x.blotName = "block", x.tagName = "P", x.defaultChild = "break", x.allowedChildren = [m.default, y.default.Embed, O.default], e.bubbleFormats = a, e.BlockEmbed = w, e.default = x
		}, function(t, e, n) {
			var r = n(54),
				o = n(12),
				i = n(2),
				l = n(20),
				a = String.fromCharCode(0),
				s = function(t) {
					Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
				};
			s.prototype.insert = function(t, e) {
				var n = {};
				return 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
			}, s.prototype.delete = function(t) {
				return t <= 0 ? this : this.push({
					delete: t
				})
			}, s.prototype.retain = function(t, e) {
				if (t <= 0)
					return this;
				var n = {
					retain: t
				};
				return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
			}, s.prototype.push = function(t) {
				var e = this.ops.length,
					n = this.ops[e - 1];
				if (t = i(!0, {}, t), "object" == typeof n) {
					if ("number" == typeof t.delete && "number" == typeof n.delete)
						return this.ops[e - 1] = {
							delete: n.delete + t.delete
						}, this;
					if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1])))
						return this.ops.unshift(t), this;
					if (o(t.attributes, n.attributes)) {
						if ("string" == typeof t.insert && "string" == typeof n.insert)
							return this.ops[e - 1] = {
								insert: n.insert + t.insert
							}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
						if ("number" == typeof t.retain && "number" == typeof n.retain)
							return this.ops[e - 1] = {
								retain: n.retain + t.retain
							}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
					}
				}
				return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
			}, s.prototype.chop = function() {
				var t = this.ops[this.ops.length - 1];
				return t && t.retain && !t.attributes && this.ops.pop(), this
			}, s.prototype.filter = function(t) {
				return this.ops.filter(t)
			}, s.prototype.forEach = function(t) {
				this.ops.forEach(t)
			}, s.prototype.map = function(t) {
				return this.ops.map(t)
			}, s.prototype.partition = function(t) {
				var e = [],
					n = [];
				return this.forEach(function(r) {
					(t(r) ? e : n).push(r)
				}), [e, n]
			}, s.prototype.reduce = function(t, e) {
				return this.ops.reduce(t, e)
			}, s.prototype.changeLength = function() {
				return this.reduce(function(t, e) {
					return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t
				}, 0)
			}, s.prototype.length = function() {
				return this.reduce(function(t, e) {
					return t + l.length(e)
				}, 0)
			}, s.prototype.slice = function(t, e) {
				t = t || 0, "number" != typeof e && (e = 1 / 0);
				for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext();) {
					var i;
					o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += l.length(i)
				}
				return new s(n)
			}, s.prototype.compose = function(t) {
				for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s; e.hasNext() || n.hasNext();)
					if ("insert" === n.peekType())
						r.push(n.next());
					else if ("delete" === e.peekType())
					r.push(e.next());
				else {
					var o = Math.min(e.peekLength(), n.peekLength()),
						i = e.next(o),
						a = n.next(o);
					if ("number" == typeof a.retain) {
						var u = {};
						"number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
						var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
						c && (u.attributes = c), r.push(u)
					} else "number" == typeof a.delete && "number" == typeof i.retain && r.push(a)
				}
				return r.chop()
			}, s.prototype.concat = function(t) {
				var e = new s(this.ops.slice());
				return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
			}, s.prototype.diff = function(t, e) {
				if (this.ops === t.ops)
					return new s;
				var n = [this, t].map(function(e) {
						return e.map(function(n) {
							if (null != n.insert)
								return "string" == typeof n.insert ? n.insert : a;
							var r = e === t ? "on" : "with";
							throw new Error("diff() called " + r + " non-document")
						}).join("")
					}),
					i = new s,
					u = r(n[0], n[1], e),
					c = l.iterator(this.ops),
					f = l.iterator(t.ops);
				return u.forEach(function(t) {
					for (var e = t[1].length; e > 0;) {
						var n = 0;
						switch (t[0]) {
							case r.INSERT:
								n = Math.min(f.peekLength(), e), i.push(f.next(n));
								break;
							case r.DELETE:
								n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);
								break;
							case r.EQUAL:
								n = Math.min(c.peekLength(), f.peekLength(), e);
								var a = c.next(n),
									s = f.next(n);
								o(a.insert, s.insert) ? i.retain(n, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(n)
						}
						e -= n
					}
				}), i.chop()
			}, s.prototype.eachLine = function(t, e) {
				e = e || "\n";
				for (var n = l.iterator(this.ops), r = new s, o = 0; n.hasNext();) {
					if ("insert" !== n.peekType())
						return;
					var i = n.peek(),
						a = l.length(i) - n.peekLength(),
						u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
					if (u < 0)
						r.push(n.next());
					else if (u > 0)
						r.push(n.next(u));
					else {
						if (!1 === t(r, n.next(1).attributes || {}, o))
							return;
						o += 1, r = new s
					}
				}
				r.length() > 0 && t(r, {}, o)
			}, s.prototype.transform = function(t, e) {
				if (e = !!e, "number" == typeof t)
					return this.transformPosition(t, e);
				for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s; n.hasNext() || r.hasNext();)
					if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
						if ("insert" === r.peekType())
							o.push(r.next());
						else {
							var i = Math.min(n.peekLength(), r.peekLength()),
								a = n.next(i),
								u = r.next(i);
							if (a.delete)
								continue;
							u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
						}
				else
					o.retain(l.length(n.next()));
				return o.chop()
			}, s.prototype.transformPosition = function(t, e) {
				e = !!e;
				for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
					var o = n.peekLength(),
						i = n.peekType();
					n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
				}
				return t
			}, t.exports = s
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(8),
				c = r(u),
				f = n(0),
				h = r(f),
				p = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), a(e, [{
						key: "formatAt",
						value: function(t, n, r, o) {
							if (e.compare(this.statics.blotName, r) < 0 && h.default.query(r, h.default.Scope.BLOT)) {
								var i = this.isolate(t, n);
								o && i.wrap(r, o)
							} else
								s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o)
						}
					}, {
						key: "optimize",
						value: function(t) {
							if (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
								var n = this.parent.isolate(this.offset(), this.length());
								this.moveChildren(n), n.wrap(this)
							}
						}
					}], [{
						key: "compare",
						value: function(t, n) {
							var r = e.order.indexOf(t),
								o = e.order.indexOf(n);
							return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
						}
					}]), e
				}
				(h.default.Inline);
			p.allowedChildren = [p, h.default.Embed, c.default], p.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = p
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (e = (0, N.default)(!0, {
						container: t,
						modules: {
							clipboard: !0,
							keyboard: !0,
							history: !0
						}
					}, e), e.theme && e.theme !== S.DEFAULTS.theme) {
					if (e.theme = S.import("themes/" + e.theme), null == e.theme)
						throw new Error("Invalid theme " + e.theme + ". Did you register it?")
				} else
					e.theme = T.default;
				var n = (0, N.default)(!0, {}, e.theme.DEFAULTS);
				[n, e].forEach(function(t) {
					t.modules = t.modules || {}, Object.keys(t.modules).forEach(function(e) {
						!0 === t.modules[e] && (t.modules[e] = {})
					})
				});
				var r = Object.keys(n.modules).concat(Object.keys(e.modules)),
					o = r.reduce(function(t, e) {
						var n = S.import("modules/" + e);
						return null == n ? P.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t
					}, {});
				return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
					container: e.modules.toolbar
				}), e = (0, N.default)(!0, {}, S.DEFAULTS, {
					modules: o
				}, n, e), ["bounds", "container", "scrollingContainer"].forEach(function(t) {
					"string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
				}), e.modules = Object.keys(e.modules).reduce(function(t, n) {
					return e.modules[n] && (t[n] = e.modules[n]), t
				}, {}), e
			}

			function a(t, e, n, r) {
				if (this.options.strict && !this.isEnabled() && e === g.default.sources.USER)
					return new d.default;
				var o = null == n ? null : this.getSelection(),
					i = this.editor.delta,
					l = t();
				if (null != o && (!0 === n && (n = o.index), null == r ? o = u(o, l, e) : 0 !== r && (o = u(o, n, r, e)), this.setSelection(o, g.default.sources.SILENT)), l.length() > 0) {
					var a, s = [g.default.events.TEXT_CHANGE, l, i, e];
					if ((a = this.emitter).emit.apply(a, [g.default.events.EDITOR_CHANGE].concat(s)), e !== g.default.sources.SILENT) {
						var c;
						(c = this.emitter).emit.apply(c, s)
					}
				}
				return l
			}

			function s(t, e, n, r, o) {
				var i = {};
				return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : c(n)) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), o = o || g.default.sources.API, [t, e, i, o]
			}

			function u(t, e, n, r) {
				if (null == t)
					return null;
				var o = void 0,
					i = void 0;
				if (e instanceof d.default) {
					var l = [t.index, t.index + t.length].map(function(t) {
							return e.transformPosition(t, r !== g.default.sources.USER)
						}),
						a = f(l, 2);
					o = a[0], i = a[1]
				} else {
					var s = [t.index, t.index + t.length].map(function(t) {
							return t < e || t === e && r === g.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
						}),
						u = f(s, 2);
					o = u[0], i = u[1]
				}
				return new x.Range(o, i - o)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.overload = e.expandConfig = void 0;
			var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				f = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				h = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				();
			n(53);
			var p = n(4),
				d = r(p),
				y = n(57),
				v = r(y),
				b = n(9),
				g = r(b),
				m = n(7),
				_ = r(m),
				O = n(0),
				w = r(O),
				x = n(22),
				k = r(x),
				E = n(2),
				N = r(E),
				j = n(10),
				A = r(j),
				q = n(32),
				T = r(q),
				P = (0, A.default)("quill"),
				S = function() {
					function t(e) {
						var n = this,
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if (i(this, t), this.options = l(e, r), this.container = this.options.container, null == this.container)
							return P.error("Invalid Quill container", e);
						this.options.debug && t.debug(this.options.debug);
						var o = this.container.innerHTML.trim();
						this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new g.default, this.scroll = w.default.create(this.root, {
							emitter: this.emitter,
							whitelist: this.options.formats
						}), this.editor = new v.default(this.scroll), this.selection = new k.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(g.default.events.EDITOR_CHANGE, function(t) {
							t === g.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
						}), this.emitter.on(g.default.events.SCROLL_UPDATE, function(t, e) {
							var r = n.selection.lastRange,
								o = r && 0 === r.length ? r.index : void 0;
							a.call(n, function() {
								return n.editor.update(null, e, o)
							}, t)
						});
						var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
						this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
					}
					return h(t, null, [{
						key: "debug",
						value: function(t) {
							!0 === t && (t = "log"), A.default.level(t)
						}
					}, {
						key: "find",
						value: function(t) {
							return t.__quill || w.default.find(t)
						}
					}, {
						key: "import",
						value: function(t) {
							return null == this.imports[t] && P.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t]
						}
					}, {
						key: "register",
						value: function(t, e) {
							var n = this,
								r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							if ("string" != typeof t) {
								var o = t.attrName || t.blotName;
								"string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function(r) {
									n.register(r, t[r], e)
								})
							} else
								null == this.imports[t] || r || P.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? w.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
						}
					}]), h(t, [{
						key: "addContainer",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if ("string" == typeof t) {
								var n = t;
								t = document.createElement("div"), t.classList.add(n)
							}
							return this.container.insertBefore(t, e), t
						}
					}, {
						key: "blur",
						value: function() {
							this.selection.setRange(null)
						}
					}, {
						key: "deleteText",
						value: function(t, e, n) {
							var r = this,
								o = s(t, e, n),
								i = f(o, 4);
							return t = i[0], e = i[1], n = i[3], a.call(this, function() {
								return r.editor.deleteText(t, e)
							}, n, t, -1 * e)
						}
					}, {
						key: "disable",
						value: function() {
							this.enable(!1)
						}
					}, {
						key: "enable",
						value: function() {
							var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
						}
					}, {
						key: "focus",
						value: function() {
							var t = this.scrollingContainer.scrollTop;
							this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
						}
					}, {
						key: "format",
						value: function(t, e) {
							var n = this,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.default.sources.API;
							return a.call(this, function() {
								var r = n.getSelection(!0),
									i = new d.default;
								if (null == r)
									return i;
								if (w.default.query(t, w.default.Scope.BLOCK))
									i = n.editor.formatLine(r.index, r.length, o({}, t, e));
								else {
									if (0 === r.length)
										return n.selection.format(t, e), i;
									i = n.editor.formatText(r.index, r.length, o({}, t, e))
								}
								return n.setSelection(r, g.default.sources.SILENT), i
							}, r)
						}
					}, {
						key: "formatLine",
						value: function(t, e, n, r, o) {
							var i = this,
								l = void 0,
								u = s(t, e, n, r, o),
								c = f(u, 4);
							return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function() {
								return i.editor.formatLine(t, e, l)
							}, o, t, 0)
						}
					}, {
						key: "formatText",
						value: function(t, e, n, r, o) {
							var i = this,
								l = void 0,
								u = s(t, e, n, r, o),
								c = f(u, 4);
							return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function() {
								return i.editor.formatText(t, e, l)
							}, o, t, 0)
						}
					}, {
						key: "getBounds",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = void 0;
							n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
							var r = this.container.getBoundingClientRect();
							return {
								bottom: n.bottom - r.top,
								height: n.height,
								left: n.left - r.left,
								right: n.right - r.left,
								top: n.top - r.top,
								width: n.width
							}
						}
					}, {
						key: "getContents",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
								n = s(t, e),
								r = f(n, 2);
							return t = r[0], e = r[1], this.editor.getContents(t, e)
						}
					}, {
						key: "getFormat",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
						}
					}, {
						key: "getIndex",
						value: function(t) {
							return t.offset(this.scroll)
						}
					}, {
						key: "getLength",
						value: function() {
							return this.scroll.length()
						}
					}, {
						key: "getLeaf",
						value: function(t) {
							return this.scroll.leaf(t)
						}
					}, {
						key: "getLine",
						value: function(t) {
							return this.scroll.line(t)
						}
					}, {
						key: "getLines",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
							return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
						}
					}, {
						key: "getModule",
						value: function(t) {
							return this.theme.modules[t]
						}
					}, {
						key: "getSelection",
						value: function() {
							return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
						}
					}, {
						key: "getText",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
								n = s(t, e),
								r = f(n, 2);
							return t = r[0], e = r[1], this.editor.getText(t, e)
						}
					}, {
						key: "hasFocus",
						value: function() {
							return this.selection.hasFocus()
						}
					}, {
						key: "insertEmbed",
						value: function(e, n, r) {
							var o = this,
								i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
							return a.call(this, function() {
								return o.editor.insertEmbed(e, n, r)
							}, i, e)
						}
					}, {
						key: "insertText",
						value: function(t, e, n, r, o) {
							var i = this,
								l = void 0,
								u = s(t, 0, n, r, o),
								c = f(u, 4);
							return t = c[0], l = c[2], o = c[3], a.call(this, function() {
								return i.editor.insertText(t, e, l)
							}, o, t, e.length)
						}
					}, {
						key: "isEnabled",
						value: function() {
							return !this.container.classList.contains("ql-disabled")
						}
					}, {
						key: "off",
						value: function() {
							return this.emitter.off.apply(this.emitter, arguments)
						}
					}, {
						key: "on",
						value: function() {
							return this.emitter.on.apply(this.emitter, arguments)
						}
					}, {
						key: "once",
						value: function() {
							return this.emitter.once.apply(this.emitter, arguments)
						}
					}, {
						key: "pasteHTML",
						value: function(t, e, n) {
							this.clipboard.dangerouslyPasteHTML(t, e, n)
						}
					}, {
						key: "removeFormat",
						value: function(t, e, n) {
							var r = this,
								o = s(t, e, n),
								i = f(o, 4);
							return t = i[0], e = i[1], n = i[3], a.call(this, function() {
								return r.editor.removeFormat(t, e)
							}, n, t)
						}
					}, {
						key: "scrollIntoView",
						value: function() {
							this.selection.scrollIntoView(this.scrollingContainer)
						}
					}, {
						key: "setContents",
						value: function(t) {
							var e = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
							return a.call(this, function() {
								t = new d.default(t);
								var n = e.getLength(),
									r = e.editor.deleteText(0, n),
									o = e.editor.applyDelta(t),
									i = o.ops[o.ops.length - 1];
								return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o)
							}, n)
						}
					}, {
						key: "setSelection",
						value: function(e, n, r) {
							if (null == e)
								this.selection.setRange(null, n || t.sources.API);
							else {
								var o = s(e, n, r),
									i = f(o, 4);
								e = i[0], n = i[1], r = i[3], this.selection.setRange(new x.Range(e, n), r), r !== g.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
							}
						}
					}, {
						key: "setText",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API,
								n = (new d.default).insert(t);
							return this.setContents(n, e)
						}
					}, {
						key: "update",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.default.sources.USER,
								e = this.scroll.update(t);
							return this.selection.update(t), e
						}
					}, {
						key: "updateContents",
						value: function(t) {
							var e = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
							return a.call(this, function() {
								return t = new d.default(t), e.editor.applyDelta(t, n)
							}, n, !0)
						}
					}]), t
				}
				();
			S.DEFAULTS = {
				bounds: null,
				formats: null,
				modules: {},
				placeholder: "",
				readOnly: !1,
				scrollingContainer: null,
				strict: !0,
				theme: "default"
			}, S.events = g.default.events, S.sources = g.default.sources, S.version = "1.3.6", S.imports = {
				delta: d.default,
				parchment: w.default,
				"core/module": _.default,
				"core/theme": T.default
			}, e.expandConfig = l, e.overload = s, e.default = S
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = function t(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				r(this, t), this.quill = e, this.options = n
			};
			o.DEFAULTS = {}, e.default = o
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = n(0),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(l),
				s = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), e
				}
				(a.default.Text);
			e.default = s
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(58),
				c = r(u),
				f = n(10),
				h = r(f),
				p = (0, h.default)("quill:events");
			["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t) {
				document.addEventListener(t, function() {
					for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
						e[n] = arguments[n];
					[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t) {
						if (t.__quill && t.__quill.emitter) {
							var n;
							(n = t.__quill.emitter).handleDOM.apply(n, e)
						}
					})
				})
			});
			var d = function(t) {
					function e() {
						o(this, e);
						var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						return t.listeners = {}, t.on("error", p.error), t
					}
					return l(e, t), a(e, [{
						key: "emit",
						value: function() {
							p.log.apply(p, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
						}
					}, {
						key: "handleDOM",
						value: function(t) {
							for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
								n[r - 1] = arguments[r];
							(this.listeners[t.type] || []).forEach(function(e) {
								var r = e.node,
									o = e.handler;
								(t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
							})
						}
					}, {
						key: "listenDOM",
						value: function(t, e, n) {
							this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
								node: e,
								handler: n
							})
						}
					}]), e
				}
				(c.default);
			d.events = {
				EDITOR_CHANGE: "editor-change",
				SCROLL_BEFORE_UPDATE: "scroll-before-update",
				SCROLL_OPTIMIZE: "scroll-optimize",
				SCROLL_UPDATE: "scroll-update",
				SELECTION_CHANGE: "selection-change",
				TEXT_CHANGE: "text-change"
			}, d.sources = {
				API: "api",
				SILENT: "silent",
				USER: "user"
			}, e.default = d
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				if (i.indexOf(t) <= i.indexOf(l)) {
					for (var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
						r[o - 1] = arguments[o];
					(e = console)[t].apply(e, r)
				}
			}

			function o(t) {
				return i.reduce(function(e, n) {
					return e[n] = r.bind(console, n, t), e
				}, {})
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = ["error", "warn", "log", "info"],
				l = "warn";
			r.level = o.level = function(t) {
				l = t
			}, e.default = o
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(1),
				o = function() {
					function t(t, e, n) {
						void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
						var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
						null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
					}
					return t.keys = function(t) {
						return [].map.call(t.attributes, function(t) {
							return t.name
						})
					}, t.prototype.add = function(t, e) {
						return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
					}, t.prototype.canAdd = function(t, e) {
						return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1))
					}, t.prototype.remove = function(t) {
						t.removeAttribute(this.keyName)
					}, t.prototype.value = function(t) {
						var e = t.getAttribute(this.keyName);
						return this.canAdd(t, e) && e ? e : ""
					}, t
				}
				();
			e.default = o
		}, function(t, e, n) {
			function r(t) {
				return null === t || void 0 === t
			}

			function o(t) {
				return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
			}

			function i(t, e, n) {
				var i, c;
				if (r(t) || r(e))
					return !1;
				if (t.prototype !== e.prototype)
					return !1;
				if (s(t))
					return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, n));
				if (o(t)) {
					if (!o(e))
						return !1;
					if (t.length !== e.length)
						return !1;
					for (i = 0; i < t.length; i++)
						if (t[i] !== e[i])
							return !1;
					return !0
				}
				try {
					var f = a(t),
						h = a(e)
				} catch (t) {
					return !1
				}
				if (f.length != h.length)
					return !1;
				for (f.sort(), h.sort(), i = f.length - 1; i >= 0; i--)
					if (f[i] != h[i])
						return !1;
				for (i = f.length - 1; i >= 0; i--)
					if (c = f[i], !u(t[c], e[c], n))
						return !1;
				return typeof t == typeof e
			}
			var l = Array.prototype.slice,
				a = n(55),
				s = n(56),
				u = t.exports = function(t, e, n) {
					return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : i(t, e, n))
				}
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.Code = void 0;
			var a = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				s = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				u = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				c = n(4),
				f = r(c),
				h = n(0),
				p = r(h),
				d = n(3),
				y = r(d),
				v = n(5),
				b = r(v),
				g = n(8),
				m = r(g),
				_ = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), e
				}
				(b.default);
			_.blotName = "code", _.tagName = "CODE";
			var O = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), s(e, [{
						key: "delta",
						value: function() {
							var t = this,
								e = this.domNode.textContent;
							return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function(e, n) {
								return e.insert(n).insert("\n", t.formats())
							}, new f.default)
						}
					}, {
						key: "format",
						value: function(t, n) {
							if (t !== this.statics.blotName || !n) {
								var r = this.descendant(m.default, this.length() - 1),
									o = a(r, 1),
									i = o[0];
								null != i && i.deleteAt(i.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
							}
						}
					}, {
						key: "formatAt",
						value: function(t, n, r, o) {
							if (0 !== n && null != p.default.query(r, p.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
								var i = this.newlineIndex(t);
								if (!(i < 0 || i >= t + n)) {
									var l = this.newlineIndex(t, !0) + 1,
										a = i - l + 1,
										s = this.isolate(l, a),
										u = s.next;
									s.format(r, o), u instanceof e && u.formatAt(0, t - l + n - a, r, o)
								}
							}
						}
					}, {
						key: "insertAt",
						value: function(t, e, n) {
							if (null == n) {
								var r = this.descendant(m.default, t),
									o = a(r, 2),
									i = o[0],
									l = o[1];
								i.insertAt(l, e)
							}
						}
					}, {
						key: "length",
						value: function() {
							var t = this.domNode.textContent.length;
							return this.domNode.textContent.endsWith("\n") ? t : t + 1
						}
					}, {
						key: "newlineIndex",
						value: function(t) {
							if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
								return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
							var e = this.domNode.textContent.slice(t).indexOf("\n");
							return e > -1 ? t + e : -1
						}
					}, {
						key: "optimize",
						value: function(t) {
							this.domNode.textContent.endsWith("\n") || this.appendChild(p.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
							var n = this.next;
							null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove())
						}
					}, {
						key: "replace",
						value: function(t) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t) {
								var e = p.default.find(t);
								null == e ? t.parentNode.removeChild(t) : e instanceof p.default.Embed ? e.remove() : e.unwrap()
							})
						}
					}], [{
						key: "create",
						value: function(t) {
							var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
							return n.setAttribute("spellcheck", !1), n
						}
					}, {
						key: "formats",
						value: function() {
							return !0
						}
					}]), e
				}
				(y.default);
			O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", e.Code = _, e.default = O
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(0),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "insertInto",
						value: function(t, n) {
							0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove()
						}
					}, {
						key: "length",
						value: function() {
							return 0
						}
					}, {
						key: "value",
						value: function() {
							return ""
						}
					}], [{
						key: "value",
						value: function() {}
					}]), e
				}
				(u.default.Embed);
			c.blotName = "break", c.tagName = "BR", e.default = c
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function l(t, e) {
				var n = document.createElement("a");
				n.href = t;
				var r = n.href.slice(0, n.href.indexOf(":"));
				return e.indexOf(r) > -1
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.sanitize = e.default = void 0;
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(5),
				c = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(u),
				f = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), a(e, [{
						key: "format",
						value: function(t, n) {
							if (t !== this.statics.blotName || !n)
								return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
							n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
						}
					}], [{
						key: "create",
						value: function(t) {
							var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
							return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("target", "_blank"), n
						}
					}, {
						key: "formats",
						value: function(t) {
							return t.getAttribute("href")
						}
					}, {
						key: "sanitize",
						value: function(t) {
							return l(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
						}
					}]), e
				}
				(c.default);
			f.blotName = "link", f.tagName = "A", f.SANITIZED_URL = "about:blank", f.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = f, e.sanitize = l
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				t.setAttribute(e, !("true" === t.getAttribute(e)))
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = n(25),
				u = r(s),
				c = n(106),
				f = r(c),
				h = 0,
				p = function() {
					function t(e) {
						var n = this;
						o(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
							n.togglePicker()
						}), this.label.addEventListener("keydown", function(t) {
							switch (t.keyCode) {
								case u.default.keys.ENTER:
									n.togglePicker();
									break;
								case u.default.keys.ESCAPE:
									n.escape(), t.preventDefault()
							}
						}), this.select.addEventListener("change", this.update.bind(this))
					}
					return a(t, [{
						key: "togglePicker",
						value: function() {
							this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options, "aria-hidden")
						}
					}, {
						key: "buildItem",
						value: function(t) {
							var e = this,
								n = document.createElement("span");
							return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function() {
								e.selectItem(n, !0)
							}), n.addEventListener("keydown", function(t) {
								switch (t.keyCode) {
									case u.default.keys.ENTER:
										e.selectItem(n, !0), t.preventDefault();
										break;
									case u.default.keys.ESCAPE:
										e.escape(), t.preventDefault()
								}
							}), n
						}
					}, {
						key: "buildLabel",
						value: function() {
							var t = document.createElement("span");
							return t.classList.add("ql-picker-label"), t.innerHTML = f.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t
						}
					}, {
						key: "buildOptions",
						value: function() {
							var t = this,
								e = document.createElement("span");
							e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + h, h += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function(n) {
								var r = t.buildItem(n);
								e.appendChild(r), !0 === n.selected && t.selectItem(r)
							}), this.container.appendChild(e)
						}
					}, {
						key: "buildPicker",
						value: function() {
							var t = this;
							[].slice.call(this.select.attributes).forEach(function(e) {
								t.container.setAttribute(e.name, e.value)
							}), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
						}
					}, {
						key: "escape",
						value: function() {
							var t = this;
							this.close(), setTimeout(function() {
								return t.label.focus()
							}, 1)
						}
					}, {
						key: "close",
						value: function() {
							this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true")
						}
					}, {
						key: "selectItem",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								n = this.container.querySelector(".ql-selected");
							if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
								if ("function" == typeof Event)
									this.select.dispatchEvent(new Event("change"));
								else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
									var r = document.createEvent("Event");
									r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
								}
								this.close()
							}
						}
					}, {
						key: "update",
						value: function() {
							var t = void 0;
							if (this.select.selectedIndex > -1) {
								var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
								t = this.select.options[this.select.selectedIndex], this.selectItem(e)
							} else
								this.selectItem(null);
							var n = null != t && t !== this.select.querySelector("option[selected]");
							this.label.classList.toggle("ql-active", n)
						}
					}]), t
				}
				();
			e.default = p
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				var e = a.find(t);
				if (null == e)
					try {
						e = a.create(t)
					} catch (n) {
						e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function(t) {
							e.domNode.appendChild(t)
						}), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach()
					}
				return e
			}
			var o = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = n(47),
				l = n(27),
				a = n(1),
				s = function(t) {
					function e(e) {
						var n = t.call(this, e) || this;
						return n.build(), n
					}
					return o(e, t), e.prototype.appendChild = function(t) {
						this.insertBefore(t)
					}, e.prototype.attach = function() {
						t.prototype.attach.call(this), this.children.forEach(function(t) {
							t.attach()
						})
					}, e.prototype.build = function() {
						var t = this;
						this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function(e) {
							try {
								var n = r(e);
								t.insertBefore(n, t.children.head || void 0)
							} catch (t) {
								if (t instanceof a.ParchmentError)
									return;
								throw t
							}
						})
					}, e.prototype.deleteAt = function(t, e) {
						if (0 === t && e === this.length())
							return this.remove();
						this.children.forEachAt(t, e, function(t, e, n) {
							t.deleteAt(e, n)
						})
					}, e.prototype.descendant = function(t, n) {
						var r = this.children.find(n),
							o = r[0],
							i = r[1];
						return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
					}, e.prototype.descendants = function(t, n, r) {
						void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
						var o = [],
							i = r;
						return this.children.forEachAt(n, r, function(n, r, l) {
							(null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= l
						}), o
					}, e.prototype.detach = function() {
						this.children.forEach(function(t) {
							t.detach()
						}), t.prototype.detach.call(this)
					}, e.prototype.formatAt = function(t, e, n, r) {
						this.children.forEachAt(t, e, function(t, e, o) {
							t.formatAt(e, o, n, r)
						})
					}, e.prototype.insertAt = function(t, e, n) {
						var r = this.children.find(t),
							o = r[0],
							i = r[1];
						if (o)
							o.insertAt(i, e, n);
						else {
							var l = null == n ? a.create("text", e) : a.create(e, n);
							this.appendChild(l)
						}
					}, e.prototype.insertBefore = function(t, e) {
						if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e) {
								return t instanceof e
							}))
							throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
						t.insertInto(this, e)
					}, e.prototype.length = function() {
						return this.children.reduce(function(t, e) {
							return t + e.length()
						}, 0)
					}, e.prototype.moveChildren = function(t, e) {
						this.children.forEach(function(n) {
							t.insertBefore(n, e)
						})
					}, e.prototype.optimize = function(e) {
						if (t.prototype.optimize.call(this, e), 0 === this.children.length)
							if (null != this.statics.defaultChild) {
								var n = a.create(this.statics.defaultChild);
								this.appendChild(n), n.optimize(e)
							} else
								this.remove()
					}, e.prototype.path = function(t, n) {
						void 0 === n && (n = !1);
						var r = this.children.find(t, n),
							o = r[0],
							i = r[1],
							l = [
								[this, t]
							];
						return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]), l)
					}, e.prototype.removeChild = function(t) {
						this.children.remove(t)
					}, e.prototype.replace = function(n) {
						n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n)
					}, e.prototype.split = function(t, e) {
						if (void 0 === e && (e = !1), !e) {
							if (0 === t)
								return this;
							if (t === this.length())
								return this.next
						}
						var n = this.clone();
						return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function(t, r, o) {
							t = t.split(r, e), n.appendChild(t)
						}), n
					}, e.prototype.unwrap = function() {
						this.moveChildren(this.parent, this.next), this.remove()
					}, e.prototype.update = function(t, e) {
						var n = this,
							o = [],
							i = [];
						t.forEach(function(t) {
							t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i, t.removedNodes))
						}), i.forEach(function(t) {
							if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
								var e = a.find(t);
								null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
							}
						}), o.filter(function(t) {
							return t.parentNode == n.domNode
						}).sort(function(t, e) {
							return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
						}).forEach(function(t) {
							var e = null;
							null != t.nextSibling && (e = a.find(t.nextSibling));
							var o = r(t);
							o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(n), n.insertBefore(o, e || void 0))
						})
					}, e
				}
				(l.default);
			e.default = s
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(11),
				i = n(28),
				l = n(17),
				a = n(1),
				s = function(t) {
					function e(e) {
						var n = t.call(this, e) || this;
						return n.attributes = new i.default(n.domNode), n
					}
					return r(e, t), e.formats = function(t) {
						return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
					}, e.prototype.format = function(t, e) {
						var n = a.query(t);
						n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
					}, e.prototype.formats = function() {
						var t = this.attributes.values(),
							e = this.statics.formats(this.domNode);
						return null != e && (t[this.statics.blotName] = e), t
					}, e.prototype.replaceWith = function(e, n) {
						var r = t.prototype.replaceWith.call(this, e, n);
						return this.attributes.copy(r), r
					}, e.prototype.update = function(e, n) {
						var r = this;
						t.prototype.update.call(this, e, n), e.some(function(t) {
							return t.target === r.domNode && "attributes" === t.type
						}) && this.attributes.build()
					}, e.prototype.wrap = function(n, r) {
						var o = t.prototype.wrap.call(this, n, r);
						return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o
					}, e
				}
				(l.default);
			e.default = s
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(27),
				i = n(1),
				l = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r(e, t), e.value = function(t) {
						return !0
					}, e.prototype.index = function(t, e) {
						return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
					}, e.prototype.position = function(t, e) {
						var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
						return t > 0 && (n += 1), [this.parent.domNode, n]
					}, e.prototype.value = function() {
						return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;
						var t
					}, e.scope = i.Scope.INLINE_BLOT, e
				}
				(o.default);
			e.default = l
		}, function(t, e, n) {
			function r(t) {
				this.ops = t, this.index = 0, this.offset = 0
			}
			var o = n(12),
				i = n(2),
				l = {
					attributes: {
						compose: function(t, e, n) {
							"object" != typeof t && (t = {}), "object" != typeof e && (e = {});
							var r = i(!0, {}, e);
							n || (r = Object.keys(r).reduce(function(t, e) {
								return null != r[e] && (t[e] = r[e]), t
							}, {}));
							for (var o in t)
								void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
							return Object.keys(r).length > 0 ? r : void 0
						},
						diff: function(t, e) {
							"object" != typeof t && (t = {}), "object" != typeof e && (e = {});
							var n = Object.keys(t).concat(Object.keys(e)).reduce(function(n, r) {
								return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
							}, {});
							return Object.keys(n).length > 0 ? n : void 0
						},
						transform: function(t, e, n) {
							if ("object" != typeof t)
								return e;
							if ("object" == typeof e) {
								if (!n)
									return e;
								var r = Object.keys(e).reduce(function(n, r) {
									return void 0 === t[r] && (n[r] = e[r]), n
								}, {});
								return Object.keys(r).length > 0 ? r : void 0
							}
						}
					},
					iterator: function(t) {
						return new r(t)
					},
					length: function(t) {
						return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
					}
				};
			r.prototype.hasNext = function() {
				return this.peekLength() < 1 / 0
			}, r.prototype.next = function(t) {
				t || (t = 1 / 0);
				var e = this.ops[this.index];
				if (e) {
					var n = this.offset,
						r = l.length(e);
					if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete)
						return {
							delete: t
						};
					var o = {};
					return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o
				}
				return {
					retain: 1 / 0
				}
			}, r.prototype.peek = function() {
				return this.ops[this.index]
			}, r.prototype.peekLength = function() {
				return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0
			}, r.prototype.peekType = function() {
				return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
			}, t.exports = l
		}, function(t, e) {
			var n = function() {
					"use strict";

					function t(t, e) {
						return null != e && t instanceof e
					}

					function e(n, r, o, i, c) {
						function f(n, o) {
							if (null === n)
								return null;
							if (0 === o)
								return n;
							var y, v;
							if ("object" != typeof n)
								return n;
							if (t(n, a))
								y = new a;
							else if (t(n, s))
								y = new s;
							else if (t(n, u))
								y = new u(function(t, e) {
									n.then(function(e) {
										t(f(e, o - 1))
									}, function(t) {
										e(f(t, o - 1))
									})
								});
							else if (e.__isArray(n))
								y = [];
							else if (e.__isRegExp(n))
								y = new RegExp(n.source, l(n)), n.lastIndex && (y.lastIndex = n.lastIndex);
							else if (e.__isDate(n))
								y = new Date(n.getTime());
							else {
								if (d && Buffer.isBuffer(n))
									return y = new Buffer(n.length), n.copy(y), y;
								t(n, Error) ? y = Object.create(n) : void 0 === i ? (v = Object.getPrototypeOf(n), y = Object.create(v)) : (y = Object.create(i), v = i)
							}
							if (r) {
								var b = h.indexOf(n);
								if (-1 != b)
									return p[b];
								h.push(n), p.push(y)
							}
							t(n, a) && n.forEach(function(t, e) {
								var n = f(e, o - 1),
									r = f(t, o - 1);
								y.set(n, r)
							}), t(n, s) && n.forEach(function(t) {
								var e = f(t, o - 1);
								y.add(e)
							});
							for (var g in n) {
								var m;
								v && (m = Object.getOwnPropertyDescriptor(v, g)), m && null == m.set || (y[g] = f(n[g], o - 1))
							}
							if (Object.getOwnPropertySymbols)
								for (var _ = Object.getOwnPropertySymbols(n), g = 0; g < _.length; g++) {
									var O = _[g],
										w = Object.getOwnPropertyDescriptor(n, O);
									(!w || w.enumerable || c) && (y[O] = f(n[O], o - 1), w.enumerable || Object.defineProperty(y, O, {
										enumerable: !1
									}))
								}
							if (c)
								for (var x = Object.getOwnPropertyNames(n), g = 0; g < x.length; g++) {
									var k = x[g],
										w = Object.getOwnPropertyDescriptor(n, k);
									w && w.enumerable || (y[k] = f(n[k], o - 1), Object.defineProperty(y, k, {
										enumerable: !1
									}))
								}
							return y
						}
						"object" == typeof r && (o = r.depth, i = r.prototype, c = r.includeNonEnumerable, r = r.circular);
						var h = [],
							p = [],
							d = "undefined" != typeof Buffer;
						return void 0 === r && (r = !0), void 0 === o && (o = 1 / 0), f(n, o)
					}

					function n(t) {
						return Object.prototype.toString.call(t)
					}

					function r(t) {
						return "object" == typeof t && "[object Date]" === n(t)
					}

					function o(t) {
						return "object" == typeof t && "[object Array]" === n(t)
					}

					function i(t) {
						return "object" == typeof t && "[object RegExp]" === n(t)
					}

					function l(t) {
						var e = "";
						return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
					}
					var a;
					try {
						a = Map
					} catch (t) {
						a = function() {}
					}
					var s;
					try {
						s = Set
					} catch (t) {
						s = function() {}
					}
					var u;
					try {
						u = Promise
					} catch (t) {
						u = function() {}
					}
					return e.clonePrototype = function(t) {
						if (null === t)
							return null;
						var e = function() {};
						return e.prototype = t, new e
					}, e.__objToStr = n, e.__isDate = r, e.__isArray = o, e.__isRegExp = i, e.__getRegExpFlags = l, e
				}
				();
			"object" == typeof t && t.exports && (t.exports = n)
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = Array(t.length); e < t.length; e++)
						n[e] = t[e];
					return n
				}
				return Array.from(t)
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				try {
					e.parentNode
				} catch (t) {
					return !1
				}
				return e instanceof Text && (e = e.parentNode), t.contains(e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.Range = void 0;
			var a = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				s = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				u = n(0),
				c = r(u),
				f = n(21),
				h = r(f),
				p = n(12),
				d = r(p),
				y = n(9),
				v = r(y),
				b = n(10),
				g = r(b),
				m = (0, g.default)("quill:selection"),
				_ = function t(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					i(this, t), this.index = e, this.length = n
				},
				O = function() {
					function t(e, n) {
						var r = this;
						i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange = new _(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
							r.mouseDown || setTimeout(r.update.bind(r, v.default.sources.USER), 1)
						}), this.emitter.on(v.default.events.EDITOR_CHANGE, function(t, e) {
							t === v.default.events.TEXT_CHANGE && e.length() > 0 && r.update(v.default.sources.SILENT)
						}), this.emitter.on(v.default.events.SCROLL_BEFORE_UPDATE, function() {
							if (r.hasFocus()) {
								var t = r.getNativeRange();
								null != t && t.start.node !== r.cursor.textNode && r.emitter.once(v.default.events.SCROLL_UPDATE, function() {
									try {
										r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
									} catch (t) {}
								})
							}
						}), this.emitter.on(v.default.events.SCROLL_OPTIMIZE, function(t, e) {
							if (e.range) {
								var n = e.range,
									o = n.startNode,
									i = n.startOffset,
									l = n.endNode,
									a = n.endOffset;
								r.setNativeRange(o, i, l, a)
							}
						}), this.update(v.default.sources.SILENT)
					}
					return s(t, [{
						key: "handleComposition",
						value: function() {
							var t = this;
							this.root.addEventListener("compositionstart", function() {
								t.composing = !0
							}), this.root.addEventListener("compositionend", function() {
								if (t.composing = !1, t.cursor.parent) {
									var e = t.cursor.restore();
									if (!e)
										return;
									setTimeout(function() {
										t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
									}, 1)
								}
							})
						}
					}, {
						key: "handleDragging",
						value: function() {
							var t = this;
							this.emitter.listenDOM("mousedown", document.body, function() {
								t.mouseDown = !0
							}), this.emitter.listenDOM("mouseup", document.body, function() {
								t.mouseDown = !1, t.update(v.default.sources.USER)
							})
						}
					}, {
						key: "focus",
						value: function() {
							this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
						}
					}, {
						key: "format",
						value: function(t, e) {
							if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
								this.scroll.update();
								var n = this.getNativeRange();
								if (null != n && n.native.collapsed && !c.default.query(t, c.default.Scope.BLOCK)) {
									if (n.start.node !== this.cursor.textNode) {
										var r = c.default.find(n.start.node, !1);
										if (null == r)
											return;
										if (r instanceof c.default.Leaf) {
											var o = r.split(n.start.offset);
											r.parent.insertBefore(this.cursor, o)
										} else
											r.insertBefore(this.cursor, n.start.node);
										this.cursor.attach()
									}
									this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
								}
							}
						}
					}, {
						key: "getBounds",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = this.scroll.length();
							t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
							var r = void 0,
								o = this.scroll.leaf(t),
								i = a(o, 2),
								l = i[0],
								s = i[1];
							if (null == l)
								return null;
							var u = l.position(s, !0),
								c = a(u, 2);
							r = c[0], s = c[1];
							var f = document.createRange();
							if (e > 0) {
								f.setStart(r, s);
								var h = this.scroll.leaf(t + e),
									p = a(h, 2);
								if (l = p[0], s = p[1], null == l)
									return null;
								var d = l.position(s, !0),
									y = a(d, 2);
								return r = y[0], s = y[1], f.setEnd(r, s), f.getBoundingClientRect()
							}
							var v = "left",
								b = void 0;
							return r instanceof Text ? (s < r.data.length ? (f.setStart(r, s), f.setEnd(r, s + 1)) : (f.setStart(r, s - 1), f.setEnd(r, s), v = "right"), b = f.getBoundingClientRect()) : (b = l.domNode.getBoundingClientRect(), s > 0 && (v = "right")), {
								bottom: b.top + b.height,
								height: b.height,
								left: b[v],
								right: b[v],
								top: b.top,
								width: 0
							}
						}
					}, {
						key: "getNativeRange",
						value: function() {
							var t = document.getSelection();
							if (null == t || t.rangeCount <= 0)
								return null;
							var e = t.getRangeAt(0);
							if (null == e)
								return null;
							var n = this.normalizeNative(e);
							return m.info("getNativeRange", n), n
						}
					}, {
						key: "getRange",
						value: function() {
							var t = this.getNativeRange();
							return null == t ? [null, null] : [this.normalizedToRange(t), t]
						}
					}, {
						key: "hasFocus",
						value: function() {
							return document.activeElement === this.root
						}
					}, {
						key: "normalizedToRange",
						value: function(t) {
							var e = this,
								n = [
									[t.start.node, t.start.offset]
								];
							t.native.collapsed || n.push([t.end.node, t.end.offset]);
							var r = n.map(function(t) {
									var n = a(t, 2),
										r = n[0],
										o = n[1],
										i = c.default.find(r, !0),
										l = i.offset(e.scroll);
									return 0 === o ? l : i instanceof c.default.Container ? l + i.length() : l + i.index(r, o)
								}),
								i = Math.min(Math.max.apply(Math, o(r)), this.scroll.length() - 1),
								l = Math.min.apply(Math, [i].concat(o(r)));
							return new _(l, i - l)
						}
					}, {
						key: "normalizeNative",
						value: function(t) {
							if (!l(this.root, t.startContainer) || !t.collapsed && !l(this.root, t.endContainer))
								return null;
							var e = {
								start: {
									node: t.startContainer,
									offset: t.startOffset
								},
								end: {
									node: t.endContainer,
									offset: t.endOffset
								},
								native: t
							};
							return [e.start, e.end].forEach(function(t) {
								for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
									if (e.childNodes.length > n)
										e = e.childNodes[n], n = 0;
									else {
										if (e.childNodes.length !== n)
											break;
										e = e.lastChild, n = e instanceof Text ? e.data.length : e.childNodes.length + 1
									}
								t.node = e, t.offset = n
							}), e
						}
					}, {
						key: "rangeToNative",
						value: function(t) {
							var e = this,
								n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
								r = [],
								o = this.scroll.length();
							return n.forEach(function(t, n) {
								t = Math.min(o - 1, t);
								var i = void 0,
									l = e.scroll.leaf(t),
									s = a(l, 2),
									u = s[0],
									c = s[1],
									f = u.position(c, 0 !== n),
									h = a(f, 2);
								i = h[0], c = h[1], r.push(i, c)
							}), r.length < 2 && (r = r.concat(r)), r
						}
					}, {
						key: "scrollIntoView",
						value: function(t) {
							var e = this.lastRange;
							if (null != e) {
								var n = this.getBounds(e.index, e.length);
								if (null != n) {
									var r = this.scroll.length() - 1,
										o = this.scroll.line(Math.min(e.index, r)),
										i = a(o, 1),
										l = i[0],
										s = l;
									if (e.length > 0) {
										var u = this.scroll.line(Math.min(e.index + e.length, r));
										s = a(u, 1)[0]
									}
									if (null != l && null != s) {
										var c = t.getBoundingClientRect();
										n.top < c.top ? t.scrollTop -= c.top - n.top : n.bottom > c.bottom && (t.scrollTop += n.bottom - c.bottom)
									}
								}
							}
						}
					}, {
						key: "setNativeRange",
						value: function(t, e) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
								o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
							if (m.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
								var i = document.getSelection();
								if (null != i)
									if (null != t) {
										this.hasFocus() || this.root.focus();
										var l = (this.getNativeRange() || {}).native;
										if (null == l || o || t !== l.startContainer || e !== l.startOffset || n !== l.endContainer || r !== l.endOffset) {
											"BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
											var a = document.createRange();
											a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a)
										}
									} else
										i.removeAllRanges(), this.root.blur(), document.body.focus()
							}
						}
					}, {
						key: "setRange",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.default.sources.API;
							if ("string" == typeof e && (n = e, e = !1), m.info("setRange", t), null != t) {
								var r = this.rangeToNative(t);
								this.setNativeRange.apply(this, o(r).concat([e]))
							} else
								this.setNativeRange(null);
							this.update(n)
						}
					}, {
						key: "update",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.default.sources.USER,
								e = this.lastRange,
								n = this.getRange(),
								r = a(n, 2),
								o = r[0],
								i = r[1];
							if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, d.default)(e, this.lastRange)) {
								var l;
								!this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();
								var s = [v.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(e), t];
								if ((l = this.emitter).emit.apply(l, [v.default.events.EDITOR_CHANGE].concat(s)), t !== v.default.sources.SILENT) {
									var u;
									(u = this.emitter).emit.apply(u, s)
								}
							}
						}
					}]), t
				}
				();
			e.Range = _, e.default = O
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = n(0),
				s = r(a),
				u = n(3),
				c = r(u),
				f = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), e
				}
				(s.default.Container);
			f.allowedChildren = [c.default, u.BlockEmbed, f], e.default = f
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(0),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "value",
						value: function(t) {
							var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
							return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(t) {
								return ("00" + parseInt(t).toString(16)).slice(-2)
							}).join("")) : n
						}
					}]), e
				}
				(u.default.Attributor.Style),
				f = new u.default.Attributor.Class("color", "ql-color", {
					scope: u.default.Scope.INLINE
				}),
				h = new c("color", "color", {
					scope: u.default.Scope.INLINE
				});
			e.ColorAttributor = c, e.ColorClass = f, e.ColorStyle = h
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function s(t, e) {
				var n, r = t === D.keys.LEFT ? "prefix" : "suffix";
				return n = {
					key: t,
					shiftKey: e,
					altKey: null
				}, o(n, r, /^$/), o(n, "handler", function(n) {
					var r = n.index;
					t === D.keys.RIGHT && (r += n.length + 1);
					var o = this.quill.getLeaf(r);
					return !(b(o, 1)[0] instanceof T.default.Embed) || (t === D.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index - 1, S.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, S.default.sources.USER), !1)
				}), n
			}

			function u(t, e) {
				if (!(0 === t.index || this.quill.getLength() <= 1)) {
					var n = this.quill.getLine(t.index),
						r = b(n, 1),
						o = r[0],
						i = {};
					if (0 === e.offset) {
						var l = this.quill.getLine(t.index - 1),
							a = b(l, 1),
							s = a[0];
						if (null != s && s.length() > 1) {
							var u = o.formats(),
								c = this.quill.getFormat(t.index - 1, 1);
							i = A.default.attributes.diff(u, c) || {}
						}
					}
					var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
					this.quill.deleteText(t.index - f, f, S.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(t.index - f, f, i, S.default.sources.USER), this.quill.focus()
				}
			}

			function c(t, e) {
				var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
				if (!(t.index >= this.quill.getLength() - n)) {
					var r = {},
						o = 0,
						i = this.quill.getLine(t.index),
						l = b(i, 1),
						a = l[0];
					if (e.offset >= a.length() - 1) {
						var s = this.quill.getLine(t.index + 1),
							u = b(s, 1),
							c = u[0];
						if (c) {
							var f = a.formats(),
								h = this.quill.getFormat(t.index, 1);
							r = A.default.attributes.diff(f, h) || {}, o = c.length()
						}
					}
					this.quill.deleteText(t.index, n, S.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index + o - 1, n, r, S.default.sources.USER)
				}
			}

			function f(t) {
				var e = this.quill.getLines(t),
					n = {};
				if (e.length > 1) {
					var r = e[0].formats(),
						o = e[e.length - 1].formats();
					n = A.default.attributes.diff(o, r) || {}
				}
				this.quill.deleteText(t, S.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, S.default.sources.USER), this.quill.setSelection(t.index, S.default.sources.SILENT), this.quill.focus()
			}

			function h(t, e) {
				var n = this;
				t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
				var r = Object.keys(e.format).reduce(function(t, n) {
					return T.default.query(n, T.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t
				}, {});
				this.quill.insertText(t.index, "\n", r, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function(t) {
					null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], S.default.sources.USER))
				})
			}

			function p(t) {
				return {
					key: D.keys.TAB,
					shiftKey: !t,
					format: {
						"code-block": !0
					},
					handler: function(e) {
						var n = T.default.query("code-block"),
							r = e.index,
							o = e.length,
							i = this.quill.scroll.descendant(n, r),
							l = b(i, 2),
							a = l[0],
							s = l[1];
						if (null != a) {
							var u = this.quill.getIndex(a),
								c = a.newlineIndex(s, !0) + 1,
								f = a.newlineIndex(u + s + o),
								h = a.domNode.textContent.slice(c, f).split("\n");
							s = 0, h.forEach(function(e, i) {
								t ? (a.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) : e.startsWith(n.TAB) && (a.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB.length : o -= n.TAB.length), s += e.length + 1
							}), this.quill.update(S.default.sources.USER), this.quill.setSelection(r, o, S.default.sources.SILENT)
						}
					}
				}
			}

			function d(t) {
				return {
					key: t[0].toUpperCase(),
					shortKey: !0,
					handler: function(e, n) {
						this.quill.format(t, !n.format[t], S.default.sources.USER)
					}
				}
			}

			function y(t) {
				if ("string" == typeof t || "number" == typeof t)
					return y({
						key: t
					});
				if ("object" === (void 0 === t ? "undefined" : v(t)) && (t = (0, _.default)(t, !1)), "string" == typeof t.key)
					if (null != D.keys[t.key.toUpperCase()])
						t.key = D.keys[t.key.toUpperCase()];
					else {
						if (1 !== t.key.length)
							return null;
						t.key = t.key.toUpperCase().charCodeAt(0)
					}
				return t.shortKey && (t[B] = t.shortKey, delete t.shortKey), t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.SHORTKEY = e.default = void 0;
			var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				b = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				g = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				m = n(21),
				_ = r(m),
				O = n(12),
				w = r(O),
				x = n(2),
				k = r(x),
				E = n(4),
				N = r(E),
				j = n(20),
				A = r(j),
				q = n(0),
				T = r(q),
				P = n(6),
				S = r(P),
				C = n(10),
				L = r(C),
				M = n(7),
				R = r(M),
				I = (0, L.default)("quill:keyboard"),
				B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
				D = function(t) {
					function e(t, n) {
						i(this, e);
						var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.bindings = {}, Object.keys(r.options.bindings).forEach(function(e) {
							("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e])
						}), r.addBinding({
							key: e.keys.ENTER,
							shiftKey: null
						}, h), r.addBinding({
							key: e.keys.ENTER,
							metaKey: null,
							ctrlKey: null,
							altKey: null
						}, function() {}), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
							key: e.keys.BACKSPACE
						}, {
							collapsed: !0
						}, u), r.addBinding({
							key: e.keys.DELETE
						}, {
							collapsed: !0
						}, c)) : (r.addBinding({
							key: e.keys.BACKSPACE
						}, {
							collapsed: !0,
							prefix: /^.?$/
						}, u), r.addBinding({
							key: e.keys.DELETE
						}, {
							collapsed: !0,
							suffix: /^.?$/
						}, c)), r.addBinding({
							key: e.keys.BACKSPACE
						}, {
							collapsed: !1
						}, f), r.addBinding({
							key: e.keys.DELETE
						}, {
							collapsed: !1
						}, f), r.addBinding({
							key: e.keys.BACKSPACE,
							altKey: null,
							ctrlKey: null,
							metaKey: null,
							shiftKey: null
						}, {
							collapsed: !0,
							offset: 0
						}, u), r.listen(), r
					}
					return a(e, t), g(e, null, [{
						key: "match",
						value: function(t, e) {
							return e = y(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) {
								return !!e[n] !== t[n] && null !== e[n]
							}) && e.key === (t.which || t.keyCode)
						}
					}]), g(e, [{
						key: "addBinding",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								r = y(t);
							if (null == r || null == r.key)
								return I.warn("Attempted to add invalid keyboard binding", r);
							"function" == typeof e && (e = {
								handler: e
							}), "function" == typeof n && (n = {
								handler: n
							}), r = (0, k.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
						}
					}, {
						key: "listen",
						value: function() {
							var t = this;
							this.quill.root.addEventListener("keydown", function(n) {
								if (!n.defaultPrevented) {
									var r = n.which || n.keyCode,
										o = (t.bindings[r] || []).filter(function(t) {
											return e.match(n, t)
										});
									if (0 !== o.length) {
										var i = t.quill.getSelection();
										if (null != i && t.quill.hasFocus()) {
											var l = t.quill.getLine(i.index),
												a = b(l, 2),
												s = a[0],
												u = a[1],
												c = t.quill.getLeaf(i.index),
												f = b(c, 2),
												h = f[0],
												p = f[1],
												d = 0 === i.length ? [h, p] : t.quill.getLeaf(i.index + i.length),
												y = b(d, 2),
												g = y[0],
												m = y[1],
												_ = h instanceof T.default.Text ? h.value().slice(0, p) : "",
												O = g instanceof T.default.Text ? g.value().slice(m) : "",
												x = {
													collapsed: 0 === i.length,
													empty: 0 === i.length && s.length() <= 1,
													format: t.quill.getFormat(i),
													offset: u,
													prefix: _,
													suffix: O
												};
											o.some(function(e) {
												if (null != e.collapsed && e.collapsed !== x.collapsed)
													return !1;
												if (null != e.empty && e.empty !== x.empty)
													return !1;
												if (null != e.offset && e.offset !== x.offset)
													return !1;
												if (Array.isArray(e.format)) {
													if (e.format.every(function(t) {
															return null == x.format[t]
														}))
														return !1
												} else if ("object" === v(e.format) && !Object.keys(e.format).every(function(t) {
														return !0 === e.format[t] ? null != x.format[t] : !1 === e.format[t] ? null == x.format[t] : (0, w.default)(e.format[t], x.format[t])
													}))
													return !1;
												return !(null != e.prefix && !e.prefix.test(x.prefix)) && (!(null != e.suffix && !e.suffix.test(x.suffix)) && !0 !== e.handler.call(t, i, x))
											}) && n.preventDefault()
										}
									}
								}
							})
						}
					}]), e
				}
				(R.default);
			D.keys = {
				BACKSPACE: 8,
				TAB: 9,
				ENTER: 13,
				ESCAPE: 27,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				DELETE: 46
			}, D.DEFAULTS = {
				bindings: {
					bold: d("bold"),
					italic: d("italic"),
					underline: d("underline"),
					indent: {
						key: D.keys.TAB,
						format: ["blockquote", "indent", "list"],
						handler: function(t, e) {
							if (e.collapsed && 0 !== e.offset)
								return !0;
							this.quill.format("indent", "+1", S.default.sources.USER)
						}
					},
					outdent: {
						key: D.keys.TAB,
						shiftKey: !0,
						format: ["blockquote", "indent", "list"],
						handler: function(t, e) {
							if (e.collapsed && 0 !== e.offset)
								return !0;
							this.quill.format("indent", "-1", S.default.sources.USER)
						}
					},
					"outdent backspace": {
						key: D.keys.BACKSPACE,
						collapsed: !0,
						shiftKey: null,
						metaKey: null,
						ctrlKey: null,
						altKey: null,
						format: ["indent", "list"],
						offset: 0,
						handler: function(t, e) {
							null != e.format.indent ? this.quill.format("indent", "-1", S.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, S.default.sources.USER)
						}
					},
					"indent code-block": p(!0),
					"outdent code-block": p(!1),
					"remove tab": {
						key: D.keys.TAB,
						shiftKey: !0,
						collapsed: !0,
						prefix: /\t$/,
						handler: function(t) {
							this.quill.deleteText(t.index - 1, 1, S.default.sources.USER)
						}
					},
					tab: {
						key: D.keys.TAB,
						handler: function(t) {
							this.quill.history.cutoff();
							var e = (new N.default).retain(t.index).delete(t.length).insert("\t");
							this.quill.updateContents(e, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, S.default.sources.SILENT)
						}
					},
					"list empty enter": {
						key: D.keys.ENTER,
						collapsed: !0,
						format: ["list"],
						empty: !0,
						handler: function(t, e) {
							this.quill.format("list", !1, S.default.sources.USER), e.format.indent && this.quill.format("indent", !1, S.default.sources.USER)
						}
					},
					"checklist enter": {
						key: D.keys.ENTER,
						collapsed: !0,
						format: {
							list: "checked"
						},
						handler: function(t) {
							var e = this.quill.getLine(t.index),
								n = b(e, 2),
								r = n[0],
								o = n[1],
								i = (0, k.default)({}, r.formats(), {
									list: "checked"
								}),
								l = (new N.default).retain(t.index).insert("\n", i).retain(r.length() - o - 1).retain(1, {
									list: "unchecked"
								});
							this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
						}
					},
					"header enter": {
						key: D.keys.ENTER,
						collapsed: !0,
						format: ["header"],
						suffix: /^$/,
						handler: function(t, e) {
							var n = this.quill.getLine(t.index),
								r = b(n, 2),
								o = r[0],
								i = r[1],
								l = (new N.default).retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, {
									header: null
								});
							this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
						}
					},
					"list autofill": {
						key: " ",
						collapsed: !0,
						format: {
							list: !1
						},
						prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
						handler: function(t, e) {
							var n = e.prefix.length,
								r = this.quill.getLine(t.index),
								o = b(r, 2),
								i = o[0],
								l = o[1];
							if (l > n)
								return !0;
							var a = void 0;
							switch (e.prefix.trim()) {
								case "[]":
								case "[ ]":
									a = "unchecked";
									break;
								case "[x]":
									a = "checked";
									break;
								case "-":
								case "*":
									a = "bullet";
									break;
								default:
									a = "ordered"
							}
							this.quill.insertText(t.index, " ", S.default.sources.USER), this.quill.history.cutoff();
							var s = (new N.default).retain(t.index - l).delete(n + 1).retain(i.length() - 2 - l).retain(1, {
								list: a
							});
							this.quill.updateContents(s, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, S.default.sources.SILENT)
						}
					},
					"code exit": {
						key: D.keys.ENTER,
						collapsed: !0,
						format: ["code-block"],
						prefix: /\n\n$/,
						suffix: /^\s+$/,
						handler: function(t) {
							var e = this.quill.getLine(t.index),
								n = b(e, 2),
								r = n[0],
								o = n[1],
								i = (new N.default).retain(t.index + r.length() - o - 2).retain(1, {
									"code-block": null
								}).delete(1);
							this.quill.updateContents(i, S.default.sources.USER)
						}
					},
					"embed left": s(D.keys.LEFT, !1),
					"embed left shift": s(D.keys.LEFT, !0),
					"embed right": s(D.keys.RIGHT, !1),
					"embed right shift": s(D.keys.RIGHT, !0)
				}
			}, e.default = D, e.SHORTKEY = B
		}, function(t, e, n) {
			"use strict";
			t.exports = {
				align: {
					"": n(75),
					center: n(76),
					right: n(77),
					justify: n(78)
				},
				background: n(79),
				blockquote: n(80),
				bold: n(81),
				clean: n(82),
				code: n(40),
				"code-block": n(40),
				color: n(83),
				direction: {
					"": n(84),
					rtl: n(85)
				},
				float: {
					center: n(86),
					full: n(87),
					left: n(88),
					right: n(89)
				},
				formula: n(90),
				header: {
					1: n(91),
					2: n(92)
				},
				italic: n(93),
				image: n(94),
				indent: {
					"+1": n(95),
					"-1": n(96)
				},
				link: n(97),
				list: {
					ordered: n(98),
					bullet: n(99),
					check: n(100)
				},
				script: {
					sub: n(101),
					super: n(102)
				},
				strike: n(103),
				underline: n(104),
				video: n(105)
			}
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(1),
				o = function() {
					function t(t) {
						this.domNode = t, this.domNode[r.DATA_KEY] = {
							blot: this
						}
					}
					return Object.defineProperty(t.prototype, "statics", {
						get: function() {
							return this.constructor
						},
						enumerable: !0,
						configurable: !0
					}), t.create = function(t) {
						if (null == this.tagName)
							throw new r.ParchmentError("Blot definition missing tagName");
						var e;
						return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
					}, t.prototype.attach = function() {
						null != this.parent && (this.scroll = this.parent.scroll)
					}, t.prototype.clone = function() {
						var t = this.domNode.cloneNode(!1);
						return r.create(t)
					}, t.prototype.detach = function() {
						null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY]
					}, t.prototype.deleteAt = function(t, e) {
						this.isolate(t, e).remove()
					}, t.prototype.formatAt = function(t, e, n, o) {
						var i = this.isolate(t, e);
						if (null != r.query(n, r.Scope.BLOT) && o)
							i.wrap(n, o);
						else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
							var l = r.create(this.statics.scope);
							i.wrap(l), l.format(n, o)
						}
					}, t.prototype.insertAt = function(t, e, n) {
						var o = null == n ? r.create("text", e) : r.create(e, n),
							i = this.split(t);
						this.parent.insertBefore(o, i)
					}, t.prototype.insertInto = function(t, e) {
						void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
						var n = null;
						t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach()
					}, t.prototype.isolate = function(t, e) {
						var n = this.split(t);
						return n.split(e), n
					}, t.prototype.length = function() {
						return 1
					}, t.prototype.offset = function(t) {
						return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
					}, t.prototype.optimize = function(t) {
						null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
					}, t.prototype.remove = function() {
						null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
					}, t.prototype.replace = function(t) {
						null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
					}, t.prototype.replaceWith = function(t, e) {
						var n = "string" == typeof t ? r.create(t, e) : t;
						return n.replace(this), n
					}, t.prototype.split = function(t, e) {
						return 0 === t ? this : this.next
					}, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) {
						var n = "string" == typeof t ? r.create(t, e) : t;
						return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
					}, t.blotName = "abstract", t
				}
				();
			e.default = o
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(11),
				o = n(29),
				i = n(30),
				l = n(1),
				a = function() {
					function t(t) {
						this.attributes = {}, this.domNode = t, this.build()
					}
					return t.prototype.attribute = function(t, e) {
						e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
					}, t.prototype.build = function() {
						var t = this;
						this.attributes = {};
						var e = r.default.keys(this.domNode),
							n = o.default.keys(this.domNode),
							a = i.default.keys(this.domNode);
						e.concat(n).concat(a).forEach(function(e) {
							var n = l.query(e, l.Scope.ATTRIBUTE);
							n instanceof r.default && (t.attributes[n.attrName] = n)
						})
					}, t.prototype.copy = function(t) {
						var e = this;
						Object.keys(this.attributes).forEach(function(n) {
							var r = e.attributes[n].value(e.domNode);
							t.format(n, r)
						})
					}, t.prototype.move = function(t) {
						var e = this;
						this.copy(t), Object.keys(this.attributes).forEach(function(t) {
							e.attributes[t].remove(e.domNode)
						}), this.attributes = {}
					}, t.prototype.values = function() {
						var t = this;
						return Object.keys(this.attributes).reduce(function(e, n) {
							return e[n] = t.attributes[n].value(t.domNode), e
						}, {})
					}, t
				}
				();
			e.default = a
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) {
					return 0 === t.indexOf(e + "-")
				})
			}
			var o = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = n(11),
				l = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return o(e, t), e.keys = function(t) {
						return (t.getAttribute("class") || "").split(/\s+/).map(function(t) {
							return t.split("-").slice(0, -1).join("-")
						})
					}, e.prototype.add = function(t, e) {
						return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
					}, e.prototype.remove = function(t) {
						r(t, this.keyName).forEach(function(e) {
							t.classList.remove(e)
						}), 0 === t.classList.length && t.removeAttribute("class")
					}, e.prototype.value = function(t) {
						var e = r(t, this.keyName)[0] || "",
							n = e.slice(this.keyName.length + 1);
						return this.canAdd(t, n) ? n : ""
					}, e
				}
				(i.default);
			e.default = l
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				var e = t.split("-"),
					n = e.slice(1).map(function(t) {
						return t[0].toUpperCase() + t.slice(1)
					}).join("");
				return e[0] + n
			}
			var o = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = n(11),
				l = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return o(e, t), e.keys = function(t) {
						return (t.getAttribute("style") || "").split(";").map(function(t) {
							return t.split(":")[0].trim()
						})
					}, e.prototype.add = function(t, e) {
						return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0)
					}, e.prototype.remove = function(t) {
						t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
					}, e.prototype.value = function(t) {
						var e = t.style[r(this.keyName)];
						return this.canAdd(t, e) ? e : ""
					}, e
				}
				(i.default);
			e.default = l
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				c = n(0),
				f = r(c),
				h = n(8),
				p = r(h),
				d = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r
					}
					return l(e, t), u(e, null, [{
						key: "value",
						value: function() {}
					}]), u(e, [{
						key: "detach",
						value: function() {
							null != this.parent && this.parent.removeChild(this)
						}
					}, {
						key: "format",
						value: function(t, n) {
							if (0 !== this._length)
								return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
							for (var r = this, o = 0; null != r && r.statics.scope !== f.default.Scope.BLOCK_BLOT;)
								o += r.offset(r.parent), r = r.parent;
							null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t, n), this._length = 0)
						}
					}, {
						key: "index",
						value: function(t, n) {
							return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
						}
					}, {
						key: "length",
						value: function() {
							return this._length
						}
					}, {
						key: "position",
						value: function() {
							return [this.textNode, this.textNode.data.length]
						}
					}, {
						key: "remove",
						value: function() {
							s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null
						}
					}, {
						key: "restore",
						value: function() {
							if (!this.selection.composing && null != this.parent) {
								var t = this.textNode,
									n = this.selection.getNativeRange(),
									r = void 0,
									o = void 0,
									i = void 0;
								if (null != n && n.start.node === t && n.end.node === t) {
									var l = [t, n.start.offset, n.end.offset];
									r = l[0], o = l[1], i = l[2]
								}
								for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;)
									this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
								if (this.textNode.data !== e.CONTENTS) {
									var s = this.textNode.data.split(e.CONTENTS).join("");
									this.next instanceof p.default ? (r = this.next.domNode, this.next.insertAt(0, s), this.textNode.data = e.CONTENTS) : (this.textNode.data = s, this.parent.insertBefore(f.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode))
								}
								if (this.remove(), null != o) {
									var u = [o, i].map(function(t) {
											return Math.max(0, Math.min(r.data.length, t - 1))
										}),
										c = a(u, 2);
									return o = c[0], i = c[1], {
										startNode: r,
										startOffset: o,
										endNode: r,
										endOffset: i
									}
								}
							}
						}
					}, {
						key: "update",
						value: function(t, e) {
							var n = this;
							if (t.some(function(t) {
									return "characterData" === t.type && t.target === n.textNode
								})) {
								var r = this.restore();
								r && (e.range = r)
							}
						}
					}, {
						key: "value",
						value: function() {
							return ""
						}
					}]), e
				}
				(f.default.Embed);
			d.blotName = "cursor", d.className = "ql-cursor", d.tagName = "span", d.CONTENTS = "\ufeff", e.default = d
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				i = function() {
					function t(e, n) {
						r(this, t), this.quill = e, this.options = n, this.modules = {}
					}
					return o(t, [{
						key: "init",
						value: function() {
							var t = this;
							Object.keys(this.options.modules).forEach(function(e) {
								null == t.modules[e] && t.addModule(e)
							})
						}
					}, {
						key: "addModule",
						value: function(t) {
							var e = this.quill.constructor.import("modules/" + t);
							return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
						}
					}]), t
				}
				();
			i.DEFAULTS = {
				modules: {}
			}, i.themes = {
				default: i
			}, e.default = i
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(0),
				c = r(u),
				f = n(8),
				h = r(f),
				p = "\ufeff",
				d = function(t) {
					function e(t) {
						o(this, e);
						var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(t) {
							n.contentNode.appendChild(t)
						}), n.leftGuard = document.createTextNode(p), n.rightGuard = document.createTextNode(p), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
					}
					return l(e, t), a(e, [{
						key: "index",
						value: function(t, n) {
							return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
						}
					}, {
						key: "restore",
						value: function(t) {
							var e = void 0,
								n = void 0,
								r = t.data.split(p).join("");
							if (t === this.leftGuard)
								if (this.prev instanceof h.default) {
									var o = this.prev.length();
									this.prev.insertAt(o, r), e = {
										startNode: this.prev.domNode,
										startOffset: o + r.length
									}
								} else
									n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this), e = {
										startNode: n,
										startOffset: r.length
									};
							else
								t === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, r), e = {
									startNode: this.next.domNode,
									startOffset: r.length
								}) : (n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this.next), e = {
									startNode: n,
									startOffset: r.length
								}));
							return t.data = p, e
						}
					}, {
						key: "update",
						value: function(t, e) {
							var n = this;
							t.forEach(function(t) {
								if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
									var r = n.restore(t.target);
									r && (e.range = r)
								}
							})
						}
					}]), e
				}
				(c.default.Embed);
			e.default = d
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
			var r = n(0),
				o = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(r),
				i = {
					scope: o.default.Scope.BLOCK,
					whitelist: ["right", "center", "justify"]
				},
				l = new o.default.Attributor.Attribute("align", "align", i),
				a = new o.default.Attributor.Class("align", "ql-align", i),
				s = new o.default.Attributor.Style("align", "text-align", i);
			e.AlignAttribute = l, e.AlignClass = a, e.AlignStyle = s
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.BackgroundStyle = e.BackgroundClass = void 0;
			var r = n(0),
				o = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(r),
				i = n(24),
				l = new o.default.Attributor.Class("background", "ql-bg", {
					scope: o.default.Scope.INLINE
				}),
				a = new i.ColorAttributor("background", "background-color", {
					scope: o.default.Scope.INLINE
				});
			e.BackgroundClass = l, e.BackgroundStyle = a
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
			var r = n(0),
				o = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(r),
				i = {
					scope: o.default.Scope.BLOCK,
					whitelist: ["rtl"]
				},
				l = new o.default.Attributor.Attribute("direction", "dir", i),
				a = new o.default.Attributor.Class("direction", "ql-direction", i),
				s = new o.default.Attributor.Style("direction", "direction", i);
			e.DirectionAttribute = l, e.DirectionClass = a, e.DirectionStyle = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.FontClass = e.FontStyle = void 0;
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(0),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = {
					scope: u.default.Scope.INLINE,
					whitelist: ["serif", "monospace"]
				},
				f = new u.default.Attributor.Class("font", "ql-font", c),
				h = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "value",
						value: function(t) {
							return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "")
						}
					}]), e
				}
				(u.default.Attributor.Style),
				p = new h("font", "font-family", c);
			e.FontStyle = p, e.FontClass = f
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.SizeStyle = e.SizeClass = void 0;
			var r = n(0),
				o = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(r),
				i = new o.default.Attributor.Class("size", "ql-size", {
					scope: o.default.Scope.INLINE,
					whitelist: ["small", "large", "huge"]
				}),
				l = new o.default.Attributor.Style("size", "font-size", {
					scope: o.default.Scope.INLINE,
					whitelist: ["10px", "18px", "32px"]
				});
			e.SizeClass = i, e.SizeStyle = l
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(5),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "optimize",
						value: function(t) {
							a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
						}
					}], [{
						key: "create",
						value: function() {
							return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
						}
					}, {
						key: "formats",
						value: function() {
							return !0
						}
					}]), e
				}
				(u.default);
			c.blotName = "bold", c.tagName = ["STRONG", "B"], e.default = c
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(16),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e(t, n) {
						r(this, e);
						var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return i.label.innerHTML = n, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t) {
							t.classList.add("ql-primary")
						}), i
					}
					return i(e, t), l(e, [{
						key: "buildItem",
						value: function(t) {
							var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
							return n.style.backgroundColor = t.getAttribute("value") || "", n
						}
					}, {
						key: "selectItem",
						value: function(t, n) {
							a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
							var r = this.label.querySelector(".ql-color-label"),
								o = t ? t.getAttribute("data-value") || "" : "";
							r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o)
						}
					}]), e
				}
				(u.default);
			e.default = c
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(16),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e(t, n) {
						r(this, e);
						var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(t) {
							t.innerHTML = n[t.getAttribute("data-value") || ""]
						}), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i
					}
					return i(e, t), l(e, [{
						key: "selectItem",
						value: function(t, n) {
							a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML
						}
					}]), e
				}
				(u.default);
			e.default = c
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				i = function() {
					function t(e, n) {
						var o = this;
						r(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
							o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px"
						}), this.hide()
					}
					return o(t, [{
						key: "hide",
						value: function() {
							this.root.classList.add("ql-hidden")
						}
					}, {
						key: "position",
						value: function(t) {
							var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
								n = t.bottom + this.quill.root.scrollTop;
							this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
							var r = this.boundsContainer.getBoundingClientRect(),
								o = this.root.getBoundingClientRect(),
								i = 0;
							if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
								var l = o.bottom - o.top,
									a = t.bottom - t.top + l;
								this.root.style.top = n - a + "px", this.root.classList.add("ql-flip")
							}
							return i
						}
					}, {
						key: "show",
						value: function() {
							this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
						}
					}]), t
				}
				();
			e.default = i
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function a(t) {
				var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
				return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t
			}

			function s(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				e.forEach(function(e) {
					var r = document.createElement("option");
					e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r)
				})
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.BaseTooltip = void 0;
			var u = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				c = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				f = n(2),
				h = r(f),
				p = n(4),
				d = r(p),
				y = n(9),
				v = r(y),
				b = n(25),
				g = r(b),
				m = n(32),
				_ = r(m),
				O = n(41),
				w = r(O),
				x = n(42),
				k = r(x),
				E = n(16),
				N = r(E),
				j = n(43),
				A = r(j),
				q = [!1, "center", "right", "justify"],
				T = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
				P = [!1, "serif", "monospace"],
				S = ["1", "2", "3", !1],
				C = ["small", !1, "large", "huge"],
				L = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
							l = function e(n) {
								if (!document.body.contains(t.root))
									return document.body.removeEventListener("click", e);
								null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function(t) {
									t.container.contains(n.target) || t.close()
								})
							};
						return t.emitter.listenDOM("click", document.body, l), r
					}
					return l(e, t), u(e, [{
						key: "addModule",
						value: function(t) {
							var n = c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
							return "toolbar" === t && this.extendToolbar(n), n
						}
					}, {
						key: "buildButtons",
						value: function(t, e) {
							t.forEach(function(t) {
								(t.getAttribute("class") || "").split(/\s+/).forEach(function(n) {
									if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n]))
										if ("direction" === n)
											t.innerHTML = e[n][""] + e[n].rtl;
										else if ("string" == typeof e[n])
										t.innerHTML = e[n];
									else {
										var r = t.value || "";
										null != r && e[n][r] && (t.innerHTML = e[n][r])
									}
								})
							})
						}
					}, {
						key: "buildPickers",
						value: function(t, e) {
							var n = this;
							this.pickers = t.map(function(t) {
								if (t.classList.contains("ql-align"))
									return null == t.querySelector("option") && s(t, q), new k.default(t, e.align);
								if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
									var n = t.classList.contains("ql-background") ? "background" : "color";
									return null == t.querySelector("option") && s(t, T, "background" === n ? "#ffffff" : "#000000"), new w.default(t, e[n])
								}
								return null == t.querySelector("option") && (t.classList.contains("ql-font") ? s(t, P) : t.classList.contains("ql-header") ? s(t, S) : t.classList.contains("ql-size") && s(t, C)), new N.default(t)
							});
							var r = function() {
								n.pickers.forEach(function(t) {
									t.update()
								})
							};
							this.quill.on(v.default.events.EDITOR_CHANGE, r)
						}
					}]), e
				}
				(_.default);
			L.DEFAULTS = (0, h.default)(!0, {}, _.default.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							formula: function() {
								this.quill.theme.tooltip.edit("formula")
							},
							image: function() {
								var t = this,
									e = this.container.querySelector("input.ql-image[type=file]");
								null == e && (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function() {
									if (null != e.files && null != e.files[0]) {
										var n = new FileReader;
										n.onload = function(n) {
											var r = t.quill.getSelection(!0);
											t.quill.updateContents((new d.default).retain(r.index).delete(r.length).insert({
												image: n.target.result
											}), v.default.sources.USER), t.quill.setSelection(r.index + 1, v.default.sources.SILENT), e.value = ""
										}, n.readAsDataURL(e.files[0])
									}
								}), this.container.appendChild(e)), e.click()
							},
							video: function() {
								this.quill.theme.tooltip.edit("video")
							}
						}
					}
				}
			});
			var M = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
					}
					return l(e, t), u(e, [{
						key: "listen",
						value: function() {
							var t = this;
							this.textbox.addEventListener("keydown", function(e) {
								g.default.match(e, "enter") ? (t.save(), e.preventDefault()) : g.default.match(e, "escape") && (t.cancel(), e.preventDefault())
							})
						}
					}, {
						key: "cancel",
						value: function() {
							this.hide()
						}
					}, {
						key: "edit",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
						}
					}, {
						key: "restoreFocus",
						value: function() {
							var t = this.quill.scrollingContainer.scrollTop;
							this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
						}
					}, {
						key: "save",
						value: function() {
							var t = this.textbox.value;
							switch (this.root.getAttribute("data-mode")) {
								case "link":
									var e = this.quill.root.scrollTop;
									this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, v.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, v.default.sources.USER)), this.quill.root.scrollTop = e;
									break;
								case "video":
									t = a(t);
								case "formula":
									if (!t)
										break;
									var n = this.quill.getSelection(!0);
									if (null != n) {
										var r = n.index + n.length;
										this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, v.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", v.default.sources.USER), this.quill.setSelection(r + 2, v.default.sources.USER)
									}
							}
							this.textbox.value = "", this.hide()
						}
					}]), e
				}
				(A.default);
			e.BaseTooltip = M, e.default = L
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(46),
				i = r(o),
				l = n(34),
				a = n(36),
				s = n(62),
				u = n(63),
				c = r(u),
				f = n(64),
				h = r(f),
				p = n(65),
				d = r(p),
				y = n(35),
				v = n(24),
				b = n(37),
				g = n(38),
				m = n(39),
				_ = r(m),
				O = n(66),
				w = r(O),
				x = n(15),
				k = r(x),
				E = n(67),
				N = r(E),
				j = n(68),
				A = r(j),
				q = n(69),
				T = r(q),
				P = n(70),
				S = r(P),
				C = n(71),
				L = r(C),
				M = n(13),
				R = r(M),
				I = n(72),
				B = r(I),
				D = n(73),
				U = r(D),
				F = n(74),
				H = r(F),
				K = n(26),
				z = r(K),
				Z = n(16),
				V = r(Z),
				W = n(41),
				G = r(W),
				Y = n(42),
				X = r(Y),
				$ = n(43),
				Q = r($),
				J = n(107),
				tt = r(J),
				et = n(108),
				nt = r(et);
			i.default.register({
				"attributors/attribute/direction": a.DirectionAttribute,
				"attributors/class/align": l.AlignClass,
				"attributors/class/background": y.BackgroundClass,
				"attributors/class/color": v.ColorClass,
				"attributors/class/direction": a.DirectionClass,
				"attributors/class/font": b.FontClass,
				"attributors/class/size": g.SizeClass,
				"attributors/style/align": l.AlignStyle,
				"attributors/style/background": y.BackgroundStyle,
				"attributors/style/color": v.ColorStyle,
				"attributors/style/direction": a.DirectionStyle,
				"attributors/style/font": b.FontStyle,
				"attributors/style/size": g.SizeStyle
			}, !0), i.default.register({
				"formats/align": l.AlignClass,
				"formats/direction": a.DirectionClass,
				"formats/indent": s.IndentClass,
				"formats/background": y.BackgroundStyle,
				"formats/color": v.ColorStyle,
				"formats/font": b.FontClass,
				"formats/size": g.SizeClass,
				"formats/blockquote": c.default,
				"formats/code-block": R.default,
				"formats/header": h.default,
				"formats/list": d.default,
				"formats/bold": _.default,
				"formats/code": M.Code,
				"formats/italic": w.default,
				"formats/link": k.default,
				"formats/script": N.default,
				"formats/strike": A.default,
				"formats/underline": T.default,
				"formats/image": S.default,
				"formats/video": L.default,
				"formats/list/item": p.ListItem,
				"modules/formula": B.default,
				"modules/syntax": U.default,
				"modules/toolbar": H.default,
				"themes/bubble": tt.default,
				"themes/snow": nt.default,
				"ui/icons": z.default,
				"ui/picker": V.default,
				"ui/icon-picker": X.default,
				"ui/color-picker": G.default,
				"ui/tooltip": Q.default
			}, !0), e.default = i.default
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(0),
				i = r(o),
				l = n(6),
				a = r(l),
				s = n(3),
				u = r(s),
				c = n(14),
				f = r(c),
				h = n(23),
				p = r(h),
				d = n(31),
				y = r(d),
				v = n(33),
				b = r(v),
				g = n(5),
				m = r(g),
				_ = n(59),
				O = r(_),
				w = n(8),
				x = r(w),
				k = n(60),
				E = r(k),
				N = n(61),
				j = r(N),
				A = n(25),
				q = r(A);
			a.default.register({
				"blots/block": u.default,
				"blots/block/embed": s.BlockEmbed,
				"blots/break": f.default,
				"blots/container": p.default,
				"blots/cursor": y.default,
				"blots/embed": b.default,
				"blots/inline": m.default,
				"blots/scroll": O.default,
				"blots/text": x.default,
				"modules/clipboard": E.default,
				"modules/history": j.default,
				"modules/keyboard": q.default
			}), i.default.register(u.default, f.default, y.default, m.default, O.default, x.default), e.default = a.default
		}, function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = function() {
					function t() {
						this.head = this.tail = null, this.length = 0
					}
					return t.prototype.append = function() {
						for (var t = [], e = 0; e < arguments.length; e++)
							t[e] = arguments[e];
						this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
					}, t.prototype.contains = function(t) {
						for (var e, n = this.iterator(); e = n();)
							if (e === t)
								return !0;
						return !1
					}, t.prototype.insertBefore = function(t, e) {
						t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
					}, t.prototype.offset = function(t) {
						for (var e = 0, n = this.head; null != n;) {
							if (n === t)
								return e;
							e += n.length(), n = n.next
						}
						return -1
					}, t.prototype.remove = function(t) {
						this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
					}, t.prototype.iterator = function(t) {
						return void 0 === t && (t = this.head),
							function() {
								var e = t;
								return null != t && (t = t.next), e
							}
					}, t.prototype.find = function(t, e) {
						void 0 === e && (e = !1);
						for (var n, r = this.iterator(); n = r();) {
							var o = n.length();
							if (t < o || e && t === o && (null == n.next || 0 !== n.next.length()))
								return [n, t];
							t -= o
						}
						return [null, 0]
					}, t.prototype.forEach = function(t) {
						for (var e, n = this.iterator(); e = n();)
							t(e)
					}, t.prototype.forEachAt = function(t, e, n) {
						if (!(e <= 0))
							for (var r, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i);
								(r = s()) && a < t + e;) {
								var u = r.length();
								t > a ? n(r, t - a, Math.min(e, a + u - t)) : n(r, 0, Math.min(u, t + e - a)), a += u
							}
					}, t.prototype.map = function(t) {
						return this.reduce(function(e, n) {
							return e.push(t(n)), e
						}, [])
					}, t.prototype.reduce = function(t, e) {
						for (var n, r = this.iterator(); n = r();)
							e = t(e, n);
						return e
					}, t
				}
				();
			e.default = r
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(17),
				i = n(1),
				l = {
					attributes: !0,
					characterData: !0,
					characterDataOldValue: !0,
					childList: !0,
					subtree: !0
				},
				a = function(t) {
					function e(e) {
						var n = t.call(this, e) || this;
						return n.scroll = n, n.observer = new MutationObserver(function(t) {
							n.update(t)
						}), n.observer.observe(n.domNode, l), n.attach(), n
					}
					return r(e, t), e.prototype.detach = function() {
						t.prototype.detach.call(this), this.observer.disconnect()
					}, e.prototype.deleteAt = function(e, n) {
						this.update(), 0 === e && n === this.length() ? this.children.forEach(function(t) {
							t.remove()
						}) : t.prototype.deleteAt.call(this, e, n)
					}, e.prototype.formatAt = function(e, n, r, o) {
						this.update(), t.prototype.formatAt.call(this, e, n, r, o)
					}, e.prototype.insertAt = function(e, n, r) {
						this.update(), t.prototype.insertAt.call(this, e, n, r)
					}, e.prototype.optimize = function(e, n) {
						var r = this;
						void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
						for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0;)
							e.push(l.pop());
						for (var a = function(t, e) {
								void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && a(t.parent))
							}, s = function(t) {
								null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(s), t.optimize(n))
							}, u = e, c = 0; u.length > 0; c += 1) {
							if (c >= 100)
								throw new Error("[Parchment] Maximum optimize iterations reached");
							for (u.forEach(function(t) {
									var e = i.find(t.target, !0);
									null != e && (e.domNode === t.target && ("childList" === t.type ? (a(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function(t) {
										var e = i.find(t, !1);
										a(e, !1), e instanceof o.default && e.children.forEach(function(t) {
											a(t, !1)
										})
									})) : "attributes" === t.type && a(e.prev)), a(e))
								}), this.children.forEach(s), u = [].slice.call(this.observer.takeRecords()), l = u.slice(); l.length > 0;)
								e.push(l.pop())
						}
					}, e.prototype.update = function(e, n) {
						var r = this;
						void 0 === n && (n = {}), e = e || this.observer.takeRecords(), e.map(function(t) {
							var e = i.find(t.target, !0);
							return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null)
						}).forEach(function(t) {
							null != t && t !== r && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations || [], n)
						}), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, n), this.optimize(e, n)
					}, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
				}
				(o.default);
			e.default = a
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (Object.keys(t).length !== Object.keys(e).length)
					return !1;
				for (var n in t)
					if (t[n] !== e[n])
						return !1;
				return !0
			}
			var o = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = n(18),
				l = n(1),
				a = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return o(e, t), e.formats = function(n) {
						if (n.tagName !== e.tagName)
							return t.formats.call(this, n)
					}, e.prototype.format = function(n, r) {
						var o = this;
						n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function(t) {
							t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t)
						}), this.unwrap())
					}, e.prototype.formatAt = function(e, n, r, o) {
						if (null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE)) {
							this.isolate(e, n).format(r, o)
						} else
							t.prototype.formatAt.call(this, e, n, r, o)
					}, e.prototype.optimize = function(n) {
						t.prototype.optimize.call(this, n);
						var o = this.formats();
						if (0 === Object.keys(o).length)
							return this.unwrap();
						var i = this.next;
						i instanceof e && i.prev === this && r(o, i.formats()) && (i.moveChildren(this), i.remove())
					}, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
				}
				(i.default);
			e.default = a
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(18),
				i = n(1),
				l = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r(e, t), e.formats = function(n) {
						var r = i.query(e.blotName).tagName;
						if (n.tagName !== r)
							return t.formats.call(this, n)
					}, e.prototype.format = function(n, r) {
						null != i.query(n, i.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName))
					}, e.prototype.formatAt = function(e, n, r, o) {
						null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
					}, e.prototype.insertAt = function(e, n, r) {
						if (null == r || null != i.query(n, i.Scope.INLINE))
							t.prototype.insertAt.call(this, e, n, r);
						else {
							var o = this.split(e),
								l = i.create(n, r);
							o.parent.insertBefore(l, o)
						}
					}, e.prototype.update = function(e, n) {
						navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n)
					}, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
				}
				(o.default);
			e.default = l
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(19),
				i = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r(e, t), e.formats = function(t) {}, e.prototype.format = function(e, n) {
						t.prototype.formatAt.call(this, 0, this.length(), e, n)
					}, e.prototype.formatAt = function(e, n, r, o) {
						0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
					}, e.prototype.formats = function() {
						return this.statics.formats(this.domNode)
					}, e
				}
				(o.default);
			e.default = i
		}, function(t, e, n) {
			"use strict";
			var r = this && this.__extends || function() {
					var t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e)
							e.hasOwnProperty(n) && (t[n] = e[n])
					};
					return function(e, n) {
						function r() {
							this.constructor = e
						}
						t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
					}
				}
				();
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(19),
				i = n(1),
				l = function(t) {
					function e(e) {
						var n = t.call(this, e) || this;
						return n.text = n.statics.value(n.domNode), n
					}
					return r(e, t), e.create = function(t) {
						return document.createTextNode(t)
					}, e.value = function(t) {
						var e = t.data;
						return e.normalize && (e = e.normalize()), e
					}, e.prototype.deleteAt = function(t, e) {
						this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
					}, e.prototype.index = function(t, e) {
						return this.domNode === t ? e : -1
					}, e.prototype.insertAt = function(e, n, r) {
						null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
					}, e.prototype.length = function() {
						return this.text.length
					}, e.prototype.optimize = function(n) {
						t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
					}, e.prototype.position = function(t, e) {
						return void 0 === e && (e = !1), [this.domNode, t]
					}, e.prototype.split = function(t, e) {
						if (void 0 === e && (e = !1), !e) {
							if (0 === t)
								return this;
							if (t === this.length())
								return this.next
						}
						var n = i.create(this.domNode.splitText(t));
						return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
					}, e.prototype.update = function(t, e) {
						var n = this;
						t.some(function(t) {
							return "characterData" === t.type && t.target === n.domNode
						}) && (this.text = this.statics.value(this.domNode))
					}, e.prototype.value = function() {
						return this.text
					}, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
				}
				(o.default);
			e.default = l
		}, function(t, e, n) {
			"use strict";
			var r = document.createElement("div");
			if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
				var o = DOMTokenList.prototype.toggle;
				DOMTokenList.prototype.toggle = function(t, e) {
					return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t)
				}
			}
			String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
				return e = e || 0, this.substr(e, t.length) === t
			}), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
				var n = this.toString();
				("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
				var r = n.indexOf(t, e);
				return -1 !== r && r === e
			}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
				value: function(t) {
					if (null === this)
						throw new TypeError("Array.prototype.find called on null or undefined");
					if ("function" != typeof t)
						throw new TypeError("predicate must be a function");
					for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
						if (e = n[i], t.call(o, e, i, n))
							return e
				}
			}), document.addEventListener("DOMContentLoaded", function() {
				document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
			})
		}, function(t, e) {
			function n(t, e, n) {
				if (t == e)
					return t ? [
						[v, t]
					] : [];
				(n < 0 || t.length < n) && (n = null);
				var o = l(t, e),
					i = t.substring(0, o);
				t = t.substring(o), e = e.substring(o), o = a(t, e);
				var s = t.substring(t.length - o);
				t = t.substring(0, t.length - o), e = e.substring(0, e.length - o);
				var c = r(t, e);
				return i && c.unshift([v, i]), s && c.push([v, s]), u(c), null != n && (c = f(c, n)), c = h(c)
			}

			function r(t, e) {
				var r;
				if (!t)
					return [
						[y, e]
					];
				if (!e)
					return [
						[d, t]
					];
				var i = t.length > e.length ? t : e,
					l = t.length > e.length ? e : t,
					a = i.indexOf(l);
				if (-1 != a)
					return r = [
						[y, i.substring(0, a)],
						[v, l],
						[y, i.substring(a + l.length)]
					], t.length > e.length && (r[0][0] = r[2][0] = d), r;
				if (1 == l.length)
					return [
						[d, t],
						[y, e]
					];
				var u = s(t, e);
				if (u) {
					var c = u[0],
						f = u[1],
						h = u[2],
						p = u[3],
						b = u[4],
						g = n(c, h),
						m = n(f, p);
					return g.concat([
						[v, b]
					], m)
				}
				return o(t, e)
			}

			function o(t, e) {
				for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), l = o, a = 2 * o, s = new Array(a), u = new Array(a), c = 0; c < a; c++)
					s[c] = -1, u[c] = -1;
				s[l + 1] = 0, u[l + 1] = 0;
				for (var f = n - r, h = f % 2 != 0, p = 0, v = 0, b = 0, g = 0, m = 0; m < o; m++) {
					for (var _ = -m + p; _ <= m - v; _ += 2) {
						var O, w = l + _;
						O = _ == -m || _ != m && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1;
						for (var x = O - _; O < n && x < r && t.charAt(O) == e.charAt(x);)
							O++, x++;
						if (s[w] = O, O > n)
							v += 2;
						else if (x > r)
							p += 2;
						else if (h) {
							var k = l + f - _;
							if (k >= 0 && k < a && -1 != u[k]) {
								var E = n - u[k];
								if (O >= E)
									return i(t, e, O, x)
							}
						}
					}
					for (var N = -m + b; N <= m - g; N += 2) {
						var E, k = l + N;
						E = N == -m || N != m && u[k - 1] < u[k + 1] ? u[k + 1] : u[k - 1] + 1;
						for (var j = E - N; E < n && j < r && t.charAt(n - E - 1) == e.charAt(r - j - 1);)
							E++, j++;
						if (u[k] = E, E > n)
							g += 2;
						else if (j > r)
							b += 2;
						else if (!h) {
							var w = l + f - N;
							if (w >= 0 && w < a && -1 != s[w]) {
								var O = s[w],
									x = l + O - w;
								if (E = n - E, O >= E)
									return i(t, e, O, x)
							}
						}
					}
				}
				return [
					[d, t],
					[y, e]
				]
			}

			function i(t, e, r, o) {
				var i = t.substring(0, r),
					l = e.substring(0, o),
					a = t.substring(r),
					s = e.substring(o),
					u = n(i, l),
					c = n(a, s);
				return u.concat(c)
			}

			function l(t, e) {
				if (!t || !e || t.charAt(0) != e.charAt(0))
					return 0;
				for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;)
					t.substring(i, o) == e.substring(i, o) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
				return o
			}

			function a(t, e) {
				if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
					return 0;
				for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;)
					t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
				return o
			}

			function s(t, e) {
				function n(t, e, n) {
					for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(u, c + 1));) {
						var h = l(t.substring(n), e.substring(c)),
							p = a(t.substring(0, n), e.substring(0, c));
						f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h), r = t.substring(0, n - p), o = t.substring(n + h), i = e.substring(0, c - p), s = e.substring(c + h))
					}
					return 2 * f.length >= t.length ? [r, o, i, s, f] : null
				}
				var r = t.length > e.length ? t : e,
					o = t.length > e.length ? e : t;
				if (r.length < 4 || 2 * o.length < r.length)
					return null;
				var i, s = n(r, o, Math.ceil(r.length / 4)),
					u = n(r, o, Math.ceil(r.length / 2));
				if (!s && !u)
					return null;
				i = u ? s && s[4].length > u[4].length ? s : u : s;
				var c, f, h, p;
				return t.length > e.length ? (c = i[0], f = i[1], h = i[2], p = i[3]) : (h = i[0], p = i[1], c = i[2], f = i[3]), [c, f, h, p, i[4]]
			}

			function u(t) {
				t.push([v, ""]);
				for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;)
					switch (t[n][0]) {
						case y:
							o++, s += t[n][1], n++;
							break;
						case d:
							r++, i += t[n][1], n++;
							break;
						case v:
							r + o > 1 ? (0 !== r && 0 !== o && (e = l(s, i), 0 !== e && (n - r - o > 0 && t[n - r - o - 1][0] == v ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [v, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(n - o, r + o, [y, s]) : 0 === o ? t.splice(n - r, r + o, [d, i]) : t.splice(n - r - o, r + o, [d, i], [y, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == v ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = ""
					}
				"" === t[t.length - 1][1] && t.pop();
				var c = !1;
				for (n = 1; n < t.length - 1;)
					t[n - 1][0] == v && t[n + 1][0] == v && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), c = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), c = !0)), n++;
				c && u(t)
			}

			function c(t, e) {
				if (0 === e)
					return [v, t];
				for (var n = 0, r = 0; r < t.length; r++) {
					var o = t[r];
					if (o[0] === d || o[0] === v) {
						var i = n + o[1].length;
						if (e === i)
							return [r + 1, t];
						if (e < i) {
							t = t.slice();
							var l = e - n,
								a = [o[0], o[1].slice(0, l)],
								s = [o[0], o[1].slice(l)];
							return t.splice(r, 1, a, s), [r + 1, t]
						}
						n = i
					}
				}
				throw new Error("cursor_pos is out of bounds!")
			}

			function f(t, e) {
				var n = c(t, e),
					r = n[1],
					o = n[0],
					i = r[o],
					l = r[o + 1];
				if (null == i)
					return t;
				if (i[0] !== v)
					return t;
				if (null != l && i[1] + l[1] === l[1] + i[1])
					return r.splice(o, 2, l, i), p(r, o, 2);
				if (null != l && 0 === l[1].indexOf(i[1])) {
					r.splice(o, 2, [l[0], i[1]], [0, i[1]]);
					var a = l[1].slice(i[1].length);
					return a.length > 0 && r.splice(o + 2, 0, [l[0], a]), p(r, o, 3)
				}
				return t
			}

			function h(t) {
				for (var e = !1, n = function(t) {
						return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
					}, r = 2; r < t.length; r += 1)
					t[r - 2][0] === v && function(t) {
						return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319
					}
					(t[r - 2][1]) && t[r - 1][0] === d && n(t[r - 1][1]) && t[r][0] === y && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1));
				if (!e)
					return t;
				for (var o = [], r = 0; r < t.length; r += 1)
					t[r][1].length > 0 && o.push(t[r]);
				return o
			}

			function p(t, e, n) {
				for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
					if (r + 1 < t.length) {
						var o = t[r],
							i = t[r + 1];
						o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]])
					}
				return t
			}
			var d = -1,
				y = 1,
				v = 0,
				b = n;
			b.INSERT = y, b.DELETE = d, b.EQUAL = v, t.exports = b
		}, function(t, e) {
			function n(t) {
				var e = [];
				for (var n in t)
					e.push(n);
				return e
			}
			e = t.exports = "function" == typeof Object.keys ? Object.keys : n, e.shim = n
		}, function(t, e) {
			function n(t) {
				return "[object Arguments]" == Object.prototype.toString.call(t)
			}

			function r(t) {
				return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
			}
			var o = "[object Arguments]" == function() {
					return Object.prototype.toString.call(arguments)
				}
				();
			e = t.exports = o ? n : r, e.supported = n, e.unsupported = r
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				return Object.keys(e).reduce(function(n, r) {
					return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]], n)
				}, {})
			}

			function a(t) {
				return t.reduce(function(t, e) {
					if (1 === e.insert) {
						var n = (0, N.default)(e.attributes);
						return delete n.image, t.insert({
							image: e.attributes.image
						}, n)
					}
					if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || (e = (0, N.default)(e), e.attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
						var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
						return t.insert(r, e.attributes)
					}
					return t.push(e)
				}, new h.default)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				u = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				c = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				f = n(4),
				h = r(f),
				p = n(20),
				d = r(p),
				y = n(0),
				v = r(y),
				b = n(13),
				g = r(b),
				m = n(31),
				_ = r(m),
				O = n(3),
				w = r(O),
				x = n(14),
				k = r(x),
				E = n(21),
				N = r(E),
				j = n(12),
				A = r(j),
				q = n(2),
				T = r(q),
				P = /^[ -~]*$/,
				S = function() {
					function t(e) {
						i(this, t), this.scroll = e, this.delta = this.getDelta()
					}
					return c(t, [{
						key: "applyDelta",
						value: function(t) {
							var e = this,
								n = !1;
							this.scroll.update();
							var r = this.scroll.length();
							return this.scroll.batchStart(), t = a(t), t.reduce(function(t, o) {
								var i = o.retain || o.delete || o.insert.length || 1,
									l = o.attributes || {};
								if (null != o.insert) {
									if ("string" == typeof o.insert) {
										var a = o.insert;
										a.endsWith("\n") && n && (n = !1, a = a.slice(0, -1)), t >= r && !a.endsWith("\n") && (n = !0), e.scroll.insertAt(t, a);
										var c = e.scroll.line(t),
											f = u(c, 2),
											h = f[0],
											p = f[1],
											y = (0, T.default)({}, (0, O.bubbleFormats)(h));
										if (h instanceof w.default) {
											var b = h.descendant(v.default.Leaf, p),
												g = u(b, 1),
												m = g[0];
											y = (0, T.default)(y, (0, O.bubbleFormats)(m))
										}
										l = d.default.attributes.diff(y, l) || {}
									} else if ("object" === s(o.insert)) {
										var _ = Object.keys(o.insert)[0];
										if (null == _)
											return t;
										e.scroll.insertAt(t, _, o.insert[_])
									}
									r += i
								}
								return Object.keys(l).forEach(function(n) {
									e.scroll.formatAt(t, i, n, l[n])
								}), t + i
							}, 0), t.reduce(function(t, n) {
								return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1)
							}, 0), this.scroll.batchEnd(), this.update(t)
						}
					}, {
						key: "deleteText",
						value: function(t, e) {
							return this.scroll.deleteAt(t, e), this.update((new h.default).retain(t).delete(e))
						}
					}, {
						key: "formatLine",
						value: function(t, e) {
							var n = this,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							return this.scroll.update(), Object.keys(r).forEach(function(o) {
								if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
									var i = n.scroll.lines(t, Math.max(e, 1)),
										l = e;
									i.forEach(function(e) {
										var i = e.length();
										if (e instanceof g.default) {
											var a = t - e.offset(n.scroll),
												s = e.newlineIndex(a + l) - a + 1;
											e.formatAt(a, s, o, r[o])
										} else
											e.format(o, r[o]);
										l -= i
									})
								}
							}), this.scroll.optimize(), this.update((new h.default).retain(t).retain(e, (0, N.default)(r)))
						}
					}, {
						key: "formatText",
						value: function(t, e) {
							var n = this,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							return Object.keys(r).forEach(function(o) {
								n.scroll.formatAt(t, e, o, r[o])
							}), this.update((new h.default).retain(t).retain(e, (0, N.default)(r)))
						}
					}, {
						key: "getContents",
						value: function(t, e) {
							return this.delta.slice(t, t + e)
						}
					}, {
						key: "getDelta",
						value: function() {
							return this.scroll.lines().reduce(function(t, e) {
								return t.concat(e.delta())
							}, new h.default)
						}
					}, {
						key: "getFormat",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = [],
								r = [];
							0 === e ? this.scroll.path(t).forEach(function(t) {
								var e = u(t, 1),
									o = e[0];
								o instanceof w.default ? n.push(o) : o instanceof v.default.Leaf && r.push(o)
							}) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(v.default.Leaf, t, e));
							var o = [n, r].map(function(t) {
								if (0 === t.length)
									return {};
								for (var e = (0, O.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
									var n = t.shift();
									if (null == n)
										return e;
									e = l((0, O.bubbleFormats)(n), e)
								}
								return e
							});
							return T.default.apply(T.default, o)
						}
					}, {
						key: "getText",
						value: function(t, e) {
							return this.getContents(t, e).filter(function(t) {
								return "string" == typeof t.insert
							}).map(function(t) {
								return t.insert
							}).join("")
						}
					}, {
						key: "insertEmbed",
						value: function(t, e, n) {
							return this.scroll.insertAt(t, e, n), this.update((new h.default).retain(t).insert(o({}, e, n)))
						}
					}, {
						key: "insertText",
						value: function(t, e) {
							var n = this,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach(function(o) {
								n.scroll.formatAt(t, e.length, o, r[o])
							}), this.update((new h.default).retain(t).insert(e, (0, N.default)(r)))
						}
					}, {
						key: "isBlank",
						value: function() {
							if (0 == this.scroll.children.length)
								return !0;
							if (this.scroll.children.length > 1)
								return !1;
							var t = this.scroll.children.head;
							return t.statics.blotName === w.default.blotName && (!(t.children.length > 1) && t.children.head instanceof k.default)
						}
					}, {
						key: "removeFormat",
						value: function(t, e) {
							var n = this.getText(t, e),
								r = this.scroll.line(t + e),
								o = u(r, 2),
								i = o[0],
								l = o[1],
								a = 0,
								s = new h.default;
							null != i && (a = i instanceof g.default ? i.newlineIndex(l) - l + 1 : i.length() - l, s = i.delta().slice(l, l + a - 1).insert("\n"));
							var c = this.getContents(t, e + a),
								f = c.diff((new h.default).insert(n).concat(s)),
								p = (new h.default).retain(t).concat(f);
							return this.applyDelta(p)
						}
					}, {
						key: "update",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
								r = this.delta;
							if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(P) && v.default.find(e[0].target)) {
								var o = v.default.find(e[0].target),
									i = (0, O.bubbleFormats)(o),
									l = o.offset(this.scroll),
									a = e[0].oldValue.replace(_.default.CONTENTS, ""),
									s = (new h.default).insert(a),
									u = (new h.default).insert(o.value());
								t = (new h.default).retain(l).concat(s.diff(u, n)).reduce(function(t, e) {
									return e.insert ? t.insert(e.insert, i) : t.push(e)
								}, new h.default), this.delta = r.compose(t)
							} else
								this.delta = this.getDelta(), t && (0, A.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
							return t
						}
					}]), t
				}
				();
			e.default = S
		}, function(t, e) {
			"use strict";

			function n() {}

			function r(t, e, n) {
				this.fn = t, this.context = e, this.once = n || !1
			}

			function o() {
				this._events = new n, this._eventsCount = 0
			}
			var i = Object.prototype.hasOwnProperty,
				l = "~";
			Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (l = !1)), o.prototype.eventNames = function() {
				var t, e, n = [];
				if (0 === this._eventsCount)
					return n;
				for (e in t = this._events)
					i.call(t, e) && n.push(l ? e.slice(1) : e);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
			}, o.prototype.listeners = function(t, e) {
				var n = l ? l + t : t,
					r = this._events[n];
				if (e)
					return !!r;
				if (!r)
					return [];
				if (r.fn)
					return [r.fn];
				for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
					a[o] = r[o].fn;
				return a
			}, o.prototype.emit = function(t, e, n, r, o, i) {
				var a = l ? l + t : t;
				if (!this._events[a])
					return !1;
				var s, u, c = this._events[a],
					f = arguments.length;
				if (c.fn) {
					switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
						case 1:
							return c.fn.call(c.context), !0;
						case 2:
							return c.fn.call(c.context, e), !0;
						case 3:
							return c.fn.call(c.context, e, n), !0;
						case 4:
							return c.fn.call(c.context, e, n, r), !0;
						case 5:
							return c.fn.call(c.context, e, n, r, o), !0;
						case 6:
							return c.fn.call(c.context, e, n, r, o, i), !0
					}
					for (u = 1, s = new Array(f - 1); u < f; u++)
						s[u - 1] = arguments[u];
					c.fn.apply(c.context, s)
				} else {
					var h, p = c.length;
					for (u = 0; u < p; u++)
						switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
							case 1:
								c[u].fn.call(c[u].context);
								break;
							case 2:
								c[u].fn.call(c[u].context, e);
								break;
							case 3:
								c[u].fn.call(c[u].context, e, n);
								break;
							case 4:
								c[u].fn.call(c[u].context, e, n, r);
								break;
							default:
								if (!s)
									for (h = 1, s = new Array(f - 1); h < f; h++)
										s[h - 1] = arguments[h];
								c[u].fn.apply(c[u].context, s)
						}
				}
				return !0
			}, o.prototype.on = function(t, e, n) {
				var o = new r(e, n || this),
					i = l ? l + t : t;
				return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
			}, o.prototype.once = function(t, e, n) {
				var o = new r(e, n || this, !0),
					i = l ? l + t : t;
				return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
			}, o.prototype.removeListener = function(t, e, r, o) {
				var i = l ? l + t : t;
				if (!this._events[i])
					return this;
				if (!e)
					return 0 == --this._eventsCount ? this._events = new n : delete this._events[i], this;
				var a = this._events[i];
				if (a.fn)
					a.fn !== e || o && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[i]);
				else {
					for (var s = 0, u = [], c = a.length; s < c; s++)
						(a[s].fn !== e || o && !a[s].once || r && a[s].context !== r) && u.push(a[s]);
					u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new n : delete this._events[i]
				}
				return this
			}, o.prototype.removeAllListeners = function(t) {
				var e;
				return t ? (e = l ? l + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this
			}, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
				return this
			}, o.prefixed = l, o.EventEmitter = o, void 0 !== t && (t.exports = o)
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function a(t) {
				return t instanceof v.default || t instanceof y.BlockEmbed
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				u = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				c = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				f = n(0),
				h = r(f),
				p = n(9),
				d = r(p),
				y = n(3),
				v = r(y),
				b = n(14),
				g = r(b),
				m = n(13),
				_ = r(m),
				O = n(23),
				w = r(O),
				x = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
						return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function(t, e) {
							return t[e] = !0, t
						}, {})), r.domNode.addEventListener("DOMNodeInserted", function() {}), r.optimize(), r.enable(), r
					}
					return l(e, t), u(e, [{
						key: "batchStart",
						value: function() {
							this.batch = !0
						}
					}, {
						key: "batchEnd",
						value: function() {
							this.batch = !1, this.optimize()
						}
					}, {
						key: "deleteAt",
						value: function(t, n) {
							var r = this.line(t),
								o = s(r, 2),
								i = o[0],
								l = o[1],
								a = this.line(t + n),
								u = s(a, 1),
								f = u[0];
							if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != f && i !== f && l > 0) {
								if (i instanceof y.BlockEmbed || f instanceof y.BlockEmbed)
									return void this.optimize();
								if (i instanceof _.default) {
									var h = i.newlineIndex(i.length(), !0);
									if (h > -1 && (i = i.split(h + 1)) === f)
										return void this.optimize()
								} else if (f instanceof _.default) {
									var p = f.newlineIndex(0);
									p > -1 && f.split(p + 1)
								}
								var d = f.children.head instanceof g.default ? null : f.children.head;
								i.moveChildren(f, d), i.remove()
							}
							this.optimize()
						}
					}, {
						key: "enable",
						value: function() {
							var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							this.domNode.setAttribute("contenteditable", t)
						}
					}, {
						key: "formatAt",
						value: function(t, n, r, o) {
							(null == this.whitelist || this.whitelist[r]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize())
						}
					}, {
						key: "insertAt",
						value: function(t, n, r) {
							if (null == r || null == this.whitelist || this.whitelist[n]) {
								if (t >= this.length())
									if (null == r || null == h.default.query(n, h.default.Scope.BLOCK)) {
										var o = h.default.create(this.statics.defaultChild);
										this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r)
									} else {
										var i = h.default.create(n, r);
										this.appendChild(i)
									}
								else
									c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
								this.optimize()
							}
						}
					}, {
						key: "insertBefore",
						value: function(t, n) {
							if (t.statics.scope === h.default.Scope.INLINE_BLOT) {
								var r = h.default.create(this.statics.defaultChild);
								r.appendChild(t), t = r
							}
							c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
						}
					}, {
						key: "leaf",
						value: function(t) {
							return this.path(t).pop() || [null, -1]
						}
					}, {
						key: "line",
						value: function(t) {
							return t === this.length() ? this.line(t - 1) : this.descendant(a, t)
						}
					}, {
						key: "lines",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
							return function t(e, n, r) {
									var o = [],
										i = r;
									return e.children.forEachAt(n, r, function(e, n, r) {
										a(e) ? o.push(e) : e instanceof h.default.Container && (o = o.concat(t(e, n, i))), i -= r
									}), o
								}
								(this, t, e)
						}
					}, {
						key: "optimize",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							!0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_OPTIMIZE, t, n))
						}
					}, {
						key: "path",
						value: function(t) {
							return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
						}
					}, {
						key: "update",
						value: function(t) {
							if (!0 !== this.batch) {
								var n = d.default.sources.USER;
								"string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE, n, t), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_UPDATE, n, t)
							}
						}
					}]), e
				}
				(h.default.Scroll);
			x.blotName = "scroll", x.className = "ql-editor", x.tagName = "DIV", x.defaultChild = "block", x.allowedChildren = [v.default, y.BlockEmbed, w.default], e.default = x
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function s(t, e, n) {
				return "object" === (void 0 === e ? "undefined" : x(e)) ? Object.keys(e).reduce(function(t, n) {
					return s(t, n, e[n])
				}, t) : t.reduce(function(t, r) {
					return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, j.default)({}, o({}, e, n), r.attributes))
				}, new q.default)
			}

			function u(t) {
				if (t.nodeType !== Node.ELEMENT_NODE)
					return {};
				return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
			}

			function c(t, e) {
				for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
					var o = t.ops[r];
					if ("string" != typeof o.insert)
						break;
					n = o.insert + n
				}
				return n.slice(-1 * e.length) === e
			}

			function f(t) {
				return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(u(t).display) > -1
			}

			function h(t, e, n) {
				return t.nodeType === t.TEXT_NODE ? n.reduce(function(e, n) {
					return n(t, e)
				}, new q.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function(r, o) {
					var i = h(o, e, n);
					return o.nodeType === t.ELEMENT_NODE && (i = e.reduce(function(t, e) {
						return e(o, t)
					}, i), i = (o[W] || []).reduce(function(t, e) {
						return e(o, t)
					}, i)), r.concat(i)
				}, new q.default) : new q.default
			}

			function p(t, e, n) {
				return s(n, t, !0)
			}

			function d(t, e) {
				var n = P.default.Attributor.Attribute.keys(t),
					r = P.default.Attributor.Class.keys(t),
					o = P.default.Attributor.Style.keys(t),
					i = {};
				return n.concat(r).concat(o).forEach(function(e) {
					var n = P.default.query(e, P.default.Scope.ATTRIBUTE);
					null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (n = Y[e], null == n || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = X[e]) || n.attrName !== e && n.keyName !== e || (n = X[e], i[n.attrName] = n.value(t) || void 0))
				}), Object.keys(i).length > 0 && (e = s(e, i)), e
			}

			function y(t, e) {
				var n = P.default.query(t);
				if (null == n)
					return e;
				if (n.prototype instanceof P.default.Embed) {
					var r = {},
						o = n.value(t);
					null != o && (r[n.blotName] = o, e = (new q.default).insert(r, n.formats(t)))
				} else "function" == typeof n.formats && (e = s(e, n.blotName, n.formats(t)));
				return e
			}

			function v(t, e) {
				return c(e, "\n") || e.insert("\n"), e
			}

			function b() {
				return new q.default
			}

			function g(t, e) {
				var n = P.default.query(t);
				if (null == n || "list-item" !== n.blotName || !c(e, "\n"))
					return e;
				for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) "list" === (P.default.query(o) || {}).blotName && (r += 1), o = o.parentNode;
				return r <= 0 ? e : e.compose((new q.default).retain(e.length() - 1).retain(1, {
					indent: r
				}))
			}

			function m(t, e) {
				return c(e, "\n") || (f(t) || e.length() > 0 && t.nextSibling && f(t.nextSibling)) && e.insert("\n"), e
			}

			function _(t, e) {
				if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
					var n = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);
					t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
				}
				return e
			}

			function O(t, e) {
				var n = {},
					r = t.style || {};
				return r.fontStyle && "italic" === u(t).fontStyle && (n.italic = !0), r.fontWeight && (u(t).fontWeight.startsWith("bold") || parseInt(u(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = s(e, n)), parseFloat(r.textIndent || 0) > 0 && (e = (new q.default).insert("\t").concat(e)), e
			}

			function w(t, e) {
				var n = t.data;
				if ("O:P" === t.parentNode.tagName)
					return e.insert(n.trim());
				if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard"))
					return e;
				if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
					var r = function(t, e) {
						return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e
					};
					n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
				}
				return e.insert(n)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
			var x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				k = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				E = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				N = n(2),
				j = r(N),
				A = n(4),
				q = r(A),
				T = n(0),
				P = r(T),
				S = n(6),
				C = r(S),
				L = n(10),
				M = r(L),
				R = n(7),
				I = r(R),
				B = n(34),
				D = n(35),
				U = n(13),
				F = r(U),
				H = n(24),
				K = n(36),
				z = n(37),
				Z = n(38),
				V = (0, M.default)("quill:clipboard"),
				W = "__ql-matcher",
				G = [
					[Node.TEXT_NODE, w],
					[Node.TEXT_NODE, m],
					["br", v],
					[Node.ELEMENT_NODE, m],
					[Node.ELEMENT_NODE, y],
					[Node.ELEMENT_NODE, _],
					[Node.ELEMENT_NODE, d],
					[Node.ELEMENT_NODE, O],
					["li", g],
					["b", p.bind(p, "bold")],
					["i", p.bind(p, "italic")],
					["style", b]
				],
				Y = [B.AlignAttribute, K.DirectionAttribute].reduce(function(t, e) {
					return t[e.keyName] = e, t
				}, {}),
				X = [B.AlignStyle, D.BackgroundStyle, H.ColorStyle, K.DirectionStyle, z.FontStyle, Z.SizeStyle].reduce(function(t, e) {
					return t[e.keyName] = e, t
				}, {}),
				$ = function(t) {
					function e(t, n) {
						i(this, e);
						var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], G.concat(r.options.matchers).forEach(function(t) {
							var e = k(t, 2),
								o = e[0],
								i = e[1];
							(n.matchVisual || i !== _) && r.addMatcher(o, i)
						}), r
					}
					return a(e, t), E(e, [{
						key: "addMatcher",
						value: function(t, e) {
							this.matchers.push([t, e])
						}
					}, {
						key: "convert",
						value: function(t) {
							if ("string" == typeof t)
								return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
							var e = this.quill.getFormat(this.quill.selection.savedRange.index);
							if (e[F.default.blotName]) {
								var n = this.container.innerText;
								return this.container.innerHTML = "", (new q.default).insert(n, o({}, F.default.blotName, e[F.default.blotName]))
							}
							var r = this.prepareMatching(),
								i = k(r, 2),
								l = i[0],
								a = i[1],
								s = h(this.container, l, a);
							return c(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose((new q.default).retain(s.length() - 1).delete(1))), V.log("convert", this.container.innerHTML, s), this.container.innerHTML = "", s
						}
					}, {
						key: "dangerouslyPasteHTML",
						value: function(t, e) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.default.sources.API;
							if ("string" == typeof t)
								this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, C.default.sources.SILENT);
							else {
								var r = this.convert(e);
								this.quill.updateContents((new q.default).retain(t).concat(r), n), this.quill.setSelection(t + r.length(), C.default.sources.SILENT)
							}
						}
					}, {
						key: "onPaste",
						value: function(t) {
							var e = this;
							if (!t.defaultPrevented && this.quill.isEnabled()) {
								var n = this.quill.getSelection(),
									r = (new q.default).retain(n.index),
									o = this.quill.scrollingContainer.scrollTop;
								this.container.focus(), this.quill.selection.update(C.default.sources.SILENT), setTimeout(function() {
									r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, C.default.sources.USER), e.quill.setSelection(r.length() - n.length, C.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus()
								}, 1)
							}
						}
					}, {
						key: "prepareMatching",
						value: function() {
							var t = this,
								e = [],
								n = [];
							return this.matchers.forEach(function(r) {
								var o = k(r, 2),
									i = o[0],
									l = o[1];
								switch (i) {
									case Node.TEXT_NODE:
										n.push(l);
										break;
									case Node.ELEMENT_NODE:
										e.push(l);
										break;
									default:
										[].forEach.call(t.container.querySelectorAll(i), function(t) {
											t[W] = t[W] || [], t[W].push(l)
										})
								}
							}), [e, n]
						}
					}]), e
				}
				(I.default);
			$.DEFAULTS = {
				matchers: [],
				matchVisual: !0
			}, e.default = $, e.matchAttributor = d, e.matchBlot = y, e.matchNewline = m, e.matchSpacing = _, e.matchText = w
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function a(t) {
				var e = t.ops[t.ops.length - 1];
				return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function(t) {
					return null != f.default.query(t, f.default.Scope.BLOCK)
				}))
			}

			function s(t) {
				var e = t.reduce(function(t, e) {
						return t += e.delete || 0
					}, 0),
					n = t.length() - e;
				return a(t) && (n -= 1), n
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.getLastChangeIndex = e.default = void 0;
			var u = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				c = n(0),
				f = r(c),
				h = n(6),
				p = r(h),
				d = n(7),
				y = r(d),
				v = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(p.default.events.EDITOR_CHANGE, function(t, e, n, o) {
							t !== p.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== p.default.sources.USER ? r.transform(e) : r.record(e, n))
						}), r.quill.keyboard.addBinding({
							key: "Z",
							shortKey: !0
						}, r.undo.bind(r)), r.quill.keyboard.addBinding({
							key: "Z",
							shortKey: !0,
							shiftKey: !0
						}, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
							key: "Y",
							shortKey: !0
						}, r.redo.bind(r)), r
					}
					return l(e, t), u(e, [{
						key: "change",
						value: function(t, e) {
							if (0 !== this.stack[t].length) {
								var n = this.stack[t].pop();
								this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], p.default.sources.USER), this.ignoreChange = !1;
								var r = s(n[t]);
								this.quill.setSelection(r)
							}
						}
					}, {
						key: "clear",
						value: function() {
							this.stack = {
								undo: [],
								redo: []
							}
						}
					}, {
						key: "cutoff",
						value: function() {
							this.lastRecorded = 0
						}
					}, {
						key: "record",
						value: function(t, e) {
							if (0 !== t.ops.length) {
								this.stack.redo = [];
								var n = this.quill.getContents().diff(e),
									r = Date.now();
								if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
									var o = this.stack.undo.pop();
									n = n.compose(o.undo), t = o.redo.compose(t)
								} else
									this.lastRecorded = r;
								this.stack.undo.push({
									redo: t,
									undo: n
								}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
							}
						}
					}, {
						key: "redo",
						value: function() {
							this.change("redo", "undo")
						}
					}, {
						key: "transform",
						value: function(t) {
							this.stack.undo.forEach(function(e) {
								e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
							}), this.stack.redo.forEach(function(e) {
								e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
							})
						}
					}, {
						key: "undo",
						value: function() {
							this.change("undo", "redo")
						}
					}]), e
				}
				(y.default);
			v.DEFAULTS = {
				delay: 1e3,
				maxStack: 100,
				userOnly: !1
			}, e.default = v, e.getLastChangeIndex = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.IndentClass = void 0;
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(0),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "add",
						value: function(t, n) {
							if ("+1" === n || "-1" === n) {
								var r = this.value(t) || 0;
								n = "+1" === n ? r + 1 : r - 1
							}
							return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
						}
					}, {
						key: "canAdd",
						value: function(t, n) {
							return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n))
						}
					}, {
						key: "value",
						value: function(t) {
							return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
						}
					}]), e
				}
				(u.default.Attributor.Class),
				f = new c("indent", "ql-indent", {
					scope: u.default.Scope.BLOCK,
					whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
				});
			e.IndentClass = f
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = n(3),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(l),
				s = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), e
				}
				(a.default);
			s.blotName = "blockquote", s.tagName = "blockquote", e.default = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = n(3),
				s = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(a),
				u = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, null, [{
						key: "formats",
						value: function(t) {
							return this.tagName.indexOf(t.tagName) + 1
						}
					}]), e
				}
				(s.default);
			u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = u
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.ListItem = void 0;
			var s = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				u = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				c = n(0),
				f = r(c),
				h = n(3),
				p = r(h),
				d = n(23),
				y = r(d),
				v = function(t) {
					function e() {
						return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return a(e, t), s(e, [{
						key: "format",
						value: function(t, n) {
							t !== b.blotName || n ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(f.default.create(this.statics.scope))
						}
					}, {
						key: "remove",
						value: function() {
							null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
						}
					}, {
						key: "replaceWith",
						value: function(t, n) {
							return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
						}
					}], [{
						key: "formats",
						value: function(t) {
							return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
						}
					}]), e
				}
				(p.default);
			v.blotName = "list-item", v.tagName = "LI";
			var b = function(t) {
					function e(t) {
						i(this, e);
						var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
							r = function(e) {
								if (e.target.parentNode === t) {
									var r = n.statics.formats(t),
										o = f.default.find(e.target);
									"checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked")
								}
							};
						return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n
					}
					return a(e, t), s(e, null, [{
						key: "create",
						value: function(t) {
							var n = "ordered" === t ? "OL" : "UL",
								r = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
							return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r
						}
					}, {
						key: "formats",
						value: function(t) {
							return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
						}
					}]), s(e, [{
						key: "format",
						value: function(t, e) {
							this.children.length > 0 && this.children.tail.format(t, e)
						}
					}, {
						key: "formats",
						value: function() {
							return o({}, this.statics.blotName, this.statics.formats(this.domNode))
						}
					}, {
						key: "insertBefore",
						value: function(t, n) {
							if (t instanceof v)
								u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
							else {
								var r = null == n ? this.length() : n.offset(this),
									o = this.split(r);
								o.parent.insertBefore(t, o)
							}
						}
					}, {
						key: "optimize",
						value: function(t) {
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
							var n = this.next;
							null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
						}
					}, {
						key: "replace",
						value: function(t) {
							if (t.statics.blotName !== this.statics.blotName) {
								var n = f.default.create(this.statics.defaultChild);
								t.moveChildren(n), this.appendChild(n)
							}
							u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
						}
					}]), e
				}
				(y.default);
			b.blotName = "list", b.scope = f.default.Scope.BLOCK_BLOT, b.tagName = ["OL", "UL"], b.defaultChild = "list-item", b.allowedChildren = [v], e.ListItem = v, e.default = b
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = n(39),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(l),
				s = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), e
				}
				(a.default);
			s.blotName = "italic", s.tagName = ["EM", "I"], e.default = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(5),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, null, [{
						key: "create",
						value: function(t) {
							return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
						}
					}, {
						key: "formats",
						value: function(t) {
							return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
						}
					}]), e
				}
				(u.default);
			c.blotName = "script", c.tagName = ["SUB", "SUP"], e.default = c
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = n(5),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(l),
				s = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), e
				}
				(a.default);
			s.blotName = "strike", s.tagName = "S", e.default = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = n(5),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(l),
				s = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), e
				}
				(a.default);
			s.blotName = "underline", s.tagName = "U", e.default = s
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(0),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(s),
				c = n(15),
				f = ["alt", "height", "width"],
				h = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "format",
						value: function(t, n) {
							f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
						}
					}], [{
						key: "create",
						value: function(t) {
							var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
							return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n
						}
					}, {
						key: "formats",
						value: function(t) {
							return f.reduce(function(e, n) {
								return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
							}, {})
						}
					}, {
						key: "match",
						value: function(t) {
							return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
						}
					}, {
						key: "sanitize",
						value: function(t) {
							return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
						}
					}, {
						key: "value",
						value: function(t) {
							return t.getAttribute("src")
						}
					}]), e
				}
				(u.default.Embed);
			h.blotName = "image", h.tagName = "IMG", e.default = h
		}, function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var l = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = n(3),
				u = n(15),
				c = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				(u),
				f = ["height", "width"],
				h = function(t) {
					function e() {
						return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return i(e, t), l(e, [{
						key: "format",
						value: function(t, n) {
							f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
						}
					}], [{
						key: "create",
						value: function(t) {
							var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
							return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n
						}
					}, {
						key: "formats",
						value: function(t) {
							return f.reduce(function(e, n) {
								return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
							}, {})
						}
					}, {
						key: "sanitize",
						value: function(t) {
							return c.default.sanitize(t)
						}
					}, {
						key: "value",
						value: function(t) {
							return t.getAttribute("src")
						}
					}]), e
				}
				(s.BlockEmbed);
			h.blotName = "video", h.className = "ql-video", h.tagName = "IFRAME", e.default = h
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.FormulaBlot = void 0;
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(33),
				c = r(u),
				f = n(6),
				h = r(f),
				p = n(7),
				d = r(p),
				y = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), a(e, null, [{
						key: "create",
						value: function(t) {
							var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
							return "string" == typeof t && (window.katex.render(t, n, {
								throwOnError: !1,
								errorColor: "#f00"
							}), n.setAttribute("data-value", t)), n
						}
					}, {
						key: "value",
						value: function(t) {
							return t.getAttribute("data-value")
						}
					}]), e
				}
				(c.default);
			y.blotName = "formula", y.className = "ql-formula", y.tagName = "SPAN";
			var v = function(t) {
					function e() {
						o(this, e);
						var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						if (null == window.katex)
							throw new Error("Formula module requires KaTeX.");
						return t
					}
					return l(e, t), a(e, null, [{
						key: "register",
						value: function() {
							h.default.register(y, !0)
						}
					}]), e
				}
				(d.default);
			e.FormulaBlot = y, e.default = v
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.CodeToken = e.CodeBlock = void 0;
			var a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = n(0),
				c = r(u),
				f = n(6),
				h = r(f),
				p = n(7),
				d = r(p),
				y = n(13),
				v = r(y),
				b = function(t) {
					function e() {
						return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
					}
					return l(e, t), a(e, [{
						key: "replaceWith",
						value: function(t) {
							this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
						}
					}, {
						key: "highlight",
						value: function(t) {
							var e = this.domNode.textContent;
							this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
						}
					}]), e
				}
				(v.default);
			b.className = "ql-syntax";
			var g = new c.default.Attributor.Class("token", "hljs", {
					scope: c.default.Scope.INLINE
				}),
				m = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						if ("function" != typeof r.options.highlight)
							throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
						var l = null;
						return r.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
							clearTimeout(l), l = setTimeout(function() {
								r.highlight(), l = null
							}, r.options.interval)
						}), r.highlight(), r
					}
					return l(e, t), a(e, null, [{
						key: "register",
						value: function() {
							h.default.register(g, !0), h.default.register(b, !0)
						}
					}]), a(e, [{
						key: "highlight",
						value: function() {
							var t = this;
							if (!this.quill.selection.composing) {
								this.quill.update(h.default.sources.USER);
								var e = this.quill.getSelection();
								this.quill.scroll.descendants(b).forEach(function(e) {
									e.highlight(t.options.highlight)
								}), this.quill.update(h.default.sources.SILENT), null != e && this.quill.setSelection(e, h.default.sources.SILENT)
							}
						}
					}]), e
				}
				(d.default);
			m.DEFAULTS = {
				highlight: function() {
						return null == window.hljs ? null : function(t) {
							return window.hljs.highlightAuto(t).value
						}
					}
					(),
				interval: 1e3
			}, e.CodeBlock = b, e.CodeToken = g, e.default = m
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function s(t, e, n) {
				var r = document.createElement("button");
				r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r)
			}

			function u(t, e) {
				Array.isArray(e[0]) || (e = [e]), e.forEach(function(e) {
					var n = document.createElement("span");
					n.classList.add("ql-formats"), e.forEach(function(t) {
						if ("string" == typeof t)
							s(n, t);
						else {
							var e = Object.keys(t)[0],
								r = t[e];
							Array.isArray(r) ? c(n, e, r) : s(n, e, r)
						}
					}), t.appendChild(n)
				})
			}

			function c(t, e, n) {
				var r = document.createElement("select");
				r.classList.add("ql-" + e), n.forEach(function(t) {
					var e = document.createElement("option");
					!1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e)
				}), t.appendChild(r)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.addControls = e.default = void 0;
			var f = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				h = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				p = n(4),
				d = r(p),
				y = n(0),
				v = r(y),
				b = n(6),
				g = r(b),
				m = n(10),
				_ = r(m),
				O = n(7),
				w = r(O),
				x = (0, _.default)("quill:toolbar"),
				k = function(t) {
					function e(t, n) {
						i(this, e);
						var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						if (Array.isArray(r.options.container)) {
							var o = document.createElement("div");
							u(o, r.options.container), t.container.parentNode.insertBefore(o, t.container), r.container = o
						} else "string" == typeof r.options.container ? r.container = document.querySelector(r.options.container) : r.container = r.options.container;
						if (!(r.container instanceof HTMLElement)) {
							var a;
							return a = x.error("Container required for toolbar", r.options), l(r, a)
						}
						return r.container.classList.add("ql-toolbar"), r.controls = [], r.handlers = {}, Object.keys(r.options.handlers).forEach(function(t) {
							r.addHandler(t, r.options.handlers[t])
						}), [].forEach.call(r.container.querySelectorAll("button, select"), function(t) {
							r.attach(t)
						}), r.quill.on(g.default.events.EDITOR_CHANGE, function(t, e) {
							t === g.default.events.SELECTION_CHANGE && r.update(e)
						}), r.quill.on(g.default.events.SCROLL_OPTIMIZE, function() {
							var t = r.quill.selection.getRange(),
								e = f(t, 1),
								n = e[0];
							r.update(n)
						}), r
					}
					return a(e, t), h(e, [{
						key: "addHandler",
						value: function(t, e) {
							this.handlers[t] = e
						}
					}, {
						key: "attach",
						value: function(t) {
							var e = this,
								n = [].find.call(t.classList, function(t) {
									return 0 === t.indexOf("ql-")
								});
							if (n) {
								if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
									if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n])
										return void x.warn("ignoring attaching to disabled format", n, t);
									if (null == v.default.query(n))
										return void x.warn("ignoring attaching to nonexistent format", n, t)
								}
								var r = "SELECT" === t.tagName ? "change" : "click";
								t.addEventListener(r, function(r) {
									var i = void 0;
									if ("SELECT" === t.tagName) {
										if (t.selectedIndex < 0)
											return;
										var l = t.options[t.selectedIndex];
										i = !l.hasAttribute("selected") && (l.value || !1)
									} else
										i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();
									e.quill.focus();
									var a = e.quill.selection.getRange(),
										s = f(a, 1),
										u = s[0];
									if (null != e.handlers[n])
										e.handlers[n].call(e, i);
									else if (v.default.query(n).prototype instanceof v.default.Embed) {
										if (!(i = prompt("Enter " + n)))
											return;
										e.quill.updateContents((new d.default).retain(u.index).delete(u.length).insert(o({}, n, i)), g.default.sources.USER)
									} else
										e.quill.format(n, i, g.default.sources.USER);
									e.update(u)
								}), this.controls.push([n, t])
							}
						}
					}, {
						key: "update",
						value: function(t) {
							var e = null == t ? {} : this.quill.getFormat(t);
							this.controls.forEach(function(n) {
								var r = f(n, 2),
									o = r[0],
									i = r[1];
								if ("SELECT" === i.tagName) {
									var l = void 0;
									if (null == t)
										l = null;
									else if (null == e[o])
										l = i.querySelector("option[selected]");
									else if (!Array.isArray(e[o])) {
										var a = e[o];
										"string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' + a + '"]')
									}
									null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0
								} else if (null == t)
									i.classList.remove("ql-active");
								else if (i.hasAttribute("value")) {
									var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");
									i.classList.toggle("ql-active", s)
								} else
									i.classList.toggle("ql-active", null != e[o])
							})
						}
					}]), e
				}
				(w.default);
			k.DEFAULTS = {}, k.DEFAULTS = {
				container: null,
				handlers: {
					clean: function() {
						var t = this,
							e = this.quill.getSelection();
						if (null != e)
							if (0 == e.length) {
								var n = this.quill.getFormat();
								Object.keys(n).forEach(function(e) {
									null != v.default.query(e, v.default.Scope.INLINE) && t.quill.format(e, !1)
								})
							} else
								this.quill.removeFormat(e, g.default.sources.USER)
					},
					direction: function(t) {
						var e = this.quill.getFormat().align;
						"rtl" === t && null == e ? this.quill.format("align", "right", g.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, g.default.sources.USER), this.quill.format("direction", t, g.default.sources.USER)
					},
					indent: function(t) {
						var e = this.quill.getSelection(),
							n = this.quill.getFormat(e),
							r = parseInt(n.indent || 0);
						if ("+1" === t || "-1" === t) {
							var o = "+1" === t ? 1 : -1;
							"rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, g.default.sources.USER)
						}
					},
					link: function(t) {
						!0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, g.default.sources.USER)
					},
					list: function(t) {
						var e = this.quill.getSelection(),
							n = this.quill.getFormat(e);
						"check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, g.default.sources.USER) : this.quill.format("list", "unchecked", g.default.sources.USER) : this.quill.format("list", t, g.default.sources.USER)
					}
				}
			}, e.default = k, e.addControls = u
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
		}, function(t, e) {
			t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
		}, function(t, e) {
			t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = e.BubbleTooltip = void 0;
			var a = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				s = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				u = n(2),
				c = r(u),
				f = n(9),
				h = r(f),
				p = n(44),
				d = r(p),
				y = n(22),
				v = n(26),
				b = r(v),
				g = [
					["bold", "italic", "link"],
					[{
						header: 1
					}, {
						header: 2
					}, "blockquote"]
				],
				m = function(t) {
					function e(t, n) {
						o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = g);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.quill.container.classList.add("ql-bubble"), r
					}
					return l(e, t), s(e, [{
						key: "extendToolbar",
						value: function(t) {
							this.tooltip = new _(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), b.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), b.default)
						}
					}]), e
				}
				(d.default);
			m.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							link: function(t) {
								t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
							}
						}
					}
				}
			});
			var _ = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.quill.on(h.default.events.EDITOR_CHANGE, function(t, e, n, o) {
							if (t === h.default.events.SELECTION_CHANGE)
								if (null != e && e.length > 0 && o === h.default.sources.USER) {
									r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
									var i = r.quill.getLines(e.index, e.length);
									if (1 === i.length)
										r.position(r.quill.getBounds(e));
									else {
										var l = i[i.length - 1],
											a = r.quill.getIndex(l),
											s = Math.min(l.length() - 1, e.index + e.length - a),
											u = r.quill.getBounds(new y.Range(a, s));
										r.position(u)
									}
								} else
									document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
						}), r
					}
					return l(e, t), s(e, [{
						key: "listen",
						value: function() {
							var t = this;
							a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
								t.root.classList.remove("ql-editing")
							}), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
								setTimeout(function() {
									if (!t.root.classList.contains("ql-hidden")) {
										var e = t.quill.getSelection();
										null != e && t.position(t.quill.getBounds(e))
									}
								}, 1)
							})
						}
					}, {
						key: "cancel",
						value: function() {
							this.show()
						}
					}, {
						key: "position",
						value: function(t) {
							var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
								r = this.root.querySelector(".ql-tooltip-arrow");
							if (r.style.marginLeft = "", 0 === n)
								return n;
							r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
						}
					}]), e
				}
				(p.BaseTooltip);
			_.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = _, e.default = m
		}, function(t, e, n) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function o(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if (!t)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						var n = [],
							r = !0,
							o = !1,
							i = void 0;
						try {
							for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
						} catch (t) {
							o = !0, i = t
						} finally {
							try {
								!r && a.return && a.return()
							} finally {
								if (o)
									throw i
							}
						}
						return n
					}
					return function(e, n) {
						if (Array.isArray(e))
							return e;
						if (Symbol.iterator in Object(e))
							return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}
				(),
				s = function t(e, n, r) {
					null === e && (e = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(e, n);
					if (void 0 === o) {
						var i = Object.getPrototypeOf(e);
						return null === i ? void 0 : t(i, n, r)
					}
					if ("value" in o)
						return o.value;
					var l = o.get;
					if (void 0 !== l)
						return l.call(r)
				},
				u = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}
				(),
				c = n(2),
				f = r(c),
				h = n(9),
				p = r(h),
				d = n(44),
				y = r(d),
				v = n(15),
				b = r(v),
				g = n(22),
				m = n(26),
				_ = r(m),
				O = [
					["bold", "italic", "underline"],
					[{
						list: "ordered"
					}, {
						list: "bullet"
					}],
					["clean"]
				],
				w = function(t) {
					function e(t, n) {
						o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = O);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.quill.container.classList.add("ql-snow"), r
					}
					return l(e, t), u(e, [{
						key: "extendToolbar",
						value: function(t) {
							t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), _.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), _.default), this.tooltip = new x(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
								key: "K",
								shortKey: !0
							}, function(e, n) {
								t.handlers.link.call(t, !n.format.link)
							})
						}
					}]), e
				}
				(y.default);
			w.DEFAULTS = (0, f.default)(!0, {}, y.default.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							link: function(t) {
								if (t) {
									var e = this.quill.getSelection();
									if (null == e || 0 == e.length)
										return;
									var n = this.quill.getText(e);
									/^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);
									this.quill.theme.tooltip.edit("link", n)
								} else
									this.quill.format("link", !1)
							}
						}
					}
				}
			});
			var x = function(t) {
					function e(t, n) {
						o(this, e);
						var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
						return r.preview = r.root.querySelector("a.ql-preview"), r
					}
					return l(e, t), u(e, [{
						key: "listen",
						value: function() {
							var t = this;
							s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e) {
								t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
							}), this.root.querySelector("a.ql-remove").addEventListener("click", function(e) {
								if (null != t.linkRange) {
									var n = t.linkRange;
									t.restoreFocus(), t.quill.formatText(n, "link", !1, p.default.sources.USER), delete t.linkRange
								}
								e.preventDefault(), t.hide()
							}), this.quill.on(p.default.events.SELECTION_CHANGE, function(e, n, r) {
								if (null != e) {
									if (0 === e.length && r === p.default.sources.USER) {
										var o = t.quill.scroll.descendant(b.default, e.index),
											i = a(o, 2),
											l = i[0],
											s = i[1];
										if (null != l) {
											t.linkRange = new g.Range(e.index - s, l.length());
											var u = b.default.formats(l.domNode);
											return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(t.quill.getBounds(t.linkRange))
										}
									} else
										delete t.linkRange;
									t.hide()
								}
							})
						}
					}, {
						key: "show",
						value: function() {
							s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
						}
					}]), e
				}
				(d.BaseTooltip);
			x.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = w
		}]).default
});
/*my-profile.js*/

$(document).ready(function() {
	$(".input-searchautocomplete").keyup(function() {
		var text = $.trim($(this).val())
		if (text != "") {
			$(this).parent().find('.cleartext').addClass('show')
		} else {
			$(this).parent().find('.cleartext').removeClass('show')
		}
	});
	$('.cleartext').click(function() {
		$(this).parent().find('.input-searchautocomplete').val('');
		$(this).removeClass('show')
	});
	$(".save-job").each(function() {
		$(this).on("click", function() {
			if ($(this).hasClass('saved')) {
				$.fancybox.open($(".remove-modal"));
				$(this).removeClass("saved");
				$(this).find(".text").text("Save");
			} else {
				$.fancybox.open($(".success-modal"));
				$(this).addClass("saved");
				$(this).find(".text").text("Saved job");
			}
		});
	});
	$('.widget-5 .widget-body .title h4').on('click', function() {
		$.fancybox.open($(".salary-calculator-modal"));
	})
	$('.dash-board-wrap .widget-4 .widget-body .button-upload a').on('click', function() {
		$.fancybox.open($(".create-new-resume"));
	})
	$('.dash-board-wrap .widget-2 .widget-body .edit-profile .btn-created-now').on('click', function() {
		$.fancybox.open($(".created-now-modal"));
	})
	$('.salary-calculator-modal .modal-body .form-group.form-button .button-group .btn-cancel').on('click', function() {
		$.fancybox.close();
	})
	$(".btn-close-modal").on("click", function() {
		$.fancybox.close();
	});
	$('.main-menu .list-button .hidden-info').on('click', function() {
		$.fancybox.open($(".hidden-edit-modal"), {
			clickOutside: 'close',
			clickSlide: 'zoom',
		});
	})
	$(".share-profile").on('click', function(e) {
		e.preventDefault();
		$.fancybox.open($(".share-profile-modal"), {});
	});
	$(".share-profile-modal .link-edit").on('click', function(e) {
		e.preventDefault();
		$.fancybox.open($(".change-link-modal"), {});
	});
	var popupSearchable1 = function() {
		var check = $("#Searchable1:checked").length
		if (check == 1) {
			$.fancybox.open($(".success-modal"));
		} else {
			$.fancybox.open($(".remove-modal"))
		}
	}
	var popupjobalerts2 = function() {
		var check = $("#job-alerts2:checked").length
		if (check == 1) {
			$.fancybox.open($(".success-modal"));
		} else {
			$.fancybox.open($(".remove-modal"))
		}
	}
	$("#job-alerts2").on("click", popupjobalerts2)
	$('#upload-image').on('click', function() {
		$('#fileUpload').trigger('click');
	});
});

function cropImage() {
	let result = document.querySelector('.result'),
		img_result = document.querySelector('.img-result'),
		img_w = document.querySelector('.img-w'),
		img_h = document.querySelector('.img-h'),
		options = document.querySelector('.options'),
		save = document.querySelector('.save-img'),
		cropped = document.querySelector('.cropped'),
		dwn = document.querySelector('.download'),
		upload = document.querySelector('#fileUpload'),
		cropper = '';
	upload.addEventListener('change', (e) => {
		if (e.target.files.length) {
			$.fancybox.open($(".crop-image-modal"))
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target.result) {
					let img = document.createElement('img');
					img.id = 'image';
					img.src = e.target.result
					result.innerHTML = '';
					result.appendChild(img);
					result.classList.add('show');
					save.classList.remove('hidden');
					options.classList.remove('hidden');
					cropper = new Cropper(img);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	});
	save.addEventListener('click', (e) => {
		e.preventDefault();
		let imgSrc = cropper.getCroppedCanvas({
			width: img_w.value,
			height: img_h.value
		}).toDataURL();
		cropped.classList.remove('hidden');
		img_result.classList.remove('hidden');
		cropped.src = imgSrc;
		dwn.classList.remove('hidden');
		dwn.download = 'imagename.png';
		dwn.setAttribute('href', imgSrc);
		$.fancybox.close();
	});
}

function widget15Toggle() {
	$('#widget-15 .sticker .list-sticker .item .head-sticker').on('click', function() {
		if ($(this).next().is(':hidden') === true) {
			$('#widget-15 .sticker .list-sticker .item .body-sticker').slideUp('fast')
			$('#widget-15 .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideDown('fast')
			$(this).addClass('active')
		} else {
			$('#widget-15 .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideUp('fast')
		}
	})
}

function widget16Toggle() {
	$('.widget-16 .sticker .list-sticker .item .head-sticker').on('click', function() {
		if ($(this).next().is(':hidden') === true) {
			$('.widget-16 .sticker .list-sticker .item .body-sticker').slideUp('fast')
			$('.widget-16 .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideDown('fast')
			$(this).addClass('active')
		} else {
			$('.widget-16 .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideUp('fast')
		}
	})
}

function widgetActivityToggle() {
	$('#other-activity-section .sticker .list-sticker .item .head-sticker').on('click', function() {
		if ($(this).next().is(':hidden') === true) {
			$('#other-activity-section .sticker .list-sticker .item .body-sticker').slideUp('fast')
			$('#other-activity-section .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideDown('fast')
			$(this).addClass('active')
		} else {
			$('#other-activity-section .sticker .list-sticker .item .head-sticker').removeClass('active')
			$(this).next().slideUp('fast')
		}
	})
}

function checkWidgetScroll() {
	var scrollTop = $(window).scrollTop(),
		header = $('header').outerHeight(),
		offset = $('.menu-shortchut').offset().top
	if (((offset - header) - scrollTop) <= 0) {
		$('.menu-shortchut').addClass('active').css({
			"top": (header + 20) + "px"
		})
	}
}
$(window).scroll(function() {
	checkWidgetScroll()
	var scrollDistance = $(window).scrollTop();
	$(".main-widget .widget").each(function(i) {
		if ($(this).position().top - $("header").outerHeight() - 1 <= scrollDistance) {
			$(".db-my-profile .list-shortchut li.active").removeClass("active").find('a').removeClass("active")
			$(".db-my-profile .list-shortchut li").eq(i).addClass("active").find('a').addClass("active");
		}
	});
}).scroll();
$(document).ready(function() {
	$(".btn-close-modal").on("click", function() {
		$.fancybox.close();
	});
	$('.back-drop').on('click', function() {
		$('.edit-db-career-goals').removeClass('active')
		$('.edit-db-outstanding-achievements').removeClass('active')
	})
	$('.db-my-profile .menu-shortchut .list-shortchut li a').on('click', function(event) {
		event.preventDefault();
		$('.db-my-profile .menu-shortchut .list-shortchut li a').removeClass('active')
		$(this).addClass('active')
		$("html, body").animate({
			scrollTop: $($(this).data("href")).offset().top - $('header').height() - 40
		}, 1000)
	});
	if (window.location.hash) {
		var hash = window.location.hash;
		$('.db-my-profile .menu-shortchut .list-shortchut li a[data-href="' + hash + '"]').trigger('click');
	};
	$('.db-my-profile .menu-shortchut .toggle-menu').on('click', function() {
		$('.db-my-profile .menu-shortchut .list-shortchut').slideToggle()
	});
	$(".edit-db-infor select.select-nation").change(function() {
		var selectedNation = $(this).children("option:selected").val();
		if (selectedNation != 1) {
			$(".edit-db-infor select.select-district").addClass('disabled').attr('disabled', 'disabled')
		} else {
			$(".edit-db-infor select.select-district").removeClass('disabled').removeAttr('disabled')
		}
	});
	$(".chosen-select-max-one").chosen({
		max_selected_options: 1
	});
	$(".chosen-select-max-three").chosen({
		max_selected_options: 3
	}).change(function() {
		if ($(this).val().length > 0 && $(".err_" + $(this).attr('id')).length) {
			$(".err_" + $(this).attr('id')).html('');
		}
	});
	$(".form-select-district select").change(function() {
		var selectDistrict = $(this).children("option:selected").val();
		if (selectDistrict == 0) {
			$('.form-select-district select').addClass('chosen-select-max-one').removeClass('chosen-select-max-three')
			setTimeout(function() {
				$(".chosen-select-max-one").chosen({
					max_selected_options: 1
				})
			}, 10)
		} else {
			$('.form-select-district select').removeClass('chosen-select-max-one').addClass('chosen-select-max-three')
		}
	});
	var wg14Height = $('.widget-14 .widget-body .content').height()
	if (wg14Height <= 65) {
		$('.widget-14 .widget-body .list-action .view-more').addClass('hidden')
		$('.widget-14 .widget-body .list-action .delete').addClass('no-bf')
	} else {
		$('.widget-14 .widget-body .list-action .view-more').removeClass('hidden')
		$('.widget-14 .widget-body .list-action .delete').removeClass('no-bf')
	}
	var optionSalaryVND = {
		'decimalPlaces': 0,
		'digitGroupSeparator': ',',
		'decimalCharacter': '.'
	};
	var optionSalaryUSD = {
		'decimalPlaces': 0,
		'digitGroupSeparator': '.',
		'decimalCharacter': ','
	};
	if ($('#salary_unit option:selected').val() == 'usd' || $('#salary_unit option:selected').val() == 'vnd') {
		$("#salary_to").prop('disabled', false);
		$("#salary_from").prop('disabled', false);
	}
	if ($("#salary_from").length) {
		if ($('#salary_unit option:selected').val() == 'usd')
			var salary_from = new AutoNumeric('#salary_from', optionSalaryUSD);
		else
			var salary_from = new AutoNumeric('#salary_from', optionSalaryVND);
	}
	if ($("#salary_to").length) {
		if ($('#salary_unit option:selected').val() == 'usd')
			var salary_to = new AutoNumeric('#salary_to', optionSalaryUSD);
		else
			var salary_to = new AutoNumeric('#salary_to', optionSalaryVND);
	}
	$('#salary_unit').on('change', function() {
		$('#salary_from').val('');
		$('#salary_to').val('');
		if ($(this).prop('value') == 'ltt') {
			$('#salary_from').prop('disabled', true);
			$('#salary_to').prop('disabled', true);
		} else {
			$('#salary_from').prop('disabled', false);
			$('#salary_to').prop('disabled', false);
			if ($(this).prop('value') == 'vnd') {
				salary_from.set('', optionSalaryVND);
				salary_to.set('', optionSalaryVND);
			} else {
				salary_from.set('', optionSalaryUSD);
				salary_to.set('', optionSalaryUSD);
			}
		}
	});
	$("#yearOfExperience").ForceNumericOnly();
})
$(".share-profile").on('click', function(e) {
	e.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'sharecb/link',
		type: 'ajax'
	});
});
$('#not_experence').on('click', function() {
	if ($(this).is(':checked')) {
		$("#yearOfExperience").val(0).prop('disabled', true);
	} else {
		$("#yearOfExperience").val(1).prop('disabled', false);
	}
});

function editFrmExperience() {
	$.fancybox.open($(".edit-db-work-experience-1"), {
		clickOutside: 'close',
		clickSlide: 'zoom',
	});
}

function saveFrmExperience() {
	$.validator.addMethod("required_year_experience", function(value, element) {
		var str = $('#yearOfExperience').val();
		if (!str && !$('#not_experence').is(":checked"))
			return false;
		return true;
	}, language.job_createresume_input_year_experience);
	if ($("#frm_Experience").validate({
			ignore: ":disabled",
			onfocusout: false,
			rules: {
				yearOfExperience: {
					number: true,
					min: 1,
					required_year_experience: true
				},
				not_experence: {
					required_year_experience: true
				}
			},
			errorPlacement: function(error, element) {
				$('.err_yearOfExperience').html(error.html()).show();
			},
			success: function(element) {
				$('.err_yearOfExperience').html('');
				$('.err_yearOfExperience').hide();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == true) {
		$.ajax({
			type: "POST",
			url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-yearofexperience',
			dataType: 'JSON',
			data: {
				'yearOfExperience': $('#yearOfExperience').val(),
				'not_experence': $('#not_experence').val(),
				'levelcurrent_id': $('#levelcurrent_id').val(),
				'csrf_token': $('#csrf_token').val()
			},
			success: function(data) {
				$("#csrf_token").val(data.csrf_token);
				if (data.csrf_token_error) {
					show_noti(2, data.csrf_token_error);
					return false;
				} else {
					loadExperience(numListExp);
					if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
				}
			}
		});
		$.fancybox.close();
	}
}

function loadExperience(num) {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-experience',
		data: {
			'num': num
		},
		dataType: 'JSON',
		success: function(data) {
			$('#complete_section').html(data.COMPLETE_SECTION);
			$("#widget-15").html(data.EXPERIENCE_SECTION);
		}
	});
}

function saveConfResume() {
	var arrConfident = $('#frmConfident').serializeArray()
	arrConfident.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/saveconfiresume',
		data: arrConfident,
		dataType: 'JSON',
		success: function(data) {
			$.fancybox.close('all');
		}
	});
}

function editResumeObjective() {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-objective',
		type: 'ajax',
		opts: {
			modal: true,
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeObjective() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-objective',
		dataType: 'JSON',
		success: function(data) {
			$("#widget-14").html(data.OBJECTIVE_SECTION);
			$('#complete_section').html(data.COMPLETE_SECTION);
		}
	});
}

function editDesiredJob() {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-desired-job',
		'type': 'ajax',
		'opts': {
			'clickOutside': 'close',
			'clickSlide': 'zoom',
			'afterShow': function() {
				loadAllChoosen();
			}
		}
	});
}

function editResumeAdditioninfo() {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-additioninfo',
		type: 'ajax',
		opts: {
			modal: true,
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeAdditioninfo() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-additioninfo',
		dataType: 'JSON',
		success: function(data) {
			if (data.COMPLETE_SECTION) {
				$('#complete_section').html(data.COMPLETE_SECTION);
			}
			if (data.AWARD_SECTION) {
				$('#widget-19').html(data.AWARD_SECTION);
			}
		}
	});
}

function loadInfoDesiredJob() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-info-desiredjob',
		dataType: 'JSON',
		success: function(data) {
			$("#widget-18").html(data.DESIRED_SECTION);
			$('#complete_section').html(data.COMPLETE_SECTION);
		}
	});
}

function show_frmExperience(exp_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-experience?' + 'exp_id=' + exp_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function show_frmEducation(edu_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-education?' + 'edu_id=' + edu_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function show_frmSkill(skill_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-skill?' + 'skill_id=' + skill_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function show_frmRefer(rref_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-refer?' + 'rref_id=' + rref_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadEducation(num) {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-education',
		dataType: 'JSON',
		data: {
			'num': num
		},
		success: function(data) {
			if (data.COMPLETE_SECTION) {
				$('#complete_section').html(data.COMPLETE_SECTION);
			}
			if (data.EDUCATION_SECTION)
				$('#widget-16').html(data.EDUCATION_SECTION);
		}
	});
}

function loadSkill(num) {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-skill',
		data: {
			'num': num
		},
		dataType: 'JSON',
		success: function(data) {
			$("#widget-17").html(data.SKILL_SECTION);
			$('#complete_section').html(data.COMPLETE_SECTION);
		}
	});
}

function loadResumeRefer(num) {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-refer',
		dataType: 'JSON',
		data: {
			'num': num
		},
		success: function(data) {
			if (data.REFERENCE_SECTION)
				$("#widget-20").html(data.REFERENCE_SECTION);
			if (data.COMPLETE_SECTION) {
				$('#complete_section').html(data.COMPLETE_SECTION);
			}
		}
	});
}

function deleteAdditioninfo() {
	jConfirm(language.cvhay_message_delete_additioninfo, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_CVHAY + 'update-resume-additioninfo',
				dataType: 'JSON',
				data: {
					'additioninfo': ''
				},
				success: function(rs) {
					if (rs > 0) {
						loadResumeAdditioninfo();
						showAdditioninfo($('#additioninfo').val());
						if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
					} else {
						jAlert(language.js_resume_action_not_success, language.message_common);
					}
					$.fancybox.close();
				}
			});
		}
	});
}

function deleteResumeObject() {
	jConfirm(language.cvhay_message_delete_resume_object, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-objective',
				dataType: 'JSON',
				data: {
					'objective_job': '',
					'csrf_token': $('#csrf_token').val()
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						return false;
					} else {
						if (data.result > 0) {
							loadResumeObjective();
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.js_resume_action_not_success);
						}
						$.fancybox.close();
					}
				}
			});
		}
	});
}

function deleteResumeAdditionInfo() {
	jConfirm(language.cvhay_message_delete_resume_additioninfo, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-additioninfo',
				dataType: 'JSON',
				data: {
					'additioninfo': '',
					'csrf_token': $('#csrf_token').val()
				},
				success: function(data) {
					$("#csrf_token").val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						return false;
					} else {
						if (data.result > 0) {
							loadResumeAdditioninfo();
							$("#content").html('');
							if ($.isFunction(window.smartech)) {
								smartech('dispatch', 'bt_update_profile', {});
							}
						} else {
							show_noti(2, language.js_resume_action_not_success);
						}
					}
				}
			});
		}
	});
}

function deleteRefer(refer_id) {
	jConfirm(language.cvhay_message_delete_refer, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/delete-refer',
				dataType: 'JSON',
				data: {
					'refer_id': refer_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				beforeSend: function() {
					$('#referList_' + refer_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						$('#referList_' + edu_id).animate({
							opacity: 1
						}, "slow");
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							numListRefer--;
							$('#referList_' + refer_id).slideUp('slow', function() {
								$('#referList_' + refer_id).remove();
							});
							if (numListRefer <= 2)
								loadResumeRefer(numListRefer);
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function deleteResumeSkill(skill_id) {
	jConfirm(language.cvhay_message_delete_resume_skill, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/delete-skill',
				dataType: 'JSON',
				data: {
					'skill_id': skill_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				beforeSend: function() {
					$('#skillList_' + skill_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						$('#eduList_' + skill_id).animate({
							opacity: 1
						}, "slow");
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							numListSkill--;
							$('#skillList_' + skill_id).slideUp('slow', function() {
								$(this).remove();
							});
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
							loadSkill();
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function deleteEducation(edu_id) {
	jConfirm(language.cvhay_message_delete_edu, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/delete-education',
				dataType: 'JSON',
				data: {
					'edu_id': edu_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				beforeSend: function() {
					$('#eduList_' + edu_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						$('#eduList_' + edu_id).animate({
							opacity: 1
						}, "slow");
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							$('#eduList_' + edu_id).slideUp('slow', function() {
								$('#eduList_' + edu_id).remove();
							});
							numListEdu--;
							if (numListEdu == 0) {
								loadEducation(numListEdu);
							}
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function deleteExperience(exp_id) {
	jConfirm(language.cvhay_message_delete_exp, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/delete-experience',
				dataType: 'JSON',
				data: {
					'exp_id': exp_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				beforeSend: function() {
					$('#expList_' + exp_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						$('#expList_' + exp_id).animate({
							opacity: 1
						}, "slow");
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							$('#expList_' + exp_id).slideUp('slow', function() {
								$('#expList_' + exp_id).remove();
							});
							numListExp--;
							if (numListExp == 0) {
								loadExperience(numListExp);
							}
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function updateResumeExperience(e) {
	$.validator.addMethod('workTimeEnd', function(value, element) {
		var d = new Date();
		var y = d.getFullYear();
		var m = d.getMonth() + 1;
		var yearEnd = parseInt($('select[name="rexp_year_end"]').val());
		var monthEnd = parseInt($('select[name="rexp_month_end"]').val());
		var yearStart = parseInt($('select[name="rexp_year_start"]').val());
		var monthStart = parseInt($('select[name="rexp_month_start"]').val());
		if (!$(element).is(':checked')) {
			if (isNaN(yearEnd))
				yearEnd = 0;
			if (isNaN(monthEnd))
				monthEnd = 0;
			if (yearEnd == 0 || monthEnd == 0)
				return false;
			else if (yearEnd < yearStart || (yearEnd == yearStart && monthEnd <= monthStart))
				return false;
		}
		return true;
	}, "");
	$.validator.addMethod('workTimeValid', function(value, element) {
		var d = new Date();
		var y = d.getFullYear();
		var m = d.getMonth() + 1;
		var yearEnd = parseInt($('select[name="rexp_year_end"]').val());
		var monthEnd = parseInt($('select[name="rexp_month_end"]').val());
		var yearStart = parseInt($('select[name="rexp_year_start"]').val());
		var monthStart = parseInt($('select[name="rexp_month_start"]').val());
		if ((yearEnd == y && monthEnd > m) || (yearStart == y && monthStart > m))
			return false;
		return true;
	}, "");
	$.validator.addMethod("checkExistPhoneEmail", function(value, element) {
		var strObjective = $(element).val();
		if (emailExistsInContent(strObjective) == true || phoneExistsInContent(strObjective) == true)
			return false;
		return true;
	}, language.job_createresume_input_email_phone_exist);

		if ($("#experience-form").validate({
			onfocusout: false,
			groups: {
				workingtime: "rexp_month_start rexp_year_start"
			},
			rules: {
				'rexp_company': {
					required: true
				},
				'rexp_title': {
					required: true
				},
				'rexp_month_start': {
					required: true
				},
				'rexp_year_start': {
					required: true
				},
				'cboExperCurrent': {
					workTimeEnd: true,
					workTimeValid: true
				},
				'rexp_workdesc': {
					required: true,
					maxlength: 4000,
					checkExistPhoneEmail: true
				}
			},
			messages: {
				'rexp_company': {
					required: language.js_plaese_resume_exp_company
				},
				'rexp_title': {
					required: language.js_plaese_resume_exp_position
				},
				'rexp_month_start': {
					required: language.js_plaese_resume_exp_month_start
				},
				'rexp_year_start': {
					required: language.js_plaese_resume_exp_year_start
				},
				'cboExperCurrent': {
					workTimeEnd: language.js_plaese_resume_exp_finish_end,
					workTimeValid: language.js_please_resume_exp_valid
				},
				'rexp_workdesc': {
					required: language.js_resume_exp_des_required,
					maxlength: language.js_create_resume_max_des
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			success: function(element) {
				var errorHide = element[0].htmlFor;
				$('.err_' + errorHide).hide();
				element.remove();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == false)
		
			return true;
			
			

		 
		
		
		
	
}

function checkCompleteEdu(num) {
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/check-complete-education',
		dataType: 'JSON',
		data: {
			'num': num
		},
		success: function(data) {
			if (data.COMPLETE_SECTION) {
				$('#complete_section').html(data.COMPLETE_SECTION);
			}
			if (data.STATUS_SECTION)
				$('#status_section').html(data.STATUS_SECTION);
		}
	});
}

function checkCompleteSkill(num) {
	$.ajax({
		type: "POST",
		url: PATH_CVHAY + 'check-complete-skill',
		dataType: 'JSON',
		data: {
			'num': num
		},
		success: function(data) {
			if (data.COMPLETE_SECTION) {
				$('#complete_section').html(data.COMPLETE_SECTION);
			}
			if (data.STATUS_SECTION)
				$('#status_section').html(data.STATUS_SECTION);
		}
	});
}

function loadDistrict(e) {
	var arr_loc = [];
	var location_id = e.value;
	$(e).data('id');
	var e_district = $(e).data('id');
	str = "";
	var i = 1;
	for (k in districts) {
		if (location_id == districts[k][1]) {
			if (i == 1)
				str += '<option value="-1;' + districts[k][1] + '">All</option>';
			str += '<option value="' + districts[k][0] + ';' + districts[k][1] + '">' + districts[k][2] + '</option>';
			i++;
		}
	}
	$(e_district).find('option').remove();
	$(e_district).append(str);
	$(e_district).chosen("destroy");
	$(e_district).chosen({
		max_selected_options: 3
	}).change(function() {
		var vals = String($(this).val());
		var str = String("-1;");
		if (vals.indexOf(str) != -1) {
			$(this).find("option:selected").each(function() {
				var ops = String($(this).prop('value'));
				if (ops.indexOf(str) == -1) {
					$(this).prop('selected', false);
				}
			});
			$(e_district).trigger("chosen:updated");
		}
	})
	var sel_location = $('select[name="LOCATION_ID[]"]');
	sel_location.each(function() {
		if ($(this) != $(e)) {
			$('option[value="' + location_id + '"]', this).attr('disabled', 'disabled');
		}
	});
	sel_location.children('option').each(function() {
		if ($(this).is(':selected') && $(this).val() != '') {
			arr_loc.push($(this).val());
		}
	});
	sel_location.children('option').each(function() {
		if ($(this).val() != '') {
			if ($.inArray($(this).val(), arr_loc) == -1) {
				$(this).removeAttr('disabled');
			}
		}
	});
	arr_loc = [];
	return false;
}

function updateDesiredJob(e) {
	var sel_location = $('select[name="LOCATION_ID[]"]');
	sel_location.children('option').each(function() {
		if ($(this).is(':selected') && $(this).val() != '') {
			$(this).removeAttr('disabled');
		}
	});
	$.validator.addMethod('check_resume_type', function(value) {
		var checkResumeType_1 = $('#chkResumeType_1:checked').val();
		var checkResumeType_2 = $('#chkResumeType_2:checked').val();
		var checkResumeType_3 = $('#chkResumeType_3:checked').val();
		var checkResumeType_4 = $('#chkResumeType_4:checked').val();
		if (checkResumeType_1 != 1 && checkResumeType_2 != 2 && checkResumeType_3 != 3 && checkResumeType_4 != 4)
			return false;
		else
			return true
	}, "");
	$.validator.addMethod('checkSalary', function(value) {
		var unit_valid = $('#salary_unit option:selected').val();
		if (unit_valid == 'vnd' || unit_valid == 'usd') {
			var salary_from_valid = $('#salary_from').val().replace(/,/g, "").replace(/\./g, "");
			var salary_to_valid = $('#salary_to').val().replace(/,/g, "").replace(/\./g, "");
			if (salary_from_valid == '' && salary_to_valid == '') return false;
			if (parseInt(salary_to_valid) < parseInt(salary_from_valid) && parseInt(salary_to_valid) > 0)
				return false;
			if (isNaN(parseInt(salary_to_valid)))
				salary_to_valid = 0;
			if (isNaN(parseInt(salary_from_valid)))
				salary_from_valid = 0;
			var salary_max = parseInt(salary_to_valid) > parseInt(salary_from_valid) ? salary_to_valid : salary_from_valid;
			var salary_min = parseInt(salary_from_valid) > 0 ? salary_from_valid : salary_to_valid;
			if (unit_valid == 'usd' && parseInt(salary_max) >= 100000) return false;
			if (unit_valid == 'usd' && parseInt(salary_min) < 25) return false;
			if (unit_valid == 'vnd' && parseInt(salary_min) < 500000) return false;
			if (unit_valid == 'vnd' && parseInt(salary_max) >= 999000000) return false;
		}
		return true;
	}, "");
	if ($("#desired-form").validate({
			onfocusout: false,
			rules: {
				level_id: {
					required: true
				},
				"INDUSTRY_ID[]": {
					required: true
				},
				'LOCATION_ID[]': {
					required: true
				},
				salary_unit: {
					checkSalary: true
				},
				chkResumeType_1: {
					check_resume_type: true
				}
			},
			errorPlacement: function(error, element) {
				if (element.attr("name") == "LOCATION_ID[]") {
					var errorSelector = '.err_' + element.attr('name');
					errorSelector = errorSelector.replace("[]", "");
					if ($("#select_location_id_3 option:disabled").length > 1) {
						$(errorSelector).html('');
					} else {
						$(errorSelector).html(error.html()).show();
					}
				} else {
					var errorSelector = '.err_' + element.attr('name');
					errorSelector = errorSelector.replace("[]", "");
					$(errorSelector).html(error.html()).show();
				}
			},
			success: function(element) {
				var errorHide = element[0].htmlFor;
				errorHide = errorHide.replace("[]", "");
				$('.err_' + errorHide).hide();
				element.remove();
			},
			messages: {
				level_id: {
					required: language.js_resume_level_required
				},
				'INDUSTRY_ID[]': {
					required: language.js_resume_industry_required
				},
				salary_unit: {
					checkSalary: language.LANG_ERROR_RESUME_SALARY_FROM_TO
				},
				'LOCATION_ID[]': {
					required: language.js_resume_location_required
				},
				chkResumeType_1: {
					check_resume_type: language.js_resume_workingtype_select
				}
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == false) return false;
	$(e).attr('disabled', 'disabled');
	var arrDesiredForm = $('#desired-form').serializeArray()
	arrDesiredForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-desired-job',
		dataType: 'JSON',
		data: arrDesiredForm,
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
				return false;
			} else {
				if (data.result > 0) {
					loadInfoDesiredJob();
				} else {
					show_noti(2, language.js_resume_action_not_success);
				}
				$.fancybox.close();
				if ($.isFunction(window.smartech)) {
					smartech('dispatch', 'bt_update_profile', {});
				}
			}
		}
	});
}

function saveEduLevel() {
	$('.widget-16 .widget-body .experience table .highest-degree').removeClass('active');
	var arrDegreeForm = $('#resume-degree-form').serializeArray()
	arrDegreeForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-language',
		data: arrDegreeForm,
		dataType: 'JSON',
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
			}
			$(".widget-16 .widget-body .link-highest-degree a").removeClass("active");
			if ($('#degree option:selected').val() >= 0 && $('#degree option:selected').val() != '')
				$('#cbprofile_degree_name').html($('#degree option:selected').text());
			else
				$('#cbprofile_degree_name').html(language.cbprofile_updating)
			loadEducation();
			if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
		}
	});
}

function deleteResumeLanguage(lang, level_lang) {
	lang = $.trim(lang);
	$("#rs_language_old").val('');
	$('#lstResumeLanguage_' + lang).hide();
	$("#rs_language option[value='" + lang + "']").prop('selected', 'selected');
	$("#rs_language_level option[value='0']").prop('selected', 'selected');
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-language',
		data: $('#resume-language-form').serialize(),
		dataType: 'JSON',
		success: function(data) {
			$('#lstResumeLanguage_' + lang).remove();
			var num = $('#lstResumeLanguage').find('li').length;
			if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
		}
	});
}

function addResumeLanguage() {
	var lang_old = $("#rs_language_old").val();
	var lang = $("#rs_language").val();
	var lang_level = $("#rs_language_level").val();
	if (lang && lang_level > 0) {
		$.ajax({
			type: "POST",
			url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-language',
			data: $('#resume-language-form').serialize(),
			async: false,
			dataType: 'JSON',
			success: function(data) {
				if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
				var lang_name = $('#rs_language option:selected').text();
				var lang_level_name = $('#rs_language_level option:selected').text();
				var html_clone = '<li id="lstResumeLanguage_' + lang + '" class="lstResumeLanguage_item">\
      <div class="box-edit-language">\
       <span>' + lang_name + ' - ' + lang_level_name + '</span>\
       <div class="link-edit link-language"><a href="javascript:void(0)" data-eduid="' + lang + '" data-edulv="' + lang_level + '"> <em class="material-icons">create</em></a></div>\
      </div>\
      <div class="language">\
       <form class="resume-language-form">\
        <input type="hidden" class="rs_language_old" name="rs_language_old" value="' + lang + '" />\
        <input type="hidden" name="type" value="1" />\
        <div class="language-list">\
         <div class="select-group">\
          <select name="rs_language" class="rs_language">\
           ' + $("#resume-language-form select.rs_language").html() + '\
          </select>\
          <label>' + language.js_resume_language_level + '</label>\
          <select name="rs_language_level" class="rs_language_level">\
           ' + $("#resume-language-form select.rs_language_level").html() + '\
          </select>\
         </div>\
         <ul class="list-action">\
          <li class="link-save"> <a class="save-language-item" href="javascript:void(0)"><em class="material-icons">save</em>' + language.cbprofile_save + '</a></li>\
          <li class="delete"> <a class="delete-language-item" href="javascript:void(0)"><em class="material-icons">highlight_off</em>' + language.cbprofile_delete + '</a></li>\
         </ul>\
        </div>\
       </form>\
      </div>\
       </li>';
				$("#lstResumeLanguage ul:first-child").append(html_clone);
				$("tr.language.language-add").removeClass('active');
				$("tr.language.language-add form#resume-language-form").trigger('reset');
				$(".add-more-language a").show();
			}
		});
	} else {
		show_noti(2, language.cv_resume_save_resumelang_fail);
		return false;
	}
}

function hideResumeLanguage() {
	$('.widget-16 .widget-body .experience table .language-add').removeClass('active');
	$(".widget-16 .widget-body .link-edit a").removeClass('active');
	$(".widget-16 .widget-body .delete").removeClass('active');
	$(".widget-16 .widget-body .link-add a").removeClass('active').show();
}

function updateResumeEducation(e) {
	$.validator.addMethod("checkExistPhoneEmail", function(value, element) {
		var strObjective = $(element).val();
		if (emailExistsInContent(strObjective) == true || phoneExistsInContent(strObjective) == true)
			return false;
		return true;
	}, language.job_createresume_input_email_phone_exist);
	if ($('#education-form').validate({
			ignore: ":hidden",
			onfocusout: false,
			rules: {
				'redu_name': {
					required: true
				},
				'redu_degree': {
					required: true
				},
				'redu_desc': {
					maxlength: 4000,
					checkExistPhoneEmail: true
				}
			},
			messages: {
				'redu_name': {
					required: language.js_plaese_resume_edu_school
				},
				'redu_degree': {
					required: language.js_resume_degree_select
				},
				'redu_desc': {
					maxlength: language.js_create_resume_max_des
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			success: function(element) {
				var errorHide = element[0].htmlFor;
				$('.err_' + errorHide).hide();
				element.remove();
			},
		}).form() == false) return false;
	$(e).prop('disabled', true);
	var arrEducationForm = $('#education-form').serializeArray()
	arrEducationForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-education',
		dataType: 'JSON',
		data: arrEducationForm,
		async: false,
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
				return false;
			} else {
				if (data.result == 1) {
					if ($("#redu_id").val() == 0)
						numListEdu++;
					loadEducation(numListEdu);
					if ($.isFunction(window.smartech)) {
						smartech('dispatch', 'bt_update_profile', {});
					}
				}
				$.fancybox.close();
			}
		}
	});
}

function updateResumeSkill(e) {
	if ($("#skill-form").validate({
			ignore: ":hidden",
			onfocusout: false,
			rules: {
				'ipt_skill_name': {
					required: true
				}
			},
			messages: {
				'ipt_skill_name': {
					required: language.js_resume_enter_skill_name
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			success: function(element) {
				var errorHide = element[0].htmlFor;
				$('.err_' + errorHide).hide();
				element.remove();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == false) return false;
	func_strip_tags_input($('#ipt_skill_name'));
	func_strip_tags_input($('#ipt_skill_content'));
	$(e).prop('disabled', true);
	var arrSkillForm = $('#skill-form').serializeArray()
	arrSkillForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-skill',
		dataType: 'JSON',
		data: arrSkillForm,
		async: false,
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
				return false;
			} else {
				if (data.result == 1) {
					if ($("#skill_id").val() == 0)
						numListSkill++;
					loadSkill(numListSkill);
					if ($.isFunction(window.smartech)) {
						smartech('dispatch', 'bt_update_profile', {});
					}
				}
			}
			$.fancybox.close();
		}
	});
}

function updateAdditionInfo(e) {
	$("#additioninfo").val(quill2.root.innerHTML);
	$.validator.addMethod("checkExistPhoneEmail", function(value, element) {
		var strObjective = $(element).val();
		if (emailExistsInContent(strObjective) == true || phoneExistsInContent(strObjective) == true)
			return false;
		return true;
	}, language.job_createresume_input_email_phone_exist);
	$.validator.addMethod("maxLenObjectFull", function(value, element, param) {
		var str = $(element).val();
		var text = strip_tags(str);
		if (text.length > param) {
			return false;
		} else {
			return true;
		}
	}, language.job_createresume_input_full_charater);
	if ($("#award-form").validate({
			ignore: ":disabled",
			rules: {
				additioninfo: {
					maxLenObjectFull: 4000,
					checkExistPhoneEmail: true
				},
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			messages: {
				additioninfo: {
					maxlength: language.cvhay_resume_additioninfo_maxlength
				}
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == false) return false;
	$(e).prop('disabled', true);
	$("#content").html($('#additioninfo').val());
	$.fancybox.close();
	var arrAwardForm = $('#award-form').serializeArray()
	arrAwardForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-additioninfo',
		dataType: 'JSON',
		data: arrAwardForm,
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
				return false;
			} else {
				if (data.result > 0) {
					loadResumeAdditioninfo();
					if ($.isFunction(window.smartech)) {
						smartech('dispatch', 'bt_update_profile', {});
					}
				} else {
					show_noti(2, language.js_resume_action_not_success);
				}
			}
		}
	});
}

function updateResumeRefer(e) {
	if ($('#references-form').validate({
			ignore: ":hidden",
			onfocusout: false,
			rules: {
				'rref_name': {
					required: true
				},
				'rref_phone': {
					required: true
				},
				'rref_company': {
					required: true
				},
				'rref_title': {
					required: true
				},
				'rref_email': {
					required: true,
					email: true
				}
			},
			messages: {
				'rref_name': {
					required: language.js_create_resume_refer_name
				},
				'rref_phone': {
					required: language.js_create_resume_refer_phone
				},
				'rref_company': {
					required: language.js_create_resume_refer_company
				},
				'rref_title': {
					required: language.js_create_resume_refer_level
				},
				'rref_email': {
					required: language.js_create_resume_refer_email,
					email: language.js_create_resume_refer_email_incorrect
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			success: function(element) {
				var errorHide = element[0].htmlFor;
				$('.err_' + errorHide).hide();
				element.remove();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == false) return false;
	$(e).prop('disabled', true);
	var arrReferencesForm = $('#references-form').serializeArray()
	arrReferencesForm.push({
		name: "csrf_token",
		value: $("#csrf_token").val()
	});
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-refer',
		dataType: 'JSON',
		data: arrReferencesForm,
		success: function(data) {
			$("#csrf_token").val(data.csrf_token);
			if (data.csrf_token_error) {
				show_noti(2, data.csrf_token_error);
				return false;
			} else {
				if (data.result > 0) {
					if ($("#rref_id").val() == 0)
						numListRefer++;
					loadResumeRefer(numListRefer);
					$.fancybox.close();
					if ($.isFunction(window.smartech)) {
						smartech('dispatch', 'bt_update_profile', {});
					}
				} else {
					show_noti(2, language.js_resume_action_not_success);
				}
			}
		}
	});
}

function editResumeActivity(act_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-activity?act_id=' + act_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeActivity() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-activity',
		dataType: 'JSON',
		success: function(data) {
			if (data.ACTIVITY_SECTION)
				$("#other-activity-section").html(data.ACTIVITY_SECTION);
		}
	});
}

function updateResumeActivity() {
	$.validator.addMethod('timeactvalid', function(value, element) {
		if ($('#current').is(":checked")) {
			return true;
		} else {
			if ($.trim($('#to_month').val()) && $.trim($('#to_year').val()))
				return true;
		}
		return false;
	}, language.js_resume_activity_time_required);
	if ($("#activity-form").validate({
			ignore: ":disabled",
			onfocusout: false,
			rules: {
				'organization': {
					required: true
				},
				'role': {
					required: true
				},
				'from_month': {
					required: true
				},
				'from_year': {
					required: true
				},
				'to_month': {
					timeactvalid: true
				},
				'to_year': {
					timeactvalid: true
				},
				'current': {
					timeactvalid: true
				}
			},
			errorPlacement: function(error, element) {
				if (element.attr("name") == "to_month" || element.attr("name") == "to_year" || element.attr("name") == "current") {
					$('#err_act_to').html(error.html()).show();
				} else {
					var errorSelector = '.err_' + element.attr('name');
					$(errorSelector).html(error.html()).show();
				}
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			},
			success: function(element) {
				if (element.attr("name") == "to_month" || element.attr("name") == "to_year" || element.attr("name") == "current") {
					$('#err_act_to').html('').show();
				} else {
					var errorSelector = '.err_' + element.attr('name');
					$(errorSelector).html('').show();
				}
			}
		}).form() == true) {
		var arrActivityForm = $('#activity-form').serializeArray()
		arrActivityForm.push({
			name: "csrf_token",
			value: $("#csrf_token").val()
		});
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/update-resume-activity',
			dataType: 'JSON',
			data: arrActivityForm,
			success: function(data) {
				$("#csrf_token").val(data.csrf_token);
				if (data.csrf_token_error) {
					show_noti(2, data.csrf_token_error);
					return false;
				} else {
					if (data.result > 0) {
						loadResumeActivity();
						if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
					} else {
						show_noti(2, language.js_resume_action_not_success);
					}
				}
			}
		});
		$.fancybox.close();
	}
}

function deleteActivity(act_id) {
	jConfirm(language.cvhay_message_delete_activity, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/delete-resume-activity',
				dataType: 'JSON',
				data: {
					'act_id': act_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				beforeSend: function() {
					$('#actList_' + act_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						$('#actList_' + act_id).animate({
							opacity: 1
						}, "slow");
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							loadResumeActivity();
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function editResumeCertificate(cer_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-certificate?cer_id=' + cer_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeCertificate() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-certificate',
		dataType: 'JSON',
		success: function(data) {
			if (data.CERTIFICATE_SECTION)
				$("#certificate-section").html(data.CERTIFICATE_SECTION);
		}
	});
}

function updateResumeCertificate() {
	$.validator.addMethod('cervalidto', function(value, element) {
		if ($('#cer_to').is(':disabled') || $.trim($('#cer_to').val()))
			return true;
		return false;
	}, language.js_resume_cer_to_required);
	if ($("#certificate-form").validate({
			ignore: ":disabled",
			onfocusout: false,
			rules: {
				'cer_title': {
					required: true
				},
				'cer_by': {
					required: true
				},
				'cer_from': {
					required: true
				},
				'cer_to': {
					cervalidto: true
				},
				'chk_cer_limit': {
					cervalidto: true
				}
			},
			messages: {
				'cer_title': {
					required: language.js_resume_cer_title_required
				},
				'cer_by': {
					required: language.js_resume_cer_by_required
				},
				'cer_from': {
					required: language.js_resume_cer_from_required
				},
				'cer_to': {
					cervalidto: language.js_resume_cer_to_required
				},
				'chk_cer_limit': {
					cervalidto: language.js_resume_cer_to_required
				}
			},
			errorPlacement: function(error, element) {
				if (element.attr("name") == "cer_to" || element.attr("name") == "chk_cer_limit") {
					$('#err_cer_to').html(error.html()).show();
				} else {
					var errorSelector = '.err_' + element.attr('name');
					$(errorSelector).html(error.html()).show();
				}
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			},
			success: function(element) {
				if (element.attr("name") == "cer_to" || element.attr("name") == "chk_cer_limit") {
					$('#err_act_to').html('').show();
				} else {
					var errorSelector = '.err_' + element.attr('name');
					$(errorSelector).html('').show();
				}
			}
		}).form() == true) {
		var arrCertificateForm = $('#certificate-form').serializeArray()
		arrCertificateForm.push({
			name: "csrf_token",
			value: $("#csrf_token").val()
		});
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/update-resume-certificate',
			dataType: 'JSON',
			data: arrCertificateForm,
			success: function(data) {
				$("#csrf_token").val(data.csrf_token);
				if (data.csrf_token_error) {
					show_noti(2, data.csrf_token_error);
					return false;
				} else {
					if (data.result > 0) {
						loadResumeCertificate();
						if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
					} else {
						show_noti(2, language.js_resume_action_not_success);
					}
				}
			}
		});
		$.fancybox.close();
	}
}

function deleteCertificate(cer_id) {
	jConfirm(language.cvhay_message_delete_certificate, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/delete-resume-certificate',
				data: {
					'cer_id': cer_id,
					'csrf_token': $('#csrf_token').val()
				},
				dataType: 'JSON',
				cache: false,
				beforeSend: function() {
					$('#certificate_' + cer_id).animate({
						opacity: 0.35
					}, "slow");
				},
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							$('#certificate_' + cer_id).slideUp('slow', function() {
								$('#certificate_' + cer_id).remove();
							});
							loadResumeCertificate();
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function editResumeLanguage(lang_id) {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-language?lang_id=' + lang_id,
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeLanguage() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-language',
		dataType: 'JSON',
		success: function(data) {
			if (data.LANGUAGE_SECTION)
				$("#language-section").html(data.LANGUAGE_SECTION);
		}
	});
}

function updateResumeLanguage() {
	if ($("#language-form").validate({
			ignore: ":disabled",
			onfocusout: false,
			rules: {
				'rs_language': {
					required: true
				},
				'rs_language_level': {
					required: true
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			},
			success: function(element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html('').show();
			}
		}).form() == true) {
		var arrLanguageForm = $('#language-form').serializeArray()
		arrLanguageForm.push({
			name: "csrf_token",
			value: $("#csrf_token").val()
		});
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/update-resume-language',
			dataType: 'JSON',
			data: arrLanguageForm,
			success: function(data) {
				$("#csrf_token").val(data.csrf_token);
				if (data.csrf_token_error) {
					show_noti(2, data.csrf_token_error);
					return false;
				} else {
					if (data.result > 0) {
						loadResumeLanguage();
						if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
					} else {
						show_noti(2, language.js_resume_action_not_success);
					}
				}
			}
		});
		$.fancybox.close();
	}
}

function deleteResumeLanguageProfile(lang_id) {
	jConfirm(language.cvhay_message_delete_language, language.message_common, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/delete-resume-language',
				dataType: 'JSON',
				data: {
					'lang_id': lang_id,
					'csrf_token': $('#csrf_token').val()
				},
				cache: false,
				success: function(data) {
					$('#csrf_token').val(data.csrf_token);
					if (data.csrf_token_error) {
						show_noti(2, data.csrf_token_error);
						return false;
					} else {
						if (parseInt(data.result) == 1) {
							loadResumeLanguage();
							if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
						} else {
							show_noti(2, language.cvhay_message_error);
						}
					}
				}
			});
		}
	});
}

function editResumeTitle() {
	$.fancybox.open({
		'src': PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-resume-title',
		type: 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom'
		}
	});
}

function loadResumeTitle(title) {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-resume-title',
		dataType: 'JSON',
		data: {
			'title': title
		},
		success: function(data) {
			if (data.TITLE_SECTION)
				$("#t-resume-section").html(data.TITLE_SECTION);
			if (data.COMPLETE_SECTION)
				$('#complete_section').html(data.COMPLETE_SECTION);
		}
	});
}

function updateResumeTitle() {
	if ($("#t-resume-form").validate({
			ignore: ":disabled",
			onfocusout: false,
			rules: {
				resume_title: {
					required: true
				}
			},
			messages: {
				resume_title: {
					required: language.js_resume_resume_title_required
				}
			},
			errorPlacement: function(error, element) {
				var errorSelector = '.err_' + element.attr('name');
				$(errorSelector).html(error.html()).show();
			},
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();
				if (errors)
					validator.errorList[0].element.focus();
			}
		}).form() == true) {
		var title_resume = formatStringInput($('#resume_title').val());
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/update-resume-title',
			dataType: 'JSON',
			data: {
				'title': title_resume,
				'csrf_token': $('#csrf_token').val()
			},
			success: function(data) {
				$("#csrf_token").val(data.csrf_token);
				if (data.csrf_token_error) {
					show_noti(2, data.csrf_token_error);
					return false;
				} else {
					if (data.result > 0) {
						$('#widget-11').find('div.assistant').html(title_resume);
						loadResumeTitle(title_resume);
						if ($.isFunction(window.smartech)) smartech('dispatch', 'bt_update_profile', {});
					} else {
						show_noti(2, language.js_resume_action_not_success);
					}
				}
			}
		});
		$.fancybox.close();
	}
}

function showHideInfor() {
	$.fancybox.open($(".hidden-edit-modal"), {
		clickOutside: 'close',
		clickSlide: 'zoom',
	});
}

function RemoveRowLoc(obj, id) {
	$(obj).parent().parent().parent().parent().removeClass('active');
	$('#select_location_id_' + id).val('').trigger('change');
	var workPopupItem = $(".list-work-popup .work-popup-item.active").length;
	if (workPopupItem < 3)
		$(".add-work-popup").show();
}

function addListWorkPopup() {
	$('.list-work-popup .work-popup-item:not(".active")').first().addClass('active');
	var workPopupItem = $(".list-work-popup .work-popup-item.active").length;
	if (workPopupItem == 3)
		$(".add-work-popup").hide();
}

function formatStringInput(str) {
	var title = $.trim(str.replaceAll('"', ''));
	return title;
}
$(document).on('click', '.save-language-item', function(event) {
	event.preventDefault();
	var obj_form = $(this).closest('form.resume-language-form');
	var data_form = obj_form.serialize();
	var language_name = obj_form.find('select.rs_language').find('option:selected').text();
	var language_level = obj_form.find('select.rs_language_level').find('option:selected').text();
	$(this).closest('li.lstResumeLanguage_item').removeClass('active');
	$(this).closest('li.lstResumeLanguage_item').find(".box-edit-language span").html(language_name + ' - ' + language_level);
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-language',
		data: data_form,
		async: false,
		dataType: 'JSON',
		success: function(data) {}
	});
});
$(document).on('click', '.delete-language-item', function(event) {
	event.preventDefault();
	var obj_form = $(this).closest('form.resume-language-form');
	obj_form.find('select.rs_language_level').val(0);
	var data_form = obj_form.serialize();
	$(this).closest('li.lstResumeLanguage_item').remove();
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/update-resume-language',
		data: data_form,
		async: false,
		dataType: 'JSON',
		success: function(data) {}
	});
});
$(document).ready(function() {});
/*my-cb.js*/

$(document).ready(function() {
	$("#company_domain_blacklist").focusin(function() {
		$("#company_domain_blacklist").val("@");
	});
})

function choose_file() {
	$("#fileAvatar").click();
}

function removeAvarta() {
	$.ajax({
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/deleteavatar',
		type: 'POST',
		dataType: 'json',
	}).done(function(response) {
		show_noti(1, response.msg);
		$("#img_mem_avatar").attr("src", './img/dash-board/1.png');
	});
}

function ajaxFileUpload() {
	if ($('#fileAvatar').val()) {
		var data = new FormData();
		data.append('fileAvatar', $('#fileAvatar')[0].files[0]);
		$.ajax({
			url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/jcropimage?upload=fileAvatar',
			headers: {
				"cache-control": "no-cache",
				'Access-Control-Allow-Origin': '*'
			},
			type: 'POST',
			data: data,
			cache: false,
			async: true,
			enctype: 'multipart/form-data',
			timeout: 600000,
			processData: false,
			contentType: false,
			dataType: 'json',
		}).done(function(data) {
			if (data.file && data.error == "") {
				$.fancybox.open({
					'type': 'iframe',
					opts: {
						iframe: {
							css: {
								width: 600,
								height: 520
							}
						}
					},
					'src': ROOT_KIEMVIEC + mapKeywords.cv_hay + "/jcropimage?file=" + encodeURIComponent(data.file)
				});
				$('#fileAvatar').val('');
			} else {
				show_noti(2, data.error);
			}
			$('#fileAvatar').bind('change', function() {})
			return false;
		});
	}
}

function showAvatar(file) {
	if (file)
		$("#img_mem_avatar").attr("src", PATH_IMAGES + 'jobseekers/' + file);
	$.fancybox.close('all');
}
$('#btn_view_cbprofile').on('click', function() {
	$.fancybox.open({
		'src': ROOT_KIEMVIEC + mapKeywords.cv_hay + "/cv-profile-preview?viewprofile=1&height=" + ($(window).height() - 20) + "&newLayout=true",
		'type': 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom',
		},
	});
});

function downloadCvProfile(resume_id) {
	if (resume_id > 0)
		window.location.href = ROOT_KIEMVIEC + mapKeywords.cv_hay + '/cv-profile-download/resume/' + resume_id;
}

function downloadCvAttach(resume_id) {
	if (resume_id > 0)
		window.location.href = PATH_KIEMVIEC + 'jobseekers/myresume/downloadcvattach?resume_id=' + resume_id;
}

function cv_searchable(thiss) {
	if ($(thiss).data('complete') == 0) {
		show_noti(2, language.js_resume_can_not_searchable);
		$(thiss).prop('checked', false);
		return false;
	}
	$.alerts.okButton = language.js_default_resume;
	$.alerts.cancelButton = language.js_none_default_resume;
	var resume_active = 0;
	var thisChk = thiss;
	var intResult;
	resume_chk_id = $(thiss).val();
	var resume_title = $("#titleresume_" + resume_chk_id).html();
	if ($(thiss).is(':checked')) {
		jConfirm(language.js_resume_active_searchable1 + ' <strong>"' + resume_title + '"</strong> ' + language.js_resume_active_searchable2, language.message_common, function(r) {
			if (r == true) {
				$('input[name=cv_searchable]').prop('checked', false);
				resume_active = 1;
				intResult = updateStatusResume(resume_chk_id, resume_active);
				if (intResult == 1) {
					$(thisChk).prop('checked', true);
					show_noti(1, language.js_resume_searchable_success);
				} else {
					show_noti(2, language.js_resume_active_searchable_unsuccess);
				}
			} else {
				$(thiss).prop('checked', false);
			}
		})
	} else {
		$.alerts.okButton = language.js_default_resume_inactive;
		$.alerts.cancelButton = language.js_none_default_resume_inactive;
		jConfirm(language.js_resume_inactive_searchable1 + ' <strong>"' + resume_title + '"</strong> ' + language.js_resume_inactive_searchable2, language.message_common, function(r) {
			if (r == true) {
				resume_active = 2;
				updateStatusResume(resume_chk_id, resume_active);
				show_noti(1, language.js_resume_unsearchable_success);
			} else {
				$(thiss).prop('checked', true);
			}
		})
	}
	$.alerts.okButton = language.okButton;
	$.alerts.cancelButton = language.cancelButton;
}

function updateStatusResume(resume_chk_id, resume_active) {
	var data = new Object();
	var intResult;
	data.resume_id = resume_chk_id;
	data.resume_active = resume_active;
	var dataString = $.toJSON(data);
	$.ajax({
		type: "POST",
		async: false,
		url: PATH_KIEMVIEC + 'jobseekers/myresume/updatesearchable',
		data: 'data=' + dataString,
		dataType: 'json',
		success: function(obj) {
			intResult = obj.result;
			if (resume_active == 1 || resume_active == 3)
				var status_onoff = 'True';
			else
				var status_onoff = 'False';
			if ($.isFunction(window.smartech)) {
				smartech('contact', '', {
					"pk^email": member_email,
					"CV_SEARCHABLE": status_onoff,
				});
				smartech('identify', member_email);
			}
		}
	});
	return intResult;
}

function updateStatusJobalert(resume_chk_id, jobalert_active, thisJChk) {
	var data = new Object();
	data.resume_id = resume_chk_id;
	data.jobalert_active = jobalert_active;
	var dataString = $.toJSON(data);
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/myresume/updatecvjobalert',
		data: 'data=' + dataString,
		dataType: 'json',
		success: function(obj) {
			var objParent = $("#cv_jobalert_" + resume_chk_id);
			if (obj.result == 1) {
				if (jobalert_active == 1) {
					show_noti(1, language.job_message_success);
					if ($.isFunction(window.smartech)) {
						smartech('dispatch', 'bt_save_job_alert_criteria', {
							"job_title": obj.detail.JSAVESEARCH_KEYWORD,
							"category_name": obj.detail.INDUSTRY_NAME,
							"category_name_id": obj.detail.INDUSTRY_ID,
							"from_salary": obj.detail.JSAVESEARCH_FROMSALARY,
							"to_salary": obj.detail.JSAVESEARCH_TOSALARY,
							"level": obj.detail.LEVEL_NAME,
							"level_id": obj.detail.LEVEL_ID,
							"email_frequency": language.job_alert_by_week,
							"email_frequency_id": obj.detail.LEVEL_ID
						});
					}
				} else {
					show_noti(1, language.job_message_nosuccess);
				}
				objParent.find('a').removeClass('active');
				objParent.find('a[data-type="' + jobalert_active + '"]').addClass('active');
			} else {
				objParent.prop('checked', false);
				show_noti(2, language.job_savesearch_max_3_active);
			}
		}
	});
}

function updateCvJobalert(e) {
	var alert_chk_id = 0;
	$.alerts.okButton = language.okButton;
	$.alerts.cancelButton = language.cancelButton;
	var thisJChk = e;
	var jobalert_active = 0;
	alert_chk_id = $(e).val();
	if ($(e).is(':checked')) {
		jConfirm(language.js_resume_active_jobalert, language.message_common, function(r) {
			if (r == true) {
				jobalert_active = 1;
				updateStatusJobalert(alert_chk_id, jobalert_active, thisJChk);
			} else {
				$(thisJChk).prop('checked', false);
			}
		})
	} else {
		jConfirm(language.js_resume_inactive_jobalert, language.message_common, function(r) {
			if (r == true) {
				jobalert_active = 0;
				updateStatusJobalert(alert_chk_id, jobalert_active, thisJChk);
			} else {
				$(thisJChk).prop('checked', true);
			}
		})
	}
}

function editProfile() {
	$.fancybox.open({
		src: PATH_KIEMVIEC + 'jobseekers/mykiemviec/edit-profile',
		'type': 'ajax',
		opts: {
			clickOutside: 'close',
			clickSlide: 'zoom',
		}
	});
}

function loadInfoProfile() {
	$.ajax({
		type: "POST",
		url: PATH_KIEMVIEC + 'jobseekers/mykiemviec/load-info-profile',
		success: function(data) {
			$("#personalinfo-section").html(data);
		}
	});
}

function checkCompleteProfile() {
	$.ajax({
		type: "POST",
		url: ROOT_KIEMVIEC + mapKeywords.cv_hay + '/check-complete-profile',
		data: {},
		success: function(data) {}
	});
}
$(document).ready(function() {
	$(".group_jobalert").on('change', function(event) {
		event.preventDefault();
		var objThis = $(this);
		var rs_id = objThis.data('id');
		if (objThis.is(":checked")) {
			var rs_status = 1;
		} else {
			var rs_status = 0;
		}
		if (rs_status == 1) {
			jConfirm(language.js_resume_active_jobalert, language.message_common, function(r) {
				if (r == true) {
					updateStatusJobalert(rs_id, rs_status);
				} else {
					objThis.prop("checked", false);
				}
			});
		} else {
			jConfirm(language.js_resume_inactive_jobalert, language.message_common, function(r) {
				if (r == true) {
					updateStatusJobalert(rs_id, rs_status);
				} else {
					objThis.prop("checked", true);
				}
			});
		}
	});
	$(".group_jobalert_top a").on('click', function(event) {
		event.preventDefault();
		var objThis = $(this);
		var objThisParent = $(this).closest('div.group_jobalert_top');
		var rs_id = objThisParent.data('id');
		var rs_status = objThis.data('type');
		if (rs_status == 1) {
			jConfirm(language.js_resume_active_jobalert, language.message_common, function(r) {
				if (r == true) {
					updateStatusJobalert(rs_id, rs_status);
				}
			});
		} else {
			jConfirm(language.js_resume_inactive_jobalert, language.message_common, function(r) {
				if (r == true) {
					updateStatusJobalert(rs_id, rs_status);
				}
			});
		}
	});
	$(".group_searchable a").on('click', function(event) {
		event.preventDefault();
		var objThis = $(this);
		var objParent = objThis.closest('div.group_searchable');
		var rs_id = objParent.data('id');
		var rs_complete = objParent.data('complete');
		var rs_status = parseInt(objThis.data('type'));
		if (rs_complete == 0) {
			show_noti(2, language.js_resume_can_not_searchable);
			return false;
		}
		var resume_title = $("#titleresume_" + rs_id).html();
		if (rs_status == 3) {
			$.alerts.okButton = language.js_default_resume_urgentjob;
			$.alerts.cancelButton = language.js_none_default_resume_urgentjob;
			jConfirm(language.js_resume_urgentjob_searchable1 + ' <strong>"' + resume_title + '"</strong> ' + language.js_resume_urgentjob_searchable2, language.message_common, function(r) {
				if (r == true) {
					resume_active = 3;
					intResult = updateStatusResume(rs_id, resume_active);
					if (intResult == 1) {
						active_searchable(objParent, 'flash');
						show_noti(1, language.js_resume_urgentjob_success);
					} else {
						show_noti(2, language.js_resume_urgentjob_unsuccess);
					}
				}
			});
		} else if (rs_status == 1) {
			$.alerts.okButton = language.js_default_resume;
			$.alerts.cancelButton = language.js_none_default_resume;
			jConfirm(language.js_resume_active_searchable1 + ' <strong>"' + resume_title + '"</strong> ' + language.js_resume_active_searchable2, language.message_common, function(r) {
				if (r == true) {
					resume_active = 1;
					intResult = updateStatusResume(rs_id, resume_active);
					if (intResult == 1) {
						active_searchable(objParent, 'public');
						show_noti(1, language.js_resume_searchable_success);
					} else {
						show_noti(2, language.js_resume_active_searchable_unsuccess);
					}
				}
			});
		} else {
			$.alerts.okButton = language.js_default_resume_inactive;
			$.alerts.cancelButton = language.js_none_default_resume_inactive;
			jConfirm(language.js_resume_inactive_searchable1 + ' <strong>"' + resume_title + '"</strong> ' + language.js_resume_inactive_searchable2, language.message_common, function(r) {
				if (r == true) {
					resume_active = 2;
					updateStatusResume(rs_id, resume_active);
					show_noti(1, language.js_resume_unsearchable_success);
					active_searchable(objParent, 'lock');
				}
			});
		}
	});
});

function active_searchable(elem, classactive) {
	$(".group_searchable a").removeClass('active');
	$(".group_searchable a.lock").addClass('active');
	elem.find('a').removeClass('active');
	elem.find('a.' + classactive).addClass('active');
	let type = elem.find('a.' + classactive).data('type');
	$(".text-notes").removeClass('d-block').addClass('d-none');
	$(".text-notes-2").removeClass('d-none').addClass('d-block');
	elem.closest('.attached-status-area').find('.text-notes-2').removeClass('d-block').addClass('d-none');
	elem.closest('.attached-status-area').find('.text-notes-' + type).removeClass('d-none').addClass('d-block');
};

function addBlackListDashboard() {
	var bChecked = false;
	var company_id = parseInt($('#company_id_blacklist').val());
	if (company_id > 0) bChecked = true;
	if (bChecked) {
		var dataString = $("#frmAddBlacklist").serialize();
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/blacklist/addEmpBlackList',
			data: dataString,
			success: function(data) {
				if (parseInt(data) == 1) {
					$("#bt_blacklist_find").trigger("click");
					show_noti(1, language.job_message_add_success, '', '', 1);
					window.setTimeout(function() {
						location.reload()
					}, 3000);
				}
			}
		});
		return false;
	} else {
		show_noti(2, language.job_blacklist_choose_emp, '', '', 1);
	}
};

function deleteBlackList(id) {
	jConfirm(language.job_message_delete, language.job_message, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_KIEMVIEC + 'jobseekers/blacklist/deleteBlacklist',
				data: "jblacklist_id[]=" + id,
				success: function(data) {
					if (parseInt(data) == 1)
						location.reload();
					else
						show_noti(2, language.job_message_error, language.job_message, '', '', 1);
				}
			});
		}
	});
};

function addBlackListDomain() {
	var bChecked = false;
	var domainFormat = /^@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var insertDomain = $("#company_domain_blacklist").val();
	if (insertDomain.match(domainFormat)) bChecked = true;
	if (bChecked) {
		$.ajax({
			type: "POST",
			url: PATH_KIEMVIEC + 'jobseekers/blacklist/addblacklistdomain',
			data: 'domain=' + insertDomain,
			success: function(data) {
				if (parseInt(data) == 1) {
					$("#bt_blacklist_find").trigger("click");
					show_noti(1, language.job_message_add_success, '', '', 1);
					window.setTimeout(function() {
						location.reload()
					}, 3000);
				}
			}
		});
		return false;
	} else {
		show_noti(2, language.job_blacklist_choose_domain, '', '', 1);
	}
};

function deleteBlackListDomain(domain) {
	jConfirm(language.job_message_delete, language.job_message, function(r) {
		if (r == true) {
			$.ajax({
				type: "POST",
				url: PATH_KIEMVIEC + 'jobseekers/blacklist/deleteBlacklistDomain',
				data: "domain=" + domain,
				success: function(data) {
					if (parseInt(data) == 1)
						location.reload();
					else
						show_noti(2, language.job_message_error, language.job_message, '', '', 1);
				}
			});
		}
	});
};