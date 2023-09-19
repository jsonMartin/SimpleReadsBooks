export const products: any = {
  "hunnie-bunnys-garden": {
    "id": "hunnie-bunnys-garden",
    "title": "Hunnie Bunny's Garden",
    "description": "Hunnie Bunny’s Garden is an enchanting picture book that brings children closer to nature, instills valuable virtues and ignites a sense of responsibility towards our environment.\n\nThrough the endearing character of Hunnie Bunny, it’s a delightful blend of entertainment and education. This book also promotes discussions about nature, gardening, sustainability, and healthy eating. If you are looking for a children’s book that offers both a charming story and important life lessons, Hunnie Bunny’s Garden is the book for you!",
    "price": "20.99",
    "type": "book",
    "images": [
      {
        "title": 0,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_book_cover-front_for_website_kmqcj0.png"
      },
      {
        "title": 1,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/Hunnie_Bunny_s_Garden_Page_2_for_website_avi9cm.png"
      },
      {
        "title": 2,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunnys-garden-page-1.png"
      },
      {
        "title": 3,
        "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/hunnie-bunny-book-cover-back.png"
      }
    ],
    "release_date": "2023-08-15",
    "disabled": false,
  },

  "hunnie-bunnys-garden-mystery": {
    "id": "hunnie-bunnys-garden-mystery",
    "title": "Hunnie Bunny's Garden Mystery",
    "price": "20.99",
    "description": `Hunnie Bunny’s Garden Mystery is a charming tale that takes young readers on an adventure with Hunnie Bunny and her woodland friends.\n It not only entertains, but also teaches valuable lessons about friendship, communication, and understanding. It will inspire children to develop strong relationships, and approach life’s challenges with a positive and compassionate mindset.\n Through colorful illustrations and engaging storytelling, this book captivates young minds and leaves them with a heartwarming message.  `,
    "release_date": "2023-09-30",
    "images": [{
      "title": 0,
      "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474872/Hunnie_Bunnys_Garden_Mystery_Book_Cover_Front_tcnuvs.png"
    },
    {
      "title": 2,
      "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474999/Hunnie_Bunny_s_Garden_Mystery_Page_2_qs2ost.png"
    },
    {
      "title": 3,
      "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694475000/Hunnie_Bunny_s_Garden_Mystery_Page_3_nrdtz0.png"
    },
    {
      "title": 4,
      "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694475001/Hunnie_Bunny_s_Garden_Mystery_Page_4_elvp0m.png"
    },
    {
      "title": 1,
      "src": "https://res.cloudinary.com/simple-reads-books/image/upload/w_1276,f_webp,q_auto/v1694474914/Hunnie_Bunnys_Garden_Mystery_Book_Cover_Back_hhjwwy.png"
    },
    ],
    "type": "book",
    "disabled": true,
  }
}

export const getProduct = (id: string) => {
  debugger;
  return products[id];
}

export default products