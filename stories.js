(()=>{var __webpack_modules__={266:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{}){__append('<main class="slide slide_horizontal-align_between" data-slide="activity">\n<div class="slide-description">\n<p class="slide-description__headline">\n'),__append(escapeFn(data.title)),__append('\n</p>\n<p class="slide-description__caption">\n'),__append(escapeFn(data.subtitle)),__append('\n</p>\n</div>\n<div class="slide-body-wrapper slide-body-wrapper_direction_column slide-body-wrapper_height_vert-100 slide-body-wrapper_horizontal-align_end slide-body-wrapper_vertical-align_vert-end slide-body-wrapper_flex">\n<div class="heat-map-block">\n');for(let hourIx=0;hourIx<data.heatMap[0].length;hourIx+=1){__append('\n<div class="heat-map-block__line\n'),__append(escapeFn(0!==hourIx?`heat-map-block__line_margin_top-${hourIx}`:"")),__append('">\n'),hourIx%2==1&&__append('\n<div class="heat-map-block__item heat-map-block__item_placeholder"></div>\n'),__append("\n");for(let dayIx=0;dayIx<data.heatMap.length;dayIx+=1)__append('\n<div class="heat-map-block__item">\n<img class="heat-map-block__item-value heat-map-block__item-value_theme_dark" src="'),__append(escapeFn(__webpack_require__(193)(`./${data.heatMap[dayIx][hourIx]}-dark.svg`).slice(1))),__append('" alt="Heat map item">\n<img class="heat-map-block__item-value heat-map-block__item-value_theme_light" src="'),__append(escapeFn(__webpack_require__(677)(`./${data.heatMap[dayIx][hourIx]}-light.svg`).slice(1))),__append('" alt="Heat map item">\n</div>\n');__append("\n"),hourIx%2==0&&__append('\n<div class="heat-map-block__item heat-map-block__item_placeholder"></div>\n'),__append("\n</div>\n")}__append('\n</div>\n<div class="heat-map-block heat-map-block_reduced">\n');for(let dayIx=0;dayIx<data.reducedHeatMap.length;dayIx+=1){__append('\n<div class="heat-map-block__line\n'),__append(escapeFn(0!==dayIx?`heat-map-block__line_margin_top-${dayIx}`:"")),__append('">\n'),dayIx%2==1&&__append('\n<div class="heat-map-block__item heat-map-block__item_placeholder"></div>\n'),__append("\n");for(let hourIx=0;hourIx<data.reducedHeatMap[dayIx].length;hourIx+=1)__append('\n<div class="heat-map-block__item">\n<img class="heat-map-block__item-value heat-map-block__item-value_theme_dark" src="'),__append(escapeFn(__webpack_require__(193)(`./${data.reducedHeatMap[dayIx][hourIx]}-dark.svg`).slice(1))),__append('" alt="Heat map item">\n<img class="heat-map-block__item-value heat-map-block__item-value_theme_light" src="'),__append(escapeFn(__webpack_require__(677)(`./${data.reducedHeatMap[dayIx][hourIx]}-light.svg`).slice(1))),__append('" alt="Heat map item">\n</div>\n');__append("\n"),dayIx%2==0&&__append('\n<div class="heat-map-block__item heat-map-block__item_placeholder"></div>\n'),__append("\n</div>\n")}__append('\n</div>\n<div class="heat-map-description">\n<div class="heat-map-description__item">\n<div class="heat-map-description__indicator heat-map-description__indicator_special"></div>\n<div class="heat-map-description__title">\n1 час\n</div>\n</div>\n');for(let i=0;i<data.intervals.length;i++)__append('\n<div class="heat-map-description__item">\n<div class="heat-map-description__indicator heat-map-description__indicator_color-'),__append(escapeFn(i+1)),__append('"></div>\n<div class="heat-map-description__title">\n'),__append(escapeFn(data.intervals[i])),__append("\n</div>\n</div>\n");__append('\n</div>\n<div class="heat-map-description heat-map-description_reduced">\n<div class="heat-map-description__item">\n<div class="heat-map-description__indicator heat-map-description__indicator_special"></div>\n<div class="heat-map-description__title">\n2 часа\n</div>\n</div>\n');for(let i=0;i<data.intervals.length;i++)__append('\n<div class="heat-map-description__item">\n<div class="heat-map-description__indicator heat-map-description__indicator_color-'),__append(escapeFn(i+1)),__append('"></div>\n<div class="heat-map-description__title">\n'),__append(escapeFn(data.intervals[i])),__append("\n</div>\n</div>\n");__append("\n</div>\n</div>\n</main>")}return __output}},578:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{}){__append('<main class="slide" data-slide="chart">\n<div class="slide-description">\n<div class="slide-description__headline">\n'),__append(escapeFn(data.title)),__append('\n</div>\n<div class="slide-description__caption">\n'),__append(escapeFn(data.subtitle)),__append('\n</div>\n</div>\n<div class="chart-wrapper chart-wrapper_vertical-align_end chart-wrapper_vertical-align_horiz-center">\n<div class="chart-block">\n');for(let valueIx=0;valueIx<data.values.length;valueIx+=1)__append('\n<div class="chart-block__item">\n<p class="chart-block__item-value\n'),__append(escapeFn(data.values[valueIx].active?"chart-block__item-value_active":"")),__append('">\n'),__append(escapeFn(0!==data.values[valueIx].value?data.values[valueIx].value:"")),__append('\n</p>\n<div class="chart-block__item-bar chart-block__item-bar_visible_vert\n'),__append(escapeFn(data.values[valueIx].active?"chart-block__item-bar_active":"")),__append('"\n'),__append(`style="height: ${data.values[valueIx].heightValueVert}%"`),__append('\n></div>\n<div class="chart-block__item-bar chart-block__item-bar_visible_horiz\n'),__append(escapeFn(data.values[valueIx].active?"chart-block__item-bar_active":"")),__append('"\n'),__append(`style="height: ${data.values[valueIx].heightValueHoriz}%"`),__append('\n></div>\n<p class="chart-block__item-title">\n'),__append(escapeFn(data.values[valueIx].title)),__append("\n</p>\n</div>\n");__append('\n</div>\n<div class="chart-leaders">\n');for(let i=0;i<3;i++)__append('\n<div class="people-card people-card_direction_row people-card_padding_0\n'),__append(escapeFn(2===i?"people-card_visibility_horiz-1366":"")),__append('">\n<div class="people-card__img-wrapper">\n<img class="people-card__img" src="'),__append(escapeFn(__webpack_require__(990)(`./${data.users[i].avatar}`).slice(1))),__append('" alt="People card image">\n</div>\n<div class="people-card__text-wrapper">\n<p class="people-card__body">\n'),__append(escapeFn(data.users[i].name)),__append('\n</p>\n<p class="people-card__caption">\n'),__append(escapeFn(data.users[i].valueText)),__append("\n</p>\n</div>\n</div>\n"),2!==i&&(__append('\n<div class="divider divider_revert_color divider_margin-vertical_1 divider_horizontal-revert\n'),__append(escapeFn(1===i?"divider_visibility_horiz-1366":"")),__append('"></div>\n')),__append("\n");__append("\n</div>\n</div>\n</main>")}return __output}},357:module=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{}){__append('<main class="slide slide_horizontal-align_between" data-slide="diagram">\n<div class="slide-description">\n<p class="slide-description__headline">\n'),__append(escapeFn(data.title)),__append('\n</p>\n<p class="slide-description__caption">\n'),__append(escapeFn(data.subtitle)),__append('\n</p>\n</div>\n<div class="slide-body-wrapper slide-body-wrapper_height_vert-100 slide-body-wrapper_flex slide-body-wrapper_vertical-align_vert-end slide-body-wrapper_wrap slide-body-wrapper_horizontal-align">\n<div class="diagram-block">\n<div class="diagram-block__description">\n<p class="diagram-block__description-title">\n'),__append(escapeFn(data.totalText)),__append('\n</p>\n<p class="diagram-block__description-caption">\n'),__append(escapeFn(data.differenceText)),__append('\n</p>\n</div>\n<div class="diagram-block__body">\n');for(let diagramItemIx=0;diagramItemIx<data.dataset.length;diagramItemIx+=1)__append('\n<div class="diagram-block__item diagram-block__item_color_'),__append(escapeFn(diagramItemIx+1)),__append('" style="'),__append(escapeFn(`clip-path: polygon(${data.dataset[diagramItemIx].clipPathParams});\ntransform: rotate(${data.dataset[diagramItemIx].rotateDeg}deg);`)),__append('\n"></div>\n');__append('\n</div>\n</div>\n<div class="diagram-categories">\n');for(let i=0;i<data.categories.length;i++)__append('\n<div class="diagram-categories-item">\n<div class="diagram-categories-item__title">\n<div class="diagram-categories-item__marker '),__append(escapeFn(`diagram-categories-item__marker_color_${i+1}`)),__append('"></div>\n'),__append(escapeFn(data.categories[i].title)),__append('\n</div>\n<div class="diagram-categories-item__description">\n<p class="diagram-categories-item__description-item diagram-categories-item__description-item_padding_right-1"\n'),2===data.categories[i].difference.length?(__append("\n"),__append('\nstyle="letter-spacing: 0.5px;"\n')):data.categories[i].difference.length&&__append('\nstyle="letter-spacing: 0.33px;"\n'),__append("\n>\n"),__append(escapeFn(data.categories[i].difference)),__append('\n</p>\n<p class="diagram-categories-item__description-item">\n'),__append(escapeFn(data.categories[i].value)),__append("\n</p>\n</div>\n</div>\n"),i!==data.categories.length-1&&__append('\n<div class="divider divider_margin-vertical_1"></div>\n'),__append("\n");__append("\n</div>\n</div>\n</main>")}return __output}},769:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{}){__append('<main class="slide slide_horizontal-align_between" data-slide="leaders">\n<div class="slide-description">\n<p class="slide-description__headline">\n'),__append(escapeFn(data.title)),__append('\n</p>\n<p class="slide-description__caption">\n'),__append(escapeFn(data.subtitle)),__append('\n</p>\n</div>\n<div class="leader-board">\n');for(let userIx=0;userIx<data.users.length;userIx+=1){__append("\n");const currentUser=data.users[userIx];__append('\n<div class="leader-board__item\n'),__append(escapeFn(`leader-board__item_order_${currentUser.barOrder}`)),__append("\n"),__append(escapeFn(`leader-board__item_z-index_${currentUser.zIndex}`)),__append("\n"),__append(escapeFn(currentUser.additional?"leader-board__item_additional":"")),__append('">\n<div class="leader-board__wrapper\n'),__append(escapeFn(`leader-board__wrapper_to-vis-align_${currentUser.alignment}`)),__append('">\n<div class="people-card">\n<div class="people-card__img-wrapper">\n'),0===userIx?(__append('\n<div class="people-card__emoji">\n'),__append(escapeFn(data.emoji)),__append("\n</div>\n")):currentUser.selected&&__append('\n<div class="people-card__emoji">\n👍\n</div>\n'),__append('\n<img src="'),__append(escapeFn(__webpack_require__(990)(`./${currentUser.avatar}`).slice(1))),__append('" alt="People card image" class="people-card__img">\n</div>\n<div class="people-card__text-wrapper">\n<p class="people-card__body">\n'),__append(escapeFn(currentUser.name)),__append('\n</p>\n<p class="people-card__caption">\n'),__append(escapeFn(currentUser&&currentUser.valueText?currentUser.valueText:"")),__append('\n</p>\n</div>\n</div>\n</div>\n<div class="leader-board__bar\n'),__append(escapeFn(`leader-board__bar_height_${currentUser.barHeight}`)),__append("\n"),__append(escapeFn(currentUser.primary?"leader-board__bar_primary":"")),__append('">\n<div class="leader-board__score leader-board__wrapper\n'),__append(escapeFn(`leader-board__wrapper_to-vis-align_${currentUser.alignment}`)),__append('">\n'),__append(escapeFn(currentUser.place)),__append("\n</div>\n"),data.relativePlace&&0===userIx&&(__append('\n<div class="leader-board__relative-place">\n<div class="people-card people-card_padding_bottom-0">\n<div class="people-card__img-wrapper">\n<div class="people-card__emoji">\n👍\n</div>\n<img src="'),__append(escapeFn(__webpack_require__(990)(`./${data.relativePlaceUser.avatar}`).slice(1))),__append('" alt="People card image" class="people-card__img">\n</div>\n<div class="people-card__text-wrapper">\n<p class="people-card__body">\n'),__append(escapeFn(data.relativePlaceUser.name)),__append('\n</p>\n<p class="people-card__caption people-card__caption_secondary">\n'),__append(escapeFn(data.relativePlaceUser&&data.relativePlaceUser.valueText?data.relativePlaceUser.valueText:"")),__append('\n</p>\n</div>\n<div class="divider divider_card-divider"></div>\n</div>\n<div class="leader-board__score leader-board__wrapper leader-board__score_relative-place\n'),__append(escapeFn(data.relativePlaceUser.alignment)),__append('">\n'),__append(escapeFn(data.relativePlaceUser.place)),__append("\n</div>\n</div>\n")),__append("\n</div>\n</div>\n")}__append("\n</div>\n</main>")}return __output}},401:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{}){__append('<main class="slide" data-slide="vote">\n<div class="slide-description">\n<p class="slide-description__headline">\n'),__append(escapeFn(data.title)),__append('\n</p>\n<p class="slide-description__caption">\n'),__append(escapeFn(data.subtitle)),__append('\n</p>\n</div>\n<div class="voting-area">\n');for(let columnId=0;columnId<data.columns.length;columnId+=1){__append('\n<div class="voting-area__column">\n');for(let columnItemId=0;columnItemId<data.columns[columnId].length;columnItemId+=1){__append("\n");let currentColumnItem=data.columns[columnId][columnItemId];if(__append("\n"),currentColumnItem.data&&"user"===currentColumnItem.data.type){__append("\n");let currentUser=currentColumnItem.data;__append('\n<div class="people-card people-card_interactions voting-area__item\n'),__append(escapeFn("both"!==currentColumnItem.visibility?`voting-area__item_visibility_${currentColumnItem.visibility}`:"")),__append("\n"),__append(escapeFn(currentUser.selected?"people-card_selected":"")),__append('" data-action="update" data-params="'),__append(escapeFn(JSON.stringify({alias:"leaders",data:{selectedUserId:currentUser.id}}))),__append('">\n<div class="people-card__img-wrapper">\n<div class="people-card__emoji\n'),__append(escapeFn(currentUser.selected?"":"people-card__emoji_hidden")),__append('">\n👍\n</div>\n<img src="'),__append(escapeFn(__webpack_require__(990)(`./${currentUser.avatar}`).slice(1))),__append('" alt="People card image" class="people-card__img">\n</div>\n<div class="people-card__text-wrapper">\n<p class="people-card__body">\n'),__append(escapeFn(currentUser.name)),__append("\n</p>\n</div>\n</div>\n")}else currentColumnItem.data&&currentColumnItem.data.type.match(/^slider/)&&(__append('\n<div class="voting-area__slider voting-area__item\n'),__append(escapeFn("both"!==currentColumnItem.visibility?`voting-area__item_visibility_${currentColumnItem.visibility}`:"")),__append("\n"),__append(escapeFn(currentColumnItem.data.active?"":"voting-area__slider_disabled")),__append("\n"),__append(escapeFn("slider-down"===currentColumnItem.data.type?"voting-area__slider_revert":"")),__append('"\n'),currentColumnItem.data.active&&(__append('\ndata-action="update" data-params="'),__append(escapeFn(JSON.stringify(currentColumnItem.data.params))),__append('"\n')),__append('\n>\n<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<use xlink:href="#slider"/>\n</svg>\n</div>\n'));__append("\n")}__append("\n</div>\n")}__append('\n</div>\n<svg style="display: none;">\n<symbol id="slider">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z" fill="currentColor"/>\n</symbol>\n</svg>\n</main>')}return __output}},487:(e,a,t)=>{"use strict";e.exports=t.p+"images/6ecb01f44e0bc3d008d4.jpg"},674:(e,a,t)=>{"use strict";e.exports=t.p+"images/aae0e7d353ed8be68826.jpg"},607:(e,a,t)=>{"use strict";e.exports=t.p+"images/e8f5281ecd850985efec.jpg"},476:(e,a,t)=>{"use strict";e.exports=t.p+"images/b9f6b37ed082a020423e.jpg"},829:(e,a,t)=>{"use strict";e.exports=t.p+"images/269c6f2d56831a2086fd.jpg"},659:(e,a,t)=>{"use strict";e.exports=t.p+"images/daca7618c2baff060d90.jpg"},58:(e,a,t)=>{"use strict";e.exports=t.p+"images/3f8a74d84cd792821663.jpg"},706:(e,a,t)=>{"use strict";e.exports=t.p+"images/e6e75e5581c8e70de3a6.jpg"},806:(e,a,t)=>{"use strict";e.exports=t.p+"images/1c907bed519473870126.jpg"},100:(e,a,t)=>{"use strict";e.exports=t.p+"images/ecdfc579e6916d7a1ee2.jpg"},239:(e,a,t)=>{"use strict";e.exports=t.p+"images/1925712321d161707c0e.jpg"},17:(e,a,t)=>{"use strict";e.exports=t.p+"images/cde813650f8a8d48f96a.jpg"},146:(e,a,t)=>{"use strict";e.exports=t.p+"images/2410b31921163b25393a.png"},255:(e,a,t)=>{"use strict";e.exports=t.p+"images/55fac5ee2e34fbddbe9a.png"},990:(e,a,t)=>{var n={"./1.jpg":487,"./10.jpg":674,"./11.jpg":607,"./12.jpg":476,"./2.jpg":829,"./3.jpg":659,"./4.jpg":58,"./5.jpg":706,"./6.jpg":806,"./7.jpg":100,"./8.jpg":239,"./9.jpg":17,"./favicon-dark.png":146,"./favicon-light.png":255};function i(e){return e=d(e),t(e)}function d(e){if(t.o(n,e))return n[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}i.keys=function(){return Object.keys(n)},i.resolve=d,(e.exports=i).id=990},929:(e,a,t)=>{"use strict";e.exports=t.p+"images/b8d0a9d00648efec4c24.svg"},665:(e,a,t)=>{"use strict";e.exports=t.p+"images/04a9b84ca815969b2b3d.svg"},282:(e,a,t)=>{"use strict";e.exports=t.p+"images/0f584456fc9bce239c7e.svg"},903:(e,a,t)=>{"use strict";e.exports=t.p+"images/afbd9af5bdf9c2981e25.svg"},382:(e,a,t)=>{"use strict";e.exports=t.p+"images/3d2ea0ef130895b6d3ae.svg"},637:(e,a,t)=>{"use strict";e.exports=t.p+"images/809a5ef51de97e85f2d1.svg"},889:(e,a,t)=>{"use strict";e.exports=t.p+"images/198a498f86a652bf88a0.svg"},435:(e,a,t)=>{"use strict";e.exports=t.p+"images/395430ffe400ad0b9e07.svg"},193:(e,a,t)=>{var n={"./extra-dark.svg":929,"./max-dark.svg":282,"./mid-dark.svg":382,"./min-dark.svg":889};function i(e){return e=d(e),t(e)}function d(e){if(t.o(n,e))return n[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}i.keys=function(){return Object.keys(n)},i.resolve=d,(e.exports=i).id=193},677:(e,a,t)=>{var n={"./extra-light.svg":665,"./max-light.svg":903,"./mid-light.svg":637,"./min-light.svg":435};function i(e){return e=d(e),t(e)}function d(e){if(t.o(n,e))return n[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}i.keys=function(){return Object.keys(n)},i.resolve=d,(e.exports=i).id=677},719:(e,a,t)=>{"use strict";var n=JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]'),i=t(255),d=t(146),r=t(769),p=t.n(r),l=(r=t(401),t.n(r)),_=(r=t(578),t.n(r)),s=(r=t(357),t.n(r)),c=(r=t(266),t.n(r));function o(e){const a=[];return e.forEach((e=>a.push(e.slice()))),a}function u(e){var a=Math.floor(e/3);return[0,a,2*a,e]}function v(e,a){var t=["min","mid","max","extra"];const n=[];for(let d=0;d<e.length;d+=1){n.push([]);for(let r=0;r<e[d].length;r+=1){var i=function(e,a){let t=0;for(let n=0;n<a.length;n+=1)e>a[n]&&(t+=1);return t}(e[d][r],a);n[d].push(t[i])}}return n}function m(e){return e.map(((a,t)=>{let n=0;return 0!==t&&(n=e[t-1]+1),n===a?`${a}`:`${n} — ${a}`}))}function g(e,a){let t,n;switch(e){case"leaders":n=function(e){const a={data:{title:e.title,subtitle:e.subtitle,emoji:e.emoji}};let{users:t}=e;t=t.slice();var{selectedUserId:n}=e;let i,d;for(let e=0;e<t.length;e+=1)n&&t[e].id===n?(i=t[e],i.selected=!0,d=e):t[e].selected=!1,t[e].place=e+1,t[e].primary=0===e;n&&4<d&&(t[4]=i),n&&2<d&&(a.data.relativePlace=!0,a.data.relativePlaceUser=i);const r=t.slice(0,5);var p=[[3,5],[4,4],[2,3],[5,2],[1,1]];for(let e=0;e<r.length;e+=1)[r[e].barOrder,r[e].barHeight]=p[e],t[e].additional=2<e,t[e].alignment=0===e?"center":e%2==0?"start":"end",0===e?t[e].zIndex=2:e<3&&(t[e].zIndex=1);return a.data.users=r,a}(a),t=p()(n);break;case"vote":n=function(e){const a={data:{title:e.title,subtitle:e.subtitle,columns:[]}};var{selectedUserId:t,offset:n}=e;const i=e.users.slice();let d=e.users.findIndex((e=>e.id===n));-1===d&&(d=0),i.forEach(((e,a)=>{i[a].type="user",i[a].selected=e.id===t}));var r=n&&i[0]&&n!==i[0].id;let p=null,l=null;r&&(p=i[s=0<=d-6?d-6:0].id,l=i[s=0<=d-8?d-8:0].id);let _=null;(e=d+7<i.length-1)&&(_=i[d+8].id);var s=d+5<i.length-1;let c=null;return s&&(c=i[d+6].id),a.data.columns=[[{data:i[d]||!1,visibility:"both"},{data:i[d+3]||!1,visibility:"vertical"},{data:i[d+6]||!1,visibility:"vertical"}],[{data:{type:"slider-up",active:Boolean(r),params:{alias:"vote",data:{offset:p}}},visibility:"vertical"},{data:i[d+1]||!1,visibility:"both"},{data:i[d+4]||!1,visibility:"both"},{data:{type:"slider-down",active:e,params:{alias:"vote",data:{offset:_}}},visibility:"vertical"}],[{data:{type:"slider-up",active:Boolean(r),params:{alias:"vote",data:{offset:l}}},visibility:"horizontal"},{data:{type:"slider-down",active:s,params:{alias:"vote",data:{offset:c}}},visibility:"horizontal"}],[{data:i[d+2]||!1,visibility:"both"},{data:i[d+5]||!1,visibility:"both"},{data:i[d+7]||!1,visibility:"vertical"}],[{data:i[d+3]||!1,visibility:"horizontal"}]],a}(a),t=l()(n);break;case"chart":n=function(e){const a={data:{title:e.title,subtitle:e.subtitle}},t=[];e.users.forEach((e=>{e={name:e.name,avatar:e.avatar,valueText:e.valueText},t.push(e)})),a.data.users=t;const{values:n}=e;let i,d=n.slice();for(let e=0;e<d.length;e+=1)d[e].active?i=e:d[e].active=!1;var r=6<=i?i-6:0;e=i+1+(2<9-(e=6<=i?7:i+1)?2:9-e),d=d.slice(r,e);let p=null;for(let e=0;e<d.length;e+=1)p=null===p?d[e].value:Math.max(p,d[e].value);for(let e=0;e<d.length;e+=1)d[e].heightValueVert=d[e].value/p*63.15625,d[e].heightValueHoriz=d[e].value/p*62.84946236;return a.data.values=d,a}(a),t=_()(n);break;case"diagram":n=function(e){const a={data:{title:e.title,subtitle:e.subtitle,totalText:e.totalText,differenceText:e.differenceText}},t=[],n=[];for(let a=0;a<e.categories.length;a+=1){var i=e.categories[a],d=parseFloat(i.valueText),r=0<(r=parseFloat(i.differenceText))?`+${r}`:`${r}`;n.push({title:i.title,value:d,difference:r}),t.push(d)}a.data.categories=n;const p=[];var l=t.reduce(((e,a)=>e+a),0),_=l/356;let s=0;for(let e=0;e<t.length;e+=1){var c=t[e]/_,o=t[e]/l*100;p.push({clipPathParams:function(e,a){var t=[{minPercent:0,coords:[100,50],change:"y",changeSign:1},{minPercent:12.5,coords:[100,100],change:"x",changeSign:-1},{minPercent:25,coords:[50,100],change:"x",changeSign:-1},{minPercent:37.5,coords:[0,100],change:"y",changeSign:-1},{minPercent:50,coords:[0,50],change:"y",changeSign:-1},{minPercent:62.5,coords:[0,0],change:"x",changeSign:1},{minPercent:75,coords:[50,0],change:"x",changeSign:1},{minPercent:87.5,coords:[100,0],change:"y",changeSign:1}];const n=[[50,50]];let i=0,d=t[i];for(;e>d.minPercent&&i<8;)n.push(d.coords),i+=1,d=t[i];if(0!==i&&0!=e%25){var r=a/180*Math.PI,p=50*Math.cos(r)+50;let e,d;a=50*Math.sin(r)+50;var l=(r=t[i-1]).change,{changeSign:_}=r;"x"===l?([e]=r.coords,d=p):"y"===l&&([,e]=r.coords,d=a);for(var s=.02*(e>d?-1:1);.02<Math.abs(e-d);){let a;"x"===l?(1===_?a=50-Math.sqrt(2500-(e-50)*(e-50)):-1===_&&(a=Math.sqrt(2500-(e-50)*(e-50))+50),n.push([e,a])):"y"===l&&(1===_?a=Math.sqrt(2500-(50-e)*(50-e))+50:-1===_&&(a=50-Math.sqrt(2500-(50-e)*(50-e))),n.push([a,e])),e+=s}}return n.map((e=>`${e[0].toFixed(3)}% ${e[1].toFixed(3)}%`)).join(", ")}(o,c),rotateDeg:s}),s+=1+c}return a.data.dataset=p,a}(a),t=s()(n);break;case"activity":n=function(e){const a={data:{title:e.title,subtitle:e.subtitle}};let t,n=o(Object.values(e.data));for(let e=0;e<n.length;e+=1)for(let a=0;a<n[e].length;a+=1)t=void 0===t?n[e][a]:Math.max(t,n[e][a]);var i=u(t);n=v(n,i),a.data.heatMap=n,i=m(i),a.data.intervals=i;let d,r=o(Object.values(e.data));for(let e=0;e<r.length;e+=1)for(let a=r[e].length-1;0<a;a-=2){var p=r[e][a]+r[e][a-1];d=void 0===d?p:Math.max(d,p),r[e].splice(a-1,2,p)}return r=v(r,e=u(d)),a.data.reducedHeatMap=r,e=m(e),a.data.reducedIntervals=e,a}(a),t=c()(n);break;default:throw new Error("Invalid template alias")}return t}function h(e){var a=document.querySelector(".slide");return a&&a.dataset.slide===e}function b(e){return e=Array.prototype.find.call(e,(e=>e.classList.contains("people-card__img-wrapper"))),Array.prototype.find.call(e.children,(e=>e.classList.contains("people-card__emoji")))}function x(e){const a=document.querySelector(".people-card_selected");a&&(a.classList.remove("people-card_selected"),b(a.children).classList.add("people-card__emoji_hidden"));const t=e.path.find((e=>e.classList.contains("people-card")));t!==a&&(t.classList.toggle("people-card_selected"),b(t.children).classList.toggle("people-card__emoji_hidden"))}window.renderTemplate=g;let f,w,y,T,j,k,I,F=!0;function M(e){var a=document.querySelector(".people-card").clientHeight;T=2*a,y=3*a,w=w||document.querySelector(".voting-area").clientHeight,document.querySelector(".voting-area").setAttribute("style",`height: ${w}px`),"mousedown"===e.type?f=e.clientY:"touchstart"===e.type&&(f=e.touches[0].clientY)}function L(e){var a=window.innerWidth,t=window.innerHeight,n=a/t;let i;"mousemove"===e.type?i=e.clientY:"touchmove"===e.type&&(i=e.touches[0].clientY),a=document.documentElement.scrollHeight-t,e=0===window.scrollY&&i>f,a=Math.round(window.scrollY)===Math.round(a)&&i<f,(e||a||j)&&(F=!1),f&&!F&&(t=(f-i)/t,t*=w,j=window.scrollY?w+t:w-t,1<=n&&j<T?j=T:n<1&&j<y?j=y:j>1.5*w&&(j=1.5*w),document.querySelector(".voting-area").setAttribute("style",`height: ${j}px`),document.querySelector(".slide").setAttribute("style","overflow: hidden"))}function E(){F=!0,j=null,f=null,document.querySelector(".voting-area").setAttribute("style",`transition: height 0.15s ease-in-out; height: ${w}px`),setTimeout((()=>{document.querySelector(".slide").removeAttribute("style")}),200)}function C(){if(h("chart")){const t=document.querySelector(".chart-block");var e=window.innerWidth,a=window.innerHeight;t.scrollWidth>.95*e&&1<e/a?t.setAttribute("style","justify-content: flex-end; padding-right: 2.5vw;"):t.removeAttribute("style")}}function U(e){"mousedown"===e.type?k=e.clientX:"touchstart"===e.type&&(k=e.touches[0].clientX),e=document.querySelector(".chart-block__item"),I=parseFloat(window.getComputedStyle(e).getPropertyValue("margin-right"))}function H(e){if(k){var a=(i=window.innerWidth)/window.innerHeight;let d;"mousemove"===e.type?d=e.clientX:"touchmove"===e.type&&(d=e.touches[0].clientX);let r=I*(e=(d-k)/i);1<=a&&i/2<k&&(r=-r);var t,n=I-r,i=window.getComputedStyle(document.documentElement).getPropertyValue("font-size");(i=.5*parseFloat(i))<n&&(t=document.querySelectorAll(".chart-block__item"),Array.prototype.forEach.call(t,((e,i)=>{(i+1!==t.length||a<1)&&e.setAttribute("style",`margin-right: ${n}px`)})))}}function S(){k=null;const e=document.querySelectorAll(".chart-block__item");Array.prototype.forEach.call(e,(e=>{e.setAttribute("style","transition: margin-right 0.15s ease-in-out")})),e[0].ontransitionend=C}window.onload=()=>{!function(){const e=window.location.search.replace("?","").split("&").map((e=>e.split("=")));var a=e.find((e=>"slide"===e[0])),t=e.find((e=>"theme"===e[0]));let r;r=a&&a[1]<12&&0<a[1]?a[1]-1:0,document.body.innerHTML=g(n[r].alias,n[r].data);const p=document.createElement("link");p.rel="icon",t&&"light"===t[1]?p.href=i:p.href=d,document.head.append(p),window.postMessage("slideLoaded",window.location.href)}()},window.addEventListener("message",(e=>{["slideLoaded"].includes(e.data)&&(function(){if(h("vote")){const e=document.querySelectorAll(".people-card");for(let a=0;a<e.length;a+=1)e[a].addEventListener("click",x);window.addEventListener("touchstart",M),window.addEventListener("mousedown",M),window.addEventListener("touchmove",L),window.addEventListener("mousemove",L),window.addEventListener("touchend",E),window.addEventListener("mouseup",E)}}(),function(){if(h("chart")){const e=document.querySelector(".chart-wrapper");e.addEventListener("touchstart",U),e.addEventListener("mousedown",U),e.addEventListener("touchmove",H),e.addEventListener("mousemove",H),e.addEventListener("touchend",S),e.addEventListener("mouseup",S),C()}}())})),window.onresize=()=>{h("vote")&&(w=null,document.querySelector(".voting-area").removeAttribute("style")),C()}}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(a,{a}),a},__webpack_require__.d=(e,a)=>{for(var t in a)__webpack_require__.o(a,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},__webpack_require__.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),__webpack_require__.p="/";var __webpack_exports__=__webpack_require__(719)})();