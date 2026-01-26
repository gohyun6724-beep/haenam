import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BookOpen, Award, TrendingUp, Zap } from 'lucide-react';

const AdvancedCourse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>

                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <div className="badge-pill badge-red" style={{ marginBottom: '16px' }}>Elite Course</div>
                        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1E293B' }}>심화 선행반</h1>
                        <p style={{ fontSize: '20px', color: '#64748B' }}>"중등 100점을 넘어, 고등 1등급을 준비합니다."</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Zap size={24} color="var(--accent-red)" fill="var(--accent-red)" /> 심화 학습의 필요성
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155' }}>
                                    중학교 A등급이 고등학교 1등급을 보장하지 않습니다.<br />
                                    고등 수학은 양과 깊이가 다릅니다. 중등 과정에서 충분한 심화 학습 없이 고등 과정에 진입하면 무너집니다.<br />
                                    현행 심화를 통해 '생각하는 힘'을 기르고, 체계적인 선행 학습으로 입시 경쟁력을 갖춥니다.
                                </p>
                            </div>

                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>킬러 문항 정복</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { step: "DEEP", title: "심화서 3회독", text: "일품, 블랙라벨 등 심화 교재를 반복하여 오답률 0%에 도전합니다." },
                                        { step: "HIGH", title: "고등 수학 연계", text: "중등 개념과 연결되는 고1 공통수학(상/하) 내용을 미리 맛봅니다." },
                                        { step: "TEST", title: "강남/목동 기출", text: "교육 특구의 고난도 기출 문제를 통해 전국 단위 실력을 점검합니다." }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '20px', paddingBottom: idx !== 2 ? '20px' : 0, borderBottom: idx !== 2 ? '1px solid #E2E8F0' : 'none' }}>
                                            <div style={{ fontWeight: '800', color: 'var(--accent-red)', minWidth: '60px' }}>{item.step}</div>
                                            <div>
                                                <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '6px' }}>{item.title}</div>
                                                <div style={{ color: '#64748B', fontSize: '15px' }}>{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="premium-card" style={{ padding: '30px', borderTop: '4px solid var(--accent-red)' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Main Textbooks</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> 일품 / 블랙라벨
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> 고쟁이 / 최상위수학
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <TrendingUp size={18} color="#94A3B8" /> 공통수학 기본 정석
                                    </li>
                                </ul>
                            </div>

                            <div className="premium-card" style={{ padding: '30px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#991B1B' }}>목표 달성 클래스</h4>
                                <ul style={{ fontSize: '15px', color: '#991B1B', lineHeight: '1.8' }}>
                                    <li>✔ 특목고/자사고 입학 희망</li>
                                    <li>✔ 현행 90점 이상 안정권 학생</li>
                                    <li>✔ 수학적 호기심이 많은 영재 성향</li>
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

export default AdvancedCourse;
