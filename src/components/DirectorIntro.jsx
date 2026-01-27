import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const DirectorIntro = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: '100px 0', backgroundColor: 'white' }}
        >
            <div className="container director-grid">
                {/* Image / Silhouette Area */}
                <div style={{ position: 'relative', width: '100%' }}>
                    <div className="director-image-card">
                        {/* Fallback text if no image */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94A3B8', fontWeight: '700' }}>
                            Director Photo
                        </div>
                    </div>
                    <div className="director-name-badge">
                        <div style={{ fontSize: '14px', fontWeight: '400', opacity: 0.9, marginBottom: '4px' }}>해냄수학 원장</div>
                        <div style={{ fontSize: '24px', fontWeight: '800' }}>김 경 숙</div>
                    </div>
                </div>

                {/* Text Area */}
                <div className="director-text-content">
                    <Quote size={32} color="var(--primary-blue)" style={{ opacity: 0.3, marginBottom: '12px' }} />
                    <h2 className="director-quote" style={{ fontSize: '36px', marginBottom: '24px', lineHeight: '1.3' }}>
                        "강사가 아닌 <span style={{ color: 'var(--primary-blue)', textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationColor: 'rgba(37, 99, 235, 0.3)' }}>엄마의 마음</span>으로,<br className="desktop-only" /> 아이가 스스로 해낼 때까지 함께합니다."
                    </h2>
                    <div style={{ fontSize: '18px', color: 'var(--text-sub)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px', wordBreak: 'keep-all' }}>
                        <p>안녕하세요, <strong>해냄수학 원장 김경숙</strong>입니다.</p>

                        <p>
                            수학이 어렵고 두려운 아이들에게 가장 필요한 것은<br className="mobile-only" />
                            문제풀이 스킬이 아닌 <strong>'할 수 있다'는 믿음</strong>입니다.
                        </p>

                        <p>
                            저는 단순히 지식을 전달하는 강사가 아닙니다.<br className="mobile-only" />
                            어머니의 시선으로 아이를 세밀하게 살피며,<br className="desktop-only" />
                            <strong>무너진 자존감부터 회복</strong>시킵니다.
                        </p>

                        <p style={{ marginTop: '8px' }}>
                            <strong style={{ background: 'linear-gradient(120deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.0) 100%)', padding: '0 4px' }}>'결국 스스로 해냈다'</strong>는 작은 성공 경험이<br className="desktop-only" />
                            쌓여 아이의 인생을 바꿉니다.
                        </p>

                        <p>
                            우리 아이가 포기하지 않고 끝까지 완주할 수 있도록,<br className="desktop-only" />
                            따뜻하지만 단단한 <strong>1:1 밀착 케어</strong>로 이끌겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default DirectorIntro;
