export const HomefeedData = [
  {
    uuid: "89620d92-46a7-4534-a261-61dffde803ee",
    type: "MARKUP_TEXT",
    text: '<span style="color:#5e5e5e" >Learn how results are ranked. <span style="text-decoration: underline;text-decoration-color:#5e5e5e;text-underline-offset:4;">Learn more</span></span>',
    actionUrl:
      "?mod=topRankingDisclaimer&modctx=https://z.uber.com/ranking-disclaimer-ie",
  },
  {
    uuid: "e9f426e5-e602-4744-91e6-5b8a795d297d",
    type: "REGULAR_CAROUSEL",
    carousel: {
      stores: [
        {
          storeUuid: "1be90df8-f676-4327-a37d-17da71233e34",
          title: {
            text: "McDonald's®",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€1.79 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€1.79 Delivery Fee</span></span>',
              accessibilityText: "€1.79 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€1.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "10 min",
              accessibilityText: "Delivered in 10 to 10 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "3.9",
            accessibilityText:
              "Rated 3.9 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl:
            "/store/mcdonalds-donaghmede-shopping-centre/G-kN-PZ2QyejfRfacSM-NA",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/885ba8620d45ab36746a0e8c7b85ee66.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/b92d4926516c2635a39581f43cd533a0.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/66345bbe137cfe4e15769c434c6c397c.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/35927095c71455a8eb90d48f0168bf20.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/560a11f5d26e4cb83686f7810a5f5fe2.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/08829600257ed8168dd856cafb7446c8.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "quick_eats",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "1.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "1be90df8-f676-4327-a37d-17da71233e34",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.055205345153808594,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.04673097355954998,
                  HmooScorePreSCR: 0.05630183935165405,
                  NetInflowPredictionScore: 20.08181381225586,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.05630183935165405,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.8300079375324547,
                  UCBBanditPredictionScore: 0.07403996474190096,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.055205345153808594,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.1609521508216858,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 20.08181381225586,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 3229,
                  t120d_request_count: 2438,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.07403996474190096,
                },
                total: 0.04673097355954998,
              },
              etdInfo: {
                dropoffETARange: {
                  min: 10,
                  max: 10,
                  raw: 10,
                },
              },
              fareInfo: {
                serviceFee: 1.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 179,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 3.934179534153359,
                ratingCount: "6,000+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3956,
            longitude: -6.1624,
            zIndex: 10000,
            description: {
              title: "McDonald's®",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "3.9",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "aeda0f0e-4b3c-470e-bc04-589b284de409",
          title: {
            text: "Subway",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€0.79 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€0.79 Delivery Fee</span></span>',
              accessibilityText: "€0.79 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€0.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "20 min",
              accessibilityText: "Delivered in 20 to 20 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.2",
            accessibilityText:
              "Rated 4.2 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/subway-grange-road/rtoPDks8Rw68BFibKE3kCQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/20fa9288fdc01be28055baedd768dc37.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/63d18745892c100be9e4ef3c560c9204.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "quick_eats",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "0.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "aeda0f0e-4b3c-470e-bc04-589b284de409",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.011594504117965698,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.00735831198528657,
                  HmooScorePreSCR: 0.013860898315906525,
                  NetInflowPredictionScore: 20.249496459960938,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.013860898315906525,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5308683331759457,
                  UCBBanditPredictionScore: 0.18473612077491855,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.011594504117965698,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.050771504640579224,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 20.249496459960938,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 2103,
                  t120d_request_count: 230,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.18473612077491855,
                },
                total: 0.00735831198528657,
              },
              etdInfo: {
                dropoffETARange: {
                  min: 20,
                  max: 20,
                  raw: 20,
                },
              },
              fareInfo: {
                serviceFee: 0.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 79,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.172461752433937,
                ratingCount: "500+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3971,
            longitude: -6.1454,
            zIndex: 9999,
            description: {
              title: "Subway",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.2",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "e05420fb-cf68-4de1-b6ae-6d294c328d7c",
          title: {
            text: "Mace",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€0.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€0.29 Delivery Fee</span></span>',
              accessibilityText: "€0.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€0.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "15 min",
              accessibilityText: "Delivered in 15 to 15 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.5",
            accessibilityText:
              "Rated 4.5 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/mace-raheny/4FQg-89oTeG2rm0pTDKNfA",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/8a42ee7a692dfa4155879820804a277f.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/fdf52d66534809b650058f41d517d74a.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "quick_eats",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "0.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "e05420fb-cf68-4de1-b6ae-6d294c328d7c",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.003628641366958618,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.0030399370835227503,
                  HmooScorePreSCR: 0.005371108949184418,
                  NetInflowPredictionScore: 20.50722312927246,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.005371108949184418,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5659794117533872,
                  UCBBanditPredictionScore: 0.21661183794440336,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.003628641366958618,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.024499326944351196,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 20.50722312927246,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 3957,
                  t120d_request_count: 80,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.21661183794440336,
                },
                total: 0.0030399370835227503,
              },
              etdInfo: {
                dropoffETARange: {
                  min: 15,
                  max: 15,
                  raw: 15,
                },
              },
              fareInfo: {
                serviceFee: 0.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 29,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.489169675090255,
                ratingCount: "500+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3765,
            longitude: -6.1782,
            zIndex: 9998,
            description: {
              title: "Mace",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.5",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "818db20f-c8ef-5922-a60f-e61b55316757",
          title: {
            text: "Tutti Frutti",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€2.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€2.29 Delivery Fee</span></span>',
              accessibilityText: "€2.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€2.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "25 min",
              accessibilityText: "Delivered in 25 to 25 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.6",
            accessibilityText:
              "A top-rated restaurant with 4.6 out of 5 stars based on 70 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/tutti-frutti/gY2yD8jvWSKmD-YbVTFnVw",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/820883a48567670acbd720bc76391291.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "quick_eats",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "2.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "818db20f-c8ef-5922-a60f-e61b55316757",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0020204782485961914,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.04381087558526877,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.009965317993374091,
                  HmooScorePreSCR: -0.040206073692034515,
                  NetInflowPredictionScore: 24.61829948425293,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.0036048018932342525,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.24785603463061812,
                  UCBBanditPredictionScore: 0.38362210273887937,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0020204782485961914,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.01875901222229004,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.04381087558526877,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 24.61829948425293,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1874,
                  t120d_request_count: 117,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.38362210273887937,
                },
                total: -0.009965317993374091,
              },
              etdInfo: {
                dropoffETARange: {
                  min: 25,
                  max: 25,
                  raw: 25,
                },
              },
              fareInfo: {
                serviceFee: 2.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 229,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.564102564102565,
                ratingCount: "70",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3834,
            longitude: -6.2156,
            zIndex: 9997,
            description: {
              title: "Tutti Frutti",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.6",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
      ],
      header: {
        title: {
          text: "In a rush?",
          accessibilityText: "In a rush?",
        },
        subtitle: {
          text: "Here’s the fastest delivery for you",
          accessibilityText: "Here’s the fastest delivery for you",
        },
        callToAction: {
          text: "See all",
          actionUrl:
            "/search?plugin=recommendationFeedPlugin&recommType=quick_eats&title=In%20a%20rush%3F",
        },
      },
    },
    analyticsLabel: "quick_eats",
  },
  {
    uuid: "DIVIDER",
    type: "DIVIDER",
    dividerPayload: {
      height: 1,
    },
    verticalHeight: 14,
  },
  {
    uuid: "018ea6bf-8db1-70d0-ac55-cfb1849500ce",
    type: "REGULAR_CAROUSEL",
    carousel: {
      stores: [
        {
          storeUuid: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
          title: {
            text: "Mojo Health Bar",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€4.29 Delivery Fee",
              accessibilityText: "Delivery fee is €4.29.",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€4.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "55 min",
              accessibilityText: "Delivered in 55 to 55 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.7",
            accessibilityText:
              "A top-rated restaurant with 4.7 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl:
            "/store/mojo-health-bar-windmill-lane/DTWjOwttXUCU0-IhaXoJQw",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/820883a48567670acbd720bc76391291.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "HottestThisWeekSMB",
              analyticsLabel: "SMB_HOTTEST_THIS_WEEK_CAROUSEL",
              verticalType: "",
              category: "",
              subcategory: "",
              surfaceAreaV2: "",
              additionalTrackingData: {
                delivery_fee: "4.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0036623477935791016,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.0031018704175949097,
                  HmooScorePreSCR: 0.006203740835189819,
                  NetInflowPredictionScore: 25.189254760742188,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.006203740835189819,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5,
                  UCBBanditPredictionScore: 0.4000906861574453,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0036623477935791016,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.03124973177909851,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 25.189254760742188,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 996,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.4000906861574453,
                },
                total: 0.0031018704175949097,
              },
              etdInfo: {
                dropoffETASec: 3836,
                dropoffETARange: {
                  min: 55,
                  max: 55,
                  raw: 55,
                },
                minRangeDropoffETASec: 3300,
                maxRangeDropoffETASec: 3300,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 4.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 429,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.730337078651687,
                ratingCount: "210+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3457,
            longitude: -6.2452,
            zIndex: 9996,
            description: {
              title: "Mojo Health Bar",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.7",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "0557260b-292a-4889-9f40-fa4a81b94d19",
          title: {
            text: "Green Land Cafe",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€2.79 Delivery Fee",
              accessibilityText: "Delivery fee is €2.79.",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€2.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "35 min",
              accessibilityText: "Delivered in 35 to 35 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.5",
            accessibilityText:
              "Rated 4.5 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/green-land-cafe/BVcmCykqSImfQPpKgblNGQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/8a42ee7a692dfa4155879820804a277f.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fdf52d66534809b650058f41d517d74a.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "HottestThisWeekSMB",
              analyticsLabel: "SMB_HOTTEST_THIS_WEEK_CAROUSEL",
              verticalType: "",
              category: "",
              subcategory: "",
              surfaceAreaV2: "",
              additionalTrackingData: {
                delivery_fee: "2.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "0557260b-292a-4889-9f40-fa4a81b94d19",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.002704918384552002,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.002331770360469818,
                  HmooScorePreSCR: 0.004663540720939636,
                  NetInflowPredictionScore: 27.659788131713867,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.004663540720939636,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5,
                  UCBBanditPredictionScore: 0.29310270254627446,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.002704918384552002,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.02376037836074829,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 27.659788131713867,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 2485,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.29310270254627446,
                },
                total: 0.002331770360469818,
              },
              etdInfo: {
                dropoffETASec: 2799,
                dropoffETARange: {
                  min: 35,
                  max: 35,
                  raw: 35,
                },
                minRangeDropoffETASec: 2100,
                maxRangeDropoffETASec: 2100,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 2.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 279,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.457198443579769,
                ratingCount: "420+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3641,
            longitude: -6.2328,
            zIndex: 9995,
            description: {
              title: "Green Land Cafe",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.5",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
          title: {
            text: "Churros do Lulu Coffee Shop",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€4.29 Delivery Fee",
              accessibilityText: "Delivery fee is €4.29.",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€4.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "55 min",
              accessibilityText: "Delivered in 55 to 55 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.4",
            accessibilityText: "Rated 4.4 out of 5 stars based on 89 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl:
            "/store/churros-do-lulu-coffee-shop/_nxR0vTPS_OOAIf7mD6PCQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/df577d3a0807d3bb859f2fb53aefcd86.jpeg",
                width: 1080,
                height: 1080,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/4f48e715b6c05b9b00c3fc436b4eb65f.jpeg",
                width: 550,
                height: 550,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "HottestThisWeekSMB",
              analyticsLabel: "SMB_HOTTEST_THIS_WEEK_CAROUSEL",
              verticalType: "",
              category: "",
              subcategory: "",
              surfaceAreaV2: "",
              additionalTrackingData: {
                delivery_fee: "4.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0022014975547790527,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.0025038078427314756,
                  HmooScorePreSCR: 0.005007615685462951,
                  NetInflowPredictionScore: 27.602331161499023,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.005007615685462951,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5,
                  UCBBanditPredictionScore: 0.3910325553132659,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0022014975547790527,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.029438436031341553,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 27.602331161499023,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1295,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.3910325553132659,
                },
                total: 0.0025038078427314756,
              },
              etdInfo: {
                dropoffETASec: 3780,
                dropoffETARange: {
                  min: 55,
                  max: 55,
                  raw: 55,
                },
                minRangeDropoffETASec: 3300,
                maxRangeDropoffETASec: 3300,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 4.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 429,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.3517241379310345,
                ratingCount: "89",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3558,
            longitude: -6.2613,
            zIndex: 9994,
            description: {
              title: "Churros do Lulu Coffee Shop",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.4",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "818db20f-c8ef-5922-a60f-e61b55316757",
          title: {
            text: "Tutti Frutti",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€2.29 Delivery Fee",
              accessibilityText: "Delivery fee is €2.29.",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€2.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "25 min",
              accessibilityText: "Delivered in 25 to 25 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.6",
            accessibilityText:
              "A top-rated restaurant with 4.6 out of 5 stars based on 70 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/tutti-frutti/gY2yD8jvWSKmD-YbVTFnVw",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/820883a48567670acbd720bc76391291.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "HottestThisWeekSMB",
              analyticsLabel: "SMB_HOTTEST_THIS_WEEK_CAROUSEL",
              verticalType: "",
              category: "",
              subcategory: "",
              surfaceAreaV2: "",
              additionalTrackingData: {
                delivery_fee: "2.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "818db20f-c8ef-5922-a60f-e61b55316757",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0020204782485961914,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: 0,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: 0.0018024009466171263,
                  HmooScorePreSCR: 0.0036048018932342525,
                  NetInflowPredictionScore: 24.61829948425293,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.0036048018932342525,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5,
                  UCBBanditPredictionScore: 0.38362210273887937,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0020204782485961914,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.01875901222229004,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: 0,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 24.61829948425293,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1874,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.38362210273887937,
                },
                total: 0.0018024009466171263,
              },
              etdInfo: {
                dropoffETASec: 2129,
                dropoffETARange: {
                  min: 25,
                  max: 25,
                  raw: 25,
                },
                minRangeDropoffETASec: 1500,
                maxRangeDropoffETASec: 1500,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 2.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 229,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.564102564102565,
                ratingCount: "70",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3834,
            longitude: -6.2156,
            zIndex: 9993,
            description: {
              title: "Tutti Frutti",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.6",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
      ],
      header: {
        title: {
          text: "Top 10 local spots",
        },
        callToAction: {
          text: "See all",
          actionUrl:
            "ubereats://eatswebfeed?feed-path=by-id&feed-title=Top%2010%20local%20spots&id=HottestThisWeekMiniStoresSMB&serializedRequestContext=%7B%22value%22%3A%22DwABDAAAAAQLAAEAAAAQDTWjOwttXUCU0-IhaXoJQwsAAgAAABAAAAAAAAAAAAAAAAAAAAAAAAsAAQAAABAFVyYLKSpIiZ9A-kqBuU0ZCwACAAAAEAAAAAAAAAAAAAAAAAAAAAAACwABAAAAEIGNsg_I71kipg_mG1UxZ1cLAAIAAAAQAAAAAAAAAAAAAAAAAAAAAAALAAEAAAAQ_nxR0vTPS_OOAIf7mD6PCQsAAgAAABAAAAAAAAAAAAAAAAAAAAAAAAA%22%2C%22type%22%3A%22c282c472-346c-43d5-9479-ede33030fe84%22%2C%22format%22%3A%22FORMAT_THRIFT_BYTES%22%7D",
        },
      },
    },
    analyticsLabel: "SMB_HOTTEST_THIS_WEEK_CAROUSEL",
  },
  {
    uuid: "DIVIDER",
    type: "DIVIDER",
    dividerPayload: {
      height: 1,
    },
    verticalHeight: 14,
  },
  {
    uuid: "1335936a-75a6-4ab2-a6d5-be31506bb228",
    type: "REGULAR_CAROUSEL",
    carousel: {
      stores: [
        {
          storeUuid: "4c7c200c-98e1-4b03-a78d-f731047a1de2",
          title: {
            text: "Burger King Santry",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€3.79 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€3.79 Delivery Fee</span></span>',
              accessibilityText: "€3.79 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€3.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "35 min",
              accessibilityText: "Delivered in 35 to 35 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "3.7",
            accessibilityText:
              "Rated 3.7 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/burger-king-santry/THwgDJjhSwOnjfcxBHod4g",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "3.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "4c7c200c-98e1-4b03-a78d-f731047a1de2",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.007312655448913574,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.06423847826217982,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.008357200182707957,
                  HmooScorePreSCR: -0.05459471138214442,
                  NetInflowPredictionScore: 25.6352481842041,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.0096437668800354,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.15307710163005345,
                  UCBBanditPredictionScore: 0.13821549349172504,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.007312655448913574,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.039535731077194214,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.06423847826217982,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 25.6352481842041,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 5417,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.13821549349172504,
                },
                total: -0.008357200182707957,
              },
              etdInfo: {
                dropoffETASec: 2570,
                dropoffETARange: {
                  min: 35,
                  max: 35,
                  raw: 35,
                },
                minRangeDropoffETASec: 2100,
                maxRangeDropoffETASec: 2100,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 3.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 379,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 3.7343750000000018,
                ratingCount: "600+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.4121,
            longitude: -6.2394,
            zIndex: 9992,
            description: {
              title: "Burger King Santry",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "3.7",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "0e259e38-e5a1-5497-beb0-add5089381ed",
          title: {
            text: "Shi Wang Yun",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€3.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€3.29 Delivery Fee</span></span>',
              accessibilityText: "€3.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€3.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "50 min",
              accessibilityText: "Delivered in 50 to 50 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "3.9",
            accessibilityText:
              "Rated 3.9 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/shi-wang-yun/DiWeOOWhVJe-sK3VCJOB7Q",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "3.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "0e259e38-e5a1-5497-beb0-add5089381ed",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0044945478439331055,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.08200194193190928,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.036509575425292526,
                  HmooScorePreSCR: -0.07381025863952037,
                  NetInflowPredictionScore: 30.46647834777832,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.008191683292388917,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.49464093607367654,
                  UCBBanditPredictionScore: 0.13568252262248148,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0044945478439331055,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.04316946864128113,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.08200194193190928,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 30.46647834777832,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 6620,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.13568252262248148,
                },
                total: -0.036509575425292526,
              },
              etdInfo: {
                dropoffETASec: 3515,
                dropoffETARange: {
                  min: 50,
                  max: 50,
                  raw: 50,
                },
                minRangeDropoffETASec: 3000,
                maxRangeDropoffETASec: 3000,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 3.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 329,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 3.921703296703295,
                ratingCount: "320+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3539,
            longitude: -6.2586,
            zIndex: 9991,
            description: {
              title: "Shi Wang Yun",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "3.9",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "f53e9e91-f8d7-597e-85d7-40ccd762a8c1",
          title: {
            text: "Krispy Kreme",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€4.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
              accessibilityText: "€4.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€4.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "35 min",
              accessibilityText: "Delivered in 35 to 35 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.0",
            accessibilityText: "Rated 4.0 out of 5 stars based on 25 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/krispy-kreme-omni/9T6ekfjXWX6F10DM12KowQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/20fa9288fdc01be28055baedd768dc37.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/63d18745892c100be9e4ef3c560c9204.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "4.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "f53e9e91-f8d7-597e-85d7-40ccd762a8c1",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.0037636160850524902,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.06501909409620533,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.04620971879724031,
                  HmooScorePreSCR: -0.057980971084616285,
                  NetInflowPredictionScore: 31.56123924255371,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.007038123011589051,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.7969807668416378,
                  UCBBanditPredictionScore: 0.2890993483560896,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.0037636160850524902,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.03763750195503235,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.06501909409620533,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 31.56123924255371,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1689,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.2890993483560896,
                },
                total: -0.04620971879724031,
              },
              etdInfo: {
                dropoffETASec: 2571,
                dropoffETARange: {
                  min: 35,
                  max: 35,
                  raw: 35,
                },
                minRangeDropoffETASec: 2100,
                maxRangeDropoffETASec: 2100,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 4.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 429,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 3.9795918367346936,
                ratingCount: "25",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3923,
            longitude: -6.2483,
            zIndex: 9990,
            description: {
              title: "Krispy Kreme",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.0",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "ea690f07-4641-54e0-90bb-369e2ef51534",
          title: {
            text: "Chopped Fairview",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€3.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€3.29 Delivery Fee</span></span>',
              accessibilityText: "€3.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€3.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "35 min",
              accessibilityText: "Delivered in 35 to 35 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.5",
            accessibilityText:
              "Rated 4.5 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/chopped-fairview/6mkPB0ZBVOCQuzaeLvUVNA",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/820883a48567670acbd720bc76391291.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "3.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "ea690f07-4641-54e0-90bb-369e2ef51534",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.002947181463241577,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.06349535350988687,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.04689190774781213,
                  HmooScorePreSCR: -0.058494391192896976,
                  NetInflowPredictionScore: 25.68915557861328,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.005000962316989899,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.8016479322466433,
                  UCBBanditPredictionScore: 0.3387072676427143,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.002947181463241577,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.025219589471817017,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.06349535350988687,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 25.68915557861328,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1732,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.3387072676427143,
                },
                total: -0.04689190774781213,
              },
              etdInfo: {
                dropoffETASec: 2827,
                dropoffETARange: {
                  min: 35,
                  max: 35,
                  raw: 35,
                },
                minRangeDropoffETASec: 2100,
                maxRangeDropoffETASec: 2100,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 3.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 329,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.456140350877192,
                ratingCount: "140+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3633,
            longitude: -6.2354,
            zIndex: 9989,
            description: {
              title: "Chopped Fairview",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.5",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "0557260b-292a-4889-9f40-fa4a81b94d19",
          title: {
            text: "Green Land Cafe",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€2.79 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€2.79 Delivery Fee</span></span>',
              accessibilityText: "€2.79 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€2.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "35 min",
              accessibilityText: "Delivered in 35 to 35 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.5",
            accessibilityText:
              "Rated 4.5 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/green-land-cafe/BVcmCykqSImfQPpKgblNGQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/8a42ee7a692dfa4155879820804a277f.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fdf52d66534809b650058f41d517d74a.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "2.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "0557260b-292a-4889-9f40-fa4a81b94d19",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.002704918384552002,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.06155666760158356,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.024465524063453214,
                  HmooScorePreSCR: -0.05689312330436524,
                  NetInflowPredictionScore: 27.6597843170166,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.004663544297218322,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.430026032013891,
                  UCBBanditPredictionScore: 0.29310259016210033,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.002704918384552002,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.02376040816307068,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.06155666760158356,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 27.6597843170166,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 2485,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.29310259016210033,
                },
                total: -0.024465524063453214,
              },
              etdInfo: {
                dropoffETASec: 2799,
                dropoffETARange: {
                  min: 35,
                  max: 35,
                  raw: 35,
                },
                minRangeDropoffETASec: 2100,
                maxRangeDropoffETASec: 2100,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 2.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 279,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.457198443579769,
                ratingCount: "420+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3641,
            longitude: -6.2328,
            zIndex: 9988,
            description: {
              title: "Green Land Cafe",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.5",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
          title: {
            text: "Churros do Lulu Coffee Shop",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€4.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
              accessibilityText: "€4.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€4.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "55 min",
              accessibilityText: "Delivered in 55 to 55 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.4",
            accessibilityText: "Rated 4.4 out of 5 stars based on 89 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl:
            "/store/churros-do-lulu-coffee-shop/_nxR0vTPS_OOAIf7mD6PCQ",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/df577d3a0807d3bb859f2fb53aefcd86.jpeg",
                width: 1080,
                height: 1080,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/4f48e715b6c05b9b00c3fc436b4eb65f.jpeg",
                width: 550,
                height: 550,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "4.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.002201557159423828,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.08256551194281862,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.03207382433620385,
                  HmooScorePreSCR: -0.07755786347480105,
                  NetInflowPredictionScore: 27.602331161499023,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.005007648468017578,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.41354703313384594,
                  UCBBanditPredictionScore: 0.39103127536448684,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.002201557159423828,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.029438376426696777,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.08256551194281862,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 27.602331161499023,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 1295,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.39103127536448684,
                },
                total: -0.03207382433620385,
              },
              etdInfo: {
                dropoffETASec: 3780,
                dropoffETARange: {
                  min: 55,
                  max: 55,
                  raw: 55,
                },
                minRangeDropoffETASec: 3300,
                maxRangeDropoffETASec: 3300,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 4.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 429,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.3517241379310345,
                ratingCount: "89",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3558,
            longitude: -6.2613,
            zIndex: 9987,
            description: {
              title: "Churros do Lulu Coffee Shop",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.4",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
          title: {
            text: "Mojo Health Bar",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€4.29 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
              accessibilityText: "€4.29 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€4.29 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "55 min",
              accessibilityText: "Delivered in 55 to 55 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.7",
            accessibilityText:
              "A top-rated restaurant with 4.7 out of 5 stars based on more than 200 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl:
            "/store/mojo-health-bar-windmill-lane/DTWjOwttXUCU0-IhaXoJQw",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/820883a48567670acbd720bc76391291.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "4.29",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.003662288188934326,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.07953673324587758,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.04144604329698063,
                  HmooScorePreSCR: -0.07333303234579976,
                  NetInflowPredictionScore: 25.189252853393555,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.00620370090007782,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.5651756373791149,
                  UCBBanditPredictionScore: 0.40009197390816903,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.003662288188934326,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.03124973177909851,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.07953673324587758,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 25.189252853393555,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 996,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.40009197390816903,
                },
                total: -0.04144604329698063,
              },
              etdInfo: {
                dropoffETASec: 3836,
                dropoffETARange: {
                  min: 55,
                  max: 55,
                  raw: 55,
                },
                minRangeDropoffETASec: 3300,
                maxRangeDropoffETASec: 3300,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 4.29,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 429,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.730337078651687,
                ratingCount: "210+",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3457,
            longitude: -6.2452,
            zIndex: 9986,
            description: {
              title: "Mojo Health Bar",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.7",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
        {
          storeUuid: "5cd49e84-d9c5-56c7-8296-e2a9deab7034",
          title: {
            text: "Starbucks",
          },
          meta: [
            {
              textFormat:
                '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
              badgeType: "MembershipBenefit",
              badgeDataWithFallback: {
                membership: {
                  brandingType: "UBER_ONE",
                },
                type: "membership",
              },
            },
            {
              text: "€3.79 Delivery Fee",
              textFormat:
                '<span><span style="color:#3a3a48">€3.79 Delivery Fee</span></span>',
              accessibilityText: "€3.79 Delivery Fee",
              badgeType: "FARE",
              badgeData: {
                fare: {
                  isSurge: false,
                  deliveryFee: "€3.79 Delivery Fee",
                  serviceFee: "",
                },
                type: "fare",
              },
            },
            {
              text: "30 min",
              accessibilityText: "Delivered in 30 to 30 min",
              badgeType: "ETD",
            },
          ],
          rating: {
            text: "4.2",
            accessibilityText: "Rated 4.2 out of 5 stars based on 96 reviews.",
            badgeType: "RATINGS",
          },
          actionUrl: "/store/starbucks-east-wall/XNSehNnFVseCluKp3qtwNA",
          favorite: false,
          image: {
            items: [
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                width: 2880,
                height: 2304,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                width: 1080,
                height: 864,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                width: 750,
                height: 600,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/20fa9288fdc01be28055baedd768dc37.jpeg",
                width: 640,
                height: 512,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/63d18745892c100be9e4ef3c560c9204.jpeg",
                width: 550,
                height: 440,
              },
              {
                url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                width: 240,
                height: 192,
              },
            ],
          },
          signposts: null,
          tracking: {
            metaInfo: {
              pluginName: "recommendationFeedPlugin",
              analyticsLabel: "more_to_love_carousel",
              verticalType: "UNKNOWN",
              category: "",
              subcategory: "",
              surfaceAreaV2: "HOME_FEED",
              additionalTrackingData: {
                delivery_fee: "3.79",
                tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
              },
            },
            storePayload: {
              storeUUID: "5cd49e84-d9c5-56c7-8296-e2a9deab7034",
              isOrderable: true,
              score: {
                breakdown: {
                  ConversionRatePredictionScore: 0.003407776355743408,
                  ConversionRateScoreCoefficient: 0.67,
                  DistancePenaltyPredictionScore: -0.06556341534121389,
                  DistancePenaltyScoreCoefficient: 1,
                  FinalScore: -0.05475259377177528,
                  HmooScorePreSCR: -0.06054229205115194,
                  NetInflowPredictionScore: 19.79922866821289,
                  NetInflowScoreCoefficient: 0,
                  PredictionScore: 0.005021123290061951,
                  ServiceQualityPredictionScore: 0.949999988079071,
                  ServiceQualityScoreCoefficient: 0,
                  StoreCarouselRelevanceFactor: 1,
                  StoreCarouselRelevanceScore: 0.9043693576304483,
                  UCBBanditPredictionScore: 0.6758593288573188,
                  UCBBanditScoreCoefficient: 0,
                  conversion_rate_boosting_factor: 0.67,
                  conversion_rate_partial_score: 0.003407776355743408,
                  ctr_boosting_factor: 0.12,
                  ctr_partial_score: 0.022815942764282227,
                  distance_penalty_boosting_factor: 1,
                  distance_penalty_partial_score: -0.06556341534121389,
                  net_inflow_boosting_factor: 0,
                  net_inflow_partial_score: 19.79922866821289,
                  service_quality_boosting_factor: 0,
                  service_quality_partial_score: 0.949999988079071,
                  t120d_eyeball_count: 425,
                  ucb_bandit_boosting_factor: 0,
                  ucb_bandit_partial_score: 0.6758593288573188,
                },
                total: -0.05475259377177528,
              },
              etdInfo: {
                dropoffETASec: 2359,
                dropoffETARange: {
                  min: 30,
                  max: 30,
                  raw: 30,
                },
                minRangeDropoffETASec: 1800,
                maxRangeDropoffETASec: 1800,
                etdMode: "PREDICTION",
              },
              fareInfo: {
                serviceFee: 3.79,
                dynamicBookingFeeTier: 0,
                actualServiceFee: {
                  high: 0,
                  low: 379,
                  unsigned: false,
                },
              },
              ratingInfo: {
                storeRatingScore: 4.197115384615385,
                ratingCount: "96",
              },
              scheduleTimeSlots: null,
              isDBF: true,
              storeAvailablityState: "UNKNOWN",
            },
          },
          mapMarker: {
            latitude: 53.3565,
            longitude: -6.2324,
            zIndex: 9985,
            description: {
              title: "Starbucks",
              color: "CONTENT_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedColor: "CONTENT_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_PRIMARY",
            },
            markerContent: {
              color: "CONTENT_PRIMARY",
              selectedColor: "CONTENT_INVERSE_PRIMARY",
              backgroundColor: "BACKGROUND_PRIMARY",
              selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
              text: "4.2",
              size: "SPACING_UNIT_4X",
            },
          },
          meta2: null,
          storyIconPayload: {
            isIconVisible: false,
          },
          endorsements: null,
          meta4: null,
        },
      ],
      header: {
        title: {
          text: "Beyond your neighbourhood",
          accessibilityText: "Beyond your neighbourhood",
        },
        subtitle: {
          text: "Try spots from further away",
          accessibilityText: "Try spots from further away",
        },
        callToAction: {
          text: "See all",
          actionUrl:
            "/search?plugin=recommendationFeedPlugin&recommType=more_to_love_carousel&title=Beyond%20your%20neighbourhood",
        },
        endIcon:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/carousel_icons/carousel_icon_more_to_love.png",
      },
      carouselProductType: "CAROUSEL_PRODUCT_TYPE_REGULAR",
    },
    analyticsLabel: "more_to_love_carousel",
  },
  {
    uuid: "DIVIDER",
    type: "DIVIDER",
    dividerPayload: {
      height: 1,
    },
    verticalHeight: 14,
  },
  {
    uuid: "6ebb793b-d736-4b68-86bc-9b5956c2b8d9",
    type: "SECTION_HEADER",
    title: {
      text: "All stores",
    },
    richTextSectionTitle: {
      richTextElements: [
        {
          text: {
            text: {
              text: "All stores",
              font: {
                style: "HEADING_X_SMALL",
                weight: "BOLD",
              },
            },
            predefinedDecorations: null,
          },
          type: "text",
        },
      ],
    },
  },
  {
    uuid: "1be90df8-f676-4327-a37d-17da71233e34",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "1be90df8-f676-4327-a37d-17da71233e34",
      title: {
        text: "McDonald's®",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€1.79 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€1.79 Delivery Fee</span></span>',
          accessibilityText: "€1.79 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€1.79 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "10 min",
          accessibilityText: "Delivered in 10 to 10 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "3.9",
        accessibilityText:
          "Rated 3.9 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/mcdonalds-donaghmede-shopping-centre/G-kN-PZ2QyejfRfacSM-NA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/885ba8620d45ab36746a0e8c7b85ee66.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/b92d4926516c2635a39581f43cd533a0.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/66345bbe137cfe4e15769c434c6c397c.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/35927095c71455a8eb90d48f0168bf20.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/560a11f5d26e4cb83686f7810a5f5fe2.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/d6b82d51017ecbf20cd495bff2602679/08829600257ed8168dd856cafb7446c8.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "1.79",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "1be90df8-f676-4327-a37d-17da71233e34",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.055205345153808594,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: 0,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: 0.05630183935165405,
              NetInflowPredictionScore: 20.08181381225586,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.05630183935165405,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.07403996474190096,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.055205345153808594,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.1609521508216858,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: 0,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 20.08181381225586,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 3229,
              t120d_request_count: 2438,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.07403996474190096,
            },
            total: 0.05630183935165405,
          },
          etdInfo: {
            dropoffETARange: {
              min: 10,
              max: 10,
              raw: 10,
            },
          },
          fareInfo: {
            serviceFee: 1.79,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 179,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 3.934179534153359,
            ratingCount: "6,000+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3956,
        longitude: -6.1624,
        zIndex: 9984,
        description: {
          title: "McDonald's®",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "3.9",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "aeda0f0e-4b3c-470e-bc04-589b284de409",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "aeda0f0e-4b3c-470e-bc04-589b284de409",
      title: {
        text: "Subway",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€0.79 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€0.79 Delivery Fee</span></span>',
          accessibilityText: "€0.79 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€0.79 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "20 min",
          accessibilityText: "Delivered in 20 to 20 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.2",
        accessibilityText:
          "Rated 4.2 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/subway-grange-road/rtoPDks8Rw68BFibKE3kCQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/80f1ccf991ad8eab69073d35401d82f0/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "0.79",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "aeda0f0e-4b3c-470e-bc04-589b284de409",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.011594504117965698,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: 0,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: 0.013860898315906525,
              NetInflowPredictionScore: 20.249496459960938,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.013860898315906525,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.18473612077491855,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.011594504117965698,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.050771504640579224,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: 0,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 20.249496459960938,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 2103,
              t120d_request_count: 230,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.18473612077491855,
            },
            total: 0.013860898315906525,
          },
          etdInfo: {
            dropoffETARange: {
              min: 20,
              max: 20,
              raw: 20,
            },
          },
          fareInfo: {
            serviceFee: 0.79,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 79,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.172461752433937,
            ratingCount: "500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3971,
        longitude: -6.1454,
        zIndex: 9983,
        description: {
          title: "Subway",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.2",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "2d9ff24c-05ab-58ed-aadb-81a16584c1d5",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "2d9ff24c-05ab-58ed-aadb-81a16584c1d5",
      title: {
        text: "Abrakebabra Northside",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€2.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€2.29 Delivery Fee</span></span>',
          accessibilityText: "€2.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€2.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "35 min",
          accessibilityText: "Delivered in 35 to 35 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "3.9",
        accessibilityText:
          "Rated 3.9 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/abrakebabra-northside/LZ_yTAWrWO2q24GhZYTB1Q?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c14b8e3805bc83b31dcf74f964e319fe/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "2.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "2d9ff24c-05ab-58ed-aadb-81a16584c1d5",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.00693899393081665,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: 0,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: 0.008922131657600403,
              NetInflowPredictionScore: 23.562210083007812,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.008922131657600403,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.15599250039895787,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.00693899393081665,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.035608381032943726,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: 0,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 23.562210083007812,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 4595,
              t120d_request_count: 206,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.15599250039895787,
            },
            total: 0.008922131657600403,
          },
          etdInfo: {
            dropoffETARange: {
              min: 35,
              max: 35,
              raw: 35,
            },
          },
          fareInfo: {
            serviceFee: 2.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 229,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 3.9302949061662176,
            ratingCount: "230+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3956,
        longitude: -6.2133,
        zIndex: 9982,
        description: {
          title: "Abrakebabra Northside",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "3.9",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "e05420fb-cf68-4de1-b6ae-6d294c328d7c",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "e05420fb-cf68-4de1-b6ae-6d294c328d7c",
      title: {
        text: "Mace",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€0.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€0.29 Delivery Fee</span></span>',
          accessibilityText: "€0.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€0.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "15 min",
          accessibilityText: "Delivered in 15 to 15 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/mace-raheny/4FQg-89oTeG2rm0pTDKNfA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/64a11eeeed54a7b8890e888a6107b94b/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "0.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "e05420fb-cf68-4de1-b6ae-6d294c328d7c",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.003628641366958618,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: 0,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: 0.005371108949184418,
              NetInflowPredictionScore: 20.50722312927246,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.005371108949184418,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.21661183794440336,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.003628641366958618,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.024499326944351196,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: 0,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 20.50722312927246,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 3957,
              t120d_request_count: 80,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.21661183794440336,
            },
            total: 0.005371108949184418,
          },
          etdInfo: {
            dropoffETARange: {
              min: 15,
              max: 15,
              raw: 15,
            },
          },
          fareInfo: {
            serviceFee: 0.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 29,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.489169675090255,
            ratingCount: "500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3765,
        longitude: -6.1782,
        zIndex: 9981,
        description: {
          title: "Mace",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "70b52d72-3661-469f-a6ce-b7cf62e79e0b",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "70b52d72-3661-469f-a6ce-b7cf62e79e0b",
      title: {
        text: "Eddie Rocket's",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/eddie-rockets-clarehall/cLUtcjZhRp-mzrfPYueeCw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec2115fb65e2b19fb4aa5e9cf769d947/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "70b52d72-3661-469f-a6ce-b7cf62e79e0b",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.4021,
        longitude: -6.1791,
        zIndex: -10020,
        description: {
          title: "Eddie Rocket's",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "5ca59e44-2f05-46d3-9f56-2cb419af8bdd",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "5ca59e44-2f05-46d3-9f56-2cb419af8bdd",
      title: {
        text: "Fine Wines",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      actionUrl:
        "/store/fine-wines-malahide-road/XKWeRC8FRtOfViy0Ga-L3Q?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4ea72c9531c0f20506e1edda9e7be3c/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "5ca59e44-2f05-46d3-9f56-2cb419af8bdd",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.404,
        longitude: -6.1792,
        zIndex: -10021,
        description: {
          title: "Fine Wines",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 22 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 22 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "f5540ee7-4d41-5478-921e-28c4b83a15bf",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "f5540ee7-4d41-5478-921e-28c4b83a15bf",
      title: {
        text: "PK Spice",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl: "/store/pk-spice/9VQO501BVHiSHijEuDoVvw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/31b72b66799f6d8bc5f226e3c99a0946/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "f5540ee7-4d41-5478-921e-28c4b83a15bf",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3711,
        longitude: -6.2045,
        zIndex: -10022,
        description: {
          title: "PK Spice",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 19:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 19:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "d49859f5-24ab-4b69-9cc5-621e27a743c6",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "d49859f5-24ab-4b69-9cc5-621e27a743c6",
      title: {
        text: "Mr Burrito",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.4",
        accessibilityText:
          "Rated 4.4 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/mr-burrito/1JhZ9SSrS2mcxWIeJ6dDxg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/cc592037c936600295e9961933037e19.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/0c09274e3b12c8246a05970e1ef9d835.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/7835428b286acb57646a256c897c0e9e.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c1f5e323787ef7e8e3b71baad1462174/fa23f51b9c499b035a68831c96e1821e.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "d49859f5-24ab-4b69-9cc5-621e27a743c6",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1293,
              t120d_request_count: 147,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.363539445628998,
            ratingCount: "700+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3715,
        longitude: -6.253,
        zIndex: -10023,
        description: {
          title: "Mr Burrito",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "e53337b1-9c09-561e-8104-4c10fbd8efcf",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "e53337b1-9c09-561e-8104-4c10fbd8efcf",
      title: {
        text: "Karachi",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText: "Rated 4.2 out of 5 stars based on 94 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/karachi/5TM3sZwJVh6BBEwQ-9jvzw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/fb86662148be855d931b37d6c1e5fcbe.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/783282f6131ef2258e5bcd87c46aa87e.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/8a42ee7a692dfa4155879820804a277f.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/fdf52d66534809b650058f41d517d74a.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/9b3aae4cf90f897799a5ed357d60e09d.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b18a4b58dfd9d92c91800a15f96047cb/f6deb0afc24fee6f4bd31a35e6bcbd47.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "e53337b1-9c09-561e-8104-4c10fbd8efcf",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2505,
              t120d_request_count: 112,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.217391304347825,
            ratingCount: "94",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3883,
        longitude: -6.1403,
        zIndex: -10024,
        description: {
          title: "Karachi",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 15:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 15:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "5856e9a2-3132-4415-8e2a-04694f4ad886",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "5856e9a2-3132-4415-8e2a-04694f4ad886",
      title: {
        text: "KFC",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "3.8",
        accessibilityText:
          "Rated 3.8 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/kfc-northside-shopping-centre/WFbpojEyRBWOKgRpT0rYhg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f3cf57ecdf0f29900e35bf45e0de7a5/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "5856e9a2-3132-4415-8e2a-04694f4ad886",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 8880,
              t120d_request_count: 1982,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 3.779359430604984,
            ratingCount: "2,000+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3961,
        longitude: -6.2157,
        zIndex: -10025,
        description: {
          title: "KFC",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 52 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 52 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "2ee1976c-ee87-5126-aa01-35a446cfc202",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "2ee1976c-ee87-5126-aa01-35a446cfc202",
      title: {
        text: "Summer Inn Asian Food Beaumont",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.1",
        accessibilityText:
          "Rated 4.1 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/summer-inn-asian-food-beaumont-beaumont/LuGXbO6HUSaqATWkRs_CAg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/cc592037c936600295e9961933037e19.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/0c09274e3b12c8246a05970e1ef9d835.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/7835428b286acb57646a256c897c0e9e.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/495d647508591d6f291ce2b4bf776ba0/fa23f51b9c499b035a68831c96e1821e.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "2ee1976c-ee87-5126-aa01-35a446cfc202",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3345,
              t120d_request_count: 889,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.1201117318435765,
            ratingCount: "100+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3877,
        longitude: -6.2386,
        zIndex: -10026,
        description: {
          title: "Summer Inn Asian Food Beaumont",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "cfc38d87-5bad-5793-a03b-e096d3d18281",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "cfc38d87-5bad-5793-a03b-e096d3d18281",
      title: {
        text: "Le Petit Breton",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "2.7",
        accessibilityText: "Rated 2.7 out of 5 stars based on 12 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/le-petit-breton-no-6-shop/z8ONh1utV5OgO-CW09GCgQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/36f1934111a08365d61a07edb8a1f85f/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "cfc38d87-5bad-5793-a03b-e096d3d18281",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 2.6999999999999997,
            ratingCount: "12",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3621,
        longitude: -6.2594,
        zIndex: -10027,
        description: {
          title: "Le Petit Breton",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "6ac42adb-025c-5812-bd52-9d98015b809f",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "6ac42adb-025c-5812-bd52-9d98015b809f",
      title: {
        text: "Breakfast Company",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/breakfast-company/asQq2wJcWBK9Up2YAVuAnw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/9e31c708e4cf73b6e3ea1bd4a9b6e16b.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/c4114ef7f0cc2f8ee04dbb216969493e.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/a35eeeca6698a2d3899f60d36c88ed97.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/7a19de2b442cf39b430becc5fea2ef06.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/f8403c421bef668ad381b5e82e546060.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/8b3912aeb4ddaf35be933b04d2d337ad.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "6ac42adb-025c-5812-bd52-9d98015b809f",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.4022,
        longitude: -6.1955,
        zIndex: -10028,
        description: {
          title: "Breakfast Company",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c9da3d15-f7a4-5606-ada7-239fc2a6d004",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c9da3d15-f7a4-5606-ada7-239fc2a6d004",
      title: {
        text: "Nice Meet",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.4",
        accessibilityText: "Rated 4.4 out of 5 stars based on 95 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/nice-meet/ydo9FfekVgatpyOfwqbQBA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0e6b3eb18de432ca30c7f19757949f75/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c9da3d15-f7a4-5606-ada7-239fc2a6d004",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2648,
              t120d_request_count: 56,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.4324324324324325,
            ratingCount: "95",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3854,
        longitude: -6.1538,
        zIndex: -10029,
        description: {
          title: "Nice Meet",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 15:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 15:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "b1ac62b7-ea77-4657-aef6-4963098b51a9",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "b1ac62b7-ea77-4657-aef6-4963098b51a9",
      title: {
        text: "Taro Noodles & Sushi Bar",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/taro-noodles-%26-sushi-bar-raheny/saxit-p3Rleu9kljCYtRqQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bac75da155f24b50ad9269c89d9f148f/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "b1ac62b7-ea77-4657-aef6-4963098b51a9",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2219,
              t120d_request_count: 252,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.607999999999998,
            ratingCount: "600+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3853,
        longitude: -6.1541,
        zIndex: -10030,
        description: {
          title: "Taro Noodles & Sushi Bar",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 15:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 15:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "29dcec91-35ce-59a9-8a52-5af271176292",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "29dcec91-35ce-59a9-8a52-5af271176292",
      title: {
        text: "The Point Pizza & Burger Dublin 1",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText: "Rated 4.5 out of 5 stars based on 19 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/the-point-pizza-%26-burger-dublin-1/KdzskTXOWamKUlrycRdikg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/cc592037c936600295e9961933037e19.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/0c09274e3b12c8246a05970e1ef9d835.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/7835428b286acb57646a256c897c0e9e.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9624d1ace53efab0f75c3a28a7d15156/fa23f51b9c499b035a68831c96e1821e.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "29dcec91-35ce-59a9-8a52-5af271176292",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1538,
              t120d_request_count: 67,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.47741935483871,
            ratingCount: "19",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3594,
        longitude: -6.2592,
        zIndex: -10031,
        description: {
          title: "The Point Pizza & Burger Dublin 1",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "15ad49d0-2947-4db4-a81c-17b23cf6a522",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "15ad49d0-2947-4db4-a81c-17b23cf6a522",
      title: {
        text: "Hilan Chinese Restaurant",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/hilan-chinese-restaurant-parnell-st/Fa1J0ClHTbSoHBeyPPalIg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2700,
            height: 2160,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/40f8a3a45a4a3e2d86a8a0ebabdeef6c/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "15ad49d0-2947-4db4-a81c-17b23cf6a522",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 562,
              t120d_request_count: 12,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3536,
        longitude: -6.2586,
        zIndex: -10032,
        description: {
          title: "Hilan Chinese Restaurant",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "23ec95ad-289a-5dee-9e5e-1288236e1421",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "23ec95ad-289a-5dee-9e5e-1288236e1421",
      title: {
        text: "Mad House Burger",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on 24 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/mad-house-burger/I-yVrSiaXe6eXhKII24UIQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/6d70bdf8b58d9390ad7ec12533e9011a/aa13fff7e2466014ca51307be81e7738.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/6d70bdf8b58d9390ad7ec12533e9011a/61e8d264e9409914f90881b13f54d0ac.jpeg",
            width: 550,
            height: 440,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "23ec95ad-289a-5dee-9e5e-1288236e1421",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.59375,
            ratingCount: "24",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3756,
        longitude: -6.2398,
        zIndex: -10033,
        description: {
          title: "Mad House Burger",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "8c96ec11-1a2e-4502-a641-5f82e1b83a4d",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "8c96ec11-1a2e-4502-a641-5f82e1b83a4d",
      title: {
        text: "Brass Onion Bistro.",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/brass-onion-bistro/jJbsERouRQKmQV-C4bg6TQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7dd884faf10e94f67935f2a48e535ccc/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "8c96ec11-1a2e-4502-a641-5f82e1b83a4d",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3756,
        longitude: -6.24,
        zIndex: -10034,
        description: {
          title: "Brass Onion Bistro.",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "4054379f-42db-4475-ab72-6c6807b100c7",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "4054379f-42db-4475-ab72-6c6807b100c7",
      title: {
        text: "Hamburger Bar",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.4",
        accessibilityText:
          "Rated 4.4 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/hamburger-bar/QFQ3n0LbRHWrcmxoB7EAxw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/802225ee7c86baba601827e582b33485/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "4054379f-42db-4475-ab72-6c6807b100c7",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3101,
              t120d_request_count: 369,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.356807511737087,
            ratingCount: "700+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3867,
        longitude: -6.1472,
        zIndex: -10035,
        description: {
          title: "Hamburger Bar",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "fabe8857-28c1-50c0-8562-001664d09b8c",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "fabe8857-28c1-50c0-8562-001664d09b8c",
      title: {
        text: "Papa Johns",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "3.9",
        accessibilityText:
          "Rated 3.9 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/papa-johns-clonshaugh/-r6IVyjBUMCFYgAWZNCbjA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/536d073f890146119d9c266fc23a3725/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "20% off (spend €35)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "fabe8857-28c1-50c0-8562-001664d09b8c",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 6367,
              t120d_request_count: 346,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 3.922705314009662,
            ratingCount: "240+",
          },
          promotionUUID: "485ddee9-04c4-4364-8b9f-4689218e6c48",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "0e56838f-65ce-4c54-9733-6eb1aa72e4f6",
            promotionUUIDs: ["485ddee9-04c4-4364-8b9f-4689218e6c48"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.4125,
        longitude: -6.2168,
        zIndex: -10036,
        description: {
          title: "Papa Johns",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 52 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 52 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c276a524-29dc-5c24-a90d-c087e46c0834",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c276a524-29dc-5c24-a90d-c087e46c0834",
      title: {
        text: "Indian Curry Club",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/indian-curry-club/wnalJCncXCSpDcCH5GwINA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/237eb2d2cb2542798bd8a67db1639f01/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c276a524-29dc-5c24-a90d-c087e46c0834",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3571,
              t120d_request_count: 411,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.4674556213017755,
            ratingCount: "500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3884,
        longitude: -6.167,
        zIndex: -10037,
        description: {
          title: "Indian Curry Club",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "2d7bc733-38e0-4e45-b604-5b2167661950",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "2d7bc733-38e0-4e45-b604-5b2167661950",
      title: {
        text: "Yoko",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl: "/store/yoko/LXvHMzjgTkW2BFshZ2YZUA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/885ba8620d45ab36746a0e8c7b85ee66.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/b92d4926516c2635a39581f43cd533a0.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/66345bbe137cfe4e15769c434c6c397c.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/35927095c71455a8eb90d48f0168bf20.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/560a11f5d26e4cb83686f7810a5f5fe2.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f945fcfa4ef36dab12671073c1156e75/08829600257ed8168dd856cafb7446c8.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          iconUrl:
            "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
          text: " Top offer • 20% off (spend €20)",
          textColor: {
            color: "#FFFFFF",
          },
          textFormat:
            '<span><img src="https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png" width="10" height="11" vertical-align="middle"/> Top offer • 20% off (spend €20)</span>',
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "2d7bc733-38e0-4e45-b604-5b2167661950",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 38,
              t120d_request_count: 1,
            },
            total: 0,
          },
          promotionUUID: "9097a4f6-667b-4379-a3af-811e1d61208d",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "a3797771-a5ab-42da-9577-cdb513fdf53d",
            promotionUUIDs: ["9097a4f6-667b-4379-a3af-811e1d61208d"],
            offerTypeCount: 1,
            concatSignpost:
              "offer_quality.top_offer,store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3728,
        longitude: -6.2223,
        zIndex: -10038,
        description: {
          title: "Yoko",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "ffbff5ab-fdb3-423c-bab9-80c208a36ec6",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "ffbff5ab-fdb3-423c-bab9-80c208a36ec6",
      title: {
        text: "Pizza Hut",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/pizza-hut-kilbarack/_7_1q_2zQjy6uYDCCKNuxg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/599a57e32898beb5798206e125427757/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "ffbff5ab-fdb3-423c-bab9-80c208a36ec6",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1331,
              t120d_request_count: 279,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.451910408432149,
            ratingCount: "500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3858,
        longitude: -6.1485,
        zIndex: -10039,
        description: {
          title: "Pizza Hut",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "79de6d92-a9bf-569c-a7fc-46f3e3d47f18",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "79de6d92-a9bf-569c-a7fc-46f3e3d47f18",
      title: {
        text: "Panda Restaurant",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "A top-rated restaurant with 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/panda-restaurant-coolock/ed5tkqm_Vpyn_Ebz49R_GA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f9514ac99effa00774299f5335cb72e4/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "79de6d92-a9bf-569c-a7fc-46f3e3d47f18",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 143,
              t120d_request_count: 4,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.539772727272726,
            ratingCount: "160+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3873,
        longitude: -6.2006,
        zIndex: -10040,
        description: {
          title: "Panda Restaurant",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "804d7ada-25e0-51f9-8daf-e88e581e67c7",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "804d7ada-25e0-51f9-8daf-e88e581e67c7",
      title: {
        text: "Pizza Italiya",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/pizza-italiya-dublin/gE162iXgUfmNr-iOWB5nxw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/885ba8620d45ab36746a0e8c7b85ee66.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/b92d4926516c2635a39581f43cd533a0.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/66345bbe137cfe4e15769c434c6c397c.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/35927095c71455a8eb90d48f0168bf20.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/560a11f5d26e4cb83686f7810a5f5fe2.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/bb203e6dea2998249e7283c6a6ea1499/08829600257ed8168dd856cafb7446c8.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "804d7ada-25e0-51f9-8daf-e88e581e67c7",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 4,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.4067,
        longitude: -6.2039,
        zIndex: -10041,
        description: {
          title: "Pizza Italiya",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "270154b4-7ff3-48c5-83be-2baf53de17fb",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "270154b4-7ff3-48c5-83be-2baf53de17fb",
      title: {
        text: "Mr Yummy",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.8",
        accessibilityText:
          "A top-rated restaurant with 4.8 out of 5 stars based on 12 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/mr-yummy/JwFUtH_zSMWDviuvU94X-w?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/33f3a70fce167046f5edb5610b2edab6/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "10% off (spend €25)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "270154b4-7ff3-48c5-83be-2baf53de17fb",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1000,
              t120d_request_count: 54,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.833333333333333,
            ratingCount: "12",
          },
          promotionUUID: "7f1c135b-b028-4942-8ab4-3a74398badad",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "c7531387-9459-4786-858f-aea371e036d1",
            promotionUUIDs: ["7f1c135b-b028-4942-8ab4-3a74398badad"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3502,
        longitude: -6.258,
        zIndex: -10042,
        description: {
          title: "Mr Yummy",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "994dacb6-8f8d-5ba5-ade1-7217b51447c9",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "994dacb6-8f8d-5ba5-ade1-7217b51447c9",
      title: {
        text: "Burger King",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/burger-king-omni-park-shopping-centre/mU2sto-NW6Wt4XIXtRRHyQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7b184eb02a5a1217479ed63fdef7ca3a/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "994dacb6-8f8d-5ba5-ade1-7217b51447c9",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3919,
        longitude: -6.2487,
        zIndex: -10043,
        description: {
          title: "Burger King",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "15c329d0-d100-439d-a6cc-f1cdf8aa69eb",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "15c329d0-d100-439d-a6cc-f1cdf8aa69eb",
      title: {
        text: "Asian Express",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.3",
        accessibilityText:
          "Rated 4.3 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/asian-express/FcMp0NEAQ52mzPHN-Kpp6w?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6e3a1d37493001398433afa2530160d/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "15c329d0-d100-439d-a6cc-f1cdf8aa69eb",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3155,
              t120d_request_count: 352,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.258652094717672,
            ratingCount: "430+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3855,
        longitude: -6.1541,
        zIndex: -10044,
        description: {
          title: "Asian Express",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 15:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 15:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c13f9989-591f-479d-99f9-afbf47882186",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c13f9989-591f-479d-99f9-afbf47882186",
      title: {
        text: "The Indian Grill",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on 60 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/the-indian-grill/wT-ZiVkfR52Z-a-_R4ghhg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/311b9bc2363af521e8faf1f8529588d9/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c13f9989-591f-479d-99f9-afbf47882186",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.573529411764706,
            ratingCount: "60",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3776,
        longitude: -6.1779,
        zIndex: -10045,
        description: {
          title: "The Indian Grill",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "9ddec70d-057a-5cae-beea-5afbcd3880c7",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "9ddec70d-057a-5cae-beea-5afbcd3880c7",
      title: {
        text: "Domino's Pizza",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "3.6",
        accessibilityText: "Rated 3.6 out of 5 stars based on 30 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/dominos-pizza-dublin-raheny/nd7HDQV6XK6-6lr7zTiAxw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/25bb3033ef6effe2f07b49ac9fcbaa9a/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "9ddec70d-057a-5cae-beea-5afbcd3880c7",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3907,
              t120d_request_count: 181,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 3.6410256410256423,
            ratingCount: "30",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3854,
        longitude: -6.1542,
        zIndex: -10046,
        description: {
          title: "Domino's Pizza",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 11:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 11:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "449fc923-853c-4286-ab41-3bdbc05c4bf7",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "449fc923-853c-4286-ab41-3bdbc05c4bf7",
      title: {
        text: "Leo Burdock's",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/leo-burdocks-clarehall/RJ_JI4U8QoarQTvbwFxL9w?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/939cd3878bba808eb56b61039d9b7b27/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "449fc923-853c-4286-ab41-3bdbc05c4bf7",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.4,
        longitude: -6.1711,
        zIndex: -10047,
        description: {
          title: "Leo Burdock's",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "dd9e953f-7323-427e-81f7-14203ccbbfa7",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "dd9e953f-7323-427e-81f7-14203ccbbfa7",
      title: {
        text: "Benvindo",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/benvindo/3Z6VP3MjQn6B9xQgPMu_pw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2880,
            height: 2340,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 877,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 609,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 520,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 446,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c90852292ecccc994f4c69067d7d1087/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 195,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "dd9e953f-7323-427e-81f7-14203ccbbfa7",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3707,
              t120d_request_count: 377,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.450867052023114,
            ratingCount: "2,000+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3523,
        longitude: -6.2495,
        zIndex: -10048,
        description: {
          title: "Benvindo",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 36 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 36 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "18874b65-7ca1-5fab-91c0-86da1409a43a",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "18874b65-7ca1-5fab-91c0-86da1409a43a",
      title: {
        text: "The Juice Yard",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Currently unavailable",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.8",
        accessibilityText:
          "A top-rated restaurant with 4.8 out of 5 stars based on 15 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/the-juice-yard/GIdLZXyhX6uRwIbaFAmkOg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/50446f64f31cbefe66558fc47f50a9d6.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/f3376a06b92224efbe50167fb7cb61e4.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/84d75b3d20951825f71f50c1b56eab8a/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "18874b65-7ca1-5fab-91c0-86da1409a43a",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.782608695652175,
            ratingCount: "15",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3717,
        longitude: -6.2527,
        zIndex: -10049,
        description: {
          title: "The Juice Yard",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "b537bdc9-09cf-5102-882a-6300433c304f",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "b537bdc9-09cf-5102-882a-6300433c304f",
      title: {
        text: "Moksha",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/moksha-coolock/tTe9yQnPUQKIKmMAQzwwTw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/52fe743313c4615edcfb6cf8d8f1e4bc/4eed3468b168fc6e31dff0bb81a347bc.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/52fe743313c4615edcfb6cf8d8f1e4bc/e08b0b609562fdad757d8c76c3b20f19.jpeg",
            width: 550,
            height: 440,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "15% off (spend €25)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "b537bdc9-09cf-5102-882a-6300433c304f",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1106,
              t120d_request_count: 15,
            },
            total: 0,
          },
          promotionUUID: "8ab1d03d-3503-4dd9-9180-bd6ddc745257",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "6860bb73-e91a-46d2-a116-8405c2bcccca",
            promotionUUIDs: ["8ab1d03d-3503-4dd9-9180-bd6ddc745257"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3872,
        longitude: -6.2007,
        zIndex: -10050,
        description: {
          title: "Moksha",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "0a687edd-2607-5f08-8b15-bf8dbeddea9f",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "0a687edd-2607-5f08-8b15-bf8dbeddea9f",
      title: {
        text: "Base Wood Fired Pizza",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "A top-rated restaurant with 4.5 out of 5 stars based on 28 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/base-wood-fired-pizza-killester/Cmh-3SYHXwiLFb-Nvt3qnw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/50446f64f31cbefe66558fc47f50a9d6.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/f3376a06b92224efbe50167fb7cb61e4.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/186efd2863d2d8ebd3fa3ee8ec6908a9/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "0a687edd-2607-5f08-8b15-bf8dbeddea9f",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2856,
              t120d_request_count: 180,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.514705882352941,
            ratingCount: "28",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3709,
        longitude: -6.2047,
        zIndex: -10051,
        description: {
          title: "Base Wood Fired Pizza",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "ab860a24-3969-41df-b228-5dab7951e278",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "ab860a24-3969-41df-b228-5dab7951e278",
      title: {
        text: "Boojum",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText:
          "Rated 4.2 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/boojum-abbey-street/q4YKJDlpQd-yKF2reVHieA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ba2649c7a9eb011fccfa8a861a18b88a/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "ab860a24-3969-41df-b228-5dab7951e278",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2992,
              t120d_request_count: 546,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.182708933717577,
            ratingCount: "1,000+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3487,
        longitude: -6.2589,
        zIndex: -10052,
        description: {
          title: "Boojum",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 11:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 11:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "b5cd0883-fe41-55d0-989e-c50eca846a58",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "b5cd0883-fe41-55d0-989e-c50eca846a58",
      title: {
        text: "Roosters Piri Piri",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/roosters-piri-piri-drumcondra/tc0Ig_5BVdCYnsUOyoRqWA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ec430f32fcf7f232f4bb14d2491d3c2a/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "b5cd0883-fe41-55d0-989e-c50eca846a58",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3676,
        longitude: -6.251,
        zIndex: -10053,
        description: {
          title: "Roosters Piri Piri",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "5608d918-5896-5898-a08a-054e9f1dea4f",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "5608d918-5896-5898-a08a-054e9f1dea4f",
      title: {
        text: "Go Burger",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl: "/store/go-burger/VgjZGFiWWJigigVOnx3qTw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/9e31c708e4cf73b6e3ea1bd4a9b6e16b.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/c4114ef7f0cc2f8ee04dbb216969493e.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/a35eeeca6698a2d3899f60d36c88ed97.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/7a19de2b442cf39b430becc5fea2ef06.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/f8403c421bef668ad381b5e82e546060.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4f25ee16279249516bd1795254b2365a/8b3912aeb4ddaf35be933b04d2d337ad.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "5608d918-5896-5898-a08a-054e9f1dea4f",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.4022,
        longitude: -6.1955,
        zIndex: -10054,
        description: {
          title: "Go Burger",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "393915e3-8bac-433f-9222-913a6d26d6de",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "393915e3-8bac-433f-9222-913a6d26d6de",
      title: {
        text: "Pacinos",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.3",
        accessibilityText:
          "Rated 4.3 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/pacinos-suffolk-st/OTkV44usQz-SIpE6bSbW3g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/fdd3acbab31b78a5399f4e395e709c6c/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "393915e3-8bac-433f-9222-913a6d26d6de",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 542,
              t120d_request_count: 13,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.287769784172661,
            ratingCount: "100+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3434,
        longitude: -6.2598,
        zIndex: -10055,
        description: {
          title: "Pacinos",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "d6f08f12-dd7d-4364-8562-d47f765549de",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "d6f08f12-dd7d-4364-8562-d47f765549de",
      title: {
        text: "Raheny Chinese Takeaway",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/raheny-chinese-takeaway/1vCPEt19Q2SFYtR_dlVJ3g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a647f353a06ff7834d24c0634d4bbbbb/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "d6f08f12-dd7d-4364-8562-d47f765549de",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2402,
              t120d_request_count: 1255,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.585389453313969,
            ratingCount: "1,500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.38,
        longitude: -6.1768,
        zIndex: -10056,
        description: {
          title: "Raheny Chinese Takeaway",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "45bf3124-a6ce-54a9-9d1e-03f9a2bc5ca6",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "45bf3124-a6ce-54a9-9d1e-03f9a2bc5ca6",
      title: {
        text: "Il Capo Italian Pizza & Pasta",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText:
          "Rated 4.2 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/il-capo-italian-pizza-%26-pasta/Rb8xJKbOVKmdHgP5orxcpg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/210f91c93d3051b295a9b300efcb3d29/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "15% off (spend €20)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "45bf3124-a6ce-54a9-9d1e-03f9a2bc5ca6",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 6253,
              t120d_request_count: 914,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.244718309859154,
            ratingCount: "600+",
          },
          promotionUUID: "e012ade6-e402-4764-a1c3-3a79ec683b81",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "cc652d34-0914-4245-9946-4a29aa97b720",
            promotionUUIDs: ["e012ade6-e402-4764-a1c3-3a79ec683b81"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3513,
        longitude: -6.2518,
        zIndex: -10057,
        description: {
          title: "Il Capo Italian Pizza & Pasta",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "e403ae81-1760-5aca-99e0-9139f8c41946",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "e403ae81-1760-5aca-99e0-9139f8c41946",
      title: {
        text: "Omni Wok & Bar ",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText:
          "Rated 4.2 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/omni-wok-%26-bar/5AOugRdgWsqZ4JE5-MQZRg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/16bb0a3ab8ea98cfe8906135767f7bf4.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/d24a30ada2fef6c54cef8739d94823b0.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/e0131c83be09a5694ebe179208a3825d.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/1d4135bf27b924efdd528452baa17174.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/69ad85cd7b39888042b3bbf1c22d630d.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a114957dfadd26889118ca4fec0f0da4/ec1689ae3a25695f1b8e25c59bec5034.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "e403ae81-1760-5aca-99e0-9139f8c41946",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 3042,
              t120d_request_count: 195,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.170658682634731,
            ratingCount: "130+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3929,
        longitude: -6.2502,
        zIndex: -10058,
        description: {
          title: "Omni Wok & Bar ",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "8c63c213-5ecd-5f99-89cd-733099b06517",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "8c63c213-5ecd-5f99-89cd-733099b06517",
      title: {
        text: "Supermacs",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/supermacs-connolly/jGPCE17NX5mJzXMwmbBlFw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a9bc52a2815495fd337609879a895306/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "8c63c213-5ecd-5f99-89cd-733099b06517",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.351,
        longitude: -6.2525,
        zIndex: -10059,
        description: {
          title: "Supermacs",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 52 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 52 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "80bd4631-c1d3-56b7-9577-dc97c5118888",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "80bd4631-c1d3-56b7-9577-dc97c5118888",
      title: {
        text: "Sweet 'N' Spice",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/sweet-n-spice/gL1GMcHTVreVd9yXxRGIiA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/885ba8620d45ab36746a0e8c7b85ee66.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/b92d4926516c2635a39581f43cd533a0.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/66345bbe137cfe4e15769c434c6c397c.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/35927095c71455a8eb90d48f0168bf20.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/560a11f5d26e4cb83686f7810a5f5fe2.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2f7ebbe1fb208c070a7c412761ad6ee8/08829600257ed8168dd856cafb7446c8.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "80bd4631-c1d3-56b7-9577-dc97c5118888",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 53,
              t120d_request_count: 0,
            },
            total: 0,
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3475,
        longitude: -6.2415,
        zIndex: -10060,
        description: {
          title: "Sweet 'N' Spice",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "74aa5ef5-7491-40d3-989a-1a5b56fe6637",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "74aa5ef5-7491-40d3-989a-1a5b56fe6637",
      title: {
        text: "Bell Pepper Coolock",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.5",
        accessibilityText:
          "A top-rated restaurant with 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/bell-pepper-coolock/dKpe9XSRQNOYmhpbVv5mNw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9a1330ca50471c65da4ec637e59f4691/0e8f477e8f858732b95bd74b5e07a538.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9a1330ca50471c65da4ec637e59f4691/891233042e9ada9873fc6d9c4e835eac.jpeg",
            width: 550,
            height: 440,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "15% off (spend €20)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "74aa5ef5-7491-40d3-989a-1a5b56fe6637",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 4175,
              t120d_request_count: 260,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.514124293785308,
            ratingCount: "700+",
          },
          promotionUUID: "886eb5d2-9a06-4fc5-a6bb-e869a05018af",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "8c02cf5b-c72a-48f1-afc7-b824396c2071",
            promotionUUIDs: ["886eb5d2-9a06-4fc5-a6bb-e869a05018af"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3874,
        longitude: -6.2012,
        zIndex: -10061,
        description: {
          title: "Bell Pepper Coolock",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 11:50",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 11:50</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c8301e6a-a31e-5d4e-aa90-6187ad29d1f6",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c8301e6a-a31e-5d4e-aa90-6187ad29d1f6",
      title: {
        text: "Curry and Kebab House",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "3.5",
        accessibilityText: "Rated 3.5 out of 5 stars based on 24 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/curry-and-kebab-house/yDAeaqMeXU6qkGGHrSnR9g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            width: 2878,
            height: 2303,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/50446f64f31cbefe66558fc47f50a9d6.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/f3376a06b92224efbe50167fb7cb61e4.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/3b5301509aa00b2e2c6a37aaac4bf635/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c8301e6a-a31e-5d4e-aa90-6187ad29d1f6",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 3.468750000000001,
            ratingCount: "24",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.4024,
        longitude: -6.1879,
        zIndex: -10062,
        description: {
          title: "Curry and Kebab House",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "d2705914-d26f-5217-a58c-221afb58973c",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "d2705914-d26f-5217-a58c-221afb58973c",
      title: {
        text: "Bites IFSC",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl: "/store/bites-ifsc/0nBZFNJvUheljCIa-1iXPA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/eb86e12bc746513f677297a8c19f96a0/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "15% off (spend €20)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "d2705914-d26f-5217-a58c-221afb58973c",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 216,
              t120d_request_count: 8,
            },
            total: 0,
          },
          promotionUUID: "609f2cb0-cdc8-4e55-9774-3266a29c503d",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "28f2f3b0-7675-4033-86c5-f17c9bfd2595",
            promotionUUIDs: ["609f2cb0-cdc8-4e55-9774-3266a29c503d"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3496,
        longitude: -6.2438,
        zIndex: -10063,
        description: {
          title: "Bites IFSC",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 52 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 52 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "4e0e7b69-73a3-415d-9076-6f955a0ae3ec",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "4e0e7b69-73a3-415d-9076-6f955a0ae3ec",
      title: {
        text: "WOWBURGER",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.1",
        accessibilityText:
          "Rated 4.1 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/wowburger-artane/Tg57aXOjQV2Qdm-VWgrj7A?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/52234976bc369c4011d0bfafed526687/df577d3a0807d3bb859f2fb53aefcd86.jpeg",
            width: 1800,
            height: 1012,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/52234976bc369c4011d0bfafed526687/4f48e715b6c05b9b00c3fc436b4eb65f.jpeg",
            width: 550,
            height: 309,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "4e0e7b69-73a3-415d-9076-6f955a0ae3ec",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 6325,
              t120d_request_count: 606,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.055153707052435,
            ratingCount: "1,500+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3822,
        longitude: -6.2085,
        zIndex: -10064,
        description: {
          title: "WOWBURGER",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c8440da8-757d-5329-8ac2-2d1cacd79275",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c8440da8-757d-5329-8ac2-2d1cacd79275",
      title: {
        text: "Supermac's",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText:
          "Rated 4.2 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/supermacs-clonshaugh/yEQNqHV9UymKwi0crNeSdQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/b1c0d233c8478a452bbc892057c6a76a/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "20% off (spend €35)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c8440da8-757d-5329-8ac2-2d1cacd79275",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 7542,
              t120d_request_count: 872,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.226769911504426,
            ratingCount: "460+",
          },
          promotionUUID: "29fc2b04-02d2-4558-920e-10351a242d81",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "d142fc9e-5796-42fd-aefb-925cea5d3320",
            promotionUUIDs: ["29fc2b04-02d2-4558-920e-10351a242d81"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.4125,
        longitude: -6.2168,
        zIndex: -10065,
        description: {
          title: "Supermac's",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available in 52 min",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available in 52 min</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "cbad4f85-9846-5832-88dd-29188c17968e",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "cbad4f85-9846-5832-88dd-29188c17968e",
      title: {
        text: "Lee Kee",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.3",
        accessibilityText: "Rated 4.3 out of 5 stars based on 29 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/lee-kee/y61PhZhGWDKI3SkYjBeWjg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/9b70057bc6c09ef04a8516ceb94ea1db/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "cbad4f85-9846-5832-88dd-29188c17968e",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2457,
              t120d_request_count: 96,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.337662337662339,
            ratingCount: "29",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3536,
        longitude: -6.259,
        zIndex: -10066,
        description: {
          title: "Lee Kee",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "d17f30fd-3733-5108-8daa-db12bcf2b3ce",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "d17f30fd-3733-5108-8daa-db12bcf2b3ce",
      title: {
        text: "Saaep Thai",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.7",
        accessibilityText:
          "A top-rated restaurant with 4.7 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl: "/store/saaep-thai/0X8w_TczUQiNqtsSvPKzzg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/39c96b93b9421731b4caf1238d82759b/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "d17f30fd-3733-5108-8daa-db12bcf2b3ce",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 0,
              t120d_request_count: 0,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.650349650349654,
            ratingCount: "270+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3851,
        longitude: -6.2135,
        zIndex: -10067,
        description: {
          title: "Saaep Thai",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 15:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 15:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "93e16a32-cf1f-5db8-a13e-8f7fc9a5fde0",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "93e16a32-cf1f-5db8-a13e-8f7fc9a5fde0",
      title: {
        text: "Namaste India",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/namaste-india/k-FqMs8fXbihPo9_yaX94A?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2880,
            height: 1920,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 720,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 500,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 426,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 366,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/475daf655b2edd284f835800fd2c5d7b/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 160,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          text: "20% off (spend €25)",
          textColor: {
            color: "#FFFFFF",
          },
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "93e16a32-cf1f-5db8-a13e-8f7fc9a5fde0",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1351,
              t120d_request_count: 83,
            },
            total: 0,
          },
          promotionUUID: "84552994-c7a4-4249-886b-45d9d11eed1b",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "28035fab-216c-446b-9699-f428101e7c67",
            promotionUUIDs: ["84552994-c7a4-4249-886b-45d9d11eed1b"],
            offerTypeCount: 1,
            concatSignpost: "store.promotion.percent.badge",
          },
        },
      },
      mapMarker: {
        latitude: 53.3804,
        longitude: -6.1988,
        zIndex: -10068,
        description: {
          title: "Namaste India",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "bb1b5579-3ee8-48b3-8a82-85120e9c300a",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "bb1b5579-3ee8-48b3-8a82-85120e9c300a",
      title: {
        text: "Hasu Japanese & Thai",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/hasu-japanese-%26-thai/uxtVeT7oSLOKgoUSDpwwCg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/68a2155c48a644be552fc0760bb828f2/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "bb1b5579-3ee8-48b3-8a82-85120e9c300a",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 4843,
              t120d_request_count: 376,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.606650446066497,
            ratingCount: "1,000+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3657,
        longitude: -6.2289,
        zIndex: -10069,
        description: {
          title: "Hasu Japanese & Thai",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:30",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:30</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c00d2fc5-5dcb-40d9-bc6a-fa501963fcb0",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c00d2fc5-5dcb-40d9-bc6a-fa501963fcb0",
      title: {
        text: "Asian Delights",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.1",
        accessibilityText: "Rated 4.1 out of 5 stars based on 11 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/asian-delights/wA0vxV3LQNm8avpQGWP8sA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
            width: 2880,
            height: 1920,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/c4114ef7f0cc2f8ee04dbb216969493e.jpeg",
            width: 1080,
            height: 720,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/a35eeeca6698a2d3899f60d36c88ed97.jpeg",
            width: 750,
            height: 500,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/7a19de2b442cf39b430becc5fea2ef06.jpeg",
            width: 640,
            height: 426,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/f8403c421bef668ad381b5e82e546060.jpeg",
            width: 550,
            height: 366,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/0f61d026a2328b7d89591f1e0bcb254b/8b3912aeb4ddaf35be933b04d2d337ad.jpeg",
            width: 240,
            height: 160,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c00d2fc5-5dcb-40d9-bc6a-fa501963fcb0",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1074,
              t120d_request_count: 64,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.059701492537314,
            ratingCount: "11",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3919,
        longitude: -6.2348,
        zIndex: -10070,
        description: {
          title: "Asian Delights",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 16:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 16:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "86a73f8c-b002-5c29-b152-ed3ddb109e37",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "86a73f8c-b002-5c29-b152-ed3ddb109e37",
      title: {
        text: "Apache Pizza Clarehall",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      actionUrl:
        "/store/apache-pizza-clarehall-%7C-northern-cross/hqc_jLACXCmxUu092xCeNw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/885ba8620d45ab36746a0e8c7b85ee66.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/b92d4926516c2635a39581f43cd533a0.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/66345bbe137cfe4e15769c434c6c397c.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/35927095c71455a8eb90d48f0168bf20.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/560a11f5d26e4cb83686f7810a5f5fe2.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/4931cf79685b2e4093d5d573e8afbffc/08829600257ed8168dd856cafb7446c8.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: [
        {
          backgroundColor: {
            color: "#DE1135",
          },
          iconUrl:
            "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
          text: " Top offer • 2 Offers available",
          textColor: {
            color: "#FFFFFF",
          },
          textFormat:
            '<span><img src="https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png" width="10" height="11" vertical-align="middle"/> Top offer • 2 Offers available</span>',
        },
      ],
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "86a73f8c-b002-5c29-b152-ed3ddb109e37",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 415,
              t120d_request_count: 34,
            },
            total: 0,
          },
          promotionUUID: "f35e0fbd-3e57-4f25-8400-57cda0a457ca",
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
          offerMetadata: {
            analyticsUUID: "1d55dffe-502e-49c4-9a7b-d6a16be2a026",
            promotionUUIDs: [
              "f35e0fbd-3e57-4f25-8400-57cda0a457ca",
              "5e92e732-94a8-4994-b98d-9b57e283452a",
            ],
            offerTypeCount: 2,
            concatSignpost:
              "offer_quality.top_offer,concurrent_offer.signpost.num.of.offers.available",
          },
        },
      },
      mapMarker: {
        latitude: 53.4012,
        longitude: -6.1799,
        zIndex: -10071,
        description: {
          title: "Apache Pizza Clarehall | Northern Cross",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 12:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 12:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
      promotionConfiguration: {
        regularPromotionConfiguration: {},
      },
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "ca114c45-69ef-4927-b3cd-c974cad24cee",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "ca114c45-69ef-4927-b3cd-c974cad24cee",
      title: {
        text: "Fratelli's Pizza",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.3",
        accessibilityText: "Rated 4.3 out of 5 stars based on 21 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/fratellis-pizza/yhFMRWnvSSezzcl0ytJM7g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/fb86662148be855d931b37d6c1e5fcbe.webp",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/783282f6131ef2258e5bcd87c46aa87e.webp",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/8a42ee7a692dfa4155879820804a277f.webp",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/fdf52d66534809b650058f41d517d74a.webp",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/9b3aae4cf90f897799a5ed357d60e09d.webp",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3ec5449a3e8655c4db0b2ff0394844/f6deb0afc24fee6f4bd31a35e6bcbd47.webp",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "ca114c45-69ef-4927-b3cd-c974cad24cee",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 1639,
              t120d_request_count: 101,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.2991452991453,
            ratingCount: "21",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3971,
        longitude: -6.1825,
        zIndex: -10072,
        description: {
          title: "Fratelli's Pizza",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "c42d953f-f1f4-43f5-b330-138c18836448",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "c42d953f-f1f4-43f5-b330-138c18836448",
      title: {
        text: "Box 55 Restaurant",
      },
      meta: [
        {
          text: "Closed",
          badgeType: "CLOSED",
        },
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
      ],
      imageOverlay: {
        backgroundColor: {
          alpha: 0.5,
          color: "#000000",
        },
        iconColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/restaurant_closed.png",
        text: "Closed",
        textColor: {
          alpha: 1,
          color: "#FFFFFF",
        },
        badgeType: "StoreNotOrderable",
      },
      rating: {
        text: "4.2",
        accessibilityText: "Rated 4.2 out of 5 stars based on 15 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/box-55-restaurant-coolock/xC2VP_H0Q_WzMBOMGINkSA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/f937e488bd2310a11bce7cdca1569324/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "c42d953f-f1f4-43f5-b330-138c18836448",
          isOrderable: false,
          score: {
            breakdown: {
              t120d_eyeball_count: 2762,
              t120d_request_count: 68,
            },
            total: 0,
          },
          ratingInfo: {
            storeRatingScore: 4.181818181818181,
            ratingCount: "15",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "STORE_CLOSED",
        },
      },
      mapMarker: {
        latitude: 53.3874,
        longitude: -6.2009,
        zIndex: -10073,
        description: {
          title: "Box 55 Restaurant",
          color: "CONTENT_INVERSE_TERTIARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_INVERSE_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "CIRCLE_SMALL",
          size: "SPACING_UNIT_2X",
        },
      },
      meta2: [
        {
          text: "Available at 17:00",
          textFormat:
            '<span style="font-family:S2;color:#048848;">Available at 17:00</span>',
        },
      ],
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "818db20f-c8ef-5922-a60f-e61b55316757",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "818db20f-c8ef-5922-a60f-e61b55316757",
      title: {
        text: "Tutti Frutti",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€2.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€2.29 Delivery Fee</span></span>',
          accessibilityText: "€2.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€2.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "25 min",
          accessibilityText: "Delivered in 25 to 25 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.6",
        accessibilityText:
          "A top-rated restaurant with 4.6 out of 5 stars based on 70 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/tutti-frutti/gY2yD8jvWSKmD-YbVTFnVw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/8323860c033056d1a7e784e96e208bb2/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "2.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "818db20f-c8ef-5922-a60f-e61b55316757",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0020204782485961914,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.04381087558526877,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.040206073692034515,
              NetInflowPredictionScore: 24.61829948425293,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.0036048018932342525,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.38362210273887937,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0020204782485961914,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.01875901222229004,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.04381087558526877,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 24.61829948425293,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 1874,
              t120d_request_count: 117,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.38362210273887937,
            },
            total: -0.040206073692034515,
          },
          etdInfo: {
            dropoffETARange: {
              min: 25,
              max: 25,
              raw: 25,
            },
          },
          fareInfo: {
            serviceFee: 2.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 229,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.564102564102565,
            ratingCount: "70",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3834,
        longitude: -6.2156,
        zIndex: 9926,
        description: {
          title: "Tutti Frutti",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.6",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "4c7c200c-98e1-4b03-a78d-f731047a1de2",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "4c7c200c-98e1-4b03-a78d-f731047a1de2",
      title: {
        text: "Burger King Santry",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€3.79 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€3.79 Delivery Fee</span></span>',
          accessibilityText: "€3.79 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€3.79 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "35 min",
          accessibilityText: "Delivered in 35 to 35 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "3.7",
        accessibilityText:
          "Rated 3.7 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/burger-king-santry/THwgDJjhSwOnjfcxBHod4g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/50446f64f31cbefe66558fc47f50a9d6.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/f3376a06b92224efbe50167fb7cb61e4.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/a4cdc401e2a233709ea0ae31af99ac61/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "3.79",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "4c7c200c-98e1-4b03-a78d-f731047a1de2",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.007312655448913574,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.06423847826217982,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.054594707805865735,
              NetInflowPredictionScore: 25.63525390625,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.009643770456314087,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.13821546786392874,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.007312655448913574,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.0395357608795166,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.06423847826217982,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 25.63525390625,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 5417,
              t120d_request_count: 918,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.13821546786392874,
            },
            total: -0.054594707805865735,
          },
          etdInfo: {
            dropoffETARange: {
              min: 35,
              max: 35,
              raw: 35,
            },
          },
          fareInfo: {
            serviceFee: 3.79,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 379,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 3.7343750000000018,
            ratingCount: "600+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.4121,
        longitude: -6.2394,
        zIndex: 9925,
        description: {
          title: "Burger King Santry",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "3.7",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "0557260b-292a-4889-9f40-fa4a81b94d19",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "0557260b-292a-4889-9f40-fa4a81b94d19",
      title: {
        text: "Green Land Cafe",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€2.79 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€2.79 Delivery Fee</span></span>',
          accessibilityText: "€2.79 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€2.79 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "35 min",
          accessibilityText: "Delivered in 35 to 35 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/green-land-cafe/BVcmCykqSImfQPpKgblNGQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fb86662148be855d931b37d6c1e5fcbe.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/783282f6131ef2258e5bcd87c46aa87e.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/8a42ee7a692dfa4155879820804a277f.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/fdf52d66534809b650058f41d517d74a.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/532744752ef1f851ceb916ee2dd84557/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "2.79",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "0557260b-292a-4889-9f40-fa4a81b94d19",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.002704918384552002,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.06155666760158356,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.05689312688064393,
              NetInflowPredictionScore: 27.6597843170166,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.004663540720939636,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.29310270254627446,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.002704918384552002,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.02376037836074829,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.06155666760158356,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 27.6597843170166,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 2485,
              t120d_request_count: 152,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.29310270254627446,
            },
            total: -0.05689312688064393,
          },
          etdInfo: {
            dropoffETARange: {
              min: 35,
              max: 35,
              raw: 35,
            },
          },
          fareInfo: {
            serviceFee: 2.79,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 279,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.457198443579769,
            ratingCount: "420+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3641,
        longitude: -6.2328,
        zIndex: 9924,
        description: {
          title: "Green Land Cafe",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "f53e9e91-f8d7-597e-85d7-40ccd762a8c1",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "f53e9e91-f8d7-597e-85d7-40ccd762a8c1",
      title: {
        text: "Krispy Kreme",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€4.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
          accessibilityText: "€4.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€4.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "35 min",
          accessibilityText: "Delivered in 35 to 35 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.0",
        accessibilityText: "Rated 4.0 out of 5 stars based on 25 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/krispy-kreme-omni/9T6ekfjXWX6F10DM12KowQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/2b3d25007f1a86ab623f3b5fcd9ac061/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "f53e9e91-f8d7-597e-85d7-40ccd762a8c1",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0037636756896972656,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.06501909409620533,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.057980938302061656,
              NetInflowPredictionScore: 31.56122398376465,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.007038155794143677,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.2890986750670567,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0037636756896972656,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.03763744235038757,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.06501909409620533,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 31.56122398376465,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 1689,
              t120d_request_count: 37,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.2890986750670567,
            },
            total: -0.057980938302061656,
          },
          etdInfo: {
            dropoffETARange: {
              min: 35,
              max: 35,
              raw: 35,
            },
          },
          fareInfo: {
            serviceFee: 4.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 429,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 3.9795918367346936,
            ratingCount: "25",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3923,
        longitude: -6.2483,
        zIndex: 9923,
        description: {
          title: "Krispy Kreme",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.0",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "ea690f07-4641-54e0-90bb-369e2ef51534",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "ea690f07-4641-54e0-90bb-369e2ef51534",
      title: {
        text: "Chopped Fairview",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€3.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€3.29 Delivery Fee</span></span>',
          accessibilityText: "€3.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€3.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "35 min",
          accessibilityText: "Delivered in 35 to 35 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "Rated 4.5 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/chopped-fairview/6mkPB0ZBVOCQuzaeLvUVNA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/732b50aa5b96f3732f55784f8eba8d13/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "3.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "ea690f07-4641-54e0-90bb-369e2ef51534",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.002947181463241577,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.06349535350988687,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.058494391192896976,
              NetInflowPredictionScore: 25.68916130065918,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.005000962316989899,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.3387072676427143,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.002947181463241577,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.025219589471817017,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.06349535350988687,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 25.68916130065918,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 1732,
              t120d_request_count: 93,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.3387072676427143,
            },
            total: -0.058494391192896976,
          },
          etdInfo: {
            dropoffETARange: {
              min: 35,
              max: 35,
              raw: 35,
            },
          },
          fareInfo: {
            serviceFee: 3.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 329,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.456140350877192,
            ratingCount: "140+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3633,
        longitude: -6.2354,
        zIndex: 9922,
        description: {
          title: "Chopped Fairview",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "5cd49e84-d9c5-56c7-8296-e2a9deab7034",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "5cd49e84-d9c5-56c7-8296-e2a9deab7034",
      title: {
        text: "Starbucks",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€3.79 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€3.79 Delivery Fee</span></span>',
          accessibilityText: "€3.79 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€3.79 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "30 min",
          accessibilityText: "Delivered in 30 to 30 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.2",
        accessibilityText: "Rated 4.2 out of 5 stars based on 96 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/starbucks-east-wall/XNSehNnFVseCluKp3qtwNA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/20fa9288fdc01be28055baedd768dc37.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/63d18745892c100be9e4ef3c560c9204.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/951de4502522c90fc0781d8f1fa81a83/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "3.79",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "5cd49e84-d9c5-56c7-8296-e2a9deab7034",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0034077465534210205,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.06556341534121389,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.060542322747544,
              NetInflowPredictionScore: 19.799226760864258,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.0050210925936698915,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.6758613947832942,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0034077465534210205,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.022815853357315063,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.06556341534121389,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 19.799226760864258,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 425,
              t120d_request_count: 16,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.6758613947832942,
            },
            total: -0.060542322747544,
          },
          etdInfo: {
            dropoffETARange: {
              min: 30,
              max: 30,
              raw: 30,
            },
          },
          fareInfo: {
            serviceFee: 3.79,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 379,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.197115384615385,
            ratingCount: "96",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3565,
        longitude: -6.2324,
        zIndex: 9921,
        description: {
          title: "Starbucks",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.2",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
      title: {
        text: "Mojo Health Bar",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€4.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
          accessibilityText: "€4.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€4.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "55 min",
          accessibilityText: "Delivered in 55 to 55 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.7",
        accessibilityText:
          "A top-rated restaurant with 4.7 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/mojo-health-bar-windmill-lane/DTWjOwttXUCU0-IhaXoJQw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/646c8870038919cf0e6feef2670e6c62/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "0d35a33b-0b6d-5d40-94d3-e221697a0943",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0036623477935791016,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.07953673324587758,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.07333299598696645,
              NetInflowPredictionScore: 25.189254760742188,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.006203737258911133,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.40009080147789866,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0036623477935791016,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.031249701976776123,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.07953673324587758,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 25.189254760742188,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 996,
              t120d_request_count: 94,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.40009080147789866,
            },
            total: -0.07333299598696645,
          },
          etdInfo: {
            dropoffETARange: {
              min: 55,
              max: 55,
              raw: 55,
            },
          },
          fareInfo: {
            serviceFee: 4.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 429,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.730337078651687,
            ratingCount: "210+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3457,
        longitude: -6.2452,
        zIndex: 9920,
        description: {
          title: "Mojo Health Bar",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.7",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "0e259e38-e5a1-5497-beb0-add5089381ed",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "0e259e38-e5a1-5497-beb0-add5089381ed",
      title: {
        text: "Shi Wang Yun",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€3.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€3.29 Delivery Fee</span></span>',
          accessibilityText: "€3.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€3.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "50 min",
          accessibilityText: "Delivered in 50 to 50 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "3.9",
        accessibilityText:
          "Rated 3.9 out of 5 stars based on more than 200 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/shi-wang-yun/DiWeOOWhVJe-sK3VCJOB7Q?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/50446f64f31cbefe66558fc47f50a9d6.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/f3376a06b92224efbe50167fb7cb61e4.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c6794cfa1ec53d585e008a977fa5a3ea/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "3.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "0e259e38-e5a1-5497-beb0-add5089381ed",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0044945478439331055,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.08200194193190928,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.07381025863952037,
              NetInflowPredictionScore: 30.466474533081055,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.008191683292388917,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.13568252262248148,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0044945478439331055,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.04316946864128113,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.08200194193190928,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 30.466474533081055,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 6620,
              t120d_request_count: 391,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.13568252262248148,
            },
            total: -0.07381025863952037,
          },
          etdInfo: {
            dropoffETARange: {
              min: 50,
              max: 50,
              raw: 50,
            },
          },
          fareInfo: {
            serviceFee: 3.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 329,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 3.921703296703295,
            ratingCount: "320+",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3539,
        longitude: -6.2586,
        zIndex: 9919,
        description: {
          title: "Shi Wang Yun",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "3.9",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
      title: {
        text: "Churros do Lulu Coffee Shop",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#9F6402"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "€4.29 Delivery Fee",
          textFormat:
            '<span><span style="color:#3a3a48">€4.29 Delivery Fee</span></span>',
          accessibilityText: "€4.29 Delivery Fee",
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "€4.29 Delivery Fee",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "55 min",
          accessibilityText: "Delivered in 55 to 55 min",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.4",
        accessibilityText: "Rated 4.4 out of 5 stars based on 89 reviews.",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/churros-do-lulu-coffee-shop/_nxR0vTPS_OOAIf7mD6PCQ?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/df577d3a0807d3bb859f2fb53aefcd86.jpeg",
            width: 1080,
            height: 1080,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ee5b806300ae4844d8af38f1626a2617/4f48e715b6c05b9b00c3fc436b4eb65f.jpeg",
            width: 550,
            height: 550,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            delivery_fee: "4.29",
            tracingID: "0747fad6-9393-4424-bcba-a624c5ffbe12",
          },
        },
        storePayload: {
          storeUUID: "fe7c51d2-f4cf-4bf3-8e00-87fb983e8f09",
          isOrderable: true,
          score: {
            breakdown: {
              ConversionRatePredictionScore: 0.0022014975547790527,
              ConversionRateScoreCoefficient: 0.67,
              DistancePenaltyPredictionScore: -0.08256551194281862,
              DistancePenaltyScoreCoefficient: 1,
              FinalScore: -0.07755790340991305,
              NetInflowPredictionScore: 27.60234260559082,
              NetInflowScoreCoefficient: 0,
              PredictionScore: 0.005007608532905578,
              ServiceQualityPredictionScore: 0.949999988079071,
              ServiceQualityScoreCoefficient: 0,
              UCBBanditPredictionScore: 0.391032834576488,
              UCBBanditScoreCoefficient: 0,
              conversion_rate_boosting_factor: 0.67,
              conversion_rate_partial_score: 0.0022014975547790527,
              ctr_boosting_factor: 0.12,
              ctr_partial_score: 0.029438376426696777,
              distance_penalty_boosting_factor: 1,
              distance_penalty_partial_score: -0.08256551194281862,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 27.60234260559082,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.949999988079071,
              t120d_eyeball_count: 1295,
              t120d_request_count: 49,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.391032834576488,
            },
            total: -0.07755790340991305,
          },
          etdInfo: {
            dropoffETARange: {
              min: 55,
              max: 55,
              raw: 55,
            },
          },
          fareInfo: {
            serviceFee: 4.29,
            dynamicBookingFeeTier: 0,
            actualServiceFee: {
              high: 0,
              low: 429,
              unsigned: false,
            },
          },
          ratingInfo: {
            storeRatingScore: 4.3517241379310345,
            ratingCount: "89",
          },
          scheduleTimeSlots: null,
          isDBF: true,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 53.3558,
        longitude: -6.2613,
        zIndex: 9918,
        description: {
          title: "Churros do Lulu Coffee Shop",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.4",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
];
