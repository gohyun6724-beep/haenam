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
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
                {/* Image / Silhouette Area */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: '#F1F5F9',
                        borderRadius: '24px',
                        backgroundImage: 'url(/images/director.jpg)', // Placeholder for real image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: 'var(--shadow-float)'
                    }}>
                        {/* Fallback text if no image */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94A3B8', fontWeight: '700' }}>
                            Director Photo
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-30px',
                        right: '-30px',
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        padding: '30px',
                        borderRadius: '16px',
                        boxShadow: 'var(--shadow-card)'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '400', opacity: 0.9 }}>해냄수학 원장</div>
                        <div style={{ fontSize: '24px', fontWeight: '800' }}>김 경 숙</div>
                    </div>
                </div>

                {/* Text Area */}
                <div>
                    <Quote size={48} color="var(--primary-blue)" style={{ opacity: 0.2, marginBottom: '20px' }} />
                    <h2 style={{ fontSize: '36px', marginBottom: '30px', lineHeight: '1.3' }}>
                        "강사가 아닌 <span style={{ color: 'var(--primary-blue)' }}>엄마의 마음</span>으로, 아이가 스스로 해낼 때까지 함께합니다."
                    </h2>
                    <div style={{ fontSize: '18px', color: 'var(--text-sub)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p>안녕하세요, 해냄수학 원장 김경숙입니다.</p>
                        <p style={{ marginBottom: '16px' }}>수학이 어렵고 두려운 아이들에게 가장 필요한 것은 '할 수 있다'는 믿음입니다.</p>

                        <p>저는 단순히 지식을 전달하는 강사가 아닙니다.</p>
                        <p>어머니의 시선(Maternal Care)으로 아이의 상태를 세밀하게 살피며,</p>
                        <p style={{ marginBottom: '16px' }}>무조건적인 성적 향상 이전에 <strong>무너진 자존감부터 회복</strong>시킵니다.</p>

                        <p><strong style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent-gold)', textDecorationThickness: '3px' }}>'결국 스스로 해냈다'</strong>는 성공 경험이 아이의 인생을 바꿉니다.</p>
                        <p>우리 아이가 포기하지 않고 끝까지 완주할 수 있도록,</p>
                        <p>따뜻하지만 단단한 1:1 밀착 케어로 이끌겠습니다.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default DirectorIntro;
