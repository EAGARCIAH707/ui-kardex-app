import {Injectable} from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
  state: string;
  name?: string;
  type?: string;
  icon?: string;
  children?: Menu[];
}

const HeaderOneItems = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'home',
  },
  {
    state: '',
    name: 'SHOP',
    type: 'sub',
    icon: 'pages',
    children: [
      {
        state: 'products/men/4',
        name: 'PRODUCT DETAILS',
        type: 'link',
        icon: 'arrow_right_alt'
      },
      {
        state: 'cart',
        name: 'CART',
        type: 'link',
        icon: 'arrow_right_alt'
      },
      {
        state: 'checkout',
        name: 'CHECKOUT',
        type: 'link',
        icon: 'arrow_right_alt'
      },
      {
        state: 'checkout/payment',
        name: 'PAYMENT',
        type: 'link',
        icon: 'arrow_right_alt'
      }
    ]
  },
  {
    state: 'products',
    name: 'PRODUCTS',
    type: 'link',
    icon: 'party_mode'
  },
  {
    state: 'products',
    name: 'CATEGORIES',
    type: 'sub',
    mega: true,
    icon: 'party_mode',
    children: [
      {
        state: 'products',
        name: 'MEN',
        type: 'sub',
        icon: 'arrow_right_alt',
        children: [
          {
            state: 'categories/22/products',
            queryState: '',
            name: 'Watch Man',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/24/products',
            queryState: '',
            name: 'Glass Man',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/47/products',
            queryState: '',
            name: 'Clothes',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/45/products',
            queryState: '',
            name: 'Shoes Man',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          }
        ]
      },
      {
        state: 'woman',
        name: 'WOMEN',
        type: 'sub',
        icon: 'arrow_right_alt',
        children: [
          {
            state: 'categories/23/products',
            queryState: '',
            name: 'Watch Woman',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/25/products',
            queryState: '',
            name: 'Glass Woman',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          }
        ]
      },
      {
        state: 'medicine',
        name: 'MEDICINE',
        type: 'sub',
        icon: 'arrow_right_alt',
        children: [
          {
            state: 'categories/1/products',
            queryState: '',
            name: 'HEADPHONE',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/1/products',
            queryState: '',
            name: 'SMARTPHONE',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/1/products',
            queryState: '',
            name: 'WATCH',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/1/products',
            queryState: '',
            name: 'SPEAKER',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          }
        ]
      },
      {
        state: 'categories/27/products/technology',
        name: 'TECHNOLOGY',
        type: 'sub',
        icon: 'arrow_right_alt',
        children: [
          {
            state: 'categories/32/products',
            queryState: '',
            name: 'PHOTOGRAPHY',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/33/products',
            queryState: '',
            name: 'SMARTWATCH',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          },
          {
            state: 'categories/34/products',
            queryState: '',
            name: 'SOUND',
            type: 'queryParams',
            icon: 'arrow_right_alt',
          }
        ]
      }
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
      {
        state: 'about',
        name: 'ABOUT',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'term-condition',
        name: 'TERM AND CONDITION',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'privacy-policy',
        name: 'PRIVACY POLICY',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'blogs/detail',
        name: 'BLOG DETAIL',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'faq',
        name: 'FAQ',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'not-found',
        name: '404 PAGE',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'account/profile',
        name: 'User Profile',
        type: 'link',
        icon: 'arrow_right_alt',
      }
    ]
  },
  {
    state: 'session',
    name: 'SESSION',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      {
        state: 'session/signin',
        name: 'SIGN IN',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/signup',
        name: 'REGISTER',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/forgot-password',
        name: 'FORGET PASSWORD',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/thank-you',
        name: 'THANK YOU',
        type: 'link',
        icon: 'arrow_right_alt',
      }
    ]
  },
  {
    state: 'contact',
    name: 'CONTACT US',
    type: 'link',
    icon: 'perm_contact_calendar'
  }
];

const FooterOneItems = [
  {
    state: '',
    name: 'ABOUT',
    type: 'sub',
    icon: '',
    children: [
      {
        state: 'about',
        name: 'ABOUT',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'term-condition',
        name: 'TERM AND CONDITION',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'privacy-policy',
        name: 'PRIVACY POLICY',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'faq',
        name: 'FAQ',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'contact',
        name: 'CONTACT US',
        type: 'link',
        icon: 'perm_contact_calendar',
      }
    ]
  },
  {
    state: '',
    name: 'SESSION',
    type: 'sub',
    icon: '',
    children: [
      {
        state: 'session/signin',
        name: 'SIGN IN',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/signup',
        name: 'REGISTER',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/forgot-password',
        name: 'FORGET PASSWORD',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'session/thank-you',
        name: 'THANK YOU',
        type: 'link',
        icon: 'arrow_right_alt',
      }
    ]
  },
  {
    state: '',
    name: 'CATEGORIES',
    type: 'sub',
    icon: '',
    children: [
      {
        state: 'products/women',
        name: 'WOMEN',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'products/men',
        name: 'MEN',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'categories/27/products/technology',
        name: 'ACCESSORIES',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'products/gadgets',
        name: 'GADGETS',
        type: 'link',
        icon: 'arrow_right_alt',
      }
    ]
  },
  {
    state: '',
    name: 'SOCIAL',
    type: 'sub',
    icon: '',
    children: [
      {
        state: 'https://www.facebook.com/',
        name: 'Facebook',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'https://twitter.com/',
        name: 'Twitter',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'https://www.youtube.com/',
        name: 'Youtube',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'https://plus.google.com',
        name: 'Google Plus',
        type: 'social_link',
        icon: 'arrow_right_alt',
      }
    ]
  }

];

@Injectable()
export class MenuItems {

  /*
   * Get all header menu
   */
  getMainMenu(): Menu[] {
    return HeaderOneItems;
  }

  /*
   * Get all footer menu
   */
  getFooterOneMenu(): Menu[] {
    return FooterOneItems;
  }
}
