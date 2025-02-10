const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 443;

// Путь к папке dist
const distPath = path.join(__dirname, 'dist');

// Раздача статических файлов
app.use(express.static(distPath));

// Прокси для API-запросов к https://femc.space/api/status/${serverId}
app.use('/api/status', createProxyMiddleware({
  target: 'https://femc.space',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' }, // Сохраняем /api в пути
}));

// Для SPA: перенаправляем все остальные запросы на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});