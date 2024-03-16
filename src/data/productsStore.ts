export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  amazon_url?: string;
  barnes_and_noble_url?: string;
  images: {
    title?: number;
    src: string;
  }[];
  release_date: string;
  disabled: boolean;
};

export type Products = {
  [key: string]: Product;
};

export const products: Products = {
  "hunnie-bunnys-garden": {
    id: "hunnie-bunnys-garden",
    title: "Hunnie Bunny's Garden",
    description:
      "Hunnie Bunny’s Garden is an enchanting picture book that brings children closer to nature, instills valuable virtues and ignites a sense of responsibility towards our environment.\n\nThrough the endearing character of Hunnie Bunny, it’s a delightful blend of entertainment and education. This book also promotes discussions about nature, gardening, sustainability, and healthy eating. If you are looking for a children’s book that offers both a charming story and important life lessons, Hunnie Bunny’s Garden is the book for you!",
    price: "20.99",
    type: "book",
    amazon_url:
      "https://www.amazon.com/Hunnie-Bunnys-Garden-Deborah-Carter/dp/B0C9VVS9KX/ref=sr_1_1?crid=UD2BEQT5O4R0&keywords=hunny+bunny%27s+garden&qid=1698981656&s=books&sprefix=hunni+bunny%27s+garden%2Cstripbooks%2C113&sr=1-1",
    images: [
      {
        title: 0,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_book_cover-front_for_website_kmqcj0.png",
      },
      {
        title: 1,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_Page_2_for_website_avi9cm.png",
      },
      {
        title: 2,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunnys-garden-page-1.png",
      },
      {
        title: 3,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunny-book-cover-back.png",
      },
      {
        title: 4,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Literary_Titan_Gold_Book_Award_llkqe4.png",
      },
      {
        title: 5,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Literary_Titan_Silver_Book_Award_hk0lja.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/5star-shiny-hr_vgdmeg",
      },
    ],
    release_date: "2023-08-15",
    disabled: false,
  },
  "hunnie-bunnys-garden-mystery": {
    id: "hunnie-bunnys-garden-mystery",
    title: "Hunnie Bunny's Garden Mystery",
    price: "20.99",
    description: `Hunnie Bunny’s Garden Mystery is a charming tale that takes young readers on an adventure with Hunnie Bunny and her woodland friends.\n It not only entertains, but also teaches valuable lessons about friendship, communication, and understanding. It will inspire children to develop strong relationships, and approach life’s challenges with a positive and compassionate mindset.\n Through colorful illustrations and engaging storytelling, this book captivates young minds and leaves them with a heartwarming message.  `,
    release_date: "2023-09-30",
    amazon_url:
      "https://www.amazon.com/Hunnie-Bunnys-Garden-Mystery-Deborah/dp/B0CL8S7XYG/",
    images: [
      {
        title: 0,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474872/Hunnie_Bunnys_Garden_Mystery_Book_Cover.png",
      },
      {
        title: 1,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357070/HBGM_Page_1_higmwy.png",
      },

      {
        title: 2,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357089/HBGM_Page_2_bldvit.png",
      },
      {
        title: 3,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357106/HBGM_Page_3_t1puyp.png",
      },
      {
        title: 4,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357123/HBGM_Page_4_brayua.png",
      },
      {
        title: 5,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Literary_Titan_Gold_Book_Award_llkqe4.png",
      },
      {
        title: 6,
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Literary_Titan_Silver_Book_Award_hk0lja.png",
      },
    ],
    type: "book",
    disabled: false,
  },

  "hunnie-bunnys-christmas-wish": {
    id: "hunnie-bunnys-christmas-wish",
    title: "Hunnie Bunny's Christmas Wish",
    price: "20.99",
    description: `Hunnie Bunny’s Christmas Wish is a delightful tale that combines the magic of Christmas with the joy of making new friends. The story beautifully conveys the idea that sometimes Christmas wishes do come true in the most unexpected ways.\nIt’s a reminder that the holiday season is not just about decorations and festivities, but also about the gift of companionship and the love of friends. This is a perfect story to read during the holiday season, leaving readers with a warm and fuzzy feeling.\n<strong class="text-xs"><em>* Hardback is available at Barnes & Noble and Paperback at Amazon</em></strong>`,
    release_date: "2023-09-30",
    amazon_url:
      "https://www.amazon.com/Hunnie-Bunnys-Christmas-Deborah-Carter/dp/B0CPM1913N",
    images: [
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474872/HBCW_front_book_cover_ggkfhx.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357070/HBCW_Page_1_qacskw.png",
      },

      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357089/HBCW_Page_2_vpzrpq.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357106/HBCW_Page_3_jegd4n.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357106/HBCW_Page_4_ew3gya.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1698357123/HBCW_Back_book_cover_cao2z5.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Literary_Titan_Gold_Book_Award_llkqe4.png",
      },
      {
        src: "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/5star-shiny-hr_vgdmeg",
      },
    ],
    type: "book",
    disabled: false,
  },
};

export const getProduct = (id: string): Product => {
  return products[id];
};

export default products;
