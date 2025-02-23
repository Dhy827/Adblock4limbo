/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// ruleset: deu-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".footnote\",\"tasks\":[[\"has\",{\"selector\":\".headline-box\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".module.c1.hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"span.issuerPromotionHint\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.suffix.wo-inline-block.pull-right\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.wo-inline-block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".sliderItem.active\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item:has(img[alt=\\\"Anzeige\\\"])\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td.right:has(img[alt=\\\"Anzeige\\\"])\"}]]}"],["{\"selector\":\"#ContainerFull\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.elementor-heading-title\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"span.username\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has-text\",\"Werbung\"]]}"],["{\"selector\":\".avgrid_1_of_1.viewlet-bottom\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertorials\"]]}]]}","{\"selector\":\".gridteaser.gridteaser-m\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".cm-post-widget-three.cm-post-widget-section\",\"tasks\":[[\"has\",{\"selector\":\".section-title\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.MuiCardHeader-title\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"div[data-testid=\\\"reco-wrapper\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"indexesm__HeadlineElement-fragment-product-master__\\\"]\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}"],["{\"selector\":\".eight.columns.alpha.content\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".m-teaser\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".m-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".row.block03\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZEIGE|Anzeige|Werbung|WERBUNG/\"]]}]]}"],["{\"selector\":\".post-overview\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.YzqVVZ\",\"tasks\":[[\"has\",{\"selector\":\"span.wixui-rich-text__text\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\"div.text-asset.text-width\",\"tasks\":[[\"has\",{\"selector\":\"p.text-width\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.gridArea__teaserM\",\"tasks\":[[\"has\",{\"selector\":\"div.teaserBlock__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Anzeige\"],[\"spath\",\" > strong > a[target=\\\"_blank\\\"][rel=\\\"noopener\\\"] > picture\"]]}"],["{\"selector\":\".node.teaser\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".b-module\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}","{\"selector\":\".mfe-lex\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".node--article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"ANZEIGEN\"]]}]]}"],["{\"selector\":\".mleft-10\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box\"]]}","{\"selector\":\".mleft-10.small-font.light-grey\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box + .border-blue-2\"]]}"],["{\"selector\":\"article[id^=\\\"teaser-\\\"][data-placement]\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".col4\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Unterstützt durch:\"]]}]]}"],["{\"selector\":\".content-item-medium\",\"tasks\":[[\"has\",{\"selector\":\"data\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".content-item-small\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload .news-list\",\"tasks\":[[\"has\",{\"selector\":\"span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload > div\",\"tasks\":[[\"has\",{\"selector\":\".news-list span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}],[\"spath\",\" + hr\"]]}"],["{\"selector\":\".alice-teaser-list-item\",\"tasks\":[[\"has\",{\"selector\":\".alice-teaser-meta-text\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}"],["{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Native Advertising\"]]}","{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Publireportage\"]]}"],["{\"selector\":\".bg-gray-light\",\"tasks\":[[\"has\",{\"selector\":\"div.text-right\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".px-4.md\\\\:px-6.py-3.h-full.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\".mb-3.text-xs.leading-none.text-center\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ende===\"]]}"],["{\"selector\":\"form\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Download\"]]}]]}"],["{\"selector\":\".swiper\",\"tasks\":[[\"has\",{\"selector\":\".headline\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\".custom\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".recommender-wrapper\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"article[class^=\\\"dvs-ad-tyblqtres-uno\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}","{\"selector\":\"div[class^=\\\"dvbloqbasic\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".small-12.column\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"+ span\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".appetizer\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}]]}"],["{\"selector\":\"[data-test=\\\"mms-base-teaser\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}","{\"selector\":\"[data-test=\\\"mms-search-flagship-sba\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}","{\"selector\":\"[data-test=\\\"mms-search-showcase\\\"] + div\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"- Werbung -\"]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Kleinanzeigen\"]]}]]}"],["{\"selector\":\"[data-testid=\\\"home-brand-portal-section-container\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".teaser_container.teaser-htmlcode.relative.row\",\"tasks\":[[\"has\",{\"selector\":\".f1de-container-title\",\"tasks\":[[\"has-text\",\"Die besten Leasing-Deals\"]]}]]}"],["{\"selector\":\".introa_news\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".moduletable.text-center\",\"tasks\":[[\"has\",{\"selector\":\".bildunterschrift\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Sponsoren\"]]}"],["{\"selector\":\".outer-spacing--xxlarge-top\",\"tasks\":[[\"has-text\",\"Werbung von\"]]}","{\"selector\":\"a[class*=\\\"ArticleTeaserBox\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div.ov-subline\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".list_item\",\"tasks\":[[\"has\",{\"selector\":\".dachzeile\",\"tasks\":[[\"has-text\",\"Partnerzone\"]]}]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"span.banner-text + h4\",\"tasks\":[[\"has-text\",\"/Partner-Angebot|Angebote/\"]]}]]}"],["{\"selector\":\".services-item\",\"tasks\":[[\"has-text\",\"bei Amazon\"]]}"],["{\"selector\":\".postlist-item\",\"tasks\":[[\"has\",{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".content-view-containerbox\",\"tasks\":[[\"has-text\",\"SONDER-VERÖFFENTLICHUNG\"]]}"],["{\"selector\":\".rs-qa-product\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".fc_bloglist_item\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".mod_flexicontent_standard_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".moduletable\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-author-name\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".text-right.text-white.col-6\",\"tasks\":[[\"has-text\",\"präsentiert von\"]]}"],["{\"selector\":\".jeg_post.jeg_pl_md_2.pr.format-standard\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PR-INFO\"]]}]]}"],["{\"selector\":\".afl-widget-root\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Beliebt bei t-online\"]]}]]}"],["{\"selector\":\"div[id^=\\\"T-\\\"][onfocus^=\\\"A('zid=\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.article-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.article-tile__badge2\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\"div[id^=\\\"gridSuche_panRecord_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"gridSuche_lblUrl_\\\"]\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".small-12.column.space\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"--Anzeige--\"]]}]]}"],["{\"selector\":\".artikel-preview-content\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"-ANZEIGE-\"]]}]]}"],["{\"selector\":\"div[id][data-qa]\",\"tasks\":[[\"has\",{\"selector\":\".c-buelent-linkbox__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.ExtraPostBlock\",\"tasks\":[[\"has\",{\"selector\":\"div.post_block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}],[\"spath\",\":not(.with_rep)\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + button\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\".Button__Wrapper:has(a[href^=\\\"https://x.chip.de/linktrack/button/\\\"][href*=\\\"&type=text&\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".Teaser--L\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".dlcharts + div:not(.List)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".fb-align-content-start:has(a[href^=\\\"https://x.chip.de/linktrack/button/\\\"][href*=\\\"&type=text&\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ft-charts-main > div:not(.List):not(.caps)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"section[data-vr-zone=\\\"hp-neongelb\\\"] [data-vr-zone]\",\"action\":[\"remove\",\"\"]}"]];

const hostnamesMap = new Map([["wallstreet-online.de",0],["stol.it",1],["alles-mahlsdorf.de",2],["android-hilfe.de",3],["apfeltalk.de",4],["avguide.ch",5],["back-intern.de",6],["baur.de",7],["bergsteiger.de",8],["berliner-kurier.de",9],["berliner-zeitung.de",10],["berlinstadtservice.de",11],["bitreporter.de",12],["carpediem.life",13],["celleheute.de",14],["computerbase.de",15],["computerbild.de",16],["cyclingmagazine.de",17],["dkamera.de",18],["ebay.de",19],["emotion.de",20],["fazemag.de",21],["finanzen.net",22],["focus.de",23],["games.ch",24],["gamestar.de",25],["giga.de",26],["gofeminin.de",27],["handelszeitung.ch",28],["hardwareluxx.de",29],["heise.de",30],["ibooks.to",31],["imsueden.de",32],["kajak-magazin.com",33],["koeln.de",35],["la-palma24.info",36],["lausitz-tv.de",37],["lessentiel.lu",38],["linkedin.com",39],["marbacher-zeitung.de",40],["mediamarkt.at",41],["mediamarkt.de",[41,42]],["saturn.de",41],["meissen-fernsehen.de",43],["mmnews.de",44],["mobile.de",45],["motorsport-total.com",46],["notebookcheck.com",47],["nur-positive-nachrichten.de",48],["o-sport.de",49],["onvista.de",50],["pctipp.ch",51],["pcwelt.de",52],["pollenflug.de",53],["produktion.de",54],["report-d.de",55],["rewe.de",56],["satvision.de",57],["seo-suedwest.de",58],["skodacommunity.de",59],["smartphonemag.de",60],["sportdeutschland.tv",61],["swz.it",62],["t-online.de",[63,64]],["www-t--online-de.cdn.ampproject.org",64],["tag24.de",65],["tiger.ch",66],["tonight.de",67],["um-tv.de",68],["unicum.de",69],["welt.de",70],["winfuture-forum.de",71],["zentrum-der-gesundheit.de",72],["chip.de",73]]);

const entitiesMap = new Map([["kaufland",34]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
