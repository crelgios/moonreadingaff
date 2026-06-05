const https = require('https');
const urls = ["https://moonereading.store/news.html", "https://moonereading.store/about.html", "https://moonereading.store/contact.html", "https://moonereading.store/privacy-policy.html", "https://moonereading.store/posts/ai-tools-changing-study-work.html", "https://moonereading.store/posts/smartphone-privacy-settings-guide.html", "https://moonereading.store/posts/digital-payments-small-business-trends.html", "https://moonereading.store/posts/online-learning-skills-career-update.html", "https://moonereading.store/posts/space-weather-satellites-internet-explainer.html",
  "https://moonereading.store/posts/the-genius-song-review.html"
];
const data = JSON.stringify({host:'moonereading.store',key:'moonereading-store-indexnow-key-2026',keyLocation:'https://moonereading.store/moone-indexnow-key-2026.txt',urlList:urls});
const req=https.request({hostname:'api.indexnow.org',path:'/indexnow',method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(data)}},res=>{console.log('IndexNow status:',res.statusCode);res.on('data',d=>process.stdout.write(d));});
req.on('error',console.error);req.write(data);req.end();
