export const sortAndFilters = [
  {
    uuid: "33e0f7cc-8927-4dac-a92e-19a296aab097",
    type: "dealsFilter",
    label: "Offers",
    maxPermitted: 1,
    minPermitted: 0,
    options: [
      {
        uuid: "g996476c-2b1b-4db2-b40a-13d43cb117dc",
        value: "DEALS",
        isDefault: false,
        label: "Offers",
        iconUrl:
          "https://cn-geo1.uber.com/static/mobile-content/eats/sort-and-filters-icons/tag.png",
      },
    ],
    selected: false,
  },
  {
    uuid: "2c7cf7ef-730f-431f-9072-27bc39f7c021",
    type: "bookingFeeFilter",
    label: "Delivery Fee",
    maxPermitted: 4,
    minPermitted: 1,
    options: [
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c022",
        value: "3",
        isDefault: false,
        label: "€3",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c023",
        value: "5",
        isDefault: false,
        label: "€5",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c024",
        value: "7",
        isDefault: false,
        label: "€7",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c025",
        value: "7+",
        isDefault: false,
        label: "€7+",
      },
    ],
  },
  {
    uuid: "cc5cdb95-a6e6-4371-8d10-a07c2175e509",
    type: "deliveryTime",
    label: "Delivery time",
    maxPermitted: 1,
    minPermitted: 0,
    options: [
      {
        uuid: "cc5cdb95-a6e6-4371-8d10-a07c2175e510",
        value: "Under 30 mins",
        isDefault: false,
        label: "Under 30 min",
      },
    ],
    selected: false,
  },
  {
    uuid: "f844706c-2b1b-4db2-b40a-13d43cb338da",
    type: "topEatsFilter",
    label: "From Uber Eats",
    maxPermitted: 2,
    minPermitted: 0,
    options: [
      {
        uuid: "12ce1932-1878-4e2e-80d0-5760c095c641",
        value: "TOP_EATS",
        isDefault: false,
        label: "Highest rated",
        iconUrl:
          "https://cn-geo1.uber.com/static/mobile-content/eats/sort-and-filters-icons/medal.png",
      },
    ],
    selected: false,
  },
  {
    uuid: "b19c8978-203c-4a89-a23e-e4842febe4ff",
    type: "ratingFilter",
    label: "Rating",
    maxPermitted: 1,
    minPermitted: 0,
    options: [
      {
        uuid: "80635370-646d-11ee-9e1f-9dde45bcea83",
        value: "3",
        isDefault: false,
        label: "3+",
      },
      {
        uuid: "334823d0-646e-11ee-a308-016b4994ba14",
        value: "3.5",
        isDefault: false,
        label: "3.5+",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c042",
        value: "4",
        isDefault: false,
        label: "4+",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c043",
        value: "4.5",
        isDefault: true,
        label: "4.5+",
      },
      {
        uuid: "5ac23040-646e-11ee-b477-a9228312172d",
        value: "5",
        isDefault: false,
        label: "5",
      },
    ],
  },
  {
    uuid: "2c7cf7ef-730f-431f-9072-46bc39f7c021",
    type: "priceRangeFilter",
    label: "Price",
    maxPermitted: 4,
    minPermitted: 0,
    options: [
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c032",
        value: "$",
        isDefault: false,
        label: "€",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c033",
        value: "$$",
        isDefault: false,
        label: "€€",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c034",
        value: "$$$",
        isDefault: false,
        label: "€€€",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c035",
        value: "$$$$",
        isDefault: false,
        label: "€€€€",
      },
    ],
    selected: false,
  },
  {
    uuid: "2c7cf7ef-730f-431f-9072-36bc39f7c122",
    type: "dietaryFilter",
    label: "Dietary",
    maxPermitted: 5,
    minPermitted: 0,
    options: [
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c222",
        value: "Vegetarian-Friendly",
        isDefault: false,
        label: "  Vegetarian",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/filters/vegatarian.png",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c322",
        value: "Vegan-Friendly",
        isDefault: false,
        label: "  Vegan",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/filters/vegan.png",
      },
      {
        uuid: "2c7cf7ef-730f-431f-9072-26bc39f7c422",
        value: "Gluten-Free Friendly",
        isDefault: false,
        label: "  Gluten-free",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/filters/gluten-free.png",
      },
    ],
    selected: false,
  },
  {
    uuid: "1c7cf7ef-730f-431f-9072-26bc39f7c021",
    type: "sort",
    label: "Sort",
    maxPermitted: 1,
    minPermitted: 1,
    options: [
      {
        uuid: "3c7cf7ef-730f-431f-9072-26bc39f7c022",
        value: "Recommended",
        isDefault: true,
        label: "  Recommended",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/sort_and_filters/icons/badge_checkmark_filled@3x.png",
      },
      {
        uuid: "5991d63c-4d42-46bc-8301-ce224557e615",
        value: "Rating",
        isDefault: false,
        label: "  Rating",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/sort_and_filters/icons/star_filled@3x.png",
      },
      {
        uuid: "5c7cf7ef-730f-431f-9072-26bc39f7c024",
        value: "Delivery time",
        isDefault: false,
        label: "  Earliest arrival",
        iconUrl:
          "https://d4p17acsd5wyj.cloudfront.net/sort_and_filters/icons/clock_filled@3x.png",
      },
    ],
    selected: false,
  },
];
