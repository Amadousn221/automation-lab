# 📈 ROADMAP Modules 02–09 — Plan d'exécution détaillé

**Durée totale :** 6 mois (mois 2–7 du programme)  
**Rythme :** 2–4 h/jour, 6 jours/semaine  
**Clients réels :** ATTA Africa, Fraîs'n, prospects PME  
**Objectif final :** 4–6 projets portfolio + 2–3 clients payants

---

## 🗺️ Vue d'ensemble : Module par module

| Module | Durée | Focus principal | Projet client lié | Livrable portfolio |
|--------|-------|-----------------|-------------------|-------------------|
| **02** | 3 sem | WordPress moderne, SEO, webhooks | Fraîs'n (optimisation site) | Site e-commerce optimisé + doc |
| **03** | 2 sem | APIs, requêtes HTTP, webhooks | ATTA (webhook Shopify) | Script API Sheets + doc |
| **04** | 4 sem | n8n, Make, automatisations | ATTA Phase 3 complet | 3 workflows n8n documentés |
| **05** | 3 sem | IA, Claude API, prompt engineering | Contenu généré pour PME | Moteur contenu IA |
| **06** | 3 sem | Agents IA, chatbots, support | Chatbot client 24/7 | Chatbot deployé + métriques |
| **07** | 2 sem | Airtable, CRM, stack business | CRM léger pour PME | Base Airtable automatisée |
| **08** | 4 sem | GHL, lead gen, e-commerce, social | Lead gen B2B + retainers | Machine à leads complète |
| **09** | En continu | Systèmes transversaux | Business OS complet | 3+ études de cas complètes |

---

# MODULE 02 — WordPress moderne & webhooks (Semaines 1–3)

## 🎯 Objectif
Livrer un **site Shopify/WordPress optimisé** pour recevoir et envoyer des webhooks. C'est la fondation technique du pitch ATTA Phase 1.

## 📚 Compétences à acquérir
- ✅ PageSpeed Insights > 85 (mobile)
- ✅ Schema.org LocalBusiness + Product
- ✅ Webhooks WooCommerce/Shopify configurés
- ✅ Sauvegardes automatiques
- ✅ Pare-feu + gestion d'accès

## 🛠️ Outils
- **Shopify** (ATTA est dessus) ou WooCommerce (pour Fraîs'n)
- **PageSpeed Insights** (gratuit)
- **Rank Math** (SEO)
- **Webhook.site** (test webhooks)
- **Claude Code** (scripts d'optimisation)

---

## 📅 Semaine 1 : Audit & optimisation performance

### Jour 1 – Audit initial
**Tâche :** Auditer la performance d'un site existant (Fraîs'n ou ATTA)
```bash
# Outils gratuits à utiliser
1. PageSpeed Insights (https://pagespeed.web.dev/)
2. GTmetrix (gratuit)
3. WebPageTest (gratuit)
```
- [ ] Passer le test sur Fraîs'n (score de base)
- [ ] Identifier les 3 problèmes principaux (images, JS, CSS)
- [ ] Documenter dans `projects/project-fraish/AUDIT-PERFORMANCE.md`

**Prompt Claude Code :**
```
Analysez ce rapport PageSpeed Insights et proposez les 5 optimisations prioritaires :
[copier le JSON du rapport]

Format : liste avec impact estimé en temps de chargement.
```

**Résultat attendu :** Audit de 2 pages avec points d'amélioration clairs.

### Jour 2 – Optimisation images & cache
**Tâche :** Implémenter les optimisations rapides (90% d'impact en 20% du temps)
- [ ] Compresser images avec TinyPNG (gratuit) ou ImageOptim
- [ ] Activer cache HTTP (headers) sur le serveur
- [ ] Minifier CSS/JS (Rank Math le fait automatiquement)
- [ ] Lazy-load les images

**Prompt Claude Code :**
```
Génère un fichier .htaccess qui :
1. Active le cache navigateur 30 jours
2. Compresse les réponses GZIP
3. Minifie CSS/JS

Pour un site WordPress/Shopify.
```

**Résultat attendu :** Score PageSpeed passe de X à X+15 points.

### Jour 3 – Schema & SEO technique
**Tâche :** Ajouter données structurées pour e-commerce
- [ ] Schema « Product » sur chaque produit (Rank Math fait ça)
- [ ] Schema « LocalBusiness » (si boutique physique)
- [ ] Vérifier dans le testeur Google
- [ ] Meta descriptions uniques + H1 optimisées

**Exercice pratique :**
```
Crée le schema.org pour un produit ATTA ou Fraîs'n :
- Nom
- Prix
- Disponibilité
- Image
- Description

Format : JSON-LD, prêt à copier dans WordPress.
```

**Résultat attendu :** 5–10 produits avec schema parfaitement structurés.

### Jour 4–5 – Tests & documentation
**Tâche :** Valider les changements et documenter
- [ ] Re-tester PageSpeed (viser > 85 mobile)
- [ ] Tester sur vrais appareils (mobile physique)
- [ ] Vérifier schema dans le testeur Google
- [ ] Créer doc « Maintenance SEO mensuelle » (30 min/mois pour client)

**Livrable :** `projects/project-fraish/PERF-OPTIMIZATION.md` avec :
- Avant/après PageSpeed
- Checklist maintenance mensuelle
- Screenshots

---

## 📅 Semaine 2 : Webhooks Shopify (focus ATTA Phase 1)

### Jour 1 – Comprendre les webhooks Shopify
**Tâche :** Étudier comment Shopify envoie les données

**Ressources gratuites :**
- [ ] Docs officielles Shopify : https://shopify.dev/docs/admin-api/webhooks
- [ ] Tutoriel webhook.site (30 min)

**Exercice pratique :**
1. Ouvrir Shopify Admin → Settings → Webhooks
2. Créer un webhook de test → « orders/created »
3. Pointer vers webhook.site
4. Créer une commande de test en Shopify
5. Observer ce que Shopify envoie sur webhook.site

**Prompt Claude Code :**
```
Explique-moi ce que contient une payload Shopify « orders/created » :
[copier la payload depuis webhook.site]

Identify les champs clés pour ATTA :
- Taille commandée
- Couleur commandée
- Set commandé
- Email client
- Montant

Montre-moi la structure JSON simplifiée.
```

**Résultat attendu :** Compréhension claire de 3–4 webhooks Shopify + payload mappée.

### Jour 2–3 – Configurer les webhooks ATTA
**Tâche :** Mettre en place les 3 webhooks qu'ATTA utilisera en Phase 3

**Webhooks à configurer :**
1. ✅ `orders/created` — nouvelle commande
2. ✅ `orders/updated` — commande modifiée
3. ✅ `order/fulfilled` — commande livrée

Pour chaque webhook :
- [ ] URL endpoint à donner à Shopify
- [ ] Vérifier que Shopify envoie → endpoint reçoit
- [ ] Parser la payload dans NocoDB (Phase 2)

**Documentation à créer :**
```
projects/project-002-atta-africa/
├── SHOPIFY-WEBHOOKS-SETUP.md
│   ├── Webhooks configurés (3 types)
│   ├── Payload examples (JSON)
│   ├── Mapping champs Shopify → NocoDB
│   └── Test checklist
```

**Prompt Claude Code :**
```
Je veux tester 3 webhooks Shopify avec webhook.site.

Orders/created → envoie vers endpoint A
Orders/updated → envoie vers endpoint B
Orders/fulfilled → envoie vers endpoint C

Génère-moi un script qui :
1. Crée 3 URLs webhook.site
2. Configure les 3 webhooks dans Shopify
3. Créé une commande test
4. Affiche ce qu'on a reçu

Utilise n'importe quel langage (Node.js ou Python avec Claude Code).
```

**Résultat attendu :** 3 webhooks testés + docs prêtes pour Phase 2.

### Jour 4–5 – Sécurité & documentation
**Tâche :** Sécuriser les webhooks et documenter l'architecture
- [ ] Vérifier la signature Shopify (secret) sur chaque webhook
- [ ] Mettre en place retry logic (Shopify retry automatiquement, mais documenter)
- [ ] Créer diagramme d'architecture : Shopify → webhook → n8n (Phase 3)

**Livrable :** `SHOPIFY-WEBHOOKS-SETUP.md` complet avec exemples live.

---

## 📅 Semaine 3 : Sécurité & livrable final

### Jour 1–2 – Sécuriser le site WordPress/Shopify
**Tâche :** Protéger contre les attaques courantes
- [ ] Activer 2FA sur Shopify/WordPress admin
- [ ] Configurer sauvegarde automatique (Akeeba pour WordPress, Shopify natif)
- [ ] Installer pare-feu (Wordfence pour WordPress, Shopify natif)
- [ ] Tester accès API (clés API limitées en scope)

**Checklist sécurité :**
```markdown
- [ ] Pas de mot de passe faible (> 16 caractères)
- [ ] 2FA activé
- [ ] Sauvegarde auto quotidienne
- [ ] Pare-feu actif
- [ ] Accès FTP/SSH limité
- [ ] Plugins/apps mises à jour
```

### Jour 3–5 – Documenter & valider
**Tâche :** Créer la documentation finale du Module 02

**Livrable final :** Un dossier `projects/project-fraish/` ou `projects/project-002-atta-africa/` contenant :

```
├── MODULE-02-WORDPRESS-SETUP.md
│   ├── Architecture site
│   ├── PageSpeed (avant/après)
│   ├── SEO checklist
│   ├── Sécurité checklist
│   └── Maintenance mensuelle
├── PERF-OPTIMIZATION.md
│   └── Tous les changements de performance
├── SHOPIFY-WEBHOOKS-SETUP.md (si Shopify)
│   └── 3 webhooks configurés + exemples payload
├── SECURITY-CHECKLIST.md
│   └── Tout ce qui a été sécurisé
└── ARCHITECTURE-DIAGRAM.md
    └── Schéma : site → webhooks → n8n (à venir)
```

**Validation :**
- [ ] Score PageSpeed > 85 (mobile)
- [ ] 3 webhooks testés et fonctionnels
- [ ] Tous les liens de doc valides
- [ ] Screenshots avant/après sauvegardés

---

## 🎯 Fin du Module 02 : Checkpoint

Tu as :
- ✅ 1 site WordPress/Shopify optimisé & sécurisé
- ✅ 3 webhooks Shopify configurés et testés
- ✅ Documentation technique complète
- ✅ Proof of concept pour Phase 1 d'ATTA (1 000€)

**Prochaine étape :** Module 03 (APIs & NocoDB) — 2 semaines

---

# MODULE 03 — APIs & Webhooks (Semaines 4–5)

## 🎯 Objectif
Comprendre et manipuler les APIs. C'est le lien entre Shopify (webhooks) et NocoDB (base de données). Phase 2 d'ATTA repose 100% sur ça.

## 📚 Compétences à acquérir
- ✅ Requêtes HTTP GET/POST/PUT (avec authentification)
- ✅ Lire une doc API et trouver l'endpoint
- ✅ Manipuler JSON
- ✅ Déboguer avec Postman / Hoppscotch
- ✅ Webhooks → endpoint → réponse structurée

## 🛠️ Outils
- **Postman** ou **Hoppscotch** (gratuit)
- **webhook.site** (inspecter les requêtes)
- **Rapidapi** ou **APIdog** (explorer les APIs)
- **Claude Code** (générer et expliquer les appels)

---

## 📅 Semaine 4 : Fondations APIs

### Jour 1 – Comprendre HTTP (GET, POST, headers, auth)
**Lecture rapide :** MDN Web Docs — HTTP (30 min)
- GET = récupérer des données
- POST = créer des données
- PUT = modifier des données
- DELETE = supprimer des données

**Exercice pratique :** Tester une API gratuite publique
```bash
# 1. API météo gratuite (Open-Meteo)
curl "https://api.open-meteo.com/v1/forecast?latitude=14.6928&longitude=-17.0469&hourly=temperature_2m"

# 2. Voir la réponse (JSON)
# 3. Parser avec Claude Code : "Extrais la température à 15h"
```

**Prompt Claude Code :**
```
Je viens d'appeler une API météo et j'ai reçu ça :
[copier la réponse JSON complète]

Extrais :
1. Température actuelle
2. Heure
3. Localité

Donne-moi un script Python qui fait ça automatiquement.
```

**Résultat attendu :** Compréhension de la structure API + script simple.

### Jour 2 – Authentification (clés API, Bearer, OAuth)
**Tâche :** Apprendre les 3 méthodes d'auth principales

**Méthodes :**
1. **Clé API en paramètre ou header**
   ```
   https://api.exemple.com/data?key=YOUR_API_KEY
   OU
   Headers: Authorization: Bearer YOUR_API_KEY
   ```

2. **Basic Auth (username:password encodé en Base64)**
   ```
   Headers: Authorization: Basic base64(username:password)
   ```

3. **OAuth (pour les apps complexes)**

**Exercice :** Tester une API authentifiée (NocoDB ou Airtable)

```bash
# NocoDB API : lister les tables
curl -X GET "https://your-nocodb-instance/api/v2/db/meta/projects" \
  -H "xc-auth: YOUR_API_TOKEN"
```

**Prompt Claude Code :**
```
Explique-moi comment fonctionne l'authentification API.

Client veut accéder à NocoDB via l'API.
NocoDB demande un token.

Comment on :
1. Génère le token dans NocoDB ?
2. L'envoie dans chaque requête ?
3. Reçoit une réponse ?
4. Gère les erreurs 401 (non autorisé) ?

Donne-moi un script complet.
```

**Résultat attendu :** 2–3 API testées avec authentification différente.

### Jour 3 – Postman / Hoppscotch (teste les APIs)
**Tâche :** Maîtriser l'outil pour tester sans code

**Hoppscotch (gratuit, no signup):** https://hoppscotch.io/

**Exercice pratique :**
1. [ ] Ouvrir Hoppscotch
2. [ ] GET vers Open-Meteo (sans auth)
3. [ ] GET vers NocoDB (avec Bearer token)
4. [ ] POST vers NocoDB (créer une ligne)
5. [ ] Voir la réponse JSON

**Livrable :** Screenshots de 3 requêtes réussies dans Hoppscotch.

### Jour 4–5 – Webhooks vs APIs (la différence)
**Tâche :** Comprendre quand utiliser quoi

**Webhooks (push) :**
- Shopify ENVOIE les données vers toi
- Tu donnes un URL endpoint à Shopify
- Shopify pousse une commande → ton endpoint la reçoit
- Passif pour toi, actif pour Shopify

**APIs (pull) :**
- Tu DEMANDES les données
- Tu appelles l'endpoint NocoDB
- NocoDB répond avec les données
- Actif pour toi, passif pour le serveur

**Cas d'usage ATTA :**
```
Shopify → Webhook (push) → n8n endpoint
                            ↓
                        Parse la commande
                            ↓
                    Crée une ligne NocoDB (via API)
                            ↓
                 Envoie un email (via API Resend)
```

**Exercice :** Dessiner ce flow pour ATTA dans `projects/project-002-atta-africa/API-VS-WEBHOOKS.md`

**Résultat attendu :** Clarté sur quand utiliser webhooks vs APIs.

---

## 📅 Semaine 5 : APIs NocoDB & intégration

### Jour 1–2 – NocoDB API complète
**Tâche :** Maîtriser l'API NocoDB pour Phase 2

**NocoDB endpoints clés :**
```
GET /api/v2/db/meta/projects       # Lister tous les projets
GET /api/v2/db/meta/tables         # Lister toutes les tables
GET /api/v2/db/data/noco/{id}      # Récupérer les lignes
POST /api/v2/db/data/noco/{id}     # Créer une ligne
PUT /api/v2/db/data/noco/{id}/{pk} # Modifier une ligne
```

**Exercice :** Créer une table NocoDB et l'alimenter via API

```bash
# 1. Créer une table NocoDB (UI)
# 2. Récupérer le token API
# 3. Lister les enregistrements via API
# 4. Créer un enregistrement via API
# 5. Voir la nouvelle ligne dans l'UI
```

**Prompt Claude Code :**
```
Je veux créer une fonction Node.js qui :

1. Se connecte à NocoDB avec un token
2. Crée une nouvelle ligne dans la table "orders" avec :
   - order_id : 12345
   - customer_email : test@example.com
   - amount : 99.99
   - status : pending
3. Affiche l'ID de la ligne créée

Utilise fetch() ou axios. Commentes le code.
```

**Résultat attendu :** Script fonctionnel pour créer des lignes NocoDB.

### Jour 3 – Intégration Shopify → NocoDB (simulation)
**Tâche :** Simuler ce que fera n8n en Phase 3

**Flow simulé :**
1. Webhook Shopify → endpoint webhook.site
2. Claude Code : parser la payload Shopify
3. Claude Code : générer un POST NocoDB
4. Tester manuellement : commande → NocoDB

**Exercice :**

```bash
# 1. Commander quelque chose sur Shopify ATTA
# 2. Webhook.site reçoit la payload
# 3. Copier la payload
```

**Prompt Claude Code :**
```
J'ai une payload Shopify « orders/created » :
[copier la payload]

Génère-moi une fonction qui :
1. Parse cette payload
2. Extrait : order_id, customer_email, items[], total_price
3. Formate ça pour une requête POST NocoDB
4. Envoie la requête (avec le bon token + header)
5. Retourne l'ID de la ligne créée

Je veux que ça soit prêt pour n8n (Phase 3).
```

**Résultat attendu :** Conversion Shopify → NocoDB fonctionnelle (manuellement).

### Jour 4–5 – Erreurs & gestion robuste
**Tâche :** Apprendre à déboguer les APIs

**Erreurs courantes :**
- 401 : non authentifié (mauvaise clé API)
- 403 : non autorisé (scope insuffisant)
- 404 : ressource introuvable
- 429 : rate limit (trop de requêtes)
- 500 : serveur erreur

**Exercice :** Créer une fonction robuste

```javascript
// Prompt Claude Code :
// "Crée une fonction qui appelle une API NocoDB
//  et gère les 5 erreurs courantes avec messages clairs"
```

**Livrable final Module 03 :**
```
projects/project-002-atta-africa/
├── API-GUIDE.md
│   ├── GET/POST/PUT expliqués
│   ├── Auth (clés API, Bearer)
│   ├── Codes erreur et solutions
│   └── Debugging avec Postman
├── NOCODB-API-REFERENCE.md
│   ├── Endpoints clés
│   ├── Exemples de requêtes
│   └── Code d'erreur NocoDB
├── shopify-to-nocodb.js
│   └── Script complet (parser + POST)
└── API-TEST-RESULTS.md
    └── Screenshots de 5 requêtes réussies
```

**Validation :**
- [ ] GET sur une API publique (sans auth)
- [ ] GET/POST sur NocoDB (avec auth)
- [ ] Parser une payload Shopify
- [ ] Créer une ligne NocoDB via API
- [ ] Gestion d'erreur testée

---

## 🎯 Fin du Module 03 : Checkpoint

Tu as :
- ✅ Compris HTTP GET/POST/PUT/DELETE
- ✅ Maîtrisé l'authentification (clés API, Bearer)
- ✅ Testé les APIs publiques
- ✅ Intégré Shopify → NocoDB (manuellement)
- ✅ Gestion d'erreur robuste

**Prochaine étape :** Module 04 (n8n automation) — 4 semaines

---

# MODULE 04 — n8n Automation & Workflows (Semaines 6–9)

## 🎯 Objectif
Construire le cœur de la solution ATTA : des workflows n8n qui remplacent Klaviyo, Judge.me et Excel. Phase 3 complète.

## 📚 Compétences à acquérir
- ✅ Triggers (webhook, schedule, polling)
- ✅ Actions et transformation de données
- ✅ Conditions et routeurs
- ✅ Itérations (loops)
- ✅ Gestion d'erreurs (retry, branches d'échec)
- ✅ Self-hosting n8n (Docker ou Railway)

## 🛠️ Outils
- **n8n** (self-hosted)
- **Docker** (pour self-host)
- **Railway** ou **Render** (alternative simple à Docker)
- **NocoDB** (base de données)
- **Resend** (emails)
- **Claude Code** (debug workflows)

---

## 📅 Semaine 6 : Setup n8n et premiers workflows

### Jour 1 – Installer n8n (self-hosted)
**Option A : Docker (recommandé)**
```bash
docker run -it --rm \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=yourpassword \
  n8nio/n8n
```

Puis accède à http://localhost:5678

**Option B : Railway (plus simple, $5/mois)**
1. [ ] Créer un compte Railway
2. [ ] Déployer n8n via leur marketplace
3. [ ] Accéder à l'instance n8n cloud

**Prompt Claude Code :**
```
Je veux installer n8n en self-hosted.

Options :
1. Docker sur ma machine locale
2. Railway (cloud gratuit)

Explique-moi :
- Avantages/inconvénients de chaque
- Coûts réels
- Lequel choisir pour ATTA ?

Donne-moi un tutorial pas-à-pas pour l'option recommandée.
```

**Résultat attendu :** Instance n8n fonctionnelle, connectée à localhost ou Railway.

### Jour 2 – Interface n8n : triggers & nodes
**Tâche :** Explorer l'interface et les concepts clés

**Concepts :**
- **Trigger** : ce qui déclenche un workflow (webhook, schedule, manuel)
- **Node** : une action (Shopify, NocoDB, email, etc.)
- **Connection** : lien entre nodes (output d'un node → input du suivant)
- **Data transformer** : manipuler les données entre nodes

**Exercice :** Créer un workflow simple
```
Trigger : Webhook (test)
  ↓
Node : Log (afficher les données reçues)
```

**Étapes :**
1. [ ] Créer un nouveau workflow
2. [ ] Ajouter un trigger Webhook
3. [ ] Ajouter un node HTTP Request (GET sur Open-Meteo)
4. [ ] Ajouter un node Log
5. [ ] Tester : POST vers webhook n8n, voir les logs

**Livrable :** Screenshot du workflow fonctionnel.

### Jour 3 – Transformation de données (mapping)
**Tâche :** Apprendre à manipuler les données

**Exercice :** Recevoir une payload Shopify et la transformer

```
Payload reçue :
{
  "order": {
    "id": 123,
    "email": "client@example.com",
    "line_items": [{"product_id": 1, "quantity": 2}],
    "total_price": "99.99"
  }
}

Transformer en :
{
  "order_id": 123,
  "customer_email": "client@example.com",
  "items_count": 2,
  "amount": 99.99
}
```

**n8n node :** Utiliser « Set » ou « Expression Editor » pour faire ça

**Prompt Claude Code :**
```
Explique-moi comment transformer une payload Shopify dans n8n.

Payload d'entrée :
[copier la structure]

Je veux extraire et reformater en :
[copier la structure cible]

Montre-moi l'expression n8n (ou JavaScript) pour faire ça.
```

**Résultat attendu :** Transformation de données maîtrisée.

### Jour 4–5 – Premier workflow complet : Webhook Shopify → NocoDB

**Tâche :** Créer le workflow core pour ATTA Phase 3

**Architecture :**
```
Shopify webhook (orders/created)
  ↓
n8n Webhook trigger
  ↓
Set node : extraire/transformer
  ↓
NocoDB node : créer une ligne
  ↓
Resend node : envoyer email confirmation
  ↓
Log : status réussi
```

**Étapes dans n8n :**
1. [ ] Ajouter trigger Webhook (copier l'URL)
2. [ ] Donner cette URL à Shopify (Settings → Webhooks → orders/created)
3. [ ] Ajouter node « Set » pour transformer
4. [ ] Ajouter node « NocoDB » pour créer ligne
5. [ ] Ajouter node « Resend » pour email
6. [ ] Tester : créer une commande Shopify → voir la ligne NocoDB → recevoir l'email

**Prompt Claude Code :**
```
Crée-moi un workflow n8n complet qui :

1. Reçoit un webhook Shopify « orders/created »
2. Extrait : order_id, customer_email, items[], total
3. Crée une ligne dans NocoDB (table « orders »)
4. Envoie un email de confirmation via Resend
5. Log le status (succès/erreur)

Utilise les paramètres réels d'ATTA.
Inclus la gestion d'erreur (si NocoDB échoue, ne pas envoyer l'email).

Donne-moi la configuration n8n (JSON ou screenshot annoté).
```

**Résultat attendu :** Workflow testé de bout en bout.

---

## 📅 Semaine 7 : Workflows avancés & gestion d'erreurs

### Jour 1–2 – Conditions et routeurs
**Tâche :** Créer des workflows intelligents (si X alors Y, sinon Z)

**Exercice :** Classer les commandes par montant

```
Si montant > 100€ → tag VIP + email spécial
Si montant < 20€ → demander avis (email J+7)
Sinon → email standard
```

**n8n nodes :**
- « If » : condition simple (if/else)
- « Switch » : multiple conditions (switch/case)

**Prompt Claude Code :**
```
Crée un workflow n8n qui reçoit une commande.

Règles :
1. Si total > 100€ → marquer comme VIP, envoyer email « merci VIP »
2. Si total entre 30-100€ → email standard
3. Si total < 30€ → envoyer avis demandé après 7 jours

Donne-moi la logique (If/Switch nodes) et les conditions exactes.
```

**Résultat attendu :** Workflow avec conditions maîtrisé.

### Jour 3 – Itérations (loops)
**Tâche :** Traiter plusieurs items dans une commande

**Exercice :** Une commande peut avoir plusieurs produits

```
Commande #123
  → Produit 1 (couleur rouge, taille M)
  → Produit 2 (couleur bleu, taille L)
  → Produit 3 (couleur vert, taille S)

Pour chaque produit :
  → Créer une ligne dans NocoDB table « items »
  → Vérifier le stock
  → Si rupture → alerter
```

**n8n node :** « Split in batches » ou boucler avec « Set »

**Prompt Claude Code :**
```
Un webhook Shopify a 3 produits (line_items[]).

Je veux pour CHAQUE produit :
1. Créer une ligne dans NocoDB
2. Vérifier le stock
3. Si rupture (qty < 0) → ajouter une alerte

Montre-moi comment faire une itération dans n8n.
```

**Résultat attendu :** Boucles maîtrisées.

### Jour 4 – Gestion d'erreurs : retry & branches d'échec
**Tâche :** Rendre les workflows robustes

**Exercice :** Que faire si NocoDB est down ?

```
Workflow tentative :
  → POST NocoDB
    → Succès ? → continuer
    → Erreur ? → Retry 3x
                 → Toujours erreur ? → alerter Amadou sur Slack
```

**n8n nodes :**
- Error handling : paramètre « Retry » sur chaque node
- Try/Catch : branche d'erreur explicite

**Prompt Claude Code :**
```
Mon workflow POST à NocoDB.

Parfois NocoDB est slow et timeout.

Ajoute de la robustesse :
1. Retry 3 fois avec délai exponentiel
2. Si toujours erreur → envoyer alerte Slack
3. Log la tentative

Montre-moi la config n8n (ou code).
```

**Résultat attendu :** Workflow survivant aux pannes courantes.

### Jour 5 – Documentation du workflow
**Tâche :** Documenter pour maintenance future

**Livrable :** `projects/project-002-atta-africa/WORKFLOWS-DOCUMENTATION.md`
```
# Workflows n8n ATTA Africa

## Workflow 1 : Orders/Created → NocoDB + Email

### Trigger
- Type : Webhook (Shopify)
- Event : orders/created
- Payload : [structure détaillée]

### Nodes
1. Webhook trigger
2. Set (transform)
3. NocoDB POST
4. Resend email
5. Log

### Gestion d'erreur
- NocoDB timeout → Retry 3x
- Resend fail → Slack alert

### Test procedure
1. Créer une commande Shopify
2. Vérifier ligne NocoDB créée
3. Vérifier email reçu

### Coûts
- n8n : 0€ (self-hosted)
- Resend : gratuit jusqu'à 3000/mois
- NocoDB : 0€ (self-hosted)
```

---

## 📅 Semaine 8 : Workflows supplémentaires (Klaviyo + Judge.me replacement)

### Jour 1–2 – Automation emails (remplacer Klaviyo)
**Tâche :** Créer les séquences d'email que Klaviyo faisait

**Séquences à créer :**
1. **Confirmation** : email immédiat après commande (déjà fait)
2. **Relance panier abandonné** : email J+1 si pas payé
3. **Demande avis** : email J+7 après livraison
4. **Remerciement + promo** : email J+14 avec code promo

**Workflows :**

**Workflow 2 : Abandoned cart**
```
Trigger : Schedule (chaque jour à 9h)
  ↓
Query NocoDB : commandes > 24h sans paiement
  ↓
Loop each : pour chaque commande
  ↓
Resend : email relance
  ↓
NocoDB : marquer comme relancée
```

**Workflow 3 : Review request**
```
Trigger : NocoDB change (order status = shipped)
  ↓
Set : attendre 7 jours
  ↓
Resend : email demande avis
  ↓
NocoDB : marquer comme review demandée
```

**Prompt Claude Code :**
```
Crée-moi 3 workflows n8n pour ATTA :

1. Confirmation commande (immédiat)
2. Relance panier (J+1 si pas payé)
3. Demande avis (J+7 après livraison)

Pour chaque :
- Trigger
- Nodes principaux
- Conditions (si applicable)
- Email template (Resend)

Utilise les vraies données ATTA.
```

**Résultat attendu :** 3 workflows d'email automatisés.

### Jour 3 – Remplacer Judge.me (collecte d'avis)
**Tâche :** Créer un formulaire d'avis dans NocoDB + collect automatiquement

**Approche :**
1. Email demande avis avec lien
2. Lien vers NocoDB form (gratuit)
3. Avis stocké automatiquement
4. Dashboard NocoDB montre tous les avis

**Workflow 4 : Collect reviews**
```
Trigger : NocoDB form submission (avis reçu)
  ↓
Validate : au moins 1 mot
  ↓
NocoDB : créer ligne « reviews »
  ↓
Slack : notifier Anta (nouvel avis)
```

**Prompt Claude Code :**
```
Crée un système simple de collecte d'avis pour ATTA :

1. Client reçoit email J+7 : « Donnez votre avis »
2. Lien vers NocoDB form
3. Avis arrive dans table « reviews »
4. Notification Slack pour l'équipe

Montre-moi :
- Template email
- Configuration NocoDB form
- Workflow n8n de collecte
```

**Résultat attendu :** System de reviews fonctionnel.

### Jour 4–5 – Dashboard NocoDB temps réel

**Tâche :** Créer les vues que Anta/Fabinetou utiliseront quotidiennement

**Vues à créer :**
1. **Commandes today** : toutes les commandes d'aujourd'hui avec statut
2. **Panier abandonné** : commandes non payées depuis > 1h
3. **Avis reçus** : tous les avis avec note et date
4. **Stats** : total CA, nombre commandes, panier moyen

**NocoDB :**
```
Tables :
├── Orders (order_id, customer_email, items, total, status)
├── Items (order_id, product, size, color, qty)
├── Reviews (order_id, customer_name, rating, text, date)
└── Metrics (date, total_ca, order_count, avg_cart)

Views :
├── « Today Orders » (filtre date = today)
├── « Abandoned Carts » (filtre status = unpaid, date > 24h)
├── « Reviews » (tous les avis, trié par date DESC)
└── « Dashboard » (sommes et comptages)
```

**Livrable :** Dashboard NocoDB prêt à montrer à ATTA.

---

## 📅 Semaine 9 : Testing, documentation & go-live ATTA Phase 3

### Jour 1–2 – Testing complet
**Tâche :** Tester les 4 workflows dans un environnement de test

**Checklist :**
- [ ] Créer une commande Shopify → voir dans NocoDB
- [ ] Vérifier email confirmation reçu
- [ ] Attendre 24h (ou simuler) → email relance
- [ ] Attendre 7j (ou simuler) → email avis
- [ ] Soumettre un avis → voir dans NocoDB
- [ ] Vérifier dashboard temps réel
- [ ] Tester une erreur (couper NocoDB) → voir le retry

**Script de test :**
```bash
# Prompt Claude Code :
# "Crée un script de test pour les 4 workflows ATTA.
#  Je veux vérifier que tout marche sans créer de vraies commandes.
#  Utilise des données mockées."
```

**Résultat attendu :** Rapport de test complet (checklist signée).

### Jour 3 – Documentation finale Phase 3
**Livrable :** `projects/project-002-atta-africa/PHASE-3-IMPLEMENTATION.md`
```
# ATTA Phase 3 — Automation complète

## Architecture
[Diagramme : Shopify → n8n → NocoDB + Resend]

## Workflows déployés
1. Orders/Created (webhook Shopify)
2. Confirmation Email
3. Abandoned Cart (schedule)
4. Review Request (7j après livraison)
5. Review Collect (NocoDB form)

## Données
- NocoDB tables : Orders, Items, Reviews, Metrics
- Dashboard views : Today, Abandoned, Reviews, Stats

## Monitoring
- n8n logs consultables 24/7
- Slack alerts sur erreurs
- Email daily digest

## Coûts mensuels
- n8n (self-hosted) : 0€
- Resend : gratuit
- NocoDB : 0€
- VPS n8n : 15€/mois
**Total : 15€/mois** (économie : 159€/mois vs ancien 189€)

## Maintenance
- Vérifier les workflows 1x/semaine (5 min)
- Archiver les anciennes commandes (1x/mois, 10 min)
- Optimiser si nouveaux besoins

## Support
- Contact : Amadou (chat direct)
- Réponse : 24–48h
- Maintenance coût : 150€/mois inclus setup
```

### Jour 4 – Formation ATTA
**Tâche :** Former Anta et Fabinetou

**Contenu :**
- [ ] Montrer le dashboard NocoDB
- [ ] Montrer comment ajouter un produit (ne touche rien à n8n)
- [ ] Montrer comment voir les commandes d'aujourd'hui
- [ ] Montrer comment lire les logs si un workflow échoue
- [ ] Montrer comment me contacter 24/7

**Livrable :** Vidéo Loom (10 min) ou doc avec screenshots.

### Jour 5 – Go-live
**Tâche :** Metter en production et monitoring

**Checklist :**
- [ ] Couper les anciens abonnements (Klaviyo, Judge.me) si sûr
- [ ] Vérifier que les webhooks Shopify pointent vers n8n
- [ ] Tester une vraie commande
- [ ] Monitorer 24h
- [ ] Accepter les paiements finaux

**Résultat attendu :** ATTA en production, ATTA payante de 3 000€ reçue ou en cours.

---

## 🎯 Fin du Module 04 : Checkpoint

Tu as :
- ✅ n8n self-hosted complètement maîtrisé
- ✅ 4+ workflows automation complets
- ✅ Remplacement complet Klaviyo/Judge.me
- ✅ Dashboard NocoDB temps réel
- ✅ 1 client payant en production (ATTA Phase 3)
- ✅ Documentations complètes

**Prochaine étape :** Module 05 (IA) — 3 semaines

---

# MODULE 05 — IA appliquée (Semaines 10–12)

## 🎯 Objectif
Intégrer l'IA dans les workflows n8n. C'est le **facteur différenciant** qui justifie les tarifs élevés.

## 📚 Compétences à acquérir
- ✅ Prompt engineering robuste (structure, exemples, output format)
- ✅ Appel Claude/OpenAI API
- ✅ Sortie JSON structurée
- ✅ RAG simple (donner à l'IA des documents)
- ✅ Coûts API (tokens, gestion du budget)

## 🛠️ Outils
- **Claude API** (Anthropic)
- **OpenAI API** (GPT-4)
- **n8n nodes IA** (AI : Claude, OpenAI)
- **Prompt libraries** (collection de 20+ prompts réutilisables)

---

## 📅 Semaine 10 : Prompt engineering & appels API

### Jour 1 – Comprendre les tokens et les coûts
**Tâche :** Ne pas brûler le budget API

**Concepts :**
- **Token** : ~4 caractères = 1 token
- **Input tokens** : ce que tu envoies
- **Output tokens** : ce que l'IA génère
- **Coûts** : varie par modèle (Claude 3.5 Sonnet, GPT-4, etc.)

**Exemple :**
```
Prompt : "Résume cet email en 1 phrase" (10 tokens)
Email : "Bonjour, j'ai un problème avec ma commande..." (100 tokens)
Total input : 110 tokens

Réponse : "Le client signale un problème de livraison" (10 tokens)

Coûts Claude 3.5 Sonnet :
- Input : 110 × $0.0008 = $0.088
- Output : 10 × $0.0024 = $0.024
- Total : $0.112 par appel
```

**Prompt Claude Code :**
```
Compare les coûts de Claude 3.5 Sonnet vs GPT-4 pour :
1. 1000 appels/mois
2. Prompt moyen 200 tokens
3. Réponse moyenne 150 tokens

Lequel est moins cher pour ATTA ?
Que se passe-t-il si ATTA grandit à 10x ?
```

**Résultat attendu :** Clarté sur les coûts API.

### Jour 2 – Prompt engineering : structure
**Tâche :** Écrire des prompts reproductibles

**Structure d'un bon prompt :**
```
[RÔLE] : Tu es un [spécialiste du domaine]
[CONTEXTE] : [Situation/background]
[TÂCHE] : [Ce que tu dois faire]
[CONTRAINTES] : [Limites]
[EXEMPLES] : [Few-shot examples]
[FORMAT DE SORTIE] : [JSON / Markdown / etc.]
```

**Exemple pour ATTA :**
```
Rôle : Tu es un expert en vêtements et couture ATTA Africa.
Contexte : ATTA fabrique des vêtements uniques (vestes, pantalons, chemises).
Tâche : Génère une description de produit SEO à partir d'une image.
Contraintes : Max 150 mots, tonalité premium, pas de superlatives fausses.
Format : JSON { "title": "...", "description": "...", "seo_tags": [...] }
Exemple : [montrer un bon exemple]

---

Image : [image URL ou description]
Génère la fiche produit.
```

**Exercice :** Créer 3 prompts pour ATTA

```
Prompt 1 : Générer description produit
Prompt 2 : Classer une avis (positif/neutre/négatif)
Prompt 3 : Suggérer une couleur à partir d'une description client
```

**Prompt Claude Code :**
```
Crée 5 prompts robustes pour ATTA :

1. Description de produit à partir d'une image
2. Classification d'avis client (sentiment + thème)
3. Réponse à une question client (FAQ)
4. Suggestion de produit pour un client
5. Analyse de tendances (couleurs/sizes populaires)

Pour chaque :
- Structure (rôle, contexte, tâche, contraintes)
- Exemple d'input et output
- Format JSON imposé

Stock-les dans une librarie réutilisable.
```

**Résultat attendu :** 5 prompts professionnels documentés.

### Jour 3–4 – Appels API Claude/OpenAI
**Tâche :** Intégrer l'IA dans un script

**Exercice :** Appeler Claude API directement

```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Résume cet avis client en 1 phrase"}
    ]
  }'
```

**Prompt Claude Code :**
```
Crée-moi une fonction Node.js qui :

1. Prend un avis client en input
2. L'envoie à Claude API avec un prompt structuré
3. Récupère une réponse JSON
4. Retourne { "sentiment": "pos/neu/neg", "theme": "...", "summary": "..." }

Gère les erreurs (timeout, rate limit).
Utilise fetch() ou axios.

Commentes le code pour que je comprenne.
```

**Résultat attendu :** Script fonctionnel avec gestion d'erreur.

### Jour 5 – Intégration dans n8n
**Tâche :** Utiliser l'IA directement dans un workflow n8n

**n8n nodes IA :**
- « OpenAI » : GPT-3.5, GPT-4
- « Claude » : Claude API directe
- « AI : Summarize »
- « AI : Translate »

**Exercice :** Ajouter classification d'avis au workflow

```
Workflow 5 : Classify review (nouveau)

Trigger : NocoDB form (avis reçu)
  ↓
Set : extraire le texte de l'avis
  ↓
Claude node : classifier (sentiment + thème)
  ↓
NocoDB : mettre à jour la ligne avec sentiment
  ↓
Slack : notifier Anta si sentiment négatif
```

**Livrable :** Workflow avec node IA intégré et testé.

---

## 📅 Semaine 11 : Projets IA pour ATTA et cas d'usage génériques

### Jour 1–2 – Générateur de descriptions produit (IA)

**Cas d'usage :** ATTA a 50 produits sans description SEO. L'IA peut les générer.

**Workflow 6 : Generate product descriptions**

```
Trigger : NocoDB bulk action (sélectionner 10 produits)
  ↓
Loop : pour chaque produit
  ↓
Claude : générer description SEO
  ↓
NocoDB : remplir le champ description
  ↓
Log : nombre générées
```

**Input du prompt :**
- Nom produit
- Catégorie
- Matière
- Couleur
- Taille

**Output :** Description SEO + seo_tags

**Prompt Claude Code :**
```
Crée un workflow n8n qui génère des descriptions de produit.

Input : data de NocoDB
Output : description SEO + tags

Utilise Claude API avec ce prompt :
[voici le prompt structuré]

Ajoute rate limiting (pour ne pas brûler l'API).
```

**Résultat attendu :** 50 descriptions générées en quelques heures.

### Jour 3 – Classification d'avis & sentiment analysis

**Cas d'use :** ATTA reçoit 10–20 avis/mois. Classification automatique.

**Workflow 7 : Classify review sentiment**

```
Trigger : Review reçue (NocoDB form)
  ↓
Claude : classifier sentiment + thème
  ↓
NocoDB : remplir sentiment, theme, keywords
  ↓
Condition : if sentiment = négatif
  ↓
Slack : alerte Anta
  ↓
Email : demander détails au client
```

**Output JSON :**
```json
{
  "sentiment": "positive",
  "score": 0.92,
  "theme": "quality",
  "keywords": ["excellent", "delivery", "fit"],
  "action": "none"
}
```

**Livrable :** Workflow testé + résultats sur 5 avis réels.

### Jour 4–5 – Générateur de contenu social + réponses automatiques

**Cas d'use :** ATTA publie 2–3 fois/semaine. L'IA peut générer les brouillons.

**Workflow 8 : Generate social content**

```
Trigger : Schedule (2x/semaine)
  ↓
Query NocoDB : produit populaire du mois
  ↓
Claude : générer 3 posts Instagram + captions
  ↓
NocoDB : stocker en « draft_posts »
  ↓
Slack : notifier Anta pour review
```

**Workflow 9 : Reply to negative review**

```
Trigger : Review reçue avec sentiment < 0.5
  ↓
Claude : générer une réponse empathique
  ↓
NocoDB : stocker réponse suggérée
  ↓
Email : envoyer à Anta pour approval avant envoi
```

**Livrable :** 2 workflows générateurs de contenu.

---

## 📅 Semaine 12 : RAG simple & bibliothèque de prompts

### Jour 1–2 – RAG (Retrieval-Augmented Generation)

**Concept :** Donner à l'IA un contexte externe (documents, FAQ, charte) pour répondre juste.

**Cas d'use ATTA :**
- Client demande « Quelle taille me convient ? »
- L'IA accède à la FAQ ATTA + guide des tailles
- L'IA génère une réponse personnalisée

**Setup simple :**
```
1. Créer une table NocoDB « Knowledge Base »
   ├── FAQ items
   ├── Taille guide
   ├── Couleur description
   └── Care instructions

2. Workflow : email client
   ↓
   Récupérer la question
   ↓
   Query NocoDB : articles pertinents
   ↓
   Claude : générer réponse avec contexte
   ↓
   Envoyer réponse
```

**Prompt Claude Code :**
```
Crée un système RAG simple dans n8n :

1. Table NocoDB = « knowledge_base »
2. Quand un email arrive (Resend webhook)
3. Extraire la question
4. Chercher dans NocoDB les articles pertinents
5. Envoyer à Claude avec contexte
6. Claude génère une réponse

Montre-moi :
- Structure NocoDB
- Query n8n
- Prompt Claude avec contexte
```

**Résultat attendu :** RAG fonctionnel pour support client automatisé.

### Jour 3 – Bibliothèque de prompts réutilisables

**Tâche :** Documenter 20+ prompts pour ATTA et d'autres clients

**Livrable :** `projects/prompts-library/README.md`
```
# Prompt Library — 20+ prompts réutilisables

## 1. E-commerce
- Product description generator
- Review classifier (sentiment + theme)
- Size recommendation
- Color matching

## 2. Support client
- FAQ answerer (avec contexte)
- Complaint handler (empathy)
- Refund policy explainer

## 3. Content
- Social post generator
- Email subject line A/B
- Blog outline generator

## 4. Data
- Email classifier (category)
- Customer segment predictor
- Trend analyzer

[Chaque prompt avec structure complète + exemples]
```

**Format :**
```markdown
## Prompt : Product Description

**Rôle :** Spécialiste marketing e-commerce
**Entrée :** Nom, catégorie, matière, couleur, taille
**Sortie :** description JSON { title, description, seo_tags }
**Exemple :** [input + expected output]
**Coûts :** ~0.015$ par appel
**Risques :** Ne pas générer de fausses claims

[Prompt complet avec [RÔLE], [CONTEXTE], etc.]
```

**Livrable :** 20 prompts documentés + testés.

### Jour 4–5 – Documentation & validation Module 05

**Livrable final :**
```
projects/project-002-atta-africa/
├── MODULE-05-IA-INTEGRATION.md
│   ├── Prompts utilisés (5+)
│   ├── Workflows IA (Workflows 5–9)
│   ├── Coûts API estimés
│   └── Monitoring des erreurs IA
└── ../prompts-library/
    ├── README.md (20+ prompts)
    └── [1 fichier par prompt avec exemples]
```

**Validation :**
- [ ] 3+ workflows n8n utilisant l'IA
- [ ] 20+ prompts documentés
- [ ] Classification d'avis fonctionnelle
- [ ] Générateur de contenu testé
- [ ] Pas de hallucination sur données sensibles (prix, livraison)

---

## 🎯 Fin du Module 05 : Checkpoint

Tu as :
- ✅ Prompt engineering professionnel maîtrisé
- ✅ APIs Claude/OpenAI intégrées dans n8n
- ✅ 5+ workflows IA en production
- ✅ RAG simple pour support client
- ✅ Bibliothèque de 20+ prompts réutilisables
- ✅ Gestion des coûts API maîtrisée

**Prochaine étape :** Module 06 (Agents & chatbots) — 3 semaines

---

# MODULE 06 — Agents IA & Chatbots (Semaines 13–15)

## 🎯 Objectif
Construire un **chatbot 24/7 intelligent** pour ATTA (et réutilisable pour d'autres clients). C'est une compétence très vendue et ROI rapide.

## 📚 Compétences à acquérir
- ✅ Design de flux conversationnel
- ✅ RAG avancé (vrai embedding, vectorstore)
- ✅ Agents simples (donner des « outils » à l'IA)
- ✅ Intégration WhatsApp + site WordPress
- ✅ Mesure de performance (taux de résolution)

## 🛠️ Outils
- **n8n agents/AI**
- **Pinecone** ou **Supabase Vector** (vectorstore gratuit)
- **WhatsApp Business API**
- **Widget chat WordPress** (gratuit)
- **Claude/GPT-4**

---

## 📅 Semaine 13 : Conception + RAG avancé

### Jour 1–2 – Design du chatbot

**Questions clés :**
1. Quels sont les 3 problèmes les plus fréquents chez ATTA ?
   - Tailles/sélection (40%)
   - Livraison/suivi (35%)
   - Retours/garantie (20%)
   - Autres (5%)

2. Combien de questions uniques par jour ?
   - ATTA : ~5–10 questions/jour

3. Taux acceptable d'escalade humaine ?
   - < 20% des conversations doivent monter un humain

**Flux conversationnel simple :**
```
Client : « Quel taille pour femme 170cm ? »
  ↓
Chatbot : « Consultez notre guide des tailles. 
Pour femmes 168–180cm, nous recommandons taille L/XL. 
Votre produit actuel ? »
  ↓
Client : « Une veste »
  ↓
Chatbot : « Pour les vestes, taille M pour 170cm. 
Préférence ajustement normal ou oversize ? »
  ↓
Client : « Oversize »
  ↓
Chatbot : « Alors L sera parfait. 
Puis-je vous aider sur autre chose ? »
  ↓
Client : « Non merci »
  ↓
Chatbot : « Merci, bonne journée ! »
```

**Prompt Claude Code :**
```
Crée un flux conversationnel pour un chatbot e-commerce ATTA.

Topics : tailles, couleurs, livraison, retours, garantie.

Format : Markdown avec fluxdiagrams
- Happy path (client obtient réponse → heureux)
- Fallback path (client escalade → humain)
- Error path (chatbot ne comprend pas)
```

**Résultat attendu :** Diagramme du flux + prompts pour chaque branche.

### Jour 3–4 – RAG avancé avec embeddings

**Concept :** L'IA ne reçoit pas les documents en texte pur, mais une **représentation numérique** (embedding) qui capture le sens.

**Étapes :**
1. [ ] Créer une Knowledge Base (FAQ, guides ATTA)
2. [ ] Générer des embeddings (vecteurs) pour chaque doc
3. [ ] Quand un client pose une question :
   - Générer un embedding de la question
   - Chercher les N documents les plus similaires
   - Passer ces documents à Claude
   - Claude génère une réponse

**Setup avec Supabase Vector (gratuit):**
```sql
-- 1. Créer une table avec vectors
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding VECTOR(1536),  -- OpenAI embeddings
  metadata JSONB
);

-- 2. Créer un index pour les recherches rapides
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);
```

**Workflow n8n :**
```
Trigger : Webhook (client message)
  ↓
OpenAI : générer embedding de la question
  ↓
Supabase : recherche similaire (top 3 docs)
  ↓
Claude : générer réponse avec contexte
  ↓
Webhook : envoyer réponse au client
```

**Prompt Claude Code :**
```
Crée un système RAG complet avec embeddings :

1. Prépare 20 documents ATTA (FAQ, guides tailles, etc.)
2. Génère les embeddings OpenAI
3. Stocke dans Supabase Vector
4. Un workflow n8n :
   - Reçoit une question
   - Cherche les docs similaires
   - Génère une réponse

Code d'exemple pour chaque étape.
```

**Résultat attendu :** RAG avec embeddings fonctionnel.

### Jour 5 – Fallback vers humain

**Tâche :** Gérer les cas où le chatbot n'est pas sûr

**Règles :**
- Si score de confiance < 0.7 → escalader
- Si client demande explicitement humain → escalader
- Si erreur API → proposer email support

**Workflow : Escalade**
```
Chatbot détecte incertitude
  ↓
Créer un ticket Airtable/NocoDB
  ↓
Envoyer les détails à Anta via Slack
  ↓
Dire au client : « Un humain vous contactera dans 2h »
  ↓
Airtable record stocke la conversation pour context
```

**Livrable :** Workflow d'escalade sécurisé.

---

## 📅 Semaine 14 : Déploiement chatbot

### Jour 1–2 – Widget chat WordPress + WhatsApp

**Option A : Widget sur site ATTA**
- [ ] Installer un plugin WordPress (Crisp, Tawk, ou custom)
- [ ] Connecter à n8n webhook
- [ ] Tester dans le navigateur

**Option B : WhatsApp Business**
- [ ] Créer un compte WhatsApp Business (gratuit)
- [ ] Générer un token
- [ ] Intégrer dans n8n
- [ ] Tester en envoyant un message

**Prompt Claude Code :**
```
Crée une intégration WhatsApp pour n8n :

1. Setup WhatsApp Business API
2. Webhook n8n pour recevoir messages
3. Workflow qui :
   - Reçoit un message WhatsApp
   - Le traite (RAG + Claude)
   - Envoie la réponse

Inclus gestion d'erreur.
```

**Résultat attendu :** Chatbot accessible sur 2 canaux (site + WhatsApp).

### Jour 3 – Métriques & monitoring

**Tâche :** Mesurer la performance du chatbot

**Métriques :**
- Nombre de conversations/jour
- Taux de résolution (chatbot résout sans escalade)
- Taux de satisfaction (si on demande au client)
- Temps moyen de réponse
- Topics les plus fréquents

**Table NocoDB : ChatBot Metrics**
```
├── conversation_id
├── user_message
├── bot_response
├── was_escalated (bool)
├── satisfaction (1-5)
├── duration_seconds
├── topic (inferred)
└── date
```

**Dashboard NocoDB :**
```
- Conversations today
- Escalation rate (should be < 20%)
- Popular topics
- Average satisfaction
```

**Livrable :** Dashboard de métriques en NocoDB.

### Jour 4–5 – Formation & go-live

**Tâche :** Mettre le chatbot en production

**Checklist :**
- [ ] Tester 20+ questions variées
- [ ] Vérifier escalade fonctionne
- [ ] Former Anta sur modération
- [ ] Monitorer 24h après déploiement
- [ ] Optimiser si beaucoup d'erreurs

**Livrable :** Chatbot en production sur ATTA + doc d'utilisation.

---

## 📅 Semaine 15 : Projet portfolio « Assistant client IA »

**Tâche :** Réutiliser le chatbot ATTA pour créer un projet portfolio générique

**Livrable :** Document case study complet

```
projects/project-006-ai-customer-assistant/
├── CASE-STUDY.md
│   ├── Client : ATTA Africa
│   ├── Problème : 10+ questions/jour sans support
│   ├── Solution : Chatbot 24/7 IA + FAG
│   ├── Architecture
│   ├── Résultats
│   └── ROI (heure économisées, satisfaction)
├── CHATBOT-FLOWS.md
│   └── Tous les flux conversationnels
├── RAG-SETUP.md
│   └── Knowledge base + embeddings
├── MONITORING.md
│   └── Métriques et dashboards
└── DEPLOYMENT.md
    └── Guide complet pour d'autres clients
```

**Vidéo Loom :** Démo du chatbot (3 min)

---

## 🎯 Fin du Module 06 : Checkpoint

Tu as :
- ✅ Chatbot intelligent avec RAG
- ✅ Support 24/7 automatisé
- ✅ Intégration WhatsApp + site
- ✅ Métriques et monitoring
- ✅ Escalade sécurisée vers humains
- ✅ Cas study portfolio complet

**Prochaine étape :** Module 07 (CRM & stack business) — 2 semaines

---

# MODULE 07 — CRM & Stack Business (Semaines 16–17)

## 🎯 Objectif
Créer un **CRM léger automatisé** pour une PME. Airtable est l'outil parfait : gratuit, API, automatisations natives.

## 📚 Compétences à acquérir
- ✅ Modélisation de données (relations, lookups)
- ✅ Automatisations Airtable natives
- ✅ Google Sheets formules + scripts
- ✅ Email + WhatsApp automation
- ✅ Intégration avec n8n

## 🛠️ Outils
- **Airtable** (gratuit)
- **Google Sheets** (gratuit)
- **Zapier** ou **n8n** (déjà connus)
- **HubSpot** (CRM gratuit alternatif)

---

## 📅 Semaine 16 : Modélisation Airtable

### Jour 1–2 – Design des tables

**CRM léger = 5 tables principales :**
```
1. Contacts
   ├── Name, Email, Phone
   ├── Company, Job title
   ├── Lead source
   └── First contact date

2. Companies
   ├── Company name
   ├── Industry
   ├── Size
   └── Website

3. Deals
   ├── Deal name
   ├── Company (link)
   ├── Contact (link)
   ├── Amount
   ├── Stage (prospect → negotiation → won → lost)
   └── Expected close date

4. Tasks
   ├── Description
   ├── Assigned to
   ├── Due date
   ├── Priority
   └── Status

5. Communication Log
   ├── Contact (link)
   ├── Type (email, call, message)
   ├── Date
   ├── Summary
   └── Next action
```

**Relations :**
- Deals → Contacts (many-to-one)
- Deals → Companies (many-to-one)
- Tasks → Contacts / Deals (many-to-one)
- Communication Log → Contacts (many-to-one)

**Prompt Claude Code :**
```
Crée une base Airtable pour un CRM léger.

Tables : Contacts, Companies, Deals, Tasks, Comms Log.

Pour chaque table :
- Champs requis + types
- Relations + lookups
- Vues recommandées

Exporte le JSON ou donne-moi un template.
```

**Résultat attendu :** Base Airtable structurée correctement.

### Jour 3–4 – Automatisations Airtable

**Automatisations natives (Airtable Automations tab) :**

1. **Auto-assign tasks**
   - Trigger : nouveau Deal créé
   - Action : créer une Task « Follow-up » assignée au propriétaire du Deal

2. **Auto-update stage**
   - Trigger : 3 jours sans communication
   - Action : passer Deal de « prospect » à « cold »

3. **Auto-email sequence**
   - Trigger : Deal créé dans stage « prospect »
   - Action : envoyer email de bienvenue via Zapier

4. **Auto-log communication**
   - Trigger : email reçu de contact dans CRM
   - Action : créer une ligne dans Communication Log

**Livrable :** 4 automatisations Airtable configurées.

### Jour 5 – Vues et dashboards

**Vues Airtable à créer :**
```
Deals :
├── « Pipeline by Stage » (kanban)
├── « Deals closing this month » (table filtrée)
├── « Overdue tasks » (alert)
└── « Total value by company » (summary stats)

Contacts :
├── « Recent contacts » (derniers 14 jours)
├── « No communication for 30 days »
└── « VIP accounts »

Tasks :
├── « My tasks today »
├── « Overdue »
└── « By priority »
```

**Livrable :** 8+ vues Airtable organisées et filtrées.

---

## 📅 Semaine 17 : Intégration & automation complète

### Jour 1–2 – Intégration n8n

**Workflows à créer :**

**Workflow 10 : New lead → Airtable**
```
Trigger : Formulaire site WordPress
  ↓
n8n : parser les données
  ↓
Airtable : créer Contact
  ↓
Email : envoyer welcome email
```

**Workflow 11 : Deal closing in 7 days → Slack alert**
```
Trigger : Schedule daily
  ↓
Airtable : query deals closing in 7 days
  ↓
Loop : pour chaque deal
  ↓
Slack : notifier le propriétaire
```

**Workflow 12 : Closed deal → update contact**
```
Trigger : Deal update (stage = won)
  ↓
Airtable : mettre à jour Contact (add tag « customer »)
  ↓
CRM : ajouter au segment « customers »
  ↓
Email : envoyer email « merci client »
```

**Livrable :** 3 workflows d'intégration n8n ↔ Airtable.

### Jour 3–4 – Email automation

**Séquences à créer (via n8n + Resend) :**

1. **Welcome sequence** (nouveau contact)
   - J0 : « Bonjour, merci de nous contacter »
   - J2 : « Voici notre meilleur produit »
   - J5 : « Vous avez des questions ? »

2. **Nurture sequence** (prospect sans réponse)
   - J10 : « Voulez-vous un appel gratuit ? »
   - J20 : « Dernière offre spéciale »
   - J30 : « Au revoir »

**Prompt Claude Code :**
```
Crée 2 séquences email automatisées dans n8n :

1. Welcome (3 emails)
2. Nurture (3 emails)

Pour chaque email :
- Timing (J0, J2, J5 etc.)
- Subject line
- Body
- Condition pour continuer

Prêt pour Resend API.
```

**Résultat attendu :** Séquences email testées.

### Jour 5 – Documentation finale CRM

**Livrable :** `projects/project-007-crm-light/COMPLETE-CRM.md`
```
# CRM Léger Automatisé

## Architecture
- Airtable : base de données + vues
- n8n : automatisations
- Resend : email transactionnel

## Modèle de données
- 5 tables : Contacts, Companies, Deals, Tasks, Comms Log
- Relations : deals ↔ contacts, deals ↔ companies
- Vues : pipeline, aujourd'hui, surcharges

## Automatisations
- 4 Airtable natives
- 3 workflows n8n
- 2 séquences email

## Utilisation
- Télécharger template Airtable
- Configurer les webhooks n8n
- Déployer les workflows
- Monitorer via dashboards

## Coûts
- Airtable : gratuit
- n8n : 15€/mois (VPS)
- Resend : gratuit
**Total : 15€/mois**
```

---

## 🎯 Fin du Module 07 : Checkpoint

Tu as :
- ✅ CRM structuré pour PME
- ✅ Automatisations Airtable + n8n
- ✅ Séquences email complètes
- ✅ Dashboards et vues
- ✅ Réutilisable pour d'autres clients

---

# MODULE 08 — Stack rentable (Semaines 18–21)

## 🎯 Objectif
Ajouter les **modules bonus** qui transforment une mission ponctuelle en revenu récurrent.

### Topics principaux
1. **GoHighLevel (GHL)** — platform all-in-one (CRM + funnels + email + sms)
2. **Lead generation légale** — capture prospects + enrichissement IA + automation
3. **E-commerce automation** — panier abandonné, stock, avis
4. **Social media automation** — scheduling + repurposing + engagement

**Focus :** Pour chaque topic, créer 1 cas d'usage réel.

---

## 📅 Semaines 18–21 : 4 projets rentables

### Projet A : Machine à leads (lead gen B2B)

**Cas d'use :** PME B2B (service) cherche 20 prospects/mois.

**Workflows :**
```
1. Collecter prospects (LinkedIn, Google Maps, APIs)
2. Enrichir (IA : job title, email, phone)
3. Qualifier (IA : score lead sur 0-10)
4. Nurturer (email sequence)
5. Alerter (Slack quand lead hot)
6. Vendre (diriger vers vendeur)
```

**Coûts :** 2 000€ setup + 300€/mois maintenance
**ROI :** Si lead = 500€ moyen, besoin de 6 leads pour ROI (3 mois payback)
**Valeur pour client :** 20 leads = 10 000€ CA potentiel

**Livrable :** Case study complet avec workflow.

### Projet B : Chatbot support e-commerce (déjà fait avec ATTA, mais générique)

**Réutilisabilité :** Dupliquer le chatbot pour n'importe quel e-commerce (apparel, services, etc.)

**Adaptation :**
- Changer la Knowledge Base
- Adapter le RAG
- Ajouter des règles spécifiques

**Coûts :** 1 500€ setup (réutilise 60% du code ATTA)
**Revenu :** 300€/mois maintenance

**Livrable :** Template prêt à dupliquer + documentation.

### Projet C : Récupération paniers abandonnés

**Cas d'use :** E-commerce perd 30% du CA à cause des paniers abandonnés.

**Workflow :**
```
Trigger : Panier abandonné depuis 1h
  ↓
Attendre 4h
  ↓
Email 1 : « Vous aviez [items] dans votre panier »
  ↓
Attendre 24h
  ↓
Email 2 : « Dépêchez-vous, -10% si vous terminez »
  ↓
Attendre 48h
  ↓
Email 3 : « Dernière chance »
  ↓
Si acheté → remercier
Si pas acheté → déplacer vers newsletter (relancer plus tard)
```

**Impact réel :**
- E-commerce typique : 100 paniers/mois = 3 000€
- Taux abandon : 30% = 900€ perdu
- Si recovery rate 25% = 225€ récupérés/mois
- Investissement : 800€ → payback 3.5 mois

**Livrable :** Workflow complet + analytics.

### Projet D : GHL + funnel sales

**Cas d'use :** Agence marketing vendant du GHL à des clients

**GHL = all-in-one :** CRM + funnels (landing pages) + email + SMS + calendrier

**Avantage pour toi :** Créer des sous-comptes GHL pour clients → vendre l'accès → revenu récurrent

**Exemple de funnel pour client restauration :**
```
Ad (Google/Facebook)
  ↓
Landing page (GHL)
  ↓
Lead magnet (ebook « réserver facile »)
  ↓
Email sequence (5 emails)
  ↓
Calendar booking (table réservation)
  ↓
SMS reminder (J-1)
  ↓
Post-review automation
```

**Coûts à client :** GHL ~100€/mois + ton setup + maintenance
**Ton revenu :** 200–500€/mois par client

**Livrable :** Template funnel réutilisable pour 3 niches.

---

## 📅 Plan pour exécuter les 4 projets (Semaines 18–21)

| Semaine | Projet | Étape | Livrable |
|---------|--------|-------|----------|
| **18** | Lead Gen | Collecter 100 prospects, les enrichir | List Airtable + scores |
| **18** | Chatbot | Dupliquer ATTA pour autre client | Template + workflow |
| **19** | Panier abandonné | Setup emails + workflow | Campaign live |
| **19** | GHL | Créer 1 funnel exemple | Landing page + séquence |
| **20** | Lead Gen | Tester nurture sequence | Metrics (open rate, réponse) |
| **20** | Chatbot + GHL | Intégrer chatbot → GHL | Workflow n8n testé |
| **21** | Compilation | Rédiger 4 case studies | Portfolio: 4 nouveaux projets |

---

## 🎯 Fin du Module 08 : Checkpoint

Tu as :
- ✅ 4 projets rentables complètement réalisés
- ✅ 4+ cas studies portfolio
- ✅ Modèles réutilisables pour d'autres clients
- ✅ Expertise GHL + lead gen + e-commerce

**Prochaine étape :** Module 09 (Systèmes transversaux) — continu

---

# MODULE 09 — Systèmes transversaux (Continu, Semaines 22+)

## 🎯 Objectif
Arrêter de faire des projets isolés. **Concevoir des systèmes complets** où tous les outils parlent ensemble.

## Concept

Un **Business OS** (Operating System) = WordPress + CRM + IA + Automations formant UN système nerveux.

## Exemple : Business OS pour PME services (type agence)

```
CLIENT ACQUISITION

Google Ads / LinkedIn
  ↓
Landing page WordPress
  ↓
Lead form (email + phone)
  ↓
Airtable CRM (via webhook)
  ↓
Email nurture (Resend via n8n)
  ↓
Chatbot (répondre FAQ automatiquement)

↓↓↓

CONVERSION

Calendrier (Airtable)
  ↓
SMS rappel (n8n via Twilio)
  ↓
Appel découverte (30 min)
  ↓
Proposition (générée par IA)
  ↓
Signature (DocuSign ou simple email)

↓↓↓

DELIVERY

Slack team notifiée
  ↓
Projet créé dans Airtable
  ↓
Jalons et tâches automatiques (n8n)
  ↓
Client reçoit updates périodiques (email)
  ↓
Travail suivi sur NocoDB

↓↓↓

SUPPORT & FEEDBACK

Chatbot 24/7 (réponses automatiques)
  ↓
Escalade complexe → ticket Airtable
  ↓
Survey de satisfaction (email + form)
  ↓
Avis / testimonial (collecté, stock dans NocoDB)

↓↓↓

ANALYTICS

Tableau de bord Airtable/NocoDB :
- Leads par source
- Taux conversion (lead → client)
- Pipeline value
- Churn rate
- Client lifetime value
```

## Livrables du Module 09

**Réaliser au minimum 3 études de cas complètes :**

### Cas étude 1 : Business OS pour ATTA Africa (complètement réalisé)

```
projects/case-studies/atta-africa-business-os/

├── EXECUTIVE SUMMARY.md (1 page)
│   ├── Problème : Excel + outils déconnectés
│   ├── Solution : système unifié
│   ├── ROI : 159€/mois d'économie + 10h/mois gagnées
│   └── Payback : 19 mois

├── ARCHITECTURE-DIAGRAM.md
│   ├── Shopify ──→ n8n ──→ NocoDB
│   ├── NocoDB ──→ Resend (email)
│   ├── NocoDB ──→ Slack (alert)
│   └── Web dashboard (temps réel)

├── WORKFLOWS-DEPLOYED.md
│   ├── 1. Orders/Created (Shopify → NocoDB)
│   ├── 2. Confirm email (Resend)
│   ├── 3. Abandoned cart (schedule)
│   ├── 4. Review request (7j)
│   ├── 5. Review collect (form)
│   ├── 6. Sentiment analysis (IA)
│   ├── 7. Social content (IA) [optionnel]
│   └── 8. Trend analysis (monthly) [optionnel]

├── DATA-MODEL.md
│   └── Tables NocoDB + vues

├── MONITORING.md
│   └── KPIs, logs, alertes

└── DEPLOYMENT.md
    └── Checklist go-live + formation

**Résultat visuel :** 3 screenshots/vidéos :
1. Dashboard NocoDB (temps réel)
2. Workflow n8n (exemple)
3. Email reçu par client
```

### Cas étude 2 : Business OS pour PME B2B (service)

**Différence :** Lead gen + conversion + delivery.

```
projects/case-studies/pme-services-business-os/

├── EXECUTIVE SUMMARY.md
├── ACQUISITION-FUNNEL.md (lead → client)
├── CRM-COMPLETE.md (Airtable)
├── DELIVERY-WORKFLOW.md (gestion projet)
├── CHATBOT-SUPPORT.md
└── ANALYTICS-DASHBOARD.md
```

### Cas étude 3 : Business OS pour e-commerce

**Différence :** Stock, paiement, logistique.

```
projects/case-studies/ecommerce-business-os/

├── EXECUTIVE SUMMARY.md
├── INVENTORY-MANAGEMENT.md
├── PAYMENT-FULFILLMENT.md
├── CUSTOMER-RETENTION.md (panier abandonné, avis, relance)
└── METRICS.md (LTV, CAC, ROI marketing)
```

---

## Résultat final Module 09

**3 études de cas professionnelles** rédigées comme des **propositions consulting** :
- Utilisables pour présenter à d'autres clients
- Preuves de capacité à concevoir des systèmes complets
- Portfolio = ticket d'entrée pour entretiens à Dubaï

---

# 🎯 RECAP FINAL : Modules 02–09

## Timeline complète

| Mois | Module | Durée | Projets | Clients payants |
|------|--------|-------|---------|-----------------|
| **Mois 2** | 02 | 3 sem | WordPress optimisé | - |
| **Mois 2–3** | 03 | 2 sem | APIs Shopify → NocoDB | ATTA Phase 1 (1k€) |
| **Mois 3–4** | 04 | 4 sem | n8n complet (4 workflows) | ATTA Phase 2-3 (3k€) |
| **Mois 4–5** | 05 | 3 sem | IA + prompts (5+ workflows) | Revenu additionnel |
| **Mois 5–6** | 06 | 3 sem | Chatbot 24/7 | Nouveaux clients |
| **Mois 6–7** | 07 | 2 sem | CRM Airtable | PME B2B |
| **Mois 7–8** | 08 | 4 sem | Lead gen + 3 projets rentables | Multiple revenu |
| **Mois 8–9** | 09 | Continu | 3+ Business OS | Consulting senior |

## Résultats attendus à 9 mois

✅ **Portfolio :** 10+ projets détaillés (dont 3 Business OS)  
✅ **Revenus :** 3+ clients payants + 5+ retainers  
✅ **Compétences :** WordPress → IA → Automation → Consulting  
✅ **Position marché :** AI Automation Specialist crédible  
✅ **Prêt pour :** Postes à Dubaï + freelance autonome

---

## Comment utiliser ce roadmap

**Jour 1 :** Imprime ce document ou l'ajouter à Notion Studio.

**Chaque semaine :**
1. [ ] Identifie le module de la semaine
2. [ ] Lis la section correspondante
3. [ ] Ouvre GitHub + crée une branche `feature/module-XX`
4. [ ] Exécute les tâches jour par jour
5. [ ] Pousse les livrables sur GitHub
6. [ ] Documente dans Notion

**Chaque 3 semaines :** Valide le module complètement (checklist, portfolio project, documentation).

**Chaque mois :** Revois le roadmap — ajuste selon toi (clients réels vont changer les priorités).

---

**Bon courage ! Tu as tout ce qu'il faut pour réussir. 🚀**

