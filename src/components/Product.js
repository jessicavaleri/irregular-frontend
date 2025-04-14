import React from 'react';
import './Product.css';
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import keranjang from "../assets/keranjang.png";

export const Product = () => {
    return (
        <div class="content">
            <div className='line1'>
                <div class="product1">
                    <img src={product1} alt="Product1" className="img-product1" />
                    <div class="text-product1">
                        <h3>Kaos 30s</h3>
                        <li>Dijahit dengan 3 jarum</li>
                        <li>Bahan adem lembut keringat </li>
                        <li>Warna tidak mudah pudar</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product2">
                    <img src={product2} alt="Product2" className="img-product2" />
                    <div class="text-product2">
                        <h3>Kaos 24s</h3>
                        <li>Jahitan rantai</li>
                        <li>Bahan cotton combed 24s tebal</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product3">
                    <img src={product3} alt="Product3" className="img-product3" />
                    <div class="text-product3">
                        <h3>Kaos 20s</h3>
                        <li>Kain lembut, adem, dan breathable</li>
                        <li>Sirkulasi udara optimal</li>
                        <li>Tetap sejuk meski cuaca panas</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>
            
            </div>

            <div className='line2'>
                <div class="product1">
                    <img src={product4} alt="Product1" className="img-product1" />
                    <div class="text-product1">
                        <h3>Kaos Mood Ironi Edition</h3>
                        <li>Karakter lucu</li>
                        <li>Sablon kuat dan tahan lama</li>
                        <li>Cocok untuk gaya santai</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product2">
                    <img src={product5} alt="Product2" className="img-product2" />
                    <div class="text-product2">
                        <h3>Kaos Saturn Space Edition</h3>
                        <li>Bahan Katun combed 100%</li>
                        <li>Sablon berkualitas tinggi</li>
                        <li>Nyaman dipakai untuk harian </li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product3">
                    <img src={product6} alt="Product3" className="img-product3" />
                    <div class="text-product3">
                        <h3>Kaos Oversize Graffiti Edition</h3>
                        <li>Bahan Katun combed 100%</li>
                        <li>Kualitas sablon tinggi & tahan lama</li>
                        <li>Nyaman dipakai dan tidak luntur </li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>
            
            </div>

            <div className='line3'>
                <div class="product1">
                    <img src={product7} alt="Product1" className="img-product1" />
                    <div class="text-product1">
                        <h3>Kaos Unisex Face Edition</h3>
                        <li>Bahan Katun combed 100%</li>
                        <li>Bahan lembut, adem, & nyaman </li>
                        <li>Sablon awet, tidak mudah pudar</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product2">
                    <img src={product8} alt="Product2" className="img-product2" />
                    <div class="text-product2">
                        <h3>Kaos Visual Collage Edition</h3>
                        <li>Bahan Katun combed 100%</li>
                        <li>Sablon berkualitas tinggi</li>
                        <li>Desain bergaya kontemporer</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>

                <div class="product3">
                    <img src={product9} alt="Product3" className="img-product3" />
                    <div class="text-product3">
                        <h3>Kaos Vintage Edition</h3>
                        <li>Bahan Katun 100% premium</li>
                        <li>Desain unik</li>
                        <li>Tetap sejuk meski cuaca panas</li>
                    </div>
                    <div class="harga">
                        <h3>Rp 88.999,00</h3>
                        <div className='keranjang'>
                            <img src={keranjang} alt="keranjang" className="keranjang" />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

);
};