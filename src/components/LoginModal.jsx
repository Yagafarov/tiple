import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

import { useLanguage } from './LanguageContext';


const LoginModal = ({ open, onClose }) => {
    
    const { language } = useLanguage();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login:', login);
        console.log('Parol:', password);
        onClose();
    };
   
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{language === 'ru' ? 'Авторизоваться' : 'Kirish'}</DialogTitle>
            <DialogContent>
                <Typography variant="body1" gutterBottom>
                {language === 'ru' ? 'Пожалуйста, введите логин и пароль' : 'Iltimos, login va parolingizni kiriting'}
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    label={language === 'ru' ? 'Логин' : 'Login'}
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    margin="dense"
                    label={language === 'ru' ? 'Пароль' : 'Parol'}
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{language === 'ru' ? 'Отмена' : 'Bekor qilish'}</Button>
                <Button onClick={handleLogin} variant='contained' color="primary">{language === 'ru' ? 'Войти' : 'Kirish'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginModal;
