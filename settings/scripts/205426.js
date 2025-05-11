(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://fast.appcues.com/generic/main/6.14.0/appcues.main.2ce355b3fafb7082979d9cb4a75f15dc4e39c75e.js";
    var ACCOUNT_DETAILS = {"GENERIC_BUNDLE_DOMAIN":"https://fast.appcues.com","GENERIC_BUNDLE_PATH":"/generic/main/6.14.0/appcues.main.2ce355b3fafb7082979d9cb4a75f15dc4e39c75e.js","RELEASE_ID":"2ce355b3fafb7082979d9cb4a75f15dc4e39c75e","VERSION":"6.14.0","account":{"buffer":0,"entitlements":{"enableCTTEventIntegrations":false},"gates":{"enableCTTEventIntegrations":false,"enableClientSideEventIntegrations":false},"isTrial":false,"isTrialExpired":true,"skipAutoProperties":false,"stripQueryParams":null,"stripePlanId":"price_1QxVOu2AzylS9N6ADp4H2fBO"},"accountId":"205426","custom_events":[],"integrations":{"segment":{"createdAt":null,"createdBy":null,"integrationId":"205426:segment","isEnabled":true,"type":"segment","updatedAt":null,"updatedBy":null},"slack-integration":{"createdAt":null,"createdBy":null,"integrationId":"205426:slack-integration","isEnabled":true,"type":"slack-integration","updatedAt":null,"updatedBy":null}},"styling":{"globalBeaconColor":"#cbfdab","globalBeaconStyle":"hotspot","globalHotspotAnimation":"hotspot-animation-pulse","globalHotspotStyling":"","globalStyling":"\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success, .appcues-progress-bar-success {\n    background-color: #2d2d2d;\n}\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #3f3f3f;\n}\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #3e3e3e !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    font-size: 14px;\n}\n\n\n.appcues-actions-right .appcues-button {\n    color: #ffffff;\n}\n\n\n.appcues-actions-right .appcues-button:hover {\n    color: #ffffff !important;\n}\n\n\n.appcues-actions-left >  .appcues-button {\n    background-color: #ffffff;\n}\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #ffffff;\n}\n\n\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #fbfbfb !important;\n}\n\n\n.appcues-actions-left .appcues-button {\n    color: #2d2d2d;\n}\n\n\n.appcues-actions-left .appcues-button:hover {\n    color: #2d2d2d !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    border-radius: 3px;\n}\n\n\nbody, appcues cue, .tooltip .content {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\nbody h1, body h2, body h3, body h4, body h5,\nappcues cue h1, appcues cue h2, appcues cue h3, appcues cue h4, appcues cue h5,\n.tooltip .content h1, .tooltip .content h2, .tooltip .content h3, .tooltip .content h4, .tooltip .content h5 {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\n  body, appcues cue, .tooltip .content {\n      color: #2d2d2d;\n  }\n  \n\n.tooltip .content .panel {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.tooltip .content .panel:before, .tooltip .content .panel:after {\n  height: 13px;\n  width: 13px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: none;\n  transform: rotate(45deg);\n}\n\n.tooltip .content .panel:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n}\n\n.tooltip .content.content-top .panel:before, .tooltip .content.content-top .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-top .panel:before,\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:before,\n.tooltip .content.content-top-right .panel:after {\n  margin-top: -6px;\n}\n\n.tooltip .content.content-bottom .panel:before, .tooltip .content.content-bottom .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-bottom .panel:before,\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  margin-bottom: -6px;\n}\n\n.tooltip .content.content-right .panel:before, .tooltip .content.content-right .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-right .panel:before,\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after {\n  margin-right: -6px;\n}\n\n.tooltip .content.content-left .panel:before, .tooltip .content.content-left .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-left .panel:before,\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  margin-left: -6px;\n}\n\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after {\n  right: 10px;\n}\n\n.tooltip .content.content-top-right.panel:before,\n.tooltip .content.content-top-right .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  left: 10px;\n}\n\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  top: 10px;\n}\n\n.tooltip .content.content-right-top.panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after {\n  bottom: 10px;\n}\n\n.tooltip .content.content-top .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:after {\n  top: 100%;\n}\n\n.tooltip .content.content-bottom .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:after {\n  bottom: 100%;\n}\n\n.tooltip .content.content-right .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:after {\n  right: 100%;\n}\n\n.tooltip .content.content-left .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:after {\n  left: 100%;\n}\n\n\n.tooltip .content .panel {\n  color: #2d2d2d;\n}\n\n.tooltip h1, .tooltip h2, .tooltip h3, .tooltip h4, .tooltip h5 {\ncolor: #2d2d2d;\n}\n\n  .panel.panel-default {\n    margin-right: 3px;\n    margin-bottom: 2px;\n    border-radius: 2px;\n  }\n  \n\n  .panel.panel-default, .content .panel:after {\n    box-shadow: 1px 1px 2px hsla(0,0%,13%,.6);\n  }\n  \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        background-color: #2d2d2d;\n      }\n      \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        opacity: 0.25;\n      }\n      \n\nappcues cue {\n    background: #ffffff\n}\n\n\nappcues cue *, appcues cue {\n    color: #2d2d2d\n}\n\n\n        .appcues-actions-right > .appcues-button,  .appcues-actions-left > .appcues-button {\n            border-radius: 4px;\n        }\n    \n/*\n\tIt's dangerous to go alone! Take this.\n\n\t(Not actually dangerous, but hopefully these selectors \n\twill help you make your flows look beautiful!)\n\n        \t   /|\n\t          / |\n\t         /  |\n\t        /   |\n\t       /    |\n\t      /     |\n\t      \\     |\n\t   /|  \\    |\n\t  / |   \\   |\n\t /  |    \\  |\n\t/___|     \\_| \n\n\tAPPCUES CSS SELECTORS\n*/\n\n/************************************/\n/* Appcues Base Presets */\n\nappcues .appcues-actions-left .appcues-button { padding-left: 18px; }\nappcues .appcues-actions-left .appcues-button:before { content: none; }\n\n/*** Adjust style of progress bar */\n\nappcues .appcues-progress { background-color: white; height: 7px; border: 0; }\nappcues .appcues-progress .appcues-progress-bar { transition:width 0.5s ease 0.07s; }\nappcues .appcues-progress .appcues-progress-bar:not([aria-valuenow='100']) { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n\n/*** Adjust margins & padding */\nappcues cue { min-height: 100px !important; padding: 22px 54px 82px; }\nappcues cue .apc-hero { margin: -22px -54px 0; }\n/* Fix up Hero typography */\nappcues cue .apc-hero h2 { font-size: 18px; font-weight: bold; }\nappcues[data-pattern-type=modal] cue {\n    box-shadow: 0 0 18px rgba(0,0,0,0.25);\n}\n.tooltip .panel { padding: 9px 12px 10px; }\n\n/*** Adjust typography */\n\n@font-face {\n  font-family: 'Abcdiatype-Light';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb23_ABCDiatype-Light.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb20_ABCDiatype-Light.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb22_ABCDiatype-Light.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb24_ABCDiatype-Light.ttf') format('truetype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb21_ABCDiatype-Light.svg') format('svg');\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n  letter-spacing: -1pt;\n}\n@font-face {\n  font-family: 'Hwcigars';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb3f_HWCigars-Light.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb3d_HWCigars-Light.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb3e_HWCigars-Light.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb3b_HWCigars-Light.ttf') format('truetype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb3c_HWCigars-Light.svg') format('svg');\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: 'Abcdiatype-Medium';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb69_ABCDiatype-Medium.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb65_ABCDiatype-Medium.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb68_ABCDiatype-Medium.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb67_ABCDiatype-Medium.ttf') format('truetype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb66_ABCDiatype-Medium.svg') format('svg');\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n  letter-spacing: -1pt;\n}\n@font-face {\n  font-family: 'Abcdiatype-Regular';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6d_ABCDiatype-Regular.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6a_ABCDiatype-Regular.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6e_ABCDiatype-Regular.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6c_ABCDiatype-Regular.ttf') format('truetype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6b_ABCDiatype-Regular.svg') format('svg');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n  letter-spacing: -1pt;\n}\n@font-face {\n  font-family: 'Abcdiatype';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6d_ABCDiatype-Regular.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6a_ABCDiatype-Regular.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6e_ABCDiatype-Regular.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6c_ABCDiatype-Regular.ttf') format('truetype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbb6b_ABCDiatype-Regular.svg') format('svg');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n  letter-spacing: -1pt;\n}\n@font-face {\n  font-family: 'Abcdiatype-Bold';\n  src: url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbc1c_ABCDiatype-Bold.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbc1e_ABCDiatype-Bold.eot') format('embedded-opentype'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbc1b_ABCDiatype-Bold.woff') format('woff'), url('https://uploads-ssl.webflow.com/663c2dfea25e008f2afbb7ed/663c2dfea25e008f2afbbc1d_ABCDiatype-Bold.svg') format('svg');\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n  letter-spacing: -1pt;\n}\n\ncue *, .tooltip * {\nfont-family: 'Abcdiatype-Regular' !important;\n}\n\ncue h1, cue h2, .tooltip h1, .tooltip h2 {\nfont-family: 'Hwcigars' !important;\n}\n\nappcues cue *, appcues cue, .rich-text p {\n  color:#6C6C6C;\n}\n\np a,  .rich-text p a {\n  color:#2d2d2d !important;\n  text-decoration: underline !important;\n}\n\np a:hover,  .rich-text p a:hover {\n  color:#6C6C6C !important;\n  text-decoration: underline !important;\n}\n\nh1, h2, h3, h4, h5, h6, p a, .rich-text p a, appcues cue label {\n  color:#2d2d2d !important;\n}\n\n.tooltip .panel .appcues-skip {\n  color:#757575 !important;\n}\n\nappcues cue h1, .tooltip h1 { font-weight: 200; font-size: 32px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h2, .tooltip h2 { font-weight: 400; font-size: 24px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h3, .tooltip h3 { font-weight: 600; letter-spacing: -0.01em; font-size: 20px; -webkit-font-smoothing:antialiased; }\nappcues cue h4,h5 { letter-spacing: -0.01em; margin-top: 0.75em; -webkit-font-smoothing:antialiased; }\np, li { letter-spacing: -0.02em; line-height: 1.6em; }\n\n/*** Adjust links in content */\nappcues cue section a[data-step], appcues cue section a[href], .tooltip p a[data-step], .tooltip p a[href] {\n    color: inherit;\n    text-decoration:underline;\n}\nappcues cue section a[data-step]:hover, appcues cue section a[href]:hover, .tooltip p a[data-step]:hover, .tooltip p a[href]:hover {\n    color: inherit;\n}\n\n/*** Adjust skip X */\nappcues .appcues-skip a { background: none; right: 6px; font-size: 28px; }\n.tooltip .panel .appcues-skip { color: #ccc; }\n\n/* End Appcues Base */\n/************************************/\n\n/*___Buttons and Links___*/\n.appcues-actions-right {\n\t/*[The section of the button row which hold the 'Next' or righthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in modals/slideouts]*/\n}\n\n\n.appcues-actions-left {\n\t/*[The section of the button row which hold the 'Prev' or lefthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in modals/slideouts]*/\n}\n\n.appcues-actions {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.appcues-actions-right.appcues-actions-full-row.appcues-actions-align-center, .appcues-actions .appcues-actions-left, .appcues-actions .appcues-actions-right  {\n  background: linear-gradient(206deg, #CBFDAB 22.52%, #D4FDAB 32.96%, #DEFAB7 42.6%, #F0F9C6 50.64%, #DEFAB7 59.74%, #B3F7B5 69.65%, #97F3BF 78.21%, #7EEAC3 86.55%, #29C7C1 96.59%);\n  padding:1px;\n  border-radius:4px;\n  text-decoration:none !important;\n  width:auto !important;\n}\n\n.appcues-actions-left {\n  margin-right:auto;\n}\n\n.appcues-button {\n  font-weight:400;\n  position:relative;\n  border-radius:4px;\n  text-decoration:none !important;\n}\n\n.appcues-button-success {\n\t/*[Selector for the 'Next' buttons (buttons which advance the step of the flow).]*/\n}\n\n.appcues-progress-bar {\nbackground: linear-gradient(206deg, #CBFDAB 22.52%, #D4FDAB 32.96%, #DEFAB7 42.6%, #F0F9C6 50.64%, #DEFAB7 59.74%, #B3F7B5 69.65%, #97F3BF 78.21%, #7EEAC3 86.55%, #29C7C1 96.59%);\n}\n\n.panel .panel-content-actions .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n}\n\n.panel .panel-content-actions .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in tooltips/hotspots] (Hide these tips)*/\n}\n\nappcues .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in modals/slideouts] (X button to close)*/\n}\n\n\nappcues[data-pattern-type=shorty] cue {\n\t/*[Selector for slideouts specifically]*/\n}\n\nappcues[data-pattern-type=modal] cue {\n\t/*[Selector for modals specifically]*/\n}\n\n\n/*___Modals and Slideouts___*/\n\nappcues {\t\n\t/*[This element wraps the entire modal or slideout.]*/\n}\n\nappcues cue {\n\t/*[This is where the main content for modals and slideouts lives.]*/\n}\n\nappcues .appcues-backdrop[data-pattern-type=modal] {\n\t/*[The backdrop (darkened background) for modals.]*/\n}\n\nappcues .appcues-progress {\n\t/*[The progress bar which indicates how far a user is in the flow]*/\n}\n\nappcues cue .apc-hero {\n\t/*[This is the selector for a hero image.]*/\n}\n\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n}\n\n\n\n/*___Hotspots and Tooltips___*/\n\n.tooltip .content .panel {\n\t/*[This is selector for the tooltip panel itself. The styles to the arrow can be accessed using the ::before selector (see below)]*/\n}\n\n.tooltip .content .panel .panel-content {\n\t/*[This is the selector for any content within the tooltip. This applies to both body text and the actions row.]*/\n}\n\n.tooltip .content .panel .panel-content-actions {\n\t/*[The specific container selection for the row with buttons/actions.]*/\n}\n\n\n    appcues .appcues-actions-right .appcues-button { padding-right: 18px; }\n    appcues .appcues-actions-right .appcues-button:after { content: none; }\n    appcues .appcues-actions-left .appcues-button { padding-left: 18px; }\n    appcues .appcues-actions-left .appcues-button:before { content: none; }","id":"da241a45-d882-4268-b514-ab85cc8f20cb","theme":{"css":"\n:host {\n --typekit-id: ;\n--general-header-font: 'Open Sans', sans-serif;\n--general-header-font-url: https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i;\n--general-body-font: 'Open Sans', sans-serif;\n--general-body-font-url: https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i;\n--general-body-font-color: #2d2d2d;\n--button-font-size: 14px;\n--button-border-radius: 4px;\n--button-primary-background-color: #2d2d2d;\n--button-primary-border-color: transparent;\n--button-primary-border-width: 0px;\n--button-primary-color: #ffffff;\n--button-primary-hover-border-color: transparent;\n--button-primary-hover-border-width: 0px;\n--button-primary-hover-background-color: #3e3e3e;\n--button-primary-hover-color: #ffffff;\n--button-secondary-background-color: #ffffff;\n--button-secondary-border-color: transparent;\n--button-secondary-border-width: 0px;\n--button-secondary-color: #2d2d2d;\n--button-secondary-hover-border-color: transparent;\n--button-secondary-hover-border-width: 0px;\n--button-secondary-hover-background-color: #fbfbfb;\n--button-secondary-hover-color: #2d2d2d;\n--patterns-modal-color: #2d2d2d;\n--patterns-modal-background-color: #ffffff;\n--patterns-modal-backdrop-color: #2d2d2d;\n--patterns-modal-backdrop-opacity: 0.25;\n--patterns-tooltip-color: #2d2d2d;\n--patterns-tooltip-background-color: #ffffff;\n--patterns-tooltip-border-radius: 2px;\n--patterns-tooltip-shadow-distance-x: 1px;\n--patterns-tooltip-shadow-distance-y: 1px;\n--patterns-tooltip-shadow-blur: 2px;\n--patterns-tooltip-shadow-color: hsla(0,0%,13%,.6);\n--patterns-tooltip-beacon-color: #cbfdab;\n}","json":{"button":{"borderRadius":"4px","fontSize":"14px","primary":{"backgroundColor":"#2d2d2d","borderColor":"transparent","borderWidth":"0px","color":"#ffffff","hover":{"backgroundColor":"#3e3e3e","borderColor":"transparent","borderWidth":"0px","color":"#ffffff"}},"secondary":{"backgroundColor":"#ffffff","borderColor":"transparent","borderWidth":"0px","color":"#2d2d2d","hover":{"backgroundColor":"#fbfbfb","borderColor":"transparent","borderWidth":"0px","color":"#2d2d2d"}}},"general":{"bodyFont":"'Open Sans', sans-serif","bodyFontColor":"#2d2d2d","bodyFontUrl":"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i","headerFont":"'Open Sans', sans-serif","headerFontUrl":"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i"},"patterns":{"modal":{"backdropColor":"#2d2d2d","backdropOpacity":0.25,"backgroundColor":"#ffffff","color":"#2d2d2d"},"tooltip":{"backgroundColor":"#ffffff","beacon":{"color":"#cbfdab"},"borderRadius":"2px","color":"#2d2d2d","shadow":{"blur":"2px","color":"hsla(0,0%,13%,.6)","distance":{"x":"1px","y":"1px"}}}},"typekitId":""}},"typekitId":""}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;
    var isBootstrapped = false;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.styling,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account,
      events: ACCOUNT_DETAILS.custom_events
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "loadLaunchpad",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "initRudderstack",
        "initBraze",
        "initFullStory",
        "initHotjar",
        "initLogRocket",
        "group",

        // Methods solely for the injectable
        "injectContent",
        "injectStyles",
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            if (isBootstrapped) {
              self.Appcues[method].apply(self.Appcues, args);
            } else {
              args.unshift(method);
              Appcues.push(args);
            }
            return self.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          if (isBootstrapped) {
            return self.Appcues[key].apply(self.Appcues, args);
          } else {
            return new Promise(function(resolve, _reject) {
              args.unshift(resolve);
              args.unshift(key);
              Appcues.push(args);
            });
          }
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");

        bundleScript.crossOrigin = "anonymous";
        bundleScript.integrity = "sha256-houPU+B3fQB4YxMDEEN5XZcZugO5avPYr0+tOacOiXo=";

        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            isBootstrapped = true;
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
