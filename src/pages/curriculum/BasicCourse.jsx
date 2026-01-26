import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BookOpen, Check, Star, Users, Calculator } from 'lucide-react';

const BasicCourse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>

                    {/* Header */}
                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <div className="badge-pill badge-gold" style={{ marginBottom: '16px' }}>Foundation Course</div>
                        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1E293B' }}>개념 완성반</h1>
                        <p style={{ fontSize: '20px', color: '#64748B' }}>"수학이 두려운 학생에게 자신감을 심어줍니다."</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>

                        {/* Left Content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                            {/* Philosophy */}
                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Star size={24} color="var(--primary-blue)" fill="var(--primary-blue)" /> 수업 목표
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155' }}>
                                    중하위권 학생들이 수학을 포기하는 가장 큰 이유는 '무슨 말인지 몰라서'입니다.<br />
                                    해냄수학 기초반은 진도를 빨리 나가는 것보다 <strong>단 하나를 배우더라도 정확하게 이해하는 것</strong>을 목표로 합니다.<br />
                                    쉬운 교재로 성취감을 느끼게 하여 "나도 할 수 있다"는 생각을 심어줍니다.
                                </p>
                            </div>

                            {/* Roadmap */}
                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>학습 로드맵</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { step: "STEP 1", title: "용어 & 개념 정리", text: "교과서 위주의 쉬운 설명으로 수학 용어와 친해집니다." },
                                        { step: "STEP 2", title: "연산 반복 훈련", text: "계산 실수를 줄이기 위해 '수력충전' 등 연산 교재를 병행합니다." },
                                        { step: "STEP 3", title: "쉬운 유형 풀기", text: "'개념+유형' 라이트 교재로 기본 문제 해결 능력을 기릅니다." }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '20px', paddingBottom: idx !== 2 ? '20px' : 0, borderBottom: idx !== 2 ? '1px solid #E2E8F0' : 'none' }}>
                                            <div style={{ fontWeight: '800', color: 'var(--primary-blue)', minWidth: '60px' }}>{item.step}</div>
                                            <div>
                                                <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '6px' }}>{item.title}</div>
                                                <div style={{ color: '#64748B', fontSize: '15px' }}>{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Sidebar */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="premium-card" style={{ padding: '30px', borderTop: '4px solid var(--accent-gold)' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Main Textbooks</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> 개념+유형 (비상)
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <Calculator size={18} color="#94A3B8" /> 수력충전 / 연산더블클릭
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> 교과서 & 자습서
                                    </li>
                                </ul>
                            </div>

                            <div className="premium-card" style={{ padding: '30px', backgroundColor: '#FEFCE8', border: '1px solid #FEF08A' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#854D0E' }}>이런 학생에게 추천!</h4>
                                <ul style={{ fontSize: '15px', color: '#854D0E', lineHeight: '1.8' }}>
                                    <li>✔ 수학 단어만 봐도 머리가 아픈 학생</li>
                                    <li>✔ 선행보다 현행도 벅찬 학생</li>
                                    <li>✔ 기초 계산에서 자꾸 틀리는 학생</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BasicCourse;
