import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX - (transpiled before it reaches the JS Engine) => PARCEL - Babel
// JSX - HTML like or XML Structured syntax code

// JSX code => React.createElement => ReactElement-JS Object => HTMLElement 

// React Element
// React Element is a JSX element.

// React Components are of Two Types
// Class Based Components - Old
// Functional Components - New

// React Functional Components
// Is a functional Components which return the piece of JSX code.
// ComponentComposition

const resObj = [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "63149",
          "name": "Paradise Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/4edc6c90-e763-480a-9626-dd1bed373250_63149.jpg",
          "locality": "Siripuram",
          "areaName": "Waltair Uplands",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Hyderabadi"
          ],
          "avgRating": 4.3,
          "parentId": "700",
          "avgRatingString": "4.3",
          "totalRatingsString": "35K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:59:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹79",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "12K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=63149&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "575146",
          "name": "Veg Darbar by Behrouz Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/dcc2c4f0-1496-4a36-aab8-ad072adeb1ca_575146.JPG",
          "locality": "Potluri Castle",
          "areaName": "Dwaraka Nagar",
          "costForTwo": "₹700 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.9,
          "veg": true,
          "parentId": "344904",
          "avgRatingString": "3.9",
          "totalRatingsString": "182",
          "promoted": true,
          "adTrackingId": "cid=34027163~p=4~adgrpid=34027163#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=575146~plpr=COLLECTION~eid=b5d3d5d0-f01a-413e-b025-79eefb52e6e4~srvts=1761217892214~collid=83639",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {},
              "textBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34027163"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=575146&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "70356",
          "name": "Bombay Restaurant-Dabagarden",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/8/9de74dc1-2166-4572-96e9-82d96bc3d741_79dc4081-c061-49e9-89a8-043b85d1f55d.jpeg",
          "locality": "Daba Gardens",
          "areaName": "Dabagarden",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Indian",
            "Chinese",
            "Tandoor",
            "Biryani"
          ],
          "avgRating": 4.1,
          "parentId": "12841",
          "avgRatingString": "4.1",
          "totalRatingsString": "27K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-45 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:30:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=70356&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "1141739",
          "name": "Spicy Biryani House",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/6/ad64e599-5680-46b4-92b8-23514fdb2051_cc50f637-3133-4cbd-ad44-b843ef5dc821.jpeg",
          "locality": "Opp Chaitanya College",
          "areaName": "Dwarka Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Chinese",
            "Biryani"
          ],
          "avgRating": 3.7,
          "parentId": "255889",
          "avgRatingString": "3.7",
          "totalRatingsString": "47",
          "promoted": true,
          "adTrackingId": "cid=33183109~p=11~adgrpid=33183109#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1141739~plpr=COLLECTION~eid=bd58164f-04a1-4ad8-9975-bbba7393fc50~srvts=1761217892214~collid=83639",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "33183109"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=1141739&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "426319",
          "name": "Hotel Muntaj",
          "cloudinaryImageId": "d70274527073d501a9edfe1022a703df",
          "locality": "Isukatotha Junction",
          "areaName": "Mvp Colony",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor"
          ],
          "avgRating": 4.2,
          "parentId": "237293",
          "avgRatingString": "4.2",
          "totalRatingsString": "30K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=426319&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "63726",
          "name": "Zeeshan Restaurant - Apna Hyderabadi Food (Jagadamba)",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/17/1eb410a1-8047-4df7-b0f7-42ab9a3f3b17_d8d5863e-34e7-413f-9d96-a159404d39ae.jpg",
          "locality": "Dwarka Nagar",
          "areaName": "Jagadamba Junction",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Mughlai",
            "Chinese",
            "Kebabs",
            "Juices"
          ],
          "avgRating": 4.2,
          "parentId": "229816",
          "avgRatingString": "4.2",
          "totalRatingsString": "44K+",
          "promoted": true,
          "adTrackingId": "cid=34105543~p=14~adgrpid=34105543#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63726~plpr=COLLECTION~eid=2fd34a09-d533-421c-88dc-7ba869604099~srvts=1761217892214~collid=83639",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 17:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.8",
              "ratingCount": "7.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34105543"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=63726&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "107157",
          "name": "Eaters Stop",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/10/f23fe090-3fb7-49c9-9632-861fb10e4fb1_701a674b-0500-4b68-8f93-bdbd46dfe617.JPG",
          "locality": "Gajapati Nagar",
          "areaName": "Seethammadara",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Biryani",
            "South Indian",
            "Tandoor",
            "Chinese",
            "Lebanese"
          ],
          "avgRating": 4.5,
          "parentId": "12347",
          "avgRatingString": "4.5",
          "totalRatingsString": "88K+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-50 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "4.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=107157&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "1095504",
          "name": "Sri Harivindhu",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/14/5aa23b00-a4d4-422a-9101-a8e05f2cf940_dc814338-0f03-4ba0-a87b-91f6115b4116.jpg",
          "locality": "Dwarka Nagar",
          "areaName": "Dwarka Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Andhra",
            "Biryani",
            "South Indian",
            "Indian"
          ],
          "avgRating": 4.4,
          "parentId": "636485",
          "avgRatingString": "4.4",
          "totalRatingsString": "52",
          "promoted": true,
          "adTrackingId": "cid=31817819~p=15~adgrpid=31817819#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1095504~plpr=COLLECTION~eid=1444aeeb-3848-4d95-ac02-86f72d54bb49~srvts=1761217892215~collid=83639",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "40-50 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:59:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "15% OFF",
            "subHeader": "UPTO ₹80",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "31817819"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=1095504&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "67848",
          "name": "Satyam Restaurant",
          "cloudinaryImageId": "73e07d77b8d136c2f129988c1058808f",
          "locality": "Dwarka Nagar",
          "areaName": "Dwaraka Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "178966",
          "avgRatingString": "4.4",
          "totalRatingsString": "36K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-45 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 22:45:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.8",
              "ratingCount": "4.4K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=67848&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "289993",
          "name": "Kebab Chef Restaurant",
          "cloudinaryImageId": "vgkjqwgcbw8zcwguaktl",
          "locality": "Madhavadhara",
          "areaName": "Madhavadhara",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "Indian",
            "Chinese",
            "Tandoor"
          ],
          "avgRating": 4.5,
          "parentId": "12663",
          "avgRatingString": "4.5",
          "totalRatingsString": "16K+",
          "promoted": true,
          "adTrackingId": "cid=34105740~p=16~adgrpid=34105740#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=289993~plpr=COLLECTION~eid=ef72b8b6-661c-4b59-b715-e267b155f578~srvts=1761217892215~collid=83639",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 9,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 22:45:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "2.9K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34105740"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=289993&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "63773",
          "name": "The Spicy Venue",
          "cloudinaryImageId": "wy9l1vsxbovklubw7fde",
          "locality": "Siripuram",
          "areaName": "Siripuram",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Andhra",
            "Kebabs",
            "Mughlai",
            "Tandoor"
          ],
          "avgRating": 4.6,
          "parentId": "6227",
          "avgRatingString": "4.6",
          "totalRatingsString": "44K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 0.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              }
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.1",
              "ratingCount": "7.2K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=63773&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "664664",
          "name": "Studio Grill",
          "cloudinaryImageId": "9ed55100e3aa4d38ca519cd3d6c3fbe9",
          "locality": "Musalaihpalem",
          "areaName": "Sagar Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Fast Food",
            "Pizzas",
            "Thai",
            "Grill",
            "Biryani",
            "Thalis",
            "Beverages",
            "Chinese",
            "Italian",
            "Desserts"
          ],
          "avgRating": 4,
          "parentId": "398525",
          "avgRatingString": "4.0",
          "totalRatingsString": "142",
          "promoted": true,
          "adTrackingId": "cid=34063156~p=17~adgrpid=34063156#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=664664~plpr=COLLECTION~eid=36526582-5538-41b1-a522-3ac054815e4b~srvts=1761217892215~collid=83639",
          "sla": {
            "deliveryTime": 63,
            "lastMileTravel": 8.6,
            "serviceability": "SERVICEABLE",
            "slaString": "60-70 mins",
            "lastMileTravelString": "8.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 22:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹749",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34063156"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=664664&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "724208",
          "name": "Chickpet Donne Biryani House",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/13/bb6b43ca-65c5-4af5-b92d-826101f3fae9_4bc00c35-ce3a-44a6-9e12-7180900e0d33.jpg_compressed",
          "locality": "dondaparthy",
          "areaName": "Dwarka Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Indian"
          ],
          "avgRating": 3.7,
          "parentId": "5634",
          "avgRatingString": "3.7",
          "totalRatingsString": "4.8K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-45 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-10-23 23:59:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=724208&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo,restaurant-logo,fast-food-logo-design-template-504748a7becbf5f6d0cfcebef63ed349_screen.jpg?ts=1737612145" />
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((item,index) => (
          <RestaurantCard
            key={index}
            resturantData={item}
          />
        ))}
      </div>

    </div>
  )
}

function RestaurantCard(props) {
  const {id,cloudinaryImageId,name,cuisines,avgRating,sla}=props?.resturantData?.card?.card?.info
  return (
    <div key={id} className="cardContainer" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-img"
        alt="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
