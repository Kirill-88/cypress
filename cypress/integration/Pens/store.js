describe('Покупка товаров', function() {
    
    it('Открытие сайта', function(){
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg');
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button');
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg');
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.contains('БРОММС Двухместная кровать');
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.contains('КЛЛАРИОН Низкий столик');
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-right-items > .header-cart > a').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Кирилл');
        cy.get('#billing_last_name').type('Люткин');
        cy.get('#billing_address_1').type('Гагарина 88');
        cy.get('#billing_city').type('Санкт-Петербург');
        cy.get('#billing_state').type('Ломоносовская');
        cy.get('#billing_postcode').type('140182');
        cy.get('#billing_phone').type('89656584854');
        cy.get('#billing_email').type('german@dolnikov.ru');
        cy.get('#place_order');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
    })
})
