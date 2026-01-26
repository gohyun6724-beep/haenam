import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyCTA = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}
            className="desktop-only" // Mobile has its own bar, keep this for tablet/desktop or override if needed
        >
            <motion.a
                href="https://open.kakao.com/o/yourlink" // Replace with actual link
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#FEE500', // Kakao Yellow
                    color: '#3C1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    border: 'none',
                    position: 'relative'
                }}
            >
                <div style={{ position: 'absolute', right: 0, top: 0, width: '12px', height: '12px', background: 'red', borderRadius: '50%', border: '2px solid white' }}></div>
                <MessageCircle size={28} fill="#3C1E1E" />
            </motion.a>

            <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-blue)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
                    cursor: 'pointer'
                }}
            >
                <Phone size={24} />
            </motion.button>
        </motion.div>
    );
};

export default StickyCTA;
