

//头部商品清单缩列图滚动显示
const images = [
    { src: 'source/耙耙柑清单.jpg', alt: '耙耙柑清单' },
    { src: 'source/耙耙柑价格清单.jpg', alt: '耙耙柑价格清单' },
    { src: 'source/花生清单.jpg', alt: '花生清单' },
    { src: 'source/漳浦肉丸清单.jpg', alt: '漳浦肉丸清单' },
    { src: 'source/推荐礼.png', alt: '推荐礼' }
    // 添加更多图片
];
// 动态生成下拉选项（可选优化） 
const categories = ['all', '耙耙柑', '花生', '漳浦肉丸']; // 商品分类数组
// 模拟商品数据，存储在localStorage中
let products = JSON.parse(localStorage.getItem("products")) || [
    // { id: 1, name: "白晒花生", price: 55, image: "source/白晒花生.png", category: "花生", description: "新鲜晒制的白晒花生，口感香脆，营养丰富。" },
    // { id: 2, name: "红皮花生", price: 60, image: "source/红皮花生.png", category: "花生", description: "红皮花生，口感醇厚，富含蛋白质。" },
    // { id: 3, name: "七彩花生", price: 88, image: "source/七彩花生.png", category: "花生", description: "多种颜色的花生，营养均衡，美味可口。" },
    // { id: 4, name: "五香花生", price: 60, image: "source/五香花生.png", category: "花生", description: "五香口味的花生，香辣可口，下酒佳品。" },
    // { id: 5, name: "核桃花生", price: 88, image: "source/核桃花生.png", category: "花生", description: "核桃花生，口感独特，香气扑鼻。" },
    // { id: 6, name: "脆皮豆腐干", price: 25, image: "source/脆皮豆腐干.png", category: "豆腐干", description: "脆皮豆腐干，外脆里嫩，香辣可口。" },
    // { id: 7, name: "麻辣豆腐干", price: 30, image: "source/麻辣豆腐干.png", category: "豆腐干", description: "麻辣口味的豆腐干，香辣过瘾，下饭佳品。" },
    // { id: 8, name: "土鸡", price: 120, image: "source/土鸡.png", category: "土鸡", description: "土鸡，肉质鲜嫩，营养丰富。" },
    // { id: 9, name: "土鸡蛋", price: 15, image: "source/土鸡蛋.png", category: "土鸡", description: "土鸡蛋，富含维生素和矿物质，营养价值高。" }

    //    五香花生	5斤48包邮
    //    红泥花生	5斤60包邮
    //    蒜香花生	5斤58包邮 
    //    核桃花生	5斤58包邮
    //    紫衣茴香	5斤60包邮    
    //    红衣炒香	5斤58包邮
    //    大池湿烤	5斤75包邮        
    //    A新大池湿烤	5斤83包邮
    //    大池日晒	5斤75包邮
    //    A新大池日晒	5斤83包邮
    //    紫衣日晒	5斤75包邮
    //    紫衣湿烤	5斤75包邮
    //    黄土地湿烤	5斤88包邮
    //    紫衣黄土地	5斤80包邮
    //    七彩花生	5斤115包邮
    //    A➕七彩花生	5斤130包邮
    //花生
    { id: 1, name: "五香花生 5斤包邮", price: 48, image: "source/五香花生.png", category: "花生", description: "香辣可口，下酒佳品。" },
    { id: 2, name: "红泥花生 5斤包邮", price: 60, image: "source/红泥花生.png", category: "花生", description: "口感醇厚，富含蛋白质。" },
    { id: 3, name: "蒜香花生 5斤包邮", price: 58, image: "source/蒜香花生.png", category: "花生", description: "蒜香味浓郁，营养丰富。" },
    { id: 4, name: "核桃花生 5斤包邮", price: 58, image: "source/核桃花生.png", category: "花生", description: "口感独特，香气扑鼻。" },
    { id: 5, name: "紫衣茴香 5斤包邮", price: 60, image: "source/紫衣茴香.png", category: "花生", description: "天然健康，下酒佳品。" },
    { id: 6, name: "红衣炒香 5斤包邮", price: 58, image: "source/红衣炒香.png", category: "花生", description: "炒制香脆，美味可口。" },
    { id: 7, name: "大池湿烤 5斤包邮", price: 75, image: "source/大池湿烤.png", category: "花生", description: "湿烤工艺，口感细腻。" },
    { id: 8, name: "A新大池湿烤 5斤包邮", price: 83, image: "source/A新大池湿烤.png", category: "花生", description: "升级版湿烤，更香更脆。" },
    { id: 9, name: "大池日晒 5斤包邮", price: 75, image: "source/大池日晒.png", category: "花生", description: "传统日晒，原汁原味。" },
    { id: 10, name: "A新大池日晒 5斤包邮", price: 83, image: "source/A新大池日晒.png", category: "花生", description: "升级版日晒，品质更高。" },
    { id: 11, name: "紫衣日晒 5斤包邮", price: 75, image: "source/紫衣日晒.png", category: "花生", description: "紫色外皮，营养均衡。" },
    { id: 12, name: "紫衣湿烤 5斤包邮", price: 75, image: "source/紫衣湿烤.png", category: "花生", description: "湿烤工艺，香脆可口。" },
    { id: 13, name: "黄土地湿烤 5斤包邮", price: 88, image: "source/黄土地湿烤.png", category: "花生", description: "黄土地特产，风味独特。" },
    // 缺货 { id: 14, name: "紫衣黄土地 5斤包邮", price: 80, image: "source/紫衣黄土地.png", category: "花生", description: "黄土地特产，紫色外皮。" },
    { id: 15, name: "七彩花生 5斤包邮", price: 115, image: "source/七彩花生.png", category: "花生", description: "多种颜色，营养均衡。" },
    { id: 16, name: "A➕七彩花生 5斤包邮", price: 130, image: "source/A➕七彩花生.png", category: "花生", description: "升级版七彩花生，更美味。" },

    // 耙耙柑  
    { id: 101, name: "耙耙柑中果 5斤包邮", price: 31, image: "source/耙耙柑.png", category: "耙耙柑", description: "中等大小的耙耙柑，果径70-80mm，甜度适中，口感多汁，5斤装包邮。" },
    { id: 102, name: "耙耙柑大果 5斤包邮", price: 33, image: "source/耙耙柑.png", category: "耙耙柑", description: "较大果径的耙耙柑，果径80-90mm，甜度较高，口感多汁，5斤装包邮。" },
    { id: 103, name: "耙耙柑果王 5斤包邮", price: 34, image: "source/耙耙柑.png", category: "耙耙柑", description: "顶级果王耙耙柑，果径90mm以上，甜度极高，口感多汁，5斤装包邮。" },
    { id: 104, name: "耙耙柑中果 8斤包邮", price: 51, image: "source/耙耙柑.png", category: "耙耙柑", description: "中等大小的耙耙柑，果径70-80mm，甜度适中，口感多汁，8斤装包邮。" },
    { id: 105, name: "耙耙柑大果 8斤包邮", price: 53, image: "source/耙耙柑.png", category: "耙耙柑", description: "较大果径的耙耙柑，果径80-90mm，甜度较高，口感多汁，8斤装包邮。" },
    { id: 106, name: "耙耙柑果王 8斤包邮", price: 55, image: "source/耙耙柑.png", category: "耙耙柑", description: "顶级果王耙耙柑，果径90mm以上，甜度极高，口感多汁，8斤装包邮。" },
    { id: 107, name: "耙耙柑花皮果 8斤包邮", price: 38, image: "source/耙耙柑.png", category: "耙耙柑", description: "花皮耙耙柑，果皮带有美丽花纹，果径适中，甜度适中，口感多汁，8斤装包邮。" },
    { id: 108, name: "耙耙柑礼盒装", price: 68, image: "source/耙耙柑.png", category: "耙耙柑", description: "礼盒装耙耙柑，果径约90mm，甜度极高，口感多汁，8斤装精美礼盒包装，包邮。" },

    //漳浦肉丸
    { id: 208, name: "漳浦肉丸 5斤包邮", price: 115, image: "source/漳浦肉丸.jpg", category: "漳浦肉丸", description: "Q弹爆汁：咬一口，肉汁四溢，幸福感爆棚！。" },

];

// 用户权限
let userRole = "user"; // 默认为普通用户，可设置为 "admin" 或 "user"

// 获取DOM元素
const productList = document.getElementById("product-list");
const adminPanel = document.getElementById("admin-panel");
const userPanel = document.getElementById("user-panel");
const uploadImage = document.getElementById("upload-image");
const productPrice = document.getElementById("product-price");
const saveChanges = document.getElementById("save-changes");
const orderButton = document.getElementById("order-button");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const orderModal = document.getElementById("order-modal");
const orderDetails = document.getElementById("order-details");
const totalPrice = document.getElementById("total-price");
const cancelOrder = document.getElementById("cancel-order");
const copyOrder = document.getElementById("copy-order");
const searchInput = document.getElementById("search-input");
const bottomIndicator = document.getElementById("bottom-indicator");
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const categorySelect = document.getElementById("category-select");
const productId = document.getElementById("product-id");
const shippingAddress = document.getElementById("shipping-address"); // 获取收件详细信息文本框
const clearQuantitiesButton = document.getElementById("clear-quantities"); // 获取清空数量按钮

// 清空现有选项并重新生成=》商品下拉生成
categorySelect.innerHTML = '';
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category === 'all' ? '所有分类' : category;
    if (category === 'all') {
        option.setAttribute('selected', 'selected'); // 默认选中“所有分类”
    }
    categorySelect.appendChild(option);
});


// 图片缩放比例
let zoomLevel = 1;

// 根据用户角色显示不同的面板
function showPanel() {
    if (userRole === "admin") {
        adminPanel.classList.remove("hidden");
        userPanel.classList.add("hidden");
    } else {
        userPanel.classList.remove("hidden");
        adminPanel.classList.add("hidden");
    }
}

// 保存当前显示的商品列表
let currentDisplayedProducts = [];

// 保存当前显示的商品ID
let currentDisplayedProductIds = [];

// 保存商品数量的对象
let productQuantities = {};

// 渲染商品列表
function renderProducts(filteredProducts) {
    try {
        products = JSON.parse(localStorage.getItem("products")) || products; // 重新从localStorage获取最新的商品数据
        const productsToRender = filteredProducts || products;
        productList.innerHTML = "";

        productsToRender.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product-item";
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <p class="product-name">${product.name}</p>
                <p class="product-description">${product.description}</p> <!-- 添加描述信息 -->
                <p class="product-price">价格：${product.price}元</p>
                <div class="quantity-controls">
                    <button class="quantity-button" onclick="decreaseQuantity(${product.id})">-</button>
                    <input type="number" id="quantity-${product.id}" class="product-quantity" min="0" value="${productQuantities[product.id] || 0}">
                    <button class="quantity-button" onclick="increaseQuantity(${product.id})">+</button>
                </div>
            `;
            productList.appendChild(productDiv);
        });

        // 保存当前显示的商品列表和商品ID
        currentDisplayedProducts = productsToRender;
        currentDisplayedProductIds = productsToRender.map(product => product.id);

        // 添加点击事件监听器以放大图片
        const productImages = document.querySelectorAll(".product-image");
        productImages.forEach(img => {
            img.addEventListener("click", () => {
                modalImage.src = img.src;
                modalImage.style.transform = "scale(1)"; // 重置缩放
                zoomLevel = 1; // 重置缩放级别
                imageModal.classList.remove("hidden");
            });
        });
    } catch (error) {
        console.error("商品加载失败:", error);
    }
}

// 减少数量
function decreaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityInput.value, 10);
    if (quantity > 0) {
        quantityInput.value = quantity - 1;
        productQuantities[id] = quantity - 1; // 更新数量对象
    }
}

// 增加数量
function increaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityInput.value, 10);
    quantityInput.value = quantity + 1;
    productQuantities[id] = quantity + 1; // 更新数量对象
}

// 清空数量函数
function clearQuantities() {
    // 获取所有数量输入框
    const quantityInputs = document.querySelectorAll(".product-quantity");
    quantityInputs.forEach(input => {
        const productId = parseInt(input.id.split('-')[1], 10);
        if (currentDisplayedProductIds.includes(productId)) {
            input.value = 0;
            productQuantities[productId] = 0; // 更新数量对象
        }
    });
}

// 关闭模态框
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.onclick = function () {
        imageModal.classList.add("hidden");
        orderModal.classList.add("hidden");
    };
});

// 管理员保存修改
saveChanges.addEventListener("click", () => {
    const productIdValue = parseInt(productId.value, 10);
    const product = products.find(p => p.id === productIdValue);
    if (product) {
        if (uploadImage.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (event) {
                product.image = event.target.result;
                saveProductsToLocalStorage();
                renderProducts();
            };
            reader.readAsDataURL(uploadImage.files[0]);
        }
        product.price = parseFloat(productPrice.value);
        saveProductsToLocalStorage();
        renderProducts();
    } else {
        alert("商品未找到，请检查商品ID。");
    }
});

// 保存商品数据到localStorage
function saveProductsToLocalStorage() {
    try {
        localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
        console.error("Failed to save products to localStorage:", error);
    }
}

// 普通用户下单
orderButton.addEventListener("click", () => {
    let selectedProducts = [];
    let total = 0;

    // 使用当前显示的商品列表
    currentDisplayedProducts.forEach(product => {
        const quantityInput = document.getElementById(`quantity-${product.id}`);
        const quantity = parseInt(quantityInput.value, 10);
        if (quantity > 0) {
            selectedProducts.push({ ...product, quantity });
            total += product.price * quantity;
        }
    });

    if (selectedProducts.length === 0) {
        alert("请选择至少一个商品！");
        return;
    }

    orderDetails.innerHTML = "";
    selectedProducts.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${item.name} - 数量: ${item.quantity} - 价格: ${item.price * item.quantity}元</p>
        `;
        orderDetails.appendChild(itemDiv);
    });

    totalPrice.textContent = total;
    orderModal.classList.remove("hidden");
});

// 取消下单
cancelOrder.addEventListener("click", () => {
    orderModal.classList.add("hidden");
});

// 复制下单信息
copyOrder.addEventListener("click", () => {
    let orderInfo = "所选商品:\n";

    // 提取每个商品的详细信息并添加到 orderInfo
    orderDetails.querySelectorAll("p").forEach(p => {
        orderInfo += p.textContent + "\n";
    });

    orderInfo += `总价格: ${totalPrice.textContent}元\n`;
    orderInfo += `收件详细信息: ${shippingAddress.value}\n`; // 包含收件详细信息

    navigator.clipboard.writeText(orderInfo).then(() => {
        alert("订单信息已复制到剪贴板！");
    }).catch(err => {
        console.error("无法复制订单信息: ", err);
    });
});

// 提取公共的过滤逻辑
function filterProducts(selectedCategory, searchTerm) {
    if (!Array.isArray(products)) {
        console.error("商品数据无效，请检查 products 数组。");
        return [];
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    return products.filter(product => {
        // 如果分类为 "all"，则忽略分类过滤
        const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
        const nameMatch = product.name.toLowerCase().includes(lowerSearchTerm);
        return categoryMatch && nameMatch;
    });
}

// 商品搜索功能
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value || ""; // 确保 searchTerm 不为 null/undefined
    const selectedCategory = categorySelect.value || "all"; // 确保 selectedCategory 不为 null/undefined
    // alert(selectedCategory);
    const filteredProducts = filterProducts(selectedCategory, searchTerm);
    renderProducts(filteredProducts);
});

// 商品分类功能
categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value || "all"; // 确保 selectedCategory 不为 null/undefined
    const searchTerm = searchInput.value || ""; // 确保 searchTerm 不为 null/undefined
    const filteredProducts = filterProducts(selectedCategory, searchTerm);
    renderProducts(filteredProducts);
    updateButtonTitles(); // 更新按钮标题
});
// 更新按钮文本的函数
function updateButtonTitles() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory === "all") {
        clearQuantitiesButton.textContent = "清空所有数量";
        orderButton.textContent = "下单所有分类";
    } else {
        clearQuantitiesButton.textContent = `清空${selectedCategory}数量`;
        orderButton.textContent = `下单${selectedCategory}`;
    }
}
// 检测滚动事件并显示底部提示
window.addEventListener("scroll", () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const productListHeight = productList.offsetHeight;
    const containerOffsetTop = productList.offsetTop;

    if (scrollPosition >= productListHeight + containerOffsetTop) {
        bottomIndicator.classList.remove("hidden");
    } else {
        bottomIndicator.classList.add("hidden");
    }
});

// 图片缩放功能
function zoomIn() {
    zoomLevel += 0.1;
    modalImage.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel -= 0.1;
        modalImage.style.transform = `scale(${zoomLevel})`;
    }
}

// 绑定缩放按钮事件
zoomInBtn.addEventListener("click", zoomIn);
zoomOutBtn.addEventListener("click", zoomOut);

// 关闭模态框点击空白处
imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        imageModal.classList.add("hidden");
    }
});

orderModal.addEventListener("click", (event) => {
    if (event.target === orderModal) {
        orderModal.classList.add("hidden");
    }
});

// 绑定清空数量按钮的点击事件
clearQuantitiesButton.addEventListener("click", clearQuantities);

// 显示二维码模态框
const showQrCodeButton = document.getElementById("show-qr-code");
const qrCodeModal = document.getElementById("qr-code-modal");

showQrCodeButton.addEventListener("click", () => {
    qrCodeModal.classList.remove("hidden");
});
const showQrCodeButton2 = document.getElementById("show-qr-code2");

showQrCodeButton2.addEventListener("click", () => {
    qrCodeModal.classList.remove("hidden");
});
// 关闭二维码模态框
qrCodeModal.addEventListener("click", (event) => {
    if (event.target === qrCodeModal) {
        qrCodeModal.classList.add("hidden");
    }
});


// 返回顶部按钮
const backToTopButton = document.getElementById("back-to-top");

// 显示或隐藏返回顶部按钮
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// 平滑滚动到页面顶部
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//滚动显示商品缩列图

function loadImages() {
    const container = document.getElementById('background-image-container');
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.width = '100%';
    container.style.height = '150px'; // 根据需要调整高度

    const imageContainer = document.createElement('div');
    imageContainer.style.display = 'flex';
    imageContainer.style.transition = 'transform 0.5s ease-in-out';
    imageContainer.style.position = 'absolute';
    imageContainer.style.left = '0';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add('product-image');
        imgElement.style.marginRight = '20px'; // 设置图片间隔
        imgElement.onclick = () => openModal(image.src);
        imageContainer.appendChild(imgElement);
    });

    // // 复制图片以实现无缝滚动
    // images.forEach(image => {
    //     const imgElement = document.createElement('img');
    //     imgElement.src = image.src;
    //     imgElement.alt = image.alt;
    //     imgElement.classList.add('product-image');
    //     imgElement.style.marginRight = '20px'; // 设置图片间隔
    //     imgElement.onclick = () => openModal(image.src);
    //     imageContainer.appendChild(imgElement);
    // });
    // images.forEach(image => {
    //     const imgElement = document.createElement('img');
    //     imgElement.src = image.src;
    //     imgElement.alt = image.alt;
    //     imgElement.classList.add('product-image');
    //     imgElement.style.marginRight = '20px'; // 设置图片间隔
    //     imgElement.onclick = () => openModal(image.src);
    //     imageContainer.appendChild(imgElement);
    // });

    container.appendChild(imageContainer);

    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let isDragging = false;

    function setTransform() {
        imageContainer.style.transform = `translateX(${currentTranslate}px)`;
    }

    function onTouchStart(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        imageContainer.style.transition = 'none';
    }

    function onTouchMove(e) {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 1.5;
        currentTranslate += walk;
        startX = x;
        setTransform();
    }

    function onTouchEnd() {
        isDragging = false;
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        const imageWidth = imageContainer.clientWidth / (images.length * 1);
        currentIndex = Math.round(-currentTranslate / imageWidth);
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= images.length) currentIndex = images.length - 1;
        currentTranslate = -currentIndex * imageWidth;
        setTransform();
    }

    imageContainer.addEventListener('touchstart', onTouchStart);
    imageContainer.addEventListener('touchmove', onTouchMove);
    imageContainer.addEventListener('touchend', onTouchEnd);

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
            imageContainer.style.transition = 'none';
            imageContainer.style.transform = 'translateX(0)';
            setTimeout(() => {
                imageContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        } else {
            currentTranslate = -currentIndex * (imageContainer.clientWidth / (images.length * 1));
            setTransform();
        }
    }, 5000); // 每5秒滚动一次
}

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modalImage.style.transform = "scale(1)"; // 重置缩放
    zoomLevel = 1; // 重置缩放级别
    imageModal.classList.remove("hidden");
}

// 初始化
showPanel();
renderProducts();
// 加载商品清单图片
loadImages();