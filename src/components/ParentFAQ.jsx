import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid #E2E8F0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start', // Align top for multi-line
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '10px'
                }}
            >
                <span style={{ fontSize: '18px', fontWeight: '700', color: isOpen ? 'var(--primary-blue)' : 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: '1.4' }}>
                    <HelpCircle size={24} color={isOpen ? 'var(--primary-blue)' : '#94A3B8'} style={{ minWidth: '24px', marginTop: '2px' }} />
                    <span style={{ wordBreak: 'keep-all' }}>{question}</span>
                </span>
                {isOpen ? <ChevronUp size={24} color="var(--primary-blue)" style={{ minWidth: '24px' }} /> : <ChevronDown size={24} color="#94A3B8" style={{ minWidth: '24px' }} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 0 30px 32px', color: 'var(--text-sub)', lineHeight: '1.8', fontSize: '16px' }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ParentFAQ = () => {
    const faqs = [
        { q: "차량 운행을 하나요?", a: "현재 안락동, 명장동, 반여동 일부 지역까지 차량 운행을 하고 있습니다. 자세한 노선은 상담 시 안내해 드립니다." },
        { q: "한 반 정원은 몇 명인가요?", a: "최대 6명 소수 정예로 운영됩니다. 판서식 수업이 아닌 1:1 개별 맞춤 수업이기 때문에 선생님이 한 명 한 명 꼼꼼하게 케어할 수 있는 인원을 유지합니다." },
        { q: "숙제가 많나요?", a: "학생의 수준에 따라 다릅니다. 하지만 '학원에서 다 끝내고 가자'는 것이 원칙입니다. 집에서는 편안하게 쉴 수 있도록, 오답 정리와 필수 과제는 학원 자습실에서 관리 교사와 함께 마무리합니다." },
        { q: "시험 기간 대비는 어떻게 하나요?", a: "시험 4주 전부터 '내신 집중 기간'에 들어갑니다. 학교별 기출 족보 풀이, 서술형 감점 방지 훈련, 주말 모의고사를 통해 실전 감각을 극대화합니다." },
        { q: "수포자인데 따라갈 수 있을까요?", a: "해냄수학이 가장 잘하는 분야입니다. 무리한 진도보다는, 아이가 풀 수 있는 쉬운 문제부터 시작해 '나도 할 수 있다'는 성취감을 줍니다. 3개월만 믿고 맡겨주세요." }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header">
                    <h2 className="section-title">자주 묻는 질문</h2>
                    <p className="section-subtitle">학부모님들이 등록 전 가장 많이 물어보시는 내용입니다.</p>
                </div>

                <div style={{ borderTop: '2px solid var(--text-main)' }}>
                    {faqs.map((faq, idx) => <FAQItem key={idx} question={faq.q} answer={faq.a} />)}
                </div>
            </div>
        </section>
    );
};

export default ParentFAQ;
