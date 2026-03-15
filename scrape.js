const https = require('https');

const url = "https://www.google.com/maps/place/Alp-AAhar/@21.1666227,79.0556874,13z/data=!4m8!3m7!1s0x3bd4c7947d2cc76b:0x69f32b772264d497!8m2!3d21.1440908!4d79.1125423!9m1!1b1!16s%2Fg%2F11ltqmc2v2?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
  let data = '';
  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {
    // Try to find address, phone, and name
    const titleMatch = data.match(/<title>([^<]+)<\/title>/);
    const metaDescMatch = data.match(/<meta content="([^"]+)" itemprop="description"/);
    const addressMatch = data.match(/<meta content="([^"]+)" itemprop="address"/);
    const phoneMatch = data.match(/<meta content="([^"]+)" itemprop="telephone"/);
    const imageMatch = data.match(/<meta content="([^"]+)" itemprop="image"/);
    
    // Sometimes Google maps has it in a different meta tag
    const ogTitle = data.match(/<meta property="og:title" content="([^"]+)"/);
    const ogDesc = data.match(/<meta property="og:description" content="([^"]+)"/);

    console.log("Title:", titleMatch ? titleMatch[1] : "N/A");
    console.log("OG Title:", ogTitle ? ogTitle[1] : "N/A");
    console.log("OG Desc:", ogDesc ? ogDesc[1] : "N/A");
    console.log("Address:", addressMatch ? addressMatch[1] : "N/A");
    console.log("Phone:", phoneMatch ? phoneMatch[1] : "N/A");
    
    // Regex for things that look like Indian addresses in Nagpur
    const nagpurMatch = data.match(/.{0,30}Nagpur, Maharashtra \d{6}.{0,30}/g);
    // console.log("Nagpur matches inside HTML:", nagpurMatch);
    
    // Look for hours
    const hoursMatch = data.match(/\d{1,2}:\d{2}\s*[APM]+\s*(?:to|-)\s*\d{1,2}:\d{2}\s*[APM]+/g);
    console.log("Hours Matches:", hoursMatch ? [...new Set(hoursMatch)] : "N/A");
    
    // Look for phone
    const manualPhoneMatch = data.match(/\+91\s?\d{5}\s?\d{5}|\d{4,5}[-\s]?\d{6,7}/g);
    console.log("Phone Matches 2:", manualPhoneMatch ? [...new Set(manualPhoneMatch)] : "N/A");
  });
}).on('error', (e) => {
  console.error(e);
});
