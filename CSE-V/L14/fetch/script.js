const container = document.getElementsByClassName("container")[0];
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.justifyContent = "center"
container.style.gap="30px"

fetch('data.json')
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data.products);

        for (let productData of data.products){
            const div = document.createElement("div");
            div.style.width="250px"

            const h2 = document.createElement("h2");
            h2.innerText= productData.title;

            const img = document.createElement('img');
            img.style.height="200px"
            img.setAttribute('src',productData.images[0]);

            let price = document.createElement("p");
            price.innerText=`price: ${productData.price}`;
        

            const desc = document.createElement('p');
            desc.innerText= productData.description;

            div.appendChild(h2);
            div.appendChild(img);
            div.appendChild(price);
            div.appendChild(desc);

            container.appendChild(div)
        }
    })