import { useEffect, useState } from 'react';
import Image from "next/image";
import style from '../../styles/Card.module.css';

export default function Card({ title, body, img }) {
    return (
        <div className={style.pushable}>
            <Image src={img} width={70} height={70}></Image>
            <div className={style.content}>
                <h2>{title}</h2>
                <div className={style.body}>
                    {body} 
                </div>
            </div>

        </div>
    );

}
/*
<div className="enlaces">
                        <div className="content-buttons">
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                        </div>
                    </div>
*/