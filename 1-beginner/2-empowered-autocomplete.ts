import { ValuesType } from "utility-types";

type Recipe = {
  type: string;
  sku: string;
  reviewsSku: string;
  pdpUrl: string;
  pdpPath: string;
  productName: string;
  name: string;
  slug: string;
  category: {
    id?: string;
    name?: string;
    description?: string;
    isNew: boolean;
  };
  active: boolean;
  cost: RecipeCost;
  surchargeAmount: string;
  outOfStock: boolean;
  outOfStockMessage: string;
  shortName: string;
  shortDescription: string;
  description: string;
  guaranteedAnalysis: {
    tableInfo: Array<{
      content: string;
      value: string;
      note: string;
    }>;
  };
  ingredients: {
    description: string;
    items: Array<{
      name: string;
      image: {
        "1x": string;
        "2x": string;
        alt: string;
      };
    }>;
  };
  carouselImages: Array<{
    inverse?: boolean;
    alt: string;
    "05x": string;
    "075x": string;
    "1x": string;
    "2x": string;
  }>;
  containerImage: {
    image: {
      "1x": string;
      "2x": string;
      alt: string;
    };
  };
  productImage: {
    image: {
      "1x": string;
      "2x": string;
      alt: string;
    };
  };
  patternImage: {
    image: {
      "1x": string;
      "2x": string;
      alt: string;
    };
  };
  features: Array<string>;
  lowFat?: boolean;
  highProtein?: boolean;
  oncoming?: boolean;
  recommendation: Recommendation;
  position: number;
  recommendationDetails: Array<RecommendationDetail>;
};

export const RecipeCosts = {
  low: "low" as const,
  medium: "medium" as const,
  high: "high" as const,
};

export type RecipeCost = ValuesType<typeof RecipeCosts>;

export const Recommendations = {
  recommended: "recommended" as const,
  neutral: "neutral" as const,
  not_suitable: "not_suitable" as const,
  too_young: "too_young" as const,
};

export type Recommendation = ValuesType<typeof Recommendations>;

export type RecommendationDetail = {
  term: {
    id: string;
    name: string;
  };
  recommendation: Recommendation;
  termGroup: string;
};

// --------------------------

const fetchRecipe = async (): Promise<Recipe> => {
  return {} as unknown as Recipe;
};

const main = async () => {
  const recipe = await fetchRecipe();
};

// ------------------------

// import Axios from "axios";

// Axios.request({

// })

export {};
