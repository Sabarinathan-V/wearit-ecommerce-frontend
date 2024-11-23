import logo from "./logo.png";
import search from "./search.png";
import profile from "./profile.png";
import cart from "./cart.png";
import menuIcon from "./menuIcon.png";
import backIcon from "./backIcon.png";
import heroImg from "./heroImg.jpeg";
import exchangeIcon from "./exchangeIcon.png";
import qualityIcon from "./qualityIcon.png";
import supportIcon from "./supportIcon.png";
import dropdownIcon from "./dropdownIcon.png";
import clearIcon from "./clearIcon.png";
import starFilledIcon from "./starFilledIcon.png"
import starNotFilledIcon from "./starNotFilledIcon.png"
import binIcon from "./binIcon.png"
import stripeIcon from "./stripeIcon.png";
import razorpayIcon from "./razorpayIcon.png";
import codIcon from "./codIcon.png";
import about from './about.jpg';
import contact from './contact.jpg';

const products = [
    {
      _id: "001",
      name: "Round Neck T-shirt",
      category: "Women",
      subCategory: "Topwear",
      price: 100,
      sizes: ["S", "M", "L"],
      description: "A lightweight rounded neck t-shirt",
      image: ["/src/assets/p01_01_img.jpg", "/src/assets/p01_02_img.jpg",],
      date: 1731929522699,
      bestseller: true
    },
    {
      _id: "002",
      name: "Slim Fit Jeans",
      category: "Men",
      subCategory: "Bottomwear",
      price: 120,
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable slim-fit denim jeans",
      image: ["/src/assets/p02_01_img.jpg", "/src/assets/p02_02_img.jpg", "/src/assets/p02_03_img.jpg"],
      date: 1729928563000,
      bestseller: true
    },
    {
      _id: "003",
      name: "Kids Hoodie",
      category: "Kids",
      subCategory: "Topwear",
      price: 80,
      sizes: ["S", "M", "L"],
      description: "Soft and cozy hoodie for kids",
      image: ["/src/assets/p03_01_img.jpg", "/src/assets/p03_02_img.jpg", "/src/assets/p03_03_img.jpg"],
      date: 1731928523599,
      bestseller: false
    },
    {
      _id: "004",
      name: "Men's Boxer Briefs",
      category: "Men",
      subCategory: "Innerwear",
      price: 40,
      sizes: ["M", "L", "XL"],
      description: "Comfortable and breathable boxer briefs",
      image: ["/src/assets/p04_01_img.jpg", "/src/assets/p04_02_img.jpg", "/src/assets/p04_03_img.jpg"],
      date: 1731928342299, 
      bestseller: false
    },
    {
      _id: "005",
      name: "Floral Print Dress",
      category: "Women",
      subCategory: "Topwear",
      price: 150,
      sizes: ["M", "L", "XL"],
      description: "Stylish floral print dress for women",
      image: ["/src/assets/p05_01_img.jpg", "/src/assets/p05_02_img.jpg", "/src/assets/p05_03_img.jpg"],
      date: 1731927274921
    },
    {
      _id: "006",
      name: "Cotton Casual Pants",
      category: "Men",
      subCategory: "Bottomwear",
      price: 90,
      sizes: ["M", "L", "XL"],
      description: "Casual cotton pants with a relaxed fit",
      image: ["/src/assets/p06_01_img.jpg", "/src/assets/p06_02_img.jpg", "/src/assets/p06_03_img.jpg"],
      date: 1731927182934
    },
    {
      _id: "007",
      name: "Jogging Shorts",
      category: "Women",
      subCategory: "Bottomwear",
      price: 60,
      sizes: ["S", "M", "L"],
      description: "Comfortable and breathable jogging shorts",
      image: ["/src/assets/p07_01_img.jpg", "/src/assets/p07_02_img.jpg", "/src/assets/p07_03_img.jpg"],
      date: 1731926728934,
      bestseller: true
    },
    {
      _id: "008",
      name: "Basic Crewneck T-shirt",
      category: "Men",
      subCategory: "Topwear",
      price: 70,
      sizes: ["S", "M", "L"],
      description: "Simple and classic crewneck t-shirt for men",
      image: ["/src/assets/p08_01_img.jpg", "/src/assets/p08_02_img.jpg", "/src/assets/p08_03_img.jpg"],
      date: 1731926544920,
      bestseller: true
    },
    {
      _id: "009",
      name: "Woolen Sweater",
      category: "Women",
      subCategory: "Topwear",
      price: 180,
      sizes: ["M", "L", "XL"],
      description: "Warm and stylish woolen sweater",
      image: ["/src/assets/p09_01_img.jpg", "/src/assets/p09_02_img.jpg", "/src/assets/p09_03_img.jpg"],
      date: 1731926451825,
      bestseller: true
    },
    {
      _id: "010",
      name: "Kids Graphic T-shirt",
      category: "Kids",
      subCategory: "Topwear",
      price: 50,
      sizes: ["S", "M", "L"],
      description: "Colorful graphic t-shirt for kids",
      image: ["/src/assets/p10_01_img.jpg", "/src/assets/p10_02_img.jpg", "/src/assets/p10_03_img.jpg"],
      date: 1731925890723
    },
    {
      _id: "011",
      name: "Leather Jacket",
      category: "Men",
      subCategory: "Topwear",
      price: 220,
      sizes: ["M", "L", "XL"],
      description: "Stylish leather jacket for men",
      image: ["/src/assets/p11_img.png"],
      date: 1731925109876
    },
    {
      _id: "012",
      name: "Men's Undershirt",
      category: "Men",
      subCategory: "Innerwear",
      price: 35,
      sizes: ["M", "L", "XL"],
      description: "Comfortable cotton undershirt",
      image: ["/src/assets/p12_img.png"],
      date: 1731924456947
    },
    {
      _id: "013",
      name: "Flared Denim Skirt",
      category: "Women",
      subCategory: "Bottomwear",
      price: 110,
      sizes: ["S", "M", "L"],
      description: "Trendy flared denim skirt for women",
      image: ["/src/assets/p13_img.png"],
      date: 1731923984943
    },
    {
      _id: "014",
      name: "Stretch Jeans",
      category: "Men",
      subCategory: "Bottomwear",
      price: 95,
      sizes: ["M", "L", "XL"],
      description: "Stretch denim jeans for a perfect fit",
      image: ["/src/assets/p14_img.png"],
      date: 1731923905761
    },
    {
      _id: "015",
      name: "Kids Shorts Set",
      category: "Kids",
      subCategory: "Bottomwear",
      price: 40,
      sizes: ["S", "M", "L"],
      description: "Comfortable shorts set for kids",
      image: ["/src/assets/p15_img.png"],
      date: 1731922994189
    },
    {
      _id: "016",
      name: "V-neck T-shirt",
      category: "Women",
      subCategory: "Topwear",
      price: 75,
      sizes: ["S", "M", "L"],
      description: "Classic V-neck t-shirt with a soft finish",
      image: ["/src/assets/p16_img.png"],
      date: 1731921999370
    },
    {
      _id: "017",
      name: "Chinos Trousers",
      category: "Men",
      subCategory: "Bottomwear",
      price: 120,
      sizes: ["M", "L", "XL"],
      description: "Stylish chinos for a sharp look",
      image: ["/src/assets/p17_img.png"],
      date: 1731921759245
    },
    {
      _id: "018",
      name: "Luxe Silk Top",
      category: "Women",
      subCategory: "Topwear",
      price: 250,
      sizes: ["S", "M", "L"],
      description: "Elegant silk top for a luxe feel",
      image: ["/src/assets/p18_img.png"],
      date: 1731921492879
    },
    {
      _id: "019",
      name: "Kids Pajama Set",
      category: "Kids",
      subCategory: "Innerwear",
      price: 30,
      sizes: ["S", "M", "L"],
      description: "Comfortable pajama set for kids",
      image: ["/src/assets/p19_img.png"],
      date: 1731921194672
    },
    {
      _id: "020",
      name: "Men's Thermal Vest",
      category: "Men",
      subCategory: "Innerwear",
      price: 50,
      sizes: ["M", "L", "XL"],
      description: "Warm thermal vest for the cold weather",
      image: ["/src/assets/p20_img.png"],
      date: 1731921041234
    },
    {
      _id: "021",
      name: "Polka Dot Skirt",
      category: "Women",
      subCategory: "Bottomwear",
      price: 80,
      sizes: ["S", "M", "L"],
      description: "Fun polka dot skirt for a casual look",
      image: ["/src/assets/p21_img.png"],
      date: 1731920856789
    },
    {
      _id: "022",
      name: "Cargo Pants",
      category: "Men",
      subCategory: "Bottomwear",
      price: 110,
      sizes: ["S", "M", "L"],
      description: "Functional cargo pants with multiple pockets",
      image: ["/src/assets/p22_img.png"],
      date: 1731920644299
    },
    {
      _id: "023",
      name: "Denim Jacket",
      category: "Women",
      subCategory: "Topwear",
      price: 140,
      sizes: ["M", "L", "XL"],
      description: "Classic denim jacket for women",
      image: ["/src/assets/p23_img.png"],
      date: 1731920429110
    },] 
  

export const assets = {
    logo,
    search,
    profile,
    cart,
    menuIcon,
    backIcon,
    heroImg,
    products,
    exchangeIcon,
    qualityIcon,
    supportIcon,
    dropdownIcon,
    clearIcon,
    starFilledIcon,
    starNotFilledIcon,
    binIcon,
    stripeIcon,
    razorpayIcon,
    codIcon,
    about,
    contact
}