const watches=[
    {
        pro:"fastrack.jpg",
        rate:2000
    }
];
    const bages=[
        {
            pro:"bages(1).jpg",
            rate:2000
        },
        {
            pro:"bages(2).jpg",
            rate:3067
        },
        {
            pro:"bages(3).jpg",
            rate:8752
        },
        {
            pro:"bages(4).jpg",
            rate:1000
        },
        {
            pro:"bages(5).jpg",
            rate:5000
        },
        {
            pro:"bages(6).jpg",
            rate:1300
        },
        {
            pro:"bages(7).jpg",
            rate:2180
        }
       
    ];
    const dresses=[
        {
            pro:"dresses(1).jpg",
            rate:200
        },
        {
            pro:"dresses(2).jpg",
            rate:300
        },
        {
            pro:"dresses(3).jpg",
            rate:250
        },
        {
            pro:"dresses(4).jpg",
            rate:100
        },
        {
            pro:"dresses(5).jpg",
            rate:500
        },
        {
            pro:"dresses(6).jpg",
            rate:1300
        }
       
    ];
    const toys=[
        {
            pro:"toy(1).jpg",
            rate:200
        },
        {
            pro:"toy(2).jpg",
            rate:300
        },
        {
            pro:"toy(3).jpg",
            rate:250
        },
        {
            pro:"toy(4).jpg",
            rate:100
        },
        {
            pro:"toy(5).jpg",
            rate:500
        },
        {
            pro:"toy(6).jpg",
            rate:1300
        },
        {
            pro:"toy(7).jpg",
            rate:2080
        }
       
    ];
    const shoes=[
        {
            pro:"shoes(1).jpg",
            rate:200
        },
        {
            pro:"shoes(2).jpg",
            rate:300
        },
        {
            pro:"shoes(3).jpg",
            rate:250
        },
        {
            pro:"shoes(4).jpg",
            rate:100
        },
        {
            pro:"shoes(5).jpg",
            rate:500
        },
        {
            pro:"shoes(6).jpg",
            rate:1300
        },
        {
            pro:"shoes(7).jpg",
            rate:2080
        },
        {
            pro:"shoes(8).jpg",
            rate:3600
        }
       
    ];

    let arrayval = [];

    function fun(a) {
        arr = a.split(",");
        for (let i = 0; i < arr.length; i++) {
            let n = arr[i];
            arrayval.push(n);
        }
        updateCartCount();
    }
    
    function showDetails() {
        let cartDetails = '';
        let sum = 0;
    
        for (let i = 0; i < arrayval.length; i += 2) {
            cartDetails += '<div class="cart-item"><img src="http://127.0.0.1:8000/static/'+arrayval[i]+'"><p>'+arrayval[i + 1]+'</p></div>';
            console.log(`<div class="cart-item"><img src="{% static ${arrayval[i]} %}"><p>${arrayval[i + 1]}</p></div>`)          
            sum += parseInt(arrayval[i + 1]);
        }
    
        if (cartDetails === '') {
            alert("Cart is Empty"); // You can replace this with your preferred way of notifying the user
        } else {
            Swal.fire({
                title: 'Shopping Cart',
                html: cartDetails,
                footer: `<div class="total">Grand Total = ${sum}</div>`,
                showCancelButton: true,
                confirmButtonText: 'Buy',
                confirmButtonColor: '#3085d6',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    placeOrder();
                }
            });
        }
    }
    
    function placeOrder() {
        // Add logic for placing the order here
        Swal.fire({
            title: 'Order Placed Successfully',
            icon: 'success',
            text: 'Thank you for your purchase!',
        });
    }
    
    
    function updateCartCount() {
        const cartCount = document.getElementById("card-btn");
        if (cartCount) {
            cartCount.textContent = arrayval.length / 2;
        }
    }
    