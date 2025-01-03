export interface CartProduct {
  id?: number
  img: string
  title: string
  price: number
  quantity: number
  total: number
  description: string
  category?: string
  discount?: number
  isFavorite?: boolean
  isInCart?: boolean
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  weight?: number
  availability?: boolean
  tags?: string[]
  additionalImages?: string[]
  specifications?: {
    name: string;
    value: string;
  }[]
  manufacturer?: {
    name: string
    website?: string
  }
  shippingInfo?: {
    estimatedDelivery: string;
    shippingCost: number;
    returnPolicy: string;
  }
  ratings?: {
    averageRating: number;
    totalRatings: number;
  };
}

export interface CartState {
  totalCount: number
  productsList: CartProduct[]
  favoritesList: CartProduct[]
  subTotal: number
}

export interface AuthState {
  isAuthenticated: boolean
  user: {
    id: number
    name: string
    email: string
    password: string
    role: string
    created_at: string
  } | null
  token: string | null
}

export interface User {
  name: string
  email: string
  password: string
}

export interface SliderItemsData {
  title: string
  subtitle: string
  paragraph: string
  image: string
  buttons?: { 
    btn: string, 
    link: string 
  }[]
}

export interface SliderItemsSettings {
  dots: boolean
  infinite: boolean
  slidesToShow: number
  slidesToScroll: number
  autoplay: boolean
  autoplaySpeed: number
  arrows: boolean
}
