// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "70",

      macros: [
        { function: "__e" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "device-source" },
        {
          function: "__k",
          vtp_decodeCookie: false,
          vtp_name: "device-referrer",
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "user_id" },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 4],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_defaultValue: "undefined",
          vtp_map: [
            "list",
            ["map", "key", ".*#Pakets", "value", "pakets"],
            ["map", "key", ".*#how-it-works-video.*", "value", "how_it_works"],
            ["map", "key", ".*#how-to-start.*", "value", "how_to_start"],
            ["map", "key", ".*#Form-Request.*", "value", "form_request"],
            ["map", "key", ".*#FAQ.*", "value", "faq"],
            [
              "map",
              "key",
              ".*t\\.me\\/andre_BinaryX.*",
              "value",
              "write_us_telegram",
            ],
            [
              "map",
              "key",
              ".*t\\.me\\/olegkurchenko.*",
              "value",
              "request_call",
            ],
            ["map", "key", ".*t\\.me\\/BinaryX.*", "value", "telegram"],
            ["map", "key", ".*twitter\\.com.*", "value", "twitter"],
            ["map", "key", ".*discord\\.com.*", "value", "discord"],
            [
              "map",
              "key",
              ".*t\\.me\\/BinaryXInvest_bot.*",
              "value",
              "get_offer_in_chatbot",
            ],
            ["map", "key", ".*mailto:.*", "value", "email"],
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollThreshold",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "approvedUserAddress",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "method",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "usdtAmount",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "amount",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "assetAddress",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "isNewPurchase",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "name",
        },
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "loginWallet",
        },
        {
          function: "__u",
          convert_case_to: 1,
          vtp_component: "QUERY",
          vtp_queryKey: "utm_campaign",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_case_to: 1,
          vtp_component: "QUERY",
          vtp_queryKey: "utm_medium",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_case_to: 1,
          vtp_component: "QUERY",
          vtp_queryKey: "utm_source",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_case_to: 1,
          convert_null_to: ["macro", 22],
          convert_undefined_to: ["macro", 22],
          vtp_component: "QUERY",
          vtp_queryKey: "custom_campaign",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_case_to: 1,
          convert_null_to: ["macro", 23],
          convert_undefined_to: ["macro", 23],
          vtp_component: "QUERY",
          vtp_queryKey: "custom_medium",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_case_to: 1,
          convert_null_to: ["macro", 24],
          convert_undefined_to: ["macro", 24],
          vtp_component: "QUERY",
          vtp_queryKey: "custom_source",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.errorMessage",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.errorUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.errorLineNumber",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.historyChangeSource",
          vtp_dataLayerVersion: 1,
        },
        { function: "__ctv" },
        { function: "__dbg" },
        { function: "__r" },
        { function: "__cid" },
        { function: "__hid" },
        {
          function: "__v",
          vtp_name: "gtm.videoProvider",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoDuration",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoVisible",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoCurrentTime",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollUnits",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollDirection",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleRatio",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleTime",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        { function: "__paused", vtp_originalTagType: "html", tag_id: 11 },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_103953592_62",
          tag_id: 12,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-HFY1S4EYJS",
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "device-source",
              "parameterValue",
              ["macro", 1],
            ],
            [
              "map",
              "parameter",
              "device-referrer",
              "parameterValue",
              ["macro", 2],
            ],
          ],
          vtp_userProperties: [
            "list",
            ["map", "name", "uid", "value", ["macro", 3]],
            ["map", "name", "user_id", "value", ["macro", 3]],
          ],
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "user_id", "parameterValue", ["macro", 3]],
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 15,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 17 },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: true,
          vtp_enableUrlPassthrough: true,
          vtp_acceptIncoming: true,
          vtp_linkerDomains: "BinaryX.com, webinar.BinaryX.com",
          vtp_formDecoration: false,
          vtp_urlPosition: "query",
          vtp_enableCookieOverrides: false,
          tag_id: 18,
        },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 19 },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11206615305",
          vtp_conversionLabel: "HW1XCPPu6skYEInC3d8p",
          vtp_rdp: false,
          vtp_url: ["macro", 8],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 20,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 21 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 22 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "BaliLP_Lead_Form_Submission",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 23,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11230656076",
          vtp_conversionLabel: "8M-ACOj3ucsYEMzsmOsp",
          vtp_rdp: false,
          vtp_url: ["macro", 8],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 24,
        },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 25 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 27 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventName: "bali_generate_lead",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 32,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventName: ["template", "bali_", ["macro", 10], "_click"],
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 37,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "percent_scrolled",
              "parameterValue",
              ["macro", 11],
            ],
          ],
          vtp_eventName: "scroll",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 40,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "approvedUserAddress",
              "parameterValue",
              ["macro", 12],
            ],
            ["map", "parameter", "method", "parameterValue", ["macro", 13]],
            ["map", "parameter", "usdtAmount", "parameterValue", ["macro", 14]],
            ["map", "parameter", "amount", "parameterValue", ["macro", 15]],
            [
              "map",
              "parameter",
              "assetAddress",
              "parameterValue",
              ["macro", 16],
            ],
            [
              "map",
              "parameter",
              "isNewPurchase",
              "parameterValue",
              ["macro", 17],
            ],
            ["map", "parameter", "name", "parameterValue", ["macro", 18]],
            ["map", "parameter", "cookie_uid", "parameterValue", ["macro", 3]],
          ],
          vtp_enhancedUserId: false,
          vtp_userProperties: [
            "list",
            ["map", "name", "uid", "value", ["macro", 3]],
            ["map", "name", "user_id", "value", ["macro", 3]],
          ],
          vtp_eventName: ["macro", 19],
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 42,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 59 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 60 },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_103953592_62",
          tag_id: 63,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11206615305",
          vtp_conversionLabel: "HW1XCPPu6skYEInC3d8p",
          vtp_rdp: false,
          vtp_url: ["macro", 8],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 65,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11230656076",
          vtp_conversionLabel: "8M-ACOj3ucsYEMzsmOsp",
          vtp_rdp: false,
          vtp_url: ["macro", 8],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 67,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventName: "bali_generate_lead_lp2",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 68,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 69 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 70 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_load: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "Click_ChatbotBtn_ThankYouPage_UA",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 72,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_load: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "Click_ChatbotBtn_ThankYouPage_RU",
          vtp_measurementIdOverride: "G-HFY1S4EYJS",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 73,
        },
        {
          function: "__cvt_103953592_62",
          metadata: ["map"],
          vtp_disablePushState: false,
          vtp_pixelId: "2915273678609788",
          vtp_standardEventName: "Lead",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 80,
        },
        {
          function: "__cvt_103953592_62",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "969733080923180",
          vtp_standardEventName: "PageView",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 81,
        },
        {
          function: "__cvt_103953592_62",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "969733080923180",
          vtp_standardEventName: "SubmitApplication",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 82,
        },
        {
          function: "__cvt_103953592_62",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "435297959197119",
          vtp_standardEventName: "PageView",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 83,
        },
        {
          function: "__cvt_103953592_62",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "435297959197119",
          vtp_standardEventName: "SubmitApplication",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 84,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_13",
          tag_id: 91,
        },
        { function: "__cl", tag_id: 92 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_29",
          tag_id: 93,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_31",
          tag_id: 94,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_36",
          tag_id: 95,
        },
        { function: "__hl", tag_id: 96 },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "50, 75",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "103953592_39",
          vtp_enableTriggerStartOption: true,
          tag_id: 97,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_71",
          tag_id: 98,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "103953592_74",
          tag_id: 99,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","iv27fvdp8g");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 34,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(b,e,f,g,c,a,d){b[c]=b[c]||function(){(b[c].a=b[c].a||[]).push(arguments)};b[c].l=1*new Date;for(a=0;a\u003Cdocument.scripts.length;a++)if(document.scripts[a].src===g)return;a=e.createElement(f);d=e.getElementsByTagName(f)[0];a.async=1;a.src=g;d.parentNode.insertBefore(a,d)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(97699334,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src="https://mc.yandex.ru/watch/97699334" style="position:absolute; left:-9999px;" alt=""\u003E\u003C/div\u003E\u003C/noscript\u003E\n\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 90,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.historyChange" },
        {
          function: "_eq",
          arg0: ["macro", 4],
          arg1: "https://t.me/BinaryXInvest_bot",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_eq", arg0: ["macro", 5], arg1: "email-form" },
        { function: "_cn", arg0: ["macro", 6], arg1: "bali.BinaryX.com" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_13($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: "^(wf-form-Email-Form|email-form)$",
        },
        { function: "_cn", arg0: ["macro", 9], arg1: "bali.BinaryX.com" },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_31($|,)))",
        },
        { function: "_cn", arg0: ["macro", 10], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_36($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.scrollDepth" },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_39($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "signup_new|purchase_succeed|signup_or_login|deposit|purchase_succeed|kyc_completed",
        },
        { function: "_cn", arg0: ["macro", 6], arg1: "/thank-ua" },
        {
          function: "_cn",
          arg0: ["macro", 6],
          arg1: "bali-offer.BinaryX.com",
        },
        { function: "_cn", arg0: ["macro", 6], arg1: "/thank-you" },
        {
          function: "_cn",
          arg0: ["macro", 4],
          arg1: "https://bot.BinaryX.com/start?t=bali_offer_lp2,ua,fn1",
        },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_74($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 4],
          arg1: "https://bot.BinaryX.com/start?t=bali_offer_lp2,ru,fn1",
        },
        {
          function: "_re",
          arg0: ["macro", 7],
          arg1: "(^$|((^|,)103953592_71($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 5],
          arg1: "wf-form-agents-email-form",
        },
        { function: "_cn", arg0: ["macro", 20], arg1: "quiz-en-thank-you" },
        { function: "_cn", arg0: ["macro", 20], arg1: "quiz-ru-thank-you" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
        {
          function: "_cn",
          arg0: ["macro", 9],
          arg1: "bali-offer.BinaryX.com",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 2, 4, 19, 28, 30, 41, 32, 33, 34, 35, 36, 37, 39, 40],
        ],
        [
          ["if", 1],
          ["add", 2],
        ],
        [
          ["if", 2, 3],
          ["add", 3, 5, 8, 11],
        ],
        [
          ["if", 4, 5, 6, 7],
          ["add", 6, 7, 9, 10, 18, 29, 31],
        ],
        [
          ["if", 5, 8],
          ["add", 12, 17],
        ],
        [
          ["if", 6, 9, 10, 11],
          ["add", 13],
        ],
        [
          ["if", 10, 13, 14],
          ["unless", 12],
          ["add", 14],
        ],
        [
          ["if", 10, 15, 16],
          ["add", 15],
        ],
        [
          ["if", 17],
          ["add", 16],
        ],
        [
          ["if", 8, 18, 19],
          ["add", 20, 21, 22, 23, 24, 29, 31],
        ],
        [
          ["if", 8, 19, 20],
          ["add", 20, 21, 22, 23, 24, 29, 31],
        ],
        [
          ["if", 13, 21, 22],
          ["add", 25],
        ],
        [
          ["if", 13, 23, 24],
          ["add", 26],
        ],
        [
          ["if", 6, 25],
          ["add", 27],
        ],
        [
          ["if", 0, 26],
          ["add", 29, 31],
        ],
        [
          ["if", 0, 27],
          ["add", 29, 31],
        ],
        [
          ["if", 28],
          ["add", 38],
        ],
        [
          ["if", 0, 29],
          ["add", 42],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_103953592_62",
        [46, "a"],
        [52, "b", ["require", "createQueue"]],
        [52, "c", ["require", "callInWindow"]],
        [52, "d", ["require", "aliasInWindow"]],
        [52, "e", ["require", "copyFromWindow"]],
        [52, "f", ["require", "setInWindow"]],
        [52, "g", ["require", "injectScript"]],
        [52, "h", ["require", "makeTableMap"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "getType"]],
        [52, "k", ["require", "copyFromDataLayer"]],
        [52, "l", ["require", "Math"]],
        [52, "m", ["require", "logToConsole"]],
        [52, "n", [30, ["e", "_fbq_gtm_ids"], [7]]],
        [52, "o", [17, [15, "a"], "pixelId"]],
        [
          52,
          "p",
          [
            7,
            "AddPaymentInfo",
            "AddToCart",
            "AddToWishlist",
            "CompleteRegistration",
            "Contact",
            "CustomizeProduct",
            "Donate",
            "FindLocation",
            "InitiateCheckout",
            "Lead",
            "PageView",
            "Purchase",
            "Schedule",
            "Search",
            "StartTrial",
            "SubmitApplication",
            "Subscribe",
            "ViewContent",
          ],
        ],
        [52, "q", ["k", "ecommerce", 1]],
        [
          52,
          "r",
          [
            51,
            "",
            [7, "bg"],
            ["m", [15, "bg"]],
            [2, [15, "a"], "gtmOnFailure", [7]],
          ],
        ],
        [
          52,
          "s",
          [
            51,
            "",
            [7, "bg", "bh"],
            [
              55,
              "bi",
              [15, "bh"],
              [
                46,
                [
                  22,
                  [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                  [
                    46,
                    [43, [15, "bg"], [15, "bi"], [16, [15, "bh"], [15, "bi"]]],
                  ],
                ],
              ],
            ],
            [36, [15, "bg"]],
          ],
        ],
        [
          52,
          "t",
          [
            51,
            "",
            [7, "bg"],
            [
              36,
              [
                8,
                "id",
                [17, [15, "bg"], "id"],
                "quantity",
                [17, [15, "bg"], "quantity"],
              ],
            ],
          ],
        ],
        [41, "u", "v", "w"],
        [
          22,
          [17, [15, "a"], "enhancedEcommerce"],
          [
            46,
            [
              22,
              [28, [15, "q"]],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook Pixel: No valid "ecommerce" object found in dataLayer',
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "detail"],
              [46, [3, "u", "ViewContent"], [3, "v", "detail"]],
              [
                46,
                [
                  22,
                  [17, [15, "q"], "add"],
                  [46, [3, "u", "AddToCart"], [3, "v", "add"]],
                  [
                    46,
                    [
                      22,
                      [17, [15, "q"], "checkout"],
                      [46, [3, "u", "InitiateCheckout"], [3, "v", "checkout"]],
                      [
                        46,
                        [
                          22,
                          [17, [15, "q"], "purchase"],
                          [46, [3, "u", "Purchase"], [3, "v", "purchase"]],
                          [
                            46,
                            [
                              36,
                              [
                                "r",
                                'Facebook Pixel: Most recently pushed "ecommerce" object must be one of types "detail", "add", "checkout" or "purchase".',
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [
                30,
                [28, [17, [16, [15, "q"], [15, "v"]], "products"]],
                [
                  21,
                  ["j", [17, [16, [15, "q"], [15, "v"]], "products"]],
                  "array",
                ],
              ],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook pixel: Most recently pushed "ecommerce" object did not have a valid "products" array.',
                  ],
                ],
              ],
            ],
            [
              3,
              "w",
              [
                8,
                "content_type",
                "product",
                "contents",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "map",
                  [7, [15, "t"]],
                ],
                "value",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "reduce",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "bg", "bh"],
                      [
                        52,
                        "bi",
                        [
                          10,
                          [
                            2,
                            [15, "l"],
                            "round",
                            [
                              7,
                              [
                                26,
                                [
                                  26,
                                  ["i", [30, [17, [15, "bh"], "price"], 0]],
                                  [30, [17, [15, "bh"], "quantity"], 1],
                                ],
                                100,
                              ],
                            ],
                          ],
                          100,
                        ],
                      ],
                      [36, [0, [15, "bg"], [15, "bi"]]],
                    ],
                    0,
                  ],
                ],
                "currency",
                [30, [17, [15, "q"], "currencyCode"], "USD"],
              ],
            ],
            [
              22,
              [
                18,
                [
                  2,
                  [7, "InitiateCheckout", "Purchase"],
                  "indexOf",
                  [7, [15, "u"]],
                ],
                [27, 1],
              ],
              [
                46,
                [
                  43,
                  [15, "w"],
                  "num_items",
                  [
                    2,
                    [17, [16, [15, "q"], [15, "v"]], "products"],
                    "reduce",
                    [
                      7,
                      [
                        51,
                        "",
                        [7, "bg", "bh"],
                        [
                          36,
                          [
                            0,
                            [15, "bg"],
                            ["i", [30, [17, [15, "bh"], "quantity"], 1]],
                          ],
                        ],
                      ],
                      0,
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          52,
          "x",
          [
            39,
            [
              1,
              [17, [15, "a"], "advancedMatchingList"],
              [17, [17, [15, "a"], "advancedMatchingList"], "length"],
            ],
            ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "y",
          [
            39,
            [
              1,
              [17, [15, "a"], "objectPropertyList"],
              [17, [17, [15, "a"], "objectPropertyList"], "length"],
            ],
            ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "z",
          [
            39,
            [
              20,
              ["j", [17, [15, "a"], "objectPropertiesFromVariable"]],
              "object",
            ],
            [17, [15, "a"], "objectPropertiesFromVariable"],
            [8],
          ],
        ],
        [52, "ba", ["s", [15, "z"], [15, "y"]]],
        [52, "bb", ["s", [30, [15, "w"], [8]], [15, "ba"]]],
        [
          3,
          "u",
          [
            30,
            [15, "u"],
            [
              39,
              [20, [17, [15, "a"], "eventName"], "custom"],
              [17, [15, "a"], "customEventName"],
              [
                39,
                [20, [17, [15, "a"], "eventName"], "variable"],
                [17, [15, "a"], "variableEventName"],
                [17, [15, "a"], "standardEventName"],
              ],
            ],
          ],
        ],
        [
          52,
          "bc",
          [
            39,
            [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]], [27, 1]],
            "trackSingleCustom",
            "trackSingle",
          ],
        ],
        [
          52,
          "bd",
          [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"],
        ],
        [
          52,
          "be",
          [
            51,
            "",
            [7],
            [41, "bg"],
            [3, "bg", ["e", "fbq"]],
            [22, [15, "bg"], [46, [36, [15, "bg"]]]],
            [
              "f",
              "fbq",
              [
                51,
                "",
                [7],
                [52, "bh", ["e", "fbq.callMethod.apply"]],
                [
                  22,
                  [15, "bh"],
                  [46, ["c", "fbq.callMethod.apply", [45], [15, "arguments"]]],
                  [46, ["c", "fbq.queue.push", [15, "arguments"]]],
                ],
              ],
            ],
            ["d", "_fbq", "fbq"],
            ["b", "fbq.queue"],
            [36, ["e", "fbq"]],
          ],
        ],
        [52, "bf", ["be"]],
        ["bf", "consent", [15, "bd"]],
        [
          22,
          [17, [15, "a"], "dpoLDU"],
          [
            46,
            [
              "bf",
              "dataProcessingOptions",
              [7, "LDU"],
              ["i", [17, [15, "a"], "dpoCountry"]],
              ["i", [17, [15, "a"], "dpoState"]],
            ],
          ],
        ],
        [
          2,
          [2, [15, "o"], "split", [7, ","]],
          "forEach",
          [
            7,
            [
              51,
              "",
              [7, "bg"],
              [
                22,
                [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]], [27, 1]],
                [
                  46,
                  [
                    22,
                    [17, [15, "a"], "disableAutoConfig"],
                    [46, ["bf", "set", "autoConfig", false, [15, "bg"]]],
                  ],
                  [
                    22,
                    [17, [15, "a"], "disablePushState"],
                    [46, ["f", "fbq.disablePushState", true]],
                  ],
                  ["bf", "init", [15, "bg"], [15, "x"]],
                  ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                  [2, [15, "n"], "push", [7, [15, "bg"]]],
                  ["f", "_fbq_gtm_ids", [15, "n"], true],
                ],
              ],
              [
                22,
                [17, [15, "a"], "eventId"],
                [
                  46,
                  [
                    "bf",
                    [15, "bc"],
                    [15, "bg"],
                    [15, "u"],
                    [15, "bb"],
                    [8, "eventID", [17, [15, "a"], "eventId"]],
                  ],
                ],
                [46, ["bf", [15, "bc"], [15, "bg"], [15, "u"], [15, "bb"]]],
              ],
            ],
          ],
        ],
        [
          "g",
          "https://connect.facebook.net/en_US/fbevents.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          "fbPixel",
        ],
      ],
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ctv",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "version",
          ],
        ],
      ],
      [
        50,
        "__dbg",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "debugMode",
          ],
        ],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__fsl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
        [
          52,
          "c",
          [
            8,
            "waitForTags",
            [17, [15, "a"], "waitForTags"],
            "checkValidation",
            [17, [15, "a"], "checkValidation"],
            "waitForTagsTimeout",
            [17, [15, "a"], "waitForTagsTimeout"],
          ],
        ],
        [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["b", [15, "c"], [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__hid",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getHtmlId"]],
            ["$0"],
          ],
        ],
      ],
      [
        50,
        "__hl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnHistoryChange"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__lcl",
        [46, "a"],
        [52, "b", ["require", "makeInteger"]],
        [52, "c", ["require", "makeString"]],
        [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "e", [8]],
        [
          22,
          [17, [15, "a"], "waitForTags"],
          [
            46,
            [43, [15, "e"], "waitForTags", true],
            [
              43,
              [15, "e"],
              "waitForTagsTimeout",
              ["b", [17, [15, "a"], "waitForTagsTimeout"]],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "checkValidation"],
          [46, [43, [15, "e"], "checkValidation", true]],
        ],
        [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["d", [15, "e"], [15, "f"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __cid: { 2: true, 4: true, 3: true },
      __ctv: { 2: true, 3: true },
      __dbg: { 2: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
      __r: { 2: true },
    },
    blob: { 1: "70" },
    permissions: {
      __cvt_103953592_62: {
        access_globals: {
          keys: [
            { key: "fbq", read: true, write: true, execute: false },
            { key: "_fbq_gtm", read: true, write: true, execute: false },
            { key: "_fbq", read: false, write: true, execute: false },
            { key: "_fbq_gtm_ids", read: true, write: true, execute: false },
            {
              key: "fbq.callMethod.apply",
              read: true,
              write: false,
              execute: true,
            },
            { key: "fbq.queue.push", read: false, write: false, execute: true },
            { key: "fbq.queue", read: true, write: true, execute: false },
            {
              key: "fbq.disablePushState",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://connect.facebook.net/en_US/fbevents.js"],
        },
        logging: { environments: "debug" },
        read_data_layer: {
          allowedKeys: "specific",
          keyPatterns: ["ecommerce"],
        },
      },
      __cid: { read_container_data: {} },
      __cl: { detect_click_events: {} },
      __ctv: { read_container_data: {} },
      __dbg: { read_container_data: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __fsl: { detect_form_submit_events: { allowWaitForTags: true } },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __hid: {},
      __hl: { detect_history_change_events: {} },
      __lcl: { detect_link_click_events: { allowWaitForTags: true } },
      __paused: {},
      __r: {},
    },

    sandboxed_scripts: ["__cvt_103953592_62"],

    security_groups: {
      google: [
        "__cid",
        "__cl",
        "__ctv",
        "__dbg",
        "__e",
        "__googtag",
        "__hid",
        "__hl",
        "__r",
      ],
    },
  };

  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ea(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ja("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ea(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ka = function (a) {
      return (a.raw = a);
    },
    la = function (a, b) {
      a.raw = b;
      return a;
    },
    na = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    pa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    qa = function (a) {
      return a instanceof Array ? a : pa(na(a));
    },
    ra =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || ra;
  });
  var sa =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ta;
  if (typeof Object.setPrototypeOf == "function") ta = Object.setPrototypeOf;
  else {
    var ua;
    a: {
      var va = { a: !0 },
        wa = {};
      try {
        wa.__proto__ = va;
        ua = wa.a;
        break a;
      } catch (a) {}
      ua = !1;
    }
    ta = ua
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var xa = ta,
    ya = function (a, b) {
      a.prototype = sa(b.prototype);
      a.prototype.constructor = a;
      if (xa) xa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Qn = b.prototype;
    },
    Aa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Ba = this || self,
    Ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? Ca
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ia = function () {
    this.j = {};
    this.H = {};
  };
  ca = Ia.prototype;
  ca.get = function (a) {
    return this.j["dust." + a];
  };
  ca.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.j[a] = b);
  };
  ca.Lh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  ca.has = function (a) {
    return this.j.hasOwnProperty("dust." + a);
  };
  ca.vf = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.j[a];
  };
  var Ja = function () {};
  Ja.prototype.reset = function () {};
  var Ka = function (a, b) {
    this.O = a;
    this.parent = b;
    this.j = this.D = void 0;
    this.K = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ia();
  };
  Ka.prototype.add = function (a, b) {
    La(this, a, b, !1);
  };
  var La = function (a, b, c, d) {
    d ? a.values.Lh(b, c) : a.values.set(b, c);
  };
  Ka.prototype.set = function (a, b) {
    !this.values.has(a) && this.parent && this.parent.has(a)
      ? this.parent.set(a, b)
      : this.values.set(a, b);
  };
  Ka.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ka.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Na = function (a) {
    var b = new Ka(a.O, a);
    a.D && (b.D = a.D);
    b.K = a.K;
    b.j = a.j;
    return b;
  };
  Ka.prototype.H = function () {
    return this.O;
  };
  function Oa(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Pa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Pa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || typeof c.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.D;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Qa = function () {
    this.K = new Ja();
    this.j = new Ka(this.K);
  };
  Qa.prototype.H = function () {
    return this.K;
  };
  Qa.prototype.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.D(b);
  };
  Qa.prototype.D = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Pa(this.j, arguments[b]);
    return a;
  };
  Qa.prototype.O = function (a) {
    var b = Na(this.j);
    b.j = a;
    for (var c, d = 1; d < arguments.length; d++) c = Pa(b, arguments[d]);
    return c;
  };
  var Ra = function () {
    Ia.call(this);
    this.D = !1;
  };
  ya(Ra, Ia);
  var Ta = function (a, b) {
    var c = [],
      d;
    for (d in a.j)
      if (a.j.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Ra.prototype.set = function (a, b) {
    this.D || Ia.prototype.set.call(this, a, b);
  };
  Ra.prototype.Lh = function (a, b) {
    this.D || Ia.prototype.Lh.call(this, a, b);
  };
  Ra.prototype.vf = function (a) {
    this.D || Ia.prototype.vf.call(this, a);
  };
  Ra.prototype.Mb = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (a == null) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Wa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Xa = function (a) {
      if (!a || Va(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Wa(a, "constructor") &&
          !Wa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Wa(a, b);
    },
    h = function (a, b) {
      var c = b || (Va(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Wa(a, d)) {
          var e = a[d];
          Va(e) == "array"
            ? (Va(c[d]) != "array" && (c[d] = []), (c[d] = h(e, c[d])))
            : Xa(e)
            ? (Xa(c[d]) || (c[d] = {}), (c[d] = h(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Ya(a) {
    if (a == void 0 || Array.isArray(a) || Xa(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Za(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var $a = function (a) {
    this.j = [];
    this.H = !1;
    this.D = new Ra();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Za(b) ? (this.j[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  ca = $a.prototype;
  ca.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.j.length; c++) {
      var d = this.j[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof $a
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  ca.set = function (a, b) {
    if (!this.H)
      if (a === "length") {
        if (!Za(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.j.length = Number(b);
      } else Za(a) ? (this.j[Number(a)] = b) : this.D.set(a, b);
  };
  ca.get = function (a) {
    return a === "length"
      ? this.length()
      : Za(a)
      ? this.j[Number(a)]
      : this.D.get(a);
  };
  ca.length = function () {
    return this.j.length;
  };
  ca.fc = function () {
    for (var a = Ta(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
    return new $a(a);
  };
  var ab = function (a, b) {
    Za(b) ? delete a.j[Number(b)] : a.D.vf(b);
  };
  ca = $a.prototype;
  ca.pop = function () {
    return this.j.pop();
  };
  ca.push = function () {
    return this.j.push.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ca.shift = function () {
    return this.j.shift();
  };
  ca.splice = function (a, b) {
    return new $a(this.j.splice.apply(this.j, arguments));
  };
  ca.unshift = function () {
    return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ca.has = function (a) {
    return (Za(a) && this.j.hasOwnProperty(a)) || this.D.has(a);
  };
  ca.Mb = function () {
    this.H = !0;
    Object.freeze(this.j);
    this.D.Mb();
  };
  function bb(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var cb = function () {
    Ra.call(this);
  };
  ya(cb, Ra);
  cb.prototype.fc = function () {
    return new $a(Ta(this, 1));
  };
  var db = function (a) {
    for (var b = Ta(a, 3), c = new $a(), d = 0; d < b.length; d++) {
      var e = new $a(b[d]);
      c.push(e);
    }
    return c;
  };
  function eb() {
    for (var a = fb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function gb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var fb, hb;
  function jb(a) {
    fb = fb || gb();
    hb = hb || eb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(fb[m], fb[n], fb[p], fb[q]);
    }
    return b.join("");
  }
  function kb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = hb[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    fb = fb || gb();
    hb = hb || eb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var lb = {};
  function mb(a, b) {
    lb[a] = lb[a] || [];
    lb[a][b] = !0;
  }
  function nb(a) {
    var b = lb[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return jb(c.join("")).replace(/\.+$/, "");
  }
  function ob() {
    for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function pb() {}
  function qb(a) {
    return typeof a === "function";
  }
  function l(a) {
    return typeof a === "string";
  }
  function rb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function sb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function tb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function ub(a, b) {
    if (!rb(a) || !rb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function vb(a, b) {
    for (var c = new wb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function xb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function yb(a) {
    return Math.round(Number(a)) || 0;
  }
  function zb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function Ab(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function Bb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function Cb() {
    return new Date(Date.now());
  }
  function Db() {
    return Cb().getTime();
  }
  var wb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  wb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  function Eb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Fb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Gb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Hb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Ib(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function Jb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function Kb(a, b) {
    var c = G;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function Lb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Mb = /^\w{1,9}$/;
  function Nb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function (d, e) {
      Mb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Ob(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Pb(a) {
    if (a) {
      var b = a.split(",");
      if (b.length === 2 && b[0] === b[1]) return b[0];
    }
    return a;
  }
  var Qb,
    Rb = function () {
      if (Qb === void 0) {
        var a = null,
          b = Ba.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Ba.console && Ba.console.error(c.message);
          }
          Qb = a;
        } else Qb = a;
      }
      return Qb;
    };
  var Sb = function (a) {
    this.j = a;
  };
  Sb.prototype.toString = function () {
    return this.j + "";
  };
  var Tb = function (a) {
      return a instanceof Sb && a.constructor === Sb
        ? a.j
        : "type_error:TrustedResourceUrl";
    },
    Ub = {},
    Vb = function (a) {
      var b = a,
        c = Rb(),
        d = c ? c.createScriptURL(b) : b;
      return new Sb(d, Ub);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Wb = ka([""]),
    Xb = la(["\x00"], ["\\0"]),
    Yb = la(["\n"], ["\\n"]),
    Zb = la(["\x00"], ["\\u0000"]);
  function $b(a) {
    return a.toString().indexOf("`") === -1;
  }
  $b(function (a) {
    return a(Wb);
  }) ||
    $b(function (a) {
      return a(Xb);
    }) ||
    $b(function (a) {
      return a(Yb);
    }) ||
    $b(function (a) {
      return a(Zb);
    });
  var ac = function (a) {
    this.j = a;
  };
  ac.prototype.toString = function () {
    return this.j;
  };
  var bc = new ac("about:invalid#zClosurez");
  var cc = function (a) {
    this.Yl = a;
  };
  function dc(a) {
    return new cc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var ec = [
    dc("data"),
    dc("http"),
    dc("https"),
    dc("mailto"),
    dc("ftp"),
    new cc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function fc(a, b) {
    b = b === void 0 ? ec : b;
    if (a instanceof ac) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof cc && d.Yl(a)) return new ac(a);
    }
  }
  function gc(a) {
    var b;
    b = b === void 0 ? ec : b;
    return fc(a, b) || bc;
  }
  var hc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function ic(a) {
    var b;
    if (a instanceof ac)
      if (a instanceof ac) b = a.j;
      else throw Error("");
    else b = hc.test(a) ? a : void 0;
    return b;
  }
  var kc = function () {
    this.j = jc[0].toLowerCase();
  };
  kc.prototype.toString = function () {
    return this.j;
  };
  var lc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var mc = {},
    nc = function (a) {
      this.j = a;
    };
  nc.prototype.toString = function () {
    return this.j.toString();
  };
  function oc(a, b) {
    var c = [new kc()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof kc) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function pc(a, b) {
    var c = ic(b);
    c !== void 0 && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function qc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var G = window,
    H = document,
    rc = navigator,
    sc = function () {
      var a;
      try {
        a = rc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    tc = H.currentScript,
    uc = tc && tc.src,
    vc = function (a, b) {
      var c = G[a];
      G[a] = c === void 0 ? b : c;
      return G[a];
    };
  function wc(a) {
    return (rc.userAgent || "").indexOf(a) !== -1;
  }
  var xc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    yc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    zc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Ac(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Bc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      Ac(f, d, yc);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = Vb(qc(a));
      f.src = Tb(g);
      var k,
        m,
        n,
        p =
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector) == null
            ? void 0
            : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", k);
      xc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Cc = function () {
      if (uc) {
        var a = uc.toLowerCase();
        if (a.indexOf("https://") === 0) return 2;
        if (a.indexOf("http://") === 0) return 3;
      }
      return 1;
    },
    Dc = function (a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = H.createElement("iframe")), (k = !0));
      Ac(g, c, zc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      a !== void 0 && (g.src = a);
      if (k) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      xc(g, b);
      return g;
    },
    Ec = function (a, b, c, d) {
      var e = new Image(1, 1);
      Ac(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
      return e;
    },
    Fc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Gc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      G.setTimeout(a, 0);
    },
    Hc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Ic = function (a) {
      var b = a.innerText || a.textContent || "";
      b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Jc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d,
        e = qc("A<div>" + a + "</div>"),
        f = Rb(),
        g = f ? f.createHTML(e) : e;
      d = new nc(g, mc);
      if (c.nodeType === 1) {
        var k = c.tagName;
        if (k === "SCRIPT" || k === "STYLE") throw Error("");
      }
      c.innerHTML =
        d instanceof nc && d.constructor === nc ? d.j : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Kc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Lc = function (a) {
      var b;
      try {
        b = rc.sendBeacon && rc.sendBeacon(a);
      } catch (c) {
        mb("TAGGING", 15);
      }
      b || Ec(a);
    },
    Mc = function (a, b) {
      try {
        return rc.sendBeacon(a, b);
      } catch (c) {
        mb("TAGGING", 15);
      }
      return !1;
    },
    Nc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Pc = function (a, b, c) {
      if (Oc()) {
        var d = Object.assign({}, Nc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          var e = G.fetch(a, d);
          e && e.catch(pb);
          return !0;
        } catch (f) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Mc(a, b);
      Lc(a);
      return !0;
    },
    Oc = function () {
      return typeof G.fetch === "function";
    },
    Qc = function (a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c;
    },
    Rc = function () {
      var a = G.performance;
      if (a && qb(a.now)) return a.now();
    },
    Sc = function () {
      return G.performance || void 0;
    };
  function Tc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Uc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Vc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Wc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Xc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Yc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = G.location.href;
        b instanceof cb &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var Zc = function (a, b) {
    Ra.call(this);
    this.K = a;
    this.O = b;
  };
  ya(Zc, Ra);
  ca = Zc.prototype;
  ca.toString = function () {
    return this.K;
  };
  ca.getName = function () {
    return this.K;
  };
  ca.fc = function () {
    return new $a(Ta(this, 1));
  };
  ca.invoke = function (a) {
    return this.O.apply(
      new $c(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ca.fb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var $c = function (a, b) {
    this.j = a;
    this.F = b;
  };
  $c.prototype.evaluate = function (a) {
    var b = this.F;
    return Array.isArray(a) ? Pa(b, a) : a;
  };
  $c.prototype.getName = function () {
    return this.j.getName();
  };
  $c.prototype.H = function () {
    return this.F.H();
  };
  var ad = function () {
    this.map = new Map();
  };
  ad.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  ad.prototype.get = function (a) {
    return this.map.get(a);
  };
  var bd = function () {
    this.keys = [];
    this.values = [];
  };
  bd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  bd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function cd() {
    try {
      return Map ? new ad() : new bd();
    } catch (a) {
      return new bd();
    }
  }
  var dd = function (a) {
    if (a instanceof dd) return a;
    if (Ya(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  dd.prototype.getValue = function () {
    return this.value;
  };
  dd.prototype.toString = function () {
    return String(this.value);
  };
  var fd = function (a) {
    Ra.call(this);
    this.promise = a;
    this.set("then", ed(this));
    this.set("catch", ed(this, !0));
    this.set("finally", ed(this, !1, !0));
  };
  ya(fd, cb);
  var ed = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Zc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Zc || (d = void 0);
      e instanceof Zc || (e = void 0);
      var f = Na(this.F),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new fd(k);
    });
  };
  function J(a, b, c) {
    var d = cd(),
      e = function (g, k) {
        for (var m = Ta(g, 1), n = 0; n < m.length; n++)
          k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof $a) {
          var m = [];
          d.set(g, m);
          for (var n = g.fc(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof fd) return g.promise;
        if (g instanceof cb) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Zc) {
          var r = function () {
            for (
              var u = Array.prototype.slice.call(arguments, 0), v = 0;
              v < u.length;
              v++
            )
              u[v] = gd(u[v], b, c);
            var w = new Ka(b ? b.H() : new Ja());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(u)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof dd && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function gd(a, b, c) {
    var d = cd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || xb(g)) {
          var m = new $a([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Xa(g)) {
          var p = new cb();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Zc("", function () {
            for (
              var x = Array.prototype.slice.call(arguments, 0), y = 0;
              y < x.length;
              y++
            )
              x[y] = J(this.evaluate(x[y]), b, c);
            return f((0, this.F.K)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var v = typeof g;
        if (g === null || v === "string" || v === "number" || v === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new dd(g);
      };
    return f(a);
  }
  function hd() {
    var a = !1;
    return a;
  }
  var id = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof $a)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new $a(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new $a(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new $a(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = bb(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : ab(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new $a(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = bb(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : ab(this, d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var jd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ya(jd, Error);
  var kd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    ld = new Ha("break"),
    md = new Ha("continue");
  function nd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function od(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function pd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof $a))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (hd()) throw new jd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = J(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (hd()) throw new jd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (kd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = J(c, void 0, k);
        return gd(a[b].apply(a, m), this.F);
      }
      var n = "TypeError: " + b + " is not a function";
      if (hd()) throw new jd(n);
      throw Error(n);
    }
    if (a instanceof $a) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Zc) {
          var q = bb(c);
          q.unshift(this.F);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (hd()) throw new jd(r);
        throw Error(r);
      }
      if (id.supportedMethods.indexOf(b) >= 0) {
        var t = bb(c);
        t.unshift(this.F);
        return id[b].apply(a, t);
      }
    }
    if (a instanceof Zc || a instanceof cb) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof Zc) {
          var v = bb(c);
          v.unshift(this.F);
          return u.invoke.apply(u, v);
        }
        var w = "TypeError: " + b + " is not a function";
        if (hd()) throw new jd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Zc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a, bb(c));
    }
    if (a instanceof dd && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (hd()) throw new jd(x);
    throw Error(x);
  }
  function qd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.F;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function rd() {
    var a = Na(this.F),
      b = Oa(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Ha) return b;
  }
  function sd() {
    return ld;
  }
  function td(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ha) return d;
    }
  }
  function ud() {
    for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        La(a, c, d, !0);
      }
    }
  }
  function vd() {
    return md;
  }
  function wd(a, b) {
    return new Ha(a, this.evaluate(b));
  }
  function xd(a, b) {
    var c = new $a();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.F.add(a, this.evaluate(e));
  }
  function yd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function zd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof dd,
      d = b instanceof dd;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function Ad() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Bd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Oa(f, d);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Cd(a, b, c) {
    if (typeof b === "string")
      return Bd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof cb || b instanceof $a || b instanceof Zc) {
      var d = b.fc(),
        e = d.length();
      return Bd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Cd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Cd(
      function (e) {
        var f = Na(d);
        La(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Cd(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Hd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Id(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Hd(
      function (e) {
        var f = Na(d);
        La(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Jd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Hd(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Hd(a, b, c) {
    if (typeof b === "string")
      return Bd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof $a)
      return Bd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (hd()) throw new jd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Kd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof $a))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.F;
    d = this.evaluate(d);
    var k = Na(g);
    for (e(g, k); Pa(k, b); ) {
      var m = Oa(k, d);
      if (m instanceof Ha) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Na(g);
      e(k, n);
      Pa(n, c);
      k = n;
    }
  }
  function Ld(a, b) {
    var c = this.F,
      d = this.evaluate(b);
    if (!(d instanceof $a))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Zc(
      a,
      (function () {
        return function (f) {
          var g = Na(c);
          g.j === void 0 && (g.j = this.F.j);
          for (
            var k = Array.prototype.slice.call(arguments, 0), m = 0;
            m < k.length;
            m++
          )
            if (((k[m] = this.evaluate(k[m])), k[m] instanceof Ha)) return k[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new $a(k));
          var q = Oa(g, e);
          if (q instanceof Ha) return q.type === "return" ? q.data : q;
        };
      })()
    );
  }
  function Md(a) {
    a = this.evaluate(a);
    var b = this.F;
    if (Nd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Od(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (hd()) throw new jd(d);
      throw Error(d);
    }
    if (a instanceof cb || a instanceof $a || a instanceof Zc) c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Za(b) && (c = a[b]);
    else if (a instanceof dd) return;
    return c;
  }
  function Pd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Qd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Rd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof dd && (a = a.getValue());
    b instanceof dd && (b = b.getValue());
    return a === b;
  }
  function Sd(a, b) {
    return !Rd.call(this, a, b);
  }
  function Td(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Oa(this.F, d);
    if (e instanceof Ha) return e;
  }
  var Nd = !1;
  function Ud(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Vd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Wd() {
    for (var a = new $a(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Xd() {
    for (var a = new cb(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Yd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Zd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function $d(a) {
    return -this.evaluate(a);
  }
  function ae(a) {
    return !this.evaluate(a);
  }
  function be(a, b) {
    return !zd.call(this, a, b);
  }
  function ce() {
    return null;
  }
  function de(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function ee(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function fe(a) {
    return this.evaluate(a);
  }
  function ge() {
    return Array.prototype.slice.apply(arguments);
  }
  function he(a) {
    return new Ha("return", this.evaluate(a));
  }
  function ie(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (hd()) throw new jd(d);
      throw Error(d);
    }
    (a instanceof Zc || a instanceof $a || a instanceof cb) && a.set(b, c);
    return c;
  }
  function je(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ke(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ha)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ha && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function le(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function me(a) {
    a = this.evaluate(a);
    return a instanceof Zc ? "function" : typeof a;
  }
  function ne() {
    for (var a = this.F, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function oe(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Oa(this.F, e);
      if (f instanceof Ha) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Oa(this.F, e);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function pe(a) {
    return ~Number(this.evaluate(a));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function ve(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function we() {}
  function xe(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ha) return g;
    } catch (r) {
      if (!(r instanceof jd && a)) throw ((f = r instanceof jd), r);
      var k = Na(this.F),
        m = new dd(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Oa(k, n);
      if (p instanceof Ha) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ha) return q;
      }
    }
  }
  var ze = function () {
    this.j = new Qa();
    ye(this);
  };
  ze.prototype.execute = function (a) {
    return this.j.D(a);
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = new Zc(String(c), d);
      e.Mb();
      a.j.j.set(String(c), e);
    };
    b("map", Xd);
    b("and", Tc);
    b("contains", Wc);
    b("equals", Uc);
    b("or", Vc);
    b("startsWith", Xc);
    b("variable", Yc);
  };
  var Be = function () {
    this.D = !1;
    this.j = new Qa();
    Ae(this);
    this.D = !0;
  };
  Be.prototype.execute = function (a) {
    return Ce(this.j.D(a));
  };
  var De = function (a, b, c) {
      return Ce(a.j.O(b, c));
    },
    Ae = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new Zc(e, d);
        f.Mb();
        a.j.j.set(e, f);
      };
      b(0, nd);
      b(1, od);
      b(2, pd);
      b(3, qd);
      b(56, te);
      b(57, qe);
      b(58, pe);
      b(59, ve);
      b(60, re);
      b(61, se);
      b(62, ue);
      b(53, rd);
      b(4, sd);
      b(5, td);
      b(52, ud);
      b(6, vd);
      b(49, wd);
      b(7, Wd);
      b(8, Xd);
      b(9, td);
      b(50, xd);
      b(10, yd);
      b(12, zd);
      b(13, Ad);
      b(51, Ld);
      b(47, Dd);
      b(54, Ed);
      b(55, Fd);
      b(63, Kd);
      b(64, Gd);
      b(65, Id);
      b(66, Jd);
      b(15, Md);
      b(16, Od);
      b(17, Od);
      b(18, Pd);
      b(19, Qd);
      b(20, Rd);
      b(21, Sd);
      b(22, Td);
      b(23, Ud);
      b(24, Vd);
      b(25, Yd);
      b(26, Zd);
      b(27, $d);
      b(28, ae);
      b(29, be);
      b(45, ce);
      b(30, de);
      b(32, ee);
      b(33, ee);
      b(34, fe);
      b(35, fe);
      b(46, ge);
      b(36, he);
      b(43, ie);
      b(37, je);
      b(38, ke);
      b(39, le);
      b(67, xe);
      b(40, me);
      b(44, we);
      b(41, ne);
      b(42, oe);
    };
  Be.prototype.H = function () {
    return this.j.H();
  };
  function Ce(a) {
    if (
      a instanceof Ha ||
      a instanceof Zc ||
      a instanceof $a ||
      a instanceof cb ||
      a instanceof dd ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ee = function (a) {
    this.message = a;
  };
  function Fe(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ee(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ge(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var He = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ie(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Fe(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Fe(a | b) + c);
  }
  var Je = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      kk: a("consent"),
      Vh: a("convert_case_to"),
      Wh: a("convert_false_to"),
      Xh: a("convert_null_to"),
      Yh: a("convert_true_to"),
      Zh: a("convert_undefined_to"),
      dn: a("debug_mode_metadata"),
      oa: a("function"),
      Jg: a("instance_name"),
      Jk: a("live_only"),
      Kk: a("malware_disabled"),
      Lk: a("metadata"),
      Ok: a("original_activity_id"),
      sn: a("original_vendor_template_id"),
      rn: a("once_on_load"),
      Nk: a("once_per_event"),
      gj: a("once_per_load"),
      wn: a("priority_override"),
      xn: a("respected_consent_types"),
      pj: a("setup_tags"),
      me: a("tag_id"),
      vj: a("teardown_tags"),
    };
  })();
  var ef;
  var ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = [],
    lf = {},
    mf,
    nf;
  function of(a) {
    nf = nf || a;
  }
  function pf(a) {}
  var qf,
    rf = [],
    sf = [];
  function tf(a, b) {
    var c = {};
    c[Je.oa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function uf(a, b, c) {
    try {
      return mf(vf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function wf(a) {
    var b = a[Je.oa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!lf[b];
  }
  var vf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d;
    },
    xf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ff[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Je.Jg]);
            try {
              var m = vf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, { event: b, index: f, type: 2, name: k });
              qf && (d = qf.il(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = xf(a[q], b, c);
              nf && (p = p || nf.Vl(r));
              d.push(r);
            }
            return nf && p ? nf.ml(d) : d.join("");
          case "escape":
            d = xf(a[1], b, c);
            if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.Wl(a))
              return nf.wm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Ke[a[t]] && (d = Ke[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!jf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Dj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Je.oa] = a[1];
            var w = uf(v, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    yf = function (a, b) {
      var c = a[Je.oa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = lf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          rf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          Ib(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ff[q];
                  break;
                case 1:
                  r = jf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Je.Jg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && sf.indexOf(c) === -1) {
        sf.push(c);
        var x = Db();
        u = e(g);
        var y = Db() - x,
          B = Db();
        v = ef(c, k, b);
        w = y - (Db() - B);
      } else if ((e && (u = e(g)), !e || f)) v = ef(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Ya(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : Xa(u)
              ? Xa(v)
              : typeof u === "function"
              ? typeof v === "function"
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    };
  var zf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ya(zf, Error);
  function Af(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Af(a[c], b[c]);
    }
  }
  var Bf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.lm = a;
    this.j = [];
    this.D = b;
  };
  ya(Bf, Error);
  var Df = function () {
    return function (a, b) {
      a instanceof Bf || (a = new Bf(a, Cf));
      b && a.j.push(b);
      throw a;
    };
  };
  function Cf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) rb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Gf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Ef(a), f = 0; f < gf.length; f++) {
        var g = gf[f],
          k = Ff(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else k === null && b(g.block || []);
      }
      for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ff = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (e === 0) return !1;
        if (e === 2) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (k === 2) return null;
        if (k === 1) return !1;
      }
      return !0;
    },
    Ef = function (a) {
      var b = [];
      return function (c) {
        b[c] === void 0 && (b[c] = uf(hf[c], a));
        return b[c];
      };
    };
  var Hf = {
    il: function (a, b) {
      b[Je.Vh] &&
        typeof a === "string" &&
        (a = b[Je.Vh] == 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Je.Xh) && a === null && (a = b[Je.Xh]);
      b.hasOwnProperty(Je.Zh) && a === void 0 && (a = b[Je.Zh]);
      b.hasOwnProperty(Je.Yh) && a === !0 && (a = b[Je.Yh]);
      b.hasOwnProperty(Je.Wh) && a === !1 && (a = b[Je.Wh]);
      return a;
    },
  };
  var If = function () {
      this.j = {};
    },
    Kf = function (a, b) {
      var c = Jf.D,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, qa(Aa.apply(0, arguments)));
      });
    };
  function Lf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new zf(c, d, g);
      }
  }
  function Mf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Lf(e, b, d, g);
          Lf(f, b, d, g);
        }
      }
    };
  }
  var Qf = function () {
      var a = data.permissions || {},
        b = Nf.ctid,
        c = this;
      this.D = new If();
      this.j = {};
      var d = {},
        e = {},
        f = Mf(this.D, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, k) {
        var m = {};
        z(k, function (p, q) {
          var r = Of(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.yj && !e[p] && (e[p] = r.yj);
        });
        var n = function (p) {
          var q = Aa.apply(1, arguments);
          if (!m[p])
            throw Pf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(qa(q)));
        };
        c.j[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw Pf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(qa(t.slice(1))));
        };
      });
    },
    Rf = function (a) {
      return Jf.j[a] || function () {};
    };
  function Of(a, b) {
    var c = tf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pf;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new zf(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new zf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Pf(a, b, c) {
    return new zf(a, b, c);
  }
  var Sf = !1;
  var Tf = {};
  Tf.Um = zb("");
  Tf.pl = zb("");
  var Uf = Sf,
    Vf = Tf.pl,
    Wf = Tf.Um;
  var dg = {},
    eg =
      ((dg.uaa = !0),
      (dg.uab = !0),
      (dg.uafvl = !0),
      (dg.uamb = !0),
      (dg.uam = !0),
      (dg.uap = !0),
      (dg.uapv = !0),
      (dg.uaw = !0),
      dg);
  var kg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!ig.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!jg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? Ib(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    jg = /^[a-z$_][\w$]*$/i,
    ig = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var lg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function mg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) === c;
  }
  var ng = new wb();
  function og(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = ng.get(e);
      f || ((f = new RegExp(b, d)), ng.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function pg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function qg(a, b) {
    return String(a) === String(b);
  }
  function rg(a, b) {
    return Number(a) >= Number(b);
  }
  function sg(a, b) {
    return Number(a) <= Number(b);
  }
  function tg(a, b) {
    return Number(a) > Number(b);
  }
  function ug(a, b) {
    return Number(a) < Number(b);
  }
  function vg(a, b) {
    return Ib(String(a), String(b));
  }
  var wg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    xg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      wg(b, "/*") && (b = b.slice(0, -2));
      wg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    yg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    Bg = function (a, b) {
      var c;
      if (!(c = !yg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!zg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!Ag.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (u.indexOf("*.") !== 0) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            v === -1
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : t[v - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = xg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    zg = /^[a-z0-9-]+$/i,
    Ag = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Cg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Dg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Cg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Zc
          ? (n = "Fn")
          : m instanceof $a
          ? (n = "List")
          : m instanceof cb
          ? (n = "PixieMap")
          : m instanceof dd && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Dg[n] || n) + ", which does not match required type ") +
              ((Dg[k] || k) + ".")
          );
      }
    }
  }
  function Eg(a) {
    return "" + a;
  }
  function Fg(a, b) {
    var c = [];
    return c;
  }
  function Gg(a, b) {
    var c = new Zc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (hd()) throw new jd(g.message);
        throw g;
      }
    });
    c.Mb();
    return c;
  }
  function Hg(a, b) {
    var c = new cb(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        qb(e)
          ? c.set(d, Gg(a + "_" + d, e))
          : Xa(e)
          ? c.set(d, Hg(a + "_" + d, e))
          : (rb(e) || l(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Mb();
    return c;
  }
  function Ig(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new cb();
    return (d = Hg("AssertApiSubject", c));
  }
  function Jg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof fd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new cb();
    return (d = Hg("AssertThatSubject", c));
  }
  function Kg(a) {
    return function () {
      for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
        b.push(J(arguments[d], c));
      return gd(a.apply(null, b));
    };
  }
  function Lg() {
    for (var a = Math, b = Mg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Kg(a[e].bind(a)));
    }
    return c;
  }
  function Ng(a) {
    var b;
    return b;
  }
  function Og(a) {
    var b;
    return b;
  }
  function Pg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  var Qg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  var Vg = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var Wg = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return ub(a, b);
  };
  var Xg = function () {
    return new Date().getTime();
  };
  var Yg = function (a) {
    if (a === null) return "null";
    if (a instanceof $a) return "array";
    if (a instanceof Zc) return "function";
    if (a instanceof dd) {
      a = a.getValue();
      if (a.constructor === void 0 || a.constructor.name === void 0) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Zg = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Uf || Wf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return gd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(J(c));
      }),
    };
  };
  var $g = function (a) {
    return yb(J(a, this.F));
  };
  var ah = function (a) {
    return Number(J(a, this.F));
  };
  var bh = function (a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  };
  var ch = function (a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new cb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof cb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Mg = "floor ceil round max min abs pow sqrt".split(" ");
  var dh = function () {
      var a = {};
      return {
        Al: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Yj: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    eh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return Zc.prototype.invoke.apply(a, c);
      };
    },
    fh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    },
    gh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
  var hh = {};
  var ih = function (a) {
    var b = new cb();
    if (a instanceof $a)
      for (var c = a.fc(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Zc)
      for (var f = Ta(a, 1), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  hh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Zc || typeof a === "string") a = ih(a);
    if (a instanceof cb) return a.fc();
    return new $a();
  };
  hh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Zc || typeof a === "string") a = ih(a);
    if (a instanceof cb) return new $a(Ta(a, 2));
    return new $a();
  };
  hh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Zc || typeof a === "string") a = ih(a);
    if (a instanceof cb) return db(a);
    return new $a();
  };
  hh.freeze = function (a) {
    (a instanceof cb || a instanceof $a || a instanceof Zc) && a.Mb();
    return a;
  };
  hh.delete = function (a, b) {
    if (a instanceof cb && !a.D) return a.vf(b), !0;
    return !1;
  };
  function N(a, b) {
    var c = Aa.apply(2, arguments),
      d = a.F.j;
    if (!d) throw Error("Missing program state.");
    if (d.Cm) {
      try {
        d.zj.apply(null, [b].concat(qa(c)));
      } catch (e) {
        throw (mb("TAGGING", 21), e);
      }
      return;
    }
    d.zj.apply(null, [b].concat(qa(c)));
  }
  var jh = function () {
    this.j = {};
    this.D = {};
  };
  jh.prototype.get = function (a, b) {
    var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
    return c;
  };
  jh.prototype.add = function (a, b, c) {
    if (this.j.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.D.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.j[a] = c ? void 0 : qb(b) ? Gg(a, b) : Hg(a, b);
  };
  function kh(a, b) {
    var c = void 0;
    return c;
  }
  function lh() {
    var a = {};
    return a;
  }
  function oh(a) {
    return ph ? H.querySelectorAll(a) : null;
  }
  function qh(a, b) {
    if (!ph) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var rh = !1;
  if (H.querySelectorAll)
    try {
      var sh = H.querySelectorAll(":root");
      sh && sh.length == 1 && sh[0] == H.documentElement && (rh = !0);
    } catch (a) {}
  var ph = rh;
  var th = /^[0-9A-Fa-f]{64}$/;
  function uh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function vh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = G.crypto) == null ? 0 : b.subtle) {
      if (th.test(a)) return Promise.resolve(a);
      try {
        var c = uh(a);
        return G.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return G.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function O(a) {
    mb("GTM", a);
  }
  var zh = function (a) {
      var b = {},
        c = ["tv.1"],
        d = 0;
      for (var e = na(a), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if (g.value !== "") {
          var k,
            m = void 0,
            n = g.name,
            p = g.value,
            q = wh[n];
          if (q) {
            var r = (m = g.index) != null ? m : "",
              t = q + "__" + d;
            xh.indexOf(n) === -1 || /^e\d+$/.test(p) || yh.test(p) || th.test(p)
              ? (k = encodeURIComponent(encodeURIComponent(p)))
              : ((k = "${userData." + t + "|sha256}"), (b[t] = p), d++);
            c.push("" + q + r + "." + k);
          }
        }
      }
      var u = c.join("~");
      return { Mh: { userData: b }, Nm: u, Wm: d };
    },
    Bh = function (a) {
      if (G.Promise)
        try {
          return new Promise(function (b) {
            Ah(a, function (c, d) {
              b({ Kj: c, Jf: d });
            });
          });
        } catch (b) {}
    },
    Ch = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          k = wh[e];
        k &&
          f &&
          (xh.indexOf(e) === -1 ||
            /^e\d+$/.test(f) ||
            yh.test(f) ||
            th.test(f)) &&
          (g !== void 0 && (k += g), b.push(k + "." + f), c++);
      }
      a.length === 1 && a[0].name === "error_code" && (c = 0);
      return { Lj: encodeURIComponent(b.join("~")), Jf: c };
    },
    Ah = function (a, b) {
      Dh(a, function (c) {
        var d = Ch(c);
        b(d.Lj, d.Jf);
      });
    },
    Lh = function (a) {
      function b(r, t, u, v) {
        var w = Eh(r);
        w !== "" &&
          (th.test(w)
            ? k.push({ name: t, value: w, index: v })
            : k.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = sb(r);
          for (var v = 0; v < u.length; ++v) {
            var w = Eh(u[v]),
              x = th.test(w);
            t && !x && O(89);
            !t && x && O(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Fh[t];
        r[v] && (r[t] && O(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        for (var v = sb(d(r, t)), w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          O(64);
          return r(t);
        };
      }
      var k = [];
      if (G.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", Gh);
      e(a, "phone_number", Hh);
      e(a, "first_name", g(Ih));
      e(a, "last_name", g(Ih));
      var m = a.home_address || {};
      e(m, "street", g(Jh));
      e(m, "city", g(Jh));
      e(m, "postal_code", g(Kh));
      e(m, "region", g(Jh));
      e(m, "country", g(Kh));
      for (var n = sb(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Ih, p);
        f(q, "last_name", Ih, p);
        f(q, "street", Jh, p);
        f(q, "city", Jh, p);
        f(q, "postal_code", Kh, p);
        f(q, "region", Jh, p);
        f(q, "country", Kh, p);
      }
      return k;
    },
    Dh = function (a, b) {
      var c = Lh(a);
      Mh(c, b);
    },
    Eh = function (a) {
      return a == null ? "" : l(a) ? Bb(String(a)) : "e0";
    },
    Kh = function (a) {
      return a.replace(Nh, "");
    },
    Ih = function (a) {
      return Jh(a.replace(/\s/g, ""));
    },
    Jh = function (a) {
      return Bb(a.replace(Oh, "").toLowerCase());
    },
    Hh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Ph.test(a) ? a : "e0";
    },
    Gh = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Qh.test(c)) return c;
      }
      return "e0";
    },
    Mh = function (a, b) {
      a.some(function (c) {
        c.value && xh.indexOf(c.name);
      })
        ? b(a)
        : G.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && xh.indexOf(c.name) !== -1
                ? vh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Oh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Qh = /^\S+@\S+\.\S+$/,
    Ph = /^\+\d{10,15}$/,
    Nh = /[.~]/g,
    yh = /^[0-9A-Za-z_-]{43}$/,
    Rh = {},
    wh =
      ((Rh.email = "em"),
      (Rh.phone_number = "pn"),
      (Rh.first_name = "fn"),
      (Rh.last_name = "ln"),
      (Rh.street = "sa"),
      (Rh.city = "ct"),
      (Rh.region = "rg"),
      (Rh.country = "co"),
      (Rh.postal_code = "pc"),
      (Rh.error_code = "ec"),
      Rh),
    Sh = {},
    Fh =
      ((Sh.email = "sha256_email_address"),
      (Sh.phone_number = "sha256_phone_number"),
      (Sh.first_name = "sha256_first_name"),
      (Sh.last_name = "sha256_last_name"),
      (Sh.street = "sha256_street"),
      Sh),
    xh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
      g: {
        ya: "ad_personalization",
        R: "ad_storage",
        P: "ad_user_data",
        U: "analytics_storage",
        nc: "region",
        Qb: "consent_updated",
        Qe: "wait_for_update",
        bi: "app_remove",
        di: "app_store_refund",
        ei: "app_store_subscription_cancel",
        fi: "app_store_subscription_convert",
        gi: "app_store_subscription_renew",
        nk: "consent_update",
        Sf: "add_payment_info",
        Tf: "add_shipping_info",
        oc: "add_to_cart",
        qc: "remove_from_cart",
        Uf: "view_cart",
        Rb: "begin_checkout",
        rc: "select_item",
        hb: "view_item_list",
        Cb: "select_promotion",
        ib: "view_promotion",
        Ia: "purchase",
        sc: "refund",
        Ma: "view_item",
        Vf: "add_to_wishlist",
        pk: "exception",
        hi: "first_open",
        ii: "first_visit",
        ba: "gtag.config",
        Ta: "gtag.get",
        ji: "in_app_purchase",
        Sb: "page_view",
        qk: "screen_view",
        ki: "session_start",
        rk: "timing_complete",
        sk: "track_social",
        Nc: "user_engagement",
        tk: "user_id_update",
        jb: "gclgb",
        Ua: "gclid",
        li: "gclgs",
        mi: "gclst",
        fa: "ads_data_redaction",
        ni: "gad_source",
        Fd: "gclid_url",
        oi: "gclsrc",
        Wf: "gbraid",
        Re: "wbraid",
        ka: "allow_ad_personalization_signals",
        Se: "allow_custom_scripts",
        Te: "allow_display_features",
        Gd: "allow_enhanced_conversions",
        kb: "allow_google_signals",
        Ca: "allow_interest_groups",
        uk: "app_id",
        vk: "app_installer_id",
        wk: "app_name",
        xk: "app_version",
        Db: "auid",
        ri: "auto_detection_enabled",
        Tb: "aw_remarketing",
        Ue: "aw_remarketing_only",
        Hd: "discount",
        Id: "aw_feed_country",
        Jd: "aw_feed_language",
        da: "items",
        Kd: "aw_merchant_id",
        Xf: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        lb: "client_id",
        si: "rnd",
        Yf: "consent_update_type",
        ui: "content_group",
        vi: "content_type",
        Za: "conversion_cookie_prefix",
        Vc: "conversion_id",
        ra: "conversion_linker",
        wi: "conversion_linker_disabled",
        Ub: "conversion_api",
        Ve: "cookie_deprecation",
        Va: "cookie_domain",
        Wa: "cookie_expires",
        ab: "cookie_flags",
        uc: "cookie_name",
        Eb: "cookie_path",
        Na: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        za: "currency",
        Ld: "customer_lifetime_value",
        Wc: "custom_map",
        Zf: "gcldc",
        Md: "dclid",
        xi: "debug_mode",
        la: "developer_id",
        yi: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        zi: "dc_natural_search",
        cg: "dynamic_event_settings",
        dg: "affiliation",
        Nd: "checkout_option",
        We: "checkout_step",
        eg: "coupon",
        Yc: "item_list_name",
        Xe: "list_name",
        Ai: "promotions",
        Zc: "shipping",
        Ye: "tax",
        Od: "engagement_time_msec",
        Pd: "enhanced_client_id",
        Qd: "enhanced_conversions",
        fg: "enhanced_conversions_automatic_settings",
        Rd: "estimated_delivery_date",
        Ze: "euid_logged_in_state",
        bd: "event_callback",
        yk: "event_category",
        ob: "event_developer_id_string",
        zk: "event_label",
        xc: "event",
        Sd: "event_settings",
        Td: "event_timeout",
        Ak: "description",
        Bk: "fatal",
        Bi: "experiments",
        af: "firebase_id",
        yc: "first_party_collection",
        Ud: "_x_20",
        pb: "_x_19",
        Ci: "fledge_drop_reason",
        gg: "fledge",
        hg: "flight_error_code",
        ig: "flight_error_message",
        Di: "fl_activity_category",
        Ei: "fl_activity_group",
        jg: "fl_advertiser_id",
        Fi: "fl_ar_dedupe",
        kg: "match_id",
        Gi: "fl_random_number",
        Hi: "tran",
        Ii: "u",
        Vd: "gac_gclid",
        zc: "gac_wbraid",
        lg: "gac_wbraid_multiple_conversions",
        mg: "ga_restrict_domain",
        ng: "ga_temp_client_id",
        Ac: "gdpr_applies",
        og: "geo_granularity",
        Fb: "value_callback",
        qb: "value_key",
        Bc: "_google_ng",
        Vb: "google_signals",
        pg: "google_tld",
        Wd: "groups",
        qg: "gsa_experiment_id",
        Ji: "gtm_up",
        Gb: "iframe_state",
        dd: "ignore_referrer",
        bf: "internal_traffic_results",
        Wb: "is_legacy_converted",
        Hb: "is_legacy_loaded",
        Xd: "is_passthrough",
        ed: "_lps",
        Oa: "language",
        Yd: "legacy_developer_id_string",
        sa: "linker",
        Cc: "accept_incoming",
        sb: "decorate_forms",
        W: "domains",
        Ib: "url_position",
        rg: "method",
        Ck: "name",
        fd: "new_customer",
        sg: "non_interaction",
        Ki: "optimize_id",
        Li: "page_hostname",
        gd: "page_path",
        Da: "page_referrer",
        Jb: "page_title",
        ug: "passengers",
        vg: "phone_conversion_callback",
        Mi: "phone_conversion_country_code",
        wg: "phone_conversion_css_class",
        Ni: "phone_conversion_ids",
        xg: "phone_conversion_number",
        yg: "phone_conversion_options",
        zg: "_protected_audience_enabled",
        hd: "quantity",
        Zd: "redact_device_info",
        cf: "referral_exclusion_definition",
        Xb: "restricted_data_processing",
        Oi: "retoken",
        Dk: "sample_rate",
        df: "screen_name",
        Kb: "screen_resolution",
        Pi: "search_term",
        Ja: "send_page_view",
        Yb: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        ae: "session_engaged",
        ef: "session_engaged_time",
        tb: "session_id",
        be: "session_number",
        ff: "_shared_user_id",
        ld: "delivery_postal_code",
        Ek: "temporary_client_id",
        hf: "topmost_url",
        Qi: "tracking_id",
        jf: "traffic_type",
        Aa: "transaction_id",
        Lb: "transport_url",
        Ag: "trip_type",
        Zb: "update",
        Xa: "url_passthrough",
        kf: "_user_agent_architecture",
        lf: "_user_agent_bitness",
        nf: "_user_agent_full_version_list",
        pf: "_user_agent_mobile",
        qf: "_user_agent_model",
        rf: "_user_agent_BinaryX",
        tf: "_user_agent_BinaryX_version",
        uf: "_user_agent_wow64",
        Ea: "user_data",
        Bg: "user_data_auto_latency",
        Cg: "user_data_auto_meta",
        Dg: "user_data_auto_multi",
        Eg: "user_data_auto_selectors",
        Fg: "user_data_auto_status",
        md: "user_data_mode",
        ce: "user_data_settings",
        Ba: "user_id",
        cb: "user_properties",
        Ri: "_user_region",
        de: "us_privacy_string",
        na: "value",
        Gg: "wbraid_multiple_conversions",
        Zi: "_host_name",
        aj: "_in_page_command",
        bj: "_is_passthrough_cid",
        Nb: "non_personalized_ads",
        je: "_sst_parameters",
        nb: "conversion_label",
        wa: "page_location",
        rb: "global_developer_id_string",
        Dc: "tc_privacy_string",
      },
    },
    Th = {},
    Uh = Object.freeze(
      ((Th[P.g.ka] = 1),
      (Th[P.g.Te] = 1),
      (Th[P.g.Gd] = 1),
      (Th[P.g.kb] = 1),
      (Th[P.g.da] = 1),
      (Th[P.g.Va] = 1),
      (Th[P.g.Wa] = 1),
      (Th[P.g.ab] = 1),
      (Th[P.g.uc] = 1),
      (Th[P.g.Eb] = 1),
      (Th[P.g.Na] = 1),
      (Th[P.g.vc] = 1),
      (Th[P.g.Wc] = 1),
      (Th[P.g.la] = 1),
      (Th[P.g.cg] = 1),
      (Th[P.g.bd] = 1),
      (Th[P.g.Sd] = 1),
      (Th[P.g.Td] = 1),
      (Th[P.g.yc] = 1),
      (Th[P.g.mg] = 1),
      (Th[P.g.Vb] = 1),
      (Th[P.g.pg] = 1),
      (Th[P.g.Wd] = 1),
      (Th[P.g.bf] = 1),
      (Th[P.g.Wb] = 1),
      (Th[P.g.Hb] = 1),
      (Th[P.g.sa] = 1),
      (Th[P.g.cf] = 1),
      (Th[P.g.Xb] = 1),
      (Th[P.g.Ja] = 1),
      (Th[P.g.Yb] = 1),
      (Th[P.g.jd] = 1),
      (Th[P.g.kd] = 1),
      (Th[P.g.ef] = 1),
      (Th[P.g.ld] = 1),
      (Th[P.g.Lb] = 1),
      (Th[P.g.Zb] = 1),
      (Th[P.g.ce] = 1),
      (Th[P.g.cb] = 1),
      (Th[P.g.je] = 1),
      Th)
    );
  Object.freeze([
    P.g.wa,
    P.g.Da,
    P.g.Jb,
    P.g.Oa,
    P.g.df,
    P.g.Ba,
    P.g.af,
    P.g.ui,
  ]);
  var Vh = {},
    Wh = Object.freeze(
      ((Vh[P.g.bi] = 1),
      (Vh[P.g.di] = 1),
      (Vh[P.g.ei] = 1),
      (Vh[P.g.fi] = 1),
      (Vh[P.g.gi] = 1),
      (Vh[P.g.hi] = 1),
      (Vh[P.g.ii] = 1),
      (Vh[P.g.ji] = 1),
      (Vh[P.g.ki] = 1),
      (Vh[P.g.Nc] = 1),
      Vh)
    ),
    Xh = {},
    Yh = Object.freeze(
      ((Xh[P.g.Sf] = 1),
      (Xh[P.g.Tf] = 1),
      (Xh[P.g.oc] = 1),
      (Xh[P.g.qc] = 1),
      (Xh[P.g.Uf] = 1),
      (Xh[P.g.Rb] = 1),
      (Xh[P.g.rc] = 1),
      (Xh[P.g.hb] = 1),
      (Xh[P.g.Cb] = 1),
      (Xh[P.g.ib] = 1),
      (Xh[P.g.Ia] = 1),
      (Xh[P.g.sc] = 1),
      (Xh[P.g.Ma] = 1),
      (Xh[P.g.Vf] = 1),
      Xh)
    ),
    Zh = Object.freeze([
      P.g.ka,
      P.g.kb,
      P.g.vc,
      P.g.yc,
      P.g.dd,
      P.g.Ja,
      P.g.Zb,
    ]),
    $h = Object.freeze([].concat(qa(Zh))),
    ai = Object.freeze([P.g.Wa, P.g.Td, P.g.kd, P.g.ef, P.g.Od]),
    bi = Object.freeze([].concat(qa(ai))),
    ci = {},
    di =
      ((ci[P.g.R] = "1"),
      (ci[P.g.U] = "2"),
      (ci[P.g.P] = "3"),
      (ci[P.g.ya] = "4"),
      ci),
    ei = {},
    fi = Object.freeze(
      ((ei[P.g.ka] = 1),
      (ei[P.g.Gd] = 1),
      (ei[P.g.Ca] = 1),
      (ei[P.g.Tb] = 1),
      (ei[P.g.Ue] = 1),
      (ei[P.g.Hd] = 1),
      (ei[P.g.Id] = 1),
      (ei[P.g.Jd] = 1),
      (ei[P.g.da] = 1),
      (ei[P.g.Kd] = 1),
      (ei[P.g.Za] = 1),
      (ei[P.g.ra] = 1),
      (ei[P.g.Va] = 1),
      (ei[P.g.Wa] = 1),
      (ei[P.g.ab] = 1),
      (ei[P.g.Na] = 1),
      (ei[P.g.za] = 1),
      (ei[P.g.Ld] = 1),
      (ei[P.g.la] = 1),
      (ei[P.g.yi] = 1),
      (ei[P.g.Qd] = 1),
      (ei[P.g.Rd] = 1),
      (ei[P.g.af] = 1),
      (ei[P.g.yc] = 1),
      (ei[P.g.Wb] = 1),
      (ei[P.g.Hb] = 1),
      (ei[P.g.Oa] = 1),
      (ei[P.g.fd] = 1),
      (ei[P.g.wa] = 1),
      (ei[P.g.Da] = 1),
      (ei[P.g.vg] = 1),
      (ei[P.g.wg] = 1),
      (ei[P.g.xg] = 1),
      (ei[P.g.yg] = 1),
      (ei[P.g.Xb] = 1),
      (ei[P.g.Ja] = 1),
      (ei[P.g.Yb] = 1),
      (ei[P.g.jd] = 1),
      (ei[P.g.ld] = 1),
      (ei[P.g.Aa] = 1),
      (ei[P.g.Lb] = 1),
      (ei[P.g.Zb] = 1),
      (ei[P.g.Xa] = 1),
      (ei[P.g.Ea] = 1),
      (ei[P.g.Ba] = 1),
      (ei[P.g.na] = 1),
      ei)
    ),
    gi = {},
    hi = Object.freeze(
      ((gi.search = "s"),
      (gi.youtube = "y"),
      (gi.playstore = "p"),
      (gi.shopping = "h"),
      (gi.ads = "a"),
      (gi.maps = "m"),
      gi)
    );
  Object.freeze(P.g);
  var ii = {},
    ji = (G.google_tag_manager = G.google_tag_manager || {});
  ii.Kg = "4790";
  ii.ie = Number("0") || 0;
  ii.Ya = "dataLayer";
  ii.Zm =
    "ChEI8JHTtAYQntufjIavnPDdARIkABX2btfG3emfPVX+ylmSh0qt8P2GlBxKCTLVb4tdXAMTqnkrGgIUQw\x3d\x3d";
  var ki = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    li = { __paused: 1, __tg: 1 },
    mi;
  for (mi in ki) ki.hasOwnProperty(mi) && (li[mi] = 1);
  var ni = zb(""),
    oi,
    pi = !1;
  oi = pi;
  var qi,
    ri = !1;
  qi = ri;
  var si,
    ti = !1;
  si = ti;
  ii.Ed = "www.googletagmanager.com";
  var ui = "" + ii.Ed + (oi ? "/gtag/js" : "/gtm.js"),
    vi = null,
    wi = null,
    xi = {},
    yi = {};
  function zi() {
    var a = ji.sequence || 1;
    ji.sequence = a + 1;
    return a;
  }
  ii.lk = "";
  var Ai = "";
  ii.yf = Ai;
  var Bi = new (function () {
    this.j = "";
    this.H = this.D = !1;
    this.Pa = this.O = this.Z = this.K = "";
  })();
  function Ci() {
    var a = Bi.K.length;
    return Bi.K[a - 1] === "/" ? Bi.K.substring(0, a - 1) : Bi.K;
  }
  function Di(a) {
    for (var b = {}, c = na(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Ei = new wb(),
    Fi = {},
    Gi = {},
    Ji = {
      name: ii.Ya,
      set: function (a, b) {
        h(Lb(a, b), Fi);
        Hi();
      },
      get: function (a) {
        return Ii(a, 2);
      },
      reset: function () {
        Ei = new wb();
        Fi = {};
        Hi();
      },
    };
  function Ii(a, b) {
    return b != 2 ? Ei.get(a) : Ki(a);
  }
  function Ki(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Fi, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Li(a, b) {
    Gi.hasOwnProperty(a) || (Ei.set(a, b), h(Lb(a, b), Fi), Hi());
  }
  function Mi() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Ii(c, 1);
      if (Array.isArray(d) || Xa(d)) d = h(d);
      Gi[c] = d;
    }
  }
  function Hi(a) {
    z(Gi, function (b, c) {
      Ei.set(b, c);
      h(Lb(b), Fi);
      h(Lb(b, c), Fi);
      a && delete Gi[b];
    });
  }
  function Ni(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Ki(a) : Ei.get(a);
    Va(d) === "array" || Va(d) === "object" ? (c = h(d)) : (c = d);
    return c;
  }
  var Oi = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if (d === "js_variable") {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (Ib(m, "dataLayer.")) f = Ii(m.substring(10));
            else {
              var n = m.split(".");
              f = G[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (f !== void 0) break;
          }
        }
      } else if (d === "css_selector" && ph)
        try {
          var q = oh(e);
          if (q && q.length > 0) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < (b === "email" || b === "phone_number" ? 5 : 1);
              r++
            )
              f.push(Ic(q[r]) || Bb(q[r].value));
            f = f.length === 1 ? f[0] : f;
          }
        } catch (t) {
          O(149);
        }
      return f ? ((a[b] = f), !0) : !1;
    },
    Pi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Oi(b, "email", a.email) || c;
        c = Oi(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Oi(f, "first_name", d[e].first_name) || c;
          c = Oi(f, "last_name", d[e].last_name) || c;
          c = Oi(f, "street", d[e].street) || c;
          c = Oi(f, "city", d[e].city) || c;
          c = Oi(f, "region", d[e].region) || c;
          c = Oi(f, "country", d[e].country) || c;
          c = Oi(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Qi = function (a) {
      return Xa(a) ? !!a.enable_code : !1;
    };
  function Ri(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Si = [],
    Ti = {};
  function Ui(a) {
    return Si[a] === void 0 ? !1 : Si[a];
  }
  var Vi = [];
  function Wi(a) {
    switch (a) {
      case 0:
        return 0;
      case 39:
        return 1;
      case 40:
        return 2;
      case 53:
        return 3;
      case 59:
        return 6;
      case 62:
        return 8;
      case 72:
        return 4;
      case 78:
        return 5;
      case 82:
        return 7;
    }
  }
  function R(a) {
    Vi[a] = !0;
    var b = Wi(a);
    b !== void 0 && (Si[b] = !0);
  }
  R(27);
  R(23);
  R(24);
  R(25);
  R(26);
  R(41);
  R(65);
  R(50);
  R(61);
  R(30);
  R(15);
  R(85);
  R(14);
  R(86);
  R(89);
  R(84);
  R(54);
  R(73);
  R(7);
  R(42);
  R(4);
  R(69);
  R(80);
  R(58);
  R(57);
  R(44);
  R(71);
  R(93);
  R(90);
  R(72);
  R(5);
  R(78);
  Ti[1] = Ri("1", 6e4);
  Ti[3] = Ri("10", 1);
  Ti[2] = Ri("", 50);
  R(20);
  R(12);
  R(56);
  R(81);

  R(45);
  R(82);
  R(68);
  R(62);
  R(51);
  R(74);
  function T(a) {
    return !!Vi[a];
  }
  var $i = /:[0-9]+$/,
    aj = /^\d+\.fls\.doubleclick\.net$/;
  function bj(a, b, c, d) {
    for (
      var e = [], f = na(a.split("&")), g = f.next();
      !g.done;
      g = f.next()
    ) {
      var k = na(g.value.split("=")),
        m = k.next().value,
        n = pa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function cj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = dj(a.protocol) || dj(G.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : G.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || G.location.hostname)
          .replace($i, "")
          .toLowerCase());
    return ej(a, b, c, d, e);
  }
  function ej(a, b, c, d, e) {
    var f,
      g = dj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = fj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace($i, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || mb("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = bj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function dj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function fj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var gj = {},
    hj = 0;
  function U(a) {
    var b = gj[a];
    if (!b) {
      var c = H.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || mb("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace($i, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      hj < 5 && ((gj[a] = b), hj++);
    }
    return b;
  }
  function ij(a) {
    function b(n) {
      var p = n.split("=")[0];
      return d.indexOf(p) < 0 ? n : p + "=0";
    }
    function c(n) {
      return n
        .split("&")
        .map(b)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
        " "
      ),
      e = U(a),
      f = a.split(/[?#]/)[0],
      g = e.search,
      k = e.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = c(g);
    k = c(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function jj(a) {
    var b = U(G.location.href),
      c = cj(b, "host", !1);
    if (c && c.match(aj)) {
      var d = cj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var kj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function lj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return U("" + c + b).href;
    }
  }
  function mj(a, b) {
    if (Bi.D || qi) return lj(a, b);
  }
  function nj() {
    return !!ii.yf && ii.yf.split("@@").join("") !== "SGTM_TOKEN";
  }
  function oj(a) {
    for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function pj(a, b) {
    return Bi.D ? "" + Ci() + (b ? kj[a] || "" : "") : a;
  }
  function qj(a) {
    var b = String(a[Je.oa] || "").replace(/_/g, "");
    return Ib(b, "cvt") ? "cvt" : b;
  }
  var rj =
    G.location.search.indexOf("?gtm_latency=") >= 0 ||
    G.location.search.indexOf("&gtm_latency=") >= 0;
  var sj = { sampleRate: "0.005000", hk: "", Xm: "0.005" },
    tj = Math.random(),
    uj;
  if (!(uj = rj)) {
    var vj = sj.sampleRate;
    uj = tj < Number(vj);
  }
  var wj = uj,
    xj =
      (uc == null ? void 0 : uc.includes("gtm_debug=d")) ||
      rj ||
      (!T(45) && wj) ||
      (T(45) && tj >= 1 - Number(sj.Xm));
  var yj = /gtag[.\/]js/,
    zj = /gtm[.\/]js/,
    Aj = !1;
  function Bj(a) {
    if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
      var b;
      a: {
        if (a.scriptSource) {
          for (
            var c = Bi.H,
              d = U(a.scriptSource),
              e = c ? d.pathname : "" + d.hostname + d.pathname,
              f = H.scripts,
              g = "",
              k = 0;
            k < f.length;
            ++k
          ) {
            var m = f[k];
            if (
              !(
                m.innerHTML.length === 0 ||
                (!c &&
                  m.innerHTML.indexOf(
                    a.scriptContainerId || "SHOULD_NOT_BE_SET"
                  ) < 0) ||
                m.innerHTML.indexOf(e) < 0
              )
            ) {
              if (m.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                b = String(k);
                break a;
              }
              g = String(k);
            }
          }
          if (g) {
            b = g;
            break a;
          }
        }
        b = void 0;
      }
      var n = b;
      if (n) return (Aj = !0), n;
    }
    var p = [].slice.call(document.scripts);
    return a.scriptElement ? String(p.indexOf(a.scriptElement)) : "-1";
  }
  function Cj(a) {
    if (Aj) return "1";
    var b = a.scriptSource;
    if (b) {
      if (yj.test(b)) return "3";
      if (zj.test(b)) return "2";
    }
    return "0";
  }
  function Dj(a, b) {
    var c = Ej();
    c.pending || (c.pending = []);
    tb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var Fj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
  };
  function Ej() {
    var a = vc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new Fj()), (a.tidr = b));
    return b;
  }
  var Gj = {},
    Hj = !1,
    Nf = {
      ctid: "GTM-NBLDJ7X",
      canonicalContainerId: "103953592",
      Mj: "GTM-NBLDJ7X",
      Nj: "GTM-NBLDJ7X",
    };
  Gj.fe = zb("");
  function Ij() {
    var a = Jj();
    return Hj ? a.map(Kj) : a;
  }
  function Lj() {
    var a = Mj();
    return Hj ? a.map(Kj) : a;
  }
  function Nj() {
    return Oj(Nf.ctid);
  }
  function Pj() {
    return Oj(Nf.canonicalContainerId || "_" + Nf.ctid);
  }
  function Jj() {
    return Nf.Mj ? Nf.Mj.split("|") : [Nf.ctid];
  }
  function Mj() {
    return Nf.Nj ? Nf.Nj.split("|") : [];
  }
  function Qj() {
    var a = Rj(Sj()),
      b = a && a.parent;
    if (b) return Rj(b);
  }
  function Tj() {
    var a = Rj(Sj());
    if (a) {
      for (; a.parent; ) {
        var b = Rj(a.parent);
        if (!b) break;
        a = b;
      }
      return a;
    }
  }
  function Rj(a) {
    var b = Ej();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Oj(a) {
    return Hj ? Kj(a) : a;
  }
  function Kj(a) {
    return "siloed_" + a;
  }
  function Uj(a) {
    return Hj ? Vj(a) : a;
  }
  function Vj(a) {
    a = String(a);
    return Ib(a, "siloed_") ? a.substring(7) : a;
  }
  function Wj() {
    var a = !1;
    if (a) {
      var b = Ej();
      if (b.siloed) {
        for (
          var c = [], d = Jj().map(Kj), e = Mj().map(Kj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Bf: void 0 }, g++
        )
          (f.Bf = b.siloed[g]),
            !Hj &&
            tb(
              f.Bf.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.Bf.ctid;
                };
              })(f)
            )
              ? (Hj = !0)
              : c.push(f.Bf);
        b.siloed = c;
      }
    }
  }
  function Xj() {
    var a = Ej();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Ij(), f = Lj(), g = {}, k = 0;
        k < a.pending.length;
        g = { Ke: void 0 }, k++
      )
        (g.Ke = a.pending[k]),
          tb(
            g.Ke.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ke.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Ke.onLoad), (d = !0))
            : c.push(g.Ke);
      a.pending = c;
      if (b)
        try {
          b(Pj());
        } catch (m) {}
    }
  }
  function Yj() {
    for (
      var a = Nf.ctid,
        b = Ij(),
        c = Lj(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Nf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          tc && (q.scriptElement = tc);
          uc && (q.scriptSource = uc);
          T(43) &&
            Qj() === void 0 &&
            ((q.htmlLoadOrder = Bj(q)), (q.loadScriptType = Cj(q)));
          var r = p ? e.destination : e.container,
            t = r[n];
          t ? (p && t.state === 0 && O(93), Object.assign(t, q)) : (r[n] = q);
        },
        e = Ej(),
        f = na(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = na(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Pj()] = {};
    Xj();
  }
  function Zj(a) {
    return !!Ej().container[a];
  }
  function ak(a) {
    var b = Ej().destination[a];
    return !!b && !!b.state;
  }
  function Sj() {
    return { ctid: Nj(), isDestination: Gj.fe };
  }
  function bk(a) {
    var b = Ej();
    (b.siloed = b.siloed || []).push(a);
  }
  function ck() {
    var a = Ej().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function dk() {
    var a = {};
    z(Ej().destination, function (b, c) {
      c.state === 0 && (a[Vj(b)] = c);
    });
    return a;
  }
  function ek(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var fk = { gk: Number("5"), Rn: Number("") },
    gk = [],
    hk = [];
  function ik(a) {
    gk.push(a);
  }
  var jk = !1,
    kk = "?id=" + Nf.ctid,
    lk = void 0,
    mk = {},
    nk = void 0,
    ok = new (function () {
      var a = 5;
      fk.gk > 0 && (a = fk.gk);
      this.D = a;
      this.j = 0;
      this.H = [];
    })(),
    pk = 1e3;
  function qk(a, b, c, d) {
    var e = lk;
    if (e === void 0)
      if (a) e = 0;
      else if (c) e = zi();
      else return "";
    for (
      var f = [pj("https://www.googletagmanager.com"), a ? "/td" : "/a", kk],
        g = na(a ? hk : gk),
        k = g.next();
      !k.done;
      k = g.next()
    )
      for (
        var m = k.value,
          n = m({
            eventId: e,
            Sa: !!b,
            Cj: !!d,
            mc: function () {
              jk = !0;
            },
          }),
          p = na(n),
          q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = na(q.value),
          t = r.next().value,
          u = r.next().value;
        f.push("&" + t + "=" + u);
      }
    f.push("&z=0");
    return f.join("");
  }
  function rk() {
    nk && (G.clearTimeout(nk), (nk = void 0));
    if (lk !== void 0 && sk) {
      var a;
      (a = mk[lk]) || (a = ok.j < ok.D ? !1 : Db() - ok.H[ok.j % ok.D] < 1e3);
      if (a || pk-- <= 0) O(1), (mk[lk] = !0);
      else {
        var b = ok.j++ % ok.D;
        ok.H[b] = Db();
        var c = qk(!1, !0);
        Ec(c);
        sk = jk = !1;
      }
    }
  }
  function tk() {
    if (xj) {
      var a = qk(!0, !0, !0, !0);
      jk && (Pc(a), (jk = !1));
    }
  }
  var sk = !1;
  function uk(a) {
    mk[a] ||
      (a !== lk && (rk(), (lk = a)),
      (sk = !0),
      nk || (nk = G.setTimeout(rk, 500)),
      qk(!1).length >= 2022 && rk());
  }
  var vk = ub();
  function wk() {
    vk = ub();
  }
  function xk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(vk)],
    ];
  }
  var yk = "/td?id=" + Nf.ctid,
    zk = ["v", "t", "pid", "dl", "tdp"],
    Ak = ["mcc"],
    Bk = {},
    Ck = {};
  function Dk(a, b, c) {
    Ck[a] = b;
    (c === void 0 || c) && Ek(a);
  }
  function Ek(a, b) {
    if (Bk[a] === void 0 || (b === void 0 ? 0 : b)) Bk[a] = !0;
  }
  function Fk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Bk)
      .filter(function (c) {
        return Bk[c] === !0 && Ck[c] !== void 0 && (a || !Ak.includes(c));
      })
      .map(function (c) {
        var d = Ck[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + pj("https://www.googletagmanager.com") + yk + ("" + b + "&z=0");
  }
  function Gk() {
    Object.keys(Bk).forEach(function (a) {
      zk.indexOf(a) < 0 && (Bk[a] = !1);
    });
  }
  function Hk(a) {
    a = a === void 0 ? !1 : a;
    if (xj)
      if (T(44)) {
        var b = Fk(a);
        a ? Pc(b) : Ec(b);
        Gk();
      } else if (xj) {
        var c = qk(!0, !0);
        jk && (Ec(c), (jk = !1));
      }
  }
  function Ik() {
    Object.keys(Bk).filter(function (a) {
      return Bk[a] && !zk.includes(a);
    }).length > 0 && Hk(!0);
  }
  var Jk = ub();
  function Kk() {
    Jk = ub();
  }
  function Lk() {
    T(44)
      ? (Dk("v", "3"),
        Dk("t", "t"),
        Dk("pid", function () {
          return String(Jk);
        }),
        Fc(G, "pagehide", Ik),
        G.setInterval(Kk, 864e5))
      : hk.push(xk);
  }
  var Mk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Nk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Ok = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    Pk = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var Qk, Rk;
  a: {
    for (var Sk = ["CLOSURE_FLAGS"], Tk = Ba, Uk = 0; Uk < Sk.length; Uk++)
      if (((Tk = Tk[Sk[Uk]]), Tk == null)) {
        Rk = null;
        break a;
      }
    Rk = Tk;
  }
  var Vk = Rk && Rk[610401301];
  Qk = Vk != null ? Vk : !1;
  function Wk() {
    var a = Ba.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Xk,
    Yk = Ba.navigator;
  Xk = Yk ? Yk.userAgentData || null : null;
  function Zk(a) {
    return Qk
      ? Xk
        ? Xk.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function $k(a) {
    return Wk().indexOf(a) != -1;
  }
  function al() {
    return Qk ? !!Xk && Xk.brands.length > 0 : !1;
  }
  function bl() {
    return al() ? !1 : $k("Opera");
  }
  function cl() {
    return $k("Firefox") || $k("FxiOS");
  }
  function dl() {
    return al()
      ? Zk("Chromium")
      : (($k("Chrome") || $k("CriOS")) && !(al() ? 0 : $k("Edge"))) ||
          $k("Silk");
  }
  function el() {
    return Qk ? !!Xk && !!Xk.BinaryX : !1;
  }
  function fl() {
    return $k("iPhone") && !$k("iPod") && !$k("iPad");
  }
  function gl() {
    fl() || $k("iPad") || $k("iPod");
  }
  var hl = function (a) {
    hl[" "](a);
    return a;
  };
  hl[" "] = function () {};
  bl();
  al() || $k("Trident") || $k("MSIE");
  $k("Edge");
  !$k("Gecko") ||
    (Wk().toLowerCase().indexOf("webkit") != -1 && !$k("Edge")) ||
    $k("Trident") ||
    $k("MSIE") ||
    $k("Edge");
  Wk().toLowerCase().indexOf("webkit") != -1 && !$k("Edge") && $k("Mobile");
  el() || $k("Macintosh");
  el() || $k("Windows");
  (el() ? Xk.BinaryX === "Linux" : $k("Linux")) || el() || $k("CrOS");
  el() || $k("Android");
  fl();
  $k("iPad");
  $k("iPod");
  gl();
  Wk().toLowerCase().indexOf("kaios");
  var il = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    jl = /#|$/,
    kl = function (a, b) {
      var c = a.search(jl),
        d = il(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    ll = /[?&]($|#)/,
    ml = function (a, b, c) {
      for (
        var d, e = a.search(jl), f = 0, g, k = [];
        (g = il(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(ll, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          u;
        t < 0 || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var nl = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              hl(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    ol = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function pl(a) {
    if (!a || !H.head) return null;
    var b = ql("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var rl = function (a) {
      if (G.top == G) return 0;
      if (a === void 0 ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
      }
      return nl(G.top) ? 1 : 2;
    },
    ql = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var sl = "",
    tl,
    ul = [],
    vl = !1;
  function wl() {
    var a = U(G.location.href);
    return a.hostname + a.pathname;
  }
  function xl() {
    var a = [];
    sl && a.push(["dl", encodeURIComponent(sl)]);
    ul.length > 0 && a.push(["tdp", ul.join(".")]);
    tl !== void 0 && a.push(["frm", String(tl)]);
    return a;
  }
  var yl = function (a) {
    var b = vl ? [] : xl();
    !vl && a.Sa && ((vl = !0), b.length && a.mc());
    return b;
  };
  function zl() {
    if (T(44)) {
      var a = wl();
      a && Dk("dl", encodeURIComponent(a));
      Dk("tdp", function () {
        return ul.length > 0 ? ul.join(".") : void 0;
      });
      var b = rl(!0);
      b !== void 0 && Dk("frm", String(b));
    } else hk.push(yl);
  }
  var Al = [],
    Bl = [];
  function Cl(a) {
    if (T(44)) Dk(a, "1");
    else {
      if (Bl.indexOf(a) !== -1) return;
      Al.push(a);
      Bl.push(a);
    }
    Hk();
  }
  function Dl(a) {
    if (!Al.length) return [];
    for (var b = xl(), c = na(Al), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Sa && (a.mc(), (Al.length = 0));
    return b;
  }
  function El(a) {
    mb("HEALTH", a);
  }
  var Fl;
  try {
    Fl = JSON.parse(
      kb(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    O(123), El(2), (Fl = {});
  }
  function Gl() {
    return Fl["0"] || "";
  }
  function Hl() {
    return Fl["1"] || "";
  }
  function Il() {
    var a = !1;
    return a;
  }
  function Jl() {
    return Fl["6"] !== !1;
  }
  function Kl() {
    var a = "";
    return a;
  }
  function Ll() {
    var a = !1;
    a = !!Fl["5"];
    return a;
  }
  function Ml() {
    var a = "";
    return a;
  }
  var Nl = new (function (a, b) {
    this.j = a;
    this.defaultValue = b === void 0 ? !1 : b;
  })(1933);
  function Ol() {
    var a = vc("google_tag_data", {});
    return (a.ics = a.ics || new Pl());
  }
  var Pl = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Pl.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    mb("TAGGING", 19);
    b == null ? mb("TAGGING", 18) : Ql(this, a, b === "granted", c, d, e, f, g);
  };
  Pl.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Ql(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Ql = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        G.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (mb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  ca = Pl.prototype;
  ca.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (c == null ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = na(d), n = m.next(); !n.done; n = m.next())
        Rl(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = na(d), q = p.next(); !q.done; q = p.next())
        Rl(this, q.value);
  };
  ca.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  ca.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    e = d.default;
    if (e !== void 0) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (e !== void 0) return e ? 1 : 2;
      e = f.default;
      if (e !== void 0) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  ca.addListener = function (a, b) {
    this.j.push({ consentTypes: a, vl: b });
  };
  var Rl = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Oj = !0);
    }
  };
  Pl.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Oj) {
        d.Oj = !1;
        try {
          d.vl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Tl = function () {
    var a = Sl,
      b = "nh";
    if (a.nh && a.hasOwnProperty(b)) return a.nh;
    var c = new a();
    return (a.nh = c);
  };
  var Sl = function () {
    var a = {};
    this.j = function () {
      var b = Nl.j,
        c = Nl.defaultValue;
      return a[b] != null ? a[b] : c;
    };
    this.D = function () {
      a[Nl.j] = !0;
    };
  };
  var Ul = !1,
    Vl = !1,
    Wl = {
      delegatedConsentTypes: {},
      coreBinaryXServices: {},
      usedCoreBinaryXServices: !1,
      selectedAllCoreBinaryXServices: !1,
    },
    Xl = function (a) {
      var b = Ol();
      b.accessedAny = !0;
      return (l(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c, Wl)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Yl = function (a) {
      var b = Ol();
      b.accessedAny = !0;
      return b.getConsentState(a, Wl);
    },
    Zl = function (a) {
      for (var b = {}, c = na(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = Wl.coreBinaryXServices[e] !== !1;
      }
      return b;
    },
    $l = function (a) {
      var b = Ol();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    am = function () {
      if (!Tl().j()) return !1;
      var a = Ol();
      a.accessedAny = !0;
      return a.active;
    },
    bm = function (a, b) {
      Ol().addListener(a, b);
    },
    cm = function (a, b) {
      Ol().notifyListeners(a, b);
    },
    dm = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!$l(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        bm(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    em = function (a, b) {
      function c() {
        for (var k = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Xl(n) && !f[n] && k.push(n);
        }
        return k;
      }
      function d(k) {
        for (var m = 0; m < k.length; m++) f[k[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        bm(e, function (k) {
          function m(q) {
            q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
          }
          var n = c();
          if (n.length !== 0) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : G.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  var fm = [P.g.R, P.g.U, P.g.P, P.g.ya],
    gm,
    hm;
  function im(a) {
    for (
      var b = a[P.g.nc], c = Array.isArray(b) ? b : [b], d = { Ae: 0 };
      d.Ae < c.length;
      d = { Ae: d.Ae }, ++d.Ae
    )
      z(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.nc) {
              var k = c[e.Ae],
                m = Gl(),
                n = Hl();
              Vl = !0;
              Ul && mb("TAGGING", 20);
              Ol().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function jm(a) {
    !hm && gm && Cl("crc");
    hm = !0;
    var b = a[P.g.nc];
    b && O(40);
    var c = a[P.g.Qe];
    c && O(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Be: 0 };
      e.Be < d.length;
      e = { Be: e.Be }, ++e.Be
    )
      z(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.nc && g !== P.g.Qe) {
              var m = d[f.Be],
                n = Number(c),
                p = Gl(),
                q = Hl();
              n = n === void 0 ? 0 : n;
              Ul = !0;
              Vl && mb("TAGGING", 20);
              Ol().default(g, k, m, p, q, n, Wl);
            }
          };
        })(e)
      );
  }
  function km(a, b) {
    gm = !0;
    z(a, function (c, d) {
      Ul = !0;
      Vl && mb("TAGGING", 20);
      Ol().update(c, d, Wl);
    });
    cm(b.eventId, b.priorityId);
  }
  function lm(a) {
    a.hasOwnProperty("all") &&
      ((Wl.selectedAllCoreBinaryXServices = !0),
      z(hi, function (b) {
        Wl.coreBinaryXServices[b] = a.all === "granted";
        Wl.usedCoreBinaryXServices = !0;
      }));
    z(a, function (b, c) {
      b !== "all" &&
        ((Wl.coreBinaryXServices[b] = c === "granted"),
        (Wl.usedCoreBinaryXServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Xl(b);
    });
  }
  function mm(a, b) {
    bm(a, b);
  }
  function nm(a, b) {
    em(a, b);
  }
  function om(a, b) {
    dm(a, b);
  }
  function pm() {
    var a = [P.g.R, P.g.ya, P.g.P];
    Ol().waitForUpdate(a, 500, Wl);
  }
  function qm(a) {
    for (var b = na(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Ol().clearTimeout(d, void 0, Wl);
    }
    cm();
  }
  var rm = function () {
    if (ji.pscdl === void 0) {
      var a = function (b) {
        ji.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in rc
          ? (a("pending"), rc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var sm = /[A-Z]+/,
    tm = /\s/;
  function um(a, b) {
    if (l(a)) {
      a = Bb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (sm.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (tm.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, ia: d + "-" + f[0], ma: f };
        }
      }
    }
  }
  function vm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = um(a[d], b);
      e && (c[e.id] = e);
    }
    wm(c);
    var f = [];
    z(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function wm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ma[xm[2]] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ym = {},
    xm =
      ((ym[0] = 0),
      (ym[1] = 0),
      (ym[2] = 1),
      (ym[3] = 0),
      (ym[4] = 1),
      (ym[5] = 2),
      (ym[6] = 0),
      (ym[7] = 0),
      (ym[8] = 0),
      ym);
  var zm = Number("") || 500,
    Am = {},
    Bm = {},
    Cm = { initialized: 11, complete: 12, interactive: 13 },
    Dm = {},
    Em = Object.freeze(((Dm[P.g.Ja] = !0), Dm)),
    Fm =
      H.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      H.location.search.indexOf("&gtm_diagnostics=") >= 0,
    Gm = void 0;
  function Hm(a, b) {
    if (b.length && xj) {
      var c;
      (c = Am)[a] != null || (c[a] = []);
      Bm[a] != null || (Bm[a] = []);
      var d = b.filter(function (e) {
        return !Bm[a].includes(e);
      });
      Am[a].push.apply(Am[a], qa(d));
      Bm[a].push.apply(Bm[a], qa(d));
      !Gm &&
        d.length > 0 &&
        (T(44) ? Ek("tdc", !0) : Fc(G, "pagehide", Im),
        (Gm = G.setTimeout(function () {
          T(44) || Gc(G, "pagehide", Im);
          Hk();
          Am = {};
          Gm = void 0;
        }, zm)));
    }
  }
  function Jm(a, b, c) {
    if (xj && a === "config") {
      var d,
        e = (d = um(b)) == null ? void 0 : d.ma;
      if (!(e && e.length > 1)) {
        var f,
          g = vc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = h(c.K);
        h(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = Km(f[n], k);
            p.length && (Fm && console.log(p), m.push(n));
          }
        m.length && (Hm(b, m), mb("TAGGING", Cm[H.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function Lm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Km(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var u;
        Va(t) === "object" ? (u = t[r]) : Va(t) === "array" && (u = t[r]);
        return u === void 0 ? Em[r] : u;
      },
      f = Lm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Va(m) === "object" || Va(m) === "array",
          q = Va(n) === "object" || Va(n) === "array";
        if (p && q) Km(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Mm(a) {
    var b = Nm();
    if (!b) return [];
    var c = [["tdc", b]];
    a.Sa && a.mc();
    return c;
  }
  function Im() {
    Object.keys(Am).length !== 0 && (G.clearTimeout(Gm), tk());
  }
  function Nm() {
    var a = [],
      b;
    for (b in Am) Am.hasOwnProperty(b) && a.push(b + "*" + Am[b].join("."));
    return a.length ? a.join("!") : void 0;
  }
  function Om() {
    T(44)
      ? Dk(
          "tdc",
          function () {
            Gm && (G.clearTimeout(Gm), (Gm = void 0));
            return Nm();
          },
          !1
        )
      : hk.push(Mm);
  }
  var Pm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.O = d;
      this.H = e;
      this.K = f;
      this.D = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Qm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 4:
          c.push(a.j), c.push(a.O), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = na(Qm(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Rm = function (a) {
      for (
        var b = {}, c = Qm(a, 4), d = na(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = na(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Sm = function (a, b, c) {
      function d(n) {
        Xa(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Qm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Tm = function (a) {
      for (
        var b = [P.g.Sc, P.g.Oc, P.g.Pc, P.g.Qc, P.g.Rc, P.g.Tc, P.g.Uc],
          c = Qm(a, 3),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = na(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Um = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.D = {};
      this.O = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Vm = function (a, b) {
      a.D = b;
      return a;
    },
    Wm = function (a, b) {
      a.O = b;
      return a;
    },
    Xm = function (a, b) {
      a.j = b;
      return a;
    },
    Ym = function (a, b) {
      a.H = b;
      return a;
    },
    Zm = function (a, b) {
      a.Z = b;
      return a;
    },
    $m = function (a, b) {
      a.K = b;
      return a;
    },
    an = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    bn = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    cn = function (a, b) {
      a.onFailure = b;
      return a;
    },
    dn = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    en = function (a) {
      return new Pm(
        a.eventId,
        a.priorityId,
        a.D,
        a.O,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var fn = {};
  function gn(a, b, c) {
    wj && a !== void 0 && ((fn[a] = fn[a] || []), fn[a].push(c + b), uk(a));
  }
  function hn(a) {
    var b = a.eventId,
      c = a.Sa,
      d = [],
      e = fn[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete fn[b];
    return d;
  }
  function jn(a, b) {
    var c = um(Oj(a), !0);
    c && kn.register(c, b);
  }
  function ln(a, b, c, d) {
    var e = um(c, d.isGtmEvent);
    e && kn.push("event", [b, a], e, d);
  }
  function mn(a, b, c, d) {
    var e = um(c, d.isGtmEvent);
    e && kn.push("get", [a, b], e, d);
  }
  function nn(a) {
    var b = um(Oj(a), !0),
      c;
    b ? (c = on(kn, b).j) : (c = {});
    return c;
  }
  function pn(a, b) {
    var c = um(Oj(a), !0);
    if (c) {
      var d = kn,
        e = h(b, null);
      h(on(d, c).j, e);
      on(d, c).j = e;
    }
  }
  var qn = function () {
      this.O = {};
      this.j = {};
      this.D = {};
      this.Z = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    rn = function (a, b, c, d) {
      this.D = Db();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    sn = function () {
      this.destinations = {};
      this.D = {};
      this.j = [];
    },
    on = function (a, b) {
      var c = b.ia;
      return (a.destinations[c] = a.destinations[c] || new qn());
    },
    tn = function (a, b, c, d) {
      if (d.j) {
        var e = on(a, d.j),
          f = e.Z;
        if (f) {
          var g = h(c, null),
            k = h(e.O[d.j.id], null),
            m = h(e.K, null),
            n = h(e.j, null),
            p = h(a.D, null),
            q = {};
          if (wj)
            try {
              q = h(Fi);
            } catch (v) {
              O(72);
            }
          var r = d.j.prefix,
            t = function (v) {
              gn(d.messageContext.eventId, r, v);
            },
            u = en(
              dn(
                cn(
                  bn(
                    an(
                      Zm(
                        Ym(
                          $m(
                            Xm(
                              Wm(
                                Vm(
                                  new Um(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            gn(d.messageContext.eventId, r, "1"),
              Jm(d.type, d.j.id, u),
              f(d.j.id, b, d.D, u);
          } catch (v) {
            gn(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  sn.prototype.register = function (a, b, c) {
    var d = on(this, a);
    d.status !== 3 &&
      ((d.Z = b), (d.status = 3), c && (h(d.j, c), (d.j = c)), this.flush());
  };
  sn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (on(this, c).status === 1 &&
        ((on(this, c).status = 2), this.push("require", [{}], c, {})),
      on(this, c).H && (d.deferrable = !1));
    this.j.push(new rn(a, c, b, d));
    d.deferrable || this.flush();
  };
  sn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.j.length;
      e = { Ec: void 0, eh: void 0 }
    ) {
      var f = this.j[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || on(this, g).H
          ? ((f.messageContext.deferrable = !1), this.j.push(f))
          : c.push(f),
          this.j.shift();
      else {
        switch (f.type) {
          case "require":
            if (on(this, g).status !== 3 && !a) {
              this.j.push.apply(this.j, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              h(Lb(r, t), b.D);
            });
            break;
          case "config":
            var k = on(this, g);
            e.Ec = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Lb(t, u), r.Ec);
                };
              })(e)
            );
            var m = !!e.Ec[P.g.Zb];
            delete e.Ec[P.g.Zb];
            var n = g.ia === g.id;
            m || (n ? (k.K = {}) : (k.O[g.id] = {}));
            (k.H && m) || tn(this, P.g.ba, e.Ec, f);
            k.H = !0;
            n ? h(e.Ec, k.K) : (h(e.Ec, k.O[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.eh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Lb(t, u), r.eh);
                };
              })(e)
            );
            tn(this, f.args[1], e.eh, f);
            break;
          case "get":
            var p = {},
              q = ((p[P.g.qb] = f.args[0]), (p[P.g.Fb] = f.args[1]), p);
            tn(this, P.g.Ta, q, f);
        }
        this.j.shift();
        un(this, f);
      }
    }
    this.j.push.apply(this.j, c);
    d && this.flush();
  };
  var un = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = on(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    kn = new sn();
  function vn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = ql("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = lc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        Pk(e, "load", f);
        Pk(e, "error", f);
      };
      Ok(e, "load", f);
      Ok(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var xn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ol(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      wn(c, b);
    },
    wn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else vn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var yn = function () {
    this.O = this.O;
    this.D = this.D;
  };
  yn.prototype.O = !1;
  yn.prototype.dispose = function () {
    this.O || ((this.O = !0), this.Pa());
  };
  yn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  yn.prototype.addOnDisposeCallback = function (a, b) {
    this.O
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.D || (this.D = []), this.D.push(b !== void 0 ? Fa(a, b) : a));
  };
  yn.prototype.Pa = function () {
    if (this.D) for (; this.D.length; ) this.D.shift()();
  };
  var zn = function (a) {
      a.addtlConsent !== void 0 &&
        typeof a.addtlConsent !== "string" &&
        (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 &&
        typeof a.gdprApplies !== "boolean" &&
        (a.gdprApplies = void 0);
      return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
        (a.listenerId !== void 0 && typeof a.listenerId !== "number")
        ? 2
        : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
    },
    An = function (a, b) {
      b = b === void 0 ? {} : b;
      yn.call(this);
      this.H = a;
      this.j = null;
      this.Z = {};
      this.nd = 0;
      var c;
      this.bc = (c = b.Qm) != null ? c : 500;
      var d;
      this.ac = (d = b.En) != null ? d : !1;
      this.K = null;
    };
  ya(An, yn);
  An.prototype.Pa = function () {
    this.Z = {};
    this.K && (Pk(this.H, "message", this.K), delete this.K);
    delete this.Z;
    delete this.H;
    delete this.j;
    yn.prototype.Pa.call(this);
  };
  var Cn = function (a) {
    return typeof a.H.__tcfapi === "function" || Bn(a) != null;
  };
  An.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.ac },
      d = Nk(function () {
        return a(c);
      }),
      e = 0;
    this.bc !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.bc));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = zn(c)),
          (c.internalBlockOnErrors = b.ac),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Dn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  An.prototype.removeEventListener = function (a) {
    a && a.listenerId && Dn(this, "removeEventListener", null, a.listenerId);
  };
  var Fn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = En(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && En(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? En(a.purpose.legitimateInterests, b) &&
                En(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    En = function (a, b) {
      return !(!a || !a[b]);
    },
    Dn = function (a, b, c, d) {
      c || (c = function () {});
      if (typeof a.H.__tcfapi === "function") {
        var e = a.H.__tcfapi;
        e(b, 2, c, d);
      } else if (Bn(a)) {
        Gn(a);
        var f = ++a.nd;
        a.Z[f] = c;
        if (a.j) {
          var g = {};
          a.j.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Bn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    Gn = function (a) {
      a.K ||
        ((a.K = function (b) {
          try {
            var c;
            c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Z[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Ok(a.H, "message", a.K));
    },
    Hn = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = zn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (xn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var In = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function Jn() {
    var a = ji.tcf || {};
    return (ji.tcf = a);
  }
  var Kn = function () {
      return new An(G, { Qm: -1 });
    },
    Qn = function () {
      var a = Jn(),
        b = Kn();
      Cn(b) && !Ln() && !Mn() && O(124);
      if (!a.active && Cn(b)) {
        Ln() &&
          ((a.active = !0),
          (a.kc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Ol().active = !0),
          (a.tcString = "tcunavailable"));
        pm();
        try {
          b.addEventListener(function (c) {
            if (c.internalErrorState !== 0)
              Nn(a), qm([P.g.R, P.g.ya, P.g.P]), (Ol().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              Mn() && (a.active = !0),
              !On(c) || Ln() || Mn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (c.gdprApplies === !1) {
                var e = {},
                  f;
                for (f in In) In.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (On(c)) {
                var g = {},
                  k;
                for (k in In)
                  if (In.hasOwnProperty(k))
                    if (k === "1") {
                      var m,
                        n = c,
                        p = { zl: !0 };
                      p = p === void 0 ? {} : p;
                      m = Hn(n)
                        ? n.gdprApplies === !1
                          ? !0
                          : n.tcString === "tcunavailable"
                          ? !p.Gj
                          : (p.Gj || n.gdprApplies !== void 0 || p.zl) &&
                            (p.Gj ||
                              (typeof n.tcString === "string" &&
                                n.tcString.length))
                          ? Fn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[k] = Fn(c, k, In[k]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.kc = d;
                var q = {},
                  r = ((q[P.g.R] = a.kc["1"] ? "granted" : "denied"), q);
                a.gdprApplies !== !0
                  ? (qm([P.g.R, P.g.ya, P.g.P]), (Ol().active = !0))
                  : ((r[P.g.ya] =
                      a.kc["3"] && a.kc["4"] ? "granted" : "denied"),
                    typeof a.tcfPolicyVersion === "number" &&
                    a.tcfPolicyVersion >= 4
                      ? (r[P.g.P] =
                          a.kc["1"] && a.kc["7"] ? "granted" : "denied")
                      : qm([P.g.P]),
                    km(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: Pn() || "",
                      }
                    ));
              }
            } else qm([P.g.R, P.g.ya, P.g.P]);
          });
        } catch (c) {
          Nn(a), qm([P.g.R, P.g.ya, P.g.P]), (Ol().active = !0);
        }
      }
    };
  function Nn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function On(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  var Ln = function () {
    return G.gtag_enable_tcf_support === !0;
  };
  function Mn() {
    return Jn().enableAdvertiserConsentMode === !0;
  }
  var Pn = function () {
      var a = Jn();
      if (a.active) return a.tcString;
    },
    Sn = function () {
      var a = Jn();
      if (a.active && a.gdprApplies !== void 0)
        return a.gdprApplies ? "1" : "0";
    },
    Tn = function (a) {
      if (!In.hasOwnProperty(String(a))) return !0;
      var b = Jn();
      return b.active && b.kc ? !!b.kc[String(a)] : !0;
    };
  var Un = [P.g.R, P.g.U, P.g.P, P.g.ya],
    Vn = {},
    Wn = ((Vn[P.g.R] = 1), (Vn[P.g.U] = 2), Vn);
  function Xn(a) {
    if (a === void 0) return 0;
    switch (W(a, P.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Yn() {
    return T(62) && Hl() === "US-CO" && rc.globalPrivacyControl === !0;
  }
  var Zn = function (a) {
      if (Yn()) return !1;
      var b = Xn(a);
      if (b === 3) return !1;
      switch (Yl(P.g.ya)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return b === 2;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    $n = function () {
      return am() || !Xl(P.g.R) || !Xl(P.g.U);
    },
    ao = function () {
      var a = {},
        b;
      for (b in Wn) Wn.hasOwnProperty(b) && (a[Wn[b]] = Yl(b));
      return "G1" + Ge(a[1] || 0) + Ge(a[2] || 0);
    },
    bo = {},
    co =
      ((bo[P.g.R] = 0), (bo[P.g.U] = 1), (bo[P.g.P] = 2), (bo[P.g.ya] = 3), bo);
  function eo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var fo = function (a) {
      for (var b = "1", c = 0; c < Un.length; c++) {
        var d = b,
          e,
          f = Un[c],
          g = Wl.delegatedConsentTypes[f];
        e = g === void 0 ? 0 : co.hasOwnProperty(g) ? 12 | co[g] : 8;
        var k = Ol();
        k.accessedAny = !0;
        var m = k.entries[f] || {};
        e = (e << 2) | eo(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (eo(m.declare) << 4) | (eo(m.default) << 2) | eo(m.update)
            ]);
      }
      var n = b,
        p = (Yn() ? 1 : 0) << 3,
        q = (am() ? 1 : 0) << 2,
        r = Xn(a);
      return (b =
        n +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          p | q | r
        ]);
    },
    go = function () {
      if (!Xl(P.g.P)) return "-";
      for (
        var a = Object.keys(hi), b = Zl(a), c = "", d = na(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += hi[f]);
      }
      T(51) &&
        (Wl.usedCoreBinaryXServices ? Wl.selectedAllCoreBinaryXServices : 1) &&
        (c += "o");
      return c || "-";
    },
    ho = function () {
      return Jl() || ((Ln() || Mn()) && Sn() === "1") ? "1" : "0";
    },
    io = function () {
      return (Jl() ? !0 : !(!Ln() && !Mn()) && Sn() === "1") || !Xl(P.g.P);
    },
    jo = function () {
      var a = "0",
        b = "0",
        c;
      var d = Jn();
      c = d.active ? d.cmpId : void 0;
      typeof c === "number" &&
        c >= 0 &&
        c <= 4095 &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = Jn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      typeof f === "number" &&
        f >= 0 &&
        f <= 63 &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var k = 0;
      Jl() && (k |= 1);
      Sn() === "1" && (k |= 2);
      Ln() && (k |= 4);
      var m;
      var n = Jn();
      m =
        n.enableAdvertiserConsentMode !== void 0
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      m === "1" && (k |= 8);
      Ol().waitPeriodTimedOut && (k |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
      );
    },
    ko = function () {
      return Hl() === "US-CO";
    };
  function lo() {
    var a = !1;
    return a;
  }
  var mo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function no(a) {
    a = a === void 0 ? {} : a;
    var b = Nf.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Nf.ctid;
    c.Bm = ii.ie;
    c.Dm = ii.Kg;
    c.Zl = Gj.fe ? 2 : 1;
    c.Km = a.Xj;
    c.qe = Nf.canonicalContainerId;
    c.qe !== a.xa && (c.xa = a.xa);
    var d = Qj();
    c.mm = d ? d.canonicalContainerId : void 0;
    oi ? ((c.Kf = mo[b]), c.Kf || (c.Kf = 0)) : (c.Kf = si ? 13 : 10);
    Bi.H
      ? ((c.Hf = 0), (c.Zk = 2))
      : qi
      ? (c.Hf = 1)
      : lo()
      ? (c.Hf = 2)
      : (c.Hf = 3);
    var e = {};
    e[6] = Hj;
    c.fl = e;
    var f = a.Af,
      g;
    var k = c.Kf,
      m = c.Hf;
    k === void 0
      ? (g = "")
      : (m || (m = 0), (g = "" + Ie(1, 1) + Fe((k << 2) | m)));
    var n = c.Zk,
      p = "4" + g + (n ? "" + Ie(2, 1) + Fe(n) : ""),
      q,
      r = c.Dm;
    q = r && He.test(r) ? "" + Ie(3, 2) + r : "";
    var t,
      u = c.Bm;
    t = u ? "" + Ie(4, 1) + Fe(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var x = w.split("-"),
        y = x[0].toUpperCase();
      if (y !== "GTM" && y !== "OPT") v = "";
      else {
        var B = x[1];
        v = "" + Ie(5, 3) + Fe(1 + B.length) + (c.Zl || 0) + B;
      }
    } else v = "";
    var A = c.Km,
      D = c.qe,
      E = c.xa,
      C = c.Pn,
      F =
        p +
        q +
        t +
        v +
        (A ? "" + Ie(6, 1) + Fe(A) : "") +
        (D ? "" + Ie(7, 3) + Fe(D.length) + D : "") +
        (E ? "" + Ie(8, 3) + Fe(E.length) + E : "") +
        (C ? "" + Ie(9, 3) + Fe(C.length) + C : ""),
      M;
    var L = c.fl;
    L = L === void 0 ? {} : L;
    for (
      var S = [], V = na(Object.keys(L)), ba = V.next();
      !ba.done;
      ba = V.next()
    ) {
      var aa = ba.value;
      S[Number(aa)] = L[aa];
    }
    if (S.length) {
      var Q = Ie(10, 3),
        oa;
      if (S.length === 0) oa = Fe(0);
      else {
        for (var ma = [], ia = 0, za = !1, Ma = 0; Ma < S.length; Ma++) {
          za = !0;
          var Da = Ma % 6;
          S[Ma] && (ia |= 1 << Da);
          Da === 5 && (ma.push(Fe(ia)), (ia = 0), (za = !1));
        }
        za && ma.push(Fe(ia));
        oa = ma.join("");
      }
      var Sa = oa;
      M = "" + Q + Fe(Sa.length) + Sa;
    } else M = "";
    var ib = c.mm;
    return F + M + (ib ? "" + Ie(11, 3) + Fe(ib.length) + ib : "");
  }
  var oo = {
      oj: "service_worker_endpoint",
      Lg: "shared_user_id",
      Mg: "shared_user_id_requested",
      ke: "shared_user_id_source",
    },
    po;
  function qo(a) {
    if (!po) {
      po = {};
      for (var b = na(Object.keys(oo)), c = b.next(); !c.done; c = b.next())
        po[oo[c.value]] = !0;
    }
    return !!po[a];
  }
  function ro(a, b) {
    b = b === void 0 ? !1 : b;
    if (qo(a)) {
      var c,
        d,
        e =
          (d = (c = vc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = na(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function so(a, b) {
    var c = ro(a, !0);
    c && c.set(b);
  }
  function to(a) {
    var b;
    return (b = ro(a)) == null ? void 0 : b.get();
  }
  function uo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = ro(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function vo(a, b) {
    var c = ro(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function wo(a) {
    return a.origin !== "null";
  }
  function xo(a, b, c, d) {
    var e;
    if (yo(d)) {
      for (
        var f = [], g = String(b || zo()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Ao(a, b, c, d, e) {
    if (yo(e)) {
      var f = Bo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Co(
          f,
          function (g) {
            return g.ol;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Co(
          f,
          function (g) {
            return g.qm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Do(a, b, c, d) {
    var e = zo(),
      f = window;
    wo(f) && (f.document.cookie = a);
    var g = zo();
    return e !== g || (c !== void 0 && xo(b, g, !1, d).indexOf(c) >= 0);
  }
  function Eo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!yo(c.Ab)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Fo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.fm);
    g = e(g, "samesite", c.Em);
    c.Fm && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Go(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = p[t] !== "none" ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Ho(u, c.path) && Do(v, a, b, c.Ab)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return Ho(n, c.path) ? 1 : Do(g, a, b, c.Ab) ? 0 : 1;
  }
  function Io(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Eo(a, b, c);
  }
  function Co(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Bo(a, b, c) {
    for (var d = [], e = xo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            ol: Number(n[0]) || 1,
            qm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Fo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var Jo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ko = /(^|\.)doubleclick\.net$/i;
  function Ho(a, b) {
    return (
      a !== void 0 &&
      (Ko.test(window.document.location.hostname) || (b === "/" && Jo.test(a)))
    );
  }
  function Lo(a) {
    if (!a) return 1;
    a = a.indexOf(".") === 0 ? a.substring(1) : a;
    return a.split(".").length;
  }
  function Mo(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function No(a, b) {
    var c = "" + Lo(a),
      d = Mo(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var zo = function () {
      return wo(window) ? window.document.cookie : "";
    },
    yo = function (a) {
      return a && Tl().j()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return $l(b) && Xl(b);
          })
        : !0;
    },
    Go = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ko.test(e) || Jo.test(e) || a.push("none");
      return a;
    };
  function Oo(a) {
    var b = Math.round(Math.random() * 2147483647),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; f >= 0; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = e !== 0 ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function Po(a) {
    return [Oo(a), Math.round(Db() / 1e3)].join(".");
  }
  function Qo(a, b, c, d, e) {
    var f = Lo(b);
    return Ao(a, f, Mo(c), d, e);
  }
  function Ro(a, b, c, d) {
    return [b, No(c, d), a].join(".");
  }
  function So(a, b, c, d) {
    var e,
      f = Number(a.zb != null ? a.zb : void 0);
    f !== 0 && (e = new Date((b || Db()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ab: d,
    };
  }
  var To;
  function Uo() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Vo,
      d = Wo,
      e = Xo();
    if (!e.init) {
      Fc(H, "mousedown", a);
      Fc(H, "keyup", a);
      Fc(H, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Yo(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Xo().decorators.push(f);
  }
  function Zo(a, b, c) {
    for (var d = Xo().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== H.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Gb(e, g.callback());
      }
    }
    return e;
  }
  function Xo() {
    var a = vc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var $o = /(.*?)\*(.*?)\*(.*)/,
    ap = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    bp = /^(?:www\.|m\.|amp\.)+/,
    cp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function dp(a) {
    var b = cp.exec(a);
    if (b) return { Bh: b[1], query: b[2], fragment: b[3] };
  }
  function ep(a, b) {
    var c = [
        rc.userAgent,
        new Date().getTimezoneOffset(),
        rc.userLanguage || rc.language,
        Math.floor(Db() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = To)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    To = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ To[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function fp() {
    return function (a) {
      var b = U(G.location.href),
        c = b.search.replace("?", ""),
        d = bj(c, "_gl", !1, !0) || "";
      a.query = gp(d) || {};
      var e = cj(b, "fragment"),
        f;
      var g = -1;
      if (Ib(e, "_gl=")) g = 4;
      else {
        var k = e.indexOf("&_gl=");
        k > 0 && (g = k + 3 + 2);
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = gp(f || "") || {};
    };
  }
  function hp(a) {
    var b = fp(),
      c = Xo();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Gb(d, e.query), a && Gb(d, e.fragment));
    return d;
  }
  var gp = function (a) {
    try {
      var b = ip(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = kb(d[e + 1]);
          c[f] = g;
        }
        mb("TAGGING", 6);
        return c;
      }
    } catch (k) {
      mb("TAGGING", 8);
    }
  };
  function ip(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = $o.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === ep(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        mb("TAGGING", 7);
      }
    }
  }
  function jp(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = dp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.Bh + k + m;
  }
  function kp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (v.push(w), v.push(jb(String(x))));
          }
        var y = v.join("*");
        u = ["1", ep(y), y].join("*");
        d
          ? (Ui(3) || Ui(1) || !p) && lp("_gl", u, a, p, q)
          : mp("_gl", u, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Zo(b, 1, d),
      f = Zo(b, 2, d),
      g = Zo(b, 4, d),
      k = Zo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Ui(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && np(m, k[m], a);
  }
  function np(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? mp(a, b, c)
      : c.tagName.toLowerCase() === "form" && lp(a, b, c);
  }
  function mp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Ui(4) || d)) {
        var k = G.location.href,
          m = dp(c.href),
          n = dp(k);
        g = !(m && n && m.Bh === n.Bh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = jp(a, b, c.href, d, e);
      hc.test(p) && (c.href = p);
    }
  }
  function lp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = jp(a, b, c.action, d, e);
          hc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Vo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || kp(e, e.hostname);
      }
    } catch (g) {}
  }
  function Wo(a) {
    try {
      if (a.action) {
        var b = cj(U(a.action), "host");
        kp(a, b);
      }
    } catch (c) {}
  }
  function op(a, b, c, d) {
    Uo();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Yo(a, b, e, d, !1);
    e === 2 && mb("TAGGING", 23);
    d && mb("TAGGING", 24);
  }
  function pp(a, b) {
    Uo();
    Yo(a, [ej(G.location, "host", !0)], b, !0, !0);
  }
  function qp() {
    var a = H.location.hostname,
      b = ap.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(bp, ""),
      m = e.replace(bp, "");
    return k === m || Jb(k, "." + m);
  }
  function rp(a, b) {
    return a === !1 ? !1 : a || b || qp();
  }
  var sp = ["1"],
    tp = {},
    up = {};
  function vp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = wp(a.prefix);
    if (!tp[c])
      if (xp(c, a.path, a.domain)) {
        var d = up[wp(a.prefix)];
        yp(a, d ? d.id : void 0, d ? d.vh : void 0);
      } else {
        var e = jj("auiddc");
        if (e) mb("TAGGING", 17), (tp[c] = e);
        else if (b) {
          var f = wp(a.prefix),
            g = Po();
          zp(f, g, a);
          xp(c, a.path, a.domain);
        }
      }
  }
  function yp(a, b, c) {
    var d = wp(a.prefix),
      e = tp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Db() / 1e3)));
          zp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function zp(a, b, c, d) {
    var e = Ro(b, "1", c.domain, c.path),
      f = So(c, d);
    f.Ab = Ap();
    Io(a, e, f);
  }
  function xp(a, b, c) {
    var d = Qo(a, b, c, sp, Ap());
    if (!d) return !1;
    Bp(a, d);
    return !0;
  }
  function Bp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((tp[a] = c.slice(0, 2).join(".")),
        (up[a] = { id: c.slice(2, 4).join("."), vh: Number(c[4]) || 0 }))
      : c.length === 3
      ? (up[a] = { id: c.slice(0, 2).join("."), vh: Number(c[2]) || 0 })
      : (tp[a] = b);
  }
  function wp(a) {
    return (a || "_gcl") + "_au";
  }
  function Cp(a) {
    function b() {
      Xl(c) && a();
    }
    var c = Ap();
    dm(function () {
      b();
      Xl(c) || em(b, c);
    }, c);
  }
  function Dp(a) {
    var b = hp(!0),
      c = wp(a.prefix);
    Cp(function () {
      var d = b[c];
      if (d) {
        Bp(c, d);
        var e = Number(tp[c].split(".")[1]) * 1e3;
        if (e) {
          mb("TAGGING", 16);
          var f = So(a, e);
          f.Ab = Ap();
          var g = Ro(d, "1", a.domain, a.path);
          Io(c, g, f);
        }
      }
    });
  }
  function Ep(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Qo(a, e.path, e.domain, sp, Ap());
      k && (g[a] = k);
      return g;
    };
    Cp(function () {
      op(f, b, c, d);
    });
  }
  function Ap() {
    return ["ad_storage", "ad_user_data"];
  }
  function Fp(a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Oh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Gp(a, b) {
    var c = Fp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Oh] || (d[c[e].Oh] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, aa: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Oh].push(g);
      }
    }
    return d;
  }
  var Hp = {},
    Ip =
      ((Hp.k = { La: /^[\w-]+$/ }),
      (Hp.b = { La: /^[\w-]+$/, Ih: !0 }),
      (Hp.i = { La: /^[1-9]\d*$/ }),
      Hp);
  var Jp = {},
    Mp =
      ((Jp[5] = { ik: { 2: Kp }, Tg: ["k", "i", "b"] }),
      (Jp[4] = { ik: { 2: Kp, GCL: Lp }, Tg: ["k", "i", "b"] }),
      Jp);
  function Np(a) {
    var b = Mp[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.ik[c];
        if (d) return d(a, 5);
      }
    }
  }
  function Kp(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = Mp[b];
      if (e) {
        for (
          var f = e.Tg, g = na(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = Ip[n];
              q && (q.Ih ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function Op(a, b) {
    var c = Mp[5];
    if (c) {
      for (var d = [], e = na(c.Tg), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = Ip[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.Ih && Array.isArray(m))
              for (var n = na(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function Lp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var Pp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Qp(a) {
    if (Mp[5]) {
      for (
        var b = [],
          c = xo(a, void 0, void 0, Pp.get(5)),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Np(e.value);
        f && (Rp(f), b.push(f));
      }
      return b;
    }
  }
  function Sp(a, b, c, d) {
    c = c || {};
    var e = No(c.domain, c.path),
      f = Op(b, e);
    if (f) {
      var g = So(c, d, void 0, Pp.get(5));
      Io(a, f, g);
    }
  }
  function Tp(a, b) {
    var c = b.La;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Rp(a) {
    for (
      var b = na(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { te: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.te = Ip[e];
      d.te
        ? d.te.Ih
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Tp(k, g.te);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Tp(f, d.te)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  var Up = /^\w+$/,
    Vp = /^[\w-]+$/,
    Wp = {},
    Xp =
      ((Wp.aw = "_aw"),
      (Wp.dc = "_dc"),
      (Wp.gf = "_gf"),
      (Wp.gp = "_gp"),
      (Wp.gs = "_gs"),
      (Wp.ha = "_ha"),
      (Wp.ag = "_ag"),
      (Wp.gb = "_gb"),
      Wp);
  function Yp() {
    return ["ad_storage", "ad_user_data"];
  }
  function Zp(a) {
    return !Tl().j() || Xl(a);
  }
  function $p(a, b) {
    function c() {
      var d = Zp(b);
      d && a();
      return d;
    }
    dm(function () {
      c() || em(c, b);
    }, b);
  }
  function aq(a) {
    return bq(a).map(function (b) {
      return b.aa;
    });
  }
  function cq(a) {
    return dq(a)
      .filter(function (b) {
        return b.aa;
      })
      .map(function (b) {
        return b.aa;
      });
  }
  function dq(a) {
    var b = eq(a.prefix),
      c = fq("gb", b),
      d = fq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = bq(c).map(e("gb")),
      g = (Ui(6) ? gq(d) : []).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function hq(a, b, c, d, e) {
    var f = tb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = iq(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  function gq(a) {
    for (
      var b = Qp(a) || [], c = [], d = na(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = jq(f);
      k && hq(c, "2", g.k, k, g.b || []);
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp;
    });
  }
  function bq(a) {
    for (
      var b = [], c = xo(a, H.cookie, void 0, Yp()), d = na(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = kq(e.value);
      if (f != null) {
        var g = f;
        hq(b, g.version, g.aa, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return lq(b);
  }
  function iq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function eq(a) {
    return a && typeof a === "string" && a.match(Up) ? a : "_gcl";
  }
  function mq(a, b) {
    var c = Ui(6),
      d = U(a),
      e = cj(d, "query", !1, void 0, "gclid"),
      f = cj(d, "query", !1, void 0, "gclsrc"),
      g = cj(d, "query", !1, void 0, "wbraid");
    Ui(7) && (g = Pb(g));
    var k;
    c && (k = cj(d, "query", !1, void 0, "gbraid"));
    var m = cj(d, "query", !1, void 0, "gad_source"),
      n = cj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !k))) {
      var p = d.hash.replace("#", "");
      e = e || bj(p, "gclid", !1);
      f = f || bj(p, "gclsrc", !1);
      g = g || bj(p, "wbraid", !1);
      c && (k = k || bj(p, "gbraid", !1));
      m = m || bj(p, "gad_source", !1);
    }
    return nq(e, f, n, g, k, m);
  }
  function oq() {
    return mq(G.location.href, !0);
  }
  function nq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Vp))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Vp.test(d) && ((g.wbraid = d), k(d, "gb"));
    Ui(6) && e !== void 0 && Vp.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Vp.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function pq(a) {
    var b = oq();
    if (Ui(5)) {
      for (
        var c = !0, d = na(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && (b = mq(G.document.referrer, !1));
    }
    qq(b, !1, a);
  }
  function qq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = eq(c.prefix),
      g = d || Db(),
      k = Math.round(g / 1e3),
      m = Yp(),
      n = !1,
      p = !1,
      q = function () {
        if (Zp(m)) {
          var r = So(c, g, !0);
          r.Ab = m;
          for (
            var t = function (F, M) {
                var L = fq(F, f);
                L && (Io(L, M, r), F !== "gb" && (n = !0));
              },
              u = function (F) {
                var M = ["GCL", k, F];
                e.length > 0 && M.push(e.join("."));
                return M.join(".");
              },
              v = na(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var x = w.value;
            a[x] && t(x, u(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = fq("gb", f);
            (!b &&
              bq(B).some(function (F) {
                return F.aa === y && F.labels && F.labels.length > 0;
              })) ||
              t("gb", u(y));
          }
        }
        if (!p && Ui(6) && a.gbraid && Zp("ad_storage") && ((p = !0), !n)) {
          var A = a.gbraid,
            D = fq("ag", f);
          if (
            b ||
            !(Ui(6) ? gq(D) : []).some(function (F) {
              return F.aa === A && F.labels && F.labels.length > 0;
            })
          ) {
            var E = {},
              C = ((E.k = A), (E.i = "" + k), (E.b = e), E);
            Sp(D, C, c, g);
          }
        }
        rq(a, f, g, c);
      };
    dm(function () {
      q();
      Zp(m) || em(q, m);
    }, m);
  }
  function rq(a, b, c, d) {
    if (a.gad_source !== void 0 && Zp("ad_storage")) {
      var e = fq("gs", b);
      if (e) {
        var f = Math.round((Db() - (Rc() || 0)) / 1e3),
          g = {},
          k = ((g.k = a.gad_source), (g.i = "" + f), g);
        Sp(e, k, d, c);
      }
    }
  }
  function sq(a, b) {
    var c = hp(!0);
    $p(function () {
      for (var d = eq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Xp[f] !== void 0) {
          var g = fq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(tq(k), Db()),
              n;
            b: {
              for (
                var p = m, q = xo(g, H.cookie, void 0, Yp()), r = 0;
                r < q.length;
                ++r
              )
                if (tq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = So(b, m, !0);
              t.Ab = Yp();
              Io(g, k, t);
            }
          }
        }
      }
      qq(nq(c.gclid, c.gclsrc), !1, b);
    }, Yp());
  }
  function uq(a) {
    var b = [];
    Ui(6) && b.push("ag");
    if (b.length !== 0) {
      var c = hp(!0),
        d = eq(a.prefix);
      $p(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = fq(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var k = Np(g);
                if (k) {
                  var m = jq(k);
                  m || (m = Db());
                  var n;
                  a: {
                    for (var p = m, q = Qp(f), r = 0; r < q.length; ++r)
                      if (jq(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  k.i = "" + Math.round(m / 1e3);
                  Sp(f, k, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function fq(a, b) {
    var c = Xp[a];
    if (c !== void 0) return b + c;
  }
  function tq(a) {
    return vq(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function jq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function kq(a) {
    var b = vq(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function vq(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Vp.test(a[2])
      ? []
      : a;
  }
  function wq(a, b, c, d, e) {
    if (Array.isArray(b) && wo(G)) {
      var f = eq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = fq(a[m], f);
            if (n) {
              var p = xo(n, H.cookie, void 0, Yp());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      $p(function () {
        op(g, b, c, d);
      }, Yp());
    }
  }
  function xq(a, b, c, d) {
    if (Array.isArray(a) && wo(G)) {
      var e = [];
      Ui(6) && e.push("ag");
      if (e.length !== 0) {
        var f = eq(d),
          g = function () {
            for (var k = {}, m = 0; m < e.length; ++m) {
              var n = fq(e[m], f);
              if (!n) return {};
              var p = Qp(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return jq(t) - jq(r);
                })[0];
                k[n] = Op(q);
              }
            }
            return k;
          };
        $p(
          function () {
            op(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function lq(a) {
    return a.filter(function (b) {
      return Vp.test(b.aa);
    });
  }
  function yq(a, b) {
    if (wo(G)) {
      for (var c = eq(b.prefix), d = {}, e = 0; e < a.length; e++)
        Xp[a[e]] && (d[a[e]] = Xp[a[e]]);
      $p(function () {
        z(d, function (f, g) {
          var k = xo(c + g, H.cookie, void 0, Yp());
          k.sort(function (t, u) {
            return tq(u) - tq(t);
          });
          if (k.length) {
            var m = k[0],
              n = tq(m),
              p = vq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = vq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            qq(q, !0, b, n, p);
          }
        });
      }, Yp());
    }
  }
  function zq(a) {
    var b = [],
      c = [];
    Ui(6) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 &&
      $p(
        function () {
          for (var d = eq(a.prefix), e = 0; e < b.length; ++e) {
            var f = fq(b[e], d);
            if (!f) break;
            var g = Qp(f);
            if (g.length) {
              var k = g.sort(function (q, r) {
                  return jq(r) - jq(q);
                })[0],
                m = jq(k),
                n = k.b,
                p = {};
              p[c[e]] = k.k;
              qq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function Aq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function Bq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (am()) {
      var c = oq();
      if (Aq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        Ui(6) && b(d, "gbraid", c.gbraid);
        pp(function () {
          return d;
        }, 3);
        pp(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function Cq(a) {
    if (!Ui(1)) return null;
    var b = hp(!0).gad_source;
    if (b != null) return (G.location.hash = ""), b;
    if (Ui(2)) {
      var c = U(G.location.href);
      b = cj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = oq();
      if (Aq(d, a)) return "0";
    }
    return null;
  }
  function Dq(a) {
    var b = Cq(a);
    b != null &&
      pp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function Eq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function Fq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Zp(Yp())) return e;
    var f = bq(a),
      g = Eq(e, f, b);
    if (g.length && !d)
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.aa]
            .concat(n.labels || [], [b])
            .join("."),
          r = So(c, p, !0);
        r.Ab = Yp();
        Io(a, q, r);
      }
    return e;
  }
  function Gq(a, b) {
    var c = [];
    b = b || {};
    var d = dq(b),
      e = Eq(c, d, a);
    if (e.length)
      for (var f = na(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = eq(b.prefix),
          n = fq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.aa,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + v), (w.b = (t || []).concat([a])), w);
          Sp(n, x, b, u);
        } else if (k.type === "gb") {
          var y = [q, v, r].concat(t || [], [a]).join("."),
            B = So(b, u, !0);
          B.Ab = Yp();
          Io(n, y, B);
        }
      }
    return c;
  }
  function Hq(a, b) {
    var c = eq(b),
      d = fq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? (Ui(6) ? gq(d) : []) : bq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Iq(a) {
    for (var b = 0, c = na(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Jq(a, b) {
    var c = Math.max(Hq("aw", a), Iq(Zp(Yp()) ? Gp() : {})),
      d = Math.max(Hq("gb", a), Iq(Zp(Yp()) ? Gp("_gac_gb", !0) : {}));
    Ui(6) && b && (d = Math.max(d, Hq("ag", a)));
    return d > c;
  }
  var Kq = function (a, b, c) {
      var d = (ji.joined_auid = ji.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Lq = function () {
      var a = U(G.location.href),
        b = cj(a, "query", !1, void 0, "gad_source");
      if (b === void 0) {
        var c = a.hash.replace("#", "");
        b = bj(c, "gad_source", !1);
      }
      return b;
    },
    Mq = function () {
      var a = U(G.location.href).search.replace("?", "");
      return bj(a, "gad", !1, !0) === "1";
    },
    Nq = function () {
      var a = rl(!1) === 1 ? G.top.location.href : G.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Oq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = lq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Qq = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = jj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = eq(b);
      if (e === "_gcl") {
        var f = !X(Pq()) && c,
          g;
        g = oq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = fq(a, e);
      return k ? aq(k) : [];
    },
    Rq = function (a) {
      var b = Pq();
      om(function () {
        a();
        X(b) || em(a, b);
      }, b);
    },
    Pq = function () {
      return [P.g.R, P.g.P];
    },
    Sq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Tq = /^www.googleadservices.com$/,
    Uq = function (a, b) {
      return Qq("aw", a, b);
    },
    Vq = function (a, b) {
      return Qq("dc", a, b);
    },
    Wq = function (a, b, c, d, e) {
      var f = oq(),
        g = [],
        k = c && Zn(c),
        m = f.gclid,
        n = f.dclid,
        p = f.gclsrc || "aw",
        q = Mq(),
        r = Lq();
      !m ||
        (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
        g.push({ aa: m, ye: p });
      n && g.push({ aa: n, ye: "ds" });
      g.length === 2 && O(147);
      g.length === 0 && f.wbraid && g.push({ aa: f.wbraid, ye: "gb" });
      g.length === 0 && p === "aw.ds" && g.push({ aa: "", ye: "aw.ds" });
      Rq(function () {
        var t = X(Pq());
        if (t) {
          vp(a);
          var u = [],
            v = t ? tp[wp(a.prefix)] : void 0;
          v && u.push("auid=" + v);
          if (X(P.g.P)) {
            e && u.push("userId=" + e);
            var w = to(oo.Lg);
            if (w === void 0) so(oo.Mg, !0);
            else {
              var x = to(oo.ke);
              u.push("ga_uid=" + x + "." + w);
            }
          }
          var y = H.referrer ? cj(U(H.referrer), "host") : "",
            B = t || !d ? g : [];
          B.length === 0 &&
            (Sq.test(y) || Tq.test(y)) &&
            B.push({ aa: "", ye: "" });
          if (B.length !== 0 || q || r !== void 0) {
            y && u.push("ref=" + encodeURIComponent(y));
            var A = Nq();
            u.push("url=" + encodeURIComponent(A));
            u.push("tft=" + Db());
            var D = Rc();
            D !== void 0 && u.push("tfd=" + Math.round(D));
            var E = rl(!0);
            u.push("frm=" + E);
            q && u.push("gad=1");
            r !== void 0 && u.push("gad_source=" + encodeURIComponent(r));
            if (!c) {
              var C = {};
              c = en(Vm(new Um(0), ((C[P.g.ka] = kn.D[P.g.ka]), C)));
            } else if (!T(74)) {
              var F = {};
              c = en(Vm(new Um(0), ((F[P.g.ka] = k), F)));
            }
            u.push("gtm=" + no({ xa: b }));
            $n() && u.push("gcs=" + ao());
            u.push("gcd=" + fo(c));
            io() && u.push("dma_cps=" + go());
            u.push("dma=" + ho());
            Zn(c) ? u.push("npa=0") : u.push("npa=1");
            T(62) && ko() && u.push("_ng=1");
            Cn(Kn()) && u.push("tcfd=" + jo());
            var M = Sn();
            M && u.push("gdpr=" + M);
            var L = Pn();
            L && u.push("gdpr_consent=" + L);
            T(17) && u.push("apve=" + (T(18) ? 1 : 0));
            Bi.j && u.push("tag_exp=" + Bi.j);
            if (B.length > 0)
              for (var S = 0; S < B.length; S++) {
                var V = B[S],
                  ba = V.aa,
                  aa = V.ye;
                if (!Kq(a.prefix, aa + "." + ba, v !== void 0)) {
                  var Q =
                    "https://adservice.google.com/pagead/regclk?" + u.join("&");
                  ba !== ""
                    ? (Q =
                        aa === "gb"
                          ? Q + "&wbraid=" + ba
                          : Q + "&gclid=" + ba + "&gclsrc=" + aa)
                    : aa === "aw.ds" && (Q += "&gclsrc=aw.ds");
                  Lc(Q);
                }
              }
            else if (
              (q || r !== void 0) &&
              !Kq(a.prefix, "gad", v !== void 0)
            ) {
              var oa =
                "https://adservice.google.com/pagead/regclk?" + u.join("&");
              Lc(oa);
            }
          }
        }
      });
    };
  var Xq,
    Yq = !1;
  function Zq() {
    Yq = !0;
    Xq = Xq || {};
  }
  function $q(a) {
    Yq || Zq();
    return Xq[a];
  }
  var ar = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.o = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = h(c.eventMetadata || {}, {});
  };
  ar.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && l(d) && T(57))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.o[a] = d);
  };
  var br = function (a, b, c) {
    var d = $q(a.target.ia);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function cr() {
    ji.dedupe_gclid || (ji.dedupe_gclid = Po());
    return ji.dedupe_gclid;
  }
  var dr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    er = /^www.googleadservices.com$/;
  function fr(a) {
    a || (a = gr());
    return a.Vm
      ? !1
      : a.Kl || a.Ll || a.Nl || a.Ml || a.lh || a.gh || a.yl || a.Cl
      ? !0
      : !1;
  }
  function gr() {
    var a = {},
      b = hp(!0);
    a.Vm = !!b._up;
    var c = oq();
    a.Kl = c.aw !== void 0;
    a.Ll = c.dc !== void 0;
    a.Nl = c.wbraid !== void 0;
    a.Ml = c.gbraid !== void 0;
    var d = U(G.location.href),
      e = cj(d, "query", !1, void 0, "gad");
    a.lh = e !== void 0;
    if (!a.lh) {
      var f = d.hash.replace("#", ""),
        g = bj(f, "gad", !1);
      a.lh = g !== void 0;
    }
    a.gh = cj(d, "query", !1, void 0, "gad_source");
    if (a.gh === void 0) {
      var k = d.hash.replace("#", ""),
        m = bj(k, "gad_source", !1);
      a.gh = m;
    }
    var n = H.referrer ? cj(U(H.referrer), "host") : "";
    a.Cl = dr.test(n);
    a.yl = er.test(n);
    return a;
  }
  var hr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    ir = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    jr = /^\d+\.fls\.doubleclick\.net$/,
    kr = /;gac=([^;?]+)/,
    lr = /;gacgb=([^;?]+)/;
  function mr(a, b) {
    if (jr.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && c.length === 2 && c[1].match(hr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = na(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].aa);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function nr(a, b, c) {
    for (
      var d = Zp(Yp()) ? Gp("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = na(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = Fq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { xl: f ? e.join(";") : "", wl: mr(d, lr) };
  }
  function or(a) {
    var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(ir) ? b[1] : void 0;
  }
  function pr(a) {
    var b = { hh: void 0, ih: void 0 },
      c,
      d;
    jr.test(H.location.host) && ((c = or("gclgs")), (d = or("gclst")));
    if (c && d) (b.hh = c), (b.ih = d);
    else {
      var e = Db(),
        f = gq((a || "_gcl") + "_gs"),
        g = f.map(function (m) {
          return m.aa;
        }),
        k = f.map(function (m) {
          return e - m.timestamp;
        });
      g.length > 0 &&
        k.length > 0 &&
        ((b.hh = g.join(".")), (b.ih = k.join(".")));
    }
    return b;
  }
  function qr(a, b, c) {
    if (jr.test(H.location.host)) {
      var d = or(c);
      if (d) return [{ aa: d }];
    } else {
      if (b === "gclid") return bq((a || "_gcl") + "_aw");
      if (b === "wbraid") return bq((a || "_gcl") + "_gb");
      if (b === "braids") return dq({ prefix: a });
    }
    return [];
  }
  function rr(a) {
    return qr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function sr(a) {
    return qr(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function tr(a) {
    return qr(a, "braids", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function ur(a, b) {
    return jr.test(H.location.host) ? !(or("gclaw") || or("gac")) : Jq(a, b);
  }
  function vr(a, b, c) {
    var d;
    d = c ? Gq(a, b) : Fq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  var wr = function () {
    if (qb(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var zr = function (a) {
      if (a.eventName === P.g.ba && a.metadata.hit_type === "page_view")
        if (T(18)) {
          a.metadata.redact_click_ids =
            W(a.m, P.g.fa) != null &&
            W(a.m, P.g.fa) !== !1 &&
            !X([P.g.R, P.g.P]);
          var b = xr(a),
            c = W(a.m, P.g.ra) !== !1;
          c || (a.o[P.g.wi] = "1");
          var d = eq(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = W(a.m, P.g.Xa),
              g = W(a.m, P.g.sa) || {};
            yr({ rd: c, wd: g, Cd: f, jc: b });
            var k;
            if ((k = !e)) {
              var m;
              var n = (ji.ads_pageview = ji.ads_pageview || {});
              m = n[d] ? !1 : (n[d] = !0);
              k = !m;
            }
            if (k) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.o[P.g.xc] = P.g.Sb;
            if (a.metadata.consent_updated)
              (a.o[P.g.xc] = P.g.nk), (a.o[P.g.Qb] = "1");
            else if (a.metadata.user_id_updated) a.o[P.g.xc] = P.g.tk;
            else {
              var p = oq();
              a.o[P.g.Fd] = p.gclid;
              a.o[P.g.Md] = p.dclid;
              a.o[P.g.oi] = p.gclsrc;
              a.o[P.g.Fd] ||
                a.o[P.g.Md] ||
                ((a.o[P.g.Re] = p.wbraid), (a.o[P.g.Wf] = p.gbraid));
              a.o[P.g.Da] = H.referrer ? cj(U(H.referrer), "host") : "";
              a.o[P.g.wa] = Nq();
              a.o[P.g.ni] = Lq();
              a.o[P.g.Gb] = rl(!0);
              var q = gr();
              fr(q) && (a.o[P.g.ed] = "1");
              a.o[P.g.si] = cr();
              hp(!1)._up === "1" && (a.o[P.g.Ji] = "1");
            }
            var r = X([P.g.R, P.g.P]);
            c && r && (vp(b), (a.o[P.g.Db] = tp[wp(b.prefix)]));
            a.o[P.g.jb] = void 0;
            a.o[P.g.Ua] = void 0;
            var t = T(59);
            if (!a.o[P.g.Fd] && !a.o[P.g.Md] && ur(d, t)) {
              var u = t ? cq(b) : aq(d + "_gb");
              u.length > 0 && (a.o[P.g.jb] = u.join("."));
            } else if (!a.o[P.g.Re] && r) {
              var v = aq(d + "_aw");
              v.length > 0 && (a.o[P.g.Ua] = v.join("."));
            }
            a.m.isGtmEvent && (a.m.j[P.g.ka] = kn.D[P.g.ka]);
            Zn(a.m) ? (a.o[P.g.Nb] = !1) : (a.o[P.g.Nb] = !0);
            a.metadata.add_tag_timing = !0;
            var w = wr();
            w !== void 0 && (a.o[P.g.de] = w || "error");
            var x = Sn();
            x && (a.o[P.g.Ac] = x);
            var y = Pn();
            y && (a.o[P.g.Dc] = y);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    xr = function (a) {
      var b = {
        prefix: W(a.m, P.g.Za) || W(a.m, P.g.Na),
        domain: W(a.m, P.g.Va),
        zb: W(a.m, P.g.Wa),
        flags: W(a.m, P.g.ab),
      };
      a.m.isGtmEvent && (b.path = W(a.m, P.g.Eb));
      return b;
    },
    Ar = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.rd;
      d = a.wd;
      e = a.Cd;
      f = a.xa;
      g = a.m;
      k = a.xd;
      m = a.Hn;
      n = a.ek;
      yr({ rd: c, wd: d, Cd: e, jc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Wq(b, f, g, k, n));
    },
    yr = function (a) {
      var b, c, d, e;
      b = a.rd;
      c = a.wd;
      d = a.Cd;
      e = a.jc;
      b &&
        (rp(c[P.g.Cc], !!c[P.g.W]) && (sq(Br, e), uq(e), Dp(e)),
        pq(e),
        yq(Br, e),
        zq(e));
      c[P.g.W] &&
        (wq(Br, c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e.prefix),
        xq(c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e.prefix),
        Ep(wp(e.prefix), c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e),
        Ep("FPAU", c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e));
      d && Bq(Cr);
      Dq(Cr);
    },
    Dr = function (a, b, c, d) {
      var e, f, g;
      e = a.fk;
      f = a.callback;
      g = a.Jj;
      if (typeof f === "function")
        if (e === P.g.Ua && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === P.g.Db ? (O(65), vp(b, !1), f(tp[wp(b.prefix)])) : f(g);
    },
    Br = ["aw", "dc", "gb"],
    Cr = ["aw", "dc", "gb", "ag"];
  function Er(a) {
    var b = W(a.m, P.g.Hb),
      c = W(a.m, P.g.Wb);
    b && !c
      ? (a.eventName !== P.g.ba && a.eventName !== P.g.Nc && O(131),
        (a.isAborted = !0))
      : !b && c && (O(132), (a.isAborted = !0));
  }
  function Fr(a) {
    var b = X(P.g.R) ? ji.pscdl : "denied";
    b != null && (a.o[P.g.Ve] = b);
  }
  function Gr(a) {
    var b = rl(!0);
    a.o[P.g.Gb] = b;
  }
  function Hr(a) {
    T(62) && ko() && (a.o[P.g.Bc] = 1);
  }
  var Ir = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    },
    Jr = function (a) {
      var b = a && a[P.g.fg];
      return b && b[P.g.ri];
    },
    Kr = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Lr = function (a, b) {
      var c = a && !X([P.g.R, P.g.P]);
      return b && c ? "0" : b;
    },
    Nr = function (a) {
      om(
        function () {
          function b(w) {
            var x = X([P.g.R, P.g.P]),
              y = k && x,
              B = g.prefix || "_gcl",
              A;
            ji.reported_gclid || (ji.reported_gclid = {});
            A = ji.reported_gclid;
            var D =
              (y ? B : "") +
              "." +
              (X(P.g.R) ? 1 : 0) +
              "." +
              (X(P.g.P) ? 1 : 0);
            if (!A[D]) {
              A[D] = !0;
              var E = {},
                C = function (ba, aa) {
                  if (aa || typeof aa === "number") E[ba] = aa.toString();
                },
                F = "https://www.google.com";
              $n() && (C("gcs", ao()), w && C("gcu", 1));
              C("gcd", fo(f));
              Bi.j && C("tag_exp", Bi.j);
              if (am()) {
                C("rnd", cr());
                if ((!n || (p && p !== "aw.ds")) && x) {
                  var M = aq(B + "_aw");
                  C("gclaw", M.join("."));
                }
                C("url", String(G.location).split(/[?#]/)[0]);
                C("dclid", Lr(d, q));
                x || (F = "https://pagead2.googlesyndication.com");
              }
              io() && C("dma_cps", go());
              C("dma", ho());
              C("npa", Zn(f) ? 0 : 1);
              T(62) && ko() && C("_ng", 1);
              Cn(Kn()) && C("tcfd", jo());
              C("gdpr_consent", Pn() || "");
              C("gdpr", Sn() || "");
              hp(!1)._up === "1" && C("gtm_up", 1);
              C("gclid", Lr(d, n));
              C("gclsrc", p);
              if (
                !(
                  E.hasOwnProperty("gclid") ||
                  E.hasOwnProperty("dclid") ||
                  E.hasOwnProperty("gclaw")
                ) &&
                (C("gbraid", Lr(d, r)),
                !E.hasOwnProperty("gbraid") && am() && x)
              ) {
                var L = aq(B + "_gb");
                L.length > 0 && C("gclgb", L.join("."));
              }
              C("gtm", no({ xa: f.eventMetadata.source_canonical_id, Af: !e }));
              k &&
                X(P.g.R) &&
                (vp(g || {}), y && C("auid", tp[wp(g.prefix)] || ""));
              Mr || (a.Bj && C("did", a.Bj));
              a.jh && C("gdid", a.jh);
              a.ah && C("edid", a.ah);
              a.mh !== void 0 && C("frm", a.mh);
              T(17) && C("apve", T(18) ? 1 : 0);
              var S = Object.keys(E).map(function (ba) {
                  return ba + "=" + encodeURIComponent(E[ba]);
                }),
                V = F + "/pagead/landing?" + S.join("&");
              Lc(V);
            }
          }
          var c = !!a.Ug,
            d = !!a.xd,
            e = a.targetId,
            f = a.m,
            g = a.jc === void 0 ? {} : a.jc,
            k = a.Ef === void 0 ? !0 : a.Ef,
            m = oq(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && p !== "aw.ds") ? !1 : !0) || r),
            u = am();
          if (t || u)
            if (u) {
              var v = [P.g.R, P.g.P, P.g.ya];
              b();
              (function () {
                X(v) ||
                  nm(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [P.g.R, P.g.P, P.g.ya]
      );
    },
    Mr = !1;
  function Or(a, b, c, d) {
    var e = Cc(),
      f;
    if (e === 1)
      a: {
        var g = ui;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" != G.location.protocol ? a : b) + c;
  }
  var Pr = function (a, b) {
      T(5) &&
        ((a.dma = ho()),
        io() && (a.dmaCps = go()),
        Zn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    Rr = function (a, b, c) {
      if (G[a.functionName]) return b.Ah && I(b.Ah), G[a.functionName];
      var d = Qr();
      G[a.functionName] = d;
      if (a.zf)
        for (var e = 0; e < a.zf.length; e++) G[a.zf[e]] = G[a.zf[e]] || Qr();
      a.Df && G[a.Df] === void 0 && (G[a.Df] = c);
      Bc(Or("https://", "http://", a.Kh), b.Ah, b.km);
      return d;
    },
    Qr = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Sr = {
      functionName: "_googWcmImpl",
      Df: "_googWcmAk",
      Kh: "www.gstatic.com/wcm/loader.js",
    },
    Tr = {
      functionName: "_gaPhoneImpl",
      Df: "ga_wpid",
      Kh: "www.gstatic.com/gaphone/loader.js",
    },
    Ur = { jk: "9", Qk: "5" },
    Vr = {
      functionName: "_googCallTrackingImpl",
      zf: [Tr.functionName, Sr.functionName],
      Kh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Ur.jk || Ur.Qk) +
        ".js",
    },
    Wr = {},
    Xr = function (a, b, c, d, e) {
      O(22);
      if (c) {
        e = e || {};
        var f = Rr(Sr, e, a),
          g = { ak: a, cl: b };
        e.Ob === void 0 && (g.autoreplace = c);
        Pr(g, d);
        f(2, e.Ob, g, c, 0, Cb(), e.options);
      }
    },
    Yr = function (a, b, c, d, e) {
      O(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Cb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Wr[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ma.length >= 2
              ? ((f.adData = { ak: k.ma[xm[1]], cl: k.ma[xm[2]] }),
                Pr(f.adData, d),
                (Wr[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.ia }), (Wr[k.id] = !0)));
        }
        (f.gaData || f.adData) && Rr(Vr, e)(e.Ob, f, e.options);
      }
    },
    Zr = function () {
      var a = !1;
      return a;
    },
    $r = function (a, b) {
      if (a)
        if (lo()) {
        } else if ((a = l(a) ? um(Uj(a)) : um(Uj(a.id)))) {
          var c = void 0,
            d = !1,
            e = W(b, P.g.Ni);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = um(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ia && a.ia === g.ia)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = W(b, P.g.xg),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = W(b, P.g.vg),
                p = W(b, P.g.wg),
                q = W(b, P.g.yg),
                r = W(b, P.g.Mi),
                t = n || p,
                u = 1;
              a.prefix !== "UA" || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) Yr(c, m[v], r, b, { Ob: t, options: q });
                  else if (a.prefix === "AW" && a.ma[xm[2]])
                    Zr()
                      ? Yr([a], m[v], r || "US", b, { Ob: t, options: q })
                      : Xr(a.ma[xm[1]], a.ma[xm[2]], m[v], b, {
                          Ob: t,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (Zr()) Yr([a], m[v], r || "US", b, { Ob: t });
                    else {
                      var w = a.ia,
                        x = m[v],
                        y = { Ob: t };
                      O(23);
                      if (x) {
                        y = y || {};
                        var B = Rr(Tr, y, w),
                          A = {};
                        y.Ob !== void 0 ? (A.receiver = y.Ob) : (A.replace = x);
                        A.ga_wpid = w;
                        A.destination = x;
                        B(2, Cb(), A);
                      }
                    }
            }
          }
        }
    };
  function as(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.o[b];
      },
      setHitData: function (b, c) {
        a.o[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.o[b] === void 0 && (a.o[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.m, b);
      },
      Ej: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.o);
      },
    };
  }
  var cs = function (a) {
      var b = bs[a.target.ia];
      if (!a.isAborted && b)
        for (var c = as(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    ds = function (a, b) {
      var c = bs[a];
      c || (c = bs[a] = []);
      c.push(b);
    },
    bs = {};
  var fs = function (a) {
      if (X(es)) {
        a = a || {};
        vp(a, !1);
        var b = up[wp(eq(a.prefix))];
        if (b && !(Db() - b.vh * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(Db() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    es = P.g.R;
  var gs = function () {
    var a = (rc && rc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function hs() {
    var a = G.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function is(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  }
  var ks = function (a) {
      var b = js(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    },
    js = function () {
      var a = H.body,
        b = H.documentElement || (a && a.parentElement),
        c,
        d;
      if (H.compatMode && H.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var ss = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = rs(d));
      c && (e.isVisible = !is(d));
      return e;
    },
    ts = function (a, b, c) {
      return ss({ element: a.element, X: a.X, qa: "1" }, b, c);
    },
    us = function (a) {
      var b = !!a.ud + "." + !!a.vd;
      a && a.ve && a.ve.length && (b += "." + a.ve.join("."));
      a &&
        a.vb &&
        (b += "." + a.vb.email + "." + a.vb.phone + "." + a.vb.address);
      return b;
    },
    xs = function (a) {
      if (a.length != 0) {
        var b;
        b = vs(a, function (c) {
          return !ws.test(c.X);
        });
        b = vs(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = vs(b, function (c) {
          return !is(c.element);
        });
        return b[0];
      }
    },
    ys = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && qh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    vs = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length == 0 ? a : c;
    },
    rs = function (a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = rs(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    As = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(zs);
          if (f) {
            var g = f[0],
              k;
            if (G.location) {
              var m = ej(G.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    Es = function () {
      var a = [],
        b = H.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(Bs.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(Cs.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (T(22) && Ds.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    Fs = !1;
  var zs = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Gs = /@(gmail|googlemail)\./i,
    ws = /support|noreply/i,
    Bs = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Cs = ["BR"],
    Hs = { gn: "1", un: "2", ln: "3", on: "4", bn: "5", vn: "6", qn: "7" },
    Is = {},
    Ds = ["INPUT", "SELECT"];
  var at = function (a) {
      a = a || { ud: !0, vd: !0, Lf: void 0 };
      a.vb = a.vb || { email: !0, phone: !1, address: !1 };
      var b = us(a),
        c = Is[b];
      if (c && Db() - c.timestamp < 200) return c.result;
      var d = Es(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!T(22)) {
        if (a.vb && a.vb.email) {
          var n = As(d.elements);
          f = ys(n, a && a.ve);
          g = xs(f);
          n.length > 10 && (e = "3");
        }
        !a.Lf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(ts(f[p], a.ud, a.vd));
        m = m.slice(0, 10);
      } else if (a.vb) {
      }
      g && (k = ts(g, a.ud, a.vd));
      var D = { elements: m, Eh: k, status: e };
      Is[b] = { timestamp: Db(), result: D };
      return D;
    },
    bt = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Gs.test(a.X)
      );
    };
  var ht = Number("") || 5,
    it = Number("") || 50,
    jt = ub();
  var lt = function (a, b) {
      a &&
        (kt("sid", a.targetId, b),
        kt("cc", a.clientCount, b),
        kt("tl", a.totalLifeMs, b),
        kt("hc", a.heartbeatCount, b),
        kt("cl", a.clientLifeMs, b));
    },
    kt = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    mt = function () {
      var a = H.referrer;
      if (a) {
        var b;
        return cj(U(a), "host") === ((b = G.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    nt = function (a) {
      this.O = a;
      this.H = 0;
    };
  nt.prototype.D = function (a, b, c, d) {
    var e = mt(),
      f,
      g = [];
    f =
      G === G.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && kt("si", a.Ff, g);
    kt("m", 0, g);
    kt("iss", f, g);
    kt("if", c, g);
    lt(b, g);
    d && kt("fm", encodeURIComponent(d.substring(0, it)), g);
    this.K(g);
  };
  nt.prototype.j = function (a, b, c, d, e) {
    var f = [];
    kt("m", 1, f);
    kt("s", a, f);
    kt("po", mt(), f);
    b && (kt("st", b.state, f), kt("si", b.Ff, f), kt("sm", b.Nf, f));
    lt(c, f);
    kt("c", d, f);
    e && kt("fm", encodeURIComponent(e.substring(0, it)), f);
    this.K(f);
  };
  nt.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !wj ||
      this.H >= ht ||
      (kt("pid", jt, a),
      kt("bc", ++this.H, a),
      a.unshift("ctid=" + Nf.ctid + "&t=s"),
      this.O("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var ot = {
    Sk: Number("") || 500,
    Gk: Number("") || 5e3,
    dj: Number("20") || 10,
    mk: Number("") || 5e3,
  };
  function pt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var qt = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Uk = e;
      this.H = g;
      this.j = f;
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.Z = this.Pa = this.heartbeatCount = this.Tk = 0;
      this.ej = !1;
      this.D = {};
      this.state = 0;
      this.Ff = pt(this.j);
      this.Nf = pt(this.j);
      this.O = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.ac();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        Ff: Math.round(pt(this.j) - this.Ff),
        Nf: Math.round(pt(this.j) - this.Nf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.Nf = pt(this.j)));
    };
    d.prototype.ij = function () {
      return String(this.Tk++);
    };
    d.prototype.ac = function () {
      var e = this;
      this.heartbeatCount++;
      this.bc(
        {
          type: 0,
          clientId: this.id,
          requestId: this.ij(),
          maxDelay: this.fj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats), e.Z++, f.isDead || e.Z > ot.dj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.O = k || 10;
                e.K(4);
                e.Rk();
                var m, n;
                (n = (m = e.H).im) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.kj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + ot.dj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.ej) {
                  var t, u;
                  (u = (t = e.H).Mn) == null || u.call(t);
                } else {
                  e.ej = !0;
                  var v, w;
                  (w = (v = e.H).jm) == null || w.call(v);
                }
              e.Z = 0;
              e.Vk();
              e.kj();
            }
          }
        }
      );
    };
    d.prototype.fj = function () {
      return this.state === 2 ? ot.Gk : ot.Sk;
    };
    d.prototype.kj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.ac();
      }, Math.max(0, this.fj() - (pt(this.j) - this.Pa)));
    };
    d.prototype.Yk = function (e, f, g) {
      var k = this;
      this.bc(
        { type: 1, clientId: this.id, requestId: this.ij(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                t,
                u;
              (u = (t = k.H).onFailure) == null || u.call(t, r);
              g(r);
            }
        }
      );
    };
    d.prototype.bc = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.O }), f(e);
      else {
        var k = this.state !== 2 && e.type != 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.D[m];
              r && g.cj(r, 7);
            },
            (n = e.maxDelay) != null ? n : ot.mk
          ),
          q = { request: e, Wj: f, Qj: k, dm: p };
        this.D[m] = q;
        k || this.qj(q);
      }
    };
    d.prototype.qj = function (e) {
      this.Pa = pt(this.j);
      e.Qj = !1;
      this.Uk(e.request);
    };
    d.prototype.Vk = function () {
      for (var e in this.D) {
        var f = this.D[e];
        f.Qj && this.qj(f);
      }
    };
    d.prototype.Rk = function () {
      for (var e in this.D) this.cj(this.D[e], this.O);
    };
    d.prototype.cj = function (e, f) {
      this.nd(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Wj(g);
    };
    d.prototype.nd = function (e) {
      delete this.D[e.request.requestId];
      this.j.clearTimeout(e.dm);
    };
    d.prototype.Il = function (e) {
      this.Pa = pt(this.j);
      var f = this.D[e.requestId];
      if (f) this.nd(f), f.Wj(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, G, b);
    return c;
  };
  var rt = "https://" + ii.Ed + "/gtm/static/",
    st;
  var tt = function () {
      st ||
        (st = new nt(function (a) {
          return void Ec(a);
        }));
      return st;
    },
    ut = function (a) {
      if (!a) {
        var b = Bi.Pa;
        a = b ? b : rt;
      }
      var c;
      try {
        c = new URL(a);
      } catch (d) {
        return null;
      }
      return c.protocol !== "https:" ? null : c;
    },
    vt = function (a) {
      var b = to(oo.oj);
      return b && b[a];
    },
    wt = function (a, b, c) {
      var d = tt(),
        e = this;
      this.initTime = c;
      this.O = this.K = !1;
      this.Z = null;
      this.D = d;
      this.j = 15;
      this.H = this.kl(a);
      G.setTimeout(function () {
        return e.Ij();
      }, 1e3);
      I(function () {
        e.Ql(a, b);
      });
    };
  ca = wt.prototype;
  ca.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.D.j(this.j, void 0, void 0, a.commandType),
        c({ failureType: this.j }))
      : this.H.Yk(a, b, c);
  };
  ca.getState = function () {
    return this.H.getState().state;
  };
  ca.Ql = function (a, b) {
    var c = G.location.origin,
      d = this,
      e = Dc();
    try {
      var f = e.contentDocument.createElement("iframe"),
        g = a.pathname,
        k = b ? "&1p=1" : "";
      Dc(
        (g[g.length - 1] === "/" ? a.toString() : a.toString() + "/") +
          "sw_iframe.html?origin=" +
          encodeURIComponent(c) +
          k,
        void 0,
        void 0,
        void 0,
        f
      );
      var m = function () {
        e.contentDocument.body.appendChild(f);
        f.addEventListener("load", function () {
          d.Z = f.contentWindow;
          e.contentWindow.addEventListener("message", function (n) {
            n.origin === a.origin && d.H.Il(n.data);
          });
          d.Ij();
        });
      };
      e.contentDocument.readyState === "complete"
        ? m()
        : e.contentWindow.addEventListener("load", function () {
            m();
          });
    } catch (n) {
      e.parentElement.removeChild(e),
        (this.j = 11),
        this.D.D(void 0, void 0, this.j, n.toString());
    }
  };
  ca.kl = function (a) {
    var b = this,
      c = qt(
        function (d) {
          var e;
          (e = b.Z) == null || e.postMessage(d, a.origin);
        },
        {
          jm: function () {
            b.K = !0;
            b.D.D(c.getState(), c.stats);
          },
          im: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.D.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.D.D(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.D.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  ca.Ij = function () {
    this.O || this.H.init();
    this.O = !0;
  };
  function xt(a, b) {
    var c = G.location.origin;
    if (!c) return;
    Bi.D && (a = "" + c + Ci() + "/_");
    var d = ut(a);
    if (d === null || vt(d.origin)) return;
    if (!sc()) {
      tt().D(void 0, void 0, 6);
      return;
    }
    var e = new wt(d, !!a, b || Math.round(Db())),
      f;
    a: {
      var g = oo.oj,
        k = {},
        m = ro(g);
      if (!m) {
        m = ro(g, !0);
        if (!m) {
          f = void 0;
          break a;
        }
        m.set(k);
      }
      f = m.get();
    }
    f[d.origin] = e;
  }
  function zt(a, b, c, d) {
    var e;
    if ((e = vt(a)) == null || !e.delegate) {
      var f = sc() ? 16 : 6;
      tt().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    vt(a).delegate(b, c, d);
  }
  function At(a, b, c, d) {
    var e = ut();
    if (e === null) {
      d(sc() ? 16 : 6);
      return;
    }
    var f,
      g = (f = vt(e.origin)) == null ? void 0 : f.initTime,
      k = Math.round(Db());
    zt(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: g ? k - g : void 0,
        },
      },
      function () {
        c();
      },
      function (m) {
        d(m.failureType);
      }
    );
  }
  function Bt(a, b, c, d) {
    var e = ut(a);
    if (e === null) {
      d("_is_sw=f" + (sc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(Db()),
      k,
      m = (k = vt(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    zt(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          t = (r = vt(e.origin)) == null ? void 0 : r.getState();
        t != void 0 && (q += "s" + t);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var Ct = void 0;
  function Dt(a) {
    var b = [];
    return b;
  }
  var Et = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  cl();
  fl() || $k("iPod");
  $k("iPad");
  !$k("Android") || dl() || cl() || bl() || $k("Silk");
  dl();
  !$k("Safari") ||
    dl() ||
    (al() ? 0 : $k("Coast")) ||
    bl() ||
    (al() ? 0 : $k("Edge")) ||
    (al() ? Zk("Microsoft Edge") : $k("Edg/")) ||
    (al() ? Zk("Opera") : $k("OPR")) ||
    cl() ||
    $k("Silk") ||
    $k("Android") ||
    gl();
  var Ft = {},
    Gt = null,
    Ht = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!Gt) {
        Gt = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          Ft[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            Gt[q] === void 0 && (Gt[q] = p);
          }
        }
      }
      for (
        var r = Ft[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + D + E + C;
      }
      var F = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (M = r[(F & 15) << 2] || u);
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (F >> 4)] + M + u;
      }
      return t.join("");
    };
  var It =
    "BinaryX BinaryXVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Jt(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Kt() {
    var a = G.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Lt() {
    var a, b;
    return (b = (a = G.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Mt(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Nt() {
    var a = G;
    if (!Mt(a)) return null;
    var b = Jt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(It)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Ot,
    Pt = function () {
      if (Mt(G) && ((Ot = Db()), !Lt())) {
        var a = Nt();
        a &&
          (a.then(function () {
            O(95);
          }),
          a.catch(function () {
            O(96);
          }));
      }
    },
    Rt = function (a) {
      var b = Qt.Tm,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = Kt();
      if (d) c(d);
      else {
        var e = Lt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = G.setTimeout(function () {
            c.Ee || ((c.Ee = !0), O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Ee || ((c.Ee = !0), O(104), G.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Ee || ((c.Ee = !0), O(105), G.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    St = function (a, b) {
      a &&
        ((b.o[P.g.kf] = a.architecture),
        (b.o[P.g.lf] = a.bitness),
        a.fullVersionList &&
          (b.o[P.g.nf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.o[P.g.pf] = a.mobile ? "1" : "0"),
        (b.o[P.g.qf] = a.model),
        (b.o[P.g.rf] = a.BinaryX),
        (b.o[P.g.tf] = a.BinaryXVersion),
        (b.o[P.g.uf] = a.wow64 ? "1" : "0"));
    };
  function Tt(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  var Ut = !1;
  function Vt() {
    if (Tt("join-ad-interest-group") && qb(rc.joinAdInterestGroup)) return !0;
    Ut || (pl(""), (Ut = !0));
    return Tt("join-ad-interest-group") && qb(rc.joinAdInterestGroup);
  }
  function Wt(a, b) {
    var c = Ti[3] === void 0 ? 1 : Ti[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = H.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(H.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Ti[2] === void 0 ? 50 : Ti[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && Db() - p < (Ti[1] === void 0 ? 6e4 : Ti[1])
        ? (mb("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Xt(e[0]);
        else {
          if (m) {
            mb("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Xt(e[0]) : m && Xt(k[0]);
      Dc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: Db() }
      );
    }
  }
  function Xt(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Yt() {
    return "https://td.doubleclick.net";
  }
  var Zt = function () {
      return [P.g.R, P.g.P];
    },
    $t = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c == -1 ? b : b.substring(0, c);
      }
      return "";
    },
    au = function () {
      var a = H.title;
      if (a == void 0 || a == "") return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    bu = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    cu = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    },
    du = function (a) {
      var b = a.target.ma[xm[1]];
      if (b) {
        a.o[P.g.Vc] = b;
        var c = a.target.ma[xm[2]];
        c && (a.o[P.g.nb] = c);
      } else a.isAborted = !0;
    },
    eu = function (a) {
      if (
        cu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.o[P.g.nb],
          c = W(a.m, P.g.Ue) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && bu(a);
            (T(92)
              ? rc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
                wc("Edg/") ||
                wc("EdgA/") ||
                wc("EdgiOS/")
              : rc.userAgent.toLowerCase().indexOf("firefox") !== -1) &&
              (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || bu(a);
        }
        cu(a, ["conversion", "remarketing"]) &&
          (a.o[P.g.Zi] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    fu = function (a) {
      cu(a, ["conversion", "remarketing"]);
    },
    gu = function (a) {
      if (!a.metadata.consent_updated && cu(a, ["conversion", "remarketing"])) {
        var b = rl(!1);
        a.o[P.g.Gb] = b;
        var c = W(a.m, P.g.wa);
        c || (c = b === 1 ? G.top.location.href : G.location.href);
        a.o[P.g.wa] = $t(c);
        a.copyToHitData(P.g.Da, H.referrer);
        a.o[P.g.Jb] = au();
        a.copyToHitData(P.g.Oa);
        var d = hs();
        a.o[P.g.Kb] = d.width + "x" + d.height;
        for (var e, f = G, g = f; f && f != f.parent; )
          (f = f.parent), nl(f) && (g = f);
        e = g;
        var k;
        var m = e.location.href;
        if (e === e.top) k = { url: m, Xl: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && m.indexOf(r) === -1 && ((n = !1), (m = r));
          }
          k = { url: m, Xl: n };
        }
        var t = k;
        t.url && c !== t.url && (a.o[P.g.hf] = $t(t.url));
      }
    },
    hu = function (a) {
      cu(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(P.g.Aa),
        a.copyToHitData(P.g.na),
        a.copyToHitData(P.g.za));
    },
    iu = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (cu(a, b) && X(P.g.P)) {
        a.copyToHitData(P.g.Ba);
        var c = to(oo.Lg);
        if (c === void 0) so(oo.Mg, !0);
        else {
          var d = to(oo.ke);
          a.o[P.g.ff] = d + "." + c;
        }
      }
    },
    ju = function (a) {
      if (!Mt(G)) O(87);
      else if (Ot !== void 0) {
        O(85);
        var b = Kt();
        b ? St(b, a) : O(86);
      }
    },
    mu = function (a) {
      cu(a, ["conversion"]) &&
        X(P.g.P) &&
        (G._gtmpcm === !0 || gs()
          ? (a.o[P.g.Ub] = "2")
          : T(27) &&
            (ku || Tt("attribution-reporting") || (pl(""), (ku = !0)),
            lu || ((lu = !0), pl("")),
            Tt("attribution-reporting") && (a.o[P.g.Ub] = "1")));
    },
    nu = function (a) {
      if (cu(a, ["conversion", "remarketing"]) && T(23)) {
        var b = function (c) {
          return T(25) ? (mb("fdr", c), !0) : !1;
        };
        if (X(P.g.R) || b(0))
          if (X(P.g.P) || b(1))
            if (W(a.m, P.g.Ca) !== !1 || b(2))
              if (Zn(a.m) || b(3))
                if (W(a.m, P.g.Tb) !== !1 || b(4))
                  if (
                    (T(26)
                      ? a.eventName === P.g.ba
                        ? W(a.m, P.g.Ja)
                        : void 0
                      : W(a.m, P.g.Ja)) !== !1 ||
                    b(5)
                  )
                    if (Vt() || b(6))
                      T(25) && ob()
                        ? ((a.o[P.g.Ci] = nb("fdr")), delete lb.fdr)
                        : ((a.o[P.g.gg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    ou = function (a) {
      a.metadata.conversion_linker_enabled = W(a.m, P.g.ra) !== !1;
      a.metadata.cookie_options = xr(a);
      a.metadata.redact_ads_data =
        W(a.m, P.g.fa) != null && W(a.m, P.g.fa) !== !1;
      a.metadata.allow_ad_personalization = Zn(a.m);
    },
    pu = function (a) {
      if (br(a, "ccd_add_1p_data", !1) && X(Zt())) {
        var b = a.m.D[P.g.ce];
        if (Qi(b)) {
          var c = W(a.m, P.g.Ea);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Xa(c) && (a.metadata.user_data_from_code = c),
              Xa(b.selectors) &&
                (a.metadata.user_data_from_manual = Pi(b.selectors)));
        }
      }
    },
    qu = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          cu(a, ["conversion", "user_data_web"]),
        c = !br(a, "ccd_add_1p_data", !1) && cu(a, "user_data_lead");
      if ((b || c) && X(P.g.R)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = W(e, P.g.Ea);
        if (d) {
          var k = (W(e, P.g.Qd) || {})[String(a.o[P.g.nb])];
          if (W(e, P.g.Gd) === !0 || k) {
            var m;
            var n;
            if (k)
              b: {
                switch (k.enhanced_conversions_mode) {
                  case "manual":
                    if (g && Xa(g)) {
                      n = g;
                      break b;
                    }
                    var p = k.enhanced_conversions_manual_var;
                    n = p !== void 0 ? p : G.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = Pi(k[P.g.fg]);
                    break b;
                }
                n = void 0;
              }
            else n = G.enhanced_conversion_data;
            var q = n,
              r = (k || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if (r === "manual")
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = r === "automatic" ? (Jr(k) ? "a" : "m") : "c";
              m = { X: q, dk: t };
            } else m = { X: q, dk: void 0 };
            var u = m,
              v = u.dk;
            f = u.X;
            a.o[P.g.md] = v;
          }
        } else if (a.m.isGtmEvent) {
          bu(a);
          a.metadata.user_data = g;
          a.o[P.g.md] = Ir(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    ru = function (a) {
      cu(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.o[P.g.xc] = a.eventName)
          : (a.o[P.g.xc] = a.eventName),
        z(a.m.j, function (b, c) {
          fi[b.split(".")[0]] || (a.o[b] = c);
        }));
    },
    su = function (a) {
      if (
        a.eventName === P.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        cu(a, "conversion") && (a.metadata.speculative = !0),
        !cu(a, "remarketing") ||
          (W(a.m, P.g.Tb) !== !1 && W(a.m, P.g.Ja) !== !1) ||
          (a.metadata.speculative = !0),
        cu(a, "landing_page"))
      ) {
        var b = W(a.m, P.g.sa) || {},
          c = W(a.m, P.g.Xa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            rd: d,
            wd: b,
            Cd: c,
            xa: a.metadata.source_canonical_id,
            m: a.m,
            xd: e,
            ek: W(a.m, P.g.Ba),
          },
          g = a.metadata.cookie_options;
        Ar(f, g);
        $r(a.target, a.m);
        Nr({
          Ug: !1,
          xd: e,
          targetId: a.target.id,
          m: a.m,
          jc: d ? g : void 0,
          Ef: d,
          Bj: a.o[P.g.Yd],
          jh: a.o[P.g.rb],
          ah: a.o[P.g.ob],
          mh: a.o[P.g.Gb],
        });
        a.isAborted = !0;
      }
    },
    tu = function (a) {
      if (
        !br(a, "hasPreAutoPiiCcdRule", !1) &&
        cu(a, "conversion") &&
        X(P.g.R)
      ) {
        var b = (W(a.m, P.g.Qd) || {})[String(a.o[P.g.nb])],
          c = a.o[P.g.Vc],
          d;
        if (!(d = Jr(b)))
          if (Ll())
            if (Fs) d = !0;
            else {
              var e = $q("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = Db(),
            g = at({ ud: !0, vd: !0, Lf: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + bt(n) + "*" + n.type);
            }
            a.o[P.g.Dg] = k.join("~");
            var p = g.Eh;
            p && ((a.o[P.g.Eg] = p.querySelector), (a.o[P.g.Cg] = bt(p)));
            a.o[P.g.Bg] = String(Db() - f);
            a.o[P.g.Fg] = g.status;
          }
        }
      }
    },
    uu = function (a) {
      if (a.eventName === P.g.Ta && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && cu(a, "conversion")) {
          var b = W(a.m, P.g.Fb);
          if (typeof b !== "function") return;
          var c = String(W(a.m, P.g.qb)),
            d = a.o[c],
            e = W(a.m, c);
          c === P.g.Ua || c === P.g.Db
            ? Dr(
                { fk: c, callback: b, Jj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Uq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    vu = function (a) {
      if (cu(a, "conversion") && X(P.g.R) && (a.o[P.g.jb] || a.o[P.g.zc])) {
        var b = a.o[P.g.nb],
          c = h(a.metadata.cookie_options),
          d = eq(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.o[P.g.jb]) {
          var e = vr(b, c, T(59) && !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.o[P.g.Gg] = e);
        }
        if (a.o[P.g.zc]) {
          var f = nr(b, c).xl;
          f && (a.o[P.g.lg] = f);
        }
      }
    },
    wu = function (a) {
      var b = T(8),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = Sm(c, P.g.la);
        d = Nb(Xa(g) ? g : {});
      }
      var k = Sm(c, P.g.la, 1),
        m = Sm(c, P.g.la, 2);
      e = Nb(Xa(k) ? k : {}, ".");
      f = Nb(Xa(m) ? m : {}, ".");
      b || (a.o[P.g.Yd] = d);
      a.o[P.g.rb] = e;
      a.o[P.g.ob] = f;
    },
    xu = function (a) {
      if (cu(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== P.g.Ia) ||
          (a.copyToHitData(P.g.da),
          b &&
            (a.copyToHitData(P.g.Kd),
            a.copyToHitData(P.g.Id),
            a.copyToHitData(P.g.Jd),
            a.copyToHitData(P.g.Hd),
            (a.o[P.g.Xf] = a.eventName)));
      }
    },
    yu = function (a) {
      if (
        cu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (cu(a, ["conversion", "remarketing"])) {
          var c = W(b, P.g.Xb);
          if (c === !0 || c === !1) a.o[P.g.Xb] = c;
        }
        Zn(b)
          ? (a.o[P.g.Nb] = !1)
          : ((a.o[P.g.Nb] = !0), cu(a, "remarketing") && (a.isAborted = !0));
      }
    },
    zu = function (a) {
      cu(a, "conversion") &&
        (a.copyToHitData(P.g.fd),
        a.copyToHitData(P.g.Ld),
        a.copyToHitData(P.g.ld),
        a.copyToHitData(P.g.Rd),
        a.copyToHitData(P.g.wc),
        a.copyToHitData(P.g.Zc));
    },
    Au = function (a) {
      cs(a);
    },
    Bu = function (a) {
      if (cu(a, ["conversion", "remarketing"]) && G.__gsaExp && G.__gsaExp.id) {
        var b = G.__gsaExp.id;
        if (qb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.o[P.g.qg] = c);
          } catch (d) {}
      }
    },
    Cu = function (a) {
      if (cu(a, ["conversion", "remarketing"])) {
        var b = wr();
        b !== void 0 && (a.o[P.g.de] = b || "error");
        var c = Sn();
        c && (a.o[P.g.Ac] = c);
        var d = Pn();
        d && (a.o[P.g.Dc] = d);
      }
    },
    Du = function (a) {
      cu(a, ["conversion"]) && hp(!1)._up === "1" && (a.o[P.g.Xd] = !0);
    },
    Eu = function (a) {
      cu(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !X(Zt()));
    },
    Fu = function (a) {
      if (
        cu(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        X(P.g.R) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = eq(b.prefix);
        c === "_gcl" && (c = "");
        var d = pr(c);
        a.o[P.g.li] = d.hh;
        a.o[P.g.mi] = d.ih;
        var e = T(59);
        if (ur(c, e)) {
          var f = e ? tr(c) : sr(c);
          f && (a.o[P.g.jb] = f);
          if (!c) {
            var g = a.o[P.g.nb];
            b = h(b);
            b.prefix = c;
            var k = nr(g, b, !0).wl;
            k && (a.o[P.g.zc] = k);
          }
        } else {
          var m = rr(c);
          m && (a.o[P.g.Ua] = m);
          if (!c) {
            var n = mr(Zp(Yp()) ? Gp() : {}, kr);
            n && (a.o[P.g.Vd] = n);
          }
        }
      }
    },
    Gu = function (a) {
      if (
        cu(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        X(P.g.R)
      ) {
        var b = !T(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          vp(c, a.metadata.hit_type === "conversion" && a.eventName !== P.g.Ta);
          X(P.g.P) && (a.o[P.g.Db] = tp[wp(c.prefix)]);
        }
      }
    },
    Hu = function (a) {
      Bi.D || qi || oj(a.m) || (T(76) && xt(void 0, Math.round(Db())));
    },
    Iu = function () {},
    Ju = function (a) {
      if (cu(a, ["conversion"])) {
        var b = fs(a.metadata.cookie_options);
        if (b && !a.o[P.g.Aa]) {
          var c = Po(a.o[P.g.nb]);
          a.o[P.g.Aa] = c;
        }
        b && ((a.o[P.g.tb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Ku = function (a) {
      var b = X(Zt());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.o[P.g.Qb] = !0);
      }
    },
    Lu = function (a) {
      cu(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.o[P.g.aj] = !0);
    },
    Mu = function (a) {
      if (!a.metadata.consent_updated && T(21) && cu(a, ["conversion"])) {
        var b = gr();
        fr(b) && ((a.o[P.g.ed] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Nu = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            bu(a);
            break;
          case "user_data_lead":
            b = 98;
            bu(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && O(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Ou = function (a) {
      T(18) &&
      a.eventName === P.g.ba &&
      cu(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? $r(a.target, a.m)
        : cu(a, "call_conversion") && ($r(a.target, a.m), (a.isAborted = !0));
    },
    ku = !1,
    lu = !1;
  var Qu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      z(a.o, function (f, g) {
        var k = Pu[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== P.g.Fd && f !== P.g.Md && f !== P.g.Re && f !== P.g.Wf) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", no({ xa: a.metadata.source_canonical_id }));
      $n() && d("gcs", ao());
      d("gcd", fo(a.m));
      io() && d("dma_cps", go());
      d("dma", ho());
      Cn(Kn()) && d("tcfd", jo());
      Bi.j && d("tag_exp", Bi.j);
      if (a.metadata.add_tag_timing) {
        d("tft", Db());
        var e = Rc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      T(17) && d("apve", T(18) ? "1" : "0");
      b(c);
    },
    Ru = function (a) {
      Qu(a, function (b) {
        var c = [];
        z(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          a.metadata.hit_type === "page_view"
            ? pj(
                X([P.g.R, P.g.P])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) + "/ccm/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Lc(e);
        if (qb(a.m.onSuccess)) a.m.onSuccess();
      });
    },
    Su = {},
    Pu =
      ((Su[P.g.Qb] = "gcu"),
      (Su[P.g.jb] = "gclgb"),
      (Su[P.g.Ua] = "gclaw"),
      (Su[P.g.ni] = "gad_source"),
      (Su[P.g.Fd] = "gclid"),
      (Su[P.g.oi] = "gclsrc"),
      (Su[P.g.Wf] = "gbraid"),
      (Su[P.g.Re] = "wbraid"),
      (Su[P.g.Db] = "auid"),
      (Su[P.g.si] = "rnd"),
      (Su[P.g.wi] = "ncl"),
      (Su[P.g.Zf] = "gcldc"),
      (Su[P.g.Md] = "dclid"),
      (Su[P.g.ob] = "edid"),
      (Su[P.g.xc] = "en"),
      (Su[P.g.Ac] = "gdpr"),
      (Su[P.g.rb] = "gdid"),
      (Su[P.g.Bc] = "_ng"),
      (Su[P.g.Ji] = "gtm_up"),
      (Su[P.g.Gb] = "frm"),
      (Su[P.g.ed] = "lps"),
      (Su[P.g.Yd] = "did"),
      (Su[P.g.wa] = "dl"),
      (Su[P.g.Da] = "dr"),
      (Su[P.g.ff] = "ga_uid"),
      (Su[P.g.Dc] = "gdpr_consent"),
      (Su[P.g.Ba] = "uid"),
      (Su[P.g.de] = "us_privacy"),
      (Su[P.g.Nb] = "npa"),
      Su);
  var Tu = {
    M: {
      Qh: "ads_conversion_hit",
      Dd: "container_execute_start",
      Th: "container_setup_end",
      Pf: "container_setup_start",
      Rh: "container_blocking_end",
      Sh: "container_execute_end",
      Uh: "container_yield_end",
      Qf: "container_yield_start",
      Ti: "event_execute_end",
      Si: "event_evaluation_end",
      Hg: "event_evaluation_start",
      Ui: "event_setup_end",
      ee: "event_setup_start",
      Wi: "ga4_conversion_hit",
      he: "page_load",
      tn: "pageview",
      hc: "snippet_load",
      rj: "tag_callback_error",
      sj: "tag_callback_failure",
      tj: "tag_callback_success",
      uj: "tag_execute_end",
      od: "tag_execute_start",
    },
  };
  function Uu() {
    function a(c, d) {
      var e = nb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Vu = !1;
  var Dv = function (a, b) {},
    Ev = function (a, b) {},
    Fv = function (a, b) {},
    Gv = function (a, b) {},
    Hv = function () {
      var a = {};
      return a;
    },
    uv = function (a) {
      a = a === void 0 ? !0 : a;
      var b = {};
      return b;
    },
    Iv = function () {},
    Jv = function (a, b) {},
    Kv = function (a, b, c) {},
    Lv = function () {};
  function Mv(a, b) {
    var c = G,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  var Nv = function (a, b, c) {
    var d = kl(a, "fmt");
    if (b) {
      var e = kl(a, "random"),
        f = kl(a, "label") || "";
      if (!e) return !1;
      var g = Ht(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Mv(g, b)) return !1;
    }
    d && d != 4 && (a = ml(a, "rfmt", d));
    var k = ml(a, "fmt", 4);
    Bc(
      k,
      function () {
        G.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((G.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Ov = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Qv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Pv(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Rv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: Pv(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Pv = function (a) {
      a.id != null &&
        a.item_id != null &&
        (O(138), a.id !== a.item_id && O(148));
      var b = a.id;
      T(16) &&
        (a.item_id != null ? (b = a.item_id) : b == null && (b = a.item_name));
      return b;
    },
    Tv = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(Sv(d.value)),
          e.push(Sv(d.quantity)),
          e.push(Sv(d.item_id)),
          e.push(Sv(d.start_date)),
          e.push(Sv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return b.length > 0 ? b.join("") : "";
    },
    Sv = function (a) {
      return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
    },
    Vv = function (a, b) {
      var c = Uv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Uv = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      z(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Wv(d[k]);
            m != void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Wv(d);
        e = f;
        var n = Wv(c);
        n && e != void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Wv = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Xv = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = eg[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing") ||
        d("random", a.metadata.event_start_timestamp_ms);
      z(b, d);
      return c.join("&");
    },
    Yv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.o[P.g.Vc],
        e = X([P.g.R, P.g.P]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = lo() ? 2 : 3,
        p = 0,
        q = function (y) {
          f.push(y);
          y.Ha && p++;
        },
        r = void 0;
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var t = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (r = 8))
              : ((g = "https://www.googleadservices.com"), (r = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (r = 6));
          a.metadata.is_gcp_conversion &&
            (t = "&gcp=1&sscte=1&ct_cookie_present=1");
          var u = {
            Ka: "" + pj(g, !0) + m + "/" + d + "/?" + Xv(a, b) + t,
            format: n,
            Ha: !0,
            endpoint: r,
          };
          X(P.g.P) && (u.attributes = { attributionsrc: "" });
          q(u);
          a.metadata.send_ccm_parallel_ping &&
            ((r = a.metadata.is_gcp_conversion ? 23 : 22),
            q({
              Ka: "" + pj(g, !0) + "/ccm/conversion/" + d + "/?" + Xv(a, b) + t,
              format: 2,
              Ha: !0,
              endpoint: r,
            }));
          a.metadata.is_gcp_conversion &&
            e &&
            ((t = "&gcp=1&ct_cookie_present=1"),
            q({
              Ka:
                "" +
                pj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Xv(a, b) +
                t,
              format: n,
              Ha: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var v = b.data || "",
            w = Ov(Qv(a.o[P.g.da]));
          if (w.length) {
            for (var x = 0; x < w.length; x++)
              (b.data = Vv(v, w[x])),
                q({
                  Ka:
                    "" +
                    pj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Xv(a, b),
                  format: n,
                  Ha: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    Ka: "" + Yt() + "/td/rul/" + d + "?" + Xv(a, b),
                    format: 4,
                    Ha: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              Ka:
                "" +
                pj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Xv(a, b),
              format: n,
              Ha: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          q({
            Ka:
              "" +
              pj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Xv(a, b),
            format: 1,
            Ha: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          q({
            Ka:
              "" +
              pj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Xv(a, b),
            format: 1,
            Ha: !0,
            endpoint: 21,
          });
      }
      f.length > 1 && qb(a.m.onSuccess) && (k = Ob(a.m.onSuccess, p));
      lo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (T(24) && c === "conversion" && (b.ct_cookie_present = 0),
        q({
          Ka: "" + Yt() + "/td/rul/" + d + "?" + Xv(a, b),
          format: 4,
          Ha: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, Ol: f };
    },
    Zv = function (a, b, c, d, e, f, g) {
      Ev(c.m.eventId, c.eventName);
      var k = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Lc(a);
          e && e();
          break;
        case 2:
          Ec(a, k, void 0, f);
          break;
        case 3:
          var m = !1;
          try {
            m = Nv(a, k, f);
          } catch (q) {
            m = !1;
          }
          m || Zv(a, 2, c, d, k, f, g);
          break;
        case 4:
          var n = "AW-" + c.o[P.g.Vc],
            p = c.o[P.g.nb];
          p && (n = n + "/" + p);
          Wt(a, n);
      }
    },
    $v = function (a) {
      switch (a) {
        case "conversion":
          return T(47);
        case "user_data_lead":
          return T(48);
        case "user_data_web":
          return T(49);
      }
      return !1;
    },
    aw = {},
    bw =
      ((aw[P.g.Qb] = "gcu"),
      (aw[P.g.jb] = "gclgb"),
      (aw[P.g.Ua] = "gclaw"),
      (aw[P.g.li] = "gclgs"),
      (aw[P.g.mi] = "gclst"),
      (aw[P.g.Db] = "auid"),
      (aw[P.g.Hd] = "dscnt"),
      (aw[P.g.Id] = "fcntr"),
      (aw[P.g.Jd] = "flng"),
      (aw[P.g.Kd] = "mid"),
      (aw[P.g.Xf] = "bttype"),
      (aw[P.g.nb] = "label"),
      (aw[P.g.Ub] = "capi"),
      (aw[P.g.Ve] = "pscdl"),
      (aw[P.g.za] = "currency_code"),
      (aw[P.g.Ld] = "vdltv"),
      (aw[P.g.xi] = "_dbg"),
      (aw[P.g.Rd] = "oedeld"),
      (aw[P.g.ob] = "edid"),
      (aw[P.g.Ci] = "fdr"),
      (aw[P.g.gg] = "fledge"),
      (aw[P.g.Vd] = "gac"),
      (aw[P.g.zc] = "gacgb"),
      (aw[P.g.lg] = "gacmcov"),
      (aw[P.g.Ac] = "gdpr"),
      (aw[P.g.rb] = "gdid"),
      (aw[P.g.Bc] = "_ng"),
      (aw[P.g.qg] = "gsaexp"),
      (aw[P.g.Gb] = "frm"),
      (aw[P.g.Xd] = "gtm_up"),
      (aw[P.g.ed] = "lps"),
      (aw[P.g.Yd] = "did"),
      (aw[P.g.fd] = void 0),
      (aw[P.g.Jb] = "tiba"),
      (aw[P.g.Xb] = "rdp"),
      (aw[P.g.tb] = "ecsid"),
      (aw[P.g.ff] = "ga_uid"),
      (aw[P.g.ld] = "delopc"),
      (aw[P.g.Dc] = "gdpr_consent"),
      (aw[P.g.Aa] = "oid"),
      (aw[P.g.kf] = "uaa"),
      (aw[P.g.lf] = "uab"),
      (aw[P.g.nf] = "uafvl"),
      (aw[P.g.pf] = "uamb"),
      (aw[P.g.qf] = "uam"),
      (aw[P.g.rf] = "uap"),
      (aw[P.g.tf] = "uapv"),
      (aw[P.g.uf] = "uaw"),
      (aw[P.g.Bg] = "ec_lat"),
      (aw[P.g.Cg] = "ec_meta"),
      (aw[P.g.Dg] = "ec_m"),
      (aw[P.g.Eg] = "ec_sel"),
      (aw[P.g.Fg] = "ec_s"),
      (aw[P.g.md] = "ec_mode"),
      (aw[P.g.Ba] = "userId"),
      (aw[P.g.de] = "us_privacy"),
      (aw[P.g.na] = "value"),
      (aw[P.g.Gg] = "mcov"),
      (aw[P.g.Zi] = "hn"),
      (aw[P.g.aj] = "gtm_ee"),
      (aw[P.g.Nb] = "npa"),
      (aw[P.g.Vc] = null),
      (aw[P.g.Kb] = null),
      (aw[P.g.Oa] = null),
      (aw[P.g.da] = null),
      (aw[P.g.wa] = null),
      (aw[P.g.Da] = null),
      (aw[P.g.hf] = null),
      aw),
    dw = function (a) {
      a.metadata.hit_type === "page_view"
        ? Ru(a)
        : cw(a, function (b, c) {
            for (
              var d = Yv(a, b), e = d.onSuccess, f = d.Ol, g = {}, k = 0;
              k < f.length;
              g = {
                Ka: void 0,
                fh: void 0,
                Ha: void 0,
                Og: void 0,
                Zg: void 0,
              },
                k++
            ) {
              var m = f[k];
              g.Ka = m.Ka;
              g.fh = m.format;
              g.Ha = m.Ha;
              g.Og = m.attributes;
              g.Zg = m.endpoint;
              var n = void 0;
              if ((n = c) != null && n.Jm) {
                var p = (function (u) {
                    return function (v) {
                      Mh(c.hm, function (w) {
                        var x = Ch(w),
                          y = u.Ka;
                        if (v) {
                          var B = no({
                            xa: a.metadata.source_canonical_id,
                            Xj: v,
                          });
                          y = y.replace(b.gtm, B);
                        }
                        Zv(
                          y + "&em=" + encodeURIComponent(x.Lj),
                          u.fh,
                          a,
                          b,
                          u.Ha ? e : void 0,
                          u.Og,
                          u.Zg
                        );
                      });
                    };
                  })(g),
                  q = c,
                  r = q.Mh,
                  t = "" + g.Ka + q.Om.join("");
                At(t, r, g.Ha && e ? e : function () {}, p);
              } else Zv(g.Ka, g.fh, a, b, g.Ha ? e : void 0, g.Og, g.Zg);
            }
          });
    },
    cw = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        k = a.metadata.event_start_timestamp_ms;
      if (c === "conversion" || c === "remarketing")
        (d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = Cq(["aw", "dc"]);
      m != null && (d.gad_source = m);
      d.gtm = no({ xa: a.metadata.source_canonical_id });
      c !== "remarketing" && $n() && (d.gcs = ao());
      d.gcd = fo(a.m);
      io() && (d.dma_cps = go());
      d.dma = ho();
      Cn(Kn()) && (d.tcfd = jo());
      Bi.j && (d.tag_exp = Bi.j);
      if (a.o[P.g.Kb]) {
        var n = a.o[P.g.Kb].split("x");
        n.length === 2 && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.o[P.g.Oa]) {
        var p = a.o[P.g.Oa];
        p.length === 2
          ? (d.hl = p)
          : p.length === 5 &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (F, M) {
          var L = a.o[M];
          L && (d[F] = q ? ij(L) : L);
        };
      r("url", P.g.wa);
      r("ref", P.g.Da);
      r("top", P.g.hf);
      z(a.o, function (F, M) {
        if (bw.hasOwnProperty(F)) {
          var L = bw[F];
          L && (d[L] = M);
        } else e[F] = M;
      });
      var t = a.o[P.g.fd];
      t != void 0 && t !== "" && (d.vdnc = String(t));
      var u = a.o[P.g.Zc];
      u !== void 0 && (d.shf = u);
      var v = a.o[P.g.wc];
      v !== void 0 && (d.delc = v);
      if (T(21) && a.metadata.add_tag_timing) {
        d.tft = Db();
        var w = Rc();
        w !== void 0 && (d.tfd = Math.round(w));
      }
      d.data = Uv(e);
      var x = a.o[P.g.da];
      x && c === "conversion" && ((d.iedeld = Kr(x)), (d.item = Tv(Rv(x))));
      if (
        (c === "conversion" ||
          c === "user_data_lead" ||
          c === "user_data_web") &&
        a.metadata.user_data
      )
        if (!X(P.g.P) || (T(15) && !X(P.g.R))) d.ec_mode = void 0;
        else {
          var y = function () {
            if (c === "user_data_web") {
              var F;
              var M = a.metadata.cookie_options;
              M = M || {};
              var L;
              if (X(es)) {
                (L = fs(M)) || (L = Po());
                var S = M,
                  V = wp(S.prefix);
                yp(S, L);
                delete tp[V];
                delete up[V];
                xp(V, S.path, S.domain);
                F = fs(M);
              } else F = void 0;
              d.ecsid = F;
            }
          };
          if (c !== "conversion" && T(76)) {
            d.gtm = no({ xa: a.metadata.source_canonical_id, Xj: 3 });
            var B = Lh(a.metadata.user_data),
              A = zh(B),
              D = A.Wm;
            f = { Jm: !0, Mh: A.Mh, Om: ["&em=" + A.Nm], hm: B };
            D > 0 && y();
          } else {
            var E = Bh(a.metadata.user_data);
            if (E) {
              var C = E.then(function (F) {
                d.em = F.Kj;
                F.Jf > 0 && y();
                T(66) && $v(c) && ((d._is_ee = 0), (d._es = 0));
                return F;
              });
              g.push(C);
            }
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (F) {}
      b(d, f);
    };
  function ew(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function fw(a, b, c) {
    c = c === void 0 ? !1 : c;
    gw().addRestriction(0, a, b, c);
  }
  function hw(a, b, c) {
    c = c === void 0 ? !1 : c;
    gw().addRestriction(1, a, b, c);
  }
  function iw() {
    var a = Pj();
    return gw().getRestrictions(1, a);
  }
  var jw = function () {
      this.j = {};
      this.D = {};
    },
    kw = function (a, b) {
      var c = a.j[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.j[b] = c));
      return c;
    };
  jw.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.D[b]) {
      var e = kw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  jw.prototype.getRestrictions = function (a, b) {
    var c = kw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        qa(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        qa(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        qa(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        qa(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  jw.prototype.getExternalRestrictions = function (a, b) {
    var c = kw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  jw.prototype.removeExternalRestrictions = function (a) {
    var b = kw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function gw() {
    var a = ji.r;
    a || ((a = new jw()), (ji.r = a));
    return a;
  }
  var lw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    mw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    nw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ow =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function pw() {
    var a = Ii("gtm.allowlist") || Ii("gtm.whitelist");
    a && O(9);
    oi && (a = ["google", "gtagfl", "lcl", "zone"]);
    lw.test(G.location && G.location.hostname) &&
      (oi
        ? O(116)
        : (O(117),
          qw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Hb(Ab(a), mw),
      c = Ii("gtm.blocklist") || Ii("gtm.blacklist");
    c || ((c = Ii("tagTypeBlacklist")) && O(3));
    c ? O(8) : (c = []);
    lw.test(G.location && G.location.hostname) &&
      ((c = Ab(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    Ab(c).indexOf("google") >= 0 && O(2);
    var d = c && Hb(Ab(c), nw),
      e = {};
    return function (f) {
      var g = f && f[Je.oa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = yi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    O(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = vb(d, k || []);
          t && O(10);
          q = t;
        }
      }
      var u = !m || q;
      u ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (u = vb(d, ow));
      return (e[g] = u);
    };
  }
  var qw = !1;
  qw = !0;
  function rw() {
    Hj &&
      fw(Pj(), function (a) {
        var b = tf(a.entityId),
          c;
        if (wf(b)) {
          var d = b[Je.oa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = lf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!ew(b[Je.oa], 4);
        return c;
      });
  }
  var tw = function (a, b, c, d, e) {
      if (!sw()) {
        var f = d.siloed ? Kj(a) : a;
        if (!Zj(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + ii.Ya,
            k = Ib(a, "GTM-");
          k || (g += "&cx=c");
          T(63) && (g += "&gtm=" + no());
          var m = nj();
          m && (g += "&sign=" + ii.yf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = mj(b, n + g);
          if (!p) {
            var q = ii.Ed + n;
            m && uc && k
              ? ((q = uc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = Or("https://", "http://", q + g)))
              : (p = Bi.D ? Ci() + n + g : Or("https://", "http://", q + g));
          }
          d.siloed && bk({ ctid: f, isDestination: !1 });
          var r = Sj();
          Ej().container[f] = { state: 1, context: d, parent: r };
          Dj({ ctid: f, isDestination: !1 }, e);
          Bc(p);
        }
      }
    },
    uw = function (a, b, c, d) {
      if (!sw()) {
        var e = c.siloed ? Kj(a) : a;
        if (!ak(e))
          if (!c.siloed && ck())
            (Ej().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Sj(),
            }),
              Dj({ ctid: e, isDestination: !0 }, d),
              O(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              ii.Ya +
              "&cx=c";
            T(63) && (f += "&gtm=" + no());
            nj() && (f += "&sign=" + ii.yf);
            var g = mj(b, f);
            g || (g = Bi.D ? Ci() + f : Or("https://", "http://", ii.Ed + f));
            c.siloed && bk({ ctid: e, isDestination: !0 });
            Ej().destination[e] = { state: 1, context: c, parent: Sj() };
            Dj({ ctid: e, isDestination: !0 }, d);
            Bc(g);
          }
      }
    };
  function sw() {
    if (lo()) {
      return !0;
    }
    return !1;
  }
  var vw = !1,
    ww = 0,
    xw = [];
  function yw(a) {
    if (!vw) {
      var b = H.createEventObject,
        c = H.readyState === "complete",
        d = H.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        vw = !0;
        for (var e = 0; e < xw.length; e++) I(xw[e]);
      }
      xw.push = function () {
        for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0;
      };
    }
  }
  function zw() {
    if (!vw && ww < 140) {
      ww++;
      try {
        var a, b;
        (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
        yw();
      } catch (c) {
        G.setTimeout(zw, 50);
      }
    }
  }
  function Aw(a) {
    vw ? a() : xw.push(a);
  }
  function Cw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Nj(),
    };
  }
  var Ew = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.O = !1;
      this.D = this.H = 0;
      Dw(this, a, b);
    },
    Fw = function (a, b, c, d) {
      if (li.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Xa(d) && (e = h(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Gw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Hw = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Dw = function (a, b, c) {
      b !== void 0 && a.ne(b);
      c &&
        G.setTimeout(function () {
          Hw(a);
        }, Number(c));
    };
  Ew.prototype.ne = function (a) {
    var b = this,
      c = Fb(function () {
        I(function () {
          a(Nj(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Iw = function (a) {
      a.H++;
      return Fb(function () {
        a.D++;
        a.O && a.D >= a.H && Hw(a);
      });
    },
    Jw = function (a) {
      a.O = !0;
      a.D >= a.H && Hw(a);
    };
  var Kw = {},
    Mw = function () {
      return G[Lw()];
    };
  function Lw() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var Pw = function () {
      var a = Nj();
    },
    Qw = function (a, b) {
      return function () {
        var c = Mw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = g.indexOf("&tid=" + b) < 0;
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Vw = ["es", "1"],
    Ww = {},
    Xw = {};
  function Yw(a, b) {
    if (wj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Ww[a] = [
        ["e", c],
        ["eid", a],
      ];
      uk(a);
    }
  }
  function Zw(a) {
    var b = a.eventId,
      c = a.Sa;
    if (!Ww[b]) return [];
    var d = [];
    Xw[b] || d.push(Vw);
    d.push.apply(d, qa(Ww[b]));
    c && (Xw[b] = !0);
    return d;
  }
  var $w = {},
    ax = {},
    bx = {};
  function cx(a, b, c, d) {
    wj &&
      T(73) &&
      ((d === void 0 ? 0 : d)
        ? ((bx[b] = bx[b] || 0), ++bx[b])
        : c !== void 0
        ? ((ax[a] = ax[a] || {}), (ax[a][b] = Math.round(c)))
        : (($w[a] = $w[a] || {}), ($w[a][b] = ($w[a][b] || 0) + 1)));
  }
  function dx(a) {
    var b = a.eventId,
      c = a.Sa,
      d = $w[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete $w[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function ex(a) {
    var b = a.eventId,
      c = a.Sa,
      d = ax[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ax[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function fx() {
    for (
      var a = [], b = na(Object.keys(bx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + bx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var gx = {},
    hx = {};
  function ix(a, b, c) {
    if (wj && b) {
      var d = qj(b);
      gx[a] = gx[a] || [];
      gx[a].push(c + d);
      var e = (wf(b) ? "1" : "2") + d;
      hx[a] = hx[a] || [];
      hx[a].push(e);
      uk(a);
    }
  }
  function jx(a) {
    var b = a.eventId,
      c = a.Sa,
      d = [],
      e = gx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = hx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete gx[b], delete hx[b]);
    return d;
  }
  function kx(a, b, c, d) {
    var e = jf[a],
      f = lx(a, b, c, d);
    if (!f) return null;
    var g = xf(e[Je.pj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = kx(
        k.index,
        {
          onSuccess: f,
          onFailure: k.Dj === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function lx(a, b, c, d) {
    function e() {
      if (f[Je.Kk]) k();
      else {
        var w = vf(f, c, []),
          x = w[Je.kk];
        if (x != null)
          for (var y = 0; y < x.length; y++)
            if (!X(x[y])) {
              k();
              return;
            }
        var B = Fw(c.ic, String(f[Je.oa]), Number(f[Je.me]), w[Je.Lk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            ix(c.id, jf[a], "5");
            Gw(c.ic, B, "success", C);
            T(64) && Kv(c, f, Tu.M.tj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            ix(c.id, jf[a], "6");
            Gw(c.ic, B, "failure", C);
            T(64) && Kv(c, f, Tu.M.sj);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ix(c.id, f, "1");
        var D = function () {
          El(3);
          var C = Db() - E;
          ix(c.id, f, "7");
          Gw(c.ic, B, "exception", C);
          T(64) && Kv(c, f, Tu.M.rj);
          A || ((A = !0), k());
        };
        T(64) && Jv(c, f);
        var E = Db();
        try {
          yf(w, { event: c, index: a, type: 1 });
        } catch (C) {
          D(C);
        }
        T(64) && Kv(c, f, Tu.M.uj);
      }
    }
    var f = jf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = xf(f[Je.vj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = kx(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.Dj === 2 ? m : q;
    }
    if (f[Je.gj] || f[Je.Nk]) {
      var r = f[Je.gj] ? kf : c.Lm,
        t = g,
        u = k;
      if (!r[a]) {
        e = Fb(e);
        var v = mx(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function mx(a, b, c) {
    var d = [],
      e = [];
    b[a] = nx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ox;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = px;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function nx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ox(a) {
    a();
  }
  function px(a, b) {
    b();
  }
  var sx = function (a, b) {
    for (var c = [], d = 0; d < jf.length; d++)
      if (a[d]) {
        var e = jf[d];
        var f = Iw(b.ic);
        try {
          var g = kx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Je.oa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = lf[k];
            c.push({
              bk: d,
              Pj: (m ? m.priorityOverride || 0 : 0) || ew(e[Je.oa], 1) || 0,
              execute: g,
            });
          } else qx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(rx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function rx(a, b) {
    var c,
      d = b.Pj,
      e = a.Pj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.bk,
        k = b.bk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function qx(a, b) {
    if (wj) {
      var c = function (d) {
        var e = b.isBlocked(jf[d]) ? "3" : "4",
          f = xf(jf[d][Je.pj], b, []);
        f && f.length && c(f[0].index);
        ix(b.id, jf[d], e);
        var g = xf(jf[d][Je.vj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var vx = !1,
    tx;
  var Bx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(64)) {
    }
    if (d === "gtm.js") {
      if (vx) return !1;
      vx = !0;
    }
    var e = !1,
      f = iw(),
      g = h(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Yw(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: xx(g, e),
        Lm: [],
        logMacroError: function () {
          O(6);
          El(0);
        },
        cachedModelValues: yx(),
        ic: new Ew(function () {
          if (T(64)) {
          }
          k && k.apply(k, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(73) && wj && (n.reportMacroDiscrepancy = cx);
    T(64) && Fv(n.id, n.name);
    var p = Gf(n);
    T(64) && Gv(n.id, n.name);
    e && (p = zx(p));
    if (T(64)) {
    }
    var q = sx(p, n),
      r = !1;
    Jw(n.ic);
    (d !== "gtm.js" && d !== "gtm.sync") || Pw();
    return Ax(p, q) || r;
  };
  function yx() {
    var a = {};
    a.event = Ni("event", 1);
    a.ecommerce = Ni("ecommerce", 1);
    a.gtm = Ni("gtm");
    a.eventModel = Ni("eventModel");
    return a;
  }
  function xx(a, b) {
    var c = pw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Je.oa];
      if (!e || typeof e != "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Pj();
      f = gw().getRestrictions(0, g);
      var k = a;
      b && ((k = h(a)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = yi[e] || [], n = na(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function zx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(jf[c][Je.oa]);
        if (ki[d] || jf[c][Je.Ok] !== void 0 || ew(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Ax(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && jf[c] && !li[String(jf[c][Je.oa])]) return !0;
    return !1;
  }
  var Cx = 0;
  function Dx() {
    Cx === 1 && tk();
  }
  var Ex = function (a) {
    if (!a.Cj || Cx !== 1) return [];
    a.mc();
    var b = xl();
    b.push(["mcc", "1"]);
    Cx = 3;
    return b;
  };
  function Fx(a, b) {
    return arguments.length === 1 ? Gx("set", a) : Gx("set", a, b);
  }
  function Hx(a, b) {
    return arguments.length === 1 ? Gx("config", a) : Gx("config", a, b);
  }
  function Ix(a, b, c) {
    c = c || {};
    c[P.g.Yb] = a;
    return Gx("event", b, c);
  }
  function Gx() {
    return arguments;
  }
  var Jx = function () {
    this.messages = [];
    this.j = [];
  };
  Jx.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Jx.prototype.listen = function (a) {
    this.j.push(a);
  };
  Jx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Jx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Kx(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
    Lx().enqueue(a, b, c);
  }
  function Mx() {
    var a = Nx;
    Lx().listen(a);
  }
  function Lx() {
    var a = ji.mb;
    a || ((a = new Jx()), (ji.mb = a));
    return a;
  }
  var Jf;
  var Ox = {},
    Px = {};
  function Qx(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Dh: void 0, kh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.Dh = um(g, b)), e.Dh)) {
          var k = Lj();
          tb(
            k,
            (function (r) {
              return function (t) {
                return r.Dh.ia === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Ox[g] || [];
        e.kh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.kh[t] = !0;
            };
          })(e)
        );
        for (var n = Ij(), p = 0; p < n.length; p++)
          if (e.kh[n[p]]) {
            c = c.concat(Lj());
            break;
          }
        var q = Px[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { bm: c, gm: d };
  }
  function Rx(a) {
    z(Ox, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Sx(a) {
    z(Px, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var Tx = "HA GF G UA AW DC MC".split(" "),
    Ux = !1,
    Vx = !1,
    Wx = !1,
    Xx = !1;
  function Yx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: zi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Zx = void 0,
    $x = void 0;
  function ay(a, b, c) {
    var d = h(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && O(136);
    var e = h(b);
    h(c, e);
    Kx(Hx(Ij()[0], e), a.eventId, d);
  }
  function by(a) {
    for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || kn.D[d];
      if (e) return e;
    }
  }
  var cy = [
      P.g.jd,
      P.g.Lb,
      P.g.yc,
      P.g.lb,
      P.g.tb,
      P.g.Ba,
      P.g.sa,
      P.g.Na,
      P.g.Va,
      P.g.Eb,
    ],
    dy = {
      config: function (a, b) {
        var c = Yx(a, b);
        if (!(a.length < 2) && l(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] != void 0 && !Xa(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = um(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!Gj.fe) {
                var m = Rj(Sj());
                if (ek(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { om: Rj(n), am: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.om), (g = q.am));
            Yw(c.eventId, "gtag.config");
            var r = e.ia,
              t = e.id !== r;
            if (t ? Lj().indexOf(r) === -1 : Ij().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Hb]) {
                var u = by(d);
                if (t)
                  uw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var v = d;
                  Zx ? ay(b, v, Zx) : $x || ($x = h(v));
                } else
                  tw(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                $x
                  ? (ay(b, $x, x), (w = !1))
                  : ((!x[P.g.Zb] && ni && Zx) || (Zx = h(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Wx && ((Wx = !0), Vx))
                for (var B = na(cy), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    Cl("erc");
                    break;
                  }
              xj &&
                !Hj &&
                (Cx === 1 && (T(44) ? (Bk.mcc = !1) : Gc(G, "pagehide", Dx)),
                (Cx = 2));
              if (ni && !t && !d[P.g.Zb]) {
                var D = Xx;
                Xx = !0;
                if (D) return;
              }
              Ux || O(43);
              if (!b.noTargetGroup)
                if (t) {
                  Sx(e.id);
                  var E = e.id,
                    C = d[P.g.Wd] || "default";
                  C = String(C).split(",");
                  for (var F = 0; F < C.length; F++) {
                    var M = Px[C[F]] || [];
                    Px[C[F]] = M;
                    M.indexOf(E) < 0 && M.push(E);
                  }
                } else {
                  Rx(e.id);
                  var L = e.id,
                    S = d[P.g.Wd] || "default";
                  S = S.toString().split(",");
                  for (var V = 0; V < S.length; V++) {
                    var ba = Ox[S[V]] || [];
                    Ox[S[V]] = ba;
                    ba.indexOf(L) < 0 && ba.push(L);
                  }
                }
              delete d[P.g.Wd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete d[P.g.bd];
              for (var Q = t ? [e.id] : Lj(), oa = 0; oa < Q.length; oa++) {
                var ma = d,
                  ia = Q[oa],
                  za = h(b),
                  Ma = um(ia, za.isGtmEvent);
                Ma && kn.push("config", [ma], Ma, za);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          O(39);
          var c = Yx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[P.g.P] && O(139), e[P.g.ya] && O(140));
          d === "default"
            ? jm(e)
            : d === "update"
            ? km(e, c)
            : d === "declare" && b.fromContainerExecution && im(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && l(c)) {
          var d;
          if (a.length > 2) {
            if ((!Xa(a[2]) && a[2] != void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = h(e)),
            e[P.g.bd] && (g.eventCallback = e[P.g.bd]),
            e[P.g.Td] && (g.eventTimeout = e[P.g.Td]));
          var k = Yx(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Yb];
          r === void 0 &&
            ((r = Ii(P.g.Yb, 2)), r === void 0 && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Qx(t, b.isGtmEvent),
              v = u.bm,
              w = u.gm;
            if (w.length)
              for (var x = by(q), y = 0; y < w.length; y++) {
                var B = um(w[y], b.isGtmEvent);
                B &&
                  uw(B.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = vm(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var D;
            !A.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (Vx = !0);
            Yw(m, c);
            for (var E = [], C = 0; C < A.length; C++) {
              var F = A[C],
                M = h(b);
              if (Tx.indexOf(Uj(F.prefix)) !== -1) {
                var L = h(d),
                  S = M.eventMetadata || {};
                S.hasOwnProperty("is_external_event") ||
                  (S.is_external_event = !M.fromContainerExecution);
                M.eventMetadata = S;
                delete L[P.g.bd];
                ln(c, L, F.id, M);
                xj &&
                  !Hj &&
                  Cx === 0 &&
                  (T(44) ? Dk("mcc", "1") : Fc(G, "pagehide", Dx), (Cx = 1));
              }
              E.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            A.length > 0
              ? (g.eventModel[P.g.Yb] = E.join())
              : delete g.eventModel[P.g.Yb];
            Ux || O(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.Wb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (a.length === 4 && l(a[1]) && l(a[2]) && qb(a[3])) {
          var c = um(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ux || O(43);
            var f = by();
            if (
              !tb(Lj(), function (k) {
                return c.ia === k;
              })
            )
              uw(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (Tx.indexOf(Uj(c.prefix)) !== -1) {
              Yx(a, b);
              var g = {};
              h(((g[P.g.qb] = d), (g[P.g.Fb] = e), g));
              mn(
                d,
                function (k) {
                  I(function () {
                    return e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length == 2 && a[1].getTime) {
          Ux = !0;
          var c = Yx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && l(a[1]) && qb(a[2])) {
          if ((Kf(a[1], a[2]), O(74), a[1] === "all")) {
            O(75);
            var b = !1;
            try {
              b = a[2](Nj(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else O(73);
      },
      set: function (a, b) {
        var c;
        a.length == 2 && Xa(a[1])
          ? (c = h(a[1]))
          : a.length == 3 &&
            l(a[1]) &&
            ((c = {}),
            Xa(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = h(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Yx(a, b),
            e = d.eventId,
            f = d.priorityId;
          h(c);
          var g = h(c);
          kn.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ey = { policy: !0 };
  var gy = function (a) {
    if (fy(a)) return a;
    this.value = a;
  };
  gy.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var fy = function (a) {
    return !a || Va(a) !== "object" || Xa(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  gy.prototype.getUntrustedMessageValue = gy.prototype.getUntrustedMessageValue;
  var hy = !1,
    iy = [];
  function jy() {
    if (!hy) {
      hy = !0;
      for (var a = 0; a < iy.length; a++) I(iy[a]);
    }
  }
  function ky(a) {
    hy ? I(a) : iy.push(a);
  }
  var ly = 0,
    my = {},
    ny = [],
    oy = [],
    py = !1,
    qy = !1;
  function ry(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var sy = function (a) {
      return G[ii.Ya].push(a);
    },
    ty = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return sy(a);
    },
    uy = function (a, b) {
      if (!rb(b) || b < 0) b = 0;
      var c = ji[ii.Ya],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function vy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      e !== "_clear" && (c && Li(e), Li(e, f));
    });
    vi || (vi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = zi()), (a["gtm.uniqueEventId"] = d), Li("gtm.uniqueEventId", d));
    return Bx(a);
  }
  function wy(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (xb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function xy() {
    var a;
    if (oy.length) a = oy.shift();
    else if (ny.length) a = ny.shift();
    else return;
    var b;
    var c = a;
    if (py || !wy(c.message)) b = c;
    else {
      py = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = zi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      ny.unshift(k, c);
      if (xj) {
        var m = Nf.ctid;
        if (m) {
          var n,
            p = Rj(Sj());
          n = p && p.context;
          var q = rl(!0),
            r = Nf.canonicalContainerId,
            t = wl(),
            u = n && n.fromContainerExecution,
            v = Gj.fe,
            w = n && n.source;
          sl || (sl = t);
          ul.push(
            m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0)
          );
          tl = q;
          Hk();
        }
      }
      b = f;
    }
    return b;
  }
  function yy() {
    for (var a = !1, b; !qy && (b = xy()); ) {
      qy = !0;
      delete Fi.eventModel;
      Hi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) qy = !1;
      else {
        e.fromContainerExecution && Mi();
        try {
          if (qb(d))
            try {
              d.call(Ji);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Ii(g.join("."), 2);
              if (n != null)
                try {
                  n[k].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (xb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = dy[d[0]];
                  if (q && (!e.fromContainerExecution || !ey[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = vy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Hi(!0);
          var r = d["gtm.uniqueEventId"];
          if (typeof r === "number") {
            for (var t = my[String(r)] || [], u = 0; u < t.length; u++)
              oy.push(zy(t[u]));
            t.length && oy.sort(ry);
            delete my[String(r)];
            r > ly && (ly = r);
          }
          qy = !1;
        }
      }
    }
    return !a;
  }
  function Ay() {
    if (T(64)) {
      var a = By();
    }
    var b = yy();
    if (T(64)) {
    }
    try {
      var c = Nj(),
        d = G[ii.Ya].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Nx(a) {
    if (ly < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      my[b] = my[b] || [];
      my[b].push(a);
    } else
      oy.push(zy(a)),
        oy.sort(ry),
        I(function () {
          qy || yy();
        });
  }
  function zy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Cy = function () {
      function a(f) {
        var g = {};
        if (fy(f)) {
          var k = f;
          f = fy(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = vc(ii.Ya, []),
        c = (ji[ii.Ya] = ji[ii.Ya] || {});
      c.pruned === !0 && O(83);
      my = Lx().get();
      Mx();
      Aw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ky(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (ji.SANDBOXED_JS_SEMAPHORE > 0) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new gy(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        ny.push.apply(ny, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = typeof m !== "boolean" || m;
        return yy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      ny.push.apply(ny, e);
      if (By()) {
        if (T(64)) {
        }
        I(Ay);
      }
    },
    By = function () {
      var a = !0;
      return a;
    };
  function Dy(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = Db();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ey(a) {
    return a && a.indexOf("pending:") === 0 ? Dy(a.substr(8)) : !1;
  }
  var Fy = !1,
    Gy = function (a) {
      if (Fy) return [];
      var b = [
        ["bt", String(Bi.H ? 2 : qi ? 1 : 0)],
        ["ct", String(Bi.H ? 0 : qi ? 1 : lo() ? 2 : 3)],
      ];
      a.Sa && ((Fy = !0), a.mc());
      return b;
    };
  var Hy = !1;
  function Iy() {
    var a = Qj();
    if (a) {
      var b;
      return (
        a.canonicalContainerId ||
        "_" +
          (a.scriptContainerId ||
            ((b = a.destinations) == null ? void 0 : b[0]))
      );
    }
  }
  var Jy = function (a) {
    if (Hy) return [];
    var b = [],
      c = Iy();
    c && b.push(["pcid", c]);
    a.Sa && ((Hy = !0), b.length && a.mc());
    return b;
  };
  function Ky(a) {
    if (a.scriptSource) {
      var b;
      try {
        var c;
        b = (c = Sc()) == null ? void 0 : c.getEntriesByType("resource");
      } catch (k) {}
      if (b) {
        for (var d = {}, e = 0; e < b.length; ++e) {
          var f = b[e],
            g = f.initiatorType;
          if (g === "script" && f.name === a.scriptSource)
            return { Uj: e, Vj: d };
          d[g] = 1 + (d[g] || 0);
        }
        O(146);
      } else O(145);
    }
  }
  function Ly() {
    var a = Tj();
    if (!a) O(144);
    else if (a.canonicalContainerId) {
      var b = Ky(a);
      if (b)
        if (T(44))
          Dk("rtg", String(a.canonicalContainerId)),
            Dk("rlo", String(b.Uj)),
            Dk("slo", String(b.Vj.script || "0")),
            T(68) &&
              (Dk("hlo", a.htmlLoadOrder || Bj(a)),
              Dk("lst", String(a.loadScriptType || Cj(a))));
        else {
          var c = !1;
          hk.push(function (d) {
            if (c) return [];
            d.Sa && (c = !0);
            d.mc();
            var e = [
              ["rtg", String(a.canonicalContainerId)],
              ["rlo", String(b.Uj)],
              ["slo", String(b.Vj.script || "0")],
            ];
            T(68) &&
              (e.push(["hlo", a.htmlLoadOrder || Bj(a)]),
              e.push(["lst", String(a.loadScriptType || Cj(a))]));
            return e;
          });
        }
    }
  }
  var fz = function () {};
  var gz = function () {};
  gz.prototype.toString = function () {
    return "undefined";
  };
  var hz = new gz();
  var jz = function () {
      (ji.rm = ji.rm || {})[Pj()] = function (a) {
        if (iz.hasOwnProperty(a)) return iz[a];
      };
    },
    mz = function (a, b, c) {
      if (a instanceof kz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(zi());
        lz[g] = [f, c];
        a = e.call(d, g);
        b = pb;
      }
      return { Fj: a, onSuccess: b };
    },
    nz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        O(a ? 134 : 135);
        var d = lz[c];
        if (d && typeof d[b] === "function") d[b]();
        lz[c] = void 0;
      };
    },
    kz = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === hz ? b : a[d]);
        return c.join("");
      };
    };
  kz.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var iz = {},
    lz = {};
  function oz(a, b) {
    function c(g) {
      var k = U(g),
        m = cj(k, "protocol"),
        n = cj(k, "host", !0),
        p = cj(k, "port"),
        q = cj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function pz(a) {
    return qz(a) ? 1 : 0;
  }
  function qz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = h(a, {});
        h({ arg1: c[d], any_of: void 0 }, e);
        if (pz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return pg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < lg.length; g++) {
                var k = lg[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return mg(b, c);
      case "_eq":
        return qg(b, c);
      case "_ge":
        return rg(b, c);
      case "_gt":
        return tg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return sg(b, c);
      case "_lt":
        return ug(b, c);
      case "_re":
        return og(b, c, a.ignore_case);
      case "_sw":
        return vg(b, c);
      case "_um":
        return oz(b, c);
    }
    return !1;
  }
  function rz() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function sz() {
    var a = [
      ["cv", T(81) ? rz() : "70"],
      ["rv", ii.Kg],
      [
        "tc",
        jf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    ii.ie && a.push(["x", ii.ie]);
    Bi.j && a.push(["tag_exp", Bi.j]);
    return a;
  }
  function tz() {
    var a = Gl();
    return a.length ? [["exp_geo", a]] : [];
  }
  var uz;
  function vz() {
    try {
      uz != null || (uz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return ((a = uz) == null ? 0 : a.length) ? [["exp_tz", uz]] : [];
  }
  function wz() {
    return !1;
  }
  function xz() {
    var a = {};
    return function (b, c, d) {};
  }
  function yz() {
    var a = zz;
    return function (b, c, d) {
      var e = d && d.event;
      Az(c);
      var f = Ib(b, "__cvt_") ? void 0 : 1,
        g = new cb();
      z(c, function (r, t) {
        var u = gd(t, void 0, f);
        u === void 0 && t !== void 0 && O(44);
        g.set(r, u);
      });
      a.j.j.D = Df();
      var k = {
        zj: Rf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        ne:
          e !== void 0
            ? function (r) {
                e.ic.ne(r);
              }
            : void 0,
        wb: function () {
          return b;
        },
        log: function () {},
        tl: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        Cm: !!ew(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (wz()) {
        var m = xz(),
          n,
          p;
        k.Ra = {
          Nh: [],
          oe: {},
          xb: function (r, t, u) {
            t === 1 && (n = r);
            t === 7 && (p = u);
            m(r, t, u);
          },
          If: dh(),
        };
        k.log = function (r) {
          var t = Aa.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = De(a, k, [b, g]);
      a.j.j.D = void 0;
      q instanceof Ha && q.type === "return" && (q = q.data);
      return J(q, void 0, f);
    };
  }
  function Az(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    qb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    qb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function Bz(a, b) {
    var c = this;
  }
  Bz.T = "addConsentListener";
  var Cz = !1;
  function Dz(a) {
    for (var b = 0; b < a.length; ++b)
      if (Cz)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  }
  function Ez(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Ez.J = "internal.addDataLayerEventListener";
  function Fz(a, b, c) {}
  Fz.T = "addDocumentEventListener";
  function Gz(a, b, c, d) {}
  Gz.T = "addElementEventListener";
  function Hz(a) {
    return a.F.j;
  }
  function Iz(a) {}
  Iz.T = "addEventCallback";
  var Jz = function (a) {
      return typeof a === "string" ? a : String(zi());
    },
    Mz = function (a, b) {
      Kz(a, "init", !1) || (Lz(a, "init", !0), b());
    },
    Kz = function (a, b, c) {
      var d = Nz(a);
      return Eb(d, b, c);
    },
    Oz = function (a, b, c, d) {
      var e = Nz(a),
        f = Eb(e, b, d);
      e[b] = c(f);
    },
    Lz = function (a, b, c) {
      Nz(a)[b] = c;
    },
    Nz = function (a) {
      ji.hasOwnProperty("autoEventsSettings") || (ji.autoEventsSettings = {});
      var b = ji.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Pz = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Qc(a, "className"),
        "gtm.elementId": a["for"] || Hc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Qc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Qc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  var Rz = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Qz(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    },
    Sz = function (a) {
      if (a.form) {
        var b;
        return ((b = a.form) == null ? 0 : b.tagName)
          ? a.form
          : H.getElementById(a.form);
      }
      return Kc(a, ["form"], 100);
    },
    Qz = function (a) {
      var b = a.tagName.toLowerCase();
      return Tz.indexOf(b) < 0 ||
        (b === "input" && Uz.indexOf(a.type.toLowerCase()) >= 0)
        ? !1
        : !0;
    },
    Tz = ["input", "select", "textarea"],
    Uz = ["button", "hidden", "image", "reset", "submit"];
  function Yz(a) {}
  Yz.J = "internal.addFormAbandonmentListener";
  function Zz(a, b, c, d) {}
  Zz.J = "internal.addFormData";
  var $z = {},
    aA = [],
    bA = {},
    cA = 0,
    dA = 0;
  function kA(a, b) {}
  kA.J = "internal.addFormInteractionListener";
  function rA(a, b) {}
  rA.J = "internal.addFormSubmitListener";
  function wA(a) {}
  wA.J = "internal.addGaSendListener";
  function xA(a) {
    if (!a) return {};
    var b = a.tl;
    return Cw(b.type, b.index, b.name);
  }
  function yA(a) {
    return a ? { originatingEntity: xA(a) } : {};
  }
  var AA = function (a, b, c) {
      zA().updateZone(a, b, c);
    },
    CA = function (a, b, c, d, e, f) {
      var g = zA();
      c = c && Hb(c, BA);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Nj(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (Ib(p, "GTM-"))
            tw(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = Gx("js", Cb());
            tw(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(87) || Kx(v, q, w);
            Kx(Hx(p, r), q, w);
          }
        }
      }
      return k;
    },
    zA = function () {
      var a = ji.zones;
      a || (a = ji.zones = new DA());
      return a;
    },
    EA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    BA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    DA = function () {
      this.j = {};
      this.D = {};
      this.H = 0;
    };
  ca = DA.prototype;
  ca.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Ch], b)) return !1;
    for (var e = 0; e < c.Pe.length; e++) if (this.D[c.Pe[e]].sd(b)) return !0;
    return !1;
  };
  ca.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Pe.length; f++) {
      var g = this.D[c.Pe[f]];
      g.sd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.Ch], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].Rl(m, n)) return !0;
      return !1;
    };
  };
  ca.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  ca.createZone = function (a, b) {
    var c = String(++this.H);
    this.D[c] = new FA(a, b);
    return c;
  };
  ca.updateZone = function (a, b, c) {
    var d = this.D[a];
    d && d.H(b, c);
  };
  ca.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && ji[a]) || (!d && Zj(a)) || (d && d.Ch !== b)) return !1;
    if (d) return d.Pe.push(c), !1;
    this.j[a] = { Ch: b, Pe: [c] };
    return !0;
  };
  var FA = function (a, b) {
    this.D = null;
    this.j = [{ eventId: a, sd: !0 }];
    if (b) {
      this.D = {};
      for (var c = 0; c < b.length; c++) this.D[b[c]] = !0;
    }
  };
  FA.prototype.H = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.sd !== b && this.j.push({ eventId: a, sd: b }));
  };
  FA.prototype.sd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].sd;
    return !1;
  };
  FA.prototype.Rl = function (a, b) {
    b = b || [];
    if (!this.D || EA[a] || this.D[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.D[b[c]]) return !0;
    return !1;
  };
  function GA(a) {
    var b = ji.zones;
    return b
      ? b.getIsAllowedFn(Ij(), a)
      : function () {
          return !0;
        };
  }
  function HA() {
    hw(Pj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = ji.zones;
      return c ? c.isActive(Ij(), b) : !0;
    });
    fw(Pj(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return GA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var IA = function (a, b) {
    this.tagId = a;
    this.qe = b;
  };
  function JA(a, b) {
    var c = this,
      d;
    var e = function (u) {
      fw(
        u,
        function (v) {
          for (
            var w = gw().getExternalRestrictions(0, Pj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      hw(
        u,
        function (v) {
          for (
            var w = gw().getExternalRestrictions(1, Pj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new IA(a, u));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = J(b, this.F, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    Dz([
      function () {
        return N(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (ak(a)) return;
    } else if (Zj(a)) return;
    var q = 6,
      r = Hz(this);
    n && (q = 7);
    r.wb() === "__zone" && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    m ? uw(a, g, t, e) : tw(a, g, !Ib(a, "GTM-"), t, e);
    k &&
      r.wb() === "__zone" &&
      CA(Number.MIN_SAFE_INTEGER, [a], null, {}, xA(Hz(this)));
    d = p ? Kj(a) : a;
    return d;
  }
  JA.J = "internal.loadGoogleTag";
  function KA(a) {
    return new Zc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Zc)
        return new Zc("", function () {
          var d = Aa.apply(0, arguments),
            e = this,
            f = h(Hz(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Na(this.F);
          k.j = f;
          return c.fb.apply(c, [k].concat(qa(g)));
        });
    });
  }
  function LA(a, b, c) {
    var d = this;
  }
  LA.J = "internal.addGoogleTagRestriction";
  var MA = {},
    NA = [];
  function UA(a, b) {}
  UA.J = "internal.addHistoryChangeListener";
  function VA(a, b, c) {}
  VA.T = "addWindowEventListener";
  function WA(a, b) {
    K(this.getName(), ["toPath:!string", "fromPath:!string"], arguments);
    N(this, "access_globals", "write", a);
    N(this, "access_globals", "read", b);
    var c = a.split("."),
      d = b.split("."),
      e = [G, H],
      f = Kb(c, e),
      g = Kb(d, e);
    if (f === void 0 || g === void 0) return !1;
    f[c[c.length - 1]] = g[d[d.length - 1]];
    return !0;
  }
  WA.T = "aliasInWindow";
  function XA(a, b, c) {}
  XA.J = "internal.appendRemoteConfigParameter";
  function YA(a) {
    var b;
    K(this.getName(), ["path:!string"], [a]);
    N(this, "access_globals", "execute", a);
    for (
      var c = a.split("."), d = G, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      if (((d = e), (e = e[c[f]]), d === G || d === H)) return;
    if (Va(e) !== "function") return;
    for (var g = [], k = 1; k < arguments.length; k++)
      g.push(J(arguments[k], this.F, 2));
    var m = (0, this.F.K)(e, d, g);
    b = gd(m, this.F, 2);
    b === void 0 && m !== void 0 && O(45);
    return b;
  }
  YA.T = "callInWindow";
  function ZA(a) {}
  ZA.T = "callLater";
  function $A(a) {}
  $A.J = "callOnDomReady";
  function aB(a) {}
  aB.J = "callOnWindowLoad";
  function bB(a, b) {
    var c;
    return c;
  }
  bB.J = "internal.computeGtmParameter";
  function cB(a) {
    var b;
    return b;
  }
  cB.J = "internal.copyFromCrossContainerData";
  function dB(a, b) {
    var c;
    K(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments),
      N(this, "read_data_layer", a),
      (c = (b || 2) !== 2 ? Ii(a, 1) : Ki(a, [G, H]));
    var d = gd(c, this.F, Ib(Hz(this).wb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && O(45);
    return d;
  }
  dB.T = "copyFromDataLayer";
  function eB(a) {
    var b = void 0;
    return b;
  }
  eB.J = "internal.copyFromDataLayerCache";
  function fB(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "read", a);
    var c = a.split("."),
      d = Kb(c, [G, H]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = gd(e, this.F, 2);
    b === void 0 && e !== void 0 && O(45);
    return b;
  }
  fB.T = "copyFromWindow";
  function gB(a) {
    var b = void 0;
    return gd(b, this.F, 1);
  }
  gB.J = "internal.copyKeyFromWindow";
  function hB(a, b) {
    var c;
    return c;
  }
  hB.J = "internal.copyPreHit";
  function iB(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var d = [G, H],
      e = a.split("."),
      f = Kb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !qb(k)) return null;
    if (k) return gd(k, this.F, 2);
    var m;
    k = function () {
      if (!qb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = Kb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return gd(c, this.F, 2);
  }
  iB.T = "createArgumentsQueue";
  function jB(a) {
    return gd(
      function (c) {
        var d = Mw();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Mw(),
                n = m && m.getByName && m.getByName(f);
              return Mk(G.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.F,
      1
    );
  }
  jB.J = "internal.createGaCommandQueue";
  function kB(a) {
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = Kb(b, [G, H]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return gd(
      function () {
        if (!qb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.F,
      Ib(Hz(this).wb(), "__cvt_") ? 2 : 1
    );
  }
  kB.T = "createQueue";
  function lB(a, b) {
    var c = null;
    return c;
  }
  lB.J = "internal.createRegex";
  function mB() {
    var a = {};
    return a;
  }
  function nB(a) {}
  nB.J = "internal.declareConsentState";
  function oB(a) {
    var b = "";
    return b;
  }
  oB.J = "internal.decodeUrlHtmlEntities";
  function pB(a, b, c) {
    var d;
    return d;
  }
  pB.J = "internal.decorateUrlWithGaCookies";
  function qB(a) {
    var b;
    return b;
  }
  qB.J = "internal.detectUserProvidedData";
  var sB = function (a) {
      var b = Kc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if (c === "button") return b;
      if (c === "input") {
        var d = Hc(b, "type");
        if (
          d === "button" ||
          d === "submit" ||
          d === "image" ||
          d === "file" ||
          d === "reset"
        )
          return b;
      }
      return null;
    },
    tB = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = Kz(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = Pz(d, b, e);
          sy(f);
        }
        var g = !1,
          k = Kz(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = sB(d);
          if (m) {
            var n = Pz(m, b, k);
            sy(n);
            g = !0;
          }
        }
        var p = Kz(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (v) {
                  return k.indexOf(v) === -1;
                })
              : p[q];
            if (r.length !== 0) {
              var t = qh(d, q);
              if (t) {
                var u = Pz(t, b, r);
                sy(u);
              }
            }
          }
      }
    };
  function uB(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? J(a) : {},
      d = zb(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = Jz(b);
    N(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      k = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && Oz(g, "commonButtonIds", k, []), e)) {
        var m = Bb(String(c.cssSelector));
        Oz(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            k(n[m]);
            return n;
          },
          {}
        );
      }
    } else Oz(g, "individualElementIds", k, []);
    Mz(g, function () {
      Fc(
        H,
        "click",
        function (n) {
          return tB(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  uB.J = "internal.enableAutoEventOnClick";
  function CB(a, b) {
    return b;
  }
  CB.J = "internal.enableAutoEventOnElementVisibility";
  function DB() {}
  DB.J = "internal.enableAutoEventOnError";
  var EB = {},
    FB = [],
    GB = {},
    HB = 0,
    IB = 0;
  function OB(a, b) {
    var c = this;
    return b;
  }
  OB.J = "internal.enableAutoEventOnFormInteraction";
  var PB = function (a, b, c, d, e) {
      var f = Kz("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? Kz("fsl", "nv.ids", []) : Kz("fsl", "ids", []);
      if (!g.length) return !0;
      var k = Pz(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      O(121);
      if (m === "https://www.facebook.com/tr/") return O(122), !0;
      k["gtm.elementUrl"] = m;
      k["gtm.formCanceled"] = c;
      a.getAttribute("name") != null &&
        (k["gtm.interactedFormName"] = a.getAttribute("name"));
      e &&
        ((k["gtm.formSubmitElement"] = e),
        (k["gtm.formSubmitElementText"] = e.value));
      if (d && f) {
        if (!ty(k, uy(b, f), f)) return !1;
      } else ty(k, function () {}, f || 2e3);
      return !0;
    },
    QB = function () {
      var a = [],
        b = function (c) {
          return tb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          if (d) return d.button;
        },
      };
    },
    RB = function (a) {
      var b = a.target;
      return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0;
    },
    SB = function () {
      var a = QB(),
        b = HTMLFormElement.prototype.submit;
      Fc(
        H,
        "click",
        function (c) {
          var d = c.target;
          if (
            d &&
            (d = Kc(d, ["button", "input"], 100)) &&
            (d.type == "submit" || d.type == "image") &&
            d.name &&
            Hc(d, "value")
          ) {
            var e = Sz(d);
            e && a.store(e, d);
          }
        },
        !1
      );
      Fc(
        H,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = RB(d) && !e,
            g = a.get(d),
            k = !0;
          if (
            PB(
              d,
              function () {
                if (k) {
                  var m,
                    n = {};
                  g &&
                    ((m = H.createElement("input")),
                    (m.type = "hidden"),
                    (m.name = g.name),
                    (m.value = g.value),
                    d.appendChild(m),
                    g.hasAttribute("formaction") &&
                      ((n.action = d.getAttribute("action")),
                      pc(d, gc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") &&
                      ((n.enctype = d.getAttribute("enctype")),
                      d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") &&
                      ((n.method = d.getAttribute("method")),
                      d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") &&
                      ((n.validate = d.getAttribute("validate")),
                      d.setAttribute(
                        "validate",
                        g.getAttribute("formvalidate")
                      )),
                    g.hasAttribute("formtarget") &&
                      ((n.target = d.getAttribute("target")),
                      d.setAttribute("target", g.getAttribute("formtarget"))));
                  b.call(d);
                  m &&
                    (d.removeChild(m),
                    n.hasOwnProperty("action") && pc(d, n.action),
                    n.hasOwnProperty("enctype") &&
                      d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") &&
                      d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") &&
                      d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") &&
                      d.setAttribute("target", n.target));
                }
              },
              e,
              f,
              g
            )
          )
            k = !1;
          else
            return (
              e ||
                (c.preventDefault && c.preventDefault(), (c.returnValue = !1)),
              !1
            );
          return c.returnValue;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        PB(
          c,
          function () {
            d && b.call(c);
          },
          !1,
          RB(c)
        ) && (b.call(c), (d = !1));
      };
    };
  function TB(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    Dz([
      function () {
        return N(c, "detect_form_submit_events", { waitForTags: !!d });
      },
    ]);
    var e = a && a.get("checkValidation");
    b = Jz(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      (f > 0 && isFinite(f)) || (f = 2e3);
      var g = function (m) {
        return Math.max(f, m);
      };
      Oz("fsl", "mwt", g, 0);
      e || Oz("fsl", "nv.mwt", g, 0);
    }
    var k = function (m) {
      m.push(b);
      return m;
    };
    Oz("fsl", "ids", k, []);
    e || Oz("fsl", "nv.ids", k, []);
    Kz("fsl", "init", !1) || (SB(), Lz("fsl", "init", !0));
    return b;
  }
  TB.J = "internal.enableAutoEventOnFormSubmit";
  function YB() {
    var a = this;
  }
  YB.J = "internal.enableAutoEventOnGaSend";
  var ZB = {},
    $B = [];
  var bC = function (a, b) {
      var c = "" + b;
      if (ZB[c]) ZB[c].push(a);
      else {
        var d = [a];
        ZB[c] = d;
        var e = aC("gtm.historyChange-v2"),
          f = -1;
        $B.push(function (g) {
          f >= 0 && G.clearTimeout(f);
          b
            ? (f = G.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    aC = function (a) {
      var b = G.location.href,
        c = {
          source: null,
          state: G.history.state || null,
          url: fj(U(b)),
          Ga: cj(U(b), "fragment"),
        };
      return function (d, e) {
        var f = c,
          g = {};
        g[f.source] = !0;
        g[d.source] = !0;
        if (!g.popstate || !g.hashchange || f.Ga != d.Ga) {
          var k = {
            event: a,
            "gtm.historyChangeSource": d.source,
            "gtm.oldUrlFragment": c.Ga,
            "gtm.newUrlFragment": d.Ga,
            "gtm.oldHistoryState": c.state,
            "gtm.newHistoryState": d.state,
            "gtm.oldUrl": c.url,
            "gtm.newUrl": d.url,
          };
          e && (k["gtm.triggers"] = e.join(","));
          c = d;
          sy(k);
        }
      };
    },
    cC = function (a, b) {
      var c = G.history,
        d = c[a];
      if (qb(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var k = G.location.href;
            b({ source: a, state: e, url: fj(U(k)), Ga: cj(U(k), "fragment") });
          };
        } catch (e) {}
    },
    eC = function (a) {
      G.addEventListener("popstate", function (b) {
        var c = dC(b);
        a({
          source: "popstate",
          state: b.state,
          url: fj(U(c)),
          Ga: cj(U(c), "fragment"),
        });
      });
    },
    fC = function (a) {
      G.addEventListener("hashchange", function (b) {
        var c = dC(b);
        a({
          source: "hashchange",
          state: null,
          url: fj(U(c)),
          Ga: cj(U(c), "fragment"),
        });
      });
    },
    dC = function (a) {
      var b, c;
      return (
        ((b = a.target) == null
          ? void 0
          : (c = b.location) == null
          ? void 0
          : c.href) || G.location.href
      );
    };
  function gC(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    Dz([
      function () {
        return N(c, "detect_history_change_events");
      },
    ]);
    var d = a && a.get("useV2EventName") ? "ehl" : "hl",
      e = Number(a && a.get("interval"));
    (e > 0 && isFinite(e)) || (e = 0);
    if (!Kz(d, "init", !1)) {
      var f;
      d === "ehl"
        ? ((f = function (k) {
            for (var m = 0; m < $B.length; m++) $B[m](k);
          }),
          (b = Jz(b)),
          bC(b, e),
          Lz(d, "reg", bC))
        : (f = aC("gtm.historyChange"));
      fC(f);
      eC(f);
      cC("pushState", f);
      cC("replaceState", f);
      Lz(d, "init", !0);
    } else if (d === "ehl") {
      var g = Kz(d, "reg");
      g && ((b = Jz(b)), g(b, e));
    }
    d === "hl" && (b = void 0);
    return b;
  }
  gC.J = "internal.enableAutoEventOnHistoryChange";
  var hC = ["http://", "https://", "javascript:", "file://"];
  var iC = function (a, b) {
      if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Qc(b, "href");
      if (
        c.indexOf(":") !== -1 &&
        !hC.some(function (k) {
          return Ib(c, k);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = Qc(b, "target");
      if ((e && e !== "_self" && e !== "_parent" && e !== "_top") || d === 0)
        return !1;
      if (d > 0) {
        var f = fj(U(c)),
          g = fj(U(G.location.href));
        return f !== g;
      }
      return !0;
    },
    jC = function (a, b) {
      for (
        var c = cj(
            U(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Qc(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    kC = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            c.which !== 3 &&
            !(c.Ul || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Kc(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || c.returnValue === !1,
              f = Kz("lcl", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? Kz("lcl", "nv.ids", []) : Kz("lcl", "ids", []);
            for (var k = [], m = 0; m < g.length; m++) {
              var n = g[m],
                p = Kz("lcl", "aff.map", {})[n];
              (p && !jC(p, d)) || k.push(n);
            }
            if (k.length) {
              var q = iC(c, d),
                r = Pz(d, "gtm.linkClick", k);
              r["gtm.elementText"] = Ic(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var t = !!tb(
                    String(Qc(d, "rel") || "").split(" "),
                    function (x) {
                      return x.toLowerCase() === "noreferrer";
                    }
                  ),
                  u = G[(Qc(d, "target") || "_self").substring(1)],
                  v = !0,
                  w = uy(function () {
                    var x;
                    if ((x = v && u)) {
                      var y;
                      a: if (t) {
                        var B;
                        try {
                          B = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (A) {
                          if (!H.createEvent) {
                            y = !1;
                            break a;
                          }
                          B = H.createEvent("MouseEvents");
                          B.initEvent(c.type, !0, !0);
                        }
                        B.Ul = !0;
                        c.target.dispatchEvent(B);
                        y = !0;
                      } else y = !1;
                      x = !y;
                    }
                    x && (u.location.href = Qc(d, "href"));
                  }, f);
                if (ty(r, w, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else ty(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Fc(H, "click", b, !1);
      Fc(H, "auxclick", b, !1);
    };
  function lC(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = J(a);
    Dz([
      function () {
        return N(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Jz(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      (k > 0 && isFinite(k)) || (k = 2e3);
      var m = function (p) {
        return Math.max(k, p);
      };
      Oz("lcl", "mwt", m, 0);
      f || Oz("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Oz("lcl", "ids", n, []);
    f || Oz("lcl", "nv.ids", n, []);
    g &&
      Oz(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    Kz("lcl", "init", !1) || (kC(), Lz("lcl", "init", !0));
    return b;
  }
  lC.J = "internal.enableAutoEventOnLinkClick";
  var mC, nC;
  function yC(a, b) {
    var c = this;
    return b;
  }
  yC.J = "internal.enableAutoEventOnScroll";
  function zC(a) {
    return function () {
      if (a.wh && a.yh >= a.wh) a.Gf && G.clearInterval(a.Gf);
      else {
        a.yh++;
        var b = Db();
        sy({
          event: a.eventName,
          "gtm.timerId": a.Gf,
          "gtm.timerEventNumber": a.yh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.wh,
          "gtm.timerStartTime": a.Zj,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Zj,
          "gtm.triggers": a.Sm,
        });
      }
    };
  }
  function AC(a, b) {
    return b;
  }
  AC.J = "internal.enableAutoEventOnTimer";
  var jc = ka(["data-gtm-yt-inspected-"]),
    CC = ["www.youtube.com", "www.youtube-nocookie.com"],
    DC,
    EC = !1;
  function OC(a, b) {
    var c = this;
    return b;
  }
  OC.J = "internal.enableAutoEventOnYouTubeActivity";
  function PC(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? J(b) : {},
      d = a,
      e = !1;
    return e;
  }
  PC.J = "internal.evaluateBooleanExpression";
  var QC;
  function RC(a) {
    var b = !1;
    return b;
  }
  RC.J = "internal.evaluateMatchingRules";
  var SC = function (a) {
      switch (a) {
        case "page_view":
          return [Hr, zr, Ou, iu, wu, Hu, Iu, Au];
        case "call_conversion":
          return [Hr, Ou];
        case "conversion":
          return [
            Er,
            Hr,
            ou,
            du,
            ru,
            eu,
            fu,
            gu,
            hu,
            iu,
            wu,
            xu,
            zu,
            Bu,
            Lu,
            Mu,
            yu,
            Hu,
            Iu,
            su,
            Cu,
            Du,
            Fu,
            pu,
            tu,
            Ju,
            Fr,
            uu,
            Gu,
            ju,
            Au,
            qu,
            Nu,
            vu,
            Eu,
            nu,
            mu,
            Ku,
          ];
        case "landing_page":
          return [
            Er,
            Hr,
            ou,
            du,
            wu,
            Gr,
            Hu,
            Iu,
            su,
            pu,
            Fr,
            uu,
            ju,
            Au,
            qu,
            Nu,
            Ku,
          ];
        case "remarketing":
          return [
            Er,
            Hr,
            ou,
            du,
            ru,
            eu,
            fu,
            gu,
            hu,
            iu,
            wu,
            xu,
            Bu,
            yu,
            Hu,
            Iu,
            su,
            Cu,
            pu,
            Fr,
            uu,
            Gu,
            ju,
            Au,
            qu,
            Nu,
            nu,
            Ku,
          ];
        case "user_data_lead":
          return [
            Er,
            Hr,
            ou,
            du,
            eu,
            iu,
            wu,
            yu,
            Hu,
            Iu,
            Gr,
            su,
            Fu,
            pu,
            Fr,
            uu,
            Gu,
            ju,
            Au,
            qu,
            Nu,
            Ku,
          ];
        case "user_data_web":
          return [
            Er,
            Hr,
            ou,
            du,
            eu,
            iu,
            wu,
            yu,
            Hu,
            Iu,
            Gr,
            su,
            Fu,
            pu,
            Fr,
            uu,
            Gu,
            ju,
            Au,
            qu,
            Nu,
            Ku,
          ];
        default:
          return [
            Er,
            Hr,
            ou,
            du,
            ru,
            eu,
            fu,
            gu,
            hu,
            iu,
            wu,
            xu,
            zu,
            Bu,
            Lu,
            Mu,
            yu,
            Hu,
            Iu,
            su,
            Cu,
            Du,
            Fu,
            pu,
            tu,
            Ju,
            Fr,
            uu,
            Gu,
            ju,
            Au,
            qu,
            Nu,
            vu,
            Eu,
            nu,
            mu,
            Ku,
          ];
      }
    },
    TC = function (a) {
      for (
        var b = SC(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    UC = function (a, b, c, d) {
      var e = new ar(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Db();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    VC = function (a, b, c, d) {
      function e(t, u) {
        for (var v = na(k), w = v.next(); !w.done; w = v.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = Db();
          x.metadata.consent_event_id = t;
          x.metadata.consent_priority_id = u;
        }
      }
      function f(t) {
        for (var u = {}, v = 0; v < k.length; u = { Qa: void 0 }, v++)
          if (((u.Qa = k[v]), !t || t(u.Qa.metadata.hit_type)))
            if (
              !u.Qa.metadata.consent_updated ||
              u.Qa.metadata.hit_type === "page_view" ||
              X(q)
            )
              TC(k[v]),
                u.Qa.metadata.speculative ||
                  u.Qa.isAborted ||
                  (dw(u.Qa),
                  u.Qa.metadata.hit_type === "page_view" &&
                    T(19) &&
                    u.Qa.o[P.g.ff] === void 0 &&
                    r === void 0 &&
                    (r = uo(
                      oo.ke,
                      (function (w) {
                        return function () {
                          X(P.g.P) &&
                            ((w.Qa.metadata.user_id_updated = !0),
                            (w.Qa.metadata.consent_updated = !1),
                            (w.Qa.o[P.g.Qb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Qa.metadata.user_id_updated = !1),
                            vo(oo.ke, r),
                            (r = void 0));
                        };
                      })(u)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", ia: "", ma: [] }
          : um(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = UC(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === P.g.ba &&
            (T(18)
              ? k.push(UC("page_view", g, b, d))
              : k.push(UC("landing_page", g, b, d))),
            k.push(UC("conversion", g, b, d)),
            k.push(UC("user_data_lead", g, b, d)),
            k.push(UC("user_data_web", g, b, d)),
            k.push(UC("remarketing", g, b, d));
        var q = [P.g.R, P.g.P],
          r = void 0;
        om(function () {
          f();
          T(20) &&
            (X([P.g.ya]) ||
              nm(
                function (t) {
                  e(t.consentEventId, t.consentPriorityId);
                  f(function (u) {
                    return u === "remarketing";
                  });
                },
                [P.g.ya]
              ));
          X(q) ||
            nm(function (t) {
              e(t.consentEventId, t.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  var zD = function () {
    var a = !0;
    (Tn(7) && Tn(9) && Tn(10)) || (a = !1);
    return a;
  };
  function uE(a, b, c, d) {}
  uE.J = "internal.executeEventProcessor";
  function vE(a) {
    var b;
    return gd(b, this.F, 1);
  }
  vE.J = "internal.executeJavascriptString";
  function wE(a) {
    var b;
    return b;
  }
  var xE = null;
  function yE() {
    var a = new cb();
    N(this, "read_container_data"),
      T(37) && xE
        ? (a = xE)
        : (a.set("containerId", "GTM-NBLDJ7X"),
          a.set("version", "70"),
          a.set("environmentName", ""),
          a.set("debugMode", Uf),
          a.set("previewMode", Wf),
          a.set("environmentMode", Vf),
          a.set("firstPartyServing", Bi.D || qi),
          a.set("containerUrl", uc),
          a.Mb(),
          T(37) && (xE = a));
    return a;
  }
  yE.T = "getContainerVersion";
  function zE(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  zE.T = "getCookieValues";
  function AE() {
    return Gl();
  }
  AE.J = "internal.getCountryCode";
  function BE() {
    var a = [];
    return gd(a);
  }
  BE.J = "internal.getDestinationIds";
  function CE(a, b) {
    var c = null;
    return c;
  }
  CE.J = "internal.getElementAttribute";
  function DE(a) {
    var b = null;
    return b;
  }
  DE.J = "internal.getElementById";
  function EE(a) {
    var b = "";
    return b;
  }
  EE.J = "internal.getElementInnerText";
  function FE(a, b) {
    var c = null;
    return c;
  }
  FE.J = "internal.getElementProperty";
  function GE(a) {
    var b;
    return b;
  }
  GE.J = "internal.getElementValue";
  function HE(a) {
    var b = 0;
    return b;
  }
  HE.J = "internal.getElementVisibilityRatio";
  function IE(a) {
    var b = null;
    return b;
  }
  IE.J = "internal.getElementsByCssSelector";
  function JE(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = Hz(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++)
              n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = na(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var A = B.value;
          A === m
            ? (w.push(x), (x = ""))
            : (x = A === g ? x + "\\" : A === k ? x + "." : x + A);
        }
        x && w.push(x);
        for (var D = na(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = gd(c, this.F, 1);
    return b;
  }
  JE.J = "internal.getEventData";
  var KE = {};
  KE.enableAWFledge = T(23);
  KE.enableAdsConversionValidation = T(14);
  KE.enableAutoPiiOnPhoneAndAddress = T(22);
  KE.enableCachedEcommerceData = T(29);
  KE.enableCcdPreAutoPiiDetection = T(30);
  KE.enableCloudRecommentationsErrorLogging = T(31);
  KE.enableCloudRecommentationsSchemaIngestion = T(32);
  KE.enableCloudRetailInjectPurchaseMetadata = T(34);
  KE.enableCloudRetailLogging = T(33);
  KE.enableCloudRetailPageCategories = T(35);
  KE.enableConsentDisclosureActivity = T(36);
  KE.enableConversionMarkerPageViewRename = T(38);
  KE.enableDCFledge = T(41);
  KE.enableDecodeUri = T(57);
  KE.enableDeferAllEnhancedMeasurement = T(42);
  KE.enableDmaBlockDisclosure = T(46);
  KE.enableEuidAutoMode = T(50);
  KE.enableFormSkipValidation = T(54);
  KE.enableUrlDecodeEventUsage = T(80);
  KE.enableZoneConfigInChildContainers = T(83);
  KE.ignoreServerMacroInGoogleSignal = T(86);
  KE.useEnableAutoEventOnFormApis = T(91);
  KE.autoPiiEligible = Ll();
  function LE() {
    return gd(KE);
  }
  LE.J = "internal.getFlags";
  function ME() {
    return new dd(hz);
  }
  ME.J = "internal.getHtmlId";
  function NE(a, b) {
    var c;
    return c;
  }
  NE.J = "internal.getProductSettingsParameter";
  function OE(a, b) {
    var c;
    return c;
  }
  OE.T = "getQueryParameters";
  function PE(a, b) {
    var c;
    return c;
  }
  PE.T = "getReferrerQueryParameters";
  function QE(a) {
    var b = "";
    return b;
  }
  QE.T = "getReferrerUrl";
  function RE() {
    return Hl();
  }
  RE.J = "internal.getRegionCode";
  function SE(a, b) {
    var c;
    return c;
  }
  SE.J = "internal.getRemoteConfigParameter";
  function TE(a) {
    var b = "";
    return b;
  }
  TE.T = "getUrl";
  function UE() {
    N(this, "get_user_agent");
    return rc.userAgent;
  }
  UE.J = "internal.getUserAgent";
  function bF() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var cF = function () {
      var a = bF();
      a.hid = a.hid || ub();
      return a.hid;
    },
    dF = function (a, b) {
      var c = bF();
      if (c.vid == void 0 || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var OF = function (a) {
      this.D = a;
      this.H = "";
      this.j = this.D;
    },
    PF = function (a, b) {
      a.j = b;
      return a;
    },
    QF = function (a, b) {
      a.K = b;
      return a;
    };
  function RF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function SF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Xa(b) ? b : {}, f = na(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var AG = window,
    BG = document,
    CG = function (a) {
      var b = AG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        BG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && AG["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = AG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(BG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return BG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function MG(a) {
    z(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.cb] || {};
    z(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  var qH = function (a, b) {};
  function pH(a, b) {
    var c = function () {};
    return c;
  }
  function rH(a, b, c) {}
  var sH = pH;
  var tH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function uH(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? J(b) : {};
    Dz([
      function () {
        return N(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? J(c) : {},
      g = Hz(this);
    f.originatingEntity = xA(g);
    Kx(Hx(a, e), g.eventId, f);
  }
  uH.J = "internal.gtagConfig";
  function vH() {
    var a = {};
    return a;
  }
  function xH(a, b) {}
  xH.T = "gtagSet";
  function yH(a, b) {}
  yH.T = "injectHiddenIframe";
  function zH(a, b, c, d, e) {}
  zH.J = "internal.injectHtml";
  var DH = {};
  var EH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Bc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) I(g[k]);
              g.push = function (m) {
                I(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) I(g[k]);
              e[f] = null;
            },
            b
          ))
      : Bc(a, c, d, b);
  };
  function FH(a, b, c, d) {
    if (!lo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      N(this, "inject_script", a);
      var e = this.F;
      EH(
        a,
        void 0,
        function () {
          b && b.fb(e);
        },
        function () {
          c && c.fb(e);
        },
        DH,
        d
      );
    }
  }
  var GH = { dl: 1, id: 1 },
    HH = {};
  function IH(a, b, c, d) {}
  FH.T = "injectScript";
  IH.J = "internal.injectScript";
  function JH(a) {
    var b = !0;
    return b;
  }
  JH.T = "isConsentGranted";
  function KH() {
    return Jl();
  }
  KH.J = "internal.isDmaRegion";
  function LH(a) {
    var b = !1;
    return b;
  }
  LH.J = "internal.isEntityInfrastructure";
  function MH() {
    var a = Zg(function (b) {
      Hz(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function NH(a) {
    var b = void 0;
    return gd(b);
  }
  NH.J = "internal.legacyParseUrl";
  function OH() {
    return !1;
  }
  var PH = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function QH() {
    try {
      N(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = J(a[b], this.F);
    console.log.apply(console, a);
  }
  QH.T = "logToConsole";
  function RH(a, b) {}
  RH.J = "internal.mergeRemoteConfig";
  function SH(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return gd(d);
  }
  SH.J = "internal.parseCookieValuesFromString";
  function TH(a) {
    var b = void 0;
    return b;
  }
  TH.T = "parseUrl";
  function UH(a) {}
  UH.J = "internal.processAsNewEvent";
  function VH(a, b, c) {
    var d;
    return d;
  }
  VH.J = "internal.pushToDataLayer";
  function WH(a) {
    var b = !1;
    return b;
  }
  WH.T = "queryPermission";
  function XH() {
    var a = "";
    return a;
  }
  XH.T = "readCharacterSet";
  function YH() {
    return ii.Ya;
  }
  YH.J = "internal.readDataLayerName";
  function ZH() {
    var a = "";
    return a;
  }
  ZH.T = "readTitle";
  function $H(a, b) {
    var c = this;
  }
  $H.J = "internal.registerCcdCallback";
  function aI(a) {
    return !0;
  }
  aI.J = "internal.registerDestination";
  var bI = ["config", "event", "get", "set"];
  function cI(a, b, c) {}
  cI.J = "internal.registerGtagCommandListener";
  function dI(a, b) {
    var c = !1;
    return c;
  }
  dI.J = "internal.removeDataLayerEventListener";
  function eI(a, b) {}
  eI.J = "internal.removeFormData";
  function fI() {}
  fI.T = "resetDataLayer";
  function gI(a, b, c, d) {}
  gI.J = "internal.sendGtagEvent";
  function hI(a, b, c) {}
  hI.T = "sendPixel";
  function iI(a, b) {}
  iI.J = "internal.setAnchorHref";
  function jI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  jI.T = "setCookie";
  function kI(a) {}
  kI.J = "internal.setCoreBinaryXServices";
  function lI(a, b) {}
  lI.J = "internal.setDataLayerValue";
  function mI(a) {}
  mI.T = "setDefaultConsentState";
  function nI(a, b) {}
  nI.J = "internal.setDelegatedConsentType";
  function oI(a, b) {}
  oI.J = "internal.setFormAction";
  function pI(a, b, c) {}
  pI.J = "internal.setInCrossContainerData";
  function qI(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    N(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Kb(d, [G, H]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = J(b, this.F, 2)), !0;
    return !1;
  }
  qI.T = "setInWindow";
  function rI(a, b, c) {}
  rI.J = "internal.setProductSettingsParameter";
  function sI(a, b, c) {}
  sI.J = "internal.setRemoteConfigParameter";
  function tI(a, b, c, d) {
    var e = this;
  }
  tI.T = "sha256";
  function uI(a, b, c) {}
  uI.J = "internal.sortRemoteConfigParameters";
  function vI(a, b) {
    var c = void 0;
    return c;
  }
  vI.J = "internal.subscribeToCrossContainerData";
  var wI = {},
    xI = {};
  wI.getItem = function (a) {
    var b = null;
    return b;
  };
  wI.setItem = function (a, b) {};
  wI.removeItem = function (a) {};
  wI.clear = function () {};
  wI.T = "templateStorage";
  function yI(a, b) {
    var c = !1;
    return c;
  }
  yI.J = "internal.testRegex";
  function zI(a) {
    var b;
    return b;
  }
  function AI(a) {
    var b;
    return b;
  }
  AI.J = "internal.unsiloId";
  function BI(a, b) {
    var c;
    return c;
  }
  BI.J = "internal.unsubscribeFromCrossContainerData";
  function CI(a) {}
  CI.T = "updateConsentState";
  var DI;
  function EI(a, b, c) {
    DI = DI || new jh();
    DI.add(a, b, c);
  }
  function FI(a, b) {
    var c = (DI = DI || new jh());
    if (c.D.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.j.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.D[a] = qb(b) ? Gg(a, b) : Hg(a, b);
  }
  function GI() {
    return function (a) {
      var b;
      var c = DI;
      if (c.j.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.D.hasOwnProperty(a))) {
          var e = !1,
            f = this.F.j;
          if (f) {
            var g = f.wb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var HI = function () {
    var a = function (c) {
        return FI(c.J, c);
      },
      b = function (c) {
        return EI(c.T, c);
      };
    b(Bz);
    b(Iz);
    b(WA);
    b(YA);
    b(ZA);
    b(dB);
    b(fB);
    b(iB);
    b(kB);
    b(yE);
    b(zE);
    b(OE);
    b(PE);
    b(QE);
    b(TE);
    b(xH);
    b(yH);
    b(FH);
    b(JH);
    b(QH);
    b(TH);
    b(WH);
    b(XH);
    b(ZH);
    b(hI);
    b(jI);
    b(mI);
    b(qI);
    b(tI);
    b(wI);
    b(CI);
    b(MH());
    EI("Math", Lg());
    EI("Object", hh);
    EI("TestHelper", lh());
    EI("assertApi", Ig);
    EI("assertThat", Jg);
    EI("decodeUri", Ng);
    EI("decodeUriComponent", Og);
    EI("encodeUri", Pg);
    EI("encodeUriComponent", Qg);
    EI("fail", Vg);
    EI("generateRandom", Wg);
    EI("getTimestamp", Xg);
    EI("getTimestampMillis", Xg);
    EI("getType", Yg);
    EI("makeInteger", $g);
    EI("makeNumber", ah);
    EI("makeString", bh);
    EI("makeTableMap", ch);
    EI("mock", fh);
    EI("fromBase64", wE, !("atob" in G));
    EI("localStorage", PH, !OH());
    EI("toBase64", zI, !("btoa" in G));
    a(Ez);
    a(Zz);
    a(kA);
    a(rA);
    a(wA);
    a(LA);
    a(UA);
    a(XA);
    a($A);
    a(aB);
    a(bB);
    a(cB);
    a(eB);
    a(gB);
    a(hB);
    a(jB);
    a(lB);
    a(nB);
    a(oB);
    a(pB);
    a(qB);
    a(uB);
    a(CB);
    a(DB);
    a(OB);
    a(TB);
    a(YB);
    a(gC);
    a(lC);
    a(yC);
    a(AC);
    a(OC);
    a(PC);
    a(RC);
    a(uE);
    a(vE);
    a(AE);
    a(BE);
    a(CE);
    a(DE);
    a(EE);
    a(FE);
    a(GE);
    a(HE);
    a(IE);
    a(JE);
    a(LE);
    a(ME);
    a(NE);
    a(RE);
    a(SE);
    a(uH);
    a(zH);
    a(IH);
    a(KH);
    a(LH);
    a(NH);
    a(JA);
    a(RH);
    a(SH);
    a(UH);
    a(VH);
    a(YH);
    a($H);
    a(aI);
    a(cI);
    a(dI);
    a(eI);
    a(gI);
    a(iI);
    a(kI);
    a(lI);
    a(nI);
    a(oI);
    a(pI);
    a(rI);
    a(sI);
    a(uI);
    a(vI);
    a(yI);
    a(AI);
    a(BI);
    FI("internal.CrossContainerSchema", mB());
    FI("internal.GtagSchema", vH());
    EI("mockObject", gh);
    return GI();
  };
  var zz;
  function II() {
    zz.j.j.K = function (a, b, c) {
      ji.SANDBOXED_JS_SEMAPHORE = ji.SANDBOXED_JS_SEMAPHORE || 0;
      ji.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        ji.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function JI(a) {
    a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          yi[e] = yi[e] || [];
          yi[e].push(b);
        }
      });
  }
  var KI = encodeURI,
    Y = encodeURIComponent,
    LI = Array.isArray,
    MI = function (a, b, c) {
      Ec(a, b, c);
    },
    NI = function (a, b) {
      if (!a) return !1;
      var c = cj(U(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          f > 0 && e.charAt(0) != "." && (f--, (e = "." + e));
          if (f >= 0 && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    OI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var XI = G.clearTimeout,
    YI = G.setTimeout,
    ZI = function (a, b, c) {
      if (lo()) {
        b && I(b);
      } else return Bc(a, b, c);
    },
    $I = function () {
      return G.location.href;
    },
    aJ = function (a, b) {
      return Ii(a, b || 2);
    },
    bJ = function (a, b) {
      G[a] = b;
    },
    cJ = function (a, b, c) {
      b && (G[a] === void 0 || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    dJ = function (a, b) {
      if (lo()) {
        b && I(b);
      } else Dc(a, b);
    };

  var eJ = {};
  var Z = { securityGroups: {} };

  (Z.securityGroups.sdl = ["google"]),
    (function () {
      function a() {
        return !!(
          Object.keys(p("horiz.pix")).length ||
          Object.keys(p("horiz.pct")).length ||
          Object.keys(p("vert.pix")).length ||
          Object.keys(p("vert.pct")).length
        );
      }
      function b(A) {
        for (var D = [], E = A.split(","), C = 0; C < E.length; C++) {
          var F = Number(E[C]);
          if (isNaN(F)) return [];
          r.test(E[C]) || D.push(F);
        }
        return D;
      }
      function c() {
        var A = 0,
          D = 0;
        return function () {
          var E = js(),
            C = E.height;
          A = Math.max(x.scrollLeft + E.width, A);
          D = Math.max(x.scrollTop + C, D);
          return { Wg: A, Xg: D };
        };
      }
      function d() {
        v = cJ("self");
        w = v.document;
        x = w.scrollingElement || (w.body && w.body.parentNode);
        B = c();
      }
      function e(A, D, E, C) {
        var F = p(D),
          M = {},
          L;
        for (L in F)
          if (((M = { Bd: M.Bd }), (M.Bd = L), F.hasOwnProperty(M.Bd))) {
            var S = Number(M.Bd);
            A < S ||
              (sy({
                event: "gtm.scrollDepth",
                "gtm.scrollThreshold": S,
                "gtm.scrollUnits": E.toLowerCase(),
                "gtm.scrollDirection": C,
                "gtm.triggers": F[M.Bd].join(","),
              }),
              Oz(
                "sdl",
                D,
                (function (V) {
                  return function (ba) {
                    delete ba[V.Bd];
                    return ba;
                  };
                })(M),
                {}
              ));
          }
      }
      function f() {
        var A = B(),
          D = A.Wg,
          E = A.Xg,
          C = (D / x.scrollWidth) * 100,
          F = (E / x.scrollHeight) * 100;
        e(D, "horiz.pix", t.xf, u.Yi);
        e(C, "horiz.pct", t.wf, u.Yi);
        e(E, "vert.pix", t.xf, u.wj);
        e(F, "vert.pct", t.wf, u.wj);
        Lz("sdl", "pending", !1);
      }
      function g(A, D) {
        Kz("sdl", "init", !1) &&
          !a() &&
          (D ? Gc(v, "scrollend", A) : Gc(v, "scroll", A),
          Gc(v, "resize", A),
          Lz("sdl", "init", !1));
      }
      function k() {
        var A = 250,
          D = !1;
        w.scrollingElement &&
          w.documentElement &&
          v.addEventListener &&
          ((A = 50), (D = !0));
        var E = 0,
          C = !1,
          F = function () {
            C ? (E = YI(F, A)) : ((E = 0), f(), g(M));
            C = !1;
          },
          M = function () {
            D && B();
            E ? (C = !0) : ((E = YI(F, A)), Lz("sdl", "pending", !0));
          };
        return M;
      }
      function m() {
        var A = function () {
          f();
          g(A, !0);
        };
        return A;
      }
      function n(A, D, E) {
        if (D) {
          var C = b(String(A));
          Oz(
            "sdl",
            E,
            function (F) {
              for (var M = 0; M < C.length; M++) {
                var L = String(C[M]);
                F.hasOwnProperty(L) || (F[L] = []);
                F[L].push(D);
              }
              return F;
            },
            {}
          );
        }
      }
      function p(A) {
        return Kz("sdl", A, {});
      }
      function q(A) {
        I(A.vtp_gtmOnSuccess);
        var D = A.vtp_uniqueTriggerId,
          E = A.vtp_horizontalThresholdsPixels,
          C = A.vtp_horizontalThresholdsPercent,
          F = A.vtp_verticalThresholdUnits,
          M = A.vtp_verticalThresholdsPixels,
          L = A.vtp_verticalThresholdsPercent;
        switch (A.vtp_horizontalThresholdUnits) {
          case t.xf:
            n(E, D, "horiz.pix");
            break;
          case t.wf:
            n(C, D, "horiz.pct");
        }
        switch (F) {
          case t.xf:
            n(M, D, "vert.pix");
            break;
          case t.wf:
            n(L, D, "vert.pct");
        }
        Kz("sdl", "init", !1)
          ? Kz("sdl", "pending") ||
            (y || (d(), (y = !0)),
            I(function () {
              return f();
            }))
          : (d(),
            (y = !0),
            x &&
              (Lz("sdl", "init", !0),
              Lz("sdl", "pending", !0),
              I(function () {
                f();
                if (a()) {
                  var S = k();
                  "onscrollend" in v
                    ? ((S = m()), Fc(v, "scrollend", S))
                    : Fc(v, "scroll", S);
                  Fc(v, "resize", S);
                } else Lz("sdl", "init", !1);
              })));
      }
      var r = /^\s*$/,
        t = { wf: "PERCENT", xf: "PIXELS" },
        u = { wj: "vertical", Yi: "horizontal" },
        v,
        w,
        x,
        y = !1,
        B;
      (function (A) {
        Z.__sdl = A;
        Z.__sdl.C = "sdl";
        Z.__sdl.isVendorTemplate = !0;
        Z.__sdl.priorityOverride = 0;
        Z.__sdl.isInfrastructure = !1;
        Z.__sdl.runInSiloedMode = !1;
      })(function (A) {
        A.vtp_triggerStartOption
          ? q(A)
          : ky(function () {
              q(A);
            });
      });
    })();
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = aJ("gtm.referrer", 1) || H.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? cj(
              U(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : fj(U(String(b)))
        : String(b);
    }),
    (Z.__f.C = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = aJ("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return xo(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Z.__k.C = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.C = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.C = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : aJ("gtm.url", 1)) || $I();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return fj(U(String(c)));
        var e = U(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = cj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = cj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = aJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.C = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.C = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && kg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Z.__gclidw = b;
        Z.__gclidw.C = "gclidw";
        Z.__gclidw.isVendorTemplate = !0;
        Z.__gclidw.priorityOverride = 100;
        Z.__gclidw.isInfrastructure = !1;
        Z.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = aJ(P.g.fa);
        g = g != void 0 && g !== !1;
        if (T(18)) {
          var k = {},
            m =
              ((k[P.g.Na] = e),
              (k[P.g.Eb] = c),
              (k[P.g.Va] = d),
              (k[P.g.ab] = f),
              (k[P.g.fa] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[P.g.Xa] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[P.g.sa] =
              ((n[P.g.Cc] = b.vtp_acceptIncoming),
              (n[P.g.W] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[P.g.Ib] = b.vtp_urlPosition),
              (n[P.g.sb] = b.vtp_formDecoration),
              n);
          }
          var p = en(
            dn(
              cn(
                bn(
                  Vm(new Um(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          VC("", P.g.ba, Date.now(), p);
        } else {
          I(b.vtp_gtmOnSuccess);
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || qp()) sq(a, q), Dp(q);
          pq(q);
          yq(["aw", "dc"], q);
          Wq(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            wq(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            Ep(wp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            Ep("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !Bi.D && !qi && T(76) && xt(void 0, Math.round(Db()));
          Nr({
            m: en(new Um(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Ug: !1,
            xd: g,
            jc: q,
            Ef: !0,
          });
          b.vtp_enableUrlPassthrough && Bq(["aw", "dc", "gb"]);
          Dq(["aw", "dc", "gb"]);
        }
      });
    })();

  (Z.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var x = t + "." + u,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var B = r[w];
          if (B && ((y = v(B)), (n[x] = y), p.push(x), p.length > 35)) {
            var A = p.shift();
            delete n[A];
          }
        }
        return y;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return v !== void 0 ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d($I());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (A) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var B = x;
            if (B.length != 0) {
              if (y.indexOf(B) >= 0) return !1;
              v.push(d(B));
            }
          }
        }
        return !NI(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return cj(U(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return w === void 0 ? v : w;
          case "INTERACTED_FIELD_ID":
            return k(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return k(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return k(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return x === void 0 ? v : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return y === void 0 ? v : y;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Hc(r, "value");
          case "button":
            return Ic(r);
          default:
            return null;
        }
      }
      function g(r) {
        if (r.tagName.toLowerCase() === "form" && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Qz(r.elements[u]) && t++;
          return t;
        }
      }
      function k(r, t, u) {
        var v = r.interactedFormField;
        return (v && Hc(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.C = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !0;
        Z.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || u;
          case "TEXT":
            return a(w, t, v, Ic) || u;
          case "URL":
            var y;
            a: {
              var B = String(w.elementUrl || u || ""),
                A = U(B),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = B;
                  break a;
                case "IS_OUTBOUND":
                  y = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = cj(
                    A,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var E;
            if (r.vtp_attribute === void 0) E = b(w, v, u);
            else {
              var C = w.element;
              E = (C && Hc(C, r.vtp_attribute)) || u || "";
            }
            return E;
          case "MD":
            var F = r.vtp_mdValue,
              M = a(w, t, "MD", SI);
            return F && M ? PI(M, F) || u : M || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            return b(w, v, u);
        }
      });
    })();
  (Z.securityGroups.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_data_layer = b;
        Z.__read_data_layer.C = "read_data_layer";
        Z.__read_data_layer.isVendorTemplate = !0;
        Z.__read_data_layer.priorityOverride = 0;
        Z.__read_data_layer.isInfrastructure = !1;
        Z.__read_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Keys must be strings.");
            if (c !== "any") {
              try {
                if (kg(g, d)) return;
              } catch (k) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(
                f,
                {},
                "Prohibited read from data layer variable: " + g + "."
              );
            }
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.detect_history_change_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_history_change_events = b;
        Z.__detect_history_change_events.C = "detect_history_change_events";
        Z.__detect_history_change_events.isVendorTemplate = !0;
        Z.__detect_history_change_events.priorityOverride = 0;
        Z.__detect_history_change_events.isInfrastructure = !1;
        Z.__detect_history_change_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, N: a };
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (u, v) {
            m[u] = m[u] || v;
          },
          p = function (u, v, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < u.length; x = { Je: void 0 }, y++)
                (x.Je = {}),
                  z(
                    u[y],
                    (function (A) {
                      return function (D, E) {
                        w && D === "id"
                          ? (A.Je.promotion_id = E)
                          : w && D === "name"
                          ? (A.Je.promotion_name = E)
                          : (A.Je[D] = E);
                      };
                    })(x)
                  ),
                  m.items.push(x.Je);
            }
            if (v)
              for (var B in v) d.hasOwnProperty(B) ? n(d[B], v[B]) : n(B, v[B]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Xa(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Xa(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === P.g.hb
                ? p(q.impressions, null)
                : t === "promoClick" && g === P.g.Cb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === P.g.ib
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          h(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.C = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Yh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = OI(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = OI(f.vtp_eventParameters, "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[P.g.Ea] = v);
          if (m.hasOwnProperty(P.g.cb) || f.vtp_userProperties) {
            var w = m[P.g.cb] || {};
            h(OI(f.vtp_userProperties, "name", "value"), w);
            m[P.g.cb] = w;
          }
          var x = {
            originatingEntity: Cw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, Zh, function (A) {
            return zb(A);
          });
          a(m, ai, function (A) {
            return Number(A);
          });
          var B = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Kx(Ix(g, k, m), B, x);
          I(f.vtp_gtmOnSuccess);
        } else I(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_link_click_events = b;
        Z.__detect_link_click_events.C = "detect_link_click_events";
        Z.__detect_link_click_events.isVendorTemplate = !0;
        Z.__detect_link_click_events.priorityOverride = 0;
        Z.__detect_link_click_events.isInfrastructure = !1;
        Z.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.detect_form_submit_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_form_submit_events = b;
        Z.__detect_form_submit_events.C = "detect_form_submit_events";
        Z.__detect_form_submit_events.isVendorTemplate = !0;
        Z.__detect_form_submit_events.priorityOverride = 0;
        Z.__detect_form_submit_events.isInfrastructure = !1;
        Z.__detect_form_submit_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.C = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!l(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Bg(U(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.read_container_data = ["google"]),
    (Z.__read_container_data = function () {
      return {
        assert: function () {},
        N: function () {
          return {};
        },
      };
    }),
    (Z.__read_container_data.C = "read_container_data"),
    (Z.__read_container_data.isVendorTemplate = !0),
    (Z.__read_container_data.priorityOverride = 0),
    (Z.__read_container_data.isInfrastructure = !1),
    (Z.__read_container_data.runInSiloedMode = !1);

  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.C = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Bg(U(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = d === "DATA_LAYER" ? aJ(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.C = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
        Z.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = OI(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[P.g.na] = b.vtp_conversionValue || 0),
            (f[P.g.za] = b.vtp_currencyCode),
            (f[P.g.Aa] = b.vtp_orderId),
            (f[P.g.Za] = b.vtp_conversionCookiePrefix),
            (f[P.g.ra] = c),
            (f[P.g.Gd] = d),
            (f[P.g.fa] = aJ(P.g.fa)),
            (f[P.g.la] = aJ("developer_id")),
            f);
        (g[P.g.Ca] = aJ(P.g.Ca)),
          (g[P.g.ka] = aJ(P.g.ka)),
          (g[P.g.Tb] = aJ(P.g.Tb)),
          (g[P.g.Ja] = aJ(P.g.Ja));
        b.vtp_rdp && (g[P.g.Xb] = !0);
        if (b.vtp_enableCustomParams)
          for (var k in e) fi.hasOwnProperty(k) || (g[k] = e[k]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(P.g.Kd, "vtp_awMerchantId", "aw_merchant_id");
          m(P.g.Id, "vtp_awFeedCountry", "aw_feed_country");
          m(P.g.Jd, "vtp_awFeedLanguage", "aw_feed_language");
          m(P.g.Hd, "vtp_discount", "discount");
          m(P.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[P.g.ld] = b.vtp_deliveryPostalCode),
          (g[P.g.Rd] = b.vtp_estimatedDeliveryDate),
          (g[P.g.wc] = b.vtp_deliveryCountry),
          (g[P.g.Zc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[P.g.Lb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(P.g.fd, "vtp_awNewCustomer", "new_customer");
          n(P.g.Ld, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[P.g.Qd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        uw(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Kx(Ix(Kj(v), P.g.Ia, g), b.vtp_gtmEventId, x);
      });
    })();
  (Z.securityGroups.remm = ["google"]),
    (Z.__remm = function (a) {
      for (
        var b = a.vtp_input,
          c = a.vtp_map || [],
          d = a.vtp_fullMatch,
          e = a.vtp_ignoreCase ? "gi" : "g",
          f = a.vtp_defaultValue,
          g = 0;
        g < c.length;
        g++
      ) {
        var k = c[g].key || "";
        d && (k = "^" + k + "$");
        var m = new RegExp(k, e);
        if (m.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
          f = n;
          break;
        }
      }
      return f;
    }),
    (Z.__remm.C = "remm"),
    (Z.__remm.isVendorTemplate = !0),
    (Z.__remm.priorityOverride = 0),
    (Z.__remm.isInfrastructure = !0),
    (Z.__remm.runInSiloedMode = !1);

  (Z.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        Z.__detect_click_events = b;
        Z.__detect_click_events.C = "detect_click_events";
        Z.__detect_click_events.isVendorTemplate = !0;
        Z.__detect_click_events.priorityOverride = 0;
        Z.__detect_click_events.isInfrastructure = !1;
        Z.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (f !== void 0 && typeof f !== "string")
              throw c(d, {}, "cssSelector must be a string.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.C = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.C = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (e.length > 0) {
              var k = e.shift(),
                m = a(d, e, f, g);
              if (
                String(k.nodeName).toUpperCase() == "SCRIPT" &&
                k.type == "text/gtmscript"
              ) {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = k.id;
                n.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (n.charset = k.charset);
                var p = k.getAttribute("data-gtmsrc");
                p && ((n.src = p), xc(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                k.innerHTML &&
                k.innerHTML.toLowerCase().indexOf("<script") >= 0
              ) {
                for (var q = []; k.firstChild; )
                  q.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, q, m, g)();
              } else d.insertBefore(k, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = mz(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Fj,
            k = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, k, e) : a(H.body, Jc(g), k, e)();
        } else
          YI(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.C = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  var fJ = {};
  (fJ.onHtmlSuccess = nz(!0)), (fJ.onHtmlFailure = nz(!1));
  fJ.dataLayer = Ji;
  fJ.callback = function (a) {
    xi.hasOwnProperty(a) && qb(xi[a]) && xi[a]();
    delete xi[a];
  };
  fJ.bootstrap = 0;
  fJ._spx = !1;
  function gJ() {
    ji[Nj()] = ji[Nj()] || fJ;
    Yj();
    ck() ||
      z(dk(), function (d, e) {
        uw(d, e.transportUrl, e.context);
        O(92);
      });
    Gb(yi, Z.securityGroups);
    var a = Rj(Sj()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || O(142);
    jz(),
      of({
        Vl: function (d) {
          return d === hz;
        },
        ml: function (d) {
          return new kz(d);
        },
        Wl: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        wm: function (d) {
          var e;
          if (d === hz) e = d;
          else {
            var f = zi();
            iz[f] = d;
            e = 'google_tag_manager["rm"]["' + Pj() + '"](' + f + ")";
          }
          return e;
        },
      });
    qf = Hf;
  }
  (function (a) {
    function b() {
      n = H.documentElement.getAttribute("data-tag-assistant-present");
      Dy(n) && (m = k.Vi);
    }
    function c() {
      m && uc ? g(m) : a();
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (H.referrer) {
        var e = U(H.referrer);
        d = ej(e, "host") === "cct.google";
      }
      if (!d) {
        var f = xo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((G["__TAGGY_INSTALLED"] = !0),
        Bc("https://cct.google/taggy/agent.js"));
    }
    var g = function (u) {
        var v = "GTM",
          w = "GTM";
        oi && ((v = "OGT"), (w = "GTAG"));
        var x = G["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (G["google.tagmanager.debugui2.queue"] = x),
          Bc(
            "https://" +
              ii.Ed +
              "/debug/bootstrap?id=" +
              Nf.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              no()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: uc,
            containerProduct: v,
            debug: !1,
            id: Nf.ctid,
            targetRef: { ctid: Nf.ctid, isDestination: Gj.fe },
            aliases: Jj(),
            destinations: Mj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        ii.lk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Fk: 1, Xi: 2, mj: 3, ai: 4, Vi: 5 };
    k[k.Fk] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Xi] = "GTM_DEBUG_PARAM";
    k[k.mj] = "REFERRER";
    k[k.ai] = "COOKIE";
    k[k.Vi] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = cj(G.location, "query", !1, void 0, "gtm_debug");
    Dy(p) && (m = k.Xi);
    if (!m && H.referrer) {
      var q = U(H.referrer);
      ej(q, "host") === "tagassistant.google.com" && (m = k.mj);
    }
    if (!m) {
      var r = xo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.ai);
    }
    m || b();
    if (!m && Ey(n)) {
      var t = !1;
      Fc(
        H,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      G.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      Wj();
      if (T(64)) {
      }
      Tl().D();
      Qn();
      rm();
      var a = Pj();
      if (Ej().canonical[a]) {
        var b = ji.zones;
        b && b.unregisterChild(Ij());
        gw().removeExternalRestrictions(Pj());
      } else {
        Pt();
        a: {
        }
        Bi.j = "0";
        Bi.D = Bi.H;
        Bi.K = "";
        Bi.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Bi.O = "ad_storage|analytics_storage|ad_user_data";
        Bi.Pa = "";
        rw();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          ff.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) jf.push(f[g]);
        for (var k = c.predicates || [], m = 0; m < k.length; m++)
          hf.push(k[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            (u !== "if" && u !== "unless") || pf(r[u]);
          }
          gf.push(r);
        }
        lf = Z;
        mf = pz;
        Jf = new Qf();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          zz = new Be();
          II();
          ef = yz();
          var B = zz,
            A = HI(),
            D = new Zc("require", A);
          D.Mb();
          B.j.j.set("require", D);
          for (var E = [], C = 0; C < x.length; C++) {
            var F = x[C];
            if (!Array.isArray(F) || F.length < 3) {
              if (F.length === 0) continue;
              break a;
            }
            y && y[C] && y[C].length && Af(F, y[C]);
            try {
              zz.execute(F), T(73) && wj && F[0] === 50 && E.push(F[1]);
            } catch (Da) {}
          }
          T(73) && (rf = E);
        }
        if (v && v.length)
          for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
            var S = v[L].replace(/^_*/, "");
            yi[S] = M;
          }
        JI(w);
        gJ();
        if (!si)
          for (
            var V = Jl() ? Di(Bi.O) : Di(Bi.Z), ba = 0;
            ba < fm.length;
            ba++
          ) {
            var aa = fm[ba],
              Q = aa,
              oa = V[aa] ? "granted" : "denied";
            Ol().implicit(Q, oa);
          }
        Cy();
        vw = !1;
        ww = 0;
        if (
          (H.readyState === "interactive" && !H.createEventObject) ||
          H.readyState === "complete"
        )
          yw();
        else {
          Fc(H, "DOMContentLoaded", yw);
          Fc(H, "readystatechange", yw);
          if (H.createEventObject && H.documentElement.doScroll) {
            var ma = !0;
            try {
              ma = !G.frameElement;
            } catch (Da) {}
            ma && zw();
          }
          Fc(G, "load", yw);
        }
        hy = !1;
        H.readyState === "complete" ? jy() : Fc(G, "load", jy);
        wj &&
          (ik(xk),
          G.setInterval(wk, 864e5),
          ik(sz),
          ik(Zw),
          ik(Uu),
          ik(hn),
          ik(jx),
          ik(Dt),
          T(73) && (ik(dx), ik(ex), ik(fx)),
          T(60) && (ik(tz), ik(vz)));
        if (xj) {
          Lk();
          Om();
          zl();
          Ly();
          T(44) || hk.push(Dl);
          T(44) || hk.push(Ex);
          if (T(44)) {
            var za = Iy();
            za && Dk("pcid", za);
          } else hk.push(Jy);
          T(28) &&
            (T(44)
              ? (Dk("bt", String(Bi.H ? 2 : qi ? 1 : 0)),
                Dk("ct", String(Bi.H ? 0 : qi ? 1 : lo() ? 2 : 3)))
              : hk.push(Gy));
        }
        fz();
        El(1);
        HA();
        wi = Db();
        fJ.bootstrap = wi;
        if (T(64)) {
        }
      }
    } catch (Da) {
      if ((El(4), wj)) {
        var Ma = qk(!1, !0, !0);
        Ec(Ma);
      }
    }
  });
})();
