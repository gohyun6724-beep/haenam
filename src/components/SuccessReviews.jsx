import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SuccessReviews = () => {
    const reviews = [
        {
            name: "박○우 (중2)",
            title: "24점 → 88점의 기적",
            desc: "수포자나 다름없던 아이였습니다. 기초가 너무 없어서 학원 가기도 싫어했는데, 원장님이 손잡고 연산부터 차근차근 다시 해주셨어요. '계단식 성장'이란 게 이런 건가 봐요. 이번 시험 88점 받고 아이가 처음으로 수학이 재밌다고 하네요.",
            tag: "#성장형모델 #기초회복"
        },
        {
            name: "김○윤 (중3)",
            title: "전 과목 100점 만점",
            desc: "최상위권을 목표로 하지만 2% 부족한 실수가 문제였습니다. 해냄수학의 문해력 기반 심화 풀이 덕분에 킬러 문제도 흔들리지 않게 되었어요. 결국 이번 기말고사에서 전 과목 올백을 달성했습니다.",
            tag: "#완성형모델 #전과목만점"
        },
        {
            name: "이○서 (초5)",
            title: "자존감이 살아났어요",
            desc: "항상 '난 수학 못해'라며 의기소침했는데, 선생님이 작은 성공에도 칭찬을 아끼지 않으시니 아이 눈빛이 달라졌어요. 이제는 어려운 문제도 '내가 한번 풀어볼게!'라고 달려듭니다. 엄마로서 너무 감사합니다.",
            tag: "#심리적임파워먼트 #자존감"
        }
    ];

    return (
        <section style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">불가능을 가능으로 바꿉니다</h2>
                    <p className="section-subtitle">24점의 기적부터 전 과목 만점 신화까지, 해냄수학의 증명된 결과입니다.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="premium-card"
                            style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
                            </div>
                            <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--primary-dark)' }}>{review.title}</h3>
                            <p style={{ fontSize: '16px', color: 'var(--text-sub)', lineHeight: '1.7', flex: 1, marginBottom: '24px' }}>
                                "{review.desc}"
                            </p>
                            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: '700', fontSize: '15px' }}>{review.name} 어머니</div>
                                <span className="badge-pill badge-blue" style={{ fontSize: '12px' }}>{review.tag}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessReviews;
