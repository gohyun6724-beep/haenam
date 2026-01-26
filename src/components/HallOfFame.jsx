import React from 'react';
import { motion } from 'framer-motion';

const HallOfFame = () => {
    const successCases = [
        "충렬고 1학년 김○수 수학 1등급",
        "안락중 3학년 이○진 전교 5등",
        "혜화여고 2학년 박○은 내신 100점",
        "동래고 1학년 최○우 모의고사 1등급",
        "유락여중 2학년 정○민 30점 → 90점 상승",
        "충렬고 3학년 강○호 한양대 합격",
        "안락중 2학년 송○윤 서술형 만점",
        "혜화여고 1학년 윤○아 반 1등",
        "이사벨고 2학년 한○준 수학 1등급",
        "학산여고 1학년 서○희 3개월만에 3등급 상승"
    ];

    // Duplicate list for seamless loop
    const marqueeList = [...successCases, ...successCases, ...successCases];

    return (
        <div style={{
            backgroundColor: 'var(--primary-dark)',
            color: 'white',
            padding: '12px 0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div style={{
                backgroundColor: 'var(--accent-red)',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '800',
                marginLeft: '20px',
                marginRight: '20px',
                whiteSpace: 'nowrap',
                boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)',
                zIndex: 10
            }}>
                명예의 전당
            </div>

            <motion.div
                style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap' }}
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {marqueeList.map((text, idx) => (
                    <span key={idx} style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        opacity: 0.9,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ width: '4px', height: '4px', background: 'var(--accent-gold)', borderRadius: '50%' }}></span>
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default HallOfFame;
