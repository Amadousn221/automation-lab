# BASE DE CONNAISSANCE
## AI Automation & WordPress Integration Specialist

| | |
|---|---|
| **Auteur** | Amadou |
| **Objectif** | Référence personnelle — révision des concepts |
| **Modules couverts** | Module 01 (Fondations) + Module 02 (WordPress & WooCommerce) |
| **Mis à jour** | 24 mai 2026 |

> Ce fichier est différent du `SUIVI-PROGRESSION.md`
> **SUIVI** = ce qu'on a FAIT (checklist) | **BASE-CONNAISSANCE** = ce qu'on a APPRIS (concepts)

---

## MODULE 01 — Fondations & Mindset

### Concept 1 : Le rôle d'AI Automation Specialist

**En une phrase :** Un Automation Specialist orchestre les systèmes entre eux. Il ne construit pas les outils, il les connecte intelligemment.

| Rôle | Analogie | Prix marché |
|---|---|---|
| Dev WordPress | Construit des bâtiments | 500–1 500$ |
| Automation Specialist | Construit les routes entre les bâtiments | 3 000–15 000$ |

---

### Concept 2 : La règle fondamentale — Processus avant outils

*Le piège du junior :* "Je connais n8n, qu'est-ce que j'automatise ?"

*La bonne approche :* "Quel processus est douloureux ? Je le cartographie, puis je choisis l'outil."

**Les 2 phases obligatoires :**

| Phase | Description |
|---|---|
| **PHASE 1 — ACTUEL** | Cartographier ce qui existe aujourd'hui — Déclencheur → Qui fait quoi ? → Où va l'info ? → Friction → Résultat négatif |
| **PHASE 2 — CIBLE** | Concevoir la solution automatisée — Même déclencheur → Système auto → Données centralisées → Zéro friction → ROI |

---

### Concept 3 : Vendre de la valeur, pas des heures

| Mauvais (junior) | Bon (consultant) |
|---|---|
| "Je facture 25$/h pour configurer n8n" | "Ce workflow vous fait gagner 3h/jour x 30 jours = 90h/mois. À 15$/h = 1 350$/mois récupérés. Mon prix : 2 000$ setup + 150$/mois. Payback : 2 mois." |

---

### Concept 4 : Sécurité réflexe — Les clés API

**Règle absolue :** Une clé API = jamais dans le code, jamais en clair, jamais partagée.

```
Clé API → Bitwarden (coffre sécurisé) → Variable d'environnement (.env)
Jamais dans un fichier GitHub | Jamais dans une capture d'écran
```

**Pourquoi c'est critique :** Si une clé API est exposée sur GitHub → des bots la volent en quelques secondes → accès à ton compte, factures en milliers d'euros.

---

## MODULE 02 — WordPress & WooCommerce

### Concept 5 : Les Webhooks — C'est quoi vraiment ?

**Définition simple :** Un webhook = "Préviens-moi automatiquement quand X se passe"

| Sans webhook | Avec webhook |
|---|---|
| Tu vérifies manuellement si une commande est arrivée. Comme appeler son ami toutes les heures : "T'as reçu un colis ?" | Dès qu'une commande est créée, WooCommerce t'envoie automatiquement les données. Comme un SMS instantané quand le colis arrive. |

**Le flux technique :**

```
Commande créée dans WooCommerce
  → WooCommerce envoie HTTP POST vers ton URL (webhook.site ou n8n)
  → Tu reçois les données en JSON
  → Tu fais ce que tu veux : email, WhatsApp, base de données, mise à jour stock
```

**Où configurer dans WooCommerce :** `WooCommerce → Réglages → Avancé → Crochets Web → Ajouter`

---

### Concept 6 : La Payload JSON — Les données reçues

La payload = le paquet de données envoyé par le webhook. C'est du JSON, un format structuré lisible par les machines ET les humains.

```json
{
  "id": 14149,
  "status": "pending",
  "total": "20600.00",
  "currency": "XOF",
  "payment_method": "cod",
  "billing": {
    "first_name": "Amadou",
    "email": "client@email.com",
    "phone": "77123456",
    "city": "Dakar"
  },
  "line_items": [
    {
      "name": "Fajitas EPICE",
      "quantity": 10,
      "total": "20600.00"
    }
  ]
}
```

| Champ JSON | Valeur exemple | Utilité en automation |
|---|---|---|
| `id` | 14149 | Référence unique de la commande |
| `status` | pending | `pending` = à traiter / `completed` = livré |
| `total` | 20600.00 | Montant → comptabilité |
| `billing.email` | client@email.com | Envoyer confirmation client |
| `billing.phone` | 77123456 | Envoyer WhatsApp au client |
| `shipping.address_1` | Dakar, Plateau | Informer le livreur |
| `line_items[].name` | Fajitas EPICE | Quel produit préparer ? |
| `needs_payment` | true | Paiement reçu ou non ? |

---

### Concept 7 : Ce qu'on fait avec une payload (les 5 automatisations)

| # | Automatisation | Champs utilisés | Résultat |
|---|---|---|---|
| 1 | Email client | `billing.email` + `order_number` + `total` | Confirmation en 3 secondes |
| 2 | WhatsApp livreur | `shipping.address_1` + `line_items` + `total` | Livreur notifié immédiatement |
| 3 | NocoDB / Airtable | Toute la payload | Dashboard commandes temps réel |
| 4 | Mise à jour stock | `line_items[].product_id` + `quantity` | Stock exact en permanence |
| 5 | Relance J+3 | `billing.email` + `date_created` | Fidélisation automatique |

---

### Concept 8 : PageSpeed — Performance Web

PageSpeed Insights = outil Google qui mesure la vitesse du site et son impact business.

| Métrique | Signification | Score vert |
|---|---|---|
| **FCP** | First Contentful Paint — temps avant que quelque chose apparaît | < 1.8s |
| **LCP** | Largest Contentful Paint — temps avant que le contenu principal charge | < 2.5s |
| **TBT** | Total Blocking Time — JavaScript qui bloque le rendu | < 200ms |
| **CLS** | Cumulative Layout Shift — stabilité visuelle | < 0.1 |
| **Speed Index** | Vitesse globale d'affichage | < 3.4s |

**Résultats audit Fraîs'n.shop :**

| Device | Score | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|
| Mobile | 55/100 🔴 | 9.5s 🔴 | 10.7s 🔴 | 80ms 🟢 | 0.073 🟢 |
| Desktop | 74/100 🟡 | 1.8s 🟢 | 2.3s 🟡 | 30ms 🟢 | 0.048 🟢 |
| Objectif | > 85/100 | < 1.8s | < 2.5s | < 200ms | < 0.1 |

**Impact business :** Chaque seconde gagnée = +5–8% de conversion. Score 55/100 = 40% des visiteurs mobiles partent avant 3 secondes.

---

### Concept 9 : La stack Low-Cost (cas ATTA Africa)

Les PME paient trop pour des outils SaaS quand des alternatives gratuites/open-source existent.

| Outil SaaS (payant) | Alternative open-source | Coût | Économie |
|---|---|---|---|
| Klaviyo (marketing automation) | n8n (self-hosted VPS) | 15€/mois | ~150€/mois |
| Airtable (base de données) | NocoDB (même VPS) | 0€ | ~10€/mois |
| Gmail/SMTP | Resend API | 0€ | ~30€/mois |
| Judge.me (avis) | Form Airtable custom | 0€ | ~39€/mois |
| **TOTAL** | **Stack open-source** | **15€/mois** | **174€/mois** |

**ROI pour ATTA Africa :** 189€/mois → 15€/mois = économie de 174€/mois = 2 088€/an
Investissement setup : 3 000€ | Payback : ~17 mois | Ensuite : 174€/mois économisés à perpétuité

---

## Outils Maîtrisés

| Outil | Usage | Niveau |
|---|---|---|
| GitHub | Versioning, portfolio | À l'aise |
| Claude Code | Génération fichiers/code | À l'aise |
| Bitwarden | Sécurité clés API | Configuré |
| Notion | Dashboard formation | Configuré |
| PageSpeed Insights | Audit performance | Compris |
| webhook.site | Test webhooks en temps réel | Utilisé |
| WooCommerce Webhooks | Configuration événements | Configuré |

---

## Ce qui vient — Modules suivants

| Module | Focus | Ce que j'apprendrai |
|---|---|---|
| 03 | APIs & Webhooks | HTTP (GET/POST/PUT), JSON, Postman, OAuth, premier script API |
| 04 | n8n Automation | Installer n8n sur VPS, workflows, connecter WooCommerce → NocoDB → Resend |
| 05 | IA appliquée | Prompt engineering, sorties JSON, intégration Claude API dans n8n |
| 06 | Agents IA | RAG basics, chatbot WhatsApp, support client 24/7 automatisé |

---

*Mis à jour : 24 mai 2026 — Modules 01 et 02 complétés — Prochain : Module 03 APIs*
