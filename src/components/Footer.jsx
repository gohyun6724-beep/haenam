import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--deep-navy)',
            color: 'white',
            padding: '80px 0 40px',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '60px'
                }}>
                    <div>
                        <div>
                            <div style={{ marginBottom: '20px' }}>
                                <img src="/images/logo.png" alt="해냄수학" style={{ height: '30px', filter: 'invert(1)', mixBlendMode: 'screen' }} />
                            </div>
                            <p style={{ color: '#94A3B8', lineHeight: '1.8', fontSize: '15px' }}>
                                <strong>원장: 김경숙</strong> | 등록번호: 제1234호<br />
                                부산 명장동 수학 전문학원<br />
                                엄마의 마음으로 끝까지 책임지는 1:1 밀착 케어
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Contact</h4>
                        <ul style={{ color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li>위치: 부산 동래구 명장로127번길 10, 2층</li>
                            <li>전화: 010-XXXX-XXXX</li>
                            <li>상담: 평일 오후 2시 - 오후 10시</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Links</h4>
                        <ul style={{ color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><a href="https://talk.naver.com" target="_blank" rel="noreferrer">네이버 톡톡 상담</a></li>
                            <li><a href="#blog">원장님 칼럼 읽기</a></li>
                            <li><a href="#location">오시는 길</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    color: '#64748B',
                    fontSize: '14px'
                }}>
                    © 2024 해냄수학. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
