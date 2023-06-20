const productos= [
    {id:1, nombre:"Lavado Premium", imagen: "https://insidemdp.com.ar/wp-content/uploads/2022/09/lavado-de-autos-en-mar-del-palta.jpg", precio:4000},
    {id:2, nombre:"Limpieza de interior", imagen: "https://customgarageperu.com/wp-content/uploads/2021/01/lavado-salon-1536x922.jpg", precio:2500},
    {id:3, nombre:"Pulido Detailing", imagen: "https://autolab.mx/wp-content/uploads/2022/06/pulir-auto-scaled.jpg", precio:20000},
    {id:4, nombre:"Lavado", imagen: "https://previews.123rf.com/images/aprior/aprior1709/aprior170900045/85576275-coche-en-champ%C3%BA-para-lavado-de-autos.jpg", precio:1500},
    {id:5, nombre:"Revisión y reparación de frenos", imagen: "https://www.fmgbrakes.com/media/roadhouse-diagnostico-problemas-frecuentes-sistema-frenado.jpg", precio:15000},
    {id:6, nombre:"Cambio de aceite y filtros (mano de obra)", imagen: "https://www.bipandbip.com/blog/wp-content/uploads/2017/11/BLOG-Generthec.jpg", precio:8000},
    {id:7, nombre:"kit filtros Renault Kangoo 1.6 16v K4m", imagen: "https://http2.mlstatic.com/D_NQ_NP_971307-MLA49032877815_022022-O.jpg", precio:7500},
    {id:8, nombre:"kit filtros Chevrolet corsa 1.8 8v", imagen: "https://http2.mlstatic.com/D_NQ_NP_966670-MLA41881900117_052020-O.webp", precio:12000},
    {id:9, nombre:"Kit filtros Peugeot 208 1.6 (mod 2020/2023)", imagen: "https://http2.mlstatic.com/D_NQ_NP_659268-MLA52029922887_102022-O.webp", precio:13000},
    {id:10, nombre:"Kit filtros Fiat Punto, Palio, Siena  1.8", imagen: "https://http2.mlstatic.com/D_NQ_NP_776526-MLA31343828390_072019-O.webp", precio:15000},
    {id:12, nombre:"Kit filtros Fiat Punto, Palio, Siena 1.4", imagen: "https://http2.mlstatic.com/D_NQ_NP_831748-MLA31022272128_062019-O.webp", precio:15000},
    {id:13, nombre:"Kit filtros Ford Fiesta 1.6", imagen: "https://neumaticosflores.com.ar/media/catalog/product/cache/b2a1c19d9820466908ac0bb3a4a5b50f/w/o/wo-152-fap-9286-fci-1694-akx-35347-f.jpg", precio:11500},
    {id:14, nombre:"Kit filtros Renault Clio 1.2 16v", imagen: "https://http2.mlstatic.com/D_NQ_NP_899752-MLA48320578618_112021-O.webp", precio:7500},
    {id:15, nombre:"Kit filtros Chevrolet Montana 1.8", imagen: "https://http2.mlstatic.com/D_NQ_NP_772422-MLA41425535480_042020-O.webp", precio:18000},
    {id:16, nombre:"Kit filtros Ford Focus 2.0", imagen: "https://http2.mlstatic.com/D_NQ_NP_722680-MLA40052983383_122019-O.webp", precio:20000},
    {id:17, nombre:"Kit filtros Peugeot 207", imagen: "https://http2.mlstatic.com/D_NQ_NP_785087-MLA46586630051_072021-O.webp", precio:13500},
    {id:18, nombre:"Kit filtros Honda Civic", imagen: "https://http2.mlstatic.com/D_NQ_NP_949499-MLA51453040604_092022-O.webp", precio:18000},
    {id:19, nombre:"Aceite Valvoline 5W-40", imagen: "https://repuestodoservice.com.ar/wp-content/uploads/2021/03/VALVOLINE-SYNPOWER-5W40-DEXOS.png", precio:22000},
    {id:20, nombre:"Aceite Valvoline 10W-40", imagen: "https://http2.mlstatic.com/D_NQ_NP_920244-MLA51699585848_092022-O.webp", precio:9000},
    {id:21, nombre:"Aceite Valvoline 15W-40", imagen: "https://http2.mlstatic.com/D_NQ_NP_894434-MLA50160660407_062022-O.webp", precio:9000},
    {id:22, nombre:"Aceite Selenia 5W-30", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApXKy6mJ9himK3YShtvuUYLFe397SJI7w2pBdzmK_PH8PWOZW6iFLG7zsZ1i99k7i3A0&usqp=CAU", precio:20000},
    {id:23, nombre:"Aceite Elaion 15W-40", imagen: "https://repuestodoservice.com.ar/wp-content/uploads/2021/03/SELENIA-K-15W40.jpg", precio:15000},
    {id:24, nombre:"Aceite Elaion 10W-40", imagen: "https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/08/elaion-f30.jpg", precio:13000},
    {id:25, nombre:"Aceite Selenia 15W-40", imagen: "https://lubritodo.com/wp-content/uploads/2018/03/ELAION-F10-15W40.jpg", precio:15000}
];

guardarProductosLS();