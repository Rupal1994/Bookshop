export const Products = {
  "categories": [
    {
      "id": 1,
      "name": "Mythology",
      "books": [
        {
          "id": 101,
          "title": "रामायण कथा",
          "author": "गोस्वामी तुलसीदास",
          "language": "Hindi",
          "price": 220,
          "discountPrice": 180,
          "inStock": true,
          "rating": 4.8,
          "pages": 280,
          "publisher": "Geeta Press",
          "coverImage": "./images/ramayan-katha.webp",
          "description": "प्राचीन भारतीय महाकाव्य रामायण की संक्षिप्त और सरल व्याख्या।",
          "reviews": [
            {
              "reviewId": 1,
              "user": "Anjali Sharma",
              "rating": 5,
              "comment": "बहुत ही सुंदर और सरल भाषा में लिखा गया रामायण।",
              "date": "2024-12-10"
            },
            {
              "reviewId": 2,
              "user": "Ravi Kumar",
              "rating": 4.5,
              "comment": "कहानी बहुत अच्छी है, बच्चों के लिए उपयुक्त।",
              "date": "2024-12-05"
            }
          ]
        },
        {
          "id": 102,
          "title": "महाभारत की कहानियाँ",
          "author": "चरण सिंह",
          "language": "Hindi",
          "price": 210,
          "discountPrice": 175,
          "inStock": true,
          "rating": 4.6,
          "pages": 240,
          "publisher": "Bhartiya Pustak Mandir",
          "coverImage": "./images/mahabharat.jpg",
          "description": "महाभारत के प्रेरणादायक और शिक्षाप्रद प्रसंग।",
          "reviews": [
            {
              "reviewId": 3,
              "user": "Suresh Patil",
              "rating": 4,
              "comment": "बहुत अच्छी किताब, पर कुछ हिस्से ज्यादा तकनीकी लगे।",
              "date": "2025-01-12"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Spirituality",
      "books": [
        {
          "id": 201,
          "title": "योग और ध्यान",
          "author": "स्वामी विवेकानंद",
          "language": "Hindi",
          "price": 250,
          "discountPrice": 210,
          "inStock": true,
          "rating": 4.7,
          "pages": 300,
          "publisher": "Vivekananda Foundation",
          "coverImage": "./images/yog-dhyan.jpeg",
          "description": "योग, प्राणायाम और ध्यान की तकनीकों का विस्तृत विवरण।",
          "reviews": [
            {
              "reviewId": 4,
              "user": "Meena Joshi",
              "rating": 5,
              "comment": "योग पर यह किताब मेरी रोज़ाना की मार्गदर्शिका बन गई।",
              "date": "2025-02-20"
            }
          ]
        },
        {
          "id": 202,
          "title": "भगवद गीता सार",
          "author": "स्वामी चिन्मयानंद",
          "language": "Hindi",
          "price": 200,
          "discountPrice": 170,
          "inStock": true,
          "rating": 4.9,
          "pages": 210,
          "publisher": "Chinmaya Mission",
          "coverImage": "./images/bhagvad-geeta.jpg",
          "description": "भगवद गीता के श्लोकों का सरल और गूढ़ अर्थ सहित विवरण।",
          "reviews": [
            {
              "reviewId": 5,
              "user": "Deepak Mishra",
              "rating": 5,
              "comment": "गीता का सार समझाने में अद्भुत पुस्तक।",
              "date": "2025-03-15"
            },
            {
              "reviewId": 6,
              "user": "Kavita Singh",
              "rating": 4.8,
              "comment": "सभी को पढ़नी चाहिए।",
              "date": "2025-03-18"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Indian History",
      "books": [
        {
          "id": 301,
          "title": "भारत का प्राचीन इतिहास",
          "author": "आर. एस. शर्मा",
          "language": "Hindi",
          "price": 300,
          "discountPrice": 260,
          "inStock": true,
          "rating": 4.5,
          "pages": 350,
          "publisher": "NCERT",
          "coverImage": "./images/bharat-itihas.webp",
          "description": "भारत के प्राचीन इतिहास और सभ्यताओं का गहन अध्ययन।",
          "reviews": [
            {
              "reviewId": 7,
              "user": "Anand Verma",
              "rating": 4.5,
              "comment": "इतिहास की जानकारी के लिए बेहतरीन किताब।",
              "date": "2025-04-05"
            }
          ]
        },
        {
          "id": 302,
          "title": "स्वतंत्रता संग्राम की गाथा",
          "author": "बिपिन चंद्रा",
          "language": "Hindi",
          "price": 270,
          "discountPrice": 230,
          "inStock": true,
          "rating": 4.6,
          "pages": 290,
          "publisher": "National Book Trust",
          "coverImage": "./images/bharat-freedom.jpg",
          "description": "भारत की स्वतंत्रता संग्राम की प्रमुख घटनाओं और नायकों का विवरण।",
          "reviews": [
            {
              "reviewId": 8,
              "user": "Sonal Gupta",
              "rating": 4.7,
              "comment": "देशभक्ति की भावना जगाने वाली पुस्तक।",
              "date": "2025-04-12"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Folk Tales",
      "books": [
        {
          "id": 401,
          "title": "पंचतंत्र की कहानियाँ",
          "author": "विश्नु शर्मा",
          "language": "Hindi",
          "price": 180,
          "discountPrice": 150,
          "inStock": true,
          "rating": 4.4,
          "pages": 160,
          "publisher": "Children's Press",
          "coverImage": "./images/panchtantra.jpg",
          "description": "पंचतंत्र की प्रसिद्ध नैतिक शिक्षाओं से भरी कहानियों का संग्रह।",
          "reviews": [
            {
              "reviewId": 9,
              "user": "Rajesh Kumar",
              "rating": 4.3,
              "comment": "बच्चों के लिए उपयुक्त मनोरंजक कथाएँ।",
              "date": "2025-05-01"
            }
          ]
        },
        {
          "id": 402,
          "title": "अकबर बीरबल की कहानियाँ",
          "author": "अज्ञात लेखक",
          "language": "Hindi",
          "price": 160,
          "discountPrice": 130,
          "inStock": true,
          "rating": 4.2,
          "pages": 140,
          "publisher": "Bal Bharati Books",
          "coverImage": "./images/akbar-birbal.webp",
          "description": "अकबर और बीरबल की मनोरंजक और शिक्षाप्रद कहानियाँ।",
          "reviews": [
            {
              "reviewId": 10,
              "user": "Manisha Singh",
              "rating": 4.0,
              "comment": "कहानियाँ मजेदार और सीखने योग्य।",
              "date": "2025-05-10"
            }
          ]
        }
      ]
    }
  ],

  "cart": {
    "userId": 1,
    "items": [
      {
        "bookId": 101,
        "quantity": 1
      },
      {
        "bookId": 202,
        "quantity": 2
      }
    ],
    "totalAmount": 550
  },

  "orders": [
    {
      "orderId": 1001,
      "userId": 1,
      "items": [
        {
          "bookId": 102,
          "quantity": 1,
          "price": 175
        },
        {
          "bookId": 401,
          "quantity": 2,
          "price": 150
        }
      ],
      "totalAmount": 475,
      "orderDate": "2025-05-20",
      "status": "Delivered",
      "shippingAddress": {
        "name": "Rupal Bhogayta",
        "addressLine1": "123, Surat Street",
        "addressLine2": "Near City Mall",
        "city": "Surat",
        "state": "Gujarat",
        "zip": "395001",
        "phone": "9876543210"
      }
    },
    {
      "orderId": 1002,
      "userId": 1,
      "items": [
        {
          "bookId": 201,
          "quantity": 1,
          "price": 210
        }
      ],
      "totalAmount": 210,
      "orderDate": "2025-05-25",
      "status": "Processing",
      "shippingAddress": {
        "name": "Rupal Bhogayta",
        "addressLine1": "123, Surat Street",
        "addressLine2": "Near City Mall",
        "city": "Surat",
        "state": "Gujarat",
        "zip": "395001",
        "phone": "9876543210"
      }
    }
  ]
}
