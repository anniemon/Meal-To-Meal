const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/', authController.tokenAuth);
router.post('/:email', authController.email.postEmailAuth);
router.get('/:email', authController.email.getEmailAuth);

router.post('/kakao/login', authController.oauth.kakaoLogin);

module.exports = router;
