// get file name
    var url = window.location.pathname;
    var file_name = url.substring(url.lastIndexOf('/')+1);

//  Product List
    var data = { 
    'product1':{'name':'ببسي كبير ', 'price':250, 'img':'img/p1.jpeg'},
    'product2':{'name':'ربع دجاج فحم', 'price':600, 'img':'img/p2.jpeg'},
    'product3':{'name':'شاورما', 'price':400, 'img':'img/p3.jpeg'},
    'product4':{'name':'برقر لحم', 'price':1200, 'img':'img/p1.jpeg'},
    'product5':{'name':'شطائر البرقر 1  ','price':1700, 'img':'img/p1.jpeg'},
    'product6':{'name':'شطائر البرقر  2 ','price':1700, 'img':'img/p1.jpeg'},
    'product7':{'name':'شطائر البرقر  3 ','price':1700, 'img':'img/p1.jpeg'},
    'product8':{'name':'شطائر البرقر  4 ','price':1700, 'img':'img/p1.jpeg'},
    'product9':{'name':'شطائر البرقر  5 ','price':1700, 'img':'img/p1.jpeg'},
    'product10':{'name':'شطائر البرقر  6 ','price':1700, 'img':'img/p1.jpeg'},
    'product11':{'name':'شطائر البرقر  7 ','price':1700, 'img':'img/p1.jpeg'},
    'product12':{'name':'شطائر البرقر  8 ','price':1700, 'img':'img/p1.jpeg'},
    'product13':{'name':'شطائر البرقر  9 ','price':1700, 'img':'img/p1.jpeg'},
    'product14':{'name':'شطائر البرقر  10 ','price':1700, 'img':'img/p1.jpeg'},
    'product15':{'name':'شطائر البرقر  11 ','price':1700, 'img':'img/p1.jpeg'},
    'product16':{'name':'شطائر البرقر  12 ','price':1700, 'img':'img/p1.jpeg'},
    'product17':{'name':'شطائر البرقر  13 ','price':1700, 'img':'img/p1.jpeg'},
    'product18':{'name':'شطائر البرقر  14 ','price':1700, 'img':'img/p1.jpeg'},
    'product19':{'name':'شطائر البرقر  15 ','price':1700, 'img':'img/p1.jpeg'},
    'product20':{'name':'شطائر البرقر  16 ','price':1700, 'img':'img/p1.jpeg'},
    };
// end product data


		function load_product(){

			for(var key in data){
					// JSON Product render on load page...
					var product = document.createElement("div");
					product.id = key;
          product.setAttribute("class","card col-xs-1");
          product.setAttribute("style","width: 14rem; margin: 5px;");

					// Img
					var url = document.createElement("img");
          url.setAttribute("class","card-img-top");
					url.src = data[key]['img'];
					product.appendChild(url);

					// var car_body = document.createElement("div");
          // car_body.setAttribute("class","card-body");

            // Name
            var name = document.createElement("div");
            name.id = key+"_name";
            name.setAttribute("class","card-text text-center");
            name.innerHTML = data[key]['name'];
            product.appendChild(name);


            // Price
            var price = document.createElement("span");
            price.id = key+"_price";
            price.setAttribute("class","text-center");
            price.innerHTML = data[key]['price'];
            product.appendChild(price);

            var currency = document.createElement("span");
            currency.setAttribute("class","text-center");
            currency.innerHTML = " ريال يمني ";
            product.appendChild(currency);



            // Button Add to cart
            var btn = document.createElement("button");
            btn.setAttribute("class","btn btn-primary");
            btn.innerHTML = "إضافة الى السلة";
            btn.setAttribute("onclick","return addCart(this);");
            product.appendChild(btn);

          // product.appendChild(car_body);

					// main view add all json product to body view
					var view = document.getElementById('view')
					view.appendChild(product);
			}	
		}

	function addCart(self){
    var self = self;
		var cart = document.getElementById('cart');
		var p_name = self.parentNode.id+'_name';
		var p_price = self.parentNode.id+'_price';
		var name = document.getElementById(p_name).innerHTML;
		var price = document.getElementById(p_price).innerHTML;


		var lines = document.createElement("div");
    lines.setAttribute("class","cart_lines row border")
		var line_name = document.createElement("div");
    line_name.setAttribute("class","col-6")
		line_name.innerHTML = name +"\t";
		var line_price = document.createElement("div");
    line_price.setAttribute("class","col-2")
		line_price.innerHTML = price ;
		var line_input = document.createElement("input");
    line_input.setAttribute("readonly","true");
		line_input.value = 1;
		line_input.size = 1;
    


		// Button decress
		var decress = document.createElement("button");
    decress.setAttribute("class","btn btn-outline-warning btn-sm");
		decress.innerHTML = "-";
		decress.setAttribute("onclick","if(this.parentNode.childNodes[2].value > 1){return this.parentNode.childNodes[2].value-- , calculate();}");


		// Button incress
		var incress = document.createElement("button");
    incress.setAttribute("class","btn btn-outline-primary btn-sm");
		incress.innerHTML = "+";
		incress.setAttribute("onclick","return this.parentNode.childNodes[2].value++, calculate();");


		// Delete Button
		var delete_btn = document.createElement("button");
		delete_btn.innerHTML = "x";
    delete_btn.setAttribute("class","btn btn-danger btn-sm");
		delete_btn.setAttribute("onclick","this.parentNode.remove(), calculate();");
		// delete_btn.setAttribute("onmouseover","return calculate();");


  //  -------------------------------------------------------
    var test_lines = document.querySelectorAll(".cart_lines");
  
      var x = 0;
      for (var i = 0; i < test_lines.length; i++) {
      var test_product_names_iside_cart = test_lines[i].childNodes[0].innerHTML;
      var test_product_name_from_list = self.parentNode.childNodes[1].innerHTML + "\t"
      if(test_product_names_iside_cart == test_product_name_from_list){
          test_lines[i].childNodes[2].value ++;
          // alert("المنتج مكرر!!" + test_lines[i].childNodes[2].value);
          x = 1
          break;
          };
      };
      if (x == 0){
        appendFun(line_name,line_price,line_input,decress,incress,delete_btn,lines);
      }

  // --------------------------------------------------------
function appendFun(line_name,line_price,line_input,decress,incress,delete_btn,lines) {
		lines.appendChild(line_name);
		lines.appendChild(line_price);
		lines.appendChild(line_input);
		lines.appendChild(decress);
		lines.appendChild(incress);
		lines.appendChild(delete_btn);
		cart.appendChild(lines);
}
		calculate();
	}

	function calculate(){
		var sum = 0;
		var total = document.getElementById('cart');
		for (var i = total.childNodes.length - 1; i >= 0; i--) {
		var p = total.childNodes[i];
		var child_name = p.childNodes[0].innerHTML;
		var child_price = p.childNodes[1].innerHTML;
		var child_input = p.childNodes[2].value;
		sum += parseFloat(child_price * child_input);
		document.getElementById('tot').innerHTML = " الإجمالي : "+sum+ " ريال ";
		document.getElementById('count').innerHTML = total.childNodes.length;
		
		}
	}

	function send_bill(){
    var user_name = document.getElementById('user_name').value;
    var user_address = document.getElementById('user_address').value;
    var arr = [];
		var sum = 0;
		var total = document.getElementById('cart');
		for (var i = total.childNodes.length - 1; i >= 0; i--) {
		var p = total.childNodes[i];
		var child_name = p.childNodes[0].innerHTML;
		var child_price = p.childNodes[1].innerHTML;
		var child_input = p.childNodes[2].value;
		sum += parseFloat(child_price * child_input);
		arr.unshift(child_name+" , السعر "+child_price+ "  عدد ( "+child_input+" ) %0a \n");
    }
		var url = "https://wa.me/+967773710567?text='*فودأونلاين *%0a%0a'" + arr + '%0a____________%0a Total : '+sum+" %0a الاسم : "+ user_name+" %0a العنوان : "+user_address;
    // alert(arr)
    return window.open(url,'_blank','location=1');
	}