const products = [
    {
        id: 1,
        title: 'Black With White Flower Shirt',
        slug: 'black-with-white-flower-shirt',
        price: 80,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/28/221/21__63469.1518851902.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/28/215/18__54838.1518851896.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/28/216/22__72818.1518851896.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/28/217/20__66232.1518851896.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/28/218/17__79636.1518851896.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Apple',
                slug: 'apple',
            },
        ],
        rating: 5,
    },
    {
        id: 2,
        title: 'Apple Bluetooth Headset',
        slug: 'apple-bluetooth-headset',
        price: 99,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/27/223/22__97286.1518852179.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/27/222/16__64902.1518852171.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/27/224/17__64191.1518852171.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/27/225/18__06711.1518852171.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/27/226/19__97817.1518852171.jpg?c=2',
        ],
        category: [
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
            {
                name: 'Apple',
                slug: 'apple',
            },
        ],
        rating: 2,
    },
    {
        id: 3,
        title: 'Speck PixelSkin IPhone 3G',
        slug: 'speck-pixelSkin-iPhone-3G',
        price: 24,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/26/229/1__62005.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Denims',
                slug: 'denims',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },

            {
                name: 'Speck',
                slug: 'speck',
            },
        ],
        rating: 4,
    },
    {
        id: 4,
        title: 'PENCIL SILVER AND BLACK DRESS',
        slug: 'pencil-silver-and-black-dress',
        price: 29,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/25/241/9__99031.1518852458.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Accessories',
                slug: 'accessories',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
            {
                name: 'Incase',
                slug: 'incase',
            },
        ],
        rating: 1,
    },
    {
        id: 5,
        title: 'Black Shine Skater',
        slug: 'black-shine-skater',
        price: 40,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/24/249/4__07794.1518852573.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Apple',
                slug: 'apple',
            },
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
        ],
        rating: 3,
    },
    {
        id: 6,
        title: 'NIGHTWEAR TSHIRT AND SHORT',
        slug: 'nightwear-tshirt-and-short',
        price: 79,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/23/251/20__04040.1518852673.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Apple',
                slug: 'apple',
            },
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
        ],
        rating: 2,
    },
    {
        id: 7,
        title: 'Tunic Blue Long Dress',
        slug: 'tunic-blue-long-dress',
        price: 129,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/22/263/11__24109.1518852782.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Denims',
                slug: 'denims',
            },
            {
                name: 'Accessories',
                slug: 'accessories',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },

            {
                name: 'Logitech',
                slug: 'logitech',
            },
        ],
        rating: 4,
    },
    {
        id: 8,
        title: 'White Shirt With Blue Skirt',
        slug: 'white-shirt-with-blue-skirt',
        price: 145,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/21/265/12__23895.1518852979.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },

            {
                name: 'Booq',
                slug: 'booq',
            },
        ],
        rating: 1,
    },
    {
        id: 9,
        title: 'Speck SeeThru Satin Case',
        slug: 'speck-seethru-satin-case',
        price: 200,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/20/271/18__58927.1518853008.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Accessories',
                slug: 'accessories',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },

            {
                name: 'Speck',
                slug: 'speck',
            },
        ],
        rating: 5,
    },
    {
        id: 10,
        title: 'Colorful Flower Short Maxi',
        slug: 'colorful-flower-short-maxi',
        price: 56,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/19/284/13__07520.1518853183.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Accessories',
                slug: 'accessories',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
            {
                name: 'Higher Ground',
                slug: 'higher-ground',
            },
        ],
        rating: 3,
    },
    {
        id: 11,
        title: 'Black And White Bandeau',
        slug: 'black-and-white-bandeau',
        price: 205,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/18/287/14__25113.1518853305.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
        ],
        rating: 2,
    },
    {
        id: 12,
        title: 'Top Sheath Dress',
        slug: 'top-sheath-dress',
        price: 150,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/17/298/2__25062.1518853539.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Denims',
                slug: 'denims',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
        ],
        rating: 4,
    },
    {
        id: 13,
        title: 'WHITE BLOUSON DRESSES',
        slug: 'white-blouson-dresses',
        price: 99,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/16/299/6__30423.1518853582.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Tops',
                slug: 'tops',
            },
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },

            {
                name: 'Logitech',
                slug: 'Logitech',
            },
        ],
        rating: 5,
    },
    {
        id: 14,
        title: 'Sheath With Short Dress',
        slug: 'sheath-with-short-dress',
        price: 230,
        sku: 'MAC-PRO',
        weight: '3.00 LBS',
        shipping: 'Calculated at Checkout',
        images: [
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/15/307/5__60036.1518853674.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
            'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
        ],
        category: [
            {
                name: 'Party Wear',
                slug: 'party-wear',
            },
        ],
        tag: [
            {
                name: 'Crumpler',
                slug: 'crumpler',
            },
        ],
        rating: 3,
    },
];

export const getProductBySlug = (slug) => {
    return products.filter((item) => item.slug === slug);
};

export default products;
