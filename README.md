<h1>🌈 Multicolor bot by limee#8911<h1>

# Információk
A multicolor bot az 5 másodpercenként váltogatja egy megadott rang színét.
A rangot, és a szerver ID-t a fájlban lehet átírni.
Azért 5 másodpercre van rakva a(z) váltogatás ideje, hogy ne kapj API-bant.
A GitHub repo folyamatosan frissítve lesz.
A botba még sok fejlesztés be fog kerülni.
A multicolor botot nem úgy kell érteni mint egy rainbow botot.
Nem színárnyalatban váltja a színeket, hanem random.
Persze lesz rainbow bot is teljesen ingyen!
Az esetleges hibákat jelentsétek nekem Discordon. (`limee#8911`)
Jó szórakozást.

# Mik szükségesek?
Telepítsd fel a `node.js`-t a számítógépedre, majd rakd fel a `discord.js`-t.
Discord.js feltelepítése: Nyiss egy `PowerShell`-t, majd írd be: `npm init`, aztán `npm install discord.js --save`

# Hogyan tudom lekérni a szerver id-t?
Bal oldalt kattints jobb klikkel a szerver ikonjára, majd menj a `Copy ID/ID másolása` lehetőségre.
A Spelfy bottal is le tudod kérni az ID-t, csak simán írd be hogy `s.serverinfo`

# Hogyan tudom lekérni a szerep id-t?
Először is kapcsold be azt, hogy a szerep megemlíthető legyen. Majd írd be ezt: `\@rang`
A Spelfy bottal is le tudod kérni az ID-t, csak simán írd be hogy `s.roleinfo @rang`

# Hol tudom a botot 0/24 hostolni?
Én a herokut ajánlom, de Glitchen is lehet futtatni.

# Hogyan tudom a botot elindítani?
Először is, a `config.json`-ben írd át a token-t, majd írd be hogy `node bot.js`

# Hogyan ne kapjak API-bant?
A(z) `1 * 5000` részt a kódban ne írd át. Az lényegében azt jelenti, hogy 5 másodpercenként váltja a rang színét. Ha annál gyorsabbra állítod
nagy valószínűséggel API-bant fogsz kapni.

# Mindent jól beírtam, de nem változik a szín
Ellenőrizd, hogy a bot rendelkezik-e nagyobb ranggal a megadott rangnál.
Ha nagyobb rangja van, ellenőrizd, hogy van-e `SZEREPEK_KEZELÉSE` joga a botnak.

# Spelfy Discord Bot
Bot meghívó link: <a href="https://discordapp.com/oauth2/authorize?client_id=588420113120886804&scope=bot&permissions=2146958847"> kattints ide</a>
Weboldalunk: <a href="https://spelfy.tk"> kattints ide</a>
Discord szerverünk: <a href="https://discordapp.com/invite/RkHSFpE"> kattints ide</a>
