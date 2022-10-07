import React, { useRef, useState } from 'react'
import { qrCode } from '../../assets/assets'
import { Footer } from '../../components/footer/footer';
import './link-info.scss'

export const LinkInfo = () => {
    const [copyStatus, setCopied] = useState('Copy Link');
    return (
        <>
            <section className='session-info'>
                <section className='qr'>
                    <img src={qrCode} alt="qr code" />
                </section>
                <section className={`session-link`}>
                    <p className='share-text'>Share link<span className={`btn-copy ${copyStatus === 'Copied' ? 'copied' : ''}`} onClick={() => {
                        navigator.clipboard.writeText(window.location.protocol + '//' + window.location.host +'/tegd6-dggd-dgag-dtefvf')
                        setCopied('Copied')
                    }}>{copyStatus}</span></p>
                </section>
            </section>
            <Footer />
        </>
    )
}
