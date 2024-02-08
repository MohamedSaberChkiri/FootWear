// products.ts

interface Product {
    id: number;
    name: string;
    price: number;
    manufacturer: "Nike" | "Adidas" | "Puma";
    category: "Men" | "Women" | "Kids" | "New";
    currentStock: number;
    description: string;
    backgroundLink: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Gazelle Shoes",
        price: 99.99,
        manufacturer: "Adidas",
        category: "Men",
        currentStock: 50,
        description: "Classic Gazelle shoes for men.",
        backgroundLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/45f7d7a43316498e973470e665ed247a_9366/Gazelle_Shoes_White_IH2216_01_standard.jpg"
    },
    {
        id: 2,
        name: "NMD_R1 Shoes",
        price: 129.99,
        manufacturer: "Adidas",
        category: "Men",
        currentStock: 30,
        description: "Modern NMD_R1 shoes for men.",
        backgroundLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d44fa06fc83f4644b7e8acbc01160e1b_9366/NMD_R1_Shoes_Black_GZ9258_01_standard.jpg"
    },
    {
        id: 3,
        name: "Adistar Cushion Shoes",
        price: 89.99,
        manufacturer: "Adidas",
        category: "Men",
        currentStock: 40,
        description: "Comfortable Adistar Cushion shoes for men.",
        backgroundLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a74be11619b7419f9663305c49bdd293_9366/Adistar_Cushion_Shoes_White_ID5744_01_standard.jpg"
    },
    {
        id: 4,
        name: "OZWEEGO Shoes",
        price: 109.99,
        manufacturer: "Adidas",
        category: "Men",
        currentStock: 25,
        description: "Stylish OZWEEGO shoes for men.",
        backgroundLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/OZWEEGO_Shoes_Beige_FX6029_01_standard.jpg"
    },
    {
        id: 5,
        name: "Lite Racer 3.0 Shoes",
        price: 79.99,
        manufacturer: "Adidas",
        category: "Men",
        currentStock: 35,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c4dbdfacf8174cd19d6fad4a010d70fe_9366/Lite_Racer_3.0_Shoes_Black_GW7954_01_standard.jpg"
    }
    ,
    {
        id: 6,
        name: "Nike Dunk Low",
        price: 119.99,
        manufacturer: "Nike",
        category: "Women",
        currentStock: 15,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4114e49-2fe9-40a9-b20b-fd960432d780/dunk-low-damenschuh-Br5lBf.png"
    }
    ,
    {
        id: 7,
        name: "Nike Air Force 1 '07",
        price: 119.99,
        manufacturer: "Nike",
        category: "Women",
        currentStock: 18,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-damenschuh-dgr2tk.png"
    }
    ,
    {
        id: 8,
        name: "Air Jordan 1 Elevate High",
        price: 103.99,
        manufacturer: "Nike",
        category: "Women",
        currentStock: 14,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d888993b-4c73-4037-9ed1-ea01988ea4fa/air-jordan-1-elevate-high-damenschuh-D0KBq0.png"
    }
    ,
    {
        id: 9,
        name: "Jordan Spizike Low",
        price: 124.99,
        manufacturer: "Nike",
        category: "Kids",
        currentStock: 77,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/017bfb95-26fd-46af-b28f-ad4d8cbdf79e/jordan-spizike-low-schuh-fur-altere-ZJtLwG.png"
    }
    ,
    {
        id: 10,
        name: "Nike Dunk Low",
        price: 60,
        manufacturer: "Nike",
        category: "Kids",
        currentStock: 117,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78093c5f-19cf-4462-834c-a3e46de38386/dunk-low-schuh-fur-babys-und-kleinkinder-jbL2Pv.png"
    }
    
    ,
    {
        id: 11,
        name: "Suede XL Sneakers Unisex",
        price: 99.99,
        manufacturer: "Puma",
        category: "New",
        currentStock: 200,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395205/01/sv01/fnd/EEA/fmt/png/Suede-XL-Sneakers-Unisex"
    }
    ,
    {
        id: 12,
        name: "Softride Enzo Evo Running Shoes",
        price: 40,
        manufacturer: "Puma",
        category: "New",
        currentStock: 100,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/sv01/fnd/EEA/fmt/png/Softride-Enzo-Evo-Running-Shoes"
    }
    ,
    {
        id: 13,
        name: "PUMA x SPONGEBOB SQUAREPANTS Slipstream Youth Sneakers",
        price: 49.99,
        manufacturer: "Puma",
        category: "New",
        currentStock: 100,
        description: "Lightweight Lite Racer 3.0 shoes for men.",
        backgroundLink: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/393893/01/sv01/fnd/EEA/fmt/png/PUMA-x-SPONGEBOB-SQUAREPANTS-Slipstream-Youth-Sneakers"
    }
    
];

export default products;
