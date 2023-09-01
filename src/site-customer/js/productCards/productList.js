
window.addEventListener("load", function () {

    setTimeout(function () {
        let Products = [
            {
                id: 1,
                name: 'Pharma K-2',
                price: '470.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00503275_vien_uong_bo_sung_canxi_giam_nguy_co_loang_xuong_pharma_word_calci_k_2_60v_2299_63ed_large_322e824179.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '60 viên',
                saleValue: '',
            },
            {
                id: 2,
                name: 'Siro Top Grow',
                price: '712.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031920_top_grow_jpanwell_10_chai_x_30ml_siro_vitamin_tang_truong_cho_tre_em_7022_6123_large_47b7c3058a.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '10 chai',
                saleValue: ''

            },
            {
                id: 3,
                name: 'Bông tảy trang xỏ ngón JpanWell',
                price: '31.200đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1_6b859a1c71.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '88 miếng',
                saleValue: ''

            },
            {
                id: 4,
                name: 'Máy đo huyết áp AND UA-611',
                price: '765.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00032485_may_do_huyet_ap_bap_tay_tu_dong_and_ua_611_2417_615f_large_e007ee73d9.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '',
                saleValue: ''

            },
            {
                id: 5,
                name: 'Sữa Ensure Gold hương vị Vani',
                price: ' 830.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08196_2bea7e58c1.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '850g',
                saleValue: ''

            },
            {
                id: 6,
                name: 'Viên uống vitamin tổng hợp Elevit cho bà bầu',
                price: '470.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00033208_vitamin_tong_hop_elevit_bau_bayer_3x10_9269_61de_large_296df133e8.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '3 vỉ x 10 viên',
                saleValue: ''

            },
            {
                id: 7,
                name: 'Viên uống tố nữ vương Royal Care',
                price: ' 130.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00033126_to_nu_vuong_royal_care_30v_8924_61d6_large_a334a3c60f.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '30 viên',
                saleValue: ''

            },
            {
                id: 8,
                name: 'Tinh dầu bạch đàn chanh Kutieskin',
                price: '186.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/kutie_skin_1_86b388eab2.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '',
                saleValue: ''

            },
            {
                id: 9,
                name: 'Tắm gội em bé baby Gentle Wash',
                price: '79.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1804_43e3bd75a9.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Chai',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '250ml',
                saleValue: ''

            },
            {
                id: 10,
                name: 'Cốm vi sinh Lacto Biomin',
                price: '135.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3600_85f0ebab29.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '20 gói',
                saleValue: ''

            },
            {
                id: 11,
                name: 'Gel Alliance điều trị tay chân miệng',
                price: '175.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1ceb37b4bc0962573b181_fc39127465.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Tuýp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '8ml',
                saleValue: ''

            },
            {
                id: 12,
                name: 'Nước collagen5000 Đông Trùng Hạ Thảo',
                price: '470.000đ',
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09210_5c9ea963ea.jpg',
                isHot: true,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '10 chai',
                saleValue: ''

            },
            {
                id: 13,
                name: 'Viên uống Feroglobin B12 Vitabiotics',
                price: 327.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00481_7d75df71b4.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '2 vỉ x 15 viên',
                saleValue: 'Giảm đến 20%'

            },
            {
                id: 21,
                name: 'Nước yến sào cao cấp cho trẻ em',
                price: 132.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09248_57c3080fe5.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Lốc',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '4 hũ',
                saleValue: 'Giảm ngay 10%'

            },
            {
                id: 14,
                name: 'Viên uống Ăn ngon Ngủ ngon New Tất Thành',
                price: 100.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3772_fdd66d6aa4.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '30 viên',
                saleValue: 'Giảm đến 30%'

            },
            {
                id: 15,
                name: 'Lăn khử mùi Etiaxil',
                price: 272.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00502305_lan_khu_mui_dac_tri_cho_da_thuong_etiaxil_detranspirant_aisselles_peaux_normales_15ml_2171_6346_large_bad3d3e8d4.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '',
                saleValue: 'Giảm đến 50%'

            },
            {
                id: 16,
                name: 'Sữa chống nắng cho bé Sunplay Baby',
                price: 78.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00007069_kem_chong_nang_tre_em_sunplay_8466_5caf_large_6fc0f88b88.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Tuýp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '',
                saleValue: 'Mua là có quà'

            },
            {
                id: 17,
                name: 'Nước yến sào cao cấp nunest',
                price: 270.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08868_b80f6572b5.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '',
                saleValue: 'Giảm 5%'

            },
            {
                id: 18,
                name: 'Nước hồng sâm Extra Gold',
                price: 160.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00502344_nuoc_hong_sam_extra_gold_kwangdong_10_chai_x_100ml_6849_6425_large_6c1df196b9.jpg',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Hộp',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '10 chai',
                saleValue: 'Giảm ngay 10%'

            },
            {
                id: 19,
                name: 'Siro Special Kid Anti-Allergy Eric Favre Wellness',
                price: 470.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029294_special_kid_anti_allergy_eric_favre_125ml_7692_5ffe_large_d4479a47f0.JPG',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: true,
                unit: 'Chai',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '125ml',
                saleValue: 'Giảm ngay 15%'

            },
            {
                id: 20,
                name: 'Viên uống viatamin E-400IU',
                price: 150.000,
                img: 'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00345398_vitamin_e_400_iu_5953_600f_large_f1fec5d4f6.JPG',
                isHot: false,
                description: '',
                quantityInstock: 100,
                saleStatus: false,
                unit: 'Chai',
                category: '',
                brand: '',
                packing: '',
                quantityOfUnit: '30 viên',
                saleValue: ''

            },

        ]

        localStorage.setItem('Products', JSON.stringify(Products))

        for (let i = 0; i < Products.length; i++) {

            let htmlHotProduct = `<div class="best-seller-product-card">
            <a >
                <img src="${Products[i].img}">
            </a>
            <div class="best-seller-product-content">
                    <div class="name-product" >
                        <a class = "showDetail"  data-id="`+ Products[i].id + `">${Products[i].name}</a>
                    </div>
                    <div class="product-price">
                        <span>${Products[i].price}
                        <span>/ Hộp</span>
                    </div>
                    <div class="product-info">
                        <a >${Products[i].unit + " " + Products[i].quantityOfUnit}</a>
                    </div>
            </div>
        </div>`


            if (Products[i].isHot == true) {
                document.querySelector('.best-seller-list').innerHTML += htmlHotProduct

            }
            let htmlSaleBrand = `
                <div class="favourite-brand-card">
                    <a href="">
                        <div class="brand-product">
                            <img src="${Products[i].img}">
                        </div>
                    
                        <div class="content">
                            <p>${Products[i].saleValue}</p>
                        </div>
                    </a>
    
                </div>`

            if (Products[i].saleStatus !== false) {
                document.querySelector('.brand-body-right-side').innerHTML += htmlSaleBrand
            }

        }

        document.querySelectorAll(".showDetail").forEach(button => {
            button.onclick = function (e) {
                const productId = e.target?.getAttribute("data-id")
                let product = Products.find(function (item) {
                    return Number(item?.id) === Number(productId);
                });
         
                if (product) {
                    let showDetail = localStorage.setItem('product', JSON.stringify(product))
                    location.href = "http://localhost:3000/site-customer/pages/productdetails/productdetail.html"
                }

            }
        })
    }, 300);




})