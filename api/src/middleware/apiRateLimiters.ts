import rateLimit from 'express-rate-limit'


const donorLoginRateLimiter =  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message:
        'Too many login attempts. please try again after an hour!',
    standardHeaders: true, 
    legacyHeaders: false,
})
const donorRegisterRateLimiter = rateLimit({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message:
        'You can create one account a day. please try again after 24 hours!',
    standardHeaders: true, 
    legacyHeaders: false,
})
const userSendMessageRateLimiter = rateLimit({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message:
        'You can send one message a day. please try again after 24 hours!',
    standardHeaders: true, 
    legacyHeaders: false,
})
const userSubscriptionRateLimter = rateLimit({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message:
        'You can subscribe once a day only. please try again after 24 hours!',
    standardHeaders: true, 
    legacyHeaders: false,
});

const adminLoginRateLimiter = rateLimit({
        windowMs: 60 * 60 * 1000, 
        max: 3,
        message:
            'Too many login attempts. please try again after an hour!',
        standardHeaders: true, 
        legacyHeaders: false,
})
export {
    donorLoginRateLimiter,
    donorRegisterRateLimiter,
    userSendMessageRateLimiter,
    userSubscriptionRateLimter,
    adminLoginRateLimiter
}