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

// nor-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[770983,"#ad_superboard:not(html, body, :empty)"],[7201605,"#ad_topp:not(html, body, :empty)"],[10569589,"#no-familieklubben-wde-front_topboard:not(html, body, :empty)"],[13874043,".annonselenker:not(html, body, :empty)"],[1774911,".sponset-innlegg:not(html, body, :empty)"],[95457,".annonsetag:not(html, body, :empty)"],[6584190,".jubii-adunit:not(html, body, :empty)"],[11160062,".full-width.daily-offers:not(html, body, :empty)"],[7566783,".gofollow:not([href*=\"nyhetsbrev\"], [href*=\"radio\"], html, body, :empty)"],[10193688,".ad-paied-cont-front:not(html, body, :empty)"],[13264006,".spklw-post-attr[data-recommendation-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-recommendation-type=\"sprinkleit\"]:not(html, body, :empty)"],[16320214,".native-ad-kicker:not(html, body, :empty)"],[2191457,".content-adunit:not(html, body, :empty)"],[16427965,".multiple-vevlysingar:not(html, body, :empty)"],[1890419,".full-width-vevlysingar:not(html, body, :empty)"],[4714437,".annonceringBox:not(html, body, :empty)"],[10742957,".rotating-junglebogen:not(html, body, :empty)"],[5054522,"#junglebogen-left:not(html, body, :empty)"],[13899202,"#junglebogen-right:not(html, body, :empty)"],[13873876,".annonseheader:not(html, body, :empty)"],[2058403,".reklame-spot:not(html, body, :empty)"],[10409767,"#ctl00_phMain_lnkAd:not(html, body, :empty)"],[14921966,"#ctl00_phMain_divParallax:not(html, body, :empty)"],[14403011,".nf-c-adblock-title:not(html, body, :empty)"],[5447193,".native-advertisement:not(html, body, :empty)"],[1393566,".commercial-teaser:not(html, body, :empty)"],[3704832,"#newswire-banner:not(html, body, :empty)"],[16280828,"#reklamebolk1wrap:not(html, body, :empty)"],[6300842,".lp_p2_api_ad:not(html, body, :empty)"],[13546049,"#art-pomimuko:not(html, body, :empty)"],[11684819,".currencyaugl:not(html, body, :empty)"],[4307399,".row > div[class=\"top-fixed-wrapper\"]:not(body, :empty)"],[3063474,".section-module.blog-frontpage-module.margin-top-10.row:not(html, body, :empty)"],[12854519,".splitblock__column > .block > .adblock:not(:empty)"],[6525228,".bannerizor-banner:not(html, body, :empty)"],[14895800,".mowgli-right:not(html, body, :empty)"],[10803351,".mowgli-inread:not(html, body, :empty)"],[14536054,".top-mowgli:not(html, body, :empty)"],[13978040,".main-article-right-container > div[id][style^=\"margin-bottom:\"]:not(body, :empty)"],[14176282,"#front-page-app .row > #box2-container:not(:empty)"],[3102908,".eiker-adlabel:not(html, body, :empty)"],[2902636,".hringekja__wrapper:not(html, body, :empty)"],[2885516,".adsbymanatee:not(html, body, :empty)"],[14130554,".ad-front-310x400:not(html, body, :empty)"],[16722370,"#BannerEniro:not(html, body, :empty)"],[5491011,"#GoogleAdsenseWideSkyscraper:not(html, body, :empty)"],[16094146,"#GoogleAdsenseWideSkyscraperLeft:not(html, body, :empty)"],[8986036,"#viewItemAdsenseBanner:not(html, body, :empty)"],[6221065,"#viewItemEniroBanner:not(html, body, :empty)"],[3968383,".block-AnnonceBlocksAdform:not(html, body, :empty)"],[8056968,".clearfix.top_banner_container:not(html, body, :empty)"],[15029605,".adform__topbanner:not(html, body, :empty)"],[2472379,".googlepublisherpluginad:not(html, body, :empty)"],[3806163,".polarisMarketing:not(html, body, :empty)"],[4308297,".sub.menu-primary.default.polarisMenu.widget:not(html, body, :empty)"],[11442497,".bazaarSpinnerContainer:not(html, body, :empty)"],[1020276,"#jobads-topbanner:not(html, body, :empty)"],[2675664,".tv2-ad:not(html, body, :empty)"],[10454589,".auglysing_ticker:not(html, body, :empty)"],[2434415,".premium-spot:not(html, body, :empty)"],[10399714,".annonser:not(html, body, :empty)"],[2230522,".mh-loop-ad:not(html, body, :empty)"],[6970620,".ticker-ad:not(html, body)"],[1701166,".wallpaper > .horseshoe:not(body, :empty)"],[7040952,"#GoogleAdsensePanorama:not(html, body, :empty)"],[11642252,"#GoogleAdsenseFooter:not(html, body, :empty)"],[13591064,".poster-placeholder:not(html, body, :empty)"],[15137038,".banners.post_sticky:not(html, body, :empty)"],[1647817,".ad[data-config-name]:not(html, body, :empty),\n.ad.text-center:not(html, body, :empty),\n.ad[id^=\"netboard_\"]:not(html, body, :empty),\n.ad[id^=\"skyscraper\"]:not(html, body, :empty),\n.ad.topBanner:not(html, body, :empty)"],[700779,"#sponsorstripe:not(html, body, :empty)"],[1142053,"#adBlinkContainer:not(html, body, :empty)"],[3292129,"#innocode-ad:not(html, body, :empty)"],[3280439,".ads__grid-item:not(html, body, :empty)"],[5043306,".undirsidaad:not(html, body, :empty)"],[14548621,".am-page-ad:not(html, body, :empty)"],[13634616,".adnuntius-ad:not(html, body, :empty)"],[1738756,".intersect-ads-load:not(html, body, :empty)"],[8115459,".mobile-banner-widget:not(html, body, :empty)"],[12996262,".widgerFullWidth:not(html, body, :empty)"],[15198096,".desktop-banner-widget:not(html, body, :empty)"],[3635169,".featuresplash-container:not(html, body, :empty)"],[4145002,".ad-cookie:not(html, body, :empty)"],[5166628,".adform__text:not(html, body, :empty)"],[130684,".augl-container:not(html, body, :empty)"],[4351864,".hestesko-section:not(html, body, :empty)"],[3556819,"#top-ads-container:not(html, body, :empty)"],[8144273,".vertical-x1-ad > .column--big:not(body, :empty)"],[1491634,".grid > div[class=\"flow-banner\"]:not(body)"],[16297344,".wg-banner:not(html, body, :empty)"],[12198803,".navigation__advertisement:not(html, body, :empty)"],[8435751,".article__content > .article__adblock:not(body, :empty)"],[9819993,".article__body > .article__adblock:not(body, :empty)"],[8123074,".block > .adblock--panorama:not(body, :empty)"],[4868061,".splitblock__column--2 > .block > .adblock:not(:empty)"],[10839172,"#toppbanner:not(html, body, :empty)"],[11627846,".ehm-megaboard:not(html, body, :empty)"],[11389674,".maelstrom-skyscraper:not(html, body, :empty)"],[3667512,".forum-ad-box:not(html, body, :empty)"],[1772239,".maelstrom-topbanner:not(html, body, :empty)"],[13891576,".skyscraper-ads-container:not(html, body, :empty)"],[12714204,".adguru-modal-popup:not(html, body, :empty)"],[1005346,"#wallpaperAds:not(html, body, :empty)"],[4186807,".container.container-topbanner:not(html, body, :empty)"],[8604642,".ad-iframe-nt:not(html, body, :empty)"],[16681827,".arcad-block-container:not(html, body, :empty)"],[2526427,".adunit-content-marketing:not(html, body, :empty)"],[15733115,".nf-adholder:not(html, body, :empty)"],[12855922,".single-adrotate:not(html, body, :empty)"],[3642543,".banner-container-monster-topscroll:not(html, body, :empty)"],[6365613,"#mobiltoppbanner:not(html, body, :empty)"],[8477629,".tag-page-ad-container:not(html, body, :empty)"],[8630573,".scrolling-side-ad-container:not(html, body, :empty)"],[1899684,".ticker-ad-wrapper:not(html, body, :empty)"],[6580885,"#ad-sidefloat-container:not(html, body, :empty)"],[16723478,".topbanner-desktop:not(body, html, :empty)"],[8257523,".topscroll-placeholder:not(body, html, :empty)"],[10924413,"#addemam-wrapper:not(:empty)"],[1392582,"div.inArticleBanner"],[2279374,"div#box-over-content-revive"],[10716011,"div.gridnetboard"],[5739370,"div.tc_adwrap"],[6396207,"div.c-lw-adContainer:not(:empty)"],[12248634,".e-banner:not(html, body, :empty)"],[5409974,".g-single:not(html, body, :empty)"],[10110979,".grid-article-sponsored:not(html, body, :empty)"],[10935244,".top-poster-wrap:not(html, body, :empty)"],[6730487,".yb-top-spot:not(html, body, :empty)"],[593663,".nf-o-moduleblock-module:has(> .nf-o-annonse)"],[7587443,"div.nf-js-scrollable-item:not(:has(*))"],[11346282,".component__pubble-banner:not(html, body, :empty)"],[15500062,".tx-dce-container:not(html, body, :empty)"],[13351513,".ad-topbanner-container:not(html, body, :empty)"],[5287950,"#related-articles + div[class^=\" hyperion-css-\"]:not(html, body, :empty)"],[15614354,".bonnier-ad:not(html, body)"],[296444,".skille:not(html, body)"],[4761803,".Article-header-body::before"],[4703172,".paywall-fade:not(html, body)"],[8920748,".polarisSpid.widget::before"],[9065805,".CTA-body-faded:not(html, body)"],[3108703,".faded-article-content::after"],[14803355,".paywall-gradient:not(html, body)"],[1491613,"#ntwidget:not(html, body, :empty)"],[7680447,".ntbox-btn:not(html, body, :empty)"],[7680229,".ntbox-tab.bg-primary:not(html, body, :empty)"],[14809751,"#sportspill-box-top:not(html, body, :empty)"],[418156,".sportspill-container[href*=\"lotto\"]:not(html, body, :empty)"],[10833936,"#topBanners"],[15921492,"#ad-fullbanner2-billboard-outer"],[6732683,"#ad-topper"],[4889194,"#ad_300X250"],[10874305,"#ad_336_singlebt"],[4893611,"#ad_728h"],[8461465,"#ad_google"],[9613041,"#advertRightTopPosition"],[14093011,"#adxtop"],[15222292,"#atvcap + #tvcap > .mnr-c > .commercial-unit-mobile-top"],[3732596,"#banner-top-right"],[1321209,"#BannerBox"],[16481768,"#bannerfloat22"],[5104490,"#bb_banner,\n#bp_banner"],[14030800,"#blox-top-promo"],[855028,"#campaign-banner"],[6930007,"#chp_ads_blocker-modal"],[14572021,"#chp_ads_blocker-overlay"],[4019135,"#close-fixedban"],[3421114,"#extensible-banner"],[507021,"#fb_300x250"],[350386,"#footer-banner"],[3379986,"#scorecard-ad"],[14612087,"#soldakayan"],[7968194,"#taw > .med + div > #tvcap > .mnr-c:not(.qs-ic) > .commercial-unit-mobile-top"],[3703378,"#topstuff > #tads"],[15365322,"#total_banner"],[11762369,"#videopageadblock"],[15491279,".Ad__Wrapper:not(html, body, :empty)"],[4022014,".ad_register_prompt:not(html, body, :empty)"],[7821549,".ad_showthread_firstpost_start_placeholder:not(html, body, :empty)"],[1084083,".adace-popup-detector:not(html, body, :empty)"],[11329633,".add_300x250:not(html, body, :empty)"],[10516335,".adheader403:not(html, body, :empty)"],[7380607,".b-header-banner:not(html, body, :empty)"],[10626508,".baners_block:not(html, body, :empty)"],[15239526,".banner_header:not(html, body, :empty)"],[7325887,".banners-middle:not(html, body, :empty)"],[14031487,".banners_block:not(html, body, :empty)"],[9036469,".BetterJsPopOverlay:not(html, body, :empty)"],[13905653,".breakout-ad:not(html, body, :empty)"],[8443833,".commercial-unit-mobile-bottom:not(html, body, :empty)"],[7385331,".commercial-unit-mobile-top:not(html, body, :empty),\n.commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > .vci,\n.commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > div > .vci,\n.commercial-unit-mobile-top > .v7hl4d,\n.commercial-unit-mobile-top > div[data-pla=\"1\"]"],[4609217,".demo-wrapper[style=\"display:none;\"] + div.fadeInDown[id]"],[1917293,".gmr-bannerpopup:not(html, body, :empty)"],[5762351,".happy-footer:not(html, body, :empty)"],[15927351,".happy-player-beside:not(html, body, :empty)"],[6295911,".idmuvi-topbanner:not(html, body, :empty)"],[3829868,".idmuvi-topbanner-aftermenu:not(html, body, :empty)"],[12841869,".innerBanner:not(html, body, :empty)"],[4293639,".jetblocker-wrapper:not(html, body, :empty)"],[4293535,".jetblocker_overlay:not(html, body, :empty)"],[328208,".loop_google_ad:not(html, body, :empty)"],[10060616,".main_promo_image_container:not(html, body, :empty)"],[11024238,".menu-ads:not(html, body, :empty)"],[12678276,".puFloatLine > #puFloatDiv"],[9145190,".reclamTable:not(html, body, :empty)"],[15982626,".remove-spots:not(html, body, :empty)"],[11805273,".roxot-dynamic:not(html, body, :empty)"],[2566477,".SC_TBlock:not(html, body, :empty)"],[7142018,".sidebar-ads-container:not(html, body, :empty)"],[12763588,".special-ads:not(html, body, :empty)"],[14368810,".sponsor-div:not(html, body, :empty)"],[14524676,".sponsored-home-page-inner:not(html, body, :empty)"],[8903879,".sponsored-items:not(html, body, :empty)"],[4553773,".stripper > a[href*=\"istripper\"] > img"],[5176035,".tjads:not(html, body, :empty)"],[13615975,".top-adv-app:not(html, body, :empty)"],[13780187,".top-banners:not(html, body, :empty)"],[2109169,".top-header-ads-mobile:not(html, body, :empty)"],[6582723,".top-r-ads:not(html, body, :empty)"],[13607640,".topbannerad:not(html, body, :empty)"],[2357174,".videojs-hero-overlay:not(html, body, :empty)"],[11698245,".widget-sidebar-right-banner:not(html, body, :empty)"],[15750901,".wpcnt > .wpa"],[14044656,"body > div#fixedban"]];
const genericExceptionSieve = [6886602,10884222,3589947,4770495,4938179,7872102,14507024,6903952,5914964,15950322,8447737,12487431,482206,371363,565055,7202248,5453559];
const genericExceptionMap = [["prisguiden.no",".prisguidePost:not(html, body, :empty)"],["sagat.no",".nf-o-annonse:not(html, body, :empty)"],["bygdebladet.no",".nf-o-annonse:not(html, body, :empty)"],["basketnews.lt",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["basketnews.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["hero-magazine.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["ut.no",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["flasharch.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["rockefeller.no",".annonse:not(.article-entity, html, body, :empty)"],["tipsbladet.no",".td-a-rec:not(html, body, :empty)"],["nytid.no",".td-a-rec:not(html, body, :empty)"],["krom.is",".share-container"],["lampegiganten.dk","#newsletter-overlay"],["lampegiganten.no","#newsletter-overlay"],["tikkio.com",".mfp-ready"],["eyjar.net",".side_ads"],["check-in.dk",".home-ads\n.ads-top"],["babyklar.dk",".ad-cell\n.ads300-250"],["findbolig.nu",".advertLink"],["sosialurin.fo",".ads-banner"],["norsk-tipping.no",".norsk-tipping-widget:not(html, body, :empty)"],["tipster.no",".norsk-tipping-widget:not(html, body, :empty)"],["online.no",".norsk-tipping-widget:not(html, body, :empty)"],["epost.telenor.no",".norsk-tipping-widget:not(html, body, :empty)"],["com",".norsk-tipping-widget:not(html, body, :empty)"],["ukenr.no",".bannerad"],["ugenr.dk",".bannerad"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
