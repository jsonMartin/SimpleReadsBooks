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
    "release_date": "2023-10-15",
    "disabled": false,
  }
}

export const getProduct = (id: string) => {
  debugger;
  return products[id];
}

export default products