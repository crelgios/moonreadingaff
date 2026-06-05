const https = require('https');
const urls = [
  "https://www.moonereading.store/",
  "https://www.moonereading.store/news.html",
  "https://www.moonereading.store/posts/pianoforall-review-2026.html",
  "https://www.moonereading.store/posts/the-genius-song-review.html",
  "https://www.moonereading.store/posts/moon-reading-review-2026.html",
  "https://www.moonereading.store/about.html",
  "https://www.moonereading.store/contact.html",
  "https://www.moonereading.store/privacy-policy.html",
  "https://www.moonereading.store/category/business.html",
  "https://www.moonereading.store/category/digital-life.html",
  "https://www.moonereading.store/category/education.html",
  "https://www.moonereading.store/category/science.html",
  "https://www.moonereading.store/category/technology.html",
  "https://www.moonereading.store/posts/ai-tools-changing-study-work.html",
  "https://www.moonereading.store/posts/digital-payments-small-business-trends.html",
  "https://www.moonereading.store/posts/online-learning-skills-career-update.html",
  "https://www.moonereading.store/posts/smartphone-privacy-settings-guide.html",
  "https://www.moonereading.store/posts/space-weather-satellites-internet-explainer.html"
];
const data = JSON.stringify({
  host: 'www.moonereading.store',
  key: '276b9a22824b40c39cfd65b90df67203',
  keyLocation: 'https://www.moonereading.store/276b9a22824b40c39cfd65b90df67203.txt',
  urlList: urls
});
const req = https.request({
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}, res => {
  console.log('IndexNow status:', res.statusCode);
  res.on('data', d => process.stdout.write(d));
});
req.on('error', console.error);
req.write(data);
req.end();
