# Smart Notification System

**Smart Notification System** Node.js, Express və Redis texnologiyalarından istifadə edilərək hazırlanmış sadə backend layihəsidir. Layihənin əsas məqsədi bildirişləri (notification) birbaşa emal etmək əvəzinə Redis Queue vasitəsilə növbəyə əlavə etmək və arxa planda (background) Worker tərəfindən emal edilməsini təmin etməkdir.

## İstifadə olunan texnologiyalar

* Node.js
* Express.js
* Redis
* Mocha
* Chai
* Supertest
* Nodemon

## Layihənin strukturu

```text
smart-notification-system/
│
├── src/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── worker/
│   └── server.js
│
├── redis/
├── tests/
│   ├── unit/
│   └── integration/
│
├── .env
├── package.json
└── README.md
```

## Quraşdırılma

Layihəni kompüterinizə yüklədikdən sonra aşağıdakı əmri işlədin:

```bash
npm install
```

## `.env` faylı

Layihənin kök qovluğunda `.env` faylı yaradın və aşağıdakı məlumatları əlavə edin:

```env
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

## Layihəni işə salmaq

Serveri başladın:

```bash
npm run dev
```

Worker-i ayrıca terminalda başladın:

```bash
npm run worker
```

Testləri işə salın:

```bash
npm test
```

## API Endpoint

### POST `/notify`

**Sorğu nümunəsi**

```json
{
  "user": "Elvin",
  "email": "elvin@example.com",
  "message": "Salam"
}
```

**Cavab**

```json
{
  "status": "queued"
}
```

## Layihənin iş prinsipi

1. İstifadəçi `POST /notify` endpoint-inə sorğu göndərir.
2. Server məlumatı Redis Queue-ya əlavə edir.
3. Server dərhal `"status": "queued"` cavabı qaytarır.
4. Worker növbədəki məlumatı oxuyur və emal edir.
5. Son göndərilən bildiriş Redis-də cache olaraq saxlanılır.

## Müəllif

**Firudin Maniyev**
