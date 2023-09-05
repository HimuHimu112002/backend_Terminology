// ======================= Good json format =========
// 1 -> 

// }
//     "data":[
//         "name": "himu",
//     ]
    // jokhon json array niye kaj korbo sei time json array akti name deoya best
// {

// 2 -> json key and value single cottition er majhe na rekhe ke value double cottition rakah best
// 3 -> Name convension firstName best then first_name good then first-name very bad

// =============== Status code meaning ======================
// 1 -> 200 -> = OK
// 2 -> 201 -> = CREATED
// 3 -> 202 -> = ACCEPTED
// 4 -> 203 -> = NO AUTHORATATIVE
// 5 -> 204 -> = NO CONTENT
// 6 -> 205 -> = RESET CONTENT
// 7 -> 206 -> = PARTIAL CONTENT
// 8 -> 400 -> = BAD REQUEST
// 9 -> 401 -> = UNAUTHORIZED
// 9 -> 403 -> = FORBIDEN
// 10 -> 404 -> = ERROR
// 10 -> 405 -> = MATHOD NOT ALLOWED
// 11 -> 500 -> = INTERNAL SERVER ERROR



// ========================= URL NAMING SYSTEM ================

// 1 -> url name amon vabe sajate hobe jeno url dekhe kisu idea pauya na jai asole ay url kiser jonno
// and jodi url dekhe bujhte pare keu tahole security issue hoiye jabe

// =================== COOKIE ===========================
// MOST IMPORTANT VALO KORE SIKHTE HOBE


// ================== JWT RESURB KEY ==================
// *** jwt er stracture er 3ti part jemon header signature payload
// 1 -> iss (issuer)
// 2 -> iat (issued At)
// 3 -> exp (expiration time)
// 4 -> sub (subject)
// 5 -> aud (audience)


// ==================== Rate limite akhon user koto min er majhe koto guli request korte parbe ta set kore deoyar jonno ====


//import { rateLimit } from 'express-rate-limit'

//const limiter = rateLimit({
	//windowMs: 15 * 60 * 1000, // 15 minutes
	//max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	//standardHeaders: 'draft-7', // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
	//legacyHeaders: false, // X-RateLimit-* headers
	// store: ... , // Use an external store for more precise rate limiting
//})

// Apply the rate limiting middleware to all requests
//app.use(limiter)


// ========================= SERVER RENDARING ===================
// back-end code backend server giye run kore then browser show korake bole server side rendaring